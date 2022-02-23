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
    },
  // 获取可预约排班数据
  getBookingScheduleRule(page, limit, hoscode, depcode) {
    return request({
        url: `${api_name}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
        method: 'get'
    })
},
    // 获取排班数据
findScheduleList(hoscode, depcode, workDate) {
    return request({
        url: `${api_name}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
        method: 'get'
    })
},

//根据id获取排班数据
getSchedule(id) {
    return request({
      url: `${api_name}/getSchedule/${id}`,
      method: 'get'
    })
    }
    


}