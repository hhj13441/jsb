📝 双主题 Markdown 记事本（支持登录 / 自动保存 / 多文件）

一个适合新手部署的前后端分离小型项目。无需数据库，仅依赖 PHP + Apache 即可运行。

项目主要特点：

✨ 白色 / 黑色双主题切换

🔐 登录系统（基于文件存储，无数据库）

📂 多文件记事本（可创建 / 打开不同 Markdown 文件）

📝 Markdown 编辑 + 实时预览

💾 自动保存（每 5 秒）与手动保存

📁 文件系统存储，更易部署



---

📦 项目结构

notepad-app/
├── frontend/
│   ├── login.html        # 登录界面
│   ├── index.html        # 主记事本界面
│   ├── style.css         # 样式（黑白主题）
│   ├── app.js            # 主逻辑（主题/文件/自动保存）
│   └── markdown.js       # 简易 Markdown 解析器
│
├── backend/
│   ├── login.php         # 登录接口
│   ├── logout.php        # 退出接口
│   ├── list.php          # 获取文件列表
│   ├── load.php          # 加载 Markdown 内容
│   ├── save.php          # 保存文件
│   └── create.php        # 新建 Markdown 文件
│
└── data/
    ├── users.json        # 用户数据（默认 admin/123456）
    ├── notes/            # Markdown 文件目录
    │   └── sample.md     # 示例文件
    └── sessions/         # 会话文件（可选）


---

🚀 如何在本地运行（超新手友好）

1. 准备环境

你只需要：

Apache

PHP（任意版本 7.0+）


推荐使用：

XAMPP（Windows）

WAMP/MAMP（Mac）


2. 将项目放入 Apache 根目录

例如 Windows（XAMPP）：

C:/xampp/htdocs/notepad-app/

3. 启动 Apache 服务器

在 XAMPP 控制台：打开 Apache。

4. 访问登录页面

http://localhost/notepad-app/frontend/login.html

默认账号：

用户名：admin
密码：123456

登录成功后会跳转到主记事本页面。


---

✨ 功能展示（你可在 GitHub 上传运行截图）

可在此插入你的实际运行截图：

1. 白色主题界面

（截图占位符）

2. 黑色主题界面

（截图占位符）

3. Markdown 实时预览

（截图占位符）

4. 保存成功提示

（截图占位符）

5. 后端 save.php 访问日志

（截图占位符）


---

🔧 技术细节

✔ 前端

原生 HTML + CSS + JavaScript

无框架，轻量级

Markdown 渲染器由 markdown.js 提供


✔ 后端

纯 PHP 实现业务逻辑

无数据库，数据以文件方式存储

避免部署难度



---

🔐 登录机制

系统使用最简单的文件用户系统：

data/users.json

示例：

{
  "admin": "123456"
}

你可以自行修改以添加更多用户。


---

📁 多文件记事本

所有用户笔记存放于：

data/notes/

用户可在前端：

选择文件

新建文件

编辑文件内容

自动保存（每 5 秒）



---

🔄 自动保存逻辑

前端 app.js 内：

setInterval(save, 5000);

每 5 秒自动向后端发送保存请求，可确保内容不会丢失。


---

📮 后端 API 说明

POST /backend/login.php

登录验证

GET /backend/list.php

获取文件列表

GET /backend/load.php?f=文件名

加载文件内容

POST /backend/save.php

保存 Markdown 文件

POST /backend/create.php

创建新文件

GET /backend/logout.php

退出登录


---

🛠 常见问题

1. 打开页面报 404？

确认项目路径为：

http://localhost/notepad-app/frontend/login.html

2. 保存失败？

检查：

/data/notes/ 文件夹是否可写

PHP 是否具有写入权限


3. 登录后跳回登录页？

检查：

Apache 是否开启了 PHP session 功能

/data/sessions/ 是否可写

