export const FETCH_INFO_REQUEST = "FETCH_INFO_REQUEST";
export const FETCH_INFO_SUCCESS = "FETCH_INFO_SUCCESS";
export const FETCH_INFO = "FETCH_INFO";

import request from 'axios';

export function fetchInfo() {
  return {
    type: FETCH_INFO,
    promise: request.get('http://localhost:3000/content/json/info.json')
  };
}
