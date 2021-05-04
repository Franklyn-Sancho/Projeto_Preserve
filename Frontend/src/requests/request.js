import axios from 'axios';

export const getUser = () => {
   axios.get()
    .then(response => response.data)
    .catch(error => error)
}

export const postUser = () => {
    axios.post('/')
     .then(response => response.data)
     .catch(error => error)
}


// use esses métodos com o useHistory