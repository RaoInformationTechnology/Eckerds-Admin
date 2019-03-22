<?php
require "connect.php";
$data = json_decode(file_get_contents("php://input"));
if($data->status == 0){
	$sql = "UPDATE refillprescription SET isPublish = 1 WHERE refill_id = $data->refill_id ";
	$result = $con->query($sql);
}else{
	$sql = "UPDATE refillprescription SET isPublish = 0 WHERE refill_id = $data->refill_id ";
	$result = $con->query($sql);
}
?>