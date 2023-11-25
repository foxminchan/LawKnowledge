export interface Id {
  id: string;
}

export interface Query {
  page: number;
  limit: number;
  sort: string;
  orderBy: string;
}
