<?php
ob_start();
session_start();


	require_once "../models/User.php";
	
	class Authentication{
		
		private $userModel;
		
		public function __construct()
		{
			$this -> userModel = new User();
		}
		
		function transactionCode($length = 6) {
			$chars     = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
			$transcode = '';
			$maxIndex = strlen($chars) - 1;

			for ($i = 0; $i < $length; $i++) {
				$transcode .= $chars[random_int(0, $maxIndex)];
			}

			return $transcode;
		}
		
		public function login(){
			
			$username = $_POST['username'];
			$password = $_POST['password'];
			
			$result = $this -> userModel -> login($username);
			
			if ($result){

				if (password_verify($password, $result['password'])) {
					
					$_SESSION['name']      = $result['fullname'];
					$_SESSION['id']        = $result['id'];
					$_SESSION['email']     = $result['email'];
					$_SESSION['contact']   = $result['mobile'];
					$_SESSION['address']   = $result['address'];
					$_SESSION['transcode'] = $this->transactionCode(6);

					if ($result['role'] == 'admin') {
						ob_clean(); // Clear unexpected output

						echo "admin";
						
						exit;
					}

					else {
						ob_clean(); // Clear unexpected output
						
						  $code = $_SESSION['transcode'];
						  $id   = $_SESSION['id'];
						  
						  $result = $this -> userModel -> updateCustomerCode($id, $code);
						
						echo "customer";
						exit;
						
					}
				}
				else {
					echo "error"; // Invalid username or password
				}
			}
			else {
				echo "error"; // Invalid username or password
			}

		}

	}
	
	if ($_POST['login'] === 'Login'){
		$auth= new Authentication();
		$auth -> login();
	}
?>