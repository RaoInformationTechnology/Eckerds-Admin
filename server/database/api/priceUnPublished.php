<?php

require 'connect.php';
    
$users = [];
$sql = "SELECT *  FROM  priceCheck WHERE isPublish = false ";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$cr]['pc_id']    = $row['pc_id'];
    $users[$cr]['name']    = $row['name'];
    $users[$cr]['phone']    = $row['phone'];
    $users[$cr]['email']    = $row['email'];
    $users[$cr]['location']    = $row['location'];
    $users[$cr]['medicines']    = $row['medicines'];
    $users[$cr]['note']    = $row['note'];
    $users[$cr]['isPublished']    = $row['isPublish'];
    $users[$cr]['createdAt']    = $row['createdAt'];
    $cr++;
  }    
  echo json_encode(['data'=>$users]);
}
else
{
  http_response_code(404);
}
