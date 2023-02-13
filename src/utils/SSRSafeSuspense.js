import useMounted from 'src/hooks/useMounted';
import React, { Suspense } from 'react';

const SSRSafeSuspense = (props) => {
  const isMounted = useMounted();

  if (isMounted) {
    return <Suspense {...props} />;
  }
  return <>{props.fallback}</>;
};

export default SSRSafeSuspense;
