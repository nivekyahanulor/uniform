<?php include("includes/header.php"); error_reporting(0);?>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout Form</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <div class="min-h-screen py-8 px-4 md:px-8">
        <div class="max-w-7xl mx-auto">
            <form class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div class="lg:col-span-8 space-y-8">
            

                    <div class="bg-white p-6 rounded-lg shadow-sm space-y-6">
                        <h2 class="text-2xl font-semibold text-gray-800">Contact Details</h2>
                        <div class="space-y-6">
							<div>
                                <label class="block text-sm font-medium text-gray-700">Name </label>
                                <input type="text" value="<?= $_SESSION['name'];?>" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="text" value="<?= $_SESSION['email'];?>" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Mobile Number</label>
                                <input type="text" value="<?= $_SESSION['contact'];?>" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required>
                            </div>
							 <div>
                                <label class="block text-sm font-medium text-gray-700">Address</label>
                                <input type="text" value="<?= $_SESSION['address'];?>" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" required>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4">
                    <div class="bg-white p-6 rounded-lg shadow-sm space-y-6 sticky top-4">
                        <h2 class="text-2xl font-semibold text-gray-800">Order Summary</h2>
                        <div class="space-y-4">
						<?php
							require_once "models/Cart.php";

							// Setup PDO

							// Create Cart object
							$cart = new Cart();

							// Fetch and display cart items for a user
							$userId = $_SESSION['id'];
							$items = $cart->getCartItems($userId);
							
							$subtotal = 0;

							foreach ($items as $item) {
								
								$subtotal += $item['product_price'];
								$shipping_fee = 10;
							
							?>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center space-x-4">
                                    <img src="assets/products/<?= $item['location'];?>" class="w-16 h-16 object-cover rounded" alt="Product">
                                    <div>
                                        <p class="font-medium"><?= $item['product_name'];?></p>
                                        <p class="text-sm text-gray-500">Qty: <?= $item['quantity'];?></p>
                                    </div>
                                </div>
                                <p class="font-medium">₱ <?= number_format($item['product_price'],2);?></p>
                            </div>
							<?php } ?>
                           
                            <hr class="border-gray-200">
                            <div class="space-y-2">
                                <div class="flex justify-between">
                                    <p>Subtotal</p>
                                    <p class="font-medium">₱ <?= number_format($subtotal,2);?></p>
                                </div>
                             
                                <div class="flex justify-between">
                                    <p>Shipping Fee</p>
                                    <p class="font-medium">₱ <?= number_format($shipping_fee,2);?></p>
                                </div>
                                <hr class="border-gray-200">
                                <div class="flex justify-between text-lg font-semibold">
                                    <p>Total</p>
                                    <p class="font-medium">₱ <?= number_format($subtotal + $shipping_fee,2);?></p>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <button type="button" data-bs-toggle="modal" data-bs-target="#checkout" class="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">Checkout</button>
                            <button type="button" class="w-full py-3 px-4 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors">Cancel Order</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>
<!-- Button to trigger modal -->

<!-- Modal structure -->
<div class="modal fade" id="checkout" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    
      <!-- Modal Header -->
      <div class="modal-header">
        <h5 class="modal-title" id="myModalLabel">Checkout Order</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <!-- Modal Body -->
      <div class="modal-body">
	    <form action="controller/cart?checkout" method="POST">

        Are you sure to checkout this order?
		<input type="hidden" name="transcode" value="<?= $_SESSION['transcode'];?>">
      </div>
      
      <!-- Modal Footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Yes</button>
      </div>
	  </form>

    </div>
  </div>
</div>


</html>
    <!-- Footer -->
    <?php include("includes/footer.php");   ?>

    
 
</body>
</html>