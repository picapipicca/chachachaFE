import React from "react";
import styled from "styled-components";

const CardImage = (props)=> {
    const {src , shape} = props;

    const styles = {src}

    return(
<React.Fragment>
        <SmallCardImage {...styles}></SmallCardImage>
</React.Fragment>
    );
}

CardImage.defaultProps = {
    shape : "small_square",
    src : "https://imgauto-phinf.pstatic.net/20211119_40/auto_1637301569234DmrKp_PNG/20211119145916_KuPxzuce.png?type=f160_116",
};

const SmallCardImage = styled.div`
     width : 160px;
     height: 110px;
     aspect-ratio: auto 160 / 110;
     border : 1px solig #000;
     background-image: url("${(props)=> props.src}");
     background-size: cover;
     margin : auto;

`;

export default CardImage;


    