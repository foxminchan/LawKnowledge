import {
  itemHeaderCity,
  itemHeaderMinistries,
  itemTab,
  itemTableCity1,
  itemTableCity2,
  itemTableMinistries1,
  itemTableMinistries2,
} from '@/mocks/onlineservice.data';
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import clsx from 'clsx';
import { useState } from 'react';

const indexTable = [{ id: 1 }, { id: 2 }];

export default function TabContent() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedTabIndex(index);
  };
  const tableMinistries = indexTable.map((item) => (
    <Grid key={item.id} item xs={12} sm={6}>
      {selectedTabIndex === 0 && (
        <TableContainer>
          <Table
            aria-label="simple table"
            className="!w-full border border-collapse"
          >
            <TableHead>
              <TableRow>
                {itemHeaderMinistries.map((item) => (
                  <TableCell
                    key={item.id}
                    className="text-center bg-white-smoke-200 !text-base"
                  >
                    {item.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {item.id === 1 &&
                itemTableMinistries1.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="!text-base"
                    >
                      {item.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="!text-base hover:!text-saffron-mango-600 cursor-pointer"
                    >
                      {item.value1}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="!text-base !text-saffron-mango-600 hover:!text-saffron-mango-700 cursor-pointer"
                    >
                      {item.value2}
                    </TableCell>
                  </TableRow>
                ))}
              {item.id === 2 &&
                itemTableMinistries2.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="!text-base"
                    >
                      {item.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="!text-base hover:!text-saffron-mango-600 cursor-pointer"
                    >
                      {item.value1}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="!text-base !text-saffron-mango-600 hover:!text-saffron-mango-700 cursor-pointer"
                    >
                      {item.value2}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Grid>
  ));
  const tableCity = indexTable.map((item) => (
    <Grid key={item.id} item xs={12} sm={6}>
      {selectedTabIndex === 1 && (
        <TableContainer>
          <Table
            aria-label="simple table"
            className="!w-full border border-collapse"
          >
            <TableHead>
              <TableRow>
                {itemHeaderCity.map((item) => (
                  <TableCell
                    key={item.id}
                    className="text-center bg-white-smoke-200 !text-base"
                  >
                    {item.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {item.id === 1 &&
                itemTableCity1.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="!text-base"
                    >
                      {item.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="!text-base hover:!text-saffron-mango-600 cursor-pointer"
                    >
                      {item.value1}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="!text-base !text-saffron-mango-600 hover:!text-saffron-mango-700 cursor-pointer"
                    >
                      {item.value2}
                    </TableCell>
                  </TableRow>
                ))}
              {item.id === 2 &&
                itemTableCity2.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="!text-base"
                    >
                      {item.name}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="!text-base hover:!text-saffron-mango-600 cursor-pointer"
                    >
                      {item.value1}
                    </TableCell>
                    <TableCell
                      align="center"
                      className="!text-base !text-saffron-mango-600 hover:!text-saffron-mango-700 cursor-pointer"
                    >
                      {item.value2}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Grid>
  ));
  return (
    <main className="mt-5 mb-0 -ml-1 -mr-1 bg-transparent">
      <div className="mt-10 rounded py-5 ">
        <Grid
          container
          columnSpacing={{ xs: 0, md: 0 }}
          className="flex justify-around"
        >
          {itemTab.map((item, index) => (
            <Grid key={item.id} item className="w-1/2 ">
              <div
                className={clsx(
                  ' border-b-4 border-b-japonica-400 rounded rounded-br-none rounded-bl-none',
                  selectedTabIndex === index ? '!bg-japonica-400' : '!bg-white '
                )}
              >
                <Button
                  size="large"
                  className={clsx(
                    '!bg-japonica-400 w-full h-[80px] !p-3  !border-b-4',
                    selectedTabIndex === index
                      ? '!bg-japonica-400'
                      : '!bg-white border-b-japonica-400'
                  )}
                  onClick={() => handleTabClick(index)}
                >
                  <span
                    className={clsx(
                      'text-2xl font-semibold',
                      selectedTabIndex === index
                        ? 'text-white'
                        : 'text-dark-moderate-blue-800'
                    )}
                  >
                    {item.title}
                  </span>
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <Grid container columnSpacing={{ xs: 0, md: 0 }}>
        <Grid container columnSpacing={{ xs: 1, md: 1 }}>
          {tableMinistries}
          {tableCity}
        </Grid>
      </Grid>
    </main>
  );
}
