如果用ajax加载一个数据API，http://example.com/data，通过哪些方式控制该API是否可以被缓存，并从性能和维护的角度出发

- 客户端
  - 让每次请求的 URL 都不一样，添加时间戳或随机数（会加重服务器负担）
  - jQuery：设置缓存参数
- 服务端-HTTP响应头（方便集中维护缓存控制状态）
  - `Cache-Control` 字段
  - `Expires`
  - `ETag` 