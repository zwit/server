import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Ideogram } from "./Ideogram";
import { Word } from "./Word";
import { Sentence } from "./Sentence";

@Entity()
export class Language {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("longtext")
    description: string;

    @OneToMany(type => Ideogram, ideogram => ideogram.language, {
      cascade: ["insert", "update"]
    })
    ideograms: Ideogram[];
  
    @OneToMany(type => Word, word => word.language, {
      cascade: ["insert", "update"]
    })
    words: Word[];
  
    @OneToMany(type => Sentence, sentence => sentence.language, {
      cascade: ["insert", "update"]
    })
    sentences: Sentence[];
}
