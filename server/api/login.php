<?php
$data = json_decode(file_get_contents("php://input"));
require 'connect.php';

$query = "SELECT * FROM `users` WHERE email='$data->email' and password='$data->password'";

$result = mysqli_query($con, $query) or die(mysqli_error($con));
$count = mysqli_num_rows($result);

if($count == 1){
	echo json_encode($data->email);
}
else{
	echo "error";
}
?>