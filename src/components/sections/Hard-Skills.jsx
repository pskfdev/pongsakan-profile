import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";

function HardSkills() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`./data/Skills.json`)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <Slide triggerOnce={true}>
      <section className="text-white">
        <h2 className="text-center text-under-line underline-offset-8 tracking-widest">
          HARD SKILLS
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center my-10 gap-5">
          {data &&
            data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center space-y-2 p-4 bg-zinc-800 cursor-pointer rounded-lg text-white shadow-xl transition ease-in-out duration-300 hover:hover:scale-110 hover:bg-blue-300 hover:shadow-blue-500/50 hover:font-semibold"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <p className="uppercase">{item.name}</p>
              </div>
            ))}
        </div>
      </section>
    </Slide>
  );
}

export default HardSkills;
