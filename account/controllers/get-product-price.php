 <?php
		include('../../controller/database.php'); 
		if (isset($_POST['request'])) {
		
			$id     = $_POST['id'];
				
			$result = $mysqli->query("SELECT product_price from v_products  where id = '$id'");
			
			 while($val = $result->fetch_object()){
				 
				 echo $val->product_price;
				 
			 }
			
		}