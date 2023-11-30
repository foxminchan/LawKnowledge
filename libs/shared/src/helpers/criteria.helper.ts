import { SortBy } from '../@types/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsPositive, IsString, Max } from 'class-validator';

export class Criteria {
  @ApiProperty({ required: false, default: 1 })
  @IsNumber({}, { message: 'Số trang phải là số' })
  @IsPositive({ message: 'Số trang phải là số dương' })
  readonly page: number = 1;

  @ApiProperty({ required: false, default: 10 })
  @IsNumber({}, { message: 'Giới hạn phải là số' })
  @IsPositive({ message: 'Giới hạn phải là số dương' })
  @Max(50, { message: 'Giới hạn tối đa là 50' })
  readonly limit: number = 10;

  @ApiProperty({ enum: SortBy, required: false, default: SortBy.DESC })
  @IsEnum(SortBy, { message: 'Sắp xếp theo phải là ASC hoặc DESC' })
  sort: string = SortBy.DESC;

  @ApiProperty({ required: false })
  @IsString({ message: 'Sắp xếp theo phải là chuỗi' })
  orderBy?: string = '';

  get offset() {
    return (this.page - 1) * this.limit;
  }
}

export function constructQueryOptions(criteria: Criteria, queryOptions = {}) {
  const orderByClause = criteria.orderBy
    ? { [criteria.orderBy]: criteria.sort }
    : {};

  return Object.assign(queryOptions, {
    skip: criteria.offset,
    take: criteria.limit,
    orderBy: orderByClause,
  });
}
