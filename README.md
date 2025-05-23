# Electron Vite React TypeScript

一个使用 Electron + Vite + React + TypeScript 构建的现代化桌面应用模板。

## ✨ 特性

- ⚡️ 使用 Vite 实现极速的开发体验
- 🔥 热重载支持
- 🎯 使用 TypeScript 进行类型检查
- 💪 使用 React 构建用户界面
- 🎨 集成 Tailwind CSS 实现现代化 UI
- 📦 使用 pnpm 作为包管理器
- 🔧 完整的开发工具链配置
- 🌐 支持多平台构建（Windows、macOS、Linux）
- 🔄 自动更新支持

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 安装

```bash
# 克隆项目
git clone https://github.com/flower0wine/electron-vite.git

# 进入项目目录
cd electron-vite

# 安装依赖
pnpm install
```

### 开发

```bash
# 启动开发服务器
pnpm dev
```

### 构建

```bash
# 构建应用
pnpm build

# 构建 Windows 版本
pnpm build:win

# 构建 macOS 版本
pnpm build:mac

# 构建 Linux 版本
pnpm build:linux
```

### 跨平台构建

如果使用的是 MacOS，可以为各平台构建安装包。如果使用的是 Windows，可能无法为 MacOS、Linux 平台构建安装包，使用 Docker 可以在 Windows 平台上构建各平台的安装包。以下是在 Windows 上使用 Docker 进行跨平台构建的命令：

#### Windows 构建命令

##### Windows x64 (64位) 构建
```bash
# PowerShell
docker run --rm -it `
  -v ${PWD}:/project `
  -v electron-node-modules:/project/node_modules `
  electronuserland/builder:wine `
  /bin/bash -c "cd /project && apt-get update && apt-get install -y wine && pnpm install && pnpm run build && pnpm exec electron-builder --win nsis portable zip --x64"

# CMD
docker run --rm -it ^
  -v %cd%:/project ^
  -v electron-node-modules:/project/node_modules ^
  electronuserland/builder:wine ^
  /bin/bash -c "cd /project && apt-get update && apt-get install -y wine && pnpm install && pnpm run build && pnpm exec electron-builder --win nsis portable zip --x64"
```

##### Windows ia32 (32位) 构建
```bash
# PowerShell
docker run --rm -it `
  -v ${PWD}:/project `
  -v electron-node-modules-ia32:/project/node_modules `
  electronuserland/builder:wine `
  /bin/bash -c "cd /project && apt-get update && apt-get install -y wine && pnpm install && pnpm run build && pnpm exec electron-builder --win nsis portable zip --ia32"

# CMD
docker run --rm -it ^
  -v %cd%:/project ^
  -v electron-node-modules-ia32:/project/node_modules ^
  electronuserland/builder:wine ^
  /bin/bash -c "cd /project && apt-get update && apt-get install -y wine && pnpm install && pnpm run build && pnpm exec electron-builder --win nsis portable zip --ia32"
```

##### Windows 多架构构建 (同时构建32位和64位)
```bash
# PowerShell
docker run --rm -it `
  -v ${PWD}:/project `
  -v electron-node-modules-both:/project/node_modules `
  electronuserland/builder:wine `
  /bin/bash -c "cd /project && apt-get update && apt-get install -y wine && pnpm install && pnpm run build && pnpm exec electron-builder --win nsis portable zip --ia32 --x64"

# CMD
docker run --rm -it ^
  -v %cd%:/project ^
  -v electron-node-modules-both:/project/node_modules ^
  electronuserland/builder:wine ^
  /bin/bash -c "cd /project && apt-get update && apt-get install -y wine && pnpm install && pnpm run build && pnpm exec electron-builder --win nsis portable zip --ia32 --x64"
```

#### Linux 构建命令

