import { useLocation } from 'react-router-dom';

/*-----navbardaki linklerin renginin yasil qalmasi ucun bir hisse-----*/

const useActiveLink = (path) => {
  const location = useLocation();
  return location.pathname === path;
};

export default useActiveLink;
