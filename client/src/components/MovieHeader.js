import { Fragment } from "react";
import { Card, Row, Col, ProgressBar } from "react-bootstrap";

import classes from "./MovieHeader.module.css";

const MovieHeader = (props) => {
  return (
    <Fragment>
      <Card>
        <Row>
          <Col xs={9}>
            <Card.Body className={`${classes.title} mx-1`} as="div">
              {props.title}
            </Card.Body>
            <Card.Subtitle className="mx-4 mb-3">
              {props.year} | {props.length}
            </Card.Subtitle>
          </Col>
          <Col xs={2} className="mt-5">
            <Card.Title style={{ textAlign: "center" }}>
              {props.rating}
            </Card.Title>
            <ProgressBar className={classes.progress} now={props.rating * 10} />
          </Col>
        </Row>
      </Card>
    </Fragment>
  );
};

export default MovieHeader;
