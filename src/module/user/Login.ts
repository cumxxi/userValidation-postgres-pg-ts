import { User } from "../../entity/User";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import bcrypt from "bcryptjs"
import { MyContext } from "../../types/MyContext";

@Resolver()
export class LoginResolver {
  @Mutation(() => User, {nullable :true})
  async login(
    @Arg("Email") email : string,
    @Arg("Password") password :string,
    @Ctx() ctx:MyContext
  ): Promise<User | null> {
    const user = await User.findOne({where:{email}})

    if(!user){
        return null
    }

    const valid = await bcrypt.compare(password, user.password)

    if(!valid){
        return null
    }

    ctx.req.session!.userId=user.id

    return user; 
  }
}
