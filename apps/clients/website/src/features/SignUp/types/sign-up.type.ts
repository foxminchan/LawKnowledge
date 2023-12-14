export type SignUpResponse = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  card: string;
};

export type SignUpPayload = {
  user: Omit<SignUpResponse, 'id'>;
  password: string;
  repassword: string;
};
