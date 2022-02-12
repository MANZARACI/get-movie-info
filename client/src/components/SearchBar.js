import { useRef } from "react";
import { Button, FormControl, InputGroup, Row, Col } from "react-bootstrap";

import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const movieRef = useRef();

  return (
    <Row className="mt-5">
      <Col xs={10} sm={8} md={5} lg={4} xxl={3} className="mx-auto">
        <InputGroup className={classes.searchBar}>
          <FormControl
            ref={movieRef}
            type="search"
            placeholder="Enter a movie name"
          />
          <Button onClick={() => props.onSearchMovie(movieRef.current.value)}>
            Search
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default SearchBar;
