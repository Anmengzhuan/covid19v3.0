import { request } from "./request";

export function getTotalInChinadata() {
    return request({
        url: 'http://47.95.230.134:8080/covid19/totalinchina'
    })
}

export function getTotalInWorld() {
    return request({
        url: 'http://47.95.230.134:8080/covid19/totalinworld',
        
    })
}

export function getWorldnews() {
    return request({
        url: 'http://47.95.230.134:8080/covid19/worldformation',
        params: {
            limit: 6
          },
    })
}

export function getChinanews() {
    return request({
        url: 'http://47.95.230.134:8080/covid19/chinaformation',
        params: {
            limit: 6
          },
    })
}

export function getChinaseven() {
    return request({
        url: 'http://47.95.230.134:8080/covid19/chinaformation',
        
    })
}

export function gethero() {
    return request({
        url: 'http://47.95.230.134:8080/covid19/vaccines/hero',
        params: {
            limit: 6
          },
    })
}

export function getyimiao() {
    return request({
        url: 'http://47.95.230.134:8080/covid19/vaccines',
        params: {
            limit: 8
          },
    })
}


