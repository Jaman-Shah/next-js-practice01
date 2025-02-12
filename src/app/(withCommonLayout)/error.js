"use client";
const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1>Something went wrong....</h1>
      <h1>{error.message}</h1>
      <button onClick={() => reset()}></button>
    </div>
  );
};

export default ErrorPage;
