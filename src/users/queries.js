import { gql } from "@apollo/client";

export const FIND_ALL = gql`
  query {
    findAll {
      id
      name
    }
  }
`;

export const FIND_BY_NAME = gql`
  query FindByName($name: String!) {
    findByName(name: $name) {
      id
      name
      phone
      age
    }
  }
`;
