import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})
const getOldHike = (hike)=>api.get(`/oldhikes/${hike}`)

const apis={
    getOldHike,
    
}
export default apis 