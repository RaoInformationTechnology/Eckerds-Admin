<?php
require "connect.php";
$data = json_decode(file_get_contents("php://input"));

if($data->status == 0){
	$sql = "UPDATE transferPrescription SET isPublish = 1 WHERE tp_id = $data->tp_id ";
	$result = $con->query($sql);
}else{
	$sql = "UPDATE transferPrescription SET isPublish = 0 WHERE tp_id = $data->tp_id ";
	$result = $con->query($sql);
}
?>
