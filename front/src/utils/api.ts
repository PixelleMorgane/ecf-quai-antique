import axios from 'axios';
import bcrypt from 'bcryptjs';

const apiHostName = 'http://localhost:5000';

export async function register (values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}) {

    let hashedPassword = await bcrypt.hash(values.password, 8);

    return axios.post(`${apiHostName}/users/register`, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: `${hashedPassword}`,
    })
    .then((res) => {
        // to do treat response
        const user = res.data;
        return user
    })
    .catch((error) => {
        // to do treat error
        console.log(error);
    })
}

export async function login (
    values: {
        email: string;
        password: string;
  }) {

    return  axios.post(`${apiHostName}/users/login`, {
        email: values.email,
        password: values.password,
    })
      .then(res => {
        const user = res.data;
        console.log(user)
        return user
    })
    .catch((error) => {
        // to do treat error
        console.log(error);
    })
}

export async function dishes () {

    return  axios.get(`${apiHostName}/menus/dishes`)
      .then(res => {
        // const fetchDishes = [...res.data];
        // console.log(fetchDishes)
        return res.data
    })
    .catch((error) => {
        // to do treat error
        console.log(error);
        return []
    })
}

