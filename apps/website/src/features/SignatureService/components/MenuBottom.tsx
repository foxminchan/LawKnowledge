import clsx from 'clsx';
import { Grid, Container } from '@mui/material';
import { IconServiceInformation } from '@common/utils/image';
import { itemMenuBottom } from '@mocks/signatureService.data';
import { Link } from 'react-router-dom';

export default function MenuBottom() {
  return (
    <div className="h-40 px-0 py-10 mt-16 bg-white-smoke-100">
      <Container>
        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="justify-center"
        >
          {itemMenuBottom.map((item) => (
            <Grid item xs={5} sm={5} md={5} key={item.id}>
              <div
                className={clsx(
                  item.isActive
                    ? 'lg:!float-right md:!float-left'
                    : '!float-left'
                )}
              >
                <span className="table w-full cursor-pointer ">
                  <div className="table-cell w-24 align-middle">
                    <img
                      src={IconServiceInformation.Drum}
                      alt="icon"
                      loading="lazy"
                    />
                  </div>
                  <Link to={item.link} className="table-cell pl-5 text-lg align-middle text-dark-moderate-blue-800">
                    {item.name}
                  </Link>
                </span>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
