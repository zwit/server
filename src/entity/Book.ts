import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column("longtext")
    description: string;

    @Column("longtext")
    text: string;
}
