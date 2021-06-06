import React from "react";
import profile from "../assets/yogesh.jpeg";
import csa from "../assets/aws-csa.png";
import nd from "../assets/react-nd.png";
import "semantic-ui-css/semantic.min.css";
const Home = () => {
  return (
    <main>
      <br />
      <br />
      <div className="img-container">
        <div className="img-box">
          <img src={profile} alt="yogesh kumar, ykumar, boskysoft" />
        </div>
      </div>
      <div className="intro">Hello, I'm Yogesh Kumar.</div>
      <div className="tagline">
        AWS Certified Solutions Architect | Serverless Enthusiast | Cloud
        Fanatic
      </div>
      {/* <div className="tagline">
        <a target="_blank" href="mailto:yogesh@boskysoft.com">
          Cloud Consultant
        </a>
      </div> */}
      <div className="about">
        I am AWS Certified Solutions Architect, having Masters Degree in
        Computer Applications and React Nanodegree from Udacity. I am passionate
        about building high performance, scalable, resilient software systems
        using opensource technologies and have good experience at making
        production ready applications. I{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://ibosky.blogspot.com/"
        >
          blog
        </a>{" "}
        my learnings sometimes. My most neglected hobbies are photography and
        music.
        <br />
        <br />
        Feel free to drop me a{" "}
        <a href="mailto:kumarryogeshh@gmail.com">
          message <span>&#128519;</span>
        </a>
        .
      </div>
      <br />
      <div className="cert-container">
        <div className="ui three column centered grid">
          <div className="column">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.credly.com/badges/d4ba2461-cb04-4250-86d1-8212803cee63/public_url"
            >
              <img
                class="ui medium image"
                src={csa}
                alt="yogesh kumar, aws solutions architect, ykumar, boskysoft"
              />
            </a>
          </div>

          <div className="column">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://confirm.udacity.com/Q5JQFAJ5"
            >
              <img
                class="ui medium image"
                src={nd}
                style={{ paddingTop: 10 }}
                alt="yogesh kumar, react nano degree, ykumar, boskysoft"
              />
            </a>
          </div>

          <div className="column"></div>
        </div>
      </div>
      <div className="icons-social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/yogeshhkumarr"
        >
          <i className="fab fa-linkedin" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kumarryogeshh"
        >
          <i className="fab fa-github" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://medium.com/@yogeshkumarr"
        >
          <i className="fab fa-medium" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/igoy_k"
        >
          <i className="fab fa-twitter" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://stackoverflow.com/users/1022003/yogeshhkumarr"
        >
          <i className="fab fa-stack-overflow" />
        </a>
      </div>
      <br />
    </main>
  );
};

export default Home;
