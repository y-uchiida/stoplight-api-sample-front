/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/users": {
    /**
     * Get User Info List 
     * @description get user list
     */
    get: operations["get-users-operation"];
  };
  "/api/users/{userId}": {
    /**
     * Get User Info by User ID 
     * @description Retrieve the information of the user with the matching user ID.
     */
    get: operations["get-users-userId"];
    /**
     * Update User Information 
     * @description Update the information of an existing user.
     */
    patch: operations["patch-users-userId"];
    parameters: {
        /** @description Id of an existing user. */
      path: {
        userId: number;
      };
    };
  };
  "/user": {
    /**
     * Create New User 
     * @description Create a new user.
     */
    post: operations["post-user"];
  };
  "/api/posts": {
    /**
     * Get users posts data 
     * @description Get Posts Data
     */
    get: operations["get-user-posts"];
  };
  "/api/posts/{postId}": {
    /**
     * Your GET endpoint 
     * @description Obtains the posting data for the specified ID
     */
    get: operations["get-posts-postId"];
    parameters: {
      path: {
        postId: string;
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** User */
    User: {
      /** @description Unique identifier for the given user. */
      id: number;
      firstName: string;
      lastName: string;
      /** Format: email */
      email: string;
      /**
       * Format: date 
       * @example 1997-10-31
       */
      dateOfBirth?: string;
      /** @description Set to true if the user's email has been verified. */
      emailVerified: boolean;
      /**
       * Format: date 
       * @description The date that the user was created.
       */
      createDate?: string;
    };
    Post: external["Post.yaml"];
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export interface external {

  "Post.yaml": {
    id: string;
    title: string;
    content: string;
    user_id: number;
    created_at: string;
  }
}

export interface operations {

  "get-users-operation": {
    /**
     * Get User Info List 
     * @description get user list
     */
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["User"])[];
        };
      };
    };
  };
  "get-users-userId": {
    /**
     * Get User Info by User ID 
     * @description Retrieve the information of the user with the matching user ID.
     */
    responses: {
      /** @description User Found */
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description User Not Found */
      404: never;
    };
  };
  "patch-users-userId": {
    /**
     * Update User Information 
     * @description Update the information of an existing user.
     */
    /** @description Patch user properties to update. */
    requestBody?: {
      content: {
        "application/json": {
          firstName?: string;
          lastName?: string;
          /** @description If a new email is given, the user's email verified property will be set to false. */
          email?: string;
          dateOfBirth?: string;
        };
      };
    };
    responses: {
      /** @description User Updated */
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description User Not Found */
      404: never;
      /** @description Email Already Taken */
      409: never;
    };
  };
  "post-user": {
    /**
     * Create New User 
     * @description Create a new user.
     */
    /** @description Post the necessary fields for the API to create a new user. */
    requestBody?: {
      content: {
        "application/json": {
          firstName: string;
          lastName: string;
          email: string;
          /** Format: date */
          dateOfBirth: string;
        };
      };
    };
    responses: {
      /** @description User Created */
      200: {
        content: {
          "application/json": components["schemas"]["User"];
        };
      };
      /** @description Missing Required Information */
      400: never;
      /** @description Email Already Taken */
      409: never;
    };
  };
  "get-user-posts": {
    /**
     * Get users posts data 
     * @description Get Posts Data
     */
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (external["Post.yaml"])[];
        };
      };
    };
  };
  "get-posts-postId": {
    /**
     * Your GET endpoint 
     * @description Obtains the posting data for the specified ID
     */
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": external["Post.yaml"];
        };
      };
    };
  };
}
