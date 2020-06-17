import axios from 'axios'

/**
 * 创建/修改部门
 * @param {*} modify true：修改，false：创建
 * @param {
 *  code 费用代码，不为空
 *  name 部门名称，不为空
 *  details 部门详情
 *  region 地区
 *  province 省
 *  city 市
 *  county 县
 *  address 地址
 *  area 园区
 *  ancestor 所属部门，从最高层级开始，逗号隔开
 * } company 部门信息
 */
export async function saveCompany(modify, company) {
    var _method = modify ? 'put' : 'post'
    return axios({
        url: `/api/company/`,
        data: company,
        method: _method
    })
}

/**
 * 启用/禁用部门
 * @param {\\d+} companyId 部门编号
 * @param {^[01]$} status 1：禁用，0启用
 */
export async function disableCompany(companyId, status) {
    return axios({
        url: `/api/company/disable/${companyId}/${status}`,
        method: `put`
    })
}

/**
 * 删除部门
 * @param {\\d+} companyId 部门编号
 */
export async function deleteCompany(companyId) {
    return axios({
        url: `/api/company/${companyId}`,
        method: `delete`
    })
}

/**
 * 获取所有的部门
 */
export async function queryCompanies() {
    return axios({
        url: `/api/company/descendants`,
        method: `get`
    })
}

/**
 * 获取部门信息
 * @param {\\d+} companyId 部门编号
 */
export async function getCompanyById(companyId) {
    return axios({
        url: `/api/company/${companyId}`,
        method: `get`
    })
}

/**
 * 获取该部门的下属部门
 * @param {\\d+} companyId 部门编号
 */
export async function getCompanyDescendantsById(companyId) {
    return axios({
        url: `/api/company/ancestor/${companyId}`,
        method: `get`
    })
}

/** */

/**
 * 新增用户
 * @param {
 *  no 工号，不为空
 *  name 姓名，不为空
 *  email 邮箱地址，不为空
 *  openId 微信公众工号ID
 *  icivetId 香信ID
 *  phone 手机号
 *  ext 分机
 *  companyIds 部门层级，不为空
 *  roles 权限
 * } user
 */
export async function newUser(user) {
    return axios({
        url: `/api/user/`,
        method: `post`,
        data: user
    })
}

/**
 * 查询用户
 * @param {*} companyId 部门编号
 * @param {*} status
 * @param {*} page
 * @param {*} size
 */
export async function queryUsers(companyId, status, page, size) {
    var _url = ''
    if (companyId === '' || companyId == undefined) {
        _url = `${host}/api/user/status/${status}?page=${page}&size=${size}`
    } else {
        _url = `${host}/api/user/company/${companyId}/${status}?page=${page}&size=${size}`
    }
    return axios({
        url: _url,
        method: `get`
    })
}

/**
 *  启用/禁用用户
 * @param {*} userid  用户编号
 * @param {*} disable 1：禁用，0：启用
 */
export async function disableUser(userid, disable) {
    return axios({
        url: `${host}/api/user/disable/${userid}/${disable}`,
        method: `put`
    })
}

/**
 * 删除用户
 * @param {*} userid 用户编号
 */
export async function deleteUser(userid) {
    return axios({
        url: `${host}/api/user/${userid}`,
        method: `delete`
    })
}

/**
 * 查询该用户所属部门的层级关系
 * @param {*} userid 用户编号
 */
export async function queryCompanyRelations(userid) {
    return axios({
        url: `${host}/api/user/company/relations/${userid}`,
        method: `get`
    })
}

/**
 * 修改用户信息
 * @param {*} user  用户信息
 */
export async function updateUser(user) {
    return axios({
        url: `${host}/api/user/`,
        method: `put`,
        data: user
    })
}

/**
 * 重置密码
 * @param {*} userid 用户编号
 */
export async function resetPwd(userid) {
    return axios({
        url: `${host}/api/user/reset_pwd/${userid}`,
        method: `put`
    })
}

/** */

/**
 * 新增/保存资源
 * @param {*} modify true：修改，false：新增
 * @param {*} action 资源类型
 * @param {*} res 资源
 */
export async function saveResource(modify, action, res) {
    var _url = `/api/${action}/`
    var _method = ''
    if (modify) {
        _method = `put`
    } else {
        _method = `post`
    }
    return axios({
        url: _url,
        method: _method,
        data: res
    })
}

/**
 * 获取资源
 * @param {*} action 资源类型
 * @param {*} all 显示所有，包含禁用
 */
export async function queryResources(action, all) {
    var _url = `/api/${action}/descendants`
    if (all) {
        _url += '?all=true'
    }
    return axios({
        url: _url,
        method: `get`
    })
}

/**
 * 启用禁用资源
 * @param {*} action 资源类型
 * @param {*} resid 资源编号
 * @param {*} status 状态，1：禁用，0：启用
 */
