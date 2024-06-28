/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateNavigation = /* GraphQL */ `
  subscription OnCreateNavigation(
    $filter: ModelSubscriptionNavigationFilterInput
  ) {
    onCreateNavigation(filter: $filter) {
      id
      name
      href
      current
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateNavigation = /* GraphQL */ `
  subscription OnUpdateNavigation(
    $filter: ModelSubscriptionNavigationFilterInput
  ) {
    onUpdateNavigation(filter: $filter) {
      id
      name
      href
      current
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteNavigation = /* GraphQL */ `
  subscription OnDeleteNavigation(
    $filter: ModelSubscriptionNavigationFilterInput
  ) {
    onDeleteNavigation(filter: $filter) {
      id
      name
      href
      current
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService($filter: ModelSubscriptionServiceFilterInput) {
    onCreateService(filter: $filter) {
      id
      type
      price
      imagePath
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService($filter: ModelSubscriptionServiceFilterInput) {
    onUpdateService(filter: $filter) {
      id
      type
      price
      imagePath
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService($filter: ModelSubscriptionServiceFilterInput) {
    onDeleteService(filter: $filter) {
      id
      type
      price
      imagePath
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCandidate = /* GraphQL */ `
  subscription OnCreateCandidate(
    $filter: ModelSubscriptionCandidateFilterInput
  ) {
    onCreateCandidate(filter: $filter) {
      id
      name
      email
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCandidate = /* GraphQL */ `
  subscription OnUpdateCandidate(
    $filter: ModelSubscriptionCandidateFilterInput
  ) {
    onUpdateCandidate(filter: $filter) {
      id
      name
      email
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCandidate = /* GraphQL */ `
  subscription OnDeleteCandidate(
    $filter: ModelSubscriptionCandidateFilterInput
  ) {
    onDeleteCandidate(filter: $filter) {
      id
      name
      email
      message
      createdAt
      updatedAt
      __typename
    }
  }
`;
