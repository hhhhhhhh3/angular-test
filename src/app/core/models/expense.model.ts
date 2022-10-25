import { Friend } from "./friend.model";

export interface Expense {
  name: string;
  description: string;
  amount: number;
  date: Date;
  friend: Friend;
}
