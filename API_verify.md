# 验证 API

## RX78::Device::ConfigData <small>RX78设备.配置数据</small>
将数据写入设备中，用于验证。

| 参数                           | 注释       |
| ------------------------------ | ---------- |
| data<small>数据</small> | 写入设备用于验证的数据。长度要求大于 0 小于 60。只能用于验证是否一致，不可读取。 |

## RX78::Device::ConfigData <small>RX78设备.验证数据</small>
验证设备中的数据是否于传入数据相同。

| 参数                           | 注释       |
| ------------------------------ | ---------- |
| data<small>数据</small> | 用于验证的数据。长度要求大于 0 小于 60。 |