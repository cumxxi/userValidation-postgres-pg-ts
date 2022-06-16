import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";
import {IsUserAlreadyExist} from "./IsUserAlreadyExistConstraint"

@InputType()
export class RegisterInput {
@Field()
@Length(1, 255)
firstName:string

@Field()
@Length(1, 255)
lastName:string

@Field()
@IsEmail()
@IsUserAlreadyExist({message:"Bu mail adresi kullanımdadır"})
email:string

@Field()
renk:string

@Field()
password:string
}