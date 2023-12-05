<?php
    session_start();

    include("db.php");

    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $Email = $_POST['username']; // Changed from 'email' to 'username'
        $Password = $_POST['password'];

        if (!empty($Email) && !empty($Password) && !is_numeric($Email)) {
            $query = "SELECT * FROM `signup-wa` WHERE Email = '$Email' LIMIT 1";
            $result = mysqli_query($con, $query);

            if ($result && mysqli_num_rows($result) > 0) {
                $user_data = mysqli_fetch_assoc($result);

                // Directly compare passwords
                if ($user_data['Password'] == $Password) {
                    // Password is correct, redirect to another page
                    header("location: index.php");
                    exit();
                } else {
                    echo "<script type='text/javascript'> alert('Wrong username or password')</script>"; 
                }
            } else {
                echo "<script type='text/javascript'> alert('User not found')</script>"; 
            }
        } else {
            echo "<script type='text/javascript'> alert('Invalid input')</script>"; 
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="login-container">
        <h2>Login to Your Account</h2>
        <form id="loginForm" method="POST">
            <input type="text" name="username" placeholder="Username or Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <p>Create an account? <a href="signup.php">Sign up here</a>.</p>
    </div>
</body>
</html>
