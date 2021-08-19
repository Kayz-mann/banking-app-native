import axios from 'axios';
import IO from 'socket.io-client';
import {API_URI, UPDATE_AMOUNT, UPDATE_BALANCE} from './types';

//** Socket Config */
// export const socket = IO(`${API_URI}`, {
//   forceNew: true,
// });

export const roomID = 'k328wfiuqwhefjashufasfhaysdfu';

// socket.on('connection', () => console.log('Connection'));

export const send = () => async (dispatch, getState) => {};

export const receiver = () => async (dispatch, getState) => {
};
