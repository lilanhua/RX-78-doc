# 配置 API

配置 API 都需要重新插入设备或调用 [RX78::Device::Restart <small>RX78设备.重启</small>](API_control.md#rx78devicerestart-rx78设备重启) 后生效。

## RX78::Device::ConfigVendorID <small>RX78设备.配置厂商ID</small>

配置整个设备的厂商ID，2 头和 3 头设备将把把所有头都设置为相同的ID。

| 参数                           | 注释       |
| ------------------------------ | ---------- |
| vendor_ID<small>厂商ID</small> | 新的ID。 |

## RX78::Device::ConfigMouseVendorID <small>RX78设备.配置鼠标厂商ID</small>
仅 3 头设备有效。

| 参数                           | 注释       |
| ------------------------------ | ---------- |
| vendor_ID<small>厂商ID</small> | 新的ID。 |

## RX78::Device::ConfigKeyboardVendorID <small>RX78设备.配置键盘厂商ID</small>
仅 3 头设备有效。

| 参数                           | 注释       |
| ------------------------------ | ---------- |
| vendor_ID<small>厂商ID</small> | 新的ID。 |

## RX78::Device::ConfigMasterVendorID <small>RX78设备.配置控制端厂商ID</small>
仅 2 头 和 3 头设备有效。

| 参数                           | 注释       |
| ------------------------------ | ---------- |
| vendor_ID<small>厂商ID</small> | 新的ID。 |

## RX78::Device::ConfigWorkerVendorID <small>RX78设备.配置被控端厂商ID</small>
仅 2 头 和 3 头设备有效。

| 参数                           | 注释       |
| ------------------------------ | ---------- |
| vendor_ID<small>厂商ID</small> | 新的ID。 |

## RX78::Device::ConfigProductID <small>RX78设备.配置产品ID</small>
配置整个设备的产品ID，2 头和 3 头设备将把把所有头都设置为相同的ID。

| 参数                           | 注释       |
| ------------------------------ | ---------- |
| vendor_ID<small>产品id</small> | 新的ID。 |

## RX78::Device::ConfigMouseProductID <small>RX78设备.配置鼠标产品ID</small>
仅 3 头设备有效。

| 参数                           | 注释       |
| ------------------------------ | ---------- |
| vendor_ID<small>产品id</small> | 新的ID。 |

## RX78::Device::ConfigKeyboardProductID <small>RX78设备.配置键盘产品ID</small>
仅 3 头设备有效。

| 参数                           | 注释       |
| ------------------------------ | ---------- |
| vendor_ID<small>产品id</small> | 新的ID。 |

## RX78::Device::ConfigProductID <small>RX78设备.配置控制端产品ID</small>
仅 2 头 和 3 头设备有效。

| 参数                           | 注释       |
| ------------------------------ | ---------- |
| vendor_ID<small>产品id</small> | 新的ID。 |

## RX78::Device::ConfigProductID <small>RX78设备.配置被控端产品ID</small>
仅 2 头 和 3 头设备有效。

| 参数                           | 注释       |
| ------------------------------ | ---------- |
| vendor_ID<small>产品id</small> | 新的ID。 |

## RX78::Device::ConfigName <small>RX78设备.配置名称</small>
配置整个设备的名称，2 头和 3 头设备将把把所有头都设置为相同的ID。

| 参数                             | 注释                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| device_name<small>名称</small> | 新的设备名。名称长度要求大于 0 小于 29，一个中文符号也算一个长度。 |

## RX78::Device::ConfigMouseName <small>RX78设备.配置鼠标名称</small>
仅 3 头设备有效。

| 参数                             | 注释                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| device_name<small>名称</small> | 新的设备名。名称长度要求大于 0 小于 29，一个中文符号也算一个长度。 |

## RX78::Device::ConfigKeyboardName <small>RX78设备.配置键盘名称</small>
仅 3 头设备有效。

| 参数                             | 注释                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| device_name<small>名称</small> | 新的设备名。名称长度要求大于 0 小于 29，一个中文符号也算一个长度。 |

## RX78::Device::ConfigMasterName <small>RX78设备.配置控制端名称</small>
仅 2 头 和 3 头设备有效。

| 参数                             | 注释                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| device_name<small>名称</small> | 新的设备名。名称长度要求大于 0 小于 29，一个中文符号也算一个长度。 |

## RX78::Device::ConfigWorkerName <small>RX78设备.配置被控端名称</small>
仅 2 头 和 3 头设备有效。

| 参数                             | 注释                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| device_name<small>名称</small> | 新的设备名。名称长度要求大于 0 小于 29，一个中文符号也算一个长度。 |
