<?php


	function generateInstallmentSchedule($startDate, $months = 6) {
		$schedule = [];
		$start = new DateTime($startDate);
		$day = (int)$start->format('j');

		// Decide the first payment date
		if ($day >= 1 && $day <= 15) {
			// First payment on 30th of current month (or next if month has < 30 days)
			$first = clone $start;
			$daysInMonth = (int)$first->format('t');

			if ($daysInMonth >= 30) {
				$first->setDate($first->format('Y'), $first->format('m'), 30);
			} else {
				$first->modify('first day of next month')->setDate($first->format('Y'), $first->format('m'), 30);
			}
		} else {
			// First payment on 15th of next month
			$first = clone $start;
			$first->modify('first day of next month')->setDate($first->format('Y'), $first->format('m'), 15);
		}

		// Add first payment
		$schedule[] = $first->format('Y-m-d');

		$current = clone $first;

		// Alternate between 15 and 30 for the rest
		for ($i = 1; $i < $months; $i++) {
			$next = clone $current;
			$day = (int)$current->format('j');

			// Set next payment date
			if ($day == 15) {
				// Move to 30th of same month (if valid), or next month
				$daysInMonth = (int)$next->format('t');
				if ($daysInMonth >= 30) {
					$next->setDate($next->format('Y'), $next->format('m'), 30);
				} else {
					$next->modify('first day of next month')->setDate($next->format('Y'), $next->format('m'), 30);
				}
			} else {
				// Move to 15th of next month
				$next->modify('first day of next month')->setDate($next->format('Y'), $next->format('m'), 15);
			}

			$schedule[] = $next->format('Y-m-d');
			$current = $next;
		}

		return $schedule;
	}
	
	function generateInstallmentSchedule_1($startDate, $months = 6) {
		$schedule = [];
		$start = new DateTime($startDate);
		$day = (int)$start->format('j');

		// Determine first payment date
		if ($day >= 1 && $day <= 10) {
			// First payment on 25th of current month
			$first = clone $start;
			$first->setDate($first->format('Y'), $first->format('m'), 25);
		} else {
			// First payment on 10th of next month
			$first = clone $start;
			$first->modify('first day of next month')->setDate($first->format('Y'), $first->format('m'), 10);
		}

		$schedule[] = $first->format('Y-m-d');
		$current = clone $first;

		// Alternate between 10 and 25
		for ($i = 1; $i < $months; $i++) {
			$next = clone $current;
			$day = (int)$current->format('j');

			if ($day == 10) {
				// Move to 25th of same month
				$next->setDate($next->format('Y'), $next->format('m'), 25);
			} else {
				// Move to 10th of next month
				$next->modify('first day of next month')->setDate($next->format('Y'), $next->format('m'), 10);
			}

			$schedule[] = $next->format('Y-m-d');
			$current = $next;
		}

    return $schedule;
	}
	
	function generateInstallmentSchedule_2($startDate, $months = 6) {
		$schedule = [];
		$start = new DateTime($startDate);
		$day = (int)$start->format('j');

		// Decide first payment date based on start day
		if ($day <= 5) {
			$first = (clone $start)->setDate($start->format('Y'), $start->format('m'), 5);
		} elseif ($day <= 20) {
			$first = (clone $start)->setDate($start->format('Y'), $start->format('m'), 20);
		} else {
			$first = (clone $start)->modify('first day of next month')->setDate($start->format('Y'), $start->format('m') + 1, 5);
		}

		$schedule[] = $first->format('Y-m-d');
		$current = clone $first;

		// Alternate between 5th and 20th
		for ($i = 1; $i < $months; $i++) {
			$next = clone $current;
			$day = (int)$current->format('j');

			if ($day == 5) {
				// Move to 20th of same month
				$next->setDate($next->format('Y'), $next->format('m'), 20);
			} else {
				// Move to 5th of next month
				$next->modify('first day of next month')->setDate($next->format('Y'), $next->format('m'), 5);
			}

			$schedule[] = $next->format('Y-m-d');
			$current = $next;
		}

		return $schedule;
	}






		 if(isset($_POST['process'])){
				
				
				$startDate         = $_POST['transaction_date'];
				
				$register_at       =  date('Y-m-d H:i:s',time());
				$today             =  $_POST['transaction_date'];
				$customer_id       =  $_POST['customer_id'];
				$product_id        =  json_encode($_POST['product_id']);
				$quantity          =  json_encode($_POST['quantity']);
				$downpayment       =  $_POST['downpayment'];
				$payment_type      =  $_POST['payment_type'];
				$payment_terms     =  $_POST['payment_terms'];
				$days              =  $_POST['days'];
				$weeks             =  $_POST['weeks'];
				$months            =  $_POST['months'];
				$total_pay         =  $_POST['total_pay'];
				$product_amount    =  $_POST['product_amount'];
				$data              =  $_POST['data'];
				$category          =  $_POST['category'];
				$discount          =  $_POST['discount'];
				$date_added        =  $register_at;
				$transcode         = "VICTORIAS - " . strtoupper(uniqid()); // Generate a unique transaction code
				
				if($payment_type == 'Cash'){
					
				$amount            =  $_POST['amount_cash'];
				
				foreach(json_decode($product_id, true) as $pid){
				
						$mysqli->query("UPDATE v_products 
							
								SET
									out_qty = out_qty + 1,
									quantity = quantity - 1

								where
								
								id = '$pid'
								
							");
							
				}
				
				
				
				
				
				 $mysqli->query("INSERT INTO v_transaction_customer 
								(
									customer_id,
									transcode,
									product_id,
									quantity,
									data_id,
									payment_type,
									payment_amount,
									total_pay,
									product_amount,
									discount,
									date_added,
									start_date
								) 
								VALUES 
								(
									'$customer_id',
									'$transcode',
									'$product_id',
									'$quantity',
									'$data',
									'$payment_type',
									'$amount',
									'$amount',
									'$product_amount',
									'$discount',
									'$date_added',
									'$startDate'
								)
				");
					
				} else {
					
					
			   foreach(json_decode($product_id, true) as $pid){
				
						$mysqli->query("UPDATE v_products 
							
								SET
									out_qty = out_qty + 1,
									quantity = quantity - 1

								where
								
								id = '$pid'
								
							");
							
				}
					
				$amount            =  $_POST['amount_installment'];

					
				
				
				
				$date = strtotime($_POST['transaction_date']);
				
				if($payment_terms == 'Daily'){
					$payment_counts = $_POST['days'];
				}
				if($payment_terms == 'Weekly'){
					$payment_counts = $_POST['weeks'];
				}
				if($payment_terms == 'Monthly'){
					$payment_counts = $_POST['months'];
				}
				if($payment_terms == '15/30'){
					$payment_counts = $_POST['months'];
				}
				if($payment_terms == '10/25'){
					$payment_counts = $_POST['months'];
				}
				if($payment_terms == '5/20'){
					$payment_counts = $_POST['months'];
				}
				
				 
				 $mysqli->query("INSERT INTO v_transaction_customer 
								(
									customer_id,
									transcode,
									product_id,
									data_id,
									downpayment,
									payment_terms,
									payment_type,
									payment_counts,
									payment_amount,
									total_pay,
									product_amount,
									discount,
									date_added,
									start_date
								) 
								VALUES 
								(
									'$customer_id',
									'$transcode',
									'$product_id',
									'$data',
									'$downpayment',
									'$payment_terms',
									'$payment_type',
									'$payment_counts',
									'$amount',
									'$downpayment',
									'$product_amount',
									'$discount',
									'$date_added',
									'$startDate'
								)
				");
				
				
				 $transaction_id = $mysqli->insert_id;
				
				
				
				if($payment_terms == 'Daily'){
					
					for ($x = 0; $x <= $days; $x++) {
						
					  if($x == 0){
						  
						  $mysqli->query("INSERT INTO v_transaction_records 
								(
									customer_id,
									transcode,
									transaction_id,
									product_id,
									payment_amount,
									date_of_payment,
									status,
									is_paid,
									date_added
								) 
								VALUES 
								(
									'$customer_id',
									'$transcode',
									'$transaction_id',
									'$product_id',
									'$downpayment',
									'$today',
									'Downpayment',
									'1',
									'$date_added'
								)
							");
							
							
					  } else {
						  
						$date = strtotime("+1 day", $date);
						$payment_date =  date('Y/m/d', $date);
						
						 $mysqli->query("INSERT INTO v_transaction_records 
								(
									customer_id,
									transcode,
									transaction_id,
									product_id,
									payment_amount,
									date_of_payment,
									status,
									date_added
								) 
								VALUES 
								(
									'$customer_id',
									'$transcode',
									'$transaction_id',
									'$product_id',
									'',
									'$payment_date',
									'',
									'$date_added'
								)
							");
						
					  }
					  
					  
					}
					
				}
				
				if($payment_terms == 'Weekly'){
					
					for ($x = 0; $x <= $weeks; $x++) {
						
					  if($x == 0){
						  
						  
						  $mysqli->query("INSERT INTO v_transaction_records 
								(
									customer_id,
									transcode,
									transaction_id,
									product_id,
									payment_amount,
									date_of_payment,
									status,
									is_paid,
									date_added
								) 
								VALUES 
								(
									'$customer_id',
									'$transcode',
									'$transaction_id',
									'$product_id',
									'$downpayment',
									'$today',
									'Downpayment',
									'1',
									'$date_added'
								)
							");
							
							
					  } else {
						  
						$date = strtotime("+7 day", $date);
						$payment_date =  date('Y/m/d', $date);
						
						 $mysqli->query("INSERT INTO v_transaction_records 
								(
									customer_id,
									transcode,
									transaction_id,
									product_id,
									payment_amount,
									date_of_payment,
									status,
									date_added
								) 
								VALUES 
								(
									'$customer_id',
									'$transcode',
									'$transaction_id',
									'$product_id',
									'',
									'$payment_date',
									'',
									'$date_added'
								)
							");
						
					  }
					  
					  
					}
					
				}
				
				if($payment_terms == 'Monthly'){
					
					for ($x = 0; $x <= $months; $x++) {
						
					  if($x == 0){
						  
						   
						  $mysqli->query("INSERT INTO v_transaction_records 
								(
									customer_id,
									transcode,
									transaction_id,
									product_id,
									payment_amount,
									date_of_payment,
									status,
									is_paid,
									date_added
								) 
								VALUES 
								(
									'$customer_id',
									'$transcode',
									'$transaction_id',
									'$product_id',
									'$downpayment',
									'$today',
									'Downpayment',
									'1',
									'$date_added'
								)
							");
							
							
					  } else {
						  
						$date = strtotime("+1 month", $date);
						$payment_date =  date('Y/m/d', $date);
						
						 $mysqli->query("INSERT INTO v_transaction_records 
								(
									customer_id,
									transcode,
									transaction_id,
									product_id,
									payment_amount,
									date_of_payment,
									status,
									date_added
								) 
								VALUES 
								(
									'$customer_id',
									'$transcode',
									'$transaction_id',
									'$product_id',
									'',
									'$payment_date',
									'',
									'$date_added'
								)
							");
						
					  }
					  
					  
					}
					
				}
				
				if($payment_terms == '15/30'){
					
					// Example usage
					$counts    = $payment_counts * 2;
					$schedule  = generateInstallmentSchedule($startDate, $counts);

					// Output schedule
					
					  $mysqli->query("INSERT INTO v_transaction_records 
								(
									customer_id,
									transcode,
									transaction_id,
									product_id,
									payment_amount,
									date_of_payment,
									status,
									is_paid,
									date_added
								) 
								VALUES 
								(
									'$customer_id',
									'$transcode',
									'$transaction_id',
									'$product_id',
									'$downpayment',
									'$today',
									'Downpayment',
									'1',
									'$date_added'
								)
					");
							
							
					foreach ($schedule as $date) {
						 $mysqli->query("INSERT INTO v_transaction_records 
								(
									customer_id,
									transcode,
									transaction_id,
									product_id,
									payment_amount,
									date_of_payment,
									status,
									date_added
								) 
								VALUES 
								(
									'$customer_id',
									'$transcode',
									'$transaction_id',
									'$product_id',
									'',
									'$date',
									'',
									'$date_added'
								)
							");
					}
					
					
					
				}
				
				if($payment_terms == '10/25'){
					
					// Example usage
					$counts    = $payment_counts * 2;
					$schedule  = generateInstallmentSchedule_1($startDate, $counts);

					// Output schedule
					
					  $mysqli->query("INSERT INTO v_transaction_records 
								(
									customer_id,
									transcode,
									transaction_id,
									product_id,
									payment_amount,
									date_of_payment,
									status,
									is_paid,
									date_added
								) 
								VALUES 
								(
									'$customer_id',
									'$transcode',
									'$transaction_id',
									'$product_id',
									'$downpayment',
									'$today',
									'Downpayment',
									'1',
									'$date_added'
								)
					");
							
							
					foreach ($schedule as $date) {
						 $mysqli->query("INSERT INTO v_transaction_records 
								(
									customer_id,
									transcode,
									transaction_id,
									product_id,
									payment_amount,
									date_of_payment,
									status,
									date_added
								) 
								VALUES 
								(
									'$customer_id',
									'$transcode',
									'$transaction_id',
									'$product_id',
									'',
									'$date',
									'',
									'$date_added'
								)
							");
					}
					
					
					
				}
				
				if($payment_terms == '5/20'){
					
					// Example usage
					$counts    = $payment_counts * 2;
					$schedule  = generateInstallmentSchedule_2($startDate, $counts);

					// Output schedule
					
					  $mysqli->query("INSERT INTO v_transaction_records 
								(
									customer_id,
									transcode,
									transaction_id,
									product_id,
									payment_amount,
									date_of_payment,
									status,
									is_paid,
									date_added
								) 
								VALUES 
								(
									'$customer_id',
									'$transcode',
									'$transaction_id',
									'$product_id',
									'$downpayment',
									'$today',
									'Downpayment',
									'1',
									'$date_added'
								)
					");
							
							
					foreach ($schedule as $date) {
						 $mysqli->query("INSERT INTO v_transaction_records 
								(
									customer_id,
									transcode,
									transaction_id,
									product_id,
									payment_amount,
									date_of_payment,
									status,
									date_added
								) 
								VALUES 
								(
									'$customer_id',
									'$transcode',
									'$transaction_id',
									'$product_id',
									'',
									'$date',
									'',
									'$date_added'
								)
							");
					}
					
					
					
				}
				
				
				
				}
				
								
						
					
							  echo '<script>
								  $(document).ready(function() {
										Swal.fire({
												title: "Success! ",
												text: "Transaction Records Added!",
												icon: "success",
												type: "success"
												}).then(function(){
													window.location = "pos";
												});
												});
								</script>';
				
				 
		 }
		
		
		if (isset($_POST['delete'])) {

			
			$id     = $_POST['id'];

			
				$mysqli->query("DELETE FROM v_transaction_customer where id = '$id'");

			  echo '<script>
								  $(document).ready(function() {
										Swal.fire({
												title: "Success! ",
												text: "Transaction Data Deleted",
												icon: "success",
												type: "success"
												}).then(function(){
													window.location = "pos";
												});
												});
								</script>';
							

			
		}
		
		if (isset($_POST['update'])) {

			
			$id         = $_POST['id'];
			$amount     = $_POST['amount'];
			$status     = $_POST['status'];
			$data       = $_POST['data'];
			$customer   = $_POST['customer'];
			$is_paid    = $_POST['is_paid'];

			
			$mysqli->query("UPDATE v_transaction_records set payment_amount ='$amount' , status = '$status' , is_paid = 1 where id = '$id'");
			$mysqli->query("UPDATE v_transaction_customer set total_pay =total_pay +'$amount'  where id = '$data'");

			echo '<script>
								  $(document).ready(function() {
										Swal.fire({
												title: "Success! ",
												text: "Payment Success",
												icon: "success",
												type: "success"
												}).then(function(){
													window.location = "records?data=',$data.'&customer='.$customer.'";
												});
												});
								</script>';
							

			
		}
		
		if (isset($_POST['update1'])) {

			
			$id         = $_POST['id'];
			$amount     = $_POST['amount'];
			$status     = $_POST['status'];
			$data       = $_POST['data'];
			$customer   = $_POST['customer'];
			$is_paid    = $_POST['is_paid'];
			$trans_id   = $_POST['transaction_id'];
			
			$paid       = 0;
			
			$mysqli->query("UPDATE v_transaction_records set payment_amount ='$amount' , status = '$status' , is_paid = 1 where id = '$id'");
			
			 $is_users  = $mysqli->query("SELECT * from v_transaction_records where transaction_id='$trans_id'");
			 while($val = $is_users->fetch_object()){
				 
				 $paid += $val->payment_amount;
				 
				 
			 }
			
			$mysqli->query("UPDATE v_transaction_customer set total_pay ='$paid'  where id = '$data'");

			echo '<script>
								  $(document).ready(function() {
										Swal.fire({
												title: "Success! ",
												text: "Payment Success",
												icon: "success",
												type: "success"
												}).then(function(){
													window.location = "records?data=',$data.'&customer='.$customer.'";
												});
												});
								</script>';
							

			
		}
		
		 if(isset($_POST['process-customer'])){
				
				$register_at         = date('Y-m-d H:i:s',time());
				$firstname           =  $_POST['firstname'];
				$lastname            =  $_POST['lastname'];
				$mobile              =  $_POST['mobile'];
				$location            =  $_POST['location'];
				$facebook            =  $_POST['facebook'];
				$date_added          =  $register_at;
							
								
								
							$mysqli->query("INSERT INTO v_customers 
								(
									firstname,
									lastname,
									mobile,
									location,
									facebook,
									date_added
								) 
								VALUES 
								(
									'$firstname',
									'$lastname',
									'$mobile',
									'$location',
									'$facebook',
									'$date_added'
								)
							");
							
					
							  echo '<script>
								  $(document).ready(function() {
										Swal.fire({
												title: "Success! ",
												text: "Customer Details Added",
												icon: "success",
												type: "success"
												}).then(function(){
													window.location = "pos";
												});
												});
								</script>';
				
				 
		 }
		