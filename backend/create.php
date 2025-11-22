<?php
$name = basename($_POST['name']);
$path = __DIR__ . '/../data/notes/' . $name;

if(file_exists($path))
    die("文件已存在");

file_put_contents($path, "# 新建文件\n");
echo "创建成功";