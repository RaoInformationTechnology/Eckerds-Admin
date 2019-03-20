<?php
require "connect.php";
$data = json_decode(file_get_contents("php://input"));
if($data->status == 'unpublished'){
	$sql = "UPDATE pricecheck SET isPublished = 'published' WHERE pc_id = $data->pc_id ";
	$result = $con->query($sql);
}else{
	$sql = "UPDATE pricecheck SET isPublished = 'unpublished' WHERE pc_id = $data->pc_id";
	$result = $con->query($sql);
}
?>