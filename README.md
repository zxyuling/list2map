# list2map

将 list 转换为 map

### 普通数组

如果不传入第二个参数或传入`null`，将会以数组的`index`作为`map`的`key`

```js
const list = [0, 1, 2];
const map = list2map(list);
//map:{0: 0, 1: 1, 2: 2};
```

### 对象数组

值得注意的是`map`的`value`将会和对象数组的`项`具有相同引用

```js
const list = [
  { id: "id_0", content: "a" },
  { id: "id_1", content: "b" },
  { id: "id_2", content: "c" },
];
const map = list2map(list, "id");
//map:
//  {
//   id_0: { id: "id_0", content: "a" },
//   id_1: { id: "id_1", content: "b" },
//   id_2: { id: "id_2", content: "c" },
// };


```

### 值格式化
第三个参数为格式化函数，入参为数组的`项` ，出参将会作为`map`的`值`

```js
const list = [
  { id: "id_0", content: "a" },
  { id: "id_1", content: "b" },
  { id: "id_2", content: "c" },
];
const map = list2map(list, "id", (value) => value.content);
//map:{"id_0": "a", "id_1": "b", "id_2":"c"};

```