const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const Role = require("_helpers/role");
const userService = require("./user.service");

// routes

router.get("/", getAll);
router.get("/:id", getById);
router.post("/create", createSchema, create);
router.post("/login", login);
router.put("/:id", updateSchema, update);
router.delete("/:id", _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
  userService
    .getAll()
    .then((users) => res.json(users))
    .catch(next);
}

function getById(req, res, next) {
  userService
    .getById(req.params.id)
    .then((user) => res.json(user))
    .catch(next);
}

function create(req, res, next) {
  userService
    .create(req.body)
    .then(() => res.json({ message: "User created" }))
    .catch(next);
}

function login(req, res, next) {
  userService
    .login(req.body)
    .then((result) => {
      console.log(result);
      res.json({ message: "successfully logged in" });
    })
    .catch(next);
}

function update(req, res, next) {
  userService
    .update(req.params.id, req.body)
    .then(() => res.json({ message: "User updated" }))
    .catch(next);
}

function _delete(req, res, next) {
  userService
    .delete(req.params.id)
    .then(() => res.json({ message: "User deleted" }))
    .catch(next);
}

// schema functions

function createSchema(req, res, next) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    telephonenumber: Joi.string().required(),
    street: Joi.string().required(),
    number: Joi.string().required(),
    postcode: Joi.string().required(),
    place: Joi.string().required(),
    role: Joi.string().valid(Role.Admin, Role.User, Role.Freelancer).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
    country: Joi.string(),

  });
  validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
    firstName: Joi.string().empty(""),
    lastName: Joi.string().empty(""),
    telephonenumber: Joi.string().empty(""),
    street: Joi.string().empty(""),
    number: Joi.string().empty(""),
    postcode: Joi.string().empty(""),
    place: Joi.string().empty(""),
    role: Joi.string().valid(Role.Admin, Role.User, Role.Freelancer).empty(""),
    email: Joi.string().email().empty(""),
    password: Joi.string().min(6).empty(""),
    confirmPassword: Joi.string().valid(Joi.ref("password")).empty(""),
    country: Joi.string().empty(""),
  }).with("password", "confirmPassword");
  validateRequest(req, next, schema);
}
