export interface CreateUserInput { 
    name: string;
    email: string;
    password: string;
    role?: string;
    avatar?:string;
  }