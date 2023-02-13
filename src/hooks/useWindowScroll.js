import { useState, useCallback, useEffect } from 'react';

const useWindowScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const scrollHandler = useCallback(() => {
    const newState = { x: window.pageXOffset, y: window.pageYOffset};
    setState(newState);
  }, []);

  useEffect(() => { // 스크롤 상태 체크
    window.addEventListener('load', scrollHandler);
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('load', scrollHandler);
      window.removeEventListener('scroll', scrollHandler);
    }
  }, [state, scrollHandler]);

  return state;
};

export default useWindowScroll;