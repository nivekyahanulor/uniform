<?php
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

	require_once "../models/User.php";
	class Registration{
		private $userModel;
		public function __construct()
		{
			$this -> userModel = new User();
		}
		public function registration(){
			
			$name     = $_POST['name'];
			$contact  = $_POST['contact'];
			$email    = $_POST['email'];
			$address  = $_POST['address'];
			$password = htmlspecialchars(trim($_POST['password']));
			$hashpass = password_hash($password, PASSWORD_DEFAULT);
			$role     = 'user';
			$date     = date('Y-m-d H:i:s');

			$result= $this -> userModel -> insertUsers($name,$contact,$email,$address,$hashpass,$date,$role);
			
			if ($result){
				echo "<script>alert('registration successful')</script>";
				header("location: ../register.php?registered=success");
			}
			else{
				echo "<script>alert('registration failed')</script>";
				header("location: ../register.php?registered=failed");
			}
		}

	}
	if (isset($_GET['action']) && $_GET['action'] === 'register'){
		$auth= new Registration();
		$auth -> registration();
	}
?>