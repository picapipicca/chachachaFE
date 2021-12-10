import React from "react";


import {Grid,Text,Image,CardImage} from '../elements';
import styled from 'styled-components';






const Card = (props) => {

    return (
        <React.Fragment>
           <CardBox>
               <CardImage shape = "small_square" src={props.thumbnailUrl}/>
               <Grid padding = "16px">
                   <Grid is_flex>
                    <Image shape = "circle" src={props.emblem}/>
                    <Text margin = "0px 0px 0px 5px" bold> {props.company}) {props.title}</Text>
                   </Grid>
                   <Grid>
                        <Text margin="0px">출시  {props.price} 만원</Text>
                        <Text margin="0px">연비  {props.efficiency}</Text>
                        <Text margin="0px">연료  {props.fuel}</Text>
                        <Text margin="0px">예정  {props.info}</Text>
                   </Grid> 
               </Grid>
           </CardBox> 
            
        </React.Fragment>
    );
}

Card.defaultProps = {
    id : "",
    emblem : "https://imgauto-phinf.pstatic.net/20211129_123/auto_1638148530877l80Kq_PNG/20211129101529_A3q8EDyn.png?type=f31_31",
    thumbnailUrl : "https://imgauto-phinf.pstatic.net/20211119_40/auto_1637301569234DmrKp_PNG/20211119145916_KuPxzuce.png?type=f160_116",
    title : "마하 99 s class", //차이름
    company :"현대", //차 회사명
    category : "국산차", //차 종
    price : "99 ~ 500 만원",
    efficiency : "정보없음",//차요약스펙_연비
    fuel : "가솔린",
    info : "차크기"
    }

const CardBox = styled.div`
    flex-direction: row;
    position: relative;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 3px;
    background-color: white;
    transition: box-shadow 300ms ease-in-out;
    float: left;
    min-width: 200px;
    
    border: 1px solid #eff0f0;
    margin: 10px 10px;
`;

export default Card;