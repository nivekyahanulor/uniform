<?php

		
		 if(isset($_POST['update'])){
				
				$register_at         = date('Y-m-d H:i:s',time());
				$firstname           =  $_POST['fullname'];
				$mobile              =  $_POST['mobile'];
				$id                  =  $_POST['id'];
				$address             =  $_POST['address'];
							
								
								
							$mysqli->query("UPDATE  v_users  SET
								
									fullname = '$firstname',
									mobile = '$mobile',
									address = '$address'
									where id = '$id'
								
							");
							
					
							  echo '<script>
								  $(document).ready(function() {
										Swal.fire({
												title: "Success! ",
												text: "Customer Details Updated",
												icon: "success",
												type: "success"
												}).then(function(){
													window.location = "customers";
												});
												});
								</script>';
				
				 
		 }
		
		
		if (isset($_POST['delete'])) {

			
			$id     = $_POST['id'];

			
				$mysqli->query("DELETE FROM v_users where id = '$id'");

			  echo '<script>
								  $(document).ready(function() {
										Swal.fire({
												title: "Success! ",
												text: "Customer Details Deleted",
												icon: "success",
												type: "success"
												}).then(function(){
													window.location = "customers";
												});
												});
								</script>';
							

			
		}
		
		
		