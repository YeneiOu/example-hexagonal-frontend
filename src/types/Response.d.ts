declare namespace API {
  export interface IResponse <T = any>{
    data: T;
    message: string;
    code: number;
  }
}
