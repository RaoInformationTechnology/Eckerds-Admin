<?php

require 'connect.php';

// array **********
$records = array();
array_unshift($records,"");
unset($records[0]);

// january *****************
$users1 = [];

$sql1 = "SELECT *  FROM  transferprescription WHERE MONTH(createdAt)  = 01 AND YEAR(createdAt) = 2019";

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

// february *****************
$users2 = [];

$sql2 = "SELECT *  FROM  transferprescription WHERE MONTH(createdAt) = 02 AND YEAR(createdAt) = 2019";

if($result2 = mysqli_query($con,$sql2))
{
  $cr2 = 0;
  while($row2 = mysqli_fetch_assoc($result2))
  { 
    $users2[$cr2] = $row2;
    $cr2++;
  }
  array_push($records, count($users2));
}else{
  http_response_code(404);
}

// march *****************
$users3 = [];

$sql3 = "SELECT *  FROM  transferprescription WHERE MONTH(createdAt) = 03 AND YEAR(createdAt) = 2019";

if($result3 = mysqli_query($con,$sql3))
{
  $cr3= 0;
  while($row3 = mysqli_fetch_assoc($result3))
  { 
    $users3[$cr3] = $row3;
    $cr3++;
  }
  array_push($records, count($users3));
}else{
  http_response_code(404);
}

// april *****************
$users4 = [];

$sql4 = "SELECT *  FROM  transferprescription WHERE MONTH(createdAt) = 04 AND YEAR(createdAt) = 2019";

if($result4 = mysqli_query($con,$sql4))
{
  $cr4 = 0;
  while($row4= mysqli_fetch_assoc($result4))
  { 
    $users4[$cr4] = $row4;
    $cr4++;
  }
  array_push($records, count($users4));
}else{
  http_response_code(404);
}

// may *****************
$users5 = [];

$sql5 = "SELECT *  FROM  transferprescription WHERE MONTH(createdAt) = 05 AND YEAR(createdAt) = 2019";

if($result5 = mysqli_query($con,$sql5))
{
  $cr5 = 0;
  while($row5 = mysqli_fetch_assoc($result5))
  { 
    $users5[$cr5] = $row5;
    $cr5++;
  }
  array_push($records, count($users5));
}else{
  http_response_code(404);
}

// june *****************
$users6 = [];

$sql6 = "SELECT *  FROM  transferprescription WHERE MONTH(createdAt) = 06 AND YEAR(createdAt) = 2019";

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

// july *****************
$users7 = [];

$sql7 = "SELECT *  FROM  transferprescription WHERE MONTH(createdAt) = 07 AND YEAR(createdAt) = 2019";

if($result7 = mysqli_query($con,$sql7))
{
  $cr7= 0;
  while($row7 = mysqli_fetch_assoc($result7))
  { 
    $users7[$cr7] = $row7;
    $cr7++;
  }
  array_push($records, count($users7));
}else{
  http_response_code(404);
}

// august *****************
$users8 = [];

$sql8 = "SELECT *  FROM  transferprescription WHERE MONTH(createdAt) = 08 AND YEAR(createdAt) = 2019";

if($result8 = mysqli_query($con,$sql8))
{
  $cr8 = 0;
  while($row8 = mysqli_fetch_assoc($result8))
  { 
    $users8[$cr8] = $row8;
    $cr8++;
  }
  array_push($records, count($users8));
}else{
  http_response_code(404);
}

// september *****************
$users9 = [];

$sql9 = "SELECT *  FROM  transferprescription WHERE MONTH(createdAt) = 09 AND YEAR(createdAt) = 2019";

if($result9 = mysqli_query($con,$sql9))
{
  $cr9 = 0;
  while($row9 = mysqli_fetch_assoc($result9))
  { 
    $users9[$cr9] = $row9;
    $cr9++;
  }
  array_push($records, count($users9));
}else{
  http_response_code(404);
}

// october *****************
$users10 = [];

$sql10 = "SELECT *  FROM  transferprescription WHERE MONTH(createdAt) = 10 AND YEAR(createdAt) = 2019";

if($result10 = mysqli_query($con,$sql10))
{
  $cr10 = 0;
  while($row10 = mysqli_fetch_assoc($result10))
  { 
    $users10[$cr10] = $row10;
    $cr10++;
  }
  array_push($records, count($users10));
}else{
  http_response_code(404);
}

// november *****************
$users11 = [];

$sql11 = "SELECT *  FROM  transferprescription WHERE MONTH(createdAt) = 11 AND YEAR(createdAt) = 2019";

if($result11  = mysqli_query($con,$sql11 ))
{
  $cr11  = 0;
  while($row11  = mysqli_fetch_assoc($result11 ))
  { 
    $users11 [$cr11 ] = $row11 ;
    $cr11 ++;
  }
  array_push($records, count($users11));
}else{
  http_response_code(404);
}

// december *****************
$users12 = [];

$sql12 = "SELECT *  FROM  transferprescription WHERE MONTH(createdAt) = 12 AND YEAR(createdAt) = 2019";

if($result12 = mysqli_query($con,$sql12))
{
  $cr12 = 0;
  while($row12 = mysqli_fetch_assoc($result12))
  { 
    $users12[$cr12] = $row12;
    $cr12++;
  }
  array_push($records, count($users12));
  echo json_encode(['data'=>$records]);
}else{
  http_response_code(404);
}
?>