import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm"
import {User} from "./user.entity";

@Entity("tokens")
export class Token {
	@PrimaryGeneratedColumn()
	id: number

	@ManyToOne(type => User)
	@JoinColumn({name: "userId", referencedColumnName: "id"})
	user: User

	@Column({
		type: "varchar",
		length: 45,
	})
	deviceId: string

	@Column("text")
	refreshToken: string

	@Column({
		type: "datetime",
	})
	createdAt: Date
}