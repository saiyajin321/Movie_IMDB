import Swal from 'sweetalert2'
import { BASE_URL } from '../../config/api'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export const doLogin = (loginData, navigateToHome) => {
    return async(dispatch) => {
        try {
            const { data } = await axios({
                url : `${BASE_URL}user/login`,
                method : 'POST',
                data : loginData
            })
            localStorage.access_token = data.access_token
            localStorage.username = data.name
            dispatch({ type : "loginSuccess", payload : data.access_token})
            Swal.fire('LOGIN SUCCESS')
            navigateToHome()
        } catch (err) {
            Swal.fire(err.response.data.message)
        }
    }
}

export const doRegister = (registerData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios ({
                url : `${BASE_URL}user/register`,
                method : 'POST',
                data : registerData
            })
            Swal.fire('REGISTER SUCCESS')
        } catch (err) {
            Swal.fire(err.response.data.message);
        }
    }
}

export const fetchMovies = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios ({
                url : `${BASE_URL}movies`,
                method : 'GET',
                headers : {
                    access_token : localStorage.access_token
                }
            })
            dispatch({ type : 'fetchMoviesSuccess', payload : data})
        } catch (err) {
            console.log(err);
        }
    }
}
