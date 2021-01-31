import { Field, ObjectType, Int } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { IsEmail } from "class-validator";

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;
    
    @Field()
    @Column()
    firstName: string;
    
    @Field()
    @Column()
    lastName: string;
    
    @Field()
    @Column()
    username: string;
    
    @Field()
    @Column()
    @IsEmail()
    email: string;
   
    @Column()
    password: string;
}
