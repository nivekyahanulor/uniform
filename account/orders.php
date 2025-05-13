
<?php 
		include("include/header.php");
		include("include/sidebar.php");

?>

            <div class="content-page">
                <div class="content">

                    <!-- Start Content-->
                    <div class="container-fluid">
                        
                        <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <h4 class="page-title">Orders Record</h4>
                                   
                                </div>
                            </div>
                        </div>     
                        <!-- end page title -->  

                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                       

                                           <table id="datatable" class="table dt-responsive nowrap w-100">
                                            <thead>
                                                <tr>
                                                    <th class="text-center">Customer Name</th>
                                                    <th class="text-center">Contact Number</th>
                                                    <th class="text-center">Product</th>
                                                    <th class="text-center">Amount</th>
                                                    <th class="text-center">Quantity</th>
                                                    <th class="text-center">Total Amount</th>
                                                    <th class="text-center">Date</th>
                                                    <th class="text-center">Action</th>
                                                </tr>
                                            </thead>
                                        
                                            <tbody>
											<?php
												 $is_users  = $mysqli->query("SELECT a.* , b.fullname,b.mobile , c.product_name, c.product_price from v_cart a 
												 left join v_users b on a.customer_id = b.id 
												 left join v_products c on c.id = a.product_id 
												 where a.customer_id = b.id
												 ");
												 while($val = $is_users->fetch_object()){
											?>
                                                <tr>
                                                    <td class="text-center"><?= $val->fullname ;?></td>
                                                    <td class="text-center"><?= $val->mobile;?></td>
                                                    <td class="text-center"><?= $val->product_name;?></td>
                                                    <td class="text-center">₱ <?= number_format($val->product_price,2);?></td>
                                                    <td class="text-center"><?= $val->quantity;?></td>
                                                    <td class="text-center">₱ <?= number_format($val->product_price * $val->quantity,2);?></td>
                                                    <td class="text-center"><?= $val->date_added;?></td>
													<td class="text-center">
													<?php if($val->is_status == 1){ echo "Approved";} else { ?>
													<button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#approve<?= $val->id;?>"> Approve Order </button></td>
													<?php } ?>
												</tr>
												
												<div id="approve<?= $val->id;?>" class="modal fade" tabindex="-1" role="dialog"
														aria-labelledby="standard-modalLabel" aria-hidden="true">
													<div class="modal-dialog">
													   <div class="modal-content">
															<div class="modal-header">
																<h4 class="modal-title" id="standard-modalLabel">Approve Order</h4>
																  <button type="button" class="btn-close" data-bs-dismiss="modal"
																	aria-label="Close"></button>
															</div>
															<div class="modal-body">
															<form method="POST" enctype="multipart/form-data">
															Are you sure to approve this order ?
															   <input type="hidden"  name="id" value="<?= $val->id;?>"> 
															</div>
															<div class="modal-footer">
															<button type="button" class="btn btn-light"
																 data-bs-dismiss="modal">Close</button>
															<button type="submit" name="approved" class="btn btn-primary">Yes</button>
															 </div>
															</form>
														 </div><!-- /.modal-content -->
												   </div><!-- /.modal-dialog -->
												</div><!-- /.modal -->
										
												 <?php } ?>
                                   
                                            </tbody>
                                        </table>

                                    </div> <!-- end card body-->
                                </div> <!-- end card -->
                            </div><!-- end col-->
                        </div>
                        <!-- end row-->

                </div> <!-- content -->
				
				
              

    <?php 
		include("include/footer.php");
  		include("controllers/transactions.php");
	?>
	<script>
	 $(document).ready(function() {
            $('#datatable').DataTable({
                     language: {
                     paginate: {
                     previous: "<i class='mdi mdi-chevron-left'>",
                     next: "<i class='mdi mdi-chevron-right'>"
                     }
               },
               drawCallback: function() {
                     $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
               }
            });
    });

	</script>
	