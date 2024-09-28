import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header";
import TodoNotesItem from "../TodoNotesItem";
import AddNote from "../AddNote";

import "./index.css";
import { CiCirclePlus } from "react-icons/ci";

let initialUserNotesList = [
  {
    id: 0,
    title: "note1",
    description: "first note",
    date: "1",
  },
  {
    id: 1,
    title: "note2",
    description: "second note",
    date: "2",
  },
  {
    id: 2,
    title: "note3",
    description: "Third note",
    date: "",
  },
];

class TodoNotes extends Component {
  state = {
    searchInput: "",
    userNotesList: initialUserNotesList,
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

  onSubmitForm = (event) => {
    event.preventDefault();
    const { title, description, date } = this.state;
    const newTodo = {
      id: uuidv4(),
      title,
      description,
      date: new Date(date).toLocaleDateString(),
    };
    this.setState((prevState) => ({
      userNotesList: [...prevState.userNotesList, newTodo],
    }));
    this.setState({ title: "", description: "", date: "" });
  };

  render() {
    const {
      userNotesList,
      popupVisible,
      title,
      description,
      date,
    } = this.state;
    return (
      <div className="todo-app-container">
        <Header />
        <ul className="notes-area-container">
          {userNotesList.map((eachItem) => (
            <TodoNotesItem key={eachItem.id} NotesDetails={eachItem} />
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
