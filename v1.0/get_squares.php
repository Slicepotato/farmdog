<?php
  require_once 'db.config.php';

  $tableName = DB_TABLE;

  // Create connection
  $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_DATABASE);

  // Check connection
  if($conn->connect_error) {
    die("Unable to connect database: " . $conn->connect_error);
  }

  $data = array();
  if($result = $conn->query("SELECT * FROM $tableName ORDER BY RAND() LIMIT 24;")){

    if($result->num_rows > 0){
        while($userData = $result->fetch_array(MYSQL_ASSOC)){
          $data[] = $userData;
        }
    }

    //returns data as JSON format
    echo json_encode($data);
  }

  $result->close();
  $conn->close();
?>
