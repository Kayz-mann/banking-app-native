import axios from 'axios';
import IO, { Socket } from 'socket.io-client';
import {API_URI, UPDATE_AMOUNT, UPDATE_BALANCE} from './types';

//** Socket Config */
export const socket = IO(`${API_URI}`, {
  forceNew: true,
});

export const roomID = 'k328wfiuqwhefjashufasfhaysdfu';

// socket.on('connection', () => console.log('Connection'));

export const send = ({amount, account, purpose}) => async (dispatch, getState) => {
    // get current User Details
    const {user} = getState.auth;

    if(user.account_balance < amount)
    return alert("Sorry you don't have enough balance")


// Construct send data
const data = {
    amount,
    account_number: account,
    purpose,
    sender: user.email,
    roomID
}

// Emit Data
  socket.emit('send', data)

//   Update account balance
const currentUserAmount = user.account_balance - amount
dispatch({type: UPDATE_AMOUNT, payload: currentUserAmount})
};

export const receiver = () => async (dispatch, getState) => {
};