export async function disableResource(action, resid, status) {
    var _url = `/api/${action}/disable/${resid}/${status}`
    return axios({
        url: _url,
        method: `put`
    })
}

/**
 * 刪除资源
 * @param {*} action 资源类型
 * @param {*} resid 资源编号
 */
export async function deleteResource(action, resid) {
    var _url = `/api/${action}/${resid}`
    return axios({
        url: _url,
        method: `delete`
    })
}

/**
 * 新增、保存权限
 * @param {*} isnew true：新增，false
 * @param {*} authority 权限信息
 */
export async function saveAuthority(isnew, authority) {
    var _method = isnew ? 'post' : 'put'
    return axios({
        url: `/api/permission/`,
        method: _method,
        data: authority
    })
}

/**
 * 获取权限
 */
export async function queryAuthorities() {
    return axios({
        url: `/api/permission/all/`,
        method: 'get'
    })
}

/**
 * 启用禁用权限
 * @param {*} authorityId 权限编号
 * @param {*} status 1：禁用，0启用
 */
export async function disableAuthority(authorityId, status) {
    return axios({
        url: `/api/permission/disable/${authorityId}/${status}`,
        method: `put`
    })
}

/**
 * 删除权限
 * @param {*} authorityId 权限编号
 */
export async function deleteAuthority(authorityId) {
    return axios({
        url: `/api/permission/${authorityId}`,
        method: `delete`
    })
}

/**
 * 新增/修改角色
 * @param {*} modify false：新增，true：修改
 * @param {*} role 角色信息
 */
export async function saveRole(modify, role) {
    var _method = modify ? 'put' : 'post'
    return axios({
        url: `/api/role/`,
        method: _method,
        data: role
    })
}

/**
 * 获取所有角色
 */
export async function queryRoles() {
    return axios({
        url: `/api/role/`,
        method: `get`
    })
}

/**
 * 刪除角色
 * @param {*} roleId 角色编号
 */
export async function deleteRole(roleId) {
    return axios({
        url: `/api/role/${roleId}`,
        method: `delete`
    })
}

/**
 * 修改角色状态
 * @param {*} roleId 角色编号
 * @param {*} status 0：启用，1：禁用
 */
export async function disableRole(roleId, status) {
    return axios({
        url: `/api/role/disable/${roleId}/${status}`,
        method: `put`
    })
}

/**
 * 新增/保存设备类型
 * @param {*} modify true：修改，false：新增
 * @param {*} deviceType 设备类型
 */
export async function saveDeviceType(modify, deviceType) {
    var _method = modify ? 'put' : 'post'
    return axios({
        url: `/api/device/type/`,
        method: _method,
        data: deviceType
    })
}

/**
 * 获取设备类型
 */
export async function queryDeviceTypes() {
    return axios({
        url: `/api/device/type/all`,
        method: `get`
    })
}

/**
 * 刪除设备型号
 * @param {*} typeId 设备型号编号
 */
export async function deleteDeviceType(typeId) {
    return axios({
        url: `/api/device/type/${typeId}`,
        method: `delete`
    })
}

/**
 * 根据设备型号查询版本号
 * @param {*} typeId 设备型号id
 */
export async function queryDeviceVersions(typeId) {
    return axios({
        url: `/api/device/version/type/${typeId}`,
        method: `get`
    })
}

/**
 * 新增、修改设备版本信息
 * @param {*} modify true：修改，false：删除
 * @param {*} version 版本信息
 */
export async function saveDeviceVersion(modify, version) {
    var _method = modify ? `put` : `post`
    return axios({
        url: `/api/device/version/`,
        method: _method,
        data: version
    })
}

/**
 * 删除版本信息
 * @param {*} versionId 版本信息编号
 */
export async function deleteDeviceVersion(versionId) {
    return axios({
        url: `/api/device/version/${versionId}`,
        method: `delete`
    })
}

/**
 * 录入设备
 * @param {*} device 设备信息
 */
export async function adminAddDevices(device) {
    return axios({
        url: `/api/admin/device/`,
        method: `post`,
        data: device
    })
}

/**
 * 根据设备型号查询设备
 * @param {*} model 设备型号
 * @param {*} page 页码
 * @param {*} size 页大小
 */
export async function adminQueryDeviceByModel(model, page, size) {
    var _url = `/api/admin/device/by/model/${model}?page=${page}&size=${size}`
    return axios({
        url: _url,
        method: `get`
    })
}

/**
 * 根据设备版本编号查询设备
 * @param {*} versionId 设备版本编号
 * @param {*} page 页码
 * @param {*} size 页面大小
 */
export async function adminQueryDeviceByVersionId(versionId, page, size) {
    var _url = `/api/admin/device/by/version/${versionId}?page=${page}&size=${size}`
    return axios({
        url: _url,
        method: `get`
    })
}