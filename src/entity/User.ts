import { Field, ID, ObjectType, Root } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity{
    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    firstName:string

    @Field()
    @Column()
    lastName:string

    @Field()
    @Column("text", {unique:true})
    email:string
    
    @Field()
    @Column()
    renk:string

    @Field()
    name(@Root() parent:User):String{
        return `${parent.firstName} ${parent.lastName}`
    }

    @Column()
    password:string
}
