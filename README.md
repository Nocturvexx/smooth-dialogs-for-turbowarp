# Smooth Dialogs For Turbowarp

> TurboWarp 平滑弹窗拓展 —— 为你的项目带来 Material 3 风格的现代化弹窗体验。

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL--2.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)
[![Platform](https://img.shields.io/badge/Platform-TurboWarp-orange.svg)](https://turbowarp.org/)

## 📖 简介

**Smooth Dialogs For Turbowarp** 是一个 TurboWarp 自定义扩展，提供了一套完整的 Material 3 风格对话框积木。它不仅能调用浏览器原生弹窗（如 `alert`、`confirm`、`prompt`），还额外提供了消息框、轻提示（Toast）、颜色选择器、滑块、日期选择器等丰富的交互组件。

### ✨ 核心特性

- 🌐 **中英双语**：自动检测系统语言，无缝切换中/英界面文字
- 🎨 **Material 3 主题**：完美适配浅色与深色模式，圆角、阴影、动画一应俱全
- 🧩 **20+ 种积木**：覆盖系统弹窗、消息提示、二元选择、文本/数值输入、特殊选择器五大类
- 🤖 **AI 辅助开发**：几乎所有代码为AI编写，以至于这份Readme的绝大多数  

## 🧩 积木一览

### 🔔 系统弹窗
| 积木 | 说明 |
|------|------|
| 系统消息框 | 调用原生 `alert` |
| 系统确认框 | 调用原生 `confirm`，返回布尔值 |
| 系统询问框 | 调用原生 `prompt`，返回输入文本 |

### 💬 消息提示
| 积木 | 说明 |
|------|------|
| 消息框 / 信息框 / 成功框 / 警告框 / 错误框 | 不同语义的 Material 3 风格弹窗 |
| 图片展示框 | 显示带图片的弹窗 |
| 轻提示 (Toast) | 底部自动消失的轻量级提示，可自定义持续时间 |

### ✅ 二元选择
| 积木 | 说明 |
|------|------|
| 确认框 | 确定/取消，返回布尔值 |
| 是否框 | 是/否，支持 Y/N 快捷键 |
| 允许拒绝框 | 允许/拒绝，支持 A/D 快捷键 |

### ⌨️ 文本与数值输入
| 积木 | 说明 |
|------|------|
| 输入框 | 单行文本输入 |
| 多行文本输入 | 多行文本域输入 |
| 密码框 | 密码掩码输入 |
| 数字输入框 | 数字输入，返回数值 |

### 🎛️ 特殊选择器
| 积木 | 说明 |
|------|------|
| 日期框 | 日期 或 日期+时间 选择 |
| 下拉选择框 | 支持数组或键值对(JSON)数据源 |
| 颜色选择器 | 可视化取色器，返回十六进制颜色值 |
| 滑块选择 | 拖动滑块选择数值，可配置最小值/最大值/步长 |

## 🛠️ 安装方法

### 方法一：直接粘贴代码
1. 打开 [TurboWarp](https://turbowarp.org/)
2. 点击左下角 **扩展** → **自定义扩展**
3. 将 `SmoothDialog.js` 的完整代码粘贴到编辑器
4. 一定要勾选**在非沙盒环境下运行**
5. 点击 **加载**，扩展即加载完成，积木栏将出现「平滑弹窗拓展」

### 方法二：下载  
1. 使用`git clone https://github.com/Nocturvexx/smooth-dialogs-for-turbowarp.git`把仓库克隆
2. 找到`SmoothDialogs.js`，然后打开[TurboWarp](https://turbowarp.org/)
3. 还是一样操作

## ⚠️ 注意事项

- 弹窗会**阻塞**脚本执行，直到用户做出选择或输入内容
- 点击取消按钮时，输入类积木正确返回空字符串 `''`，布尔类积木返回 `false`
- 修改本扩展源代码后，修改后的文件**必须**继续以 MPL-2.0 协议开源

## 📄 开源协议

本项目基于 **Mozilla Public License 2.0 (MPL-2.0)** 许可证开源。

- 你可以自由使用、修改、分发，但需保留版权声明
- 但是修改后的源文件必须保持 MPL-2.0 协议
- 完整许可证文本请参阅：[MPL-2.0 官方文本](https://www.mozilla.org/en-US/MPL/2.0/)
- 总之正常使用基本不用管


> **AI Disclosure**: Part or all of this code was generated with the assistance of AI.
