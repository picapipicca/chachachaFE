import React from "react";


import {Grid,Text,Image} from '../elements';
import styled from 'styled-components';



const Card = (props) => {

    return (
        <React.Fragment>
           <Grid>
               <Grid>
                   {/* <Image src={props.thumbnail}/> */}
               </Grid>
               <Grid>
                   <Text>{props.category}</Text>
                   <Text>{props.title}</Text>
                   <Text>{props.price}원</Text>
                   <Text>{props.연비}</Text>
                   <Text>{props.연료}</Text>
               </Grid>
           </Grid> 
            
        </React.Fragment>
    );
}

Card.defaultProps = {
    card_id : "",
    thumbnail : "https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.decolife.shop%2Fgoods%2Fgoods_view.php%3FgoodsNo%3D1000389549&psig=AOvVaw3O8Sq94__15bifZ5dbI-6V&ust=1638927929458000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjF-LzI0PQCFQAAAAAdAAAAABAF",
    title : "마하 99 s class", //차이름
    category :"BMW", //차종
    price : "99 ~ 500 만원",
    연비 : "정보없음",
    연료 : "가솔린",
    }


export default Card;