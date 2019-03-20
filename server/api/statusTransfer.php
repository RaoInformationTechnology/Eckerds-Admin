<?php
require "connect.php";
$data = json_decode(file_get_contents("php://input"));
if($data->status == 'unpublished'){
	$sql = "UPDATE transferprescription SET isPublished = 'published' WHERE tp_id = $data->tp_id ";
	$result = $con->query($sql);
}else{
	$sql = "UPDATE transferprescription SET isPublished = 'unpublished' WHERE tp_id = $data->tp_id ";
	$result = $con->query($sql);
}
?>