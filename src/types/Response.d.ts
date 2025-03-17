declare namespace API {
  export interface IResponse <T>{
    data: T;
    message: string;
    code: number;
  }
}
