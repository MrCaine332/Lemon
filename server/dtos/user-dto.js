module.exports = class UserDto {
    email
    username
    id
    isActivated
    role

    constructor(model) {
        this.email = model.email
        this.username = model.username
        this.id = model._id
        this.isActivated = model.isActivated
        this.role = model.role
    }
}