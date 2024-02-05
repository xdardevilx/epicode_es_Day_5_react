import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ commentsToShow }) => (
  <ListGroup style={{ color: "black" }} className="mt-2">
    {commentsToShow !== undefined
      ? commentsToShow.map((comment) => (
          <SingleComment comment={comment} key={comment._id} />
        ))
      : null}
  </ListGroup>
);

export default CommentList;
