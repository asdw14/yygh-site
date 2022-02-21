import request from "@/utils/request"

const api_name = `/api/hosp/hospital`
export default {
    getPageList(page, limit, searchObj) {
        return request({
            url: `${api_name}/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
      },
    
     getByHosname(hosname) {
        return request({
            url: `${api_name}/findByHosname/${hosname}`,
            method: 'get'
        })
      },

      //根据医院编号查详情
      show(hoscode) {
        return request({
            url: `${api_name}/${hoscode}`,
            method: 'get'
        })
    },
    //根据医院编号查科室
    findDepartment(hoscode) {
        return request({
            url: `${api_name}/department/${hoscode}`,
            method: 'get'
        })
    }



}