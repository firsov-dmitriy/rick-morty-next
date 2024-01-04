import apolloClient from "../apolloClient";
import {gql} from "@apollo/client";


export default async function getChars() {
   const client = apolloClient()
    return await client.query({
        query: gql`query {
  characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}`
    })
}