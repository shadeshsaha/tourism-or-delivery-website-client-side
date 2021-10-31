import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { useHistory } from "react-router-dom";
import useCourses from "../../hooks/useCourses.js";
import Bg from "./../../assets/images/bg.png";
import bgImage from "./../../assets/images/sectionBg.png";
import Course from "./../course/Course.js";

const Home = () => {
  const history = useHistory();
  const [courses] = useCourses();
  const featureCourses = courses.slice(0, 6);
  function GoServices() {
    history.push("/courses");
  }

  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-white mt-5 fw-bold">Explore Beautiful Places In Bangladesh</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-white fs-5">
                Tours | Travel | Guide
                </p>
              </Bounce>

              <Bounce>
                <Button
                  onClick={GoServices}
                  className="rounded-pill fs-5 py-2 px-4"
                  variant="primary"
                >
                  Explore
                </Button>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{ background: `url(${bgImage})`, backgroundAttachment: "fixed", }}
      >
        <Container className="py-5">
          <Slide left>
            <h2 className="text-center text-dark mb-2">Tour Packages</h2>
          </Slide>
          <Slide right>
            <p className="text-center text-dark fw-bold">
            A Great Collection Of Your Tour Packages. Enjoy Your Leisure By Visiting These Places
            </p>
          </Slide>
          <Row>
            {featureCourses?.map((course) => (
              <Course course={course} key={course.key}></Course>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
