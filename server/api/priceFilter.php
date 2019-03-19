<?php
$data = json_decode(file_get_contents("php://input"));
include "connect.php";

$sql = "SELECT * FROM pricecheck WHERE location = '$data->location'";
$result = $con->query($sql);
if ($result->num_rows > 0) {
	$data = array() ;
	while($row = $result->fetch_assoc()) {
		$data[] = $row;
	}
} else {
	echo "0 results";
}
echo json_encode($data);
$con->close();
?>