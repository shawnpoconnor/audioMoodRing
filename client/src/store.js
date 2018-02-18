import { applyMiddleware, createStore } from 'redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducer'

const initialState = {}
const client = axios.create({
  responseType: 'json',
})

const enhancer = composeWithDevTools(
  applyMiddleware(
    thunk,
    axiosMiddleware(client),
  ),
)

export default createStore(
  reducer,
  initialState,
  enhancer,
)
