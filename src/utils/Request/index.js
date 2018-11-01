import axios from 'axios'

let baseURL

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'https://product.360che.com/'
// } else {
//   // baseURL = '//api.cangdu.org'
// }

export default function Request(method, url, params) {
  return new Promise((resolve, reject) => {
    if (typeof params !== 'object') {
      params = {}
    }
    const options = {
      method,
      url,
      baseURL: baseURL,
      timeout: 30000,
      params: null,
      data: null,
      headers: null,
      withCredentials: true, //请求时是否携带cookie
      validateStatus: status => status >= 200 && status < 300,
      ...params
    }

    axios.request(options).then(
      res => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          alert(res.msg)
        }
      },
      error => {
        alert('网络错误~')
        console.log(error, 'error')
      }
    )
  })
}
