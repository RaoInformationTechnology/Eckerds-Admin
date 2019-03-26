<?php

require 'connect.php';

// array **********
$records = array();
array_unshift($records,"");
unset($records[0]);

// Wauchula *****************
$users1 = [];

$sql1 = "SELECT *  FROM  refillprescription WHERE location = 'Wauchula'";

if($result1 = mysqli_query($con,$sql1))
{
  $cr1 = 0;
  while($row1 = mysqli_fetch_assoc($result1))
  { 
    $users1[$cr1] = $row1;
    $cr1++;
  }
  array_push($records, count($users1));
}else{
  http_response_code(404);
}


// Palmetto *****************
$users2 = [];

$sql2 = "SELECT *  FROM  refillprescription WHERE location = 'Palmetto'";

if($result2 = mysqli_query($con,$sql2))
{
  $cr1 = 0;
  while($row2 = mysqli_fetch_assoc($result2))
  { 
    $users2[$cr2] = $row2;
    $cr2++;
  }
  array_push($records, count($users2));
}else{
  http_response_code(404);
}

// Bradenton *****************
$users3 = [];

$sql3 = "SELECT *  FROM  refillprescription WHERE location = 'Bradenton'";

if($result3 = mysqli_query($con,$sql3))
{
  $cr3 = 0;
  while($row1 = mysqli_fetch_assoc($result3))
  { 
    $users3[$cr3] = $row3;
    $cr3++;
  }
  array_push($records, count($users3));
}else{
  http_response_code(404);
}

// Apollo Beach *****************
$users4 = [];

$sql4 = "SELECT *  FROM  refillprescription WHERE location = 'Apollo Beach'";

if($result4 = mysqli_query($con,$sql4))
{
  $cr4 = 0;
  while($row4 = mysqli_fetch_assoc($result4))
  { 
    $users4[$cr4] = $row4;
    $cr4++;
  }
  array_push($records, count($users4));
}else{
  http_response_code(404);
}

// New Port Beach *****************
$users5 = [];

$sql5 = "SELECT *  FROM  refillprescription WHERE location = 'New Port Beach'";

if($result5 = mysqli_query($con,$sql5))
{
  $cr5 = 0;
  while($row6 = mysqli_fetch_assoc($result5))
  { 
    $users5[$cr5] = $row5;
    $cr5++;
  }
  array_push($records, count($users5));
}else{
  http_response_code(404);
}

// New Port Richey *****************
$users6 = [];

$sql6= "SELECT *  FROM  refillprescription WHERE location = 'New Port Richey'";

if($result6 = mysqli_query($con,$sql6))
{
  $cr6 = 0;
  while($row6 = mysqli_fetch_assoc($result6))
  { 
    $users6[$cr6] = $row6;
    $cr6++;
  }
  array_push($records, count($users6));
}else{
  http_response_code(404);
}

// Lake Jackson *****************
$users7 = [];

$sql7 = "SELECT *  FROM  refillprescription WHERE location = 'Lake Jackson'";

if($result7 = mysqli_query($con,$sql7))
{
  $cr7 = 0;
  while($row7 = mysqli_fetch_assoc($result7))
  { 
    $users7[$cr7] = $row7;
    $cr7++;
  }
  array_push($records, count($users7));
}else{
  http_response_code(404);
}

// West Bradenton *****************
$users8 = [];

$sql8 = "SELECT *  FROM  refillprescription WHERE location = 'West Bradenton'";

if($result8 = mysqli_query($con,$sql8))
{
  $cr1 = 0;
  while($row8 = mysqli_fetch_assoc($result8))
  { 
    $users8[$cr8] = $row8;
    $cr8++;
  }
  array_push($records, count($users8));
  echo json_encode(['data'=>$records]);
}else{
  http_response_code(404);
}