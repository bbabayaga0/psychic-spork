<?php
session_start();

$_SESSION['name'] = 'ПРивет';
header('Location: page2.php');
die()
?>