<?php

require 'connect.php';

$locations = array();
$users = [];
$sql = "SELECT *  FROM  locations";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $row['city'];
    array_push($locations, $row['city']);
  }
  $totalNoOfLocation = count($locations);
}

$records1 = array();
array_unshift($records1,"");
unset($records1[0]);
for ($x = 0; $x <= $totalNoOfLocation; $x++) {
  $users = [];

  $sql = "SELECT *  FROM  pricecheck WHERE location = '$locations[$x]'";
  if($result = mysqli_query($con,$sql))
  {
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
      $users[$cr] = $row;
      $cr++;
      echo $user[$cr];
    }
    array_push($records1, count($users));
  }else{
    http_response_code(404);
  }
}
echo json_encode(['data'=>$records1]);