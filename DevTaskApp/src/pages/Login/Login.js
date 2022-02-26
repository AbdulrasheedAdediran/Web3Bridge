import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/GeneralLayout/Header';
import '../../styles/Login/Login.css';
import vector from '../../assets/login.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [type, setType] = useState(false)
  const passwordHandler = () => {
    const btn = document.querySelector('#password');
    if (btn.type === 'password') {
      btn.type = 'text'
      setType(true)
    } else {
      btn.type = 'password'
      setType(false)
    }
  }

  return (
    <div className="Login__wrapper">
      <Header icon={0} className="Login__header" />
      <div className="Login__container">
        <form className="form">
          <h4 className="form__sub">Login</h4>
          <div className="form__email">
            <label htmlFor="login">Email Address</label>
            <input type="email" name="email" required />
            <div className="email"><FontAwesomeIcon icon={faEnvelope} /></div>
          </div>
          <div className="form__password">
            <label htmlFor="password">password</label>
            <input id="password" type="password" name="password" required />
            <div onClick={passwordHandler} className="password"><FontAwesomeIcon icon={type ? faEye : faEyeSlash} /></div>
          </div>
          <p><Link className="color" to="#">Forgot  password?</Link></p>
          <button className="btn__action"><Link className="link" to="/developer">Login</Link></button>
        </form>

        <div className="Login__vector">
          <img className="img" src={vector} alt="vector-logo" />
        </div>
      </div>


    </div>
  )
}

export default Login;
