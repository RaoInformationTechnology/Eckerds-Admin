<?php
include "connect.php";
$data = json_decode(file_get_contents("php://input"));
$sql = "UPDATE locations SET
pharmacyName ='$data->pharmacyName',  phone ='$data->phone',
fax ='$data->fax',tollFreeNumber ='$data->tollFreeNumber',email ='$data->email',addressOne ='$data->addressOne',addressTwo ='$data->addressTwo',city ='$data->city',state ='$data->state',pincode ='$data->pincode'
WHERE location_id = $data->location_id ";
$qry = $con->query($sql);
if($data->pharmacyName){
}
$con->close();
?>