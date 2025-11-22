<?php
session_start();

$users = json_decode(file_get_contents(__DIR__ . '/../data/users.json'), true);

$u = $_POST['u'] ?? '';
$p = $_POST['p'] ?? '';

if(isset($users[$u]) && $users[$u] == $p){
    $_SESSION['user'] = $u;
    echo "success";
} else {
    echo "用户名或密码错误";
}