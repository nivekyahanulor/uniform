<?php

		 if(isset($_POST['process'])){
				
				$register_at           = date('Y-m-d H:i:s',time());
				$product_name          =  $_POST['product_name'];
				$product_price         =  $_POST['product_price'];
				$product_description   =  $_POST['product_description'];
				$quantity              =  $_POST['quantity'];
				$category              =  $_POST['category'];
				$date_added            =  $register_at;
				
				
				$image      = addslashes(file_get_contents($_FILES['file']['tmp_name']));
				$image_name = addslashes($_FILES['file']['name']);
				$image_size = getimagesize($_FILES['file']['tmp_name']);
			
				
			
				move_uploaded_file($_FILES["file"]["tmp_name"], "../assets/products/" . $_FILES["file"]["name"]);
				$location   =  $_FILES["file"]["name"];

							
								
								
							$mysqli->query("INSERT INTO v_products 
								(
									product_name,
									product_price,
									product_description,
									quantity,
									location,
									category,
									date_added
								) 
								VALUES 
								(
									'$product_name',
									'$product_price',
									'$product_description',
									'$quantity',
									'$location',
									'$category',
									'$date_added'
								)
							");
							
					
							  echo '<script>
								  $(document).ready(function() {
										Swal.fire({
												title: "Success! ",
												text: "Product Details Added",
												icon: "success",
												type: "success"
												}).then(function(){
													window.location = "products";
												});
												});
								</script>';
				
				 
		 } 
		 
		 if(isset($_POST['update'])){
				
						$register_at           = date('Y-m-d H:i:s',time());
						$product_name          =  $_POST['product_name'];
						$product_price         =  $_POST['product_price'];
						$product_description   =  $_POST['product_description'];
						$id                    =  $_POST['id'];
					    $quantity              =  $_POST['quantity'];
						$letter                = $_POST['image1'];
						
						if ($letter == "") {
							$image = addslashes(file_get_contents($_FILES['image']['tmp_name']));
							$image_name = addslashes($_FILES['image']['name']);
							$image_size = getimagesize($_FILES['image']['tmp_name']);
							move_uploaded_file($_FILES["image"]["tmp_name"], "../assets/products/" . $_FILES["image"]["name"]);
							$location   =  $_FILES["image"]["name"];
						} else {
							if ($_FILES["image"]["name"] == "") {
								$location = $letter;
							} else {
								$image = addslashes(file_get_contents($_FILES['image']['tmp_name']));
								$image_name = addslashes($_FILES['image']['name']);
								$image_size = getimagesize($_FILES['image']['tmp_name']);
								move_uploaded_file($_FILES["image"]["tmp_name"], "../assets/products/" . $_FILES["image"]["name"]);
								$location   =  $_FILES["image"]["name"];
							}
						}
								
								
							$mysqli->query("UPDATE v_products 
							
								SET
									product_name = '$product_name',
									product_price = '$product_price',
									product_description = '$product_description',
									location = '$location',
									quantity = '$quantity'
									
								where
								
								id = '$id'
								
							");
							
					
							  echo '<script>
								  $(document).ready(function() {
										Swal.fire({
												title: "Success! ",
												text: "Product Details Updated",
												icon: "success",
												type: "success"
												}).then(function(){
													window.location = "products";
												});
												});
								</script>';
				
				 
		 }
		
		
		if (isset($_POST['delete'])) {

			
			$id     = $_POST['id'];

			
				$mysqli->query("DELETE FROM v_products where id = '$id'");

			  echo '<script>
								  $(document).ready(function() {
										Swal.fire({
												title: "Success! ",
												text: "Product Details Deleted",
												icon: "success",
												type: "success"
												}).then(function(){
													window.location = "products";
												});
												});
								</script>';
							

			
		}
		
		