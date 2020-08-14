import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Language } from "./Language";

@Entity()
export class Word {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    description: string;

    @Column()
    translation: string;

    @ManyToOne(type => Language, language => language.words, {
        cascade: ["insert", "update"]
    })
    language: Language;
}
