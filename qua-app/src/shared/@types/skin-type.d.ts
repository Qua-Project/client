declare namespace SkinType {
  export interface SkinTypeDto {
    kinType: string;
    ubunScore: number;
    subunScore: number;
    mingamScore: number;
    skinConcern: string;
  }

  export interface CreateTypeRequestDto {
    skinType: string;
    ubunScore: number;
    subunScore: number;
    mingamScore: number;
    skinConcern: string;
  }

  export interface UpdateTypeRequestDto {
    skinType: string;
    ubunScore: number;
    subunScore: number;
    mingamScore: number;
    skinConcern: string;
  }

  export type SkinTypeDto = SkinType & Error.ApiErrorResponse;
}
