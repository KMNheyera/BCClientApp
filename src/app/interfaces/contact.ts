export interface IContact {
  contactId: number;
  name: string;
  surname: string;
  email: string;
  numClients: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  fullName: string;
}
