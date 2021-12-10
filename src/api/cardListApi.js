import axios from "axios";

//아마 url 넣는곳?
axios.defaults.baseURL = "http://54.180.125.34:3000";

export const carsApi = {
    cars : function (data) {
        return axios({
            method:'GET',
            url:`/api/cars`,
            //FIXME: data : data였다!
            data : {},
            // headers : {'content-type' : 'application/json;charset=UTF-8'},
        })
    }
}