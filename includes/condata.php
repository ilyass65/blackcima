<?php 
     $conn = mysqli_connect('localhost', 'root', 'root', 'ilyass77');
    if(!$conn){
    echo '<h1>fail to conect database !! </h1>' . mysqli_connect_error();
    };


?>