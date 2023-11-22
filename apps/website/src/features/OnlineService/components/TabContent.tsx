import {
  itemHeaderMinistries,
  itemTableMinistries1,
  itemTableMinistries2,
} from '@/mocks/onlineservice.data';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export default function TabContent() {
  const table1 = (
    <Table aria-label="simple table" className="!w-full border border-collapse">
      <TableHead>
        <TableRow>
          {itemHeaderMinistries.map((item) => (
            <TableCell className="text-center bg-white-smoke-200 !text-base">
              {item.title}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {itemTableMinistries1.map((item) => (
          <TableRow
            key={item.id}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
            }}
          >
            <TableCell component="th" scope="row" className="!text-base">
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
        {/* {itemTableCity1.map((item) => (
          <TableRow
            key={item.id}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
            }}
          >
            <TableCell component="th" scope="row" className="!text-base">
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
        ))} */}
      </TableBody>
    </Table>
  );
  const table2 = (
    <Table
      aria-label="simple table"
      className="!w-full border border-collapse !rounded"
    >
      <TableHead>
        <TableRow>
          {itemHeaderMinistries.map((item) => (
            <TableCell className="text-center bg-white-smoke-200 !text-base">
              {item.title}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {itemTableMinistries2.map((item) => (
          <TableRow
            key={item.id}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
            }}
          >
            <TableCell component="th" scope="row" className="!text-base">
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
        {/* {itemTableCity1.map((item) => (
          <TableRow
            key={item.id}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
            }}
          >
            <TableCell component="th" scope="row" className="!text-base">
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
        ))} */}
      </TableBody>
    </Table>
  );
  return (
    <main className="mt-5 mb-0 -ml-1 -mr-1 bg-transparent">
      <Grid container columnSpacing={{ xs: 0, md: 0 }}>
        <Grid container columnSpacing={{ xs: 1, md: 1 }}>
          <Grid item xs={12} sm={6}>
            <TableContainer>{table1}</TableContainer>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TableContainer>{table2}</TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}
