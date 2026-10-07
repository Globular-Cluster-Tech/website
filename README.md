# globular cluster

使用 [Astro](https://astro.build) + [AstroWind](https://github.com/arthelokyo/astrowind) 模板构建，通过 GitHub Pages 和 Actions 部署的企业网站。

企业信息

公司名：Globular cluster technology software limited

公司域名：globularcluster.ca

公司联系人：Kasen

公司联系邮箱：support@globularcluster.ca

网站语言：中文、英文

提供服务：AWS云平台成本节省，公司IT业务优化，公司网站设计和建设

## 目录结构

- `src/i18n.ts`：中英文文案（导航、首页各区块、页脚）
- `src/pages/en/`、`src/pages/zh/`：英文 / 中文页面（首页、服务条款、退款政策、隐私政策）
- `src/components/HomePage.astro`：首页内容
- `src/config.yaml`：站点名称、SEO 等配置
- `public/CNAME`：自定义域名

## 本地开发

需要 Node.js 22。

```sh
npm ci
npm run dev      # http://localhost:4321
npm run check    # 类型检查 + ESLint + Prettier
npm run build    # 输出到 dist/
```

## 用 Docker 运行（macOS）

```sh
brew install colima docker

colima start

docker build -t website . && docker run -it --rm -p 8080:8080 --name website website
```

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 会构建并发布到 GitHub Pages；Pull Request 上只做检查和构建。

模板许可证见 `LICENSE-AstroWind.md`。
