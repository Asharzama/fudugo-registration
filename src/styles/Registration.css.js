import styled from "styled-components";

export const RegistrationContainer = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
  @media (max-width: 1261px) {
    display: block;
  }
`;

export const ImageSection = styled.div`
  img {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    object-fit: cover;
    object-position: center center;
    height: 100%;
    width: 60vw;
    min-width: 52%;
    @media (max-width: 910px) {
      position: static;
      width: 100%;
    }
  }
`;

export const FormSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 5px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 0px 60px 60px 0px;
  min-height: 100vh;
  /* width: 875px; */
  width: 46vw;
  @media (max-width: 1261px) {
    width: 55vw;
  }
  @media (max-width: 910px) {
    width: 100vw;
  }
`;

export const Form = styled.div`
  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    color: #191e4f;
    margin: 34px;
  }
  label {
    display: block;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #454545;
    margin-bottom: 13px;
    margin-top: 15px;
  }
  input {
    padding: 19px 22px;
    background: #ffffff;
    border: 1px solid #cccccc;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    height: 60px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    outline: none;
    margin-bottom: 9px;
    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #979797;
    }
  }
  input[type="text"] {
    width: 15.6vw;
    @media (max-width: 1180px) {
      width: 20vw;
      min-width: 190px;
    }
    @media (max-width: 390px) {
      width: 90vw;
    }
  }
  input[type="email"],
  input[type="number"],
  input[type="password"] {
    width: 32.3vw;
    @media (max-width: 1180px) {
      width: 40vw;
      min-width: 370px;
    }
    @media (max-width: 390px) {
      width: 90vw;
      min-width: 300px;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 530px) {
    display: block;
  }
`;

export const Warning = styled.div`
  color: #f00;
  font-size: 13px;
`;

export const Submit = styled.button`
  display: block;
  margin-top: 19px;
  border: none;
  outline: none;
  background: #ff0091;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #ffffff;
  width: 220px;
  height: 60px;
  cursor: pointer;
`;

export const AccountAlready = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: #191e4f;
  cursor: pointer;
  &:hover {
    color: rgba(25, 30, 79, 0.7);
  }
`;

export const Successful = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  background-color: rgba(0, 255, 0, 0.4);
  padding: 10px;
`;
