import gql from "graphql-tag";

export const RANDOM_QUERY = gql `{
  advice
}`

export const FEED_QUERY = gql`{
  feed {
    id
    customAdvice
  }
}`;
