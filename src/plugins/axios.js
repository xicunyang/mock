import axios from 'axios'

function configAxios() {
  axios.onRequest(config=>{
    console.log('i am in',config);
    return config
  })
}


export default configAxios
