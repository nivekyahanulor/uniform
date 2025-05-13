
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
                                    <h4 class="page-title">Transaction's Record</h4>
                                    <div>
                                       <button class="btn btn-primary btn-md" data-bs-toggle="modal" data-bs-target="#standard-modal" > Add  Location / Category  </button>
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
                                                    <th class="text-center">Category Name</th>
                                                    <th class="text-center">Date Added</th>
                                                    <th class="text-center">Action</th>
                                                </tr>
                                            </thead>
                                        
                                            <tbody>
											<?php
												 $is_users = $mysqli->query("SELECT * from v_transactions");
												 while($val = $is_users->fetch_object()){
											?>
                                                <tr>
                                                    <td class="text-center"><?= $val->category_name;?></td>
                                                    <td class="text-center"><?= $val->date_added;?></td>
                                                    <td class="text-center">
														<a href="view-transaction?data=<?= $val->id;?>&category=<?= $val->category_name;?>" type="button" class="btn btn-success btn-sm"> View Details </button></a>
													    <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#update<?= $val->id;?>"> Update </button>
													</td>
                                                </tr>
												
													 <div id="update<?= $val->id;?>" class="modal fade" tabindex="-1" role="dialog"
														aria-labelledby="standard-modalLabel" aria-hidden="true">
													<div class="modal-dialog">
													   <div class="modal-content">
															<div class="modal-header">
																<h4 class="modal-title" id="standard-modalLabel">Update</h4>
																  <button type="button" class="btn-close" data-bs-dismiss="modal"
																	aria-label="Close"></button>
															</div>
															<div class="modal-body">
															<form method="POST" enctype="multipart/form-data">
																<div class="mb-3">
																	<label for="simpleinput" class="form-label">Category Name</label>
																	<input type="text" class="form-control" name="category_name" value="<?= $val->category_name;?>">
																	<input type="hidden" class="form-control" name="id" value="<?= $val->id;?>">
																</div>
															  
															</div>
															<div class="modal-footer">
															<button type="button" class="btn btn-light"
																 data-bs-dismiss="modal">Close</button>
															<button type="submit" name="process-update" class="btn btn-primary">Save</button>
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
																<h4 class="modal-title" id="standard-modalLabel">Delete Data</h4>
																  <button type="button" class="btn-close" data-bs-dismiss="modal"
																	aria-label="Close"></button>
															</div>
															<div class="modal-body">
															<form method="POST" enctype="multipart/form-data">
															Are you sure to delete this data?
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
                                <h4 class="modal-title" id="standard-modalLabel">Transaction Details</h4>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
							<form method="POST" enctype="multipart/form-data">
								<div class="mb-3">
                                    <label for="simpleinput" class="form-label">Category Name</label>
                                    <input type="text" class="form-control" name="category_name">
                                </div>
							  
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-light"
                                 data-bs-dismiss="modal">Close</button>
                            <button type="submit" name="process" class="btn btn-primary">Save</button>
                             </div>
							</form>
                         </div><!-- /.modal-content -->
                   </div><!-- /.modal-dialog -->
                </div><!-- /.modal -->

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
               }, order: [[1, 'desc']]
            });
    });

	</script>
	