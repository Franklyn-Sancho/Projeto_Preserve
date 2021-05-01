type Users = {
  name: string;
  email: string;
  password: string;
}

export default interface UserRepository {
  getUser(name: string, email: string, password: string): Promise<Users> | any;
  postUser(name: string, email: string, password: string): Promise<Users> | any;    
}