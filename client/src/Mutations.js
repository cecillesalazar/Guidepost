import gql from "graphql-tag";

export const CREATE_ADVICE = gql`
mutation PostMutation($customAdvice: String!){
  post(customAdvice: $customAdvice) {
    id
    customAdvice
  }
}`;

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      token
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`
