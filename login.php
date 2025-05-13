<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
	    <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bs-default-stylesheet" />
		<link href="assets/css/app.min.css" rel="stylesheet" type="text/css" id="app-default-stylesheet" />

		<link href="assets/css/bootstrap-dark.min.css" rel="stylesheet" type="text/css" id="bs-dark-stylesheet" />
		<link href="assets/css/app-dark.min.css" rel="stylesheet" type="text/css" id="app-dark-stylesheet" />
		<link href="assets/css/sweetalert2.min.css" rel="stylesheet" type="text/css" id="app-dark-stylesheet" />    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color:rgb(196, 196, 196);
        }
        
        .login-container {
            display: flex;
            width: 800px;
            height: 500px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .left-panel {
            width: 60%;
            background-image: url('assets/images/silver.jpg');
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            position: relative;
        }
        
        .welcome-text {
            display: none; /* Hide the text since we're using the logo image */
        }
        
        .right-panel {
            width: 55%;
            background-color: white;
            padding: 50px;
            display: flex;
            flex-direction: column;
        }
        
        h1 {
            font-size: 28px;
            margin-bottom: 10px;
            color: #333;
        }
        
        .subtitle {
            color: #888;
            margin-bottom: 30px;
            font-size: 14px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-size: 14px;
        }
        
        
        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        
        .remember-forgot {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            font-size: 14px;
        }
        
        .remember {
            display: flex;
            align-items: center;
        }
        
        .remember input {
            margin-right: 5px;
        }
        
        .forgot-password {
            color: #888;
            text-decoration: none;
            font-size: 12px;
        }
        
        .forgot-password:hover {
            text-decoration: underline;
        }
            
        .login-btn {
            background-color: rgb(63, 64, 65);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
            max-width: 250px;
            display: block;
            margin: 0 auto;
            text-align: center;
        }
        
        .login-btn:hover {
            background-color: rgb(0, 0, 0);
        }
        
        .signup-link {
            text-align: center;
            font-size: 14px;
            color: #555;
        }
        
        .signup-link a {
            color: rgb(28, 30, 28);
            text-decoration: none;
            font-weight: bold;
        }
        
        .signup-link a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="left-panel">
            <div class="welcome-text">Silver<br>Creation</div>
        </div>
        <div class="right-panel">
          
            <h1>Login</h1>
            <p class="subtitle">Welcome Regals! Please login to your account.</p>
            
             <form action="#" id="formAuthentication">

             
                <div class="form-group">
                    <label for="email">Email</label>
                    <input class="form-control" type="email" name="email"  id="username"  required>
                </div>
                
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password"  required>
                </div>
                
                <div class="remember-forgot">
                    <div class="remember">
                        <input type="checkbox" id="remember">
                        <label for="remember">Remember Me</label>
                    </div>
                    <a href="forgot.php" class="forgot-password">Forgot Password?</a>
                </div>
                
                <button type="submit" class="login-btn">Login</button>
                <br>
                <div class="signup-link">
                    New User? <a href="register.php">Signup</a>
                </div>
            </form>
        </div>
    </div>
	    <script src="assets/js/vendor.min.js"></script>
        <!-- App js -->
        <script src="assets/js/app.min.js"></script>
        <script src="assets/js/sweetalert2.all.min.js"></script>
        <script src="assets/js/auth.js"></script>
</body>
</html>