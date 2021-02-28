import gql from "graphql-tag";

export const GET_ALL_POSTS = gql`
  query GET_ALL_POSTS {
  posts(order_by: {created_at: desc}, limit: 10) {
    title
    id
    created_at
    updated_at
    description
  }
}

`;