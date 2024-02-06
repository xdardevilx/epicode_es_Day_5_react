import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    currentBook: "",
  };

  propsBook(value) {
    console.log("questo è il valore", value);
    this.setState({
      currentBook: value,
    });
  }
  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          <Col xs={12} md={8}>
            <Row>
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={12} md={4} key={b.asin}>
                    <SingleBook
                      propsBook={(value) => this.propsBook(value)}
                      book={b}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col>
            <CommentArea asin={this.props.asin} />
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
