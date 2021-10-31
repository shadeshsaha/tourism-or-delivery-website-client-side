import React from "react";
import { Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import useCourses from "../../hooks/useCourses.js";
import Course from "../course/Course.js";
import bgImage from "./../../assets/images/destinationbg.jpg";

const Courses = () => {
  const [courses] = useCourses();
  return (
    <div
      style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed" }}
    >
      <Container className="py-5">
        <Zoom right cascade>
          <h2 className="text-center text-black fw-bold mb-0">Our All Tour Packages</h2>
        </Zoom>
        <Zoom left cascade>
          <p className="my-4 mt-2 text-center text-white fs-5">
            "Welcome to Ageless Holidays. Here you can find your favourite tour places easily. You can see the ratings, prices and everything regarding your tour places"
          </p>
        </Zoom>
        <Row>
          {courses?.map((course) => (
            <Course course={course} key={course.key}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
