import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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
    <Popup open={popupVisible} closeOnDocumentClick={false}>
      <button onClick={handlePopupClose}>close</button>
      <form onSubmit={onSubmitForm}>
        <label>Title</label>
        <input type="text" value={title} onChange={onChangetitle} />
        <label>CONTENT</label>
        <textarea value={description} onChange={onChangeDescription} />
        <label>Date</label>
        <input type="date" value={date} onChange={onChangeDate} />
        <button>Add</button>
      </form>
    </Popup>
  );
};

export default AddNote;
