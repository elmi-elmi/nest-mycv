import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @AfterInsert()
    logInsert(){
        console.log('User.Entity::AfterInsert - id: ', this.id)
    }

    @AfterUpdate()
    logUpdate(){
        console.log('User.Entity::logUpdate - id: ', this.id)
    }

    @AfterRemove()
    logRemove(){
        console.log('User.Entity::logRemove - id: ', this.id)
    }
}