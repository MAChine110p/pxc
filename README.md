# 个人主页与博客

基于 Jekyll 的静态个人网站，可直接部署到 GitHub Pages。主页、关于页和博客文章都使用 Markdown/HTML 文件维护，不需要数据库或服务器。

## 先替换个人信息

姓名和邮箱已预填在 `_config.yml`。请补充身份/方向、所在城市、GitHub 主页和简介，再编辑 `_pages/about.md` 与 `index.html` 中的示例介绍。

## 发布新文章

在 `_posts` 文件夹新建 Markdown 文件，文件名格式为 `YYYY-MM-DD-英文或拼音短标题.md`。文件开头添加 Front Matter：

```yaml
---
layout: post
title: "文章标题"
date: 2026-10-21 10:00:00 +0800
description: "文章摘要，会显示在列表页。"
tags: [随笔, 记录]
---
```

空行之后写正文，支持标准 Markdown。文章会按日期自动出现在首页和博客列表。

## 发布到 GitHub Pages

1. 网站文件已上传到公开仓库 `MAChine110p/pxc`，预期地址为 `https://MAChine110p.github.io/pxc/`。
2. 在仓库打开 **Settings → Pages**，在 **Build and deployment** 选择 **Deploy from a branch**，分支选 `main`，目录选 `/(root)` 并保存。GitHub Pages 会自动用 Jekyll 构建；部署完成后可从 Pages 设置页打开网站。
3. 若要在本地编辑并推送更新，先克隆仓库：

   ```bash
   git clone https://github.com/MAChine110p/pxc.git
   cd pxc
   # 编辑网站文件后执行：
   git add .
   git commit -m "Update personal website"
   git push
   ```

4. `_config.yml` 已设置 `baseurl: "/pxc"`。之后每次推送都会触发重新部署。

## 本地预览（可选）

安装 Ruby 后运行 `bundle install`，再执行 `bundle exec jekyll serve`，访问终端显示的本地地址。GitHub Pages 会负责线上构建，因此不需要提交 `_site` 文件夹。

## 目录

- `_config.yml`：站点标题、个人信息和 Jekyll 设置
- `_pages/about.md`、`_pages/blog.md`：关于页、博客索引
- `_posts/`：博客文章
- `_layouts/`：通用页面与文章模板
- `assets/`：样式和交互脚本

