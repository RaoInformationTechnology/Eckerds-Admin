<?php

require 'connect.php';
    
$users = [];
$sql = "SELECT *  FROM  pricecheck";

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
    $users[$cr]['isPublish']    = $row['isPublish'];
    $users[$cr]['createdAt']    = $row['createdAt'];
    $cr++;
  }

  // $cipher_method = 'aes-128-ctr';
  // $enc_key = openssl_digest(php_uname(), 'SHA256', TRUE);
  // $enc_iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length($cipher_method));
  // $crypted_token = openssl_encrypt($users, $cipher_method, $enc_key, 0, $enc_iv) . "::" . bin2hex($enc_iv);
  // unset($token, $cipher_method, $enc_key, $enc_iv);
  // echo $crypted_token;

  echo json_encode(['data'=>$users]);

}
else
{
  http_response_code(404);
}
