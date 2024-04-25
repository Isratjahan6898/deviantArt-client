import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
console.error(error);
    return (
        <div className="mt-[50px] md:mt-[100px] lg:mt-[200px]">
             <div id="error-page">
      <h1 className="text-center text-6xl mb-[20px]">Oops!</h1>
      <p className="text-center text-3xl mb-[20px]">Sorry, an unexpected error has occurred.</p>
      <p className="text-center text-3xl mb-[16px]">
        <i>{error.statusText || error.message}</i>
      </p>

  <div className="text-center">
  <button className="btn bg-lime-400 p-[20px] text-center font-bold text-white"> <Link to='/'>go Home</Link></button>
  </div>
    </div>
        </div>
    );
};

export default ErrorPage;