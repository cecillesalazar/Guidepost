import gql from "graphql-tag";

export const CREATE_ADVICE = gql`
mutation PostMutation($customAdvice: String!){
  post(customAdvice: $customAdvice) {
    id
    customAdvice
  }
}`;
