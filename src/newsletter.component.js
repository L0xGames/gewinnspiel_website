import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div
      style={{
        background: "#efefef",
        borderRadius: 2,
        padding: 10,
        display: "inline-block",
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>Senden...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div style={{ color: "green" }}>Angemeldet!</div>
      )}
      <br />
      <input
        style={{
          fontSize: "200%",
          padding: 5,
          marginBottom: 3,
          fontFamily: "Courier New",
        }}
        ref={(node) => (email = node)}
        type="email"
        placeholder="Deine email"
      />
      <br />
      <button
        style={{
          fontSize: "150%",
          fontFamily: "Courier New",
          padding: 5,
          margin: 1,
        }}
        onClick={submit}
      >
        Anmelden
      </button>
    </div>
  );
};

export default function NewsletterComponent() {
  const [isEmailDone, setEmailDone] = useState(false);
  const url =
    "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e";
  return (
    <div>
      {isEmailDone ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h5 style={{ fontFamily: "Courier New" }}>
            Irgendwann in den nächsten 72h kannst du deine Lösung eingeben und
            erhälst deinen Code!
          </h5>
        </div>
      ) : (
        <div
          style={{ borderStyle: "solid", padding: 10, background: "#efefef" }}
        >
          <button
            style={{ marginLeft: 450, borderStyle: "none" }}
            onClick={() => setEmailDone(true)}
          >
            X
          </button>
          <h4 style={{ fontFamily: "Courier New" }}>
            Verpasse kein Gewinnspiel mehr!
          </h4>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => {
                  subscribe(formData);
                  setTimeout(() => {
                    setEmailDone(true);
                  }, 2000);
                }}
              />
            )}
          />
        </div>
      )}
    </div>
  );
}
