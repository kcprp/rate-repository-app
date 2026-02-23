import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          ownerAvatarUrl
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const SIGN_IN = gql`
  mutation Authenticate($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
    accessToken
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;