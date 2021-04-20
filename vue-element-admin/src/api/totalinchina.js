import {request} from "./request";

export function getTotalInChinadata(){
    return request({
        url:'/covid19/totalinchina'
    })
}