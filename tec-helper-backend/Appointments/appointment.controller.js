const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const status = require("../_helpers/status");

// routes

router.get("/", getAll);
router.post("/create", createSchema, createAppointment);
router.get("/cancel/:id", cancelAppointment);
router.get("/:id", getById);
router.get("/:userId", getByUserId);
router.put("/update/:id", updateSchema, update);
router.delete("/:id", _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
  appointmentService
    .getAll()
    .then((appointments) => res.json(appointments))
    .catch(next);
}

function getById(req, res, next) {
  appointmentService
    .getById(req.params.id)
    .then((appointment) => res.json(appointment))
    .catch(next);
}

function getByUserId(req, res, next) {
  appointmentService
    .getById(req.params.userId)
    .then((appointment) => res.json(appointment))
    .catch(next);
}

function createAppointment(req, res, next) {
  appointmentService
    .create(req.body)
    .then(() => res.json({ message: "Appointment created" }))
    .catch(next);
}

function cancelAppointment(req, res, next) {
  appointmentService
    .cancelAppointment(req.params.id)
    .then(() => res.json({ message: "Appointment cancelled" }))
    .catch(next);
}

function update(req, res, next) {
  appointmentService
    .update(req.params.id, req.body)
    .then(() => res.json({ message: "Appointment updated" }))
    .catch(next);
}

function _delete(req, res, next) {
  appointmentService
    .delete(req.params.id)
    .then(() => res.json({ message: "Appointment deleted" }))
    .catch(next);
}

// schema functions

function createSchema(req, res, next) {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    helper_id: Joi.string(),
    status: Joi.string()
      .valid(status.ACCEPTED, status.CLOSED, status.COMPLETED, status.PENDING)
      .required(),
    date_time: Joi.string().email().required(),
    duration: Joi.number().required(),
  });
  validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
    user_id: Joi.string().empty(""),
    helper_id: Joi.string().empty(""),
    status: Joi.string()
      .valid(status.ACCEPTED, status.CLOSED, status.COMPLETED, status.PENDING)
      .empty(""),
    date_time: Joi.string().isoDate().empty(""),
    duration: Joi.number().empty(0),
  });
  validateRequest(req, next, schema);
}
