# 配置 API

配置 API 都需要重新插入设备或调用 [RX78::Device::Restart <small>RX78设备.重启</small>](API_control.md#rx78devicerestart-rx78设备重启) 后生效。

## RX78::Device::ConfigVendorID <small>RX78设备.配置厂商ID</small>
| 参数                           | 注释       |
| ------------------------------ | ---------- |
| vendor_ID<small>厂商ID</small> | 新的ID。 |

## RX78::Device::ConfigProductID <small>RX78设备.配置产品ID</small>
| 参数                           | 注释       |
| ------------------------------ | ---------- |
| vendor_ID<small>产品id</small> | 新的ID。 |

## RX78::Device::ConfigDeviceName <small>RX78设备.配置设备名</small>
| 参数                             | 注释                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| device_name<small>设备名</small> | 新的设备名。名称长度要求大于 0 小于 29，一个中文符号也算一个长度。 |
