<?php 
		include("include/header.php");
		include("include/sidebar.php");
		

		$customers    = $mysqli->query("SELECT * from v_customers");
		$transactions = $mysqli->query("SELECT * from v_cart ");
		$products     = $mysqli->query("SELECT * from v_products ");
		
		$total_sales   = 0;
		$total_paid    = 0;
		$total_unpaid  = 0;

		$sales         = $mysqli->query("SELECT  sum(c.product_price * a.quantity) sales from v_cart a 
												 left join v_products c on c.id = a.product_id 
												
												 ");
		while($s_val = $sales->fetch_object()){
				 
			$total_sales +=  $s_val->sales;
				 
		}
	

?>

            <div class="content-page">
                <div class="content">

                    <!-- Start Content-->
                    <div class="container-fluid">
                        
                        <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <h4 class="page-title">Dashboard</h4>
                                    
                                </div>
                            </div>
                        </div>     
                        <!-- end page title --> 
						<h4> WELCOME TO KLD ONLINE SHOP</h4>
						<hr>
                        <div class="row">
                            <div class="col-md-6 col-xl-3">
                                <div class="widget-rounded-circle card bg-gray shadow-none">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="avatar-lg rounded-circle bg-soft-light">
                                                    <i class=" font-28 avatar-title text-white">₱</i>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="text-end">
                                                    <h2 class="text-white mt-2"><span data-plugin="counterup"><?=  number_format($total_sales,2); ?></span></h2>
                                                    <p class="text-white mb-0 text-truncate">SALES</p>
                                                </div>
                                            </div>
                                        </div> <!-- end row-->
                                    </div>
                                </div> <!-- end widget-rounded-circle-->
                            </div> <!-- end col-->

                          
                            <div class="col-md-6 col-xl-3">
                                <div class="widget-rounded-circle card bg-gray shadow-none">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="avatar-lg rounded-circle bg-soft-light">
                                                    <i class="fe-users font-28 avatar-title text-white"></i>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="text-end">
                                                    <h2 class="text-white mt-2"><span data-plugin="counterup"></span></h2>
                                                    <p class="text-white mb-0 text-truncate">TOTAL CUSTOMERS</p>
                                                </div>
                                            </div>
                                        </div> <!-- end row-->
                                    </div>
                                </div> <!-- end widget-rounded-circle-->
                            </div> <!-- end col-->
                            <div class="col-md-6 col-xl-3">
                                <div class="widget-rounded-circle card bg-gray shadow-none">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="avatar-lg rounded-circle bg-soft-light">
                                                    <i class="fe-box font-28 avatar-title text-white"></i>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="text-end">
                                                    <h2 class="text-white mt-2"><span data-plugin="counterup"><?=  $products->num_rows; ?></span></h2>
                                                    <p class="text-white mb-0 text-truncate">TOTAL PRODUCTS</p>
                                                </div>
                                            </div>
                                        </div> <!-- end row-->
                                    </div>
                                </div> <!-- end widget-rounded-circle-->
                            </div> <!-- end col-->	
                            <div class="col-md-6 col-xl-3">
                                <div class="widget-rounded-circle card bg-gray shadow-none">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="avatar-lg rounded-circle bg-soft-light">
                                                    <i class="fe-clipboard font-28 avatar-title text-white"></i>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="text-end">
                                                    <h2 class="text-white mt-2"><span data-plugin="counterup"><?=  $transactions->num_rows; ?></span></h2>
                                                    <p class="text-white mb-0 text-truncate">TOTAL ORDERS</p>
                                                </div>
                                            </div>
                                        </div> <!-- end row-->
                                    </div>
                                </div> <!-- end widget-rounded-circle-->
                            </div> <!-- end col-->
                        </div>
                        <!-- end row-->

                     
                        <!-- end row -->
						
                    </div> <!-- container -->

                </div> <!-- content -->

  
  <?php include("include/footer.php");?>