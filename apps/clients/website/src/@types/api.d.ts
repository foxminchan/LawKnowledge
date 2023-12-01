type Exception = {
  message?: string;
  error?: string;
  statusCode: number;
};

type PagingOptions = {
  Page: number;
  PageLimit: number;
  Sort?: SortType;
  OrderBy?: string;
};

enum SortType {
  Ascending = 'ASC',
  Descending = 'DESC',
}
