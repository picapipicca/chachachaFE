import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    children,
    width,
    bg,
    margin,
    text,
    padding,
    font_size,
    _disabled,
    _onClick,
    is_circle,
  } = props;

  const styles = {
    
    width,
    bg,
    margin,
    padding,
    font_size,
  };

  if (is_circle) {
    return (
      <PlusBtn {...styles} onClick={_onClick}>
        {children}
      </PlusBtn>
    );
  }

  return (
    <Btn {...styles} disabled={_disabled} onClick={_onClick}>
      {text ? text: children}
    </Btn>
  );
};

Button.defaultProps = {
  text : false,
  color : "#212121",
  children: null,
  width: "100%",
  margin: false,
  padding: false,
  _disabled: false,
  is_circle: false,
  _onClick: () => {},
};

const Btn = styled.button`
  /* font-family: "Sunflower", sans-serif; */
  cursor: pointer;
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: 40px;
  background-color: ${(props) => (props.disabled ? "#D5CABE" : "#FB8631")};
<<<<<<< Updated upstream
  ${(props) => (props.bg ? `background-color : ${props.bg};` : "")};
=======
  ${(props) => (props.bgcolor ? `background-color : ${props.bgcolor};` : "")};
>>>>>>> Stashed changes
  border: none;
  border-radius: 3px;
  color: ${(props) => props.color};

  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.font_size ? `font-size: ${props.font_size};` : "")};


`;

const PlusBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 30px;
  cursor: pointer;
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: 48px;
  background-color: ${(props) => (props.disabled ? "#1b9cfc8c" : "#1B9CFC")};
  border: none;
  border-radius: 50%;
  color: white;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.font_size ? `font-size: ${props.font_size};` : "")};
`;

export default Button;
