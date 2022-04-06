import "./App.css";
import { Navbar, Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsletterComponent from "./newsletter.component";

function App() {
  const [name, setName] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [showCode, setShowCoden] = useState(false);
  const [Code, setCode] = useState("");
  const time_url = "https://worldtimeapi.org/api/timezone/Europe/Berlin";

  //SETUP
  const date1 = Math.floor(new Date("April 6, 2022 22:34:00").getTime() / 1000);
  const solution = "5";

  useEffect(() => {
    async function getData() {
      const result = await axios(time_url);
      const timeNow = result.data.unixtime;
      setCode("#" + timeNow);
      if (timeNow >= date1) {
        setIsHidden(false);
      }
    }
    const id = setInterval(getData, 20000);

    getData();
    return () => clearInterval(id);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === solution) {
      setShowCoden(true);
    } else {
      alert("Falsche Antwort");
    }
  };

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Kian</Navbar.Brand>
          <div>
            <SocialIcon
              style={{ margin: 3 }}
              url="https://www.instagram.com/kian_d/"
            />
            <SocialIcon
              style={{ margin: 3 }}
              url="https://www.tiktok.com/@kiandousti"
            />
            <SocialIcon
              style={{ margin: 3 }}
              url="https://www.youtube.com/channel/UCembxrqzbOcTOlm3NMZiz3A"
            />
          </div>
        </Container>
      </Navbar>
      {showCode ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div>
            <p style={{ fontFamily: "Courier New" }}>
              Schick mir diesen Code auf <b>Instagram: kian_d</b> um zu sehen ob
              du gewonnen hast!
            </p>
            <h4>{Code}</h4>
            <NewsletterComponent />
          </div>
        </div>
      ) : isHidden ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <NewsletterComponent />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <form onSubmit={handleSubmit}>
            <label>Gib die Lösung vom letzten Video ein:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input type="submit" />
          </form>
        </div>
      )}
    </>
  );
}

export default App;
