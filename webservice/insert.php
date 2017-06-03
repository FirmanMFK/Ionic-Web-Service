<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, x-xsrf-token");

$con=mysqli_connect("localhost","root","","gudangmusik");

if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$data = json_decode(file_get_contents("php://input"));
$artist = mysqli_real_escape_string($con, $data->artist);
$image = mysqli_real_escape_string($con, $data->image);
$url = mysqli_real_escape_string($con, $data->url);
$namelagu = mysqli_real_escape_string($con, $data->namelagu);
$lirik = mysqli_real_escape_string($con, $data->lirik);

$sql = "INSERT INTO tambah_lagu(artist,image,url,namelagu,lirik) values ('$artist','$image','$url','$namelagu','$lirik')";

if (!mysqli_query($con, $sql)) {
  die('Error: ' . mysqli_error($con));
}
echo "1 record added";

mysqli_close($conn);
?>