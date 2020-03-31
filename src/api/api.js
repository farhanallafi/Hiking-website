import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})
const getOldHike = (hike)=>api.get(`/oldhikes/${hike}`)


const getNewHike = (hike)=>api.get(`/newhikes/${hike}`)


const hikeRegister = (user)=>api.post(`/users/register`,user)

const login = (user)=>api.post(`/users/login`,user)

const apis={
    getNewHike,getOldHike,hikeRegister,login
   
}
export default apis