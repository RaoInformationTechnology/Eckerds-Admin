<?php

require 'connect.php';
    
$users = [];
$sql = "SELECT *  FROM  refillPrescription";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$cr]['refill_id']    = $row['refill_id'];
    $users[$cr]['location']    = $row['location'];
    $users[$cr]['name']    = $row['name'];
    $users[$cr]['phone']    = $row['phone'];
    $users[$cr]['email']    = $row['email'];
    $users[$cr]['rxNumbers']    = $row['rxnumbers'];
    $users[$cr]['myDate']    = $row['date'];
    $users[$cr]['myTime']    = $row['time'];
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
