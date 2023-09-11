import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm"
import {Recipe} from "./recipe.entity";

@Entity("steps")
export class Step {
	@PrimaryGeneratedColumn()
	id: number

	@ManyToOne(type => Recipe, recipe => recipe.steps)
	@JoinColumn({name: 'recipeId', referencedColumnName: 'id'})
	recipe: Recipe;

	@Column({
		type: "varchar",
		length: 63,
	})
	stepName: string

	@Column({
		type: "text",
	})
	stepDescription: string
}