import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  handleBookClick = () => {
    this.setState({ selected: !this.state.selected });
    this.props.propsBook(this.props.book.asin);
  };
// credo di aver eseguito tutti i passaggi corretti ma non riesco a capire perchè non mi passa i dati correttamente
  render() {

    const { book } = this.props;
    return (
      <>
        <Card
          onClick={this.handleBookClick}
          style={{ border: this.state.selected ? "3px solid red" : "none" }}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>{book.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
