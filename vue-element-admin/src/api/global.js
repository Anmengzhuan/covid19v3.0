import {request} from "./request";

export function getAllCountrydata(){
    return request({
        url:'http://47.95.230.134:8080/covid19/country'
    })
}

export function getGlobalNesdata(){
    return request({
        url:'http://47.95.230.134:8080/covid19/worldformation'
    })
}