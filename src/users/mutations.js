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
