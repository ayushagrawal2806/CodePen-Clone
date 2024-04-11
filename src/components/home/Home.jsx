/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom";
import "./Home.css";
import { useContext } from "react";
import UserContext from "../../context/context";
const Home = () => {
  const { isLoggedIn, penData, userData, search } = useContext(UserContext);

  return !isLoggedIn ? (
    <div className="home-logout">
      <div className="left">
        <div className="logo-heading">
          <div className="logo">
            <svg
              viewBox="0 0 100 100"
              title="CodePen"
              fill="white"
              height={"56px"}
            >
              <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
            </svg>
          </div>
          <h1>The best place to build, test, and discover front-end code.</h1>
        </div>
        <p className="description">
          CodePen is a <strong>social development environment</strong> for
          front-end designers and developers. Build and deploy a website, show
          off your work, build test cases to learn and debug, and find
          inspiration.
        </p>
        <NavLink to={"/auth/signup"}>
          <button>Sign Up for Free</button>
        </NavLink>
      </div>
      <div className="right">
        <img
          src="https://cpwebassets.codepen.io/assets/packs/illu-editor-24091b7edc92fba11a2595fe767e6c2b.png"
          alt=""
        />
      </div>
      <div className="logo-small">
        <svg
          viewBox="0 0 138 26"
          fill="none"
          stroke="#fff"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          title="CodePen"
          className="small-logo"
        >
          <path d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
        </svg>
      </div>
    </div>
  ) : (
    <div className="home-login">
      <div className="work">
        <h1>Your Work</h1>
      </div>
      <div className="projects">
        {!penData.length ? (
          <div className="codeButton">
            <h2>You haven't created any Pens yet.</h2>
            <NavLink to={"/pen"}>
              <button>Go make one!</button>
            </NavLink>
          </div>
        ) : (
          <div className="data">
            {penData
              .filter((pen) => {
                return pen.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((Element, index) => (
                <Card
                  key={index}
                  project={Element}
                  photo={userData[0].photoURL}
                  userdata={userData}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

const Card = (props) => {
  let obj = props;
  return (
    <div className="card">
      <div className="outputdisplay">
        <iframe
          title="output"
          srcDoc={obj.project.output}
          style={{ border: "none", height: "100%", width: "100%" }}
        />
      </div>
      <div className="name-title-image">
        <div className="image">
          {obj.photo ? (
            <img src={obj.photo} alt="" />
          ) : (
            <p>{obj.userdata[0].name[0].toUpperCase()}</p>
          )}
        </div>
        <div className="titleName">
          <p className="projecttiltle">{obj.project.title}</p>
          <p className="projectname">{obj.project.name}</p>
        </div>
      </div>
    </div>
  );
};
