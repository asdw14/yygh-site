import request from '@/utils/request'

const api_name = `/api/msm`

export default {
    // sendCode(mobile) {
    //     return request({
    //         url: `${api_name}/send/${mobile}`,
    //         method: `get`
    //     })
    // }
    sendCode(mobile) {
        return request({
            url: `${api_name}/sendEmail/${mobile}`,
            method: `get`
        })
    }
}
