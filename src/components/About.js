import React, { useState } from "react";
import styled from "styled-components";
import profile from "../img/profile.png";
import github from "../img/github.svg";
import facebook from "../img/facebook.svg";
import discord from "../img/discord.png";
import FlashMessage from "react-flash-message";

function About() {
  const [alert, setAlert] = useState(false);
  const onButtonClickHandler = () => {
    navigator.clipboard.writeText("Boltex#4834");
    setAlert(true);
    setTimeout(() => setAlert(false), 2000);
  };
  return (
    <AboutStyled>
      <div className="about-wrapper">
        <div className="about-left">
          <img className="img-profile" src={profile} alt="profile" />
          <h5>
            <q>
              Highly motivated, self-taught student seeking to launch a career
              building web applications and services.
            </q>
          </h5>
          <h6>
            <span>
              <a
                href="https://github.com/boltex33?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <img className="img-info" src={github} alt="github" />
              </a>
            </span>
            <span>
              <a
                href="https://www.facebook.com/LC.Andrei/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="img-info" src={facebook} alt="facebook" />
              </a>
            </span>
            <span className="clipboard">
              <button onClick={onButtonClickHandler}>
                <img src={discord} alt="discord" />
              </button>
              {alert && (
                <div className="flashdiv">
                  <FlashMessage duration={2000}>
                    <strong>Copied to clipboard</strong>
                  </FlashMessage>
                </div>
              )}
            </span>
          </h6>
        </div>
        <div className="about-right">
          <h2>Quick info</h2>
          <h5>- Age: 23</h5>
          <h5>- Location: Romania, Gorj</h5>
          <h2>Education</h2>
          <h5>
            - Faculty of Automation, Computers and Electronics from Craiova
          </h5>
          <h5>- Turceni Technological Highschool</h5>
          <h2>Objectives</h2>
          <h5>- Mastering React</h5>
        </div>
      </div>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  color: #000;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .about-wrapper {
    display: flex;
    color: #fff;
    min-height: 68vh;
    background-color: #3f3d56;
    width: 88%;
    border-radius: 4px;
    margin-top: 30px;
    margin-bottom: 30px;
    align-items: center;
    .about-left {
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      width: 50%;
      -webkit-align-items: center;
      align-items: center;
      h5 {
        font-size: 16px;
        width: 80%;
        margin-bottom: 30px;
        margin-top: 10px;
        font-weight: 300;
      }
      h6 {
        width: 80%;
        display: flex;
        align-items: center;
      }
      .img-profile {
        width: 35%;
        border-radius: 50%;
        margin-bottom: 25px;
        box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
      }
      .img-info {
        filter: invert(50%) sepia(100%) saturate(3352%) hue-rotate(180deg)
          brightness(95%) contrast(100%);
        width: 1.8rem;
        margin-right: 2rem;
      }
    }
    .about-right {
      border-left: 3px solid #002a39;
      h2 {
        font-size: 20px;
        margin-bottom: 20px;
        margin-top: 30px;
        width: 85%;
        font-weight: 300;
        margin-left: 10%;
      }
      h5 {
        font-size: 16px;
        text-align: left;
        width: 80%;
        font-weight: 300;
        margin-left: 15%;
      }
    }
  }
  .clipboard {
    display: flex;
    align-items: center;
    button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      filter: invert(50%) sepia(100%) saturate(3352%) hue-rotate(180deg)
        brightness(95%) contrast(100%);
      img {
        width: 2.7rem;
      }
    }
  }
  .flashdiv {
    position: relative; /* Stay in place */
    z-index: 1; /* Sit on top */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.5); /* Black w/ opacity */
    border-radius: 5px;
    padding: 5px;
    height: auto;
    font-size: 15px;
    color: #ffffff;
  }
`;

export default About;