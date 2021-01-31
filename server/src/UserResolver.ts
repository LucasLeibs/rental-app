import {Resolver, Query, Mutation, registerEnumType, Arg} from 'type-graphql'
import { hash } from 'bcryptjs'
import { User } from "./entity/User"
@Resolver()
export class UserResolver {
    @Query(() => String)
    hello() {
        return 'hi!'
    }
    @Query(() => [User])
    users() {
        return User.find()
    }

    @Mutation(() => Boolean) 
    async register(
        @Arg('firstName') firstName: string,
        @Arg('lastName') lastName: string,
        @Arg('username') username: string,
        @Arg('email') email: string,
        @Arg('password') password: string
        
    ) {
        const hashedPassword = await hash(password, 12)
        try {
        await User.insert({
            firstName,
            lastName,
            username,
            email, 
            password: hashedPassword
        });
    } catch (err) {
        console.log(err)
        return false
    }
        return true
    }
}