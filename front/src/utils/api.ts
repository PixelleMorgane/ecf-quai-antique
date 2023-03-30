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
    .then((response) => {
        // to do treat response
        return response
    })
    .catch((error) => {
        // to do treat error
    })
}

