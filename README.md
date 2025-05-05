# globular cluster

使用GitHub pages 和 actions部署企业网站

企业信息

公司名：Globular cluster technology software limited

公司域名：globularcluster.ca

公司联系人：Kasen

公司联系邮箱：support@globularcluster.ca

网站语言：中文、英文

提供服务：AWS云平台成本节省，公司IT业务优化，公司网站设计和建设


# run on macos

```sh
brew install colima docker  

colima start

docker build -t jekyll . && docker run -it --rm -p 4000:4000 --name website jekyll

```