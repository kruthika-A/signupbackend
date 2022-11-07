import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    PrimaryColumn,
    CreateDateColumn,
  } from 'typeorm';

export class signup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}