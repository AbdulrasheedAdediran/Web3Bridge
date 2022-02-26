import React,{ useState,useEffect} from "react";
import Modal from "../../components/Modal/Modal";
import "../../styles/Tasks/Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faTrashAlt,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";

export const Option = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scroll(0, 0)
  },
    // eslint-disable-next-line 
    [])
  const showModalHandler = () => {
    setShow(!show)
  }
  return (
    <div className="modal_box">
      <div>
        <FontAwesomeIcon icon={faMapPin} size="sm" />
        <p>Pin project</p>
      </div>

      <div>
        <FontAwesomeIcon icon={faCheckDouble} size="sm" />
        <p>Mark as done</p>
      </div>

      <div>
        <FontAwesomeIcon icon={faTrashAlt} size="sm" />
        <div onClick={showModalHandler}>Delete</div>
        {show && <Modal show={show} onClose={showModalHandler}>
                <div className="task__modal--delete">
                 <div className="task__box">
                   <div>
                   <h1 className="task__title">Delete Project Abdul</h1> 
                  <p className="task__desc">Are you sure you want to delete project abdul? This action is irreversible</p>
                  <div className="btn__flex">
                    <button className="btn__revert">Revert</button>
                    <button  onClick={showModalHandler} className="btn__cancel">Cancel</button>
                  </div>
                   </div>
                 </div>
                </div>
              </Modal>}
      </div>
    </div>
  );
};
