import { MdDelete } from "react-icons/md";

import "./index.css";

const TodoNotesItem = (props) => {
  const { NotesDetails, onClickButton } = props;
  const { id, title, description, date } = NotesDetails;

  const onClickedbutton = () => {
    onClickButton(id);
  };

  return (
    <li className="list-item">
      <div className="data-container">
        <h2 className="list-title">{title}</h2>
        <h4 className="list-date">{date}</h4>
        <p className="description">{description}</p>
      </div>
      <div className="icons-container">
        <MdDelete className="list-icon" onClick={onClickedbutton} />
      </div>
    </li>
  );
};

export default TodoNotesItem;
