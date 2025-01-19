import React, { useState, useEffect } from "react";
import { Container, Skeleton } from "@mui/material";
import { FiBriefcase } from "react-icons/fi";
import { Slide } from "react-awesome-reveal";

function Portfolio() {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState("all");
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const filterItem = (datafilter) => {
    const updateItems = data.filter((item) => {
      return item.tag == datafilter;
    });
    setFilter(updateItems);
    setActiveId(datafilter);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`./data/Data.json`)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
        setFilter(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`w-full py-10 bg-zinc-800 ${filter.length > 1 ? "h-full" : "h-screen"}`}>
      <Container>
        <div className="flex justify-between text-sky-600 mb-3">
          <h1 className="tracking-wider">Portfolio.</h1>
          <FiBriefcase size={42} className="my-auto" />
        </div>
        <hr className="border-b border-dashed border-zinc-600" />

        {/* //Navbar md:w-1/2 lg:w-1/3  rounded-full border border-dashed border-zinc-600 */}
        <div className="w-fit uppercase mx-auto my-11 rounded-full border border-dashed border-zinc-600 text-neutral-200">
          <ul className="flex justify-center">
            <li
              className={`list-none px-2 md:px-4 py-2 rounded-full cursor-pointer ${
                activeId === "all" ? "bg-sky-400" : ""
              }`}
              onClick={() => {
                setFilter(data);
                setActiveId("all");
              }}
            >
              all
            </li>
            <li
              className={`list-none px-2 md:px-4 py-2 rounded-full cursor-pointer ${
                activeId === "frontend" ? "bg-sky-400" : ""
              }`}
              onClick={() => filterItem("frontend")}
            >
              frontend
            </li>
            <li
              className={`list-none px-2 md:px-4 py-2 rounded-full cursor-pointer ${
                activeId === "fullstack" ? "bg-sky-400" : ""
              }`}
              onClick={() => filterItem("fullstack")}
            >
              fullstack
            </li>
            <li
              className={`list-none px-2 md:px-4 py-2 rounded-full cursor-pointer ${
                activeId === "design" ? "bg-sky-400" : ""
              }`}
              onClick={() => filterItem("design")}
            >
              design
            </li>
          </ul>
        </div>

        {/* //content */}
        <Slide triggerOnce={true}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 rounded-full mx-auto">
            {loading ? (
              <Skeleton
                variant="rectangular"
                className="w-full max-w-xs mx-auto"
              >
                <div style={{ paddingTop: "70%" }} />
              </Skeleton>
            ) : (
              <>
                {filter.map((item) => (
                  <div
                    className="w-full max-w-xs mx-auto hover:brightness-50 transition duration-300 rounded-lg overflow-hidden"
                    key={item.id}
                  >
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <img
                        src={item.thumbnail}
                        alt={`port1 ${item.id}`}
                        className="h-64 shadow-xl object-cover transition duration-300 hover:scale-125"
                      />
                    </a>
                  </div>
                ))}
              </>
            )}
          </div>
        </Slide>
      </Container>
    </div>
  );
}

export default Portfolio;
