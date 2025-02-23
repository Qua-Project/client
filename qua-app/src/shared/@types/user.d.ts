declare namespace User {
  export interface User {
    userId: string;
    username: string
    email: string;
    userImage: string;
  }

  //DTO
  export type UserDto = User & Error.ApiErrorResponse;
}
