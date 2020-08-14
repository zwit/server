import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Activity } from "./Activity";

@Entity()
export class Event {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("longtext")
    text: string;

    @Column("longtext")
    background: string;

    @Column("longtext")
    innerText: string;

    @Column("longtext")
    type: string;

    @Column()
    color: string;

    @Column("datetime")
    date: string;

    @Column({ default: false }) 
    isDateBC: boolean;

    @Column("datetime")
    endDate: string;

    @Column({ default: false }) 
    isEndDateBC: boolean;

    @ManyToOne(type => Activity, activity => activity.events, {
        cascade: ["insert", "update"]
    })
    activity: Activity;
}
