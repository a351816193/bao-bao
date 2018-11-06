import axios from 'axios'

const _host = '47.92.77.182'

const _port = '8080'

const _protocol = ''

const _version = 'v1'

let _domainInfo = null

function checkUrl(url, isNeedDomainInfo) {
    let reg = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/
    if (reg.test(url)) {
        return url
    }
    let host = _host || location.host
    let port = _port || location.port
    let protocol = _protocol || location.protocol

    return [protocol, '//', host, (port ? (':' + port) : ''), '/', _version, '/api/', (isNeedDomainInfo && _domainInfo ? _domainInfo.id : ''), url].join('')
}

export const fetchRequest = (url, params, method = 'POST', isNeedDomainInfo = true) => {
    
    return new Promise((resolve, reject) => {
        let callback = () => {
            let requestUrl = checkUrl(url, isNeedDomainInfo)
            if (method === 'POST') {
                axios.post(requestUrl, params).then(success => {
                    if (success.data.code === 1000) {
                        resolve(success.data)
                    } else {
                        reject(success)
                    }
                }).catch(error => {
                    reject(error)
                })
            } else if (method === 'GET') {
                axios.get(requestUrl, {
                    params: params
                }).then(success => {
                    if (success.data.code === 1000) {
                        resolve(success.data)
                    } else {
                        reject(success)
                    }
                }).catch(error => {
                    reject(error)
                })
            }
        }
        if (!_domainInfo && isNeedDomainInfo) {
            API_GetDomainInfo({path:'baosightcn'}).then(su => {
                _domainInfo = su.data
                callback()
            }).catch(er => {})
        } else {
            callback()
        }
    }) 
}

// 获取主机信息 用于识别站点
export const API_GetDomainInfo = (params) => {
    return fetchRequest('/domain', params, 'GET', false)
}

// 获取菜单信息
export const API_GetMenuList = (params) => {
    return fetchRequest('/node/list', params, 'GET')
}

// 获取文章内容
export const API_GetContentByNodeId = (params) => {
    return fetchRequest(['', params.nodeId, 'content/list'].join('/'), {pageNo:params.pageNo, pageSize:params.pageSize}, 'POST')
}

// 查询内容
export const API_GetSearchResult = (params) => {
    return fetchRequest('/content/search', params, 'POST')
}

// 查询子栏目
export const API_GetChildNode = (params) => {
    return fetchRequest('/node/list', params, 'POST')
}

// 查询内容
export const API_GetContentById = (params) => {
    return fetchRequest(['/content', params.contentId].join('/'), '', 'GET', false)
}

// 获取验证码内容
export const API_GetVerifyCode = (params) => {
    return fetchRequest('/feedback/verifycode', params, 'GET', false)
}

// 提交信息反馈
export const API_AddFeedback = (params) => {
    return fetchRequest('/feedback/add', params, 'POST')
}

// 查询节点信息
export const API_GetNodeDetail = (params) => {
    return fetchRequest('/node/' + params.nodeId + '/list', '', 'GET')
}