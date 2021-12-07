import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { src, size, shape, half } = props;

  const styles = {
    src,
    size,
    half,
  };

  if (shape === "circle") {
    return <CircleImage {...styles} />;
  }

  if (shape === "big_square") {
    return <BigSquareImage {...styles}></BigSquareImage>;
  }
};

Image.defaultProps = {
  shape: "logo",
  src: "https://images.all-free-download.com/images/graphiclarge/line_drawing_vehicle_car_713.jpg",
  size: 36,
  half: false,
};



const CircleImage = styled.img`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  min-height: var(--size);
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 50%;
  margin: 10px 0;
`;

const BigSquareImage = styled.img`
  width: 100%;
  ${(props) => (props.half ? `flex-basis: 30%;` : "")}
  min-width: 100px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  margin: 10px 0;
  
`;

export default Image;
