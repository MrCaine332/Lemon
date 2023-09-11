import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm"
import {Recipe} from "./recipe.entity";

@Entity("ingredients")
export class Ingredient {
	@PrimaryGeneratedColumn()
	id: number

	@ManyToOne(type => Recipe, recipe => recipe.ingredients)
	@JoinColumn({name: 'recipeId', referencedColumnName: 'id'})
	recipe: Recipe;

	@Column({
		type: "varchar",
		length: 63,
	})
	ingredientName: string

	@Column({
		type: "varchar",
		length: 63,
	})
	ingredientAmount: string
}