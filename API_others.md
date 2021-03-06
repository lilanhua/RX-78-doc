# 其他 API

## RX78::Device::GetDeviceType<small>RX78设备.取设备类型</small>
| 参数 | 注释                                                         |
| ---- | ------------------------------------------------------------ |
| type | 可能的值为：DeviceType::k1<span class="e">#设备类型_1头</span>、DeviceType::k2<span class="e">#设备类型_2头</span>、DeviceType::k3<span class="e">#设备类型_3头</span> |



## RX78::Device::SetTimeout <small>RX78设备.设置超时</small>
设置通讯超时，当发送命令到设备后，等待时间超过此时间时，返回 `RX78::Result::Timeout` 或 `#RX78结果_超时`。

| 参数                         | 注释   |
| ---------------------------- | ------ |
| timeout<small>超时值</small> | 超时值 |

## RX78::GetSystemError <small>RX78设备.取系统错误</small>
一般在 windows API 失败后应用 GetLastError 取错误代码，但易语言等内部函数会导致最后的错误代码发生改变，所以接口库会在 API 错误后将错误代码保存，而后用此 API 取出。

## RX78::ResultToStr <small>RX78结果到文本</small>
将返回结果代码转为字符串

| 参数  | 注释     |
| ----- | -------- |
| result<small>结果</small> | 结果    |

## RX78::GetLibVersion <small>RX78取库版本</small>
取当前使用的库的版本号