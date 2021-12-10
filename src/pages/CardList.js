import React from "react";
import Card from "../components/Card";
import { actionCreators as loadActions } from "../redux/modules/card";

import {Grid,Button,Spinner} from "../elements";


import { useSelector ,useDispatch} from 'react-redux';



const CardList = (props) => {

    const dispatch = useDispatch();

    const card_list = useSelector((state) => state.card.list);
    console.log(card_list);
    const is_loaded = useSelector(state => state.card.is_loaded);
   

    // const {history} = props;

    React.useEffect(()=> {
        dispatch(loadActions._loadCars());
    },[]);

    console.log(card_list);

    return (
        
        <React.Fragment>
            <Grid is_flex width="30vw">  
                <Button bg="white" text="국산차"></Button>
                <p>/</p>
                <Button bg="white" text="수입차"></Button>
            </Grid>
            <Grid>
                {card_list && card_list.cars.map((c,idx) => {
                    return <Card key={c.id} {...c}/>
                })}
            </Grid>
            {!is_loaded && <Spinner />}
        </React.Fragment>
    );
}



export default CardList;