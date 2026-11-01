// Name: Smooth Dialogs For Turbowarp
// ID: smoothdialog
// Description: A TurboWarp extension providing Material 3 style custom dialogs.
// By: Nocturvexx <https://github.com/Nocturvexx>
// License: MPL-2.0
//
// AI Disclosure: Part or all of this code was generated with the assistance of AI.
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

(function (Scratch) {
'use strict';
// ═══════════════════════════════════════════════════════════════
//   Internationalization (default: English, auto-detect Chinese)
// ═══════════════════════════════════════════════════════════════
const isZh = typeof navigator !== 'undefined' && navigator.language && navigator.language.toLowerCase().startsWith('zh');
const I18N = {
zh: {
categories: { system: '系统弹窗', message: '消息提示', choice: '二元选择', input: '文本与数值输入', picker: '特殊选择器' },
blocks: {
sysAlert: '系统消息框 内容 [MESSAGE]', sysConfirm: '系统确认框 内容 [MESSAGE]', sysPrompt: '系统询问框 内容 [MESSAGE] 默认值 [DEFAULT]',
alert: '消息框 标题 [TITLE] 内容 [MESSAGE]', info: '信息框 标题 [TITLE] 内容 [MESSAGE]', success: '成功框 标题 [TITLE] 内容 [MESSAGE]',
warning: '警告框 标题 [TITLE] 内容 [MESSAGE]', error: '错误框 标题 [TITLE] 内容 [MESSAGE]',
imageDialog: '图片展示框 标题 [TITLE] 内容 [MESSAGE] 图片URL [URL]',
toast: '轻提示 内容 [MESSAGE] 持续 [DURATION] 秒',
confirm: '确认框 标题 [TITLE] 内容 [MESSAGE]', yesNo: '是否框 标题 [TITLE] 内容 [MESSAGE]', allowDeny: '允许拒绝框 标题 [TITLE] 内容 [MESSAGE]',
prompt: '输入框 标题 [TITLE] 内容 [MESSAGE] 默认值 [DEFAULT]', multiline: '多行文本输入 标题 [TITLE] 内容 [MESSAGE] 默认值 [DEFAULT]',
password: '密码框 标题 [TITLE] 内容 [MESSAGE]', number: '数字输入框 标题 [TITLE] 内容 [MESSAGE] 默认值 [DEFAULT]',
date: '日期框 标题 [TITLE] 模式 [MODE]', dropdown: '下拉选择框 标题 [TITLE] 格式 [FORMAT] 数据(JSON) [OPTIONS]',
color: '颜色选择器 标题 [TITLE] 默认色 [DEFAULT]', slider: '滑块选择 标题 [TITLE] 最小值 [MIN] 最大值 [MAX] 默认值 [DEFAULT] 步长 [STEP]'
},
ui: {
ok: '确定', cancel: '取消', yes: '是', no: '否', allow: '允许', deny: '拒绝',
selectDate: '请选择日期', selectDateTime: '请选择日期和时间', selectItems: '请选择（共 {n} 项）',
selectColor: '选择颜色（点击色块或使用系统取色器）', colorHint: '点击色块打开系统取色器，也可直接输入十六进制值',
hexPlaceholder: '#RRGGBB', inputPlaceholder: '请输入…', sliderHint: '拖动滑块选择数值', imgLoadFail: '图片加载失败'
},
menus: { date: '日期', datetime: '日期 + 时间' },
defaults: {
sysMsg: '这是一个系统消息', confirmMsg: '你确定吗？', promptMsg: '请输入内容',
alertTitle: '提示', alertMsg: '这是一个普通消息', infoTitle: '信息', infoMsg: '这是一条信息',
successTitle: '成功', successMsg: '操作成功完成', warningTitle: '警告', warningMsg: '这是一个警告信息',
errorTitle: '错误', errorMsg: '发生了一个错误', toastMsg: '操作成功',
imageTitle: '图片展示', imageMsg: '这是一张图片：', imageUrl: 'https://extensions.turbowarp.org/dango.png',
confirmTitle: '确认操作', confirmMsg2: '你确定要执行此操作吗？', yesNoTitle: '请选择', yesNoMsg: '你是否同意？',
allowDenyTitle: '权限请求', allowDenyMsg: '是否允许此操作？', inputTitle: '输入信息', inputMsg: '请输入内容', inputDefault: '默认值',
multilineTitle: '输入文本', multilineMsg: '请输入多行文本', passwordTitle: '安全验证', passwordMsg: '请输入密码',
numberTitle: '输入数字', numberMsg: '请输入一个数字', dateTitle: '选择日期',
dropdownTitle: '请选择', dropdownOptions: '["选项1","选项2","选项3"]', colorTitle: '选择颜色', sliderTitle: '选择数值'
}
},
en: {
categories: { system: 'System Dialogs', message: 'Messages', choice: 'Binary Choice', input: 'Text & Number Input', picker: 'Special Pickers' },
blocks: {
sysAlert: 'System Alert Message [MESSAGE]', sysConfirm: 'System Confirm Message [MESSAGE]', sysPrompt: 'System Prompt Message [MESSAGE] Default [DEFAULT]',
alert: 'Alert Title [TITLE] Message [MESSAGE]', info: 'Info Title [TITLE] Message [MESSAGE]', success: 'Success Title [TITLE] Message [MESSAGE]',
warning: 'Warning Title [TITLE] Message [MESSAGE]', error: 'Error Title [TITLE] Message [MESSAGE]',
imageDialog: 'Image Dialog Title [TITLE] Message [MESSAGE] Image URL [URL]',
toast: 'Toast Message [MESSAGE] Duration [DURATION] sec',
confirm: 'Confirm Title [TITLE] Message [MESSAGE]', yesNo: 'Yes/No Title [TITLE] Message [MESSAGE]', allowDeny: 'Allow/Deny Title [TITLE] Message [MESSAGE]',
prompt: 'Input Title [TITLE] Message [MESSAGE] Default [DEFAULT]', multiline: 'Multiline Input Title [TITLE] Message [MESSAGE] Default [DEFAULT]',
password: 'Password Title [TITLE] Message [MESSAGE]', number: 'Number Input Title [TITLE] Message [MESSAGE] Default [DEFAULT]',
date: 'Date Picker Title [TITLE] Mode [MODE]', dropdown: 'Dropdown Title [TITLE] Format [FORMAT] Data(JSON) [OPTIONS]',
color: 'Color Picker Title [TITLE] Default [DEFAULT]', slider: 'Slider Title [TITLE] Min [MIN] Max [MAX] Default [DEFAULT] Step [STEP]'
},
ui: {
ok: 'OK', cancel: 'Cancel', yes: 'Yes', no: 'No', allow: 'Allow', deny: 'Deny',
selectDate: 'Select date', selectDateTime: 'Select date & time', selectItems: 'Please select ({n} items)',
selectColor: 'Select color (click swatch or use system picker)', colorHint: 'Click the swatch to open system color picker, or enter hex value directly',
hexPlaceholder: '#RRGGBB', inputPlaceholder: 'Enter text…', sliderHint: 'Drag slider to select value', imgLoadFail: 'Image failed to load'
},
menus: { date: 'Date', datetime: 'Date & Time' },
defaults: {
sysMsg: 'This is a system message', confirmMsg: 'Are you sure?', promptMsg: 'Please enter content',
alertTitle: 'Alert', alertMsg: 'This is a normal message', infoTitle: 'Info', infoMsg: 'This is an information',
successTitle: 'Success', successMsg: 'Operation completed successfully', warningTitle: 'Warning', warningMsg: 'This is a warning message',
errorTitle: 'Error', errorMsg: 'An error occurred', toastMsg: 'Operation successful',
imageTitle: 'Image', imageMsg: 'This is an image:', imageUrl: 'https://extensions.turbowarp.org/dango.png',
confirmTitle: 'Confirm Action', confirmMsg2: 'Do you want to proceed?', yesNoTitle: 'Please Choose', yesNoMsg: 'Do you agree?',
allowDenyTitle: 'Permission Request', allowDenyMsg: 'Allow this action?', inputTitle: 'Input', inputMsg: 'Please enter text', inputDefault: 'Default value',
multilineTitle: 'Enter Text', multilineMsg: 'Please enter multi-line text', passwordTitle: 'Security Check', passwordMsg: 'Please enter password',
numberTitle: 'Enter Number', numberMsg: 'Please enter a number', dateTitle: 'Select Date',
dropdownTitle: 'Please select', dropdownOptions: '["Option 1","Option 2","Option 3"]', colorTitle: 'Select Color', sliderTitle: 'Select Value'
}
}
};
/** @type {object} Active language strings */
const L = isZh ? I18N.zh : I18N.en;
// Material 3 semantic SVG icons
const MD3_ICONS = {
info: `<svg class="md3-dialog-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
success: `<svg class="md3-dialog-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
warning: `<svg class="md3-dialog-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`,
error: `<svg class="md3-dialog-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`
};
/**
* Smooth Dialog Extension main class
* Provides Material 3 styled dialogs for TurboWarp
*/
class SmoothDialogExtension {
constructor() {
/** @type {boolean} Whether styles have been injected */
this.injectedStyles = false;
/** @type {HTMLElement|null} Toast container element */
this.toastContainer = null;
}
/**
* Returns extension metadata (required by TurboWarp)
* @returns {object}
*/
getInfo() {
return {
id: 'smoothdialog',
name: isZh ? '平滑弹窗拓展' : 'Smooth Dialog Extension',
color1: '#6750A4',
color2: '#4F378B',
menus: {
dateModeMenu: {
acceptReporters: false,
items: [
{ text: L.menus.date, value: 'date' },
{ text: L.menus.datetime, value: 'datetime' }
]
},
dropdownFormatMenu: {
acceptReporters: false,
items: [
{ text: isZh ? '数组' : 'Array', value: 'array' },
{ text: isZh ? '键值对' : 'Object', value: 'object' }
]
}
},
blocks: [
// ─── System Dialogs ───
{ blockType: Scratch.BlockType.SEPARATOR },
{ blockType: Scratch.BlockType.LABEL, text: L.categories.system },
{ blockType: Scratch.BlockType.SEPARATOR },
{ opcode: 'systemAlert', blockType: Scratch.BlockType.COMMAND, text: L.blocks.sysAlert, arguments: { MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.sysMsg } } },
{ opcode: 'systemConfirm', blockType: Scratch.BlockType.BOOLEAN, text: L.blocks.sysConfirm, arguments: { MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.confirmMsg } } },
{ opcode: 'systemPrompt', blockType: Scratch.BlockType.REPORTER, text: L.blocks.sysPrompt, arguments: { MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.promptMsg }, DEFAULT: { type: Scratch.ArgumentType.STRING, defaultValue: '' } } },
// ─── Messages ───
{ blockType: Scratch.BlockType.SEPARATOR },
{ blockType: Scratch.BlockType.LABEL, text: L.categories.message },
{ blockType: Scratch.BlockType.SEPARATOR },
{ opcode: 'alert', blockType: Scratch.BlockType.COMMAND, text: L.blocks.alert, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.alertTitle }, MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.alertMsg } } },
{ opcode: 'alertInfo', blockType: Scratch.BlockType.COMMAND, text: L.blocks.info, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.infoTitle }, MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.infoMsg } } },
{ opcode: 'alertSuccess', blockType: Scratch.BlockType.COMMAND, text: L.blocks.success, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.successTitle }, MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.successMsg } } },
{ opcode: 'alertWarning', blockType: Scratch.BlockType.COMMAND, text: L.blocks.warning, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.warningTitle }, MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.warningMsg } } },
{ opcode: 'alertError', blockType: Scratch.BlockType.COMMAND, text: L.blocks.error, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.errorTitle }, MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.errorMsg } } },
{ opcode: 'imageDialog', blockType: Scratch.BlockType.COMMAND, text: L.blocks.imageDialog, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.imageTitle }, MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.imageMsg }, URL: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.imageUrl } } },
{ opcode: 'toast', blockType: Scratch.BlockType.COMMAND, text: L.blocks.toast, arguments: { MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.toastMsg }, DURATION: { type: Scratch.ArgumentType.NUMBER, defaultValue: '3' } } },
// ─── Binary Choice ───
{ blockType: Scratch.BlockType.SEPARATOR },
{ blockType: Scratch.BlockType.LABEL, text: L.categories.choice },
{ blockType: Scratch.BlockType.SEPARATOR },
{ opcode: 'confirm', blockType: Scratch.BlockType.BOOLEAN, text: L.blocks.confirm, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.confirmTitle }, MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.confirmMsg2 } } },
{ opcode: 'yesNo', blockType: Scratch.BlockType.BOOLEAN, text: L.blocks.yesNo, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.yesNoTitle }, MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.yesNoMsg } } },
{ opcode: 'allowDeny', blockType: Scratch.BlockType.BOOLEAN, text: L.blocks.allowDeny, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.allowDenyTitle }, MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.allowDenyMsg } } },
// ─── Text & Number Input ───
{ blockType: Scratch.BlockType.SEPARATOR },
{ blockType: Scratch.BlockType.LABEL, text: L.categories.input },
{ blockType: Scratch.BlockType.SEPARATOR },
{ opcode: 'prompt', blockType: Scratch.BlockType.REPORTER, text: L.blocks.prompt, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.inputTitle }, MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.inputMsg }, DEFAULT: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.inputDefault } } },
{ opcode: 'multilineInput', blockType: Scratch.BlockType.REPORTER, text: L.blocks.multiline, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.multilineTitle }, MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.multilineMsg }, DEFAULT: { type: Scratch.ArgumentType.STRING, defaultValue: '' } } },
{ opcode: 'password', blockType: Scratch.BlockType.REPORTER, text: L.blocks.password, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.passwordTitle }, MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.passwordMsg } } },
{ opcode: 'numberInput', blockType: Scratch.BlockType.REPORTER, text: L.blocks.number, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.numberTitle }, MESSAGE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.numberMsg }, DEFAULT: { type: Scratch.ArgumentType.STRING, defaultValue: '0' } } },
// ─── Special Pickers ───
{ blockType: Scratch.BlockType.SEPARATOR },
{ blockType: Scratch.BlockType.LABEL, text: L.categories.picker },
{ blockType: Scratch.BlockType.SEPARATOR },
{ opcode: 'datePicker', blockType: Scratch.BlockType.REPORTER, text: L.blocks.date, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.dateTitle }, MODE: { type: Scratch.ArgumentType.STRING, menu: 'dateModeMenu', defaultValue: 'date' } } },
{ opcode: 'dropdown', blockType: Scratch.BlockType.REPORTER, text: L.blocks.dropdown, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.dropdownTitle }, FORMAT: { type: Scratch.ArgumentType.STRING, menu: 'dropdownFormatMenu', defaultValue: 'array' }, OPTIONS: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.dropdownOptions } } },
{ opcode: 'colorPicker', blockType: Scratch.BlockType.REPORTER, text: L.blocks.color, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.colorTitle }, DEFAULT: { type: Scratch.ArgumentType.STRING, defaultValue: '#6750A4' } } },
{ opcode: 'slider', blockType: Scratch.BlockType.REPORTER, text: L.blocks.slider, arguments: { TITLE: { type: Scratch.ArgumentType.STRING, defaultValue: L.defaults.sliderTitle }, MIN: { type: Scratch.ArgumentType.NUMBER, defaultValue: '0' }, MAX: { type: Scratch.ArgumentType.NUMBER, defaultValue: '100' }, DEFAULT: { type: Scratch.ArgumentType.NUMBER, defaultValue: '50' }, STEP: { type: Scratch.ArgumentType.NUMBER, defaultValue: '1' } } }
]
};
}
// ═══════════════════════════════════════════════════════════
//   Dynamic CSS Injection (Material 3)
// ═══════════════════════════════════════════════════════════
injectStyles() {
if (this.injectedStyles) return;
const style = document.createElement('style');
style.textContent = `
:root { --md-surface: #FEF7FF; --md-on-surface: #1C1B1F; --md-on-surface-variant: #49454F; --md-primary: #6750A4; --md-on-primary: #FFFFFF; --md-outline: #79747E; --md-outline-variant: #CAC4D0; --md-scrim: rgba(0, 0, 0, 0.32); --md-hover: rgba(103, 80, 164, 0.08); --md-select-arrow: %2349454F; --md-inverse-surface: #313033; --md-inverse-on-surface: #F4EFF4; --md-shadow-1: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.2); }
@media (prefers-color-scheme: dark) {
:root { --md-surface: #1C1B1F; --md-on-surface: #E6E1E5; --md-on-surface-variant: #CAC4D0; --md-primary: #D0BCFF; --md-on-primary: #381E72; --md-outline: #938F99; --md-outline-variant: #49454F; --md-scrim: rgba(0, 0, 0, 0.6); --md-hover: rgba(208, 188, 255, 0.08); --md-select-arrow: %23CAC4D0; --md-inverse-surface: #E6E1E5; --md-inverse-on-surface: #313033; --md-shadow-1: 0 6px 10px 0 rgba(0,0,0,0.6), 0 1px 18px 0 rgba(0,0,0,0.4), 0 3px 5px -1px rgba(0,0,0,0.5); }
}
.md3-dialog-modal { position: fixed; inset: 0; z-index: 9999; background-color: var(--md-scrim); display: flex; justify-content: center; align-items: center; animation: md3-fade-in 300ms cubic-bezier(0.2, 0, 0, 1); }
.md3-dialog { background: var(--md-surface); color: var(--md-on-surface); width: 480px; max-width: 90vw; max-height: 85vh; border-radius: 28px; border: 1px solid var(--md-outline-variant); box-shadow: var(--md-shadow-1); overflow: hidden; font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif; animation: md3-scale-in 300ms cubic-bezier(0.2, 0, 0, 1); display: flex; flex-direction: column; }
.md3-dialog-modal.closing { animation: md3-fade-out 200ms cubic-bezier(0.4, 0, 1, 1) forwards; }
.md3-dialog.closing { animation: md3-scale-out 200ms cubic-bezier(0.4, 0, 0, 1) forwards; }
@keyframes md3-fade-out { from { opacity: 1; } to { opacity: 0; } }
@keyframes md3-scale-out { from { opacity: 1; transform: scale(1); } to { opacity: 0; transform: scale(0.9); } }
.md3-dialog-head { padding: 28px 28px 20px; flex-shrink: 0; }
.md3-dialog-title-wrap { display: flex; align-items: center; margin: 0 0 8px; min-height: 36px; }
.md3-dialog-icon { width: 32px; height: 32px; margin-right: 12px; flex-shrink: 0; color: var(--md-primary); }
.md3-dialog-title { font-size: 28px; font-weight: 400; line-height: 36px; margin: 0; color: var(--md-on-surface); }
.md3-dialog-text { font-size: 16px; line-height: 24px; margin: 0; color: var(--md-on-surface-variant); }
.md3-dialog-body { padding: 0 28px 24px; overflow-y: auto; flex-shrink: 1; }
.md3-dialog-image-wrap { margin: 16px 0 0; border-radius: 12px; overflow: hidden; background: transparent; line-height: 0; transform: translateZ(0); flex-shrink: 0; }
.md3-dialog-image { display: block; width: 100%; max-height: min(200px, 38vh); object-fit: contain; object-position: center; vertical-align: bottom; border: none; background: transparent; }
.md3-text-field { width: 100%; padding: 10px 0; border: none; border-bottom: 1px solid var(--md-outline); border-radius: 0; background: transparent; font-size: 17px; font-family: inherit; color: var(--md-on-surface); transition: border-color 150ms ease; box-sizing: border-box; }
.md3-text-field:focus { outline: none; border-bottom: 2px solid var(--md-primary); padding-bottom: 9px; }
.md3-text-field::placeholder { color: var(--md-on-surface-variant); opacity: 0.6; }
.md3-text-field[type="number"] { -moz-appearance: textfield; }
.md3-text-field[type="number"]::-webkit-inner-spin-button, .md3-text-field[type="number"]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
textarea.md3-text-field { border: 1px solid var(--md-outline); border-radius: 8px; padding: 12px 14px; min-height: 100px; max-height: 240px; resize: vertical; line-height: 1.5; font-size: 16px; }
textarea.md3-text-field:focus { border: 2px solid var(--md-primary); padding: 11px 13px; }
select.md3-text-field { cursor: pointer; appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='var(--md-select-arrow)'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right 0 center; background-size: 24px; padding-right: 28px; }
select.md3-text-field option { background: var(--md-surface); color: var(--md-on-surface); }
.md3-slider-wrap { padding: 8px 0 4px; }
.md3-slider-track { position: relative; height: 32px; display: flex; align-items: center; }
.md3-slider-input { -webkit-appearance: none; appearance: none; width: 100%; height: 4px; border-radius: 2px; background: linear-gradient(to right, var(--md-primary) 0%, var(--md-primary) var(--slider-pct, 50%), var(--md-outline-variant) var(--slider-pct, 50%), var(--md-outline-variant) 100%); outline: none; margin: 0; }
.md3-slider-input::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 20px; height: 20px; border-radius: 50%; background: var(--md-primary); border: 2px solid var(--md-surface); box-shadow: 0 1px 3px rgba(0,0,0,.3); cursor: pointer; transition: transform 100ms ease, box-shadow 100ms ease; }
.md3-slider-input::-webkit-slider-thumb:hover { transform: scale(1.2); box-shadow: 0 0 0 8px var(--md-hover), 0 1px 3px rgba(0,0,0,.3); }
.md3-slider-input::-moz-range-thumb { width: 20px; height: 20px; border-radius: 50%; background: var(--md-primary); border: 2px solid var(--md-surface); box-shadow: 0 1px 3px rgba(0,0,0,.3); cursor: pointer; transition: transform 100ms ease, box-shadow 100ms ease; }
.md3-slider-input::-moz-range-thumb:hover { transform: scale(1.2); box-shadow: 0 0 0 8px var(--md-hover), 0 1px 3px rgba(0,0,0,.3); }
.md3-slider-input::-moz-range-track { height: 4px; border-radius: 2px; background: var(--md-outline-variant); }
.md3-slider-value { text-align: center; font-size: 32px; font-weight: 400; color: var(--md-primary); margin-top: 4px; font-variant-numeric: tabular-nums; }
.md3-slider-labels { display: flex; justify-content: space-between; font-size: 13px; color: var(--md-on-surface-variant); margin-top: 4px; }
.md3-color-row { display: flex; align-items: center; gap: 20px; }
.md3-color-input { position: absolute; opacity: 0; width: 0; height: 0; pointer-events: none; }
.md3-color-swatch { width: 56px; height: 56px; min-width: 56px; border-radius: 50%; border: 2px solid var(--md-outline-variant); cursor: pointer; background: var(--preview-color, #6750A4); transition: transform 150ms ease, box-shadow 150ms ease; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05); }
.md3-color-swatch:hover { transform: scale(1.05); box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
.md3-color-hex { flex: 1; font-family: 'Roboto Mono', 'SF Mono', Consolas, monospace; letter-spacing: 0.5px; text-transform: uppercase; }
.md3-color-hint { font-size: 13px; color: var(--md-on-surface-variant); margin-top: 10px; opacity: 0.7; }
.md3-dialog-actions { display: flex; justify-content: flex-end; gap: 10px; padding: 0 28px 28px; flex-shrink: 0; }
.md3-btn { min-width: 80px; height: 44px; padding: 0 24px; border: none; border-radius: 20px; font-family: inherit; font-size: 14px; font-weight: 500; letter-spacing: 0.5px; text-transform: none; cursor: pointer; transition: background-color 150ms ease, box-shadow 150ms ease; display: inline-flex; align-items: center; justify-content: center; }
.md3-btn-text { background: transparent; color: var(--md-primary); }
.md3-btn-text:hover { background: var(--md-hover); }
.md3-btn-filled { background: var(--md-primary); color: var(--md-on-primary); }
.md3-btn-filled:hover { filter: brightness(1.1); box-shadow: 0 2px 6px rgba(0,0,0,.30); }
@keyframes md3-fade-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes md3-scale-in { from { opacity: 0; transform: scale(.9); } to { opacity: 1; transform: scale(1); } }
.md3-toast-container { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 10000; display: flex; flex-direction: column; align-items: center; gap: 8px; pointer-events: none; }
.md3-toast { background: var(--md-inverse-surface); color: var(--md-inverse-on-surface); padding: 14px 16px; border-radius: 16px; font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif; font-size: 14px; line-height: 20px; letter-spacing: 0.25px; box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12); max-width: 80vw; word-break: break-word; text-align: center; pointer-events: auto; animation: md3-toast-in 300ms cubic-bezier(0.2, 0, 0, 1); opacity: 1; transition: opacity 200ms ease, transform 200ms ease; }
.md3-toast.closing { opacity: 0; transform: translateY(8px) scale(0.95); }
@keyframes md3-toast-in { from { opacity: 0; transform: translateY(16px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
`;
document.head.appendChild(style);
this.injectedStyles = true;
}
// ═══════════════════════════════════════════════════════════
//   Core Dialog Creation (Promise-based, opts object)
// ═══════════════════════════════════════════════════════════
/**
* Creates and displays a Material 3 modal dialog
* @param {object} opts - Configuration options
* @returns {Promise<any>}
*/
createModalDialog(opts) {
return new Promise((resolve) => {
this.injectStyles();
const {
title = '', message = '', inputType = null, defaultValue = '',
theme = '', confirmText = L.ui.ok, cancelText = '',
options = [], hotkeys = null, colorValue = '',
sliderConfig = null, imageUrl = ''
} = opts;
// Create overlay
const modal = document.createElement('div');
modal.className = 'md3-dialog-modal';
const dialog = document.createElement('div');
dialog.className = `md3-dialog ${theme}`;
// ─── Header ───
const head = document.createElement('div');
head.className = 'md3-dialog-head';
const titleWrap = document.createElement('div');
titleWrap.className = 'md3-dialog-title-wrap';
if (theme && MD3_ICONS[theme.replace('md3-theme-', '')]) {
titleWrap.innerHTML = MD3_ICONS[theme.replace('md3-theme-', '')];
}
const titleEl = document.createElement('h3');
titleEl.className = 'md3-dialog-title';
titleEl.textContent = title;
titleWrap.appendChild(titleEl);
head.appendChild(titleWrap);
const textEl = document.createElement('p');
textEl.className = 'md3-dialog-text';
textEl.textContent = message;
head.appendChild(textEl);
dialog.appendChild(head);
// ─── Image area ───
if (imageUrl) {
dialog.appendChild(this._renderImage(imageUrl, title));
}
// ─── Input area ───
let inputEl = null, colorHexEl = null, colorInput = null;
if (inputType) {
const body = document.createElement('div');
body.className = 'md3-dialog-body';
if (inputType === 'color') {
[inputEl, colorHexEl, colorInput] = this._renderColorPicker(body, colorValue);
} else if (inputType === 'textarea') {
inputEl = this._renderTextarea(body, defaultValue);
} else if (inputType === 'slider') {
inputEl = this._renderSlider(body, defaultValue, sliderConfig);
} else if (inputType === 'select') {
inputEl = this._renderSelect(body, options, defaultValue);
} else {
inputEl = this._renderTextInput(body, inputType, defaultValue);
}
dialog.appendChild(body);
}
// ─── Action buttons ───
const actions = document.createElement('div');
actions.className = 'md3-dialog-actions';
let cancelBtn = null;
if (cancelText) {
cancelBtn = document.createElement('button');
cancelBtn.type = 'button';
cancelBtn.className = 'md3-btn md3-btn-text';
cancelBtn.textContent = cancelText;
cancelBtn.onclick = () => this._closeDialog(modal, dialog, resolve, inputType ? '' : false);
actions.appendChild(cancelBtn);
}
const confirmBtn = document.createElement('button');
confirmBtn.type = 'button';
confirmBtn.className = 'md3-btn md3-btn-filled';
confirmBtn.textContent = confirmText;
confirmBtn.onclick = () => {
if (!inputType) { this._closeDialog(modal, dialog, resolve, true); return; }
if (inputType === 'color') { this._closeDialog(modal, dialog, resolve, (this._normalizeHex(colorHexEl.value) || colorInput.value).toUpperCase()); }
else if (inputType === 'number') { const v = parseFloat(inputEl.value); this._closeDialog(modal, dialog, resolve, isNaN(v) ? '' : v); }
else if (inputType === 'slider') { this._closeDialog(modal, dialog, resolve, inputEl.value); }
else { this._closeDialog(modal, dialog, resolve, inputEl.value); }
};
actions.appendChild(confirmBtn);
dialog.appendChild(actions);
modal.appendChild(dialog);
document.body.appendChild(modal);
// Bind keyboard events & auto-focus
this._bindKeyboard(modal, dialog, confirmBtn, cancelBtn, inputEl, inputType, hotkeys, resolve);
this._autoFocus(inputEl, inputType, colorHexEl);
});
}
// ═══════════════════════════════════════════════════════════
//   Rendering Helpers
// ═══════════════════════════════════════════════════════════
/** Renders an image element with error handling */
_renderImage(url, alt) {
const imgWrap = document.createElement('div');
imgWrap.className = 'md3-dialog-image-wrap';
const img = document.createElement('img');
img.className = 'md3-dialog-image';
img.src = url; img.alt = alt; img.loading = 'lazy';
img.onerror = () => {
imgWrap.innerHTML = '';
const errDiv = document.createElement('div');
errDiv.textContent = L.ui.imgLoadFail;
errDiv.style.cssText = 'color:var(--md-on-surface-variant);font-size:14px;text-align:center;padding:12px;line-height:1.4;';
imgWrap.appendChild(errDiv);
};
imgWrap.appendChild(img);
return imgWrap;
}
/** Renders color picker UI */
_renderColorPicker(container, colorValue) {
const row = document.createElement('div'); row.className = 'md3-color-row';
const colorInput = document.createElement('input');
colorInput.type = 'color'; colorInput.className = 'md3-color-input';
colorInput.value = this._normalizeHex(colorValue) || '#6750A4';
const swatch = document.createElement('div');
swatch.className = 'md3-color-swatch';
swatch.style.setProperty('--preview-color', colorInput.value);
swatch.onclick = () => colorInput.click();
const hexInput = document.createElement('input');
hexInput.type = 'text'; hexInput.className = 'md3-text-field md3-color-hex';
hexInput.value = colorInput.value.toUpperCase(); hexInput.placeholder = L.ui.hexPlaceholder;
hexInput.oninput = () => {
const normalized = this._normalizeHex(hexInput.value);
if (normalized) { colorInput.value = normalized; swatch.style.setProperty('--preview-color', normalized); }
};
colorInput.oninput = () => {
hexInput.value = colorInput.value.toUpperCase();
swatch.style.setProperty('--preview-color', colorInput.value);
};
row.appendChild(swatch); row.appendChild(hexInput); container.appendChild(row);
const hint = document.createElement('div'); hint.className = 'md3-color-hint'; hint.textContent = L.ui.colorHint; container.appendChild(hint);
return [colorInput, hexInput, colorInput];
}
/** Renders slider UI */
_renderSlider(container, defaultValue, config) {
const wrap = document.createElement('div'); wrap.className = 'md3-slider-wrap';
const valueDisplay = document.createElement('div'); valueDisplay.className = 'md3-slider-value'; valueDisplay.textContent = String(defaultValue);
const input = document.createElement('input');
input.type = 'range'; input.className = 'md3-slider-input';
Object.assign(input, { min: config.min, max: config.max, step: config.step, value: defaultValue });
const updateSlider = () => {
const pct = ((parseFloat(input.value) - parseFloat(config.min)) / (parseFloat(config.max) - parseFloat(config.min)) * 100);
input.style.setProperty('--slider-pct', pct + '%');
valueDisplay.textContent = input.value;
};
input.addEventListener('input', updateSlider); updateSlider();
const track = document.createElement('div'); track.className = 'md3-slider-track'; track.appendChild(input);
wrap.appendChild(valueDisplay); wrap.appendChild(track);
const labels = document.createElement('div'); labels.className = 'md3-slider-labels';
labels.innerHTML = `<span>${config.min}</span><span>${config.max}</span>`;
wrap.appendChild(labels); container.appendChild(wrap);
return input;
}
/** Renders textarea */
_renderTextarea(container, defaultValue) {
const input = document.createElement('textarea');
input.className = 'md3-text-field'; input.value = defaultValue; input.placeholder = L.ui.inputPlaceholder; input.rows = 4;
container.appendChild(input); return input;
}
/** Renders dropdown select */
_renderSelect(container, options, defaultValue) {
const select = document.createElement('select'); select.className = 'md3-text-field';
options.forEach(opt => {
const option = document.createElement('option'); option.value = opt; option.textContent = opt;
if (opt === defaultValue) option.selected = true; select.appendChild(option);
});
select.style.backgroundColor = 'var(--md-surface)'; select.style.color = 'var(--md-on-surface)';
container.appendChild(select); return select;
}
/** Renders text/number/date input */
_renderTextInput(container, type, defaultValue) {
const input = document.createElement('input');
input.type = type; input.className = 'md3-text-field'; input.value = defaultValue;
if (type === 'number') input.step = 'any';
if (!['date', 'datetime-local'].includes(type)) input.placeholder = L.ui.inputPlaceholder;
container.appendChild(input); return input;
}
// ═══════════════════════════════════════════════════════════
//   Interaction & Close Logic
// ═══════════════════════════════════════════════════════════
/** Closes dialog and resolves the Promise */
_closeDialog(modal, dialog, resolve, value) {
if (modal._resolved) return;
modal._resolved = true;
if (modal._cleanupKeydown) modal._cleanupKeydown();
modal.classList.add('closing'); dialog.classList.add('closing');
const cleanup = () => { if (modal.parentNode) modal.parentNode.removeChild(modal); resolve(value); };
modal.addEventListener('animationend', cleanup, { once: true });
setTimeout(cleanup, 250);
}
/** Auto-focuses input (cursor at end, no full selection) */
_autoFocus(inputEl, inputType, colorHexEl) {
if (!inputEl) return;
setTimeout(() => {
if (inputType === 'color' && colorHexEl) {
colorHexEl.focus(); const len = colorHexEl.value.length; colorHexEl.setSelectionRange(len, len);
} else {
inputEl.focus();
if (typeof inputEl.selectionStart === 'number') { const len = inputEl.value.length; inputEl.setSelectionRange(len, len); }
}
}, 50);
}
/** Binds keyboard shortcuts */
_bindKeyboard(modal, dialog, confirmBtn, cancelBtn, inputEl, inputType, hotkeys, resolve) {
const handleKeydown = (e) => {
if (e.key === 'Escape') { e.preventDefault(); (cancelBtn || confirmBtn).click(); return; }
if (e.key === 'Enter') {
if (['textarea', 'color', 'slider'].includes(inputType)) return;
e.preventDefault(); confirmBtn.click(); return;
}
if (hotkeys) {
// Bug fix: ignore Y/N/A/D hotkeys when user is typing in an input field
const activeTag = document.activeElement?.tagName;
if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') return;
const key = e.key.toLowerCase();
if (hotkeys.yes && key === 'y') { e.preventDefault(); this._closeDialog(modal, dialog, resolve, true); return; }
if (hotkeys.no && key === 'n') { e.preventDefault(); this._closeDialog(modal, dialog, resolve, false); return; }
if (hotkeys.allow && key === 'a') { e.preventDefault(); this._closeDialog(modal, dialog, resolve, true); return; }
if (hotkeys.deny && key === 'd') { e.preventDefault(); this._closeDialog(modal, dialog, resolve, false); return; }
}
if (e.key === 'Tab') {
const focusable = dialog.querySelectorAll('input, select, button, textarea, [tabindex]:not([tabindex="-1"])');
if (!focusable.length) return;
const first = focusable[0], last = focusable[focusable.length - 1];
if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}
};
document.addEventListener('keydown', handleKeydown);
modal._cleanupKeydown = () => document.removeEventListener('keydown', handleKeydown);
}
/** Normalizes hex color value */
_normalizeHex(val) {
if (!val) return '';
let s = String(val).trim();
if (/^#[0-9a-fA-F]{3}$/.test(s)) return '#' + s.slice(1).split('').map(c => c + c).join('');
if (/^#[0-9a-fA-F]{6}$/.test(s)) return s.toLowerCase();
if (/^[0-9a-fA-F]{6}$/.test(s)) return '#' + s.toLowerCase();
return '';
}
/** Ensures toast container exists */
_ensureToastContainer() {
if (!this.toastContainer) {
this.injectStyles();
this.toastContainer = document.createElement('div');
this.toastContainer.className = 'md3-toast-container';
document.body.appendChild(this.toastContainer);
}
return this.toastContainer;
}
// ═══════════════════════════════════════════════════════════
//   Safe Invocation Wrapper (unified try-catch)
//   FIX: Use nullish coalescing (??) instead of || to properly
//   handle empty string returns (e.g. cancel returns '')
// ═══════════════════════════════════════════════════════════
async _safeShow(opts, fallback = '') {
try {
const result = await this.createModalDialog(opts);
return result ?? fallback;
} catch (e) {
console.error('Dialog error:', e);
return fallback;
}
}
// ═══════════════════════════════════════════════════════════
//   Block Implementations
// ═══════════════════════════════════════════════════════════
systemAlert(args) { window.alert(args.MESSAGE); }
systemConfirm(args) { return window.confirm(args.MESSAGE); }
systemPrompt(args) { const r = window.prompt(args.MESSAGE, args.DEFAULT); return r === null ? '' : r; }
async alert(args) { await this.createModalDialog({ title: args.TITLE, message: args.MESSAGE }); }
async alertInfo(args) { await this.createModalDialog({ title: args.TITLE, message: args.MESSAGE, theme: 'md3-theme-info' }); }
async alertSuccess(args) { await this.createModalDialog({ title: args.TITLE, message: args.MESSAGE, theme: 'md3-theme-success' }); }
async alertWarning(args) { await this.createModalDialog({ title: args.TITLE, message: args.MESSAGE, theme: 'md3-theme-warning' }); }
async alertError(args) { await this.createModalDialog({ title: args.TITLE, message: args.MESSAGE, theme: 'md3-theme-error' }); }
async imageDialog(args) { try { await this.createModalDialog({ title: args.TITLE, message: args.MESSAGE, imageUrl: args.URL || L.defaults.imageUrl }); } catch(e){console.error(e);} }
toast(args) {
this._ensureToastContainer();
const toast = document.createElement('div'); toast.className = 'md3-toast'; toast.textContent = args.MESSAGE;
this.toastContainer.appendChild(toast);
const duration = Math.max(0.5, parseFloat(args.DURATION) || 3) * 1000;
const toasts = this.toastContainer.querySelectorAll('.md3-toast:not(.closing)');
if (toasts.length > 5) { toasts[0].classList.add('closing'); setTimeout(() => { if (toasts[0].parentNode) toasts[0].parentNode.removeChild(toasts[0]); }, 250); }
setTimeout(() => { toast.classList.add('closing'); setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 250); }, duration);
}
async confirm(args) { return this._safeShow({ title: args.TITLE, message: args.MESSAGE, cancelText: L.ui.cancel }, false); }
async yesNo(args) { return this._safeShow({ title: args.TITLE, message: args.MESSAGE, confirmText: L.ui.yes, cancelText: L.ui.no, hotkeys: { yes: true, no: true } }, false); }
async allowDeny(args) { return this._safeShow({ title: args.TITLE, message: args.MESSAGE, confirmText: L.ui.allow, cancelText: L.ui.deny, hotkeys: { allow: true, deny: true } }, false); }
async prompt(args) { return this._safeShow({ title: args.TITLE, message: args.MESSAGE, inputType: 'text', defaultValue: args.DEFAULT, cancelText: L.ui.cancel }, ''); }
async multilineInput(args) { return this._safeShow({ title: args.TITLE, message: args.MESSAGE, inputType: 'textarea', defaultValue: args.DEFAULT, cancelText: L.ui.cancel }, ''); }
async password(args) { return this._safeShow({ title: args.TITLE, message: args.MESSAGE, inputType: 'password', cancelText: L.ui.cancel }, ''); }
async numberInput(args) { return this._safeShow({ title: args.TITLE, message: args.MESSAGE, inputType: 'number', defaultValue: args.DEFAULT, cancelText: L.ui.cancel }, '0'); }
async datePicker(args) {
const mode = args.MODE === 'datetime' ? 'datetime-local' : 'date';
return this._safeShow({ title: args.TITLE, message: mode === 'datetime' ? L.ui.selectDateTime : L.ui.selectDate, inputType: mode, cancelText: L.ui.cancel }, '');
}
async dropdown(args) {
try {
const format = args.FORMAT || 'array';
const raw = args.OPTIONS || '';
let optionsList = [];
if (format === 'object') {
const parsed = JSON.parse(raw);
if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return '';
optionsList = Object.entries(parsed).map(([k, v]) => ({ text: String(k), value: typeof v === 'object' ? JSON.stringify(v) : String(v) }));
} else {
const parsed = JSON.parse(raw);
if (!Array.isArray(parsed)) return '';
optionsList = parsed.map((item, i) => {
if (typeof item === 'string') return { text: item, value: item };
if (item && typeof item === 'object') return { text: item.text || `Item ${i+1}`, value: item.value !== undefined ? item.value : (item.text || `Item ${i+1}`) };
return { text: String(item), value: String(item) };
});
}
if (!optionsList.length) return '';
const selectedText = await this.createModalDialog({
title: args.TITLE, message: L.ui.selectItems.replace('{n}', optionsList.length),
inputType: 'select', defaultValue: optionsList[0].text, cancelText: L.ui.cancel, options: optionsList.map(o => o.text)
});
if (!selectedText) return '';
const found = optionsList.find(o => o.text === selectedText);
return found ? String(found.value) : selectedText;
} catch(e) { console.error('Dropdown error:', e); return ''; }
}
async colorPicker(args) {
const defaultColor = this._normalizeHex(args.DEFAULT) || '#6750A4';
return this._safeShow({ title: args.TITLE, message: L.ui.selectColor, inputType: 'color', colorValue: defaultColor, cancelText: L.ui.cancel }, defaultColor.toUpperCase());
}
async slider(args) {
const min = parseFloat(args.MIN) || 0;
let max = parseFloat(args.MAX) || 100;
if (max <= min) max = min + 1;
let def = parseFloat(args.DEFAULT);
if (isNaN(def)) def = min;
def = Math.max(min, Math.min(max, def));
const step = parseFloat(args.STEP) || 1;
return this._safeShow({ title: args.TITLE, message: L.ui.sliderHint, inputType: 'slider', defaultValue: String(def), cancelText: L.ui.cancel, sliderConfig: { min, max, step } }, String(def));
}
}
// Register extension
Scratch.extensions.register(new SmoothDialogExtension());
})(window.Scratch);
