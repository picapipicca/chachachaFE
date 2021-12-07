import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    children,
    border,
    is_flex,
    width,
    padding,
    margin,
    bg,
    relative,
    _onClick,
    is_main,
  } = props;

  const styles = {
    is_flex,
    width,
    margin,
    padding,
    bg,
    relative,
    is_main,
    border,
  };
  return (
    <GridContainer {...styles} onClick={_onClick}>
      {children}
    </GridContainer>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  relative: false,
  _onClick: () => {},
  border : false,
};

const GridContainer = styled.div`
  width: ${(props) => props.width};
  height: 100%;

  box-sizing: border-box;
  ${(props) =>
    props.is_flex
      ? `display: flex; justify-content: space-between; align-items: center;`
      : ""};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.relative ? `position: relative;` : "")};
  ${(props) => (props.border? `border : ${props.border};`: "")};
`;
export default Grid;
