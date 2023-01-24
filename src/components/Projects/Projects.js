import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import infografiscertificate from "../../Assets/certificate/certificate1.png";
import sib from "../../Assets/certificate/certificate2.png";
import googleit from "../../Assets/certificate/certificate3.png";
import deeplearning from "../../Assets/certificate/certificate4.png";
import aws from "../../Assets/certificate/certificate5.png";
import frontend from "../../Assets/certificate/certificate6.png";
import jetpackpro from "../../Assets/certificate/certificate7.png";
import androidpemula from "../../Assets/certificate/certificate8.png";
import fundamentalandroid from "../../Assets/certificate/certificate9.png";
import problemsolving from "../../Assets/certificate/certificate10.png";
import restapi from "../../Assets/certificate/certificate11.png";
import sql from "../../Assets/certificate/certificate12.png";
import aad1 from "../../Assets/projects/aad1.png";
import aad2 from "../../Assets/projects/aad2.png";
import aad3 from "../../Assets/projects/aad3.png";
import posterinfografis from "../../Assets/projects/poster-infografis.png";
import educovid from "../../Assets/projects/educovid.png";
import berandaeducovid from "../../Assets/projects/beranda-edu-covid.png";
import pencegahaneducovid from "../../Assets/projects/pencegahan-edu-covid.png";
import gemastik from "../../Assets/projects/gemastik.jpg";
import destinasiwisata from "../../Assets/projects/destinasi.png";
import githubuser from "../../Assets/projects/github-user.png";
import heroesday from "../../Assets/projects/heroes-day.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "#1c82ad" }}>
          Here are some of the projects on which I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={educovid}
              isBlog={false}
              title="Edu Covid (Splash Screen)"
              description="This application implements a networking API for data collecting for Covid-19 using the MVVM design pattern (model, view, viewmodel) to make it easier to maintain or update the source code."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={berandaeducovid}
              isBlog={false}
              title="Edu Covid (Home Screen)"
              description="Edu-Covid (Education Covid-19) is an application that includes Covid-19 information. There are interesting features in this application that help provide health education to the public in the form of prevention tips for dealing with Covid-19, a news page about Covid-19, a statistical feature for the total number of Covid cases, total recoveries, and total deaths in Indonesia, and finally a quiz about Covid-19 in the Edu-Covid application."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pencegahaneducovid}
              isBlog={false}
              title="Edu Covid (Prevention Screen)"
              description="Edu-Covid (Education Covid-19) is an application that includes Covid-19 information. There are interesting features in this application that help provide health education to the public in the form of prevention tips for dealing with Covid-19, a news page about Covid-19, a statistical feature for the total number of Covid cases, total recoveries, and total deaths in Indonesia, and finally a quiz about Covid-19 in the Edu-Covid application."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aad1}
              isBlog={false}
              title="To-Do App"
              description=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aad2}
              isBlog={false}
              title="Course Scheduler App"
              description=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aad3}
              isBlog={false}
              title="Habit Tracker App"
              description=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={destinasiwisata}
              isBlog={false}
              title="Travel Destinations App"
              description=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={githubuser}
              isBlog={false}
              title="GitHub App"
              description=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heroesday}
              isBlog={false}
              title="Design UI Heroes Day"
              description=""
            />
          </Col>

          <h1 className="project-heading">
            Professional <strong className="blue">Certificates </strong>
          </h1>
          <p style={{ color: "#1c82ad" }}>
            Here are some of the certificates on which I've obtained.
          </p>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fundamentalandroid}
              isBlog={false}
              title="Fundamentals of Android Applications"
              description="The course is designed for developers who wish to understand the essentials of developing Android apps, such as networking and databases, using worldwide competence standards held by Google Developers Authorized Training Partners. Students will be able to design programs that can get data from Web API and save preferred data in a local database at the conclusion of the semester."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jetpackpro}
              isBlog={false}
              title="Android Jetpack Pro"
              description="This course is designed for Android Developers who wish to hone their abilities in creating apps using the Android Architecture Component. You may construct an application at the end of the class by implementing the Jetpack component on the Android Architecture Component."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sib}
              isBlog={false}
              title="Android Developer"
              description="This Android Application Developer Certified Independent Study is presented in order to provide high-quality talent in the area of Android application development that meets industry requirements. The learning method used is online learning, in which participants must directly apply the content they receive via projects and activities that must be performed to finish each topic."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frontend}
              isBlog={false}
              title="Beginner's Guide to Web Front-End Development"
              description="According to industry standards, this program is designed for a Front-End Web Developer who wishes to create a website with more functionality than merely information media. By the conclusion of the semester, students will be able to construct interactive front-end web apps with storage capabilities utilizing web storage."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={androidpemula}
              isBlog={false}
              title="Android for Novices"
              description="This course is designed for novices who wish to begin their career as an Android Developer by following Google's worldwide competence criteria. Students will be able to construct Android apps that show lists and detailed data by the conclusion of the semester."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aws}
              isBlog={false}
              title="Architecting on AWS"
              description="This course is designed for those who want to further their careers in cloud computing, such as becoming an AWS Solutions Architect using AWS' worldwide competence requirements. By the conclusion of the session, students will be able to construct a cloud architecture on AWS using AWS best practices."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={googleit}
              isBlog={false}
              title="Google IT Automation with Python"
              description="Analyze real-world IT problems and implement the appropriate strategies to solve those problems"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deeplearning}
              isBlog={false}
              title="DeepLearning.AI TensorFlow Developer"
              description="Best practices for TensorFlow, a popular open-source machine learning framework to train a neural network for a computer vision applications."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infografiscertificate}
              isBlog={false}
              title="Infographic Poster Competition"
              description="2nd Place Infographic Poster Competition 'Gerakan Masyarakat Hidup Sehat'"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              title="SQL (Intermediate)"
              description="It includes complex joins, unions, and sub-queries."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restapi}
              isBlog={false}
              title="Rest API (Intermediate)"
              description="It covers topics like getting data from an API and process using parameters or paging."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={problemsolving}
              isBlog={false}
              title="Problem Solving (Intermediate)"
              description="It covers topics of Data Structures (such as HashMaps, Stacks and Queues) and Algorithms (such as Optimal Solutions)."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemastik}
              isBlog={false}
              title="GEMASTIK XIV"
              description="GEMASTIK, or the National Student Exhibition in the Field of Information and Communication Technology, is a program of the Ministry of Education, Culture, Research, and Technology's National Achievement Center. This program aims to increase the competency of Indonesian students so that they may act as change agents in promoting ICT and its application, both during their studies and after they graduate. This year, GEMASTIK is being conducted for the 14th time with the subject 'ICT for Indonesia Rising Towards a Better Nation's Life'"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={posterinfografis}
              isBlog={false}
              title="Gerakan Masyarakat Hidup Sehat"
              description="GERMAS is a movement that seeks to foster a culture of healthy living while encouraging individuals to abandon harmful habits and behaviors. This GERMAS effort was followed by encouraging clean and healthy living habits as well as community support for infrastructure initiatives."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
