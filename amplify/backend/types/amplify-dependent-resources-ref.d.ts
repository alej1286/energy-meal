export type AmplifyDependentResourcesAttributes = {
  "api": {
    "contactFormApi": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "energymeal": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "energymeal4380fba7": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "contactHandlerFunction": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "s3energymealstorage8bfb8df4": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}