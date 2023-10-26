import { FC } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: FC = () => {
  const error = useRouteError();

  return <div>{(error as Error)?.message}</div>;
};

export default ErrorPage;
