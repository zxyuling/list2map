interface ValueFormater {
    (value: any): any;
}
interface List2map {
    (list: Array<any>, key: string | null, valueFormater: ValueFormater): {
        [key: string]: any;
    };
}
declare const list2map: List2map;
