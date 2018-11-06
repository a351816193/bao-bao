/* setInterval对象list */
const _INTERVALLIST = {}

export const setScrollTop = (top) => {
    _INTERVALLIST['setScrollTop'] = _INTERVALLIST['setScrollTop'] || [];
    
    let time = 300;
    let tick = 10;
    let count = 0;
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let step = (top - scrollTop) / time * tick;
    
    while(_INTERVALLIST['setScrollTop'].length > 0) {
    clearInterval(_INTERVALLIST['setScrollTop'][0])
    _INTERVALLIST['setScrollTop'].splice(0, 1)
    }
    
    let interval = setInterval(() => {
    count ++;
    
    if (count * tick > 300) {
    clearInterval(interval);
    document.documentElement.scrollTop = document.body.scrollTop = top;
    _INTERVALLIST['setScrollTop'].splice(0, 1)
    } else {
    document.documentElement.scrollTop = document.body.scrollTop = scrollTop + step * count;
    }
    }, tick)
    
    _INTERVALLIST['setScrollTop'].push(interval);
}

export const getUrlParam = (paramStr) => {
    let params = window.location.href.split('?')[1] || ''
    paramStr = paramStr.toLowerCase()
    if (params) {
        let p = params.split('&')
        for (let i = 0; i < p.length; i ++) {
            let arg = p[i].split('=')
            if (arg[0].toLowerCase() === paramStr) {
                return arg[1]
            }
        }
    }
    return undefined
}

const common = {
    setScrollTop,
    getUrlParam
}

export default common