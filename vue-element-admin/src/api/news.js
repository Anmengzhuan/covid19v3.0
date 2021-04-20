import {request} from "./request";

export function getPreventdata(){
    return request({
        url:'http://47.95.230.134:8080/covid19/prevent'
    })
}

export function getHerodata(){
    return request({
        url:'http://47.95.230.134:8080/covid19/vaccines/hero',
        params: {
            limit: 13
          },
    })
}

export function getxxx(){
    return request({
        url:'http://47.95.230.134:8080/covid19/user/city?limit=10&location=%E5%8C%97%E4%BA%AC&page=1',
        // params: {
        //     limit: 13
        //   },
    })
}