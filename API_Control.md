# 控制 API

## RX78::Device::Open <small>RX78设备.打开</small>

打开设备，其他操作都需要打开成功后才能进行。所需信息的查看方法请看 [设备信息的查看方法](QNA.md#如何查看设备名和设备-id)。

| 参数                                           | 注释                                                         |
| ---------------------------------------------- | ------------------------------------------------------------ |
| device_ID<span class="e">设备ID</span>         | 形如 XXXX-XXXX-XXXX，包括横杠，不包括方括号，字母全部为大写。 |
| target_resolution_x<small>目标屏幕宽度</small> | 默认值为当前屏幕宽度。                                       |
| target_resolution_y<small>目标屏幕高度</small> | 默认值为当前屏幕高度。                                       |
| device_type <span class="e">设备类型</span>    | 兼容旧版本硬件，新版本不填。可选值为： DeviceType::k1 <span class="e">#设备类型_1头</span>（1 头）、DeviceType::k2 <span class="e">#设备类型_2头</span>（2 头）、DeviceType::k3 <span class="e">#设备类型_3头</span>（3 头）。 |
| mouse_mode <span class="e">鼠标模式</span>     | 兼容旧版本硬件，新版本不填。可选值为：MouseMode::kRelative <span class="e">#鼠标模式_相对</span>（3 头）、MouseMode::kBoth <span class="e">#鼠标模式_相对和绝对</span>（1 头、2 头）。 |

## RX78::Device::Close <small>RX78设备.关闭</small>
对象销毁时会自动调用此方法关闭设备。

## RX78::Device::Restart <small>RX78设备.重启</small>
可在配置设备ID、厂商ID、产品ID后重启设备，以刷新信息。

成功后内部会调用 Close。

## RX78::Device::RestartMouse <small>RX78设备.重启鼠标</small>
只有 3 头设备有效。

## RX78::Device::RestartKeyboard <small>RX78设备.重启键盘</small>
只有 3 头设备有效。

## RX78::Device::RestartMaster <small>RX78设备.重启控制端</small>
只有 2 头或 3 头设备有效。

## RX78::Device::RestartWorker <small>RX78设备.重启被控端</small>
只有 2 头或 3 头设备有效。
