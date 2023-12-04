export class FilterDto {
  operator:
    | 'And'
    | 'Or'
    | 'Equal'
    | 'Like'
    | 'NotEqual'
    | 'GreaterThan'
    | 'GreaterThanEqual'
    | 'LessThan'
    | 'LessThanEqual'
    | 'WithinGeoRange'
    | 'IsNull'
    | 'ContainsAny'
    | 'ContainsAll';
  path: string[];
  valueText: string;
}
