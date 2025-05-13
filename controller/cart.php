<?php
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

	require_once "../models/Cart.php";
	
	class Carts{
		
		private $cartModel;
		
		public function __construct()
		{
			$this -> cartModel = new Cart();
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
		
		public function add_cart(){
			
			$quantity   = $_POST['cart_quantity'];
			$size       = $_POST['size'];
			$product    = $_POST['product'];
			$customer   = $_POST['customer'];
			$transcode  = $_POST['code'];
			$date       = date('Y-m-d H:i:s');

			$result= $this -> cartModel -> addtoCart($quantity,$size,$product,$customer,$transcode,$date);
			
			if ($result){
				echo "<script>alert('Added to Cart Successfully')</script>";
				header("location: ../product-details?data=$product&success");
			}
			
		}
		
		public function checkout(){
			
		
			$transcode   = $_POST['transcode'];

			$result= $this -> cartModel -> checkoutCart($transcode);
			
			header("location: ../order?success");
			
		}

	}
	if (isset($_GET['add']) ){
		
		$cart= new Carts();
		$cart -> add_cart();
		
	}
	
	if (isset($_GET['checkout']) ){
		
		$cart= new Carts();
		$cart -> checkout();
		
	}
?>