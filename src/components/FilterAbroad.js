import React from "react";
import Card from "../components/Card";
import { actionCreators as loadActions } from "../redux/modules/card";
import {Grid} from "../elements";
import { useSelector ,useDispatch} from 'react-redux';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";


const FilterAbroad = (props) => {

    const dispatch = useDispatch();
    const {history} = props;


    const card_list = useSelector((state) => state.card.list);
    console.log(card_list);
    
    React.useEffect(()=> {
    
        dispatch(loadActions._loadCarsAbroad());
    },[]);


    return (
        
        <Grid>
        <Grid is_flex padding = "16px 50px">
            
        <ButtonGroup variant="text" aria-label="text button group" size="large">
          <Button
            color="primary"
            onClick={() => {
              history.push("/");
            }}
          >
            전체보기
          </Button>
          <Button
            color="primary"
            margin="0px 10px"
            onClick={() => {
              history.push("/filterKorea");
            }}
          >
            국산차
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              history.push("/filterAbroad");
            }}
          >
            수입차
          </Button>
          </ButtonGroup>
        </Grid>
            
                {card_list && card_list.map((c,idx) => {
                    return (
                        <Grid margin = "16px 30px" key={c.id}>
                             <Card key={c.id} {...c}/>
                         </Grid>
                    );
                })}
            
            
        </Grid>
    );
}



export default FilterAbroad;