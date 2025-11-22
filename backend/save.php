<?php
$name = basename($_POST['f']);
$text = $_POST['text'];
$path = __DIR__ . '/../data/notes/' . $name;

file_put_contents($path, $text);
echo "保存成功";