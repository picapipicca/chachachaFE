import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { children, size, margin, width, bold, _onClick, is_click, center } =
    props;

  const styles = {
    size,
    margin,
    width,
    bold,
    is_click,
    center,
  };
  return (
    <P {...styles} onClick={_onClick}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  size: "14px",
  margin: false,
  bold: false,
  _onClick: () => {},
  is_click: false,
  center: false,
};

const P = styled.p`
  word-break: break-all;
  ${(props) => (props.is_click ? `cursor: pointer;` : "")};
  ${(props) => (props.size? `font-size: ${props.size};` : `font-size: 14px;`)};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.center ? `text-align: center;` : "")};
`;

export default Text;
