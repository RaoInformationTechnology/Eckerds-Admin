<?php
require "connect.php";
$data = json_decode(file_get_contents("php://input"));
if($data->status == 0){
	$sql = "UPDATE priceCheck SET isPublish = 1 WHERE pc_id = $data->pc_id ";
	$result = $con->query($sql);
}else{
	$sql = "UPDATE priceCheck SET isPublish = 0 WHERE pc_id = $data->pc_id";
	$result = $con->query($sql);
}
?>
