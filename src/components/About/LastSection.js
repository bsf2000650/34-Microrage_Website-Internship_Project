import React from "react";
import { aboutMicrorageData } from "./AboutData";
import { FaCheck } from "react-icons/fa";

const LastSection = () => {
  return (
    <>
      {aboutMicrorageData.map((data) => {
        return (
          <>
            <section className="last-section">
              <div className="vision-div">
                <h2>Vision</h2>
                <div>
                  <p>{data.vision}</p>
                </div>
              </div>
              <div className="mission">
                <h2>Mission</h2>
                <p>{data.missionStatement}</p>
                <ul>
                  <FaCheck className="check-mark" />
                  <p>{data.missionPoints.point1}</p>
                  <br />
                  <FaCheck className="check-mark" />
                  <p>{data.missionPoints.point2}</p>
                  <br />
                  <FaCheck className="check-mark" />
                  <p>{data.missionPoints.point3}</p>
                  <br />
                  <FaCheck className="check-mark" />
                  <p>{data.missionPoints.point4}</p>
                  <br />
                  <FaCheck className="check-mark" />
                  <p>{data.missionPoints.point5}</p>
                  <br />
                </ul>
              </div>
            </section>
          </>
        );
      })}
    </>
  );
};

export default LastSection;
