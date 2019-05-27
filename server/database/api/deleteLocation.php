<?php
require "connect.php";
$data = json_decode(file_get_contents("php://input"));
echo $data->id;
$sql = "DELETE FROM locations WHERE location_id = $data->id ";
$result = $con->query($sql);
$con->close();
?>
