import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { allSitemap } from '@utils/sitemap';

const usePathInfo = () => {
  const router = useRouter();

  const [pathInfo, setPathInfo] = useState({
    path: '',
    depth1: '',
    depth1Name: '',
    depth2: '',
    depth2Name: '',
  });

  useEffect(() => {
    let path = router?.pathname;
    let pathArray = path?.split('/');
    pathArray?.shift();

    let depth1 = pathArray[0];
    let depth2 = pathArray[1];

    let depth1Name = allSitemap?.filter(v => v.en === depth1)[0]?.kr;
    let depth2Name = allSitemap?.filter(v => v.en === depth1)[0]?.depth2?.filter(v => v.en === depth2)[0]?.kr;

    let newPathInfo = {
      path,
      depth1,
      depth1Name,
      depth2,
      depth2Name,
    };

    setPathInfo(newPathInfo);
  }, [router]);

  return pathInfo;
};

export default usePathInfo;