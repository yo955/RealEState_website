import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const ProtectedComponent = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      router.push('/login'); 
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedComponent;
