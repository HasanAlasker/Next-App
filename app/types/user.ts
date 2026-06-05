export interface User {
  id: number;
  name: string;
  email:string
  followers?: number
  isActive?: boolean
  createdAt?: Date
}