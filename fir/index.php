<?php

$host = 'localhost';
$user = 'root';
$pass = '';
$name = 'tt1';


$link = mysqli_connect($host, $user, $pass, $name);
$query = 'SELECT * FROM  `inf`';

$res = mysqli_query($link, $query);
for($data = []; $row = mysqli_fetch_assoc($res); $data[] = $row);

    foreach ($data as $elem):?>
    <p>
		<b><?= $elem['code_w'] ?></b>
	</p>
    <?php endforeach; ?>