import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { MdOutlineClose } from "react-icons/md";

import "./index.css";

const AddNote = (props) => {
  const {
    popupVisible,
    handlePopupClose,
    onSubmitForm,
    title,
    onChangetitle,
    description,
    onChangeDescription,
    date,
    onChangeDate,
  } = props;

  return (
    <div className="popup">
      <Popup open={popupVisible} closeOnDocumentClick={false}>
        <div className="close-button">
          <button onClick={handlePopupClose} className="close">
            <MdOutlineClose />
          </button>
        </div>

        <form onSubmit={onSubmitForm} className="form">
          <label>Title</label>
          <input type="text" value={title} onChange={onChangetitle} />
          <label>CONTENT</label>
          <textarea value={description} onChange={onChangeDescription} />
          <label>Date</label>
          <input type="date" value={date} onChange={onChangeDate} />
          <button className="add">Add</button>
        </form>
      </Popup>
    </div>
  );
};

export default AddNote;
