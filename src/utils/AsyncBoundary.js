import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import SSRSafeSuspense from './SSRSafeSuspense';

const AsyncBoundary = ({ pendingFallback, rejectedFallback, children, ...errorBoundaryProps }) => (
  <ErrorBoundary renderFallback={rejectedFallback} {...errorBoundaryProps}>
    <SSRSafeSuspense fallback={pendingFallback}>{children}</SSRSafeSuspense>
  </ErrorBoundary>
);
export default AsyncBoundary;
