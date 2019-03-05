# 键盘 API

键盘 API 所使用的键码均为虚拟键码，VC++ 的键码常量在 `enum class RX78::VirtualKeyCode` 中，易语言为以 `#Vk` 开头的常量。

## RX78::Device::Keydown<small>RX78设备.按下</small>
| 参数                                    | 注释                   |
| --------------------------------------- | ---------------------- |
| virtual_key_code<small>虚拟键码</small> | 要按下的键的虚拟键码。 |

## RX78::Device::Keyup<small>RX78设备.弹起</small>
| 参数                                    | 注释                 |
| --------------------------------------- | -------------------- |
| virtual_key_code<small>虚拟键码</small> | 要弹的键的虚拟键码。 |

## RX78::Device::KeyPress<small>RX78设备.击键</small>
按下后弹起按键，若按下或弹起过程中失败，则提前返回。

| 参数                           | 注释       |
| ------------------------------ | ---------- |
| virtual_key_code<small>虚拟键码</small> | 要按下弹起的键的虚拟键码。 |
| sleep_after_down_range<small>按下后延时范围</small> | 按下键盘后随机延迟的范围，默认为 { 50, 80 }，即大于等于 50 ms，小于等于 80 ms。 |
| sleep_after_down_range<small>弹起后延时范围</small> | 弹起键盘后随机延迟的范围，默认为 { 150, 600 }，即大于等于 150 ms，小于等于 600 ms。 |

## RX78::Device::GetKeyState<small>RX78设备.取键状态</small>
该方法取得的按键状态时设备内记录的状态。

| 参数                                    | 注释                     |
| --------------------------------------- | ------------------------ |
| virtual_key_code<small>虚拟键码</small> | 要取状态的键的虚拟键码。 |
| is_downed<small>是否按下</small>        | 返回按键是否按下。       |

## RX78::Device::ReleaseAllKeys<small>RX78设备.释放所有键</small>
弹起所有按键。如果出现按键异常，可以调用该方法恢复。

## RX78::Device::GetLedState<small>RX78设备.取LED状态</small>

| 参数                             | 注释                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| button<small>鼠标按键</small>    | VC++ 可选值为 enum Button，易语言可选值为：#鼠标左键、#鼠标右键、#鼠标中键。 |
| is_downed<small>是否按下</small> | 返回指定按键是否按下。                                       |

## RX78::Device::GetButtonState<small>RX78设备.取鼠标按键状态</small>

| 参数                          | 注释                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| led<small>led</small>         | 目标 LED，VC++ 可选值为 `enum class RX78::Led`，易语言为以 `#Led` 开头的常量。 |
| is_lit<small>是否亮着</small> | 返回 LED 是否亮着。                                          |

## RX78::Device::Type<small>RX78设备.打字</small>

| 参数                                                | 注释                                                         |
| --------------------------------------------------- | ------------------------------------------------------------ |
| str<small>文本</small>                              | 要输入的文本，支持中英文。                                   |
| sleep_after_down_range<small>按下后延时范围</small> | 按下键盘后随机延迟的范围，默认为 { 50, 80 }，即大于等于 50 ms，小于等于 80 ms。 |
| sleep_after_down_range<small>弹起后延时范围</small> | 弹起键盘后随机延迟的范围，默认为 { 150, 600 }，即大于等于 150 ms，小于等于 600 ms。 |

## RX78::Device::TypeW<small>RX78设备.打字W</small>

支持中英文。一些输入框使用 Type 乱码，尝试使用此方法。

| 参数                                                | 注释                                                         |
| --------------------------------------------------- | ------------------------------------------------------------ |
| str<small>文本</small>                              | 要输入的文本，支持中英文。                                   |
| sleep_after_down_range<small>按下后延时范围</small> | 按下键盘后随机延迟的范围，默认为 { 50, 80 }，即大于等于 50 ms，小于等于 80 ms。 |
| sleep_after_down_range<small>弹起后延时范围</small> | 弹起键盘后随机延迟的范围，默认为 { 150, 600 }，即大于等于 150 ms，小于等于 600 ms。 |