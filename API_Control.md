# 控制 API

## RX78::Device::Open <small>RX78设备.打开</small>

打开设备，其他操作都需要打开成功后才能进行。所需信息的查看方法请看 [设备信息的查看方法]()。

| 参数                            | 注释                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| device_id<small>设备ID</small>  | 形如 XXXX-XXXX-XXXX，包括横杠，不包括方括号，字母全部为大写 |
| vendor_id<small>厂商ID</small>  | 默认值为 0x1979，可自行配置                                  |
| product_id<small>产品ID</small> | 默认值为 0x0407，可自行配置                                  |

## RX78::Device::Close <small>RX78设备.关闭</small>
对象销毁时会自动调用此方法关闭设备。

## RX78::Device::Restart <small>RX78设备.重启</small>
可在配置设备ID、厂商ID、产品ID后重启设备，以刷新信息。
