import axios from 'axios';

const services = {
    sendSearch(search){
        const config ={
            url: 'http://localhost:5000',
            body: "Test String"
        }
        axios(config)
        .then(res=>res)
        .catch(err=>console.log(err))
    }
}
export default services;