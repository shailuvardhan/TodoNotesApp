import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import "./index.css";

const TodoNotesItem = (props) => {
  const { NotesDetails } = props;
  const { title, description, date } = NotesDetails;
  return (
    <li className="list-item">
      <div className="data-container">
        <h2 className="list-title">{title}</h2>
        <h4 className="list-date">{date}</h4>
        <p className="description">{description}</p>
      </div>
      <div className="icons-container">
        <FaPen className="list-icon" />
        <MdDelete className="list-icon" />
      </div>
    </li>
  );
};

export default TodoNotesItem;
