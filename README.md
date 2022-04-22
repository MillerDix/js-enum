# js-enum

fake enum for js

## usage

```javascript
export const STATUS_ENUM = JSEnum([
  { key: "VALID", value: 1, label: "生效中" },
  { key: "INVALID", label: "已失效" },
  { key: "DELETED", value: 3, label: "已删除" },
]);

console.log(STATUS_ENUM.VALID); // 1
console.log(STATUS_ENUM.INVALID); // 2
console.log(STATUS_ENUM.DELETED); // 3
console.log(STATUS_ENUM.getValues()); // [{ label: '生效中', value: 1 }, { label: '已失效', value: 2 }, { label: '已删除', value: 3 }]
```

## example for admin site (using element-ui)

```javascript
// list-page.js
const STATUS_ENUM = JSEnum([
  { key: "VALID", value: 1, label: "生效中" },
  { key: "INVALID", label: "已失效" },
  { key: "DELETED", value: 3, label: "已删除" },
]);
```

### selector

```javascript
<el-form-item label="状态">
  <el-select v-model="form.status">
    <el-option label="全部" key="0" :value="undefined"></el-option>
    <el-option v-for="status in STATUS_ENUM.getValues()" :key="status.value" :value="status.value" :label="status.label"></el-option>
  </el-select>
</el-form-item>
```

![](https://github.com/MillerDix/js-enum/blob/master/src/images/WechatIMG233.png)

### table-cell

```javascript
const tableColumns = [
  {
    title: "状态",
    key: "status",
    align: "center",
    render: (h, { row }) => <span>{STATUS_ENUM[row.status]}</span>,
  },
];
```

![](https://github.com/MillerDix/js-enum/blob/master/src/images/WechatIMG234.png)
