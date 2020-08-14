

import axios from './ajax'

class Api {
    login(data){ 
        return axios.get('/login',data)
    }
    regisiter(data){ 
        return axios.post('regisiter',data)
    }
}

const api = new Api();
export { api }
