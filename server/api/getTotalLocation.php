<?php

require 'connect.php';
    
$users = [];
$sql = "SELECT *  FROM  locations";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$cr]['location_id']    = $row['location_id'];
    $users[$cr]['pharmacyName']    = $row['pharmacyName'];
    $users[$cr]['phone']    = $row['phone'];
    $users[$cr]['fax']    = $row['fax'];
    $users[$cr]['tollFreeNumber']    = $row['tollFreeNumber'];
    $users[$cr]['email']    = $row['email'];
    $users[$cr]['addressOne']    = $row['addressOne'];
    $users[$cr]['addressTwo']    = $row['addressTwo'];
    $users[$cr]['city']    = $row['city'];
    $users[$cr]['state']    = $row['state'];
    $users[$cr]['pincode']    = $row['pinCode'];
    $cr++;
  }
  echo json_encode(['data'=>$users]);


}
else
{
  http_response_code(404);
}