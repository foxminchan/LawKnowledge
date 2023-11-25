import { Observable } from 'rxjs';

export interface User {
  id: string | null;
  name: string;
  email: string;
  phone: string;
  card: string;
  address: string;
  password: string;
}

export interface UserList {
  data: User[];
}

export interface Role {
  id: string | null;
  name: string;
}

export interface RoleList {
  data: Role[];
}

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface AuthSvcService {
  login(login: Login): Observable<LoginResponse>;
  register(user: User): Observable<User>;
  getUser(id: string): Observable<User>;
  getUsers(): Observable<UserList>;
  updateUser(user: User): Observable<User>;
  deleteUser(id: string): Observable<User>;
  getRoles(): Observable<RoleList>;
  getRole(id: string): Observable<Role>;
  createRole(role: Role): Observable<Role>;
  updateRole(role: Role): Observable<Role>;
  deleteRole(id: string): Observable<Role>;
}
