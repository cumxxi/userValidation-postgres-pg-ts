import { User } from "../../entity/User";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcryptjs";
import { RegisterInput } from "./register/registerInput";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async merhaba() {
    return "Sadece merhaba";
  }

  @Mutation(() => User)
  async register(
    @Arg("data") { firstName, lastName, email, renk, password }: RegisterInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,
      renk,
      password: hashedPassword,
    }).save();
    return user;
  }
}
