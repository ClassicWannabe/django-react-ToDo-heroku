import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://django-react-todo-application.herokuapp.com/api'
})

export default instance