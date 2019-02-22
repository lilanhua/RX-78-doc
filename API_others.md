# 其他 API

## RX78::Device::SetTargetResolution <small>RX78设备.设置目标机器分辨率</small>
保存目标机器的分辨率到程序中，用于绝对坐标移动。

| 参数 | 注释           |
| ---- | -------------- |
| x    | 水平方向分辨率 |
| y    | 竖直方向分辨率 |



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