##### Linux x64 (64位) 构建
```bash
# PowerShell
docker run --rm -it `
  -v ${PWD}:/project `
  -v electron-node-modules-linux-x64:/project/node_modules `
  electronuserland/builder:latest `
  /bin/bash -c "cd /project && apt-get update && apt-get install -y libopenjp2-tools fakeroot && pnpm install && pnpm run build && pnpm exec electron-builder --linux AppImage deb tar.gz --x64"

# CMD
docker run --rm -it ^
  -v %cd%:/project ^
  -v electron-node-modules-linux-x64:/project/node_modules ^
  electronuserland/builder:latest ^
  /bin/bash -c "cd /project && apt-get update && apt-get install -y libopenjp2-tools fakeroot && pnpm install && pnpm run build && pnpm exec electron-builder --linux AppImage deb tar.gz --x64"
```

##### Linux arm64 (ARM 64位) 构建
```bash
# PowerShell
docker run --rm -it `
  -v ${PWD}:/project `
  -v electron-node-modules-linux-arm64:/project/node_modules `
  electronuserland/builder:latest `
  /bin/bash -c "cd /project && apt-get update && apt-get install -y libopenjp2-tools fakeroot && pnpm install && pnpm run build && pnpm exec electron-builder --linux AppImage deb tar.gz --arm64"

# CMD
docker run --rm -it ^
  -v %cd%:/project ^
  -v electron-node-modules-linux-arm64:/project/node_modules ^
  electronuserland/builder:latest ^
  /bin/bash -c "cd /project && apt-get update && apt-get install -y libopenjp2-tools fakeroot && pnpm install && pnpm run build && pnpm exec electron-builder --linux AppImage deb tar.gz --arm64"
```

##### Linux armv7l (ARM 32位) 构建
```bash
# PowerShell
docker run --rm -it `
  -v ${PWD}:/project `
  -v electron-node-modules-linux-armv7l:/project/node_modules `
  electronuserland/builder:latest `
  /bin/bash -c "cd /project && apt-get update && apt-get install -y libopenjp2-tools fakeroot && pnpm install && pnpm run build && pnpm exec electron-builder --linux AppImage deb tar.gz --armv7l"

# CMD
docker run --rm -it ^
  -v %cd%:/project ^
  -v electron-node-modules-linux-armv7l:/project/node_modules ^
  electronuserland/builder:latest ^
  /bin/bash -c "cd /project && apt-get update && apt-get install -y libopenjp2-tools fakeroot && pnpm install && pnpm run build && pnpm exec electron-builder --linux AppImage deb tar.gz --armv7l"
```

##### Linux 多架构构建
```bash
# PowerShell
docker run --rm -it `
  -v ${PWD}:/project `
  -v electron-node-modules-linux-multi:/project/node_modules `
  electronuserland/builder:latest `
  /bin/bash -c "cd /project && apt-get update && apt-get install -y libopenjp2-tools fakeroot && pnpm install && pnpm run build && pnpm exec electron-builder --linux AppImage deb tar.gz --x64 --arm64"

# CMD
docker run --rm -it ^
  -v %cd%:/project ^
  -v electron-node-modules-linux-multi:/project/node_modules ^
  electronuserland/builder:latest ^
  /bin/bash -c "cd /project && apt-get update && apt-get install -y libopenjp2-tools fakeroot && pnpm install && pnpm run build && pnpm exec electron-builder --linux AppImage deb tar.gz --x64 --arm64"
```

#### macOS 构建命令

> **注意**：
> 1. 在非macOS系统上构建的macOS应用不会被签名，仅用于测试目的。正式发布需要在macOS系统上构建并签名。
> 2. macOS DMG格式构建需要`dmg-license`模块，命令中已添加安装步骤。
> 3. 如果不需要DMG格式，可以将`dmg`替换为其他格式如`pkg`或只保留`zip`。
> 4. 在Docker中构建macOS应用可能会遇到macOS特定依赖问题。命令中添加了配置项来禁用macOS的公证和验证步骤。
> 5. 即使在 Docker 当中也无法构建 dmg、pkg 安装包，zip 是可以的，但是解压之后体积过大。

