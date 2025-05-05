FROM ruby:3.4.3 as builder

WORKDIR /app

# 安装必要的系统依赖
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    g++ \
    make \
    pkg-config \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*

# 复制项目文件
COPY Gemfile* ./

# 安装依赖
RUN bundle install

# 复制其余文件
COPY . .

# 使用 bundle exec 来运行 jekyll 命令进行构建
RUN bundle exec jekyll build

# 检查生成的文件
RUN ls -la _site && \
    find _site -type f | sort

# 修复Jekyll服务运行命令，移除--source _site参数
# Jekyll不允许源目录与目标目录相同或包含关系
CMD ["bundle", "exec", "jekyll", "serve", "--livereload", "--host", "0.0.0.0"]
