<?php
session_start();
include("db.php");

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $First_name = $_POST['Firstname']; // corrected field name
    $Second_name = $_POST['Secondname']; // corrected field name
    $Email = $_POST['email']; // corrected field name
    $Password = $_POST['password']; // corrected field name
    $Confirm_Password = $_POST['confirm_password']; // corrected field name

    if (!empty($Email) && !empty($Password) && !is_numeric($Email)) {
        // Use backticks for column names with spaces
        $query = "INSERT INTO `signup-wa` (`FirstName`, `SecondName`, `Email`, `Password`, `Confirm Passwor`) 
                  VALUES ('$First_name', '$Second_name', '$Email', '$Password', '$Confirm_Password')";
;

        // Use prepared statements or at least sanitize user input
        $stmt = mysqli_prepare($con,  $query);
        mysqli_stmt_execute($stmt);

        echo "<script type='text/javascript'> alert('successfully registered')</script>";
    } else {
        echo "<script type='text/javascript'> alert('please enter some valid information')</script>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="stylev.css">
</head>
<body>
    <div class="signup-container">
        <h2>Create an Account</h2>
        <form id="signupForm" action="signup.php" method="post">
            <input type="text" name="Firstname" placeholder="FirstName" required>
            <input type="text" name="Secondname" placeholder="SecondName" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <input type="password" name="confirm_password" placeholder="Confirm Password" required>
            <button type="submit">Sign Up</button>
        </form>
        <p>successfully registered? <a href="login.php">login</a>.</p>
    </div>
</body>
</html>