##### macOS amd64 (64位Intel) 构建
```bash
# PowerShell
docker run --rm -it `
  -v ${PWD}:/project `
  -v electron-node-modules-mac-amd64:/project/node_modules `
  electronuserland/builder:latest `
  /bin/bash -c "cd /project && pnpm install && pnpm add dmg-license --save-dev && pnpm run build && pnpm exec electron-builder --mac zip --x64 -c.mac.notarize=false -c.mac.identity=null"

# CMD
docker run --rm -it ^
  -v %cd%:/project ^
  -v electron-node-modules-mac-amd64:/project/node_modules ^
  electronuserland/builder:latest ^
  /bin/bash -c "cd /project && pnpm install && pnpm add dmg-license --save-dev && pnpm run build && pnpm exec electron-builder --mac zip --x64 -c.mac.notarize=false -c.mac.identity=null"
```

##### macOS arm64 (Apple Silicon) 构建
```bash
# PowerShell
docker run --rm -it `
  -v ${PWD}:/project `
  -v electron-node-modules-mac-arm64:/project/node_modules `
  electronuserland/builder:latest `
  /bin/bash -c "cd /project && pnpm install && pnpm add dmg-license --save-dev && pnpm run build && pnpm exec electron-builder --mac zip --arm64 -c.mac.notarize=false -c.mac.identity=null"

# CMD
docker run --rm -it ^
  -v %cd%:/project ^
  -v electron-node-modules-mac-arm64:/project/node_modules ^
  electronuserland/builder:latest ^
  /bin/bash -c "cd /project && pnpm install && pnpm add dmg-license --save-dev && pnpm run build && pnpm exec electron-builder --mac zip --arm64 -c.mac.notarize=false -c.mac.identity=null"
```

##### macOS 通用二进制 (Universal Binary) 构建
```bash
# PowerShell
docker run --rm -it `
  -v ${PWD}:/project `
  -v electron-node-modules-mac-universal:/project/node_modules `
  electronuserland/builder:latest `
  /bin/bash -c "cd /project && pnpm install && pnpm add dmg-license --save-dev && pnpm run build && pnpm exec electron-builder --mac zip --universal -c.mac.notarize=false -c.mac.identity=null"

# CMD
docker run --rm -it ^
  -v %cd%:/project ^
  -v electron-node-modules-mac-universal:/project/node_modules ^
  electronuserland/builder:latest ^
  /bin/bash -c "cd /project && pnpm install && pnpm add dmg-license --save-dev && pnpm run build && pnpm exec electron-builder --mac zip --universal -c.mac.notarize=false -c.mac.identity=null"
```

#### 三平台同时构建命令

##### 所有平台 x64 (64位) 构建
```bash
# PowerShell
docker run --rm -it `
  -v ${PWD}:/project `
  -v electron-node-modules-all-x64:/project/node_modules `
  electronuserland/builder:wine `
  /bin/bash -c "cd /project && apt-get update && apt-get install -y libopenjp2-tools fakeroot wine && pnpm install && pnpm add dmg-license --save-dev && pnpm run build && pnpm exec electron-builder -w --x64 -l AppImage deb tar.gz --x64 -m zip --x64 -c.mac.notarize=false -c.mac.identity=null"

# CMD
docker run --rm -it ^
  -v %cd%:/project ^
  -v electron-node-modules-all-x64:/project/node_modules ^
  electronuserland/builder:wine ^
  /bin/bash -c "cd /project && apt-get update && apt-get install -y libopenjp2-tools fakeroot wine && pnpm install && pnpm add dmg-license --save-dev && pnpm run build && pnpm exec electron-builder -w --x64 -l AppImage deb tar.gz --x64 -m zip --x64 -c.mac.notarize=false -c.mac.identity=null"
```

