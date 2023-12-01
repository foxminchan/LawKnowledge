export type Column = {
  id: 'code' | 'name' | 'topic' | 'theme' | 'indexing';
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center' | 'justify';
  color?: '!text-japonica-400' | '!text-dark-moderate-blue-800';
  format?: (value: number) => string;
  font_weight?: '!font-medium';
};

export type Data = {
  code: string;
  name: string;
  topic: string;
  theme: string;
  indexing: string;
};
