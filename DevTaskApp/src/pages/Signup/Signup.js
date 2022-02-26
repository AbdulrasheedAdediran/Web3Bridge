import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/GeneralLayout/Header';
import '../../styles/Login/Login.css';
import vector from '../../assets/login.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useInput from '../../hooks/useInput';
import { validateEmail } from '../../validate/validate';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
  const {
    value: firstname,
    valueChangeHandler: firstnameHandler,
    isInvalid: firstnameError,
    blurHandler: firstnameBlurHandler,
    resetFields: resetFirstname
  } = useInput(value => value !== "")

  const {
    value: email,
    valueChangeHandler: emailHandler,
    isInvalid: emailError,
    blurHandler: emailBlurHandler,
    resetFields: resetEmail
  } = useInput(value => validateEmail(value))

  const {
    value: password,
    valueChangeHandler: passwordHandle,
    isInvalid: passwordError,
    blurHandler: passwordBlurHandler,
    resetFields: resetPassword
  } = useInput(value => value.trim().length > 5)

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
  const history = useHistory()

  // REPONSE FROM THE API
  // error
  // "state": "ERROR",
  // "statusCode": 409,
  // "message": "Email johndoe@web3bridge.com already exists"

  // success
  // "statusCode": 200,
  // "message": "Account created",
  // "data": {
  //     "email": "john@web3bridge.com"
  // }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // const [showToast, setShowToast] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    let url = `https://api-devtask.herokuapp.com/v1/users`;
    let data = { firstname, email, password }
    setLoading(true)
    try {
      const response = await axios.post(url, data);
      if (response.status === 200)
        setError(response.message)
        setSuccess(true)
      setLoading(false)
      resetEmail()
      resetFirstname()
      resetPassword()
      return  setTimeout(() => {
        history.push("/login");
      }, 700)
    } catch (e) {
      setError(e.message)
      setLoading(false)
      setSuccess(false)
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(error, {
        toastId: error.message,
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      })
      setError(error)
    }
    if (success) {
      toast.success('Successful', {
        toastId: "Account created successfully",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      })
      setSuccess(true)
    }
  }, [error, setError, success, setSuccess])





  const emailErr = emailError ? 'invalid' : 'valid';
  const fnameErr = firstnameError ? 'invalid' : 'valid';
  const pwdErr = passwordError ? 'invalid' : 'valid';

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="Login__wrapper">
        <Header icon={0} className="Login__header" />
        <div className="Login__container">
          <form className="form" onSubmit={submitHandler}>
            <h4 className="form__sub">Register</h4>
            <div className="form__email">
              <label htmlFor="firstname">FirstName</label>
              <input type="firstname" className={`${fnameErr}`} value={firstname} onChange={firstnameHandler} onBlur={firstnameBlurHandler} name="firstname" required />
              {firstnameError && <p className="text__error">Firstname field cannot be empty</p>}
            </div>
            <div className="form__email">
              <label htmlFor="email">Email Address</label>
              <input type="email" className={`${emailErr}`} name="email" value={email} onChange={emailHandler} onBlur={emailBlurHandler} required />
              <div className={`email  ${email}`}><FontAwesomeIcon icon={faEnvelope} /></div>
              {emailError && <p className="text__error">Enter a valid mail</p>}
            </div>
            <div className="form__password">
              <label htmlFor="password">password</label>
              <input id="password" className={`${pwdErr}`} type="password" value={password} onChange={passwordHandle} onBlur={passwordBlurHandler} name="password" required />
              <div onClick={passwordHandler} className="password"><FontAwesomeIcon icon={type ? faEye : faEyeSlash} /></div>
              {passwordError && <p className="text__error">Password should be more than 5 characters</p>}
            </div>
            <p className="text__login"><Link className="color" to="/login">Already have an account? Login</Link></p>
            {/* <button><Link className="link" to="/login">Register</Link></button> */}
            {/* <button className="link" type="button">Register</button> */}
            <button disabled={loading} className="link btn__action" type='submit'>Register</button>
          </form>

          <div className="Login__vector">
            <img className="img" src={vector} alt="vector-logo" />
          </div>
        </div>


      </div>
    </React.Fragment>
  )
}

export default Register;
