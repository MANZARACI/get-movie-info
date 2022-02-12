import { Row, Col } from "react-bootstrap";

import MovieHeader from "./MovieHeader";
import MovieMain from "./MovieMain";

const MovieInfo = (props) => {
  if (props.hasError) {
    return (
      <h1 className="mt-5" style={{ textAlign: "center" }}>
        No results found!
      </h1>
    );
  }

  return (
    <Row className="mt-5">
      <Col xs={10} sm={9} md={8} lg={7} xxl={6} className="mx-auto">
        <MovieHeader
          title={props.movieToShow.title}
          year={props.movieToShow.year}
          length={props.movieToShow.length}
          rating={props.movieToShow.rating}
        />
        <MovieMain
          cast={props.movieToShow.cast}
          plot={props.movieToShow.plot}
          poster={props.movieToShow.poster}
        />
      </Col>
    </Row>
  );
};

export default MovieInfo;
