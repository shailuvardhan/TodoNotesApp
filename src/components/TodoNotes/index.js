import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header";
import TodoNotesItem from "../TodoNotesItem";
import AddNote from "../AddNote";

import "./index.css";
import { CiCirclePlus } from "react-icons/ci";

class TodoNotes extends Component {
  state = {
    searchInput: "",
    userNotesList: [],
    popupVisible: false,
    title: "",
    description: "",
    date: new Date(),
  };

  handlePopupClose = () => {
    this.setState({ popupVisible: false });
  };

  onClickAddNote = () => {
    this.setState({ popupVisible: true });
  };

  onChangetitle = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };
  onChangeDate = (event) => {
    this.setState({ date: event.target.value });
  };
  onChangetitlename = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { title, description, date } = this.state;
    if (title !== "" && description !== "" && date !== "") {
      const newTodo = {
        id: uuidv4(),
        title,
        description,
        date: new Date(date).toLocaleDateString(),
      };
      this.setState((prevState) => ({
        userNotesList: [...prevState.userNotesList, newTodo],
      }));
    }
    this.setState({ title: "", description: "", date: "" });
  };

  onClickButton = (id) => {
    const { userNotesList } = this.state;
    const filteredNotesList = userNotesList.filter(
      (eachItem) => eachItem.id !== id
    );
    this.setState({ userNotesList: filteredNotesList });
  };

  render() {
    const {
      userNotesList,
      popupVisible,
      title,
      description,
      date,
    } = this.state;

    const { searchInput } = this.state;
    const filteredNotesList = userNotesList.filter((eachItem) =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="todo-app-container">
        <Header onChangetitlename={this.onChangetitlename} />
        <ul className="notes-area-container">
          {filteredNotesList.map((eachItem) => (
            <TodoNotesItem
              key={eachItem.id}
              NotesDetails={eachItem}
              onClickButton={this.onClickButton}
              onClickedPin={this.onClickedPin}
              ishighlighted
            />
          ))}
        </ul>
        <AddNote
          popupVisible={popupVisible}
          handlePopupClose={this.handlePopupClose}
          onSubmitForm={this.onSubmitForm}
          title={title}
          onChangetitle={this.onChangetitle}
          description={description}
          onChangeDescription={this.onChangeDescription}
          date={date}
          onChangeDate={this.onChangeDate}
        />
        <div className="add-notes-icon-container">
          <CiCirclePlus className="plus-icon" onClick={this.onClickAddNote} />
        </div>
      </div>
    );
  }
}

export default TodoNotes;
