<?php

require 'connect.php';
    
$users = [];
$sql = "SELECT *  FROM  transferPrescription WHERE isPublish = true ";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$cr]['tp_id']    = $row['tp_id'];
    $users[$cr]['name']    = $row['name'];
    $users[$cr]['phone']    = $row['phone'];
    $users[$cr]['email']    = $row['email'];
    $users[$cr]['fromName']    = $row['fromName'];
    $users[$cr]['location']    = $row['location'];
    $users[$cr]['pharmacyPhone']    = $row['pharmacyPhone'];
    $users[$cr]['rxNumbers']    = $row['rxNumbers'];
    $users[$cr]['myDate']    = $row['myDate'];
    $users[$cr]['myTime']    = $row['myTime'];
    $users[$cr]['note']    = $row['note'];
    $users[$cr]['isPublish']    = $row['isPublish'];
    $users[$cr]['createdAt']    = $row['createdAt'];
    $cr++;
  }    
  echo json_encode(['data'=>$users]);
}
else
{
  http_response_code(404);
}
