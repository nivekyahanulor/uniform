
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
                                    <h4 class="page-title">Products's Record</h4>
                                    <div>
                                       <button class="btn btn-primary btn-md" data-bs-toggle="modal" data-bs-target="#standard-modal" > Add New Product </button>
                                    </div>
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
                                                    <th class="text-center"></th>
                                                    <th class="text-center">Product Name</th>
                                                    <th class="text-center">Product Price</th>
                                                    <th class="text-center">Product Quantity</th>
                                                    <th class="text-center">Out Quantity</th>
                                                    <th class="text-center">Product Description</th>
                                                    <th class="text-center">Date Added</th>
                                                    <th class="text-center">Action</th>
                                                </tr>
                                            </thead>
                                        
                                            <tbody>
											<?php
											
												
												 $is_users = $mysqli->query("SELECT * from v_products");
												
												 while($val = $is_users->fetch_object()){
											?>
                                                <tr>
                                                    <td class="text-center"><img src="../assets/products/<?= $val->location;?>" width="150px"></td>
                                                    <td class="text-center"><?= $val->product_name;?></td>
                                                    <td class="text-center"><?= $val->product_price;?></td>
                                                    <td class="text-center"><?php if( $val->quantity == 0){ echo '<span class="badge bg-soft-danger text-danger">OUT OF STOCK</span>'; } else { echo $val->quantity;}?></td>
                                                    <td class="text-center"><?= $val->out_qty;?></td>
                                                    <td class="text-center"><?= $val->product_description;?></td>
                                                    <td class="text-center"><?= $val->date_added;?></td>
                                                    <td class="text-center">
													<button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#update<?= $val->id;?>"> Update </button>
													<button class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#delete<?= $val->id;?>"> Delete </button>
													</td>
                                                </tr>
												
												 <div id="update<?= $val->id;?>" class="modal fade" tabindex="-1" role="dialog"
														aria-labelledby="standard-modalLabel" aria-hidden="true">
													<div class="modal-dialog">
													   <div class="modal-content">
															<div class="modal-header">
																<h4 class="modal-title" id="standard-modalLabel">Product Update </h4>
																  <button type="button" class="btn-close" data-bs-dismiss="modal"
																	aria-label="Close"></button>
															</div>
															<div class="modal-body">
															<form method="POST" enctype="multipart/form-data">
																<div class="mb-3">
																	<label for="simpleinput" class="form-label">Product Name</label>
																	<input type="text" class="form-control" name="product_name" value="<?php echo $val->product_name;?>">
																</div>
															   <div class="mb-3">
																	<label for="simpleinput" class="form-label">Product Price</label>
																	<input type="text" class="form-control" name="product_price" value="<?php echo $val->product_price;?>">
																</div>
																 <div class="mb-3">
																	<label for="simpleinput" class="form-label">Product Quantity</label>
																	<input type="text" class="form-control numberInput" name="quantity" value="<?php echo $val->quantity;?>" required>
																</div>
																<div class="mb-3">
																	<label for="simpleinput" class="form-label">Product Description</label>
																	<textarea type="text" class="form-control" name="product_description"><?php echo $val->product_description;?></textarea>
																</div>
																<div class="mb-3">
																	<label for="simpleinput" class="form-label">Product Image</label>
																	<input type="file" class="form-control" name="image" >
																</div>
															   <input type="hidden"  name="id" value="<?= $val->id;?>"> 
															   <input type="hidden"  name="image1" value="<?= $val->location;?>"> 
															</div>
															<div class="modal-footer">
															<button type="button" class="btn btn-light"
																 data-bs-dismiss="modal">Close</button>
															<button type="submit" name="update" class="btn btn-primary">Update</button>
															 </div>
															</form>
														 </div><!-- /.modal-content -->
												   </div><!-- /.modal-dialog -->
												</div><!-- /.modal -->	

												<div id="delete<?= $val->id;?>" class="modal fade" tabindex="-1" role="dialog"
														aria-labelledby="standard-modalLabel" aria-hidden="true">
													<div class="modal-dialog">
													   <div class="modal-content">
															<div class="modal-header">
																<h4 class="modal-title" id="standard-modalLabel">Delete Product</h4>
																  <button type="button" class="btn-close" data-bs-dismiss="modal"
																	aria-label="Close"></button>
															</div>
															<div class="modal-body">
															<form method="POST" enctype="multipart/form-data">
															Are you sure to delete this product?
															   <input type="hidden"  name="id" value="<?= $val->id;?>"> 
															</div>
															<div class="modal-footer">
															<button type="button" class="btn btn-light"
																 data-bs-dismiss="modal">Close</button>
															<button type="submit" name="delete" class="btn btn-primary">Delete</button>
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
				
				
                <div id="standard-modal" class="modal fade" tabindex="-1" role="dialog"
                                        aria-labelledby="standard-modalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                       <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="standard-modalLabel">Product Detail</h4>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
							<form method="POST" enctype="multipart/form-data">
								<div class="mb-3">
                                    <label for="simpleinput" class="form-label">Product Name</label>
                                    <input type="text" class="form-control" name="product_name" required>
                                </div>
							    <div class="mb-3">
                                    <label for="simpleinput" class="form-label">Product Price</label>
                                    <input type="text" class="form-control" name="product_price" required>
                                </div>
								 <div class="mb-3">
                                    <label for="simpleinput" class="form-label">Product Quantity</label>
                                    <input type="text" class="form-control" id="numberInput" name="quantity" required>
                                </div>
								<div class="mb-3">
                                    <label for="simpleinput" class="form-label">Product Description</label>
                                    <textarea type="text" class="form-control" name="product_description" required></textarea>
                                </div>
								 <div class="mb-3">
                                    <label for="simpleinput" class="form-label">Product Category</label>
                                    <select  class="form-control" name="category" required>
										<option value=""> - Select Category - </option>
										<option value="Universal Uniform"> Universal Uniform </option>
										<option value="White Uniform"> White Uniform </option>
										<option value="PE Uniform"> PE Uniform </option>
									</select>
                                </div>
								<div class="mb-3">
                                    <label for="simpleinput" class="form-label">Product Image</label>
                                    <input type="file" class="form-control" name="file" required>
                                </div>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-light"
                                 data-bs-dismiss="modal">Close</button>
                            <button type="submit" name="process" class="btn btn-primary">Process</button>
                             </div>
							</form>
                         </div><!-- /.modal-content -->
                   </div><!-- /.modal-dialog -->
                </div><!-- /.modal -->

    <?php 
		include("include/footer.php");
  		include("controllers/products.php");
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
               }, order: [[4, 'desc']]
            });
    });

	</script>
	
	<script>
	  $(document).ready(function() {
		$('#numberInput').on('input', function() {
		  // Remove non-numeric characters
		  this.value = this.value.replace(/[^0-9]/g, '');
		});
	  });
	</script>
	
	<script>
	  $(document).ready(function() {
		$('.numberInput').on('input', function() {
		  // Remove non-numeric characters
		  this.value = this.value.replace(/[^0-9]/g, '');
		});
	  });
	</script>