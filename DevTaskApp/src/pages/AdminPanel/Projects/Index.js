import React, { useState } from "react";
import "../../../styles/projects/Projects.css";
import DatePicker from "react-date-picker";

function Index() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="project__container">
      <form action="">
        <div className="attr">
          <label>Project Title:</label>
          <input type="text" name="" id="" />
        </div>
        <div className="attr">
          <label>Project Description:</label>
          <textarea />
        </div>
        <div className="attr">
          <h3>Set Deliverables</h3>
          <div className="deliver">
            <div className="deliver_section">
              <label>Enter task details</label>
              <input type="text" />
            </div>
            <div className="deliver_section">
              <label>Assign to</label>
              <select>
                <option value="none"></option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>

            <div className="flex deliver_section">
              <div className="calender">
                <h3>Calender</h3>
                <div>
                  <DatePicker onChange={onChange} value={value} />
                </div>
              </div>

              <div className="priority">
                <h3>Set priority</h3>

                <button>High</button>
                <button>Medium</button>
                <button>Low</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Index;
