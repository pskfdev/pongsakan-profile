import React from "react";
import { Button, Container, LinearProgress } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { Slide } from "react-awesome-reveal";

function Resume() {
  return (
    <div className="w-full h-full py-10 bg-zinc-800">
      <Container>
        <div className="flex justify-between text-sky-600 mb-3">
          <h1>My Resume.</h1>
          <FiEdit size={42} className="my-auto" />
        </div>
        <hr className="border-b border-dashed border-zinc-600" />

        {/* //content1 */}
        <Slide triggerOnce={true}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-11 text-neutral-200">
            <div>
              <h2 className="text-center text-under-line">EXPERIENCE</h2>
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
              <h2 className="text-center text-under-line">EDUCATION</h2>
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

        {/* //content2 */}
        <Slide triggerOnce={true}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-neutral-200">
            <div className="">
              <h2 className="text-center text-under-line">HARD SKILLS</h2>
              <br />
              <p className="mb-2">HTML</p>
              <div className="flex items-center w-full">
                <div className="w-full mr-2">
                  <LinearProgress
                    className="h-4 rounded-md"
                    value={90}
                    variant="determinate"
                  />
                </div>
                <div className="w-fit">
                  <p className="">90%</p>
                </div>
              </div>

              <p className="mb-2 mt-4">
                CSS{" "}
                <span className="text-sm text-zinc-400">
                  (Sass, Bootstrap, Tailwind, Mui)
                </span>
              </p>
              <div className="flex items-center w-full">
                <div className="w-full mr-2">
                  <LinearProgress
                    className="h-4 rounded-md"
                    value={90}
                    variant="determinate"
                  />
                </div>
                <div className="w-fit">
                  <p className="">90%</p>
                </div>
              </div>

              <p className="mb-2 mt-4">
                JS{" "}
                <span className="text-sm text-zinc-400">
                  (ES6, Jquery, Ajax)
                </span>
              </p>
              <div className="flex items-center w-full">
                <div className="w-full mr-2">
                  <LinearProgress
                    className="h-4 rounded-md"
                    value={70}
                    variant="determinate"
                  />
                </div>
                <div className="w-fit">
                  <p className="">70%</p>
                </div>
              </div>

              <p className="mb-2 mt-4">
                REACT <span className="text-sm text-zinc-400">(Redux)</span>
              </p>
              <div className="flex items-center w-full">
                <div className="w-full mr-2">
                  <LinearProgress
                    className="h-4 rounded-md"
                    value={70}
                    variant="determinate"
                  />
                </div>
                <div className="w-fit">
                  <p className="">70%</p>
                </div>
              </div>

              <p className="mb-2 mt-4">
                API CALLS{" "}
                <span className="text-sm text-zinc-400">
                  (Fetch API, Axios)
                </span>
              </p>
              <div className="flex items-center w-full">
                <div className="w-full mr-2">
                  <LinearProgress
                    className="h-4 rounded-md"
                    value={70}
                    variant="determinate"
                  />
                </div>
                <div className="w-fit">
                  <p className="">70%</p>
                </div>
              </div>

              <p className="mb-2 mt-4">
                OTHER{" "}
                <span className="text-sm text-zinc-400">
                  (Git, Figma, Photoshop)
                </span>
              </p>
              <div className="flex items-center w-full">
                <div className="w-full mr-2">
                  <LinearProgress
                    className="h-4 rounded-md"
                    value={70}
                    variant="determinate"
                  />
                </div>
                <div className="w-fit">
                  <p className="">70%</p>
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="text-center text-under-line">SOFT SKILLS</h2>
              <div className="h-72 md:h-96 border-l-2 border-sky-600 my-10">
                <div className="pl-10 uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600">
                  <ul>
                    <li>
                      <h3 className="">Creativity</h3>
                    </li>
                    <li>
                      <h3>Collaboration</h3>
                    </li>
                    <li>
                      <h3>Time Management</h3>
                    </li>
                    <li>
                      <h3>Problem Solving</h3>
                    </li>
                    <li>
                      <h3>Positive Attitude</h3>
                    </li>
                    <li>
                      <h3>Emotional Intelligence</h3>
                    </li>
                    <li>
                      <h3>Flexibility and Adaptability</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </Container>
    </div>
  );
}

export default Resume;
