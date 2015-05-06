<?php
/*
 CONNECT-DB.PHP
 PHP to connect to your database
*/

$server = 'localhost';
$user = 'kadyszew_blogdb';
$pass = '9P]3PR(S7O';
$db = 'kadyszew_blogdb';
$con = mysql_connect($server, $user, $pass);
if (!$con) {
    die('Could not connect: ' . mysql_error());
}
$db_selected = mysql_select_db($db);
if (!$db_selected) {
    die ('Can\'t use foo : ' . mysql_error());
}
?>
