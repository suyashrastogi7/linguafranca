import React from "react";

const About = () => {
  return (
    <div>
      <div className="h-full flex flex-col align-center justify-center p-9 mt-9">
        <h1 className="lg:text-5xl text-4xl font-semibold text-center">
          About Us
        </h1>
        <p className="xl:w-10/12 lg:w-10/12 w-full mx-auto lg:text-center text-justify mt-6 lg:text-xl text-lg mb-9">
          Lingua Franca is the official literary society of JSSATE Noida, known
          for actively organizing literary and creative events and workshops.
          The main aim is to enhance vocabulary and communication skills. It is
          a bilingual society that aims at shaping the personality of students.
          It also provides a platform to students for showcasing their skills in
          various aspects. The classification of the society into four
          departments i.e designing, management, editorial and management allows
          the students to choose their fields in accordance to their interest.
        </p>
      </div>
    </div>
  );
};

export default About;
