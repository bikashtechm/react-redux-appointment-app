import React from "react";
import "./Tasks.css";

function Tasks(props) {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="app-title-container">
          <div className="app-title">
            <h1>Tasks</h1>
          </div>
          <div className="create-button-container">
            <button className="button create-button">
              <i className="fa fa-calendar-plus"></i>
              &nbsp; Create
            </button>
          </div>
        </div>
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
            <button className="button save-button">
              <i className="fa fa-save"></i>
              &nbsp; Save Task
            </button>

            <button className="button cancel-button">
              <i className="fa fa-window-close"></i>
              &nbsp; Cancel
            </button>
          </div>
        </div>

        <div className="search-box">
          <input type="search" placeholder="Search" />
          <i className="fa fa-search"></i>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