##### 所有平台多架构构建
```bash
# PowerShell
docker run --rm -it `
  -v ${PWD}:/project `
  -v electron-node-modules-all-multi:/project/node_modules `
  electronuserland/builder:wine `
  /bin/bash -c "cd /project && apt-get update && apt-get install -y libopenjp2-tools fakeroot wine && pnpm install && pnpm add dmg-license --save-dev && pnpm run build && pnpm exec electron-builder -w --x64 --ia32 -l AppImage deb tar.gz --x64 --arm64 -m zip --x64 --arm64 -c.mac.notarize=false -c.mac.identity=null"

# CMD
docker run --rm -it ^
  -v %cd%:/project ^
  -v electron-node-modules-all-multi:/project/node_modules ^
  electronuserland/builder:wine ^
  /bin/bash -c "cd /project && apt-get update && apt-get install -y libopenjp2-tools fakeroot wine && pnpm install && pnpm add dmg-license --save-dev && pnpm run build && pnpm exec electron-builder -w --x64 --ia32 -l AppImage deb tar.gz --x64 --arm64 -m zip --x64 --arm64 -c.mac.notarize=false -c.mac.identity=null"
```

#### 构建参数说明
- **平台选择**：
  - `-w, --win, --windows` - 构建Windows版本
  - `-m, --mac, --macos` - 构建macOS版本
  - `-l, --linux` - 构建Linux版本
  - `-mwl` - 同时构建三个平台

- **架构选择**：
  - `--x64` - 构建64位版本
  - `--arm64` - 构建ARM64架构版本(Apple Silicon/ARM Linux)
  - `--armv7l` - 构建ARMv7架构版本(树莓派等)
  - `--ia32` - 构建32位版本(仅Windows支持)
  - `--universal` - 构建macOS通用二进制(同时支持Intel和Apple Silicon)

- **常用格式**：
  - Windows: `nsis`(安装包)、`portable`(便携版)、`zip`(压缩包)、`appx`(Microsoft Store)
  - Linux: `AppImage`、`deb`(Debian/Ubuntu)、`rpm`(Fedora/CentOS)、`tar.gz`(通用)
  - macOS: `dmg`(磁盘镜像)、`zip`(压缩包)、`pkg`(安装包)

- **macOS特殊选项**：
  - `-c.mac.notarize=false` - 禁用macOS公证步骤
  - `-c.mac.identity=null` - 跳过签名步骤(在非macOS系统上构建时使用)

## 📦 项目结构

```electron-vite/
├── src/
│   ├── main/           # 主进程代码
│   ├── preload/        # 预加载脚本
│   ├── renderer/       # 渲染进程代码
│   └── shared/         # 共享代码
├── electron.vite.config.ts  # Vite 配置
├── electron-builder.yml     # Electron Builder 配置
└── package.json
```

## 🔧 开发指南

### 主进程开发

主进程代码位于 `src/main` 目录，用于处理系统级操作和进程间通信。

### 渲染进程开发

渲染进程代码位于 `src/renderer` 目录，使用 React 构建用户界面。

### 预加载脚本

预加载脚本位于 `src/preload` 目录，用于安全地暴露主进程功能给渲染进程。

## 🏗️ 构建配置

### Windows 构建

```bash
# 构建 x64 版本
pnpm build:win:x64

# 构建 arm64 版本
pnpm build:win:arm64
```

### macOS 构建

```bash
# 构建 x64 版本
pnpm build:mac:x64

# 构建 arm64 版本
pnpm build:mac:arm64
```

### Linux 构建

```bash
# 构建 x64 版本
pnpm build:linux:x64

# 构建 arm64 版本
pnpm build:linux:arm64
```

## 🔄 自动更新

项目支持自动更新功能，需要在 `electron-builder.yml` 中配置正确的发布 URL。

## 📝 发布流程

1. 更新 `package.json` 中的版本号
2. 提交更改并推送到 GitHub
3. 在 GitHub Actions 中触发构建工作流
4. 构建完成后，触发发布工作流
5. 检查发布版本和构建产物

## 🤝 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [electron-vite](https://github.com/electron-vite/electron-vite)
- [electron-builder](https://github.com/electron-userland/electron-builder)
- [vite](https://github.com/vitejs/vite)
- [react](https://github.com/facebook/react)
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss)
