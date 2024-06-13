import { Link } from "react-router-dom";
import { useEffect } from "react";
import  PageNotFoundImg  from "../assets/404.gif";

export const PageNotFound = (title) => {
  useEffect(()=>{
    document.title = `${title}/ Moviemate`
  })
  return (
    <main className="flex flex-col">
      <div className="m-auto">
          <h1 className="text-white text-5xl">
            Page Not Found !!!!
          </h1>
        <img src={PageNotFoundImg} alt="404 page not found" className="h-auto w-auto my-10 rounded-md">
        </img>
        <Link
          to="/"
          className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Back to moviemate          
        </Link>
      </div>
    </main>
  );
};
