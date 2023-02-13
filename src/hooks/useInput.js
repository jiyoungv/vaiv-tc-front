import { useState, useCallback } from 'react';

const useInput = (initial = null) => {
  const [value, setValue] = useState(initial);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;