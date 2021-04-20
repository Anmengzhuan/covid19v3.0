import {request} from "./request";

export function getHerodata(){
    return request({
        url:'/covid19/local/hero'
    })
}