import { User } from "../../entity/User";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcryptjs"

@Resolver()
export class RegisterResolver{
    @Query(()=> String)
    async merhaba(){
        return "Sadece merhaba"
    }

    @Mutation(()=>User)
    async register(
        @Arg("FirstName") firstName :string,
        @Arg("LastName") lastName:string,
        @Arg("Email") email :string,
        @Arg("Renk") renk :string,
        @Arg("Password") password :string,        
    ):Promise<User>{
        const hashedPassword = await bcrypt.hash(password, 12);
 
        const user = await User.create({
            firstName,
            lastName,
            email,
            renk,
            password:hashedPassword,
            
        }).save()
        return user
    }
    
}