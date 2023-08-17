<?php
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];

$erroors = [
    'firstNameError' => '',
    'lastNameError' => '',
    'emailError' => ''];

if(isset($_POST['submit'])){


    



 // first name validation
if(empty($firstname )){
 $erroors['firstNameError'] = 'check from your first name';
}
// last name validation
if(empty($lastname)){
    $erroors['lastNameError'] = 'check from your last name';
 }
 // email validation
 if(empty($email)){
    $erroors['emailError'] = 'check from your email';
 }
 if(!filter_var($email , FILTER_VALIDATE_EMAIL)){
    $erroors['emailError'] = 'incorrect email';
 }
 /// no errors validation
 if(!array_filter($erroors)){
    $firstname =  mysqli_real_escape_string($conn, $_POST['firstname']);
    $lastname =   mysqli_real_escape_string($conn, $_POST['lastname']);
    $email =      mysqli_real_escape_string($conn, $_POST['email']);

    $sql = "INSERT INTO users1(FirstName, lastName, Email) VALUES ('$firstname', '$lastname', '$email')";
    if(mysqli_query($conn, $sql)){
    header('location: index.php');
    }else{
      echo '<h1>fail to conect database !! </h1>' . mysqli_error($conn);
    };
    };
 }
 


?>