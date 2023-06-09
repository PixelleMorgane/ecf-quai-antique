import axios from 'axios';
import bcrypt from 'bcryptjs';

const apiHostName = 'http://localhost:5000';

export async function register (
    values: {
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


export async function addDish (
    values: {
        title: string;
        price: number;
        categoryId: string;
}) {


    return axios.post(`${apiHostName}/menus/control-panel`, {
        plateName: values.title,
        price: values.price,
        categoryId: values.categoryId,
    })
    .then((res) => {
        // to do treat response
        const newDish = res.data;
        return newDish
    })
    .catch((error) => {
        // to do treat error
        console.log(error);
    })
}



export async function deleteDish (
    id: string
) 
{

    return axios.delete(`${apiHostName}/menus/control-panel?id=${id}`)
    .then((res) => {
        // to do treat response
        return res.data
    })
    .catch((error) => {
        // to do treat error
        console.log(error);
    })
}



export async function updateDish (
    values: {
        key: string;
        title: string;
        price: number;
    }) 
{

console.log(values)
    return axios.patch(`${apiHostName}/menus/control-panel`, {
        id: values.key,
        title: values.title,
        price: values.price,
    })
    .then((res) => {
        // to do treat response
        return res.data
    })
    .catch((error) => {
        // to do treat error
        console.log(error);
    })
}



export async function addBooking (
    values: {
        nbPersons: number;
        date: Date;
        hours: string;
        phone: string;
        firstName: string;
        lastName: string;
}) {


    return axios.post(`${apiHostName}/slots/booking`, {
        nbPersons: values.nbPersons,
        date: `${values.date.getFullYear()}-${values.date.getMonth()+1}-${values.date.getDate()}`,
        hours: values.hours,
        phone: values.phone,
        firstName: values.firstName,
        lastName: values.lastName,
    })
    .then((res) => {
        // to do treat response
        const newBooking = res.data;
        return newBooking
    })
    .catch((error) => {
        // to do treat error
        console.log(error);
    })
}

export async function fetchBooking () {

    return  axios.get(`${apiHostName}/slots/control-pannel`)
      .then(res => {
        return res.data
    })
    .catch((error) => {
        // to do treat error
        console.log(error);
        return []
    })
}

export async function fetchCapacityRestaurant () {

    return  axios.get(`${apiHostName}/slots/booking`)
      .then(res => {
        return res.data
    })
    .catch((error) => {
        // to do treat error
        console.log(error);
        return []
    })
}


export async function updateCapacity (nbPersonsMax: number) 
{

    return axios.patch(`${apiHostName}/slots/control-panel`, {
        nbPersonsMax: nbPersonsMax,
    })
    .then((res) => {
        // to do treat response
        return res.data
    })
    .catch((error) => {
        // to do treat error
        console.log(error);
    })
}