<?php


$data = json_decode(file_get_contents("php://input"));
require 'connect.php';


echo count($data);
echo $data;
if(count($data) != 0){

	$sql = "INSERT INTO locations (pharmacyName, phone, fax, tollFreeNumber ,email, addressOne, addressTwo, city, state, pincode)
	VALUES ('$data->pharmacyName', '$data->phone', '$data->fax', '$data->tollfree' , '$data->email', '$data->addressOne', '$data->addressTwo', '$data->city', '$data->state', '$data->pincode')";

	$qry = $con->query($sql);


	if($con->query($sql) === TRUE){
		echo "Inserted Successfully";
	}else{
		echo "Some error" . "<br>" . $con->error;
	}
}
?>

