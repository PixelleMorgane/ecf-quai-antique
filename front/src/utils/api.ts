import axios from 'axios';

const apiHostName = 'http://localhost:5000';

export function register (values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) {
    return axios.post(`${apiHostName}/users/register`, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
    })
    .then((response) => {
        // to do treat response
        return response
    })
    .catch((error) => {
        // to do treat error
    })
}

