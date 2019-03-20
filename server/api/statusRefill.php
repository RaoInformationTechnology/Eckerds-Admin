<?php
require "connect.php";
$data = json_decode(file_get_contents("php://input"));
if($data->status == 'unpublished'){
	$sql = "UPDATE refillprescription SET isPublished = 'published' WHERE refill_id = $data->refill_id ";
	$result = $con->query($sql);
}else{
	$sql = "UPDATE refillprescription SET isPublished = 'unpublished' WHERE refill_id = $data->refill_id ";
	$result = $con->query($sql);
}
?>