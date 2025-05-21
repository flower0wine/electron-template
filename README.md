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

## 📦 项目结构

```
electron-vite/
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
