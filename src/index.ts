interface ValueFormater {
  (value: any): any;
}

interface List2map {
  (list: Array<any>, key: string | null, valueFormater: ValueFormater): {
    [key: string]: any;
  };
}

const list2map: List2map = (
  list: Array<any>,
  key: string | null,
  valueFormater: ValueFormater = (value) => value
): { [key: string]: any } => {
  return list.reduce((res, item, index) => {
    if (key) {
      res[item[key]] = valueFormater(item);
    } else {
      res[index] = valueFormater(item);
    }
    return res;
  }, {});
};

export default list2map;