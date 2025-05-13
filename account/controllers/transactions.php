<?php

		
	
		
		if (isset($_POST['approved'])) {

			
			$id            = $_POST['id'];
			
				$mysqli->query("UPDATE  v_cart SET is_status='1' where id = '$id'");

			  echo '<script>
								  $(document).ready(function() {
										Swal.fire({
												title: "Success! ",
												text: "Order Approved!",
												icon: "success",
												type: "success"
												}).then(function(){
													window.location = "orders";
												});
												});
								</script>';
							

			
		}
		
		