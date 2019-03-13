<?php
$data = json_decode(file_get_contents("php://input"));
include "connect.php";
$sql = "DELETE FROM priceCheck WHERE pc_id = $data->id ";
echo $data->id;
$result = $con->query($sql);
?>
