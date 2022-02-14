const list2map = (list, key, valueFormater = (value) => value) => {
    return list.reduce((res, item, index) => {
        if(key){
            res[item[key]] = valueFormater(item)
        }else{
            res[index] =  valueFormater(item)
        }
        return res
    }, {})
}
export default list2map