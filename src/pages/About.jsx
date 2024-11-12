import React from "react";
import { Button, Container } from "@mui/material";
import { FiUser, FiServer, FiCode, FiMonitor, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

function About() {
  return (
    <div className="w-full h-full py-10 bg-zinc-800">
      <Container className="">
        {/* h-[25rem] mx-auto */}
        <div className="flex justify-between text-sky-600 mb-3">
          <h1>About me.</h1>
          <FiUser size={42} className="my-auto" />
        </div>
        <hr className="border-b border-dashed border-zinc-600" />

        <Slide triggerOnce={true}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-11">
            <div className="col-span-2 text-neutral-200">
              <h2>
                Technician IOT <span className="text-sky-600">&</span> Front-end
                Developer
              </h2>
              <div className="my-3">
                <p>
                  Hello, my name is Pongsakan Obromkin, and I currently work as
                  a technician at Future Lifestyle. The company is working on
                  smart homes. My job is site survey, Install and configure
                  smart home devices(FIBARO), Coding (Lua), Support for using
                  the device and application, Manage claim devices, Performed
                  miscellaneous duties, which are work-related as assigned.
                </p>
                <br />
                <p>
                  I'm interested in the position of front-end developer. I've
                  been learning to for 1 year for react, html, css, js, and
                  other. Currently have 2 projects. You can see the projects in
                  the portfolio section or on{" "}
                  <a
                    href="https://github.com/pskfdev"
                    target="_blank"
                    className="text-sky-600"
                  >
                    my GitHub.
                  </a>{" "}
                  I currently looking for the job in position Junior Front-end
                  Developer. If you read my profile and are interested in my
                  work, You can contact me by email or phone.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:mx-auto mx-0 text-neutral-200">
              <h2>Personal Information</h2>
              <div className="my-3 leading-8">
                <p>
                  <span className="text-under-line font-bold">Name</span> :
                  Pongsakan Obromkin
                </p>
                <p>
                  <span className="text-under-line font-bold">Age</span> : 28
                  Years
                </p>
                <p>
                  <span className="text-under-line font-bold">Residence</span> :
                  Samutprakan, Thailand
                </p>
                <p>
                  <span className="text-under-line font-bold">Address</span> :
                  467 M.5 Amphoe Muang
                </p>
                <p>
                  <span className="text-under-line font-bold">Email</span> :
                  pongsakan.o@hotmail.com
                </p>
                <p>
                  <span className="text-under-line font-bold">Phone</span> :
                  (+66) 96 884 5847
                </p>
              </div>
              <Button
                component={Link}
                className="w-fit"
                variant="outlined"
                to="/files/Resume-Eng.pdf"
                target="_blank"
                download
              >
                download resume
              </Button>
            </div>
          </div>
        </Slide>

        <Slide triggerOnce={true}>
          <div className="text-center text-neutral-200 my-20">
            <h2 className="text-under-line">SKILLS</h2>
            <br />
            <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-7 my-5">
              <div>
                <FiCode size={42} className="mx-auto text-sky-600" />
                <h4 className="py-2">Web Development</h4>
                <p>
                  Developed website using react framework, and I am learning
                  related content. I currently have two projects. You can see
                  the projects in the Portfolio section.
                </p>
              </div>
              <div>
                <FiEye size={42} className="mx-auto text-sky-600" />
                <h4 className="py-2">Web Design</h4>
                <p>
                  Have the knowledge and understanding of the website's design.
                  and I can use the Figma and Photoshop programs.
                </p>
              </div>
              <div>
                <FiMonitor size={42} className="mx-auto text-sky-600" />
                <h4 className="py-2">Responsive Design</h4>
                <p>
                  Have the knowledge and understanding of design layout to be
                  responsive and show display correctly at every breakpoint.
                </p>
              </div>
              <div>
                <FiServer size={42} className="mx-auto text-sky-600" />
                <h4 className="py-2">API</h4>
                <p>
                  I can coding to connect data from back-end, And use data from
                  the back-end to display on the front-end by using fetch api,
                  axios.
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </Container>
    </div>
  );
}

export default About;
