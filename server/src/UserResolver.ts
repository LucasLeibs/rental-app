import {Resolver, Query, Mutation, registerEnumType, Arg} from 'type-graphql'

@Resolver()
export class UserResolver {
    @Query(() => String)
    hello() {
        return 'hi!'
    }
    @Mutation() 
    register(
        @Arg('email') email: string,
        @Arg('password') password: string
    ) {
        return
    }
}