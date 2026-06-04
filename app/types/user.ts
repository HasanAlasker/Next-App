export interface User {
  id: number;
  name: string;
  email:string
  isActive?: boolean
  createdAt?: Date
  followers?: number
}