import axios from 'axios';
import { api } from './constants';

export const get = url => axios(
	{
		method: 'GET',
		url: api + url,
		headers: {
			'Content-Type' : 'application/json',
		},
	}
);

export const post = (url, data) => axios(
	{
		method: 'POST',
		url: api + url,
		headers: {
			'Content-Type' : 'application/json',
		},
		data,
	}
);

export const del = (url) => axios(
	{
		method: 'DELETE',
		url: api + url,
		headers: {
			'Content-Type' : 'application/json',
		},
	}
);
