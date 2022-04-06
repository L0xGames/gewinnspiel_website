import "./App.css";
import { Navbar, Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
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
    </>
  );
}

export default App;
