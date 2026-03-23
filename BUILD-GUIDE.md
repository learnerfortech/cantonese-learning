# 香港粤语学堂 — 打包上架指南

## 当前状态：PWA（渐进式WebApp）
- ✅ manifest.json（已配置）
- ✅ sw.js（Service Worker，离线支持）
- ✅ 图标（已生成）
- ✅ HTTPS（通过serveo.net提供）

### iPhone 使用方式
1. 用Safari打开公网链接
2. 点底部「分享」按钮（方框↑）
3. 选择「添加到主屏幕」
4. 点「添加」→ 桌面出现App图标
5. 以后直接点图标打开，全屏体验≈原生App

### Android 使用方式
1. 用Chrome打开公网链接
2. 底部会自动弹出「安装应用」提示
3. 点「安装」→ 桌面出现App图标
4. 以后直接点图标打开

---

## 后续：原生App上架（如需上App Store）

### 方案A：Capacitor（推荐，最省事）
```bash
# 1. 安装Capacitor
npm init -y
npm install @capacitor/core @capacitor/cli
npm install @capacitor/ios @capacitor/android

# 2. 初始化
npx cap init "香港粤语学堂" "com.jade.cantonese"
npx cap add ios
npx cap add android

# 3. 同步web资源
npx cap sync

# 4. 打开IDE编译
npx cap open ios      # 打开Xcode → 选设备 → Run
npx cap open android  # 打开Android Studio → Run
```

### iOS上架要求
- Mac电脑（完整Xcode，不只是CLI Tools）
- Apple开发者账号（$99/年）
- App Store Connect设置App信息
- 提交审核（通常1-3天）

### Android上架要求
- Android Studio
- Google Play开发者账号（一次性$25）
- Google Play Console设置App信息
- 提交审核（通常几小时到几天）

### 方案B：TWA（Trusted Web Activity）
- 用PWA生成Android App
- 不需要维护两套代码
- 但Google Play审核较严

---

## 建议执行顺序
1. ✅ 先把PWA功能做好（现在）
2. 用几天体验PWA版本，收集反馈
3. 确认功能满意后，再走原生打包
4. Capacitor打包 → Xcode编译 → 提交App Store

## 当前公网访问
- 通过serveo.net SSH隧道
- 每次重启Mac需要重新建立隧道
- 如果要稳定公网访问，建议用域名+Cloudflare Pages（免费）