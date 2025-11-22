<?php
$name = basename($_GET['f']);
$path = __DIR__ . '/../data/notes/' . $name;

echo file_exists($path) ? file_get_contents($path) : '';