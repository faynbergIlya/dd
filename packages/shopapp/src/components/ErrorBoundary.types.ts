import { PropsWithChildren } from "react";

export type ErrorBoundaryType = PropsWithChildren<{
  fallbackComponent?: React.ReactElement;
  fallbackCallback?: () => void;
}>;

export type ErrorBoundaryStateType = {
  isError: boolean;
};
