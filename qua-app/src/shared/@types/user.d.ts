declare namespace User {
  export interface UserDto {
    userId: string;
    username: string
    email: string;
    userImage: string;
    birthDate: number[];
    userAge: string;
    gender: "MALE"|"FEMALE"|"OTHERS";
  }

  export interface UpdateMeRequestDto {
    username: string;
    birthDate: string;
    gender: "MALE"|"FEMALE"|"OTHERS";
  }

  export interface UpdateMeResponseDto {
    username: string;
    email: string;
    birthDate: number[];
    gender: "MALE"|"FEMALE"|"OTHERS";
  }

  export type UserDto = User & Error.ApiErrorResponse;
}
