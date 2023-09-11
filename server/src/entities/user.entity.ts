import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import {Recipe} from "./recipe.entity";
import {Roles} from "../enums";

@Entity("users")
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({
		type: "varchar",
		length: 320,
		unique: true,
	})
	email: string

	@Column({
		type: "varchar",
		length: 63,
		unique: true
	})
	username: string

	@Column({
		type: "varchar",
		length: 63,
	})
	password: string

	@Column({
		type: "varchar",
		length: 63,
		nullable: true,
		default: null
	})
	firstName: string

	@Column({
		type: "varchar",
		length: 63,
		nullable: true,
		default: null
	})
	lastName: string

	@Column({
		type: "boolean",
		default: false
	})
	isActivated: boolean

	@Column({
		type: "varchar",
		length: 255,
	})
	activationLink: string

	@Column("varchar")
	role: Roles

	@Column({
		type: "datetime",
		nullable: true,
		default: null
	})
	lastLogin: Date

	@Column({
		type: "datetime",
		update: false
	})
	createdAt: Date

	@Column("datetime")
	updatedAt: Date

	@OneToMany(type => Recipe, recipe => recipe.author)
	recipes: Recipe[];
}