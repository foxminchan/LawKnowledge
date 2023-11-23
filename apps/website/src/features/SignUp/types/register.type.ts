export type RegisterResponse = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  card: string;
};

export type RegisterPayload = {
  user: Omit<RegisterResponse, 'id'>;
  password: string;
};
