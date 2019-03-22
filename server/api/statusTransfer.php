<?php
require "connect.php";
$data = json_decode(file_get_contents("php://input"));

if($data->status == 0){
	$sql = "UPDATE transferprescription SET isPublish = 1 WHERE tp_id = $data->tp_id ";
	$result = $con->query($sql);
}else{
	$sql = "UPDATE transferprescription SET isPublish = 0 WHERE tp_id = $data->tp_id ";
	$result = $con->query($sql);
}
?>