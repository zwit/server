import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Language } from "./Language";

@Entity()
export class Sentence {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    description: string;
  
    @Column()
    translation: string;

    @ManyToOne(type => Language, language => language.sentences, {
        cascade: ["insert", "update"]
    })
    language: Language;
}
