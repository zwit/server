import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Language } from "./Language";

@Entity()
export class Ideogram {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    description: string;

    @Column()
    translation: string;

    @ManyToOne(type => Language, language => language.ideograms, {
        cascade: ["insert", "update"]
    })
    language: Language;
}
