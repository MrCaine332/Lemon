import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm"
import {User} from "./user.entity";
import {Ingredient} from "./ingredient.entity";
import {Step} from "./step.entity";
import {Topic} from "./topic.entity";

@Entity("recipes")
export class Recipe {
	@PrimaryGeneratedColumn()
	id: number

	@Column({
		type: "varchar",
		length: 63,
	})
	title: string

	@Column({
		type: "text",
	})
	description: string

	@Column("int")
	cookingTime: number

	@Column({
		type: "varchar",
		length: 63,
	})
	difficulty: string
	@OneToOne(type => Topic)
	@JoinColumn({name: "topicId", referencedColumnName: "id"})
	topic: Topic

	@Column({
		type: "int",
		default: 0
	})
	commentsNo: number

	@Column({
		type: "int",
		default: 0
	})
	viewsNo: number

	@ManyToOne(type => User)
	@JoinColumn({name: "authorId", referencedColumnName: "id"})
	author: User

	@Column({
		type: "datetime",
	})
	createdAt: Date

	@Column({
		type: "datetime",
	})
	updatedAt: Date

	@Column({
		type: "varchar",
		length: 255,
	})
	previewImageLink: string

	@OneToMany(type => Ingredient, ingredient => ingredient.recipe)
	ingredients: Ingredient[];

	@OneToMany(type => Step, step => step.recipe)
	steps: Step[];
}