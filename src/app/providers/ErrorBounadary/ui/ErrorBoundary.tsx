import React, { ErrorInfo, Fragment, ReactNode, Suspense } from 'react';
import { PageError } from 'widgets/pageError';

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError (error: Error) {
    if (error) { return { hasError: true }; }
  }

  componentDidCatch (error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render () {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      )
    }

    return (
      <Fragment>
        {children}
      </Fragment>
    );
  }
}

export default ErrorBoundary;
