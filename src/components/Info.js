import React from "react";
import styled from "styled-components";
import image from "../img/image.svg";

function Info() {
  return (
    <InfoStyled id="start">
      <div className="info-name">
        <div className="info-name2">
          <div className="info-name3">
            <h5>Hello, I am</h5>
            <h3>Lăcătușu</h3>
            <h4>Andrei - Cristian</h4>
          </div>
        </div>
      </div>
      <div className="info-img">
        <img className="tilt" src={image} alt="#" loading="lazy" />
      </div>
    </InfoStyled>
  );
}

const InfoStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 94vh;
  width: 66%;
  margin: 0 auto;
  @media (max-width: 1030px) {
    width: 90%;
  }
  .info-name {
    width: 50%;
    text-align: center;
    align-items: flex-start;
    justify-content: center;
    h5 {
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: 2px;
      display: block;
      text-align: center;
      margin: 0 7rem 1rem 0;
    }
    h3 {
      font-family: "IM Fell French Canon SC", serif;
      font-weight: 500;
      font-size: 70px;
      margin: 0 7rem 1rem 0;
    }
    h4 {
      font-family: "IM Fell French Canon SC", serif;
      font-weight: 500;
      font-size: 50px;
      margin: 0 7rem 1rem 0;
    }
  }
  .info-name2 {
    display: flex;
  }
  .info-img {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
    .tilt {
      width: 100%;
      height: 100%;
      transition: 1s;
    }
    .tilt:hover {
      transform: perspective(1000px) rotateX(5deg) rotateY(10deg)
        scale3d(1.2, 1.2, 1.2);
    }
  }
  @media screen and (max-width: 1030px) {
    .info-img {
      width: 100%;
      height: 50%;
    }
    .info-name {
      width: 100%;
      height: 30%;
    }
    .info-name2 {
      justify-content: center;
      margin-top: 5rem;
      align-items: center;
    }
    .info-name2 {
      justify-content: center;
      align-items: center;
      width: 100%;

      h3,
      h4,
      h5 {
        width: 100%;
      }
      h3 {
        font-size: 40px;
      }
      h4 {
        font-size: 35px;
      }
      h5 {
        font-size: 20px;
      }
    }
  }
`;

export default Info;
