import axios from 'axios'
import { POKEMERN_URL } from './constant'

export default axios
.get(`${POKEMERN_URL}`).catch((error) => {
  console.log(error)
})
