import React from "react";
import { Slide } from "react-awesome-reveal";

function SoftSkills() {
  return (
    <Slide triggerOnce={true}>
      <section className="text-white my-20">
        <h2 className="text-center text-under-line underline-offset-8 tracking-widest">
          SOFT SKILLS
        </h2>

        <div className="py-10 md:px-20 uppercase text-transparent shadow-xl rounded-lg bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600">
          <ul className="space-y-3">
            <li>
              <h2 className="tracking-widest">Creativity</h2>
            </li>
            <li>
              <h2 className="tracking-widest">Collaboration</h2>
            </li>
            <li>
              <h2 className="tracking-widest">Time Management</h2>
            </li>
            <li>
              <h2 className="tracking-widest">Problem Solving</h2>
            </li>
            <li>
              <h2 className="tracking-widest">Positive Attitude</h2>
            </li>
            <li>
              <h2 className="tracking-widest">Emotional quotient</h2>
            </li>
          </ul>
        </div>
      </section>
    </Slide>
  );
}

export default SoftSkills;
