import React, { useState } from "react";
import Cards from "../../../../components/cards/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Option } from "../../../../components/option/Option";


const Tasks = () => {
  const [openModal, setOpenModal] = useState(false);

  const openHandler = () => {
    console.log(openModal);
    setOpenModal(!openModal);
  };

  return (
    <div className="Task__container">
      <div className="Task__header">
        <div className="Task_name">
          <h1>Project Abdul</h1>
          <div className="option">
            <FontAwesomeIcon
              icon={faEllipsisV}
              size="lg"
              onClick={openHandler}
              className="option-icon"
            />
            {openModal ? <Option /> : null}
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus praesentium sint veritatis. Sapiente, saepe doloremque
          expedita quos, nesciunt quia accusantium tenetur voluptas doloribus
          nemo ducimus.
        </p>
      </div>

      <div className="Tasks">
        <Cards>
          <p>Assigned to:</p>

          <div>
            <h4>Eric</h4>
            <FontAwesomeIcon icon={faComments} size="lg" />
          </div>
        </Cards>
        <Cards>
          <p>Assigned to:</p>

          <div>
            <h4>Eric</h4>
            <FontAwesomeIcon icon={faComments} size="lg" />
          </div>
        </Cards>
        <Cards>
          <p>Assigned to:</p>

          <div>
            <h4>Eric</h4>
            <FontAwesomeIcon icon={faComments} size="lg" />
          </div>
        </Cards>
        <Cards>
          <p>Assigned to:</p>

          <div>
            <h4>Eric</h4>
            <FontAwesomeIcon icon={faComments} size="lg" />
          </div>
        </Cards>
        <Cards>
          <p>Assigned to:</p>

          <div>
            <h4>Eric</h4>
            <FontAwesomeIcon icon={faComments} size="lg" />
          </div>
        </Cards>
        <Cards>
          <p>Assigned to:</p>

          <div>
            <h4>Eric</h4>
            <FontAwesomeIcon icon={faComments} size="lg" />
          </div>
        </Cards>
        <Cards>
          <p>Assigned to:</p>

          <div>
            <h4>Eric</h4>
            <FontAwesomeIcon icon={faComments} size="lg" />
          </div>
        </Cards>
        <Cards>
          <p>Assigned to:</p>

          <div>
            <h4>Eric</h4>
            <FontAwesomeIcon icon={faComments} size="lg" />
          </div>
        </Cards>
        <Cards>
          <p>Assigned to:</p>

          <div>
            <h4>Eric</h4>
            <FontAwesomeIcon icon={faComments} size="lg" />
          </div>
        </Cards>
      </div>
    </div>
  );
};

export default Tasks;
