const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    name: {type: String, default: ""},
    surname: {type: String, default: ""},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    role: {type: String, default: "VIEWER"},
    lastLogin: {type: Date, default: new Date().toISOString()},
    createdAt: {type: Date, default: new Date().toISOString()},
    updatedAt: {type: Date, default: new Date().toISOString()},
})

module.exports = model("User", UserSchema)