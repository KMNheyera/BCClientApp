import { ICart } from "./cart";

export interface IPayment {
  UserId: string | null;
  Products: ICart[];
}
