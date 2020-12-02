import axios from 'axios';
import config from './Auth0Config'
import URL from '../BaseURL'
let Action=config.ACTION


class Auth0Services{
    signUp = (data) => {
        console.log("BASE_URL + Action.SIGN_UP==================",URL.BASE_URL + Action.SIGN_UP);
		return new Promise((resolve, reject) => {
			axios
				.post(URL.BASE_URL + Action.SIGN_UP, data)
				.then(function (response) {
					resolve(response);
				})
				.catch((e) => {
					reject(e);
				});
		});
    };
    login=(data)=>{
        return new Promise((resolve, reject) => {
			axios
				.post(URL.BASE_URL + Action.LOGIN, data)
				.then(function (response) {
					resolve(response);
				})
				.catch((e) => {
					reject(e);
				});
		});
    }

    logOut=(data)=>{
        return new Promise((resolve, reject) => {
			axios
				.patch(URL.BASE_URL + Action.LOGOUT, data)
				.then(function (response) {
					resolve(response);
				})
				.catch((e) => {
					reject(e);
				});
		});
    }
}


const instance = new Auth0Services();

export default instance;

