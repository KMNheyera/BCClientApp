export interface IUser {
  Id: string;
  FirstName: string;
  LastName: string;
  Email: string;
  CoffeesBought?: number;
  PointsEarned?: number;
  PointsSpent?: number;
  Credit?: number;
  LastEarnedDate?: Date;
  LastSpentDate?: Date;
}
