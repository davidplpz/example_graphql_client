import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation add(
    $name: String!
    $phone: String!
    $age: Int!
    $street: String!
    $city: String!
  ) {
    add(name: $name, phone: $phone, age: $age, street: $street, city: $city) {
      id
      name
      phone
      age
    }
  }
`;

export const UPDATE_PHONE = gql`
  mutation updatePhone($name: String!, $phone: String!) {
    updatePhone(name: $name, phone: $phone) {
      id
      name
      age
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(userName: $username, password: $password) {
      value
    }
  }
`;
