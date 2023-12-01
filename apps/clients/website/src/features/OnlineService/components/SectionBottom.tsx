import { Container, Grid } from '@mui/material';
import drums from '@assets/images/notification/trongdong.png';
import { Link } from 'react-router-dom';

export default function SectionBottom() {
  return (
    <section className="h-40 px-0 py-10 mt-16 bg-white-smoke-200">
      <Container>
        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="justify-center"
        >
          <Grid item xs={5} sm={5} md={5}>
            <div className="!float-left">
              <span className="table w-full cursor-pointer ">
                <div className="table-cell w-24 align-middle">
                  <img src={drums} alt="icon" loading="lazy" />
                </div>
                <Link
                  to={'/dieu-khoan-su-dung'}
                  className="table-cell pl-5 text-lg align-middle text-dark-moderate-blue-800"
                >
                  Điều khoản sử dụng
                </Link>
              </span>
            </div>
          </Grid>
          <Grid item xs={5} sm={5} md={5}>
            <div className="lg:!float-right md:!float-left">
              <span className="table w-full cursor-pointer ">
                <div className="table-cell w-24 align-middle">
                  <img src={drums} alt="icon" loading="lazy" />
                </div>
                <Link
                  to={'/huong-dan-su-dung'}
                  className="table-cell pl-5 text-lg align-middle text-dark-moderate-blue-800"
                >
                  Hướng dẫn sử dụng
                </Link>
              </span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
