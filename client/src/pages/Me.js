import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';


const Me = () => {
  useEffect(() => {

    const options = {
      method: "GET",
      url: "http://localhost:3000/me",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }
    axios.request(options)
      .then((resp) => {
        dispatch({
          type: "GET_USER_DATA",
          payload: resp.data
        })
        if (!resp.data) {
          history.push("/")

        }

      })
      .catch(e => history.push("/"))
  }, [])
  let history = useHistory();
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)

  function logout() {
    localStorage.removeItem('token');
    history.push("/")
  }
  return (
    <>
     <h1>
       Welcome {user.username}
      </h1>
      <Button
      type="submit"
      variant="contained"
      color="primary"
        onClick={logout}
      >
        log out
      </Button>
      <h2>
        {JSON.stringify(user)}
      </h2>

    </>
  )
}

export default Me
