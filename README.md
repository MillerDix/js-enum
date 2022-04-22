# js-enum
## what for
fake enum for js

## usage
export const STATUS_ENUM = JSEnum([
  { key: 'VALID', value: 1, label: '生效中' },
  { key: 'INVALID', label: '已失效' },
  { key: 'DELETED', value: 3, label: '已删除' }
]);
