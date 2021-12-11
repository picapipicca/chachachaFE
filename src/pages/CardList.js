import React from "react";
import Card from "../components/Card";
import { actionCreators as loadActions } from "../redux/modules/card";
import { Grid } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const CardList = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  const card_list = useSelector((state) => state.card.list);

  React.useEffect(() => {
    dispatch(loadActions._loadCars());
  }, []);

  return (
    <Grid>
      <Grid padding="16px 50px">
        <Grid is_flex>
          <ButtonGroup variant="text" aria-label="text button group" size="large">
          <Button
            color="secondary"
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
            color="primary"
            onClick={() => {
              history.push("/filterAbroad");
            }}
          >
            수입차
          </Button>
          </ButtonGroup>
        </Grid>
      </Grid>

      <Grid>
        {card_list &&
          card_list.map((c, idx) => {
            return (
              <Grid margin="16px 30px" key={c.id}>
                <Card key={c.id} {...c} />
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
};

export default CardList;
