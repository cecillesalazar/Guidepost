import gql from "graphql-tag";

export const CREATE_ADVICE = gql`
mutation PostAdviceMutation($customAdvice: String!){
  postAdvice(customAdvice: $customAdvice) {
    id
    customAdvice
  }
}`;
