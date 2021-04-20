import {request} from "./request";

export function getHerodata(){
    return request({
        url:'http://47.95.230.134:8080/covid19/local/hero'
    })
}