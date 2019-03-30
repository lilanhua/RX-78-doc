# 结果代码

| 名称                                                         | 注释                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| RX78::Result::kSuccess<small>#RX78结果_成功</small>          | 操作成功。                                                   |
| RX78::Result::kSystemError<small>#RX78结果_系统错误</small>  | 返回此值时，易语言使用 `RX78设备.取最后错误()` VC++ 使用 `GetLastError()` 取系统错误码，判断错误。 |
| RX78::Result::kDeviceNotFound<small>#RX78结果_未找到设备</small> | 请检查设备是否已经插入以及设备 id 是否正确。                 |
| RX78::Result::kInvalidResolutionValue<small>#RX78结果_无效分辨率</small> | 请确认设置的分辨率是否大于 0。                               |
| RX78::Result::kTimeout<small>#RX78结果_超时</small>          | 请确定双头设备两端都已经正确插入，并确认超时值是否过小。     |
| kInvalidTimeoutValuet<small>#RX78结果_无效超时值</small>     | 请确认设置的超时值是否大于 0。                               |
| kCursorUnreset<small>#RX78结果_未重置光标</small>            | 需要先调用一次调用重置光标。                                 |
| RX78::Result::kInvalidKeyValue<small>#RX78结果_无效键码</small> | 按键代码无效，关于键码请查看 [按键代码](API_keycode.md)。    |
| RX78::Result::kKeyFull<small>#RX78结果_按键已满</small>      | 最多支持 6个普通按键 + 8个控制按键无冲突按键。               |
| RX78::Result::kNotModified<small>#RX78结果_未修改</small>    | 若指定的鼠标按键或键盘按键已经按下，再要求设备按下时返回此值。 |
| RX78::Result::kInvalidSize<small>#RX78结果_无效大小</small>  | 配置数据或名称时数据大小超出规定的值，设备名称长度必须大于 0， 最多 29 个字符（中文字符算一个字符），验证数据长度必须大于0，最多 60 个字节。 |
| RX78::Result::kInvalidPkgType<small>#RX78结果_无效包类型</small> | 一般为接口库内部错误。                                       |
| RX78::Result::kConfigError<small>#RX78结果_配置失败</small>  | 配置过程中发生硬件错误等。                                   |
| RX78::Result::kVerifyFailed<small>#RX78结果_验证失败</small> | 验证数据不匹配。                                             |
| RX78::Result::kInvalidResult<small>#RX78结果_无效结果</small> | 一般为接口库或硬件错误。                                     |

