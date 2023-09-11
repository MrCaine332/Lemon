import {User} from "../entities/user.entity";

export class LoginUserDto {
    id
    email
    username
    firstName
    lastName
    isActivated
    activationLink
    role

    constructor(user: User) {
        this.id = user.id
        this.email = user.email
        this.username = user.username
        this.firstName = user.firstName
        this.lastName = user.lastName
        this.isActivated = user.isActivated
        this.activationLink = user.activationLink
        this.role = user.role
    }
}