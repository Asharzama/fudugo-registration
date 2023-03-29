import React, { useState } from "react";
import {
  RegistrationContainer,
  FormSection,
  ImageSection,
  Form,
  Flex,
  Submit,
  AccountAlready,
  Warning,
  Successful,
} from "../styles/Registration.css";

const Registration = () => {
  // Value State
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  // Alert State
  const [nameAlert, setNameAlert] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [phoneAlert, setPhoneAlert] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [accountCreation, setAccountCreation] = useState(false);

  // Functions
  const ObjectHandler = (field, event) => {
    setUserData({ ...userData, [field]: event.target.value });
  };

  const ConfirmPasswordHandler = (event) => {
    userData.password === event.target.value
      ? setConfirmPassword(false)
      : setConfirmPassword(true);
  };

  const SubmitHandler = () => {
    // Name Alert
    userData.firstname === "" || userData.lastname === ""
      ? setNameAlert(true)
      : setNameAlert(false);

    // Email Alert
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    regex.test(userData.email) ? setEmailAlert(false) : setEmailAlert(true);

    // Phone Alert
    userData.phone.length !== 10 ? setPhoneAlert(true) : setPhoneAlert(false);

    // Password Alert
    userData.password.length === 0
      ? setPasswordAlert(true)
      : setPasswordAlert(false);

    // Confirmation
    !(
      nameAlert &&
      emailAlert &&
      phoneAlert &&
      passwordAlert &&
      confirmPassword
    ) &&
    userData.firstname.length &&
    userData.lastname.length &&
    userData.email.length &&
    userData.phone.length &&
    userData.password.length
      ? setAccountCreation(true)
      : setAccountCreation(false);
  };

  return (
    <RegistrationContainer>
      {/* Background Image */}
      <ImageSection>
        <img src="./images/background.png" alt="background" />
      </ImageSection>

      {/* Form Section */}
      <FormSection>
        {!accountCreation ? (
          <Form>
            <h1>Create an account</h1>
            <Flex>
              <div>
                <label htmlFor="firstname">First name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  id="firstname"
                  onChange={(e) => ObjectHandler("firstname", e)}
                />
              </div>
              <div>
                <label htmlFor="Lastname">Last name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  id="Lastname"
                  onChange={(e) => ObjectHandler("lastname", e)}
                />
              </div>
            </Flex>
            {nameAlert && <Warning>Name Field should not be empty</Warning>}
            <label htmlFor="Email">Email or Username</label>
            <input
              type="email"
              placeholder="Enter Email or Username"
              id="Email"
              onChange={(e) => ObjectHandler("email", e)}
            />
            {emailAlert && <Warning>Enter valid Email</Warning>}
            <label htmlFor="Phone">Phone number</label>
            <input
              type="number"
              placeholder="Enter xxx-xxxx-xxx"
              id="Phone"
              onChange={(e) => ObjectHandler("phone", e)}
            />
            {phoneAlert && <Warning>Enter valid Phone number</Warning>}

            <label htmlFor="Password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              id="Password"
              onChange={(e) => ObjectHandler("password", e)}
            />
            {passwordAlert && (
              <Warning>Password field should not be Empty</Warning>
            )}

            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              id="ConfirmPassword"
              onChange={(e) => ConfirmPasswordHandler(e)}
            />
            {confirmPassword && <Warning>Password does not match</Warning>}

            <Flex>
              <Submit onClick={SubmitHandler}>Signup</Submit>
              <AccountAlready>Already have an account?</AccountAlready>
            </Flex>
          </Form>
        ) : (
          <Successful>
            Congratulations! <br /> Account Created Successfully
          </Successful>
        )}
      </FormSection>
    </RegistrationContainer>
  );
};

export default Registration;
