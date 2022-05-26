import styled from "styled-components";
import { createPortal } from "react-dom";
import React, {  useRef, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Popup = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  background: rgba(12, 12, 12, 0.9);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  position: relative;
  background-color: #121212;
  width: 500px;
  height: 500px;
  padding: 30px;
  border: solid 1px #fefefe;
  & * {
    margin: 10px;
  }
`;

const Pop = ({ closePop }) => {

  const formId = "auQtBhSs";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const recaptchaKey = "6LcbVh4gAAAAAAxOVnbvLl_ie-MbG8vKeeM6jvuu";
  const recaptchaRef = useRef();

  const initialFormState = {
    email: "",
    name: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState();
  const [recaptchaToken, setReCaptchaToken] = useState();

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        text: "Thanks, someone will be in touch shortly.",
      });
      setFormState(initialFormState);
      recaptchaRef.current.reset();
    } catch (error) {
      console.log(error);
      setMessage({
        text: "Sorry, there was a problem. Please try again or contact support.",
      });
    }
  };


  // keep this snippet for handling onChange in form inputs
  const updateFormControl = (event) => {
    const { id, value } = event.target;
    const key = id;
    const updatedFormState = { ...formState };
    updatedFormState[key] = value;
    setFormState(updatedFormState);
  };

  const updateRecaptchaToken = (token) => {
    setReCaptchaToken(token);
  };



  return createPortal(
    <Popup>
      <Box>
        <button
          onClick={() => closePop(false)}
          style={{ position: "absolute", right: "0" }}
        >
          X
        </button>
        {message && (
          <div>
            {message.text}
          </div>)}
        <h1>Leave me a Message</h1>
        <form onSubmit={submitForm}>
        <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={updateFormControl}
              type="text"
              id="name"
              value={formState.name}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={updateFormControl}
              type="email"
              id="email"
              value={formState.email}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              onChange={updateFormControl}
              id="message"
              value={formState.message}
            ></textarea>
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />
          <button
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </Box>
    </Popup>,
    document.getElementById("portal")
  );
};

export default Pop;
