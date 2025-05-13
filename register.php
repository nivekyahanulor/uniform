<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        .match { color: green; }
        .mismatch { color: red; }
    </style>
    <br>
    <title>Login Form</title>
    <style>
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
            background-color: rgb(152, 152, 152);
        }
        
        .login-container {
            display: flex;
            width: 800px;
            height: auto;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .left-panel {
            width: 45%;
            background: linear-gradient(135deg,rgb(167, 164, 164) 0%,rgb(78, 76, 76) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            position: relative;
            overflow: hidden;
        }
        
        
        .left-panel::before {
            content: "";
            position: absolute;
            width: 150%;
            height: 150%;
            background: linear-gradient(135deg, rgba(31, 32, 31, 0.8) 0%, rgb(57, 57, 57) 100%);
            border-radius: 50%;
            top: 30%;
            left: -50%;
            z-index: 0;
        }
        
        .welcome-text {
            color: white;
            font-size: 3rem;
            font-weight: bold;
            position: relative;
            z-index: 1;
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
        
        input[type="text"],
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
            display: block;
            background-color: rgb(63, 64, 65);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
            margin-bottom: 20px;
            text-align: center;
            text-decoration: none;
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
        
        /* New styles for side-by-side layout */
        .form-row {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }
        
        .form-column {
            flex: 1;
        }
        
        .form-column h4 {
            margin-bottom: 10px;
        }
    </style>
</head>

<body>
    <div class="login-container">
        <div class="left-panel">
            <div class="welcome-text">Silver<br>Creation</div>
        </div>
        <div class="right-panel">
            <?php if (isset($_GET['registered']) && $_GET['registered'] == "success") {
                echo "<h4 class='text-success'> <b> Registration Success! </b></h4>";
                } else if (isset($_GET['registered']) && $_GET['registered'] == "failed"){ 
                    echo "<h4 class='text-danger'> <b> Registeration failed! </b></h4>";
                }
            ?>

            <h1>Register</h1>
            <p class="subtitle">Welcome Regals! Please register to your account.</p>
            
            <form action="controller/Registration.php?action=register" method="POST">
                <div class="form-row">
                    <!-- Personal Information Column -->
                    <div class="form-column">
                        <h4>Personal Information</h4>
                        <hr>
                        <div class="form-group">
                            <label for="username">Full Name</label>
                            <input type="text" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="username">Contact Number</label>
                            <input type="text" name="contact" required>
                        </div>
                        <div class="form-group">
                            <label for="username">Address</label>
                            <input type="text" name="address" required>
                        </div>
                    </div>
                    
                    <!-- Account Information Column -->
                    <div class="form-column">
                        <h4>Account Information</h4>
                        <hr>
                        <input type="hidden" name="role" value="user">
                        <div class="form-group">
                            <label for="username">Email Address</label>
                            <input type="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Confirm Password</label>
                            <input type="password" id="confirm_password" placeholder="" required>
                        </div>
                        <span id="message"></span>
                    </div>
                </div>
                
                <button type="submit" class="login-btn">Register</button>
                
                <div class="signup-link">
                    Already have an account?<a href="login.php"> Login</a>
                </div>
            </form>
        </div>
    </div>
</body>
<br>
<script>
    $(document).ready(function () {
        $('#password, #confirm_password').on('keyup', function () {
            let password = $('#password').val();
            let confirm = $('#confirm_password').val();

            if (password === confirm && password.length > 0) {
                $('#message').text('Passwords match').removeClass('mismatch').addClass('match');
                $(".login-btn").prop('disabled', false);
            } else {
                $('#message').text('Passwords do not match').removeClass('match').addClass('mismatch');
                $(".login-btn").prop('disabled', true);
            }
        });
    });
</script><br>
</html>