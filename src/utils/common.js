
//1->common.js中引入axios
import axios from 'axios'
axios.defaults.timeout = 180000
//2->对get请求传递过来的参数处理
function paramsToUrl(url, params) {
    if (!params) return url
    for (var key in params) {
        if (params[key] && params[key] != 'undefined') {
            if (url.indexOf('?') != -1) {
                url += '&' + '' + key + '=' + params[key] || '' + ''
            } else {
                url += '?' + '' + key + '=' + params[key] || '' + ''
            }
        }
    }
    return url
}

//3->在common.js中封装公用方法-----封装请求的方法
export default function requireData(url, params, type, item) {
    if (!url) return false
    console.log(url)
    if (type === 'get') {
        url = paramsToUrl(url, params)
        return new Promise((resolve, reject) => {
            axios.get(url, params).then(res => { resolve(res.data) }).catch(
                err => {
                    reject(err)
                })
        })
    } else {
        return new Promise((resolve, reject) => {
            os.post(url, params).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}