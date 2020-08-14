import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm";
import { Event } from "./Event";

@Entity()
export class Activity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Event, event => event.activity, {
        cascade: ["insert", "update"]
    })
    events: Event[];

    @Column()
    title: string;

    @Column()
    type: string;

    @Column("longtext")
    description: string;
}
