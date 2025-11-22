<?php
$dir = __DIR__ . '/../data/notes/';
$files = array_values(array_filter(scandir($dir), fn($f)=>$f!='.' && $f!='..'));
echo json_encode($files);