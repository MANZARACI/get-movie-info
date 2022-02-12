import classes from "./MovieMain.module.css";

import { Row, Col, Card, ListGroup } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";

const MovieMain = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const poster = (
    <img
      className={classes.poster}
      alt="Movie Poster"
      width="100%"
      src={props.poster}
    />
  );

  const plot = (
    <Card>
      <Card.Body className={classes.plot}>{props.plot}</Card.Body>
    </Card>
  );

  const cast = (
    <Card id="deneme" className={classes.scroll + " mt-3 mb-5"}>
      <Card.Header className={classes.title}>Cast</Card.Header>
      <ListGroup>
        {props.cast.map((actor, i) => {
          return (
            <ListGroup.Item key={i}>
              <strong>{actor.actor}</strong> as {actor.character}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Card>
  );

  return (
    <Fragment>
      <Row className={(!isTabletOrMobile ? "mb-5" : "mb-3") + " mt-4"}>
        <Col xs={!isTabletOrMobile ? 6 : 12}>{poster}</Col>
        {!isTabletOrMobile && (
          <Col xs={6}>
            {plot}
            {!isTabletOrMobile && cast}
          </Col>
        )}
      </Row>
      {isTabletOrMobile && plot}
      {isTabletOrMobile && <Row>{cast}</Row>}
    </Fragment>
  );
};

export default MovieMain;
