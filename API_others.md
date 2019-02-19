# 其他 API

## RX78::Device::SetTargetResolution <small>RX78设备.设置目标机器分辨率</small>
保存目标机器的分辨率到程序中，用于绝对坐标移动。

| 参数 | 注释           |
| ---- | -------------- |
| x    | 水平方向分辨率 |
| y    | 竖直方向分辨率 |



## RX78::Device::SetTimeout <small>RX78设备.设置超时</small>
设置通讯超时，当发送命令到设备后，等待时间超过此时间时，返回 `RX78::Result::Timeout` 或 `#RX78结果_超时`。

| 参数  | 注释     |
| ----- | -------- |
| value | 超时数值 |

