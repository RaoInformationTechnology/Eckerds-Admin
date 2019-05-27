<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('content-type: text/html; charset=utf-8');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header("Cache-Control: *");
//header("Content-Type : text/plain");
 ini_set('display_errors', 'On');
 error_reporting(E_ALL);

// Server
$con = mysqli_connect("localhost","root","password",'myeckerds') or die("Could not connect to DB");

//Localhost
// $con = mysqli_connect("localhost","root","",'myeckerds') or die("Could not connect to DB");
