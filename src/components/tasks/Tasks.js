import React, { useState } from "react";
import "./Tasks.css";
import Collapsible from "../collapsible/Collapsible";

function Tasks(props) {
  let [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  let onSaveClicked = () => {
    return setIsNewTaskOpen(!isNewTaskOpen);
  };

  let onCancelClicked = () => {
    return setIsNewTaskOpen(!isNewTaskOpen);
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div className="app-title-container">
          <div className="app-title">
            <h1>Tasks</h1>
          </div>
          {isNewTaskOpen === false ? (
            <div className="create-button-container">
              <button
                className="button create-button"
                onClick={() => {
                  setIsNewTaskOpen(!isNewTaskOpen);
                }}
              >
                <i className="fa fa-calendar-plus"></i>
                &nbsp; Create
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <Collapsible isOpen={isNewTaskOpen}>
          <div className="new-task-container">
            <h4 className="new-task-title">New Task</h4>

            {/* form group Starts */}
            <div className="form-group">
              <label className="form-label" htmlFor="task-title">
                Task Title:
              </label>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="Task Title"
                  className="text-box"
                  id="task-title"
                />
              </div>
            </div>
            {/* form group Ends */}

            {/* form group Starts */}
            <div className="form-group">
              <label className="form-label" htmlFor="task-title">
                Task Date and Time:
              </label>

              <div className="form-input">
                <input
                  type="datetime-local"
                  placeholder="Task Date and Time"
                  className="text-box"
                  id="task-date-time"
                />
              </div>
            </div>
            {/* form group Ends */}
            <div className="button-group">
              <button
                className="button save-button"
                onClick={() => {
                  onSaveClicked();
                }}
              >
                <i className="fa fa-save"></i>
                &nbsp; Save Task
              </button>

              <button
                className="button cancel-button"
                onClick={() => {
                  onCancelClicked();
                }}
              >
                <i className="fa fa-window-close"></i>
                &nbsp; Cancel
              </button>
            </div>
          </div>
        </Collapsible>
        <div className="search-box">
          <input type="search" placeholder="Search" />
          <i className="fa fa-search"></i>
        </div>

        <div className="content-body">
          {/* Task Starts */}
          <div className="task">
            <div className="task-body">
              <div className="task-title">
                <i className="fa fa-thumbtack"></i>
                <span className="task-title-text">Doctor's Appointment</span>
              </div>
              <div className="task-subtitle">
                <i className="fa fa-clock"></i>
                &nbsp; June 16 at 9:30 am
              </div>
            </div>
            <div className="task-options">
              <button className="icon-button" title="Delete">
                &times;
              </button>
            </div>
          </div>
          {/* Task Ends */}

          {/* Task Starts */}
          <div className="task">
            <div className="task-body">
              <div className="task-title">
                <i className="fa fa-thumbtack"></i>
                <span className="task-title-text">Team Meeting</span>
              </div>
              <div className="task-subtitle">
                <i className="fa fa-clock"></i>
                &nbsp; July 21 at 11:30 am
              </div>
            </div>
            <div className="task-options">
              <button className="icon-button" title="Delete">
                &times;
              </button>
            </div>
          </div>
          {/* Task Ends */}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
