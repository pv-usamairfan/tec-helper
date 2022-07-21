const bcrypt = require("bcryptjs");
const db = require("_helpers/db");

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await db.Appointment.findAll();
}

async function getById(id) {
  return await getAppointment(id);
}

async function create(params) {
  // validate
  if (await db.Appointment.findOne({ where: { email: params.email } })) {
    throw 'Email "' + params.email + '" is already registered';
  }

  const Appointment = new db.Appointment(params);

  // hash password
  Appointment.passwordHash = await bcrypt.hash(params.password, 10);

  // save Appointment
  await Appointment.save();
}
async function update(id, params) {
  const Appointment = await getAppointment(id);

  // validate
  const emailChanged = params.email && Appointment.email !== params.email;
  if (
    emailChanged &&
    (await db.Appointment.findOne({ where: { email: params.email } }))
  ) {
    throw 'Email "' + params.email + '" is already registered';
  }

  // hash password if it was entered
  if (params.password) {
    params.passwordHash = await bcrypt.hash(params.password, 10);
  }

  // copy params to Appointment and save
  Object.assign(Appointment, params);
  await Appointment.save();
}

async function _delete(id) {
  const Appointment = await getAppointment(id);
  await Appointment.destroy();
}

// helper functions

async function getAppointment(id) {
  const Appointment = await db.Appointment.findByPk(id);
  if (!Appointment) throw "Appointment not found";
  return Appointment;
}
