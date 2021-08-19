import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  API_URI,
  REG_LOADING,
  LOG_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
} from './types';
import {CLEAR_ERRORS} from './types';
import {returnErrors} from './errActions';
import { useEffect } from 'react';

export const register = (newUser) => async (dispatch) => {
  dispatch({type: REG_LOADING})

  const data = JSON.stringify(newUser);

  
   await axios({
      method: "POST",
      url: `${API_URI}/api/users`,
      data,
      headers: {
        'Content-Type': 'application/json'
      }
      
    
    })
    .then((res) => {
      const {token} = res.data;
      AsyncStorage.setItem('@token', token)
      dispatch({type: CLEAR_ERRORS})
      dispatch({type: REGISTER_SUCCESS, payload: res.data})
    })
    .catch((err) => {
      dispatch({type: REGISTER_FAIL})
      dispatch(
        returnErrors(err.response.data.msg, err.response.status, "REGISTER_FAIL"),
      )
      // console.log(err)
    })
  }



// lOGIN USER
export const login = ({email, password}) => async (dispatch) => {
    dispatch({type: LOG_LOADING})

    // make request to login
    const data = JSON.stringify({email, password})

    
     await axios({
        method: 'POST',
        url: `${API_URI}/api/auth`,
        data,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        const {token, user} = res.data;
        AsyncStorage.setItem('@token', token);
        dispatch({ type: CLEAR_ERRORS})
        dispatch({ type: LOGIN_SUCCESS, payload: res.data})
      })
      .catch((err) => {
        dispatch({ type: LOGIN_FAIL})
        dispatch(returnErrors('Custom Error', 400, 'LOGIN_FAIL')
        )
      })
   


}

//** Amazon Load User */
export const loadUser = () => async (dispatch) => {};


// 1:37:38
