import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { Slide } from "react-awesome-reveal";

function Resume() {
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
    <div className="w-full h-full py-10 bg-zinc-800">
      <Container>
        <div className="flex justify-between text-sky-600 mb-3">
          <h1>My Resume.</h1>
          <FiEdit size={42} className="my-auto" />
        </div>
        <hr className="border-b border-dashed border-zinc-600" />

        {/* Exp & EDU */}
        <Slide triggerOnce={true}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-11 text-neutral-200">
            <div>
              <h2 className="text-center text-under-line underline-offset-8 tracking-widest">
                EXPERIENCE
              </h2>
              <br />
              <div className="border-l-2 border-sky-600 my-10">
                <p className="text-sm pl-2 text-zinc-400">2019</p>
                <div className="p-5">
                  <h3 className="uppercase">Technician and other</h3>
                  <p className="text-sm text-sky-600 font-semibold uppercase">
                    Future Lifestyle Co.,Ltd, Samut Prakan
                  </p>
                  <p>
                    My job is site survey, Install and configure smart home
                    devices(FIBARO), coding, support for using the device and
                    application, Manage claim devices, Performed miscellaneous
                    duties, which are work-related, as assigned.
                  </p>
                </div>
                <p className="text-sm pl-2 text-zinc-400">present</p>
              </div>
              <div className="border-l-2 border-sky-600 my-10">
                <p className="text-sm pl-2 text-zinc-400">Aug 2022</p>
                <div className="p-5">
                  <h3 className="uppercase">
                    website barber shop{" "}
                    <span className="text-sky-700">(front-end)</span>
                  </h3>
                  <a
                    href="https://website-barber.web.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-sky-600 font-semibold uppercase"
                  >
                    website barber shop
                  </a>
                  <p>
                    It is a project made as a result of practicing coding a
                    website using the React framework. Create UI and styled
                    layouts using the HTML, CSS, and JS Styled component. Create
                    local data in a json file and use the fetch API (JS) to
                    retrieve data from it. functions of the website: find a
                    hairstyle, view hairstyle details.
                  </p>
                </div>
                <p className="text-sm pl-2 text-zinc-400">Sept 2022</p>
              </div>
              <div className="border-l-2 border-sky-600 my-10">
                <p className="text-sm pl-2 text-zinc-400">Nov 2022</p>
                <div className="p-5">
                  <h3 className="uppercase">
                    website food zero{" "}
                    <span className="text-sky-700">(fullstack)</span>
                  </h3>
                  <a
                    href="https://food-zero.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-sky-600 font-semibold uppercase"
                  >
                    website food zero
                  </a>
                  <p>
                    It is a project made as a result of practicing coding a MERN
                    Stack website. using React to build the front-end. Create UI
                    and styled layouts using the Bootstrap library and Sass. Use
                    Express.js to build the backend. and use MongoDB as a
                    database. Use Axios to transfer data between the front-end
                    and back-end. All functions of the website: Login / Logout,
                    manage users, manage products, manage categories, manage
                    reservation, and manage blog.
                  </p>
                </div>
                <p className="text-sm pl-2 text-zinc-400">Dec 2022</p>
              </div>
            </div>

            <div>
              <h2 className="text-center text-under-line underline-offset-8 tracking-widest">
                EDUCATION
              </h2>
              <br />
              <div className="border-l-2 border-sky-600 my-10">
                <p className="text-sm pl-2 text-zinc-400">2012</p>
                <div className="p-5">
                  <h3>MATHEMATICS-SCIENCE</h3>
                  <p className="text-sm text-sky-600 font-semibold">
                    SAMUTPRAKAN SCHOOL, SAMUT PRAKAN
                  </p>
                  <p>
                    I participate in science exhibitions, and I do a project on
                    science. I am doing a project using water hyacinth to
                    convert into charcoal briquettes. to help reduce smoke and
                    air pollution.
                  </p>
                </div>
                <p className="text-sm pl-2 text-zinc-400">2015</p>
              </div>
              <div className="border-l-2 border-sky-600 my-10">
                <p className="text-sm pl-2 text-zinc-400">2015</p>
                <div className="p-5">
                  <h3>COMPUTER SCIENCE</h3>
                  <p className="text-sm text-sky-600 font-semibold">
                    RAJAMANGALA UNIVERSITY OF TECHNOLOGY THANYABURI, PATHUM
                    THANI
                  </p>
                  <p>
                    My final project is website development to promote Pimtha
                    stores. The product is processed bamboo. In the project, use
                    HTML, CSS, and Bootstrap to structure and format the layout.
                    Use PHP to create back-end, And use SQL as database. In the
                    project have a function login/logout, manage product by
                    category, create, update and delete product. I do the design
                    and the coding (front-end part).
                  </p>
                </div>
                <p className="text-sm pl-2 text-zinc-400">2018</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* Skills */}
        <Slide triggerOnce={true}>
          <div className="text-white">
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
          </div>
        </Slide>
      </Container>
    </div>
  );
}

export default Resume;
