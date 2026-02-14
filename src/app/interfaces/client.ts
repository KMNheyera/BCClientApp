export interface IClient {
  clientId: number;
  name: string;
  clientCode: string;
  numContacts: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
