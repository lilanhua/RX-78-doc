# 软件开发工具包

# v2.3.8
<a href="RX-78.2.3.8.zip" download="RX-78.2.3.8.zip" target="_blank">RX-78.2.3.8.zip</a>

- C++ 头文件兼容 VS2013
- C++ 添加 demo.cpp


# v2.3.7
<a href="RX-78.2.3.7.zip" download="RX-78.2.3.7.zip" target="_blank">RX-78.2.3.7.zip</a>

- COM 接口 RX78Device::Scroll(unsigned short) => RX78Device::Scroll(short)

# v2.3.6
<a href="RX-78.2.3.6.zip" download="RX-78.2.3.6.zip" target="_blank">RX-78.2.3.6.zip</a>

- C++ 增加 `SetPos` 和 `FixPos`，易语言增加 `置坐标` 和 `修正坐标`

# v2.3.5
<a href="RX-78.2.3.5.zip" download="RX-78.2.3.5.zip" target="_blank">RX-78.2.3.5.zip</a>

- 修复轨迹移动一些情况下移动不自然

# v2.3.4
<a href="RX-78.2.3.4.zip" download="RX-78.2.3.4.zip" target="_blank">RX-78.2.3.4.zip</a>

- C++ 增加 MoveRelEx 和 MoveAbsEx，易语言增加相对移动Ex和绝对移动Ex

# v2.3.3
<a href="RX-78.2.3.3.zip" download="RX-78.2.3.3.zip" target="_blank">RX-78.2.3.3.zip</a>

- 静态库关闭全程序优化（/GL）以增强兼容性
- 打开设备前先调用一次关闭（防止句柄泄露）

# v2.3.1
<a href="RX-78.2.3.1.zip" download="RX-78.2.3.1.zip" target="_blank">RX-78.2.3.1.zip</a>

- 修复 TC 接口多次打开设备导致内存泄漏

# v2.3.0
<a href="RX-78.2.3.0.zip" download="RX-78.2.3.0.zip" target="_blank">RX-78.2.3.0.zip</a>

- 增加 COM 接口（可用于 TC、按键精灵、Delphi等）
- 增加 C++ 静态库
- 增加 GetLibVersion 函数
- Python3.6 win32 接口改为静态链接（不需要 RX-78.dll）
- 修正鼠标函数传递负值导致取出的当前坐标可能为负值
- 修正中文打字没有按 NumLock 键导致输入错误
- 修正键值常量拼写错误

# v2.2.0
<a href="RX-78.2.2.0.zip" download="RX-78.2.2.0.zip" target="_blank">RX-78.2.2.0.zip</a>

- C++ GetPos 参数由 uint16_t* 改为 uint16_t& （防止空指针）
- 增加 Python3.6 win32 接口

# v2.1.5
<a href="RX-78.2.1.5.zip" download="RX-78.2.1.5.zip" target="_blank">RX-78.2.1.5.zip</a>

- 修复轨迹移动最后位置不准确

# v2.1.4
<a href="RX-78.2.1.4.zip" download="RX-78.2.1.4.zip" target="_blank">RX-78.2.1.4.zip</a>

- 增加用厂商ID和产品ID打开设备的接口
