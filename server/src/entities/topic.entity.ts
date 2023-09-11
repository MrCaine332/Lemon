import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("topics")
export class Topic {
	@PrimaryGeneratedColumn()
	id: number

	@Column({
		type: "varchar",
		length: 63,
	})
	topicName: string
}