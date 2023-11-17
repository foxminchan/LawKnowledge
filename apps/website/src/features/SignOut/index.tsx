import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { StorageKeys } from '../../common/constants/keys';

export default function SignOut() {
  useEffect(() => {
    Cookies.remove(StorageKeys.ACCESS_TOKEN);
  }, []);

  return <Navigate to="/" replace />;
}
