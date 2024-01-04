import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = () => {
    return new ApolloClient({
        ssrMode: true,
        uri: process.env.api,
        cache: new InMemoryCache()
    })
}

export default apolloClient