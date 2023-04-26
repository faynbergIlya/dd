import { Component } from "react";
import { DefaultBoundary } from "./DefaultBoundary";
import {
  ErrorBoundaryType,
  ErrorBoundaryStateType,
} from "./ErrorBoundary.types";

export class ErrorBoundary extends Component<
  ErrorBoundaryType,
  ErrorBoundaryStateType
> {
  constructor(props: ErrorBoundaryType) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryStateType {
    console.log(error);
    return { isError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(errorInfo.componentStack.trim().split("\n"));
    console.log(error);
  }

  render(): React.ReactNode {
    const { isError } = this.state;
    const { children, fallbackComponent } = this.props;

    if (isError) {
      return fallbackComponent || <DefaultBoundary />;
    }

    return children;
  }
}
