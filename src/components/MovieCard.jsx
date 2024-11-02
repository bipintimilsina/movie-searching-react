/* eslint-disable react/prop-types */
import React from "react";

export default function MovieCard({ allMovieData, loading }) {
      // console.table(allMovieData);
  return(
  <> 



    {
      
    loading ? (
      // console.log("hi")
      <div className="flex justify-center">
        <img className="w-16 py-20" src="https://i.gifer.com/ZZ5H.gif" alt="" />
      </div>
    ) : (
      <div className="main flex flex-wrap px-4 lg-px-10">
        {
          // eslint-disable-next-line react/prop-types
          allMovieData.map((item) => {
             console.log('hi')
            return (
              <div key={item.imdbID} className=" child p-2 lg:w-1/4 sm:w-full">
                <div className=" sub_child bg-[#002e4b] p-3 rounded-2xl">
                  <img
                    className="w-full rounded-lg mb-2"
                    src={item.Poster}
                    alt="img"
                  />
                  <h2 className="text-white text-2xl font-bold">
                    {item.Title}
                  </h2>
                  <h2 className="text-white text-lg mb-2">{item.Year}</h2>
                </div>
              </div>
            );
          })
        }
      </div>
    )}
  {/* </>; */}
</>
  )
}
