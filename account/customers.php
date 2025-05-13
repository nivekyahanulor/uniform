
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
                                    <h4 class="page-title">Customer's Record</h4>
                                  
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
                                                    <th class="text-center">Name</th>
                                                    <th class="text-center">Contact Number</th>
                                                    <th class="text-center">Address</th>
                                                    <th class="text-center">Date Added</th>
                                                    <th class="text-center">Action</th>
                                                </tr>
                                            </thead>
                                        
                                            <tbody>
											<?php
											
												
												 $is_users = $mysqli->query("SELECT *  from v_users  where role='user' ");
												
												 while($val = $is_users->fetch_object()){
											?>
                                                <tr>
                                                    <td class="text-center"><b> <?= $val->fullname;?></b></td>
                                                    <td class="text-center"><?= $val->mobile;?></td>
                                                    <td class="text-center"><?= $val->address;?></td>
                                                    <td class="text-center"><?= $val->date_added;?></td>
                                                    <td class="text-center">
													<button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#update<?= $val->id;?>"> Update </button>
													<button class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#delete<?= $val->id;?>"> Delete </button>
													</td>
                                                </tr>
												
												 <div id="delete<?= $val->id;?>" class="modal fade" tabindex="-1" role="dialog"
														aria-labelledby="standard-modalLabel" aria-hidden="true">
													<div class="modal-dialog">
													   <div class="modal-content">
															<div class="modal-header">
																<h4 class="modal-title" id="standard-modalLabel">Delete Customer</h4>
																  <button type="button" class="btn-close" data-bs-dismiss="modal"
																	aria-label="Close"></button>
															</div>
															<div class="modal-body">
															<form method="POST" enctype="multipart/form-data">
															Are you sure to delete this customer?
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
												
												 <div id="update<?= $val->id;?>" class="modal fade" tabindex="-1" role="dialog"
														aria-labelledby="standard-modalLabel" aria-hidden="true">
													<div class="modal-dialog">
													   <div class="modal-content">
															<div class="modal-header">
																<h4 class="modal-title" id="standard-modalLabel">Update Customer</h4>
																  <button type="button" class="btn-close" data-bs-dismiss="modal"
																	aria-label="Close"></button>
															</div>
															<div class="modal-body">
															<form method="POST" enctype="multipart/form-data">
																<div class="mb-3">
																	<label for="simpleinput" class="form-label">Full Name</label>
																	<input type="text" class="form-control" name="fullname" value="<?= $val->fullname;?>" required> 
																</div>
															 
																<div class="mb-3">
																	<label for="simpleinput" class="form-label">Mobile Number</label>
																	<input type="text" class="form-control" name="mobile" value="<?= $val->mobile;?>" required>
																</div>
																<div class="mb-3">
																	<label for="simpleinput" class="form-label">Address</label>
																	<textarea type="text" class="form-control" name="address" required> <?= $val->address;?>"</textarea>
																</div>
																
															   <input type="hidden"  name="id" value="<?= $val->id;?>"> 
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
  		include("controllers/customers.php");
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
	