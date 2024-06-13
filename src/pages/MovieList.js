import  {useAxios}  from "../hooks/useAxios"
import { useEffect } from "react";
import { Card } from "../components";

export const MovieList = ({apiPath,title}) => {
  const { data: movies } = useAxios(apiPath);
  useEffect(()=>{
    document.title = `${title}/ Moviemate`
  })

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-evenly">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}
