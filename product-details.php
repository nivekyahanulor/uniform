<?php include("includes/header.php");?>

<style>

.text-bold {
  font-weight: 800;
}

text-color {
  color: #0093c4;
}

/* Main image - left */
.main-img img {
  width: 100%;
}

/* Preview images */
.previews img {
  width: 100%;
  height: 140px;
}

.main-description .category {
  text-transform: uppercase;
  color: #0093c4;
}

.main-description .product-title {
  font-size: 2.5rem;
}

.old-price-discount {
  font-weight: 600;
}

.new-price {
  font-size: 2rem;
}

.details-title {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  color: #757575;
}

.buttons .block {
  margin-right: 5px;
}

.quantity input {
  border-radius: 0;
  height: 40px;
}

.custom-btn {
  text-transform: capitalize;
  background-color: #0093c4;
  color: white;
  width: 150px;
  height: 40px;
  border-radius: 0;
}

.custom-btn:hover {
  background-color: #0093c4 !important;
  font-size: 18px;
  color: white !important;
}

.similar-product img {
  height: 400px;
}

.similar-product {
  text-align: left;
}

.similar-product .title {
  margin: 17px 0px 4px 0px;
}

.similar-product .price {
  font-weight: bold;
}

.questions .icon i {
  font-size: 2rem;
}

.questions-icon {
  font-size: 2rem;
  color: #0093c4;
}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  /* Make preview images responsive  */
  .previews img {
    width: 100%;
    height: auto;
  }
}

</style>
<style>
  form label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
</style>
 <div class="container my-5">
        <div class="row">
			<?php
				 $id        = $_GET['data'];
				 $universal = $mysqli->query("SELECT * from v_products where id = '$id'");
				 while($val = $universal->fetch_object()){
			?>
            <div class="col-md-5">
                <div class="main-img">
                    <img class="img-fluid" src="assets/products/<?= $val->location;?>" alt="ProductS">
                   
                </div>
            </div>
            <div class="col-md-7">
				<?php if(isset($_GET['success'])){?>
					<div class="alert alert-success" role="alert">
					  <strong>Success!</strong> You have been signed in successfully!
					</div>
				<?php } ?>
                <div class="main-description px-2">
                    <div class="category text-bold">
                        Category: <?= $val->category;?>
                    </div>
                    <div class="product-title text-bold my-3">
                      <?= $val->product_name;?>
                    </div>


                    <div class="price-area my-4">
                        <p class="new-price text-bold mb-1">    ₱<?= number_format($val->product_price,2);?></p>

                    </div>
					
				
					<div class="product-details my-4">
						<p class="details-title text-color mb-1"> <b>Remaining Quantity</b></p>
						<p class="description"><?= $val->quantity;?></p>
					</div>
					<div class="product-details my-4">
						<p class="details-title text-color mb-1">Product Details</p>
						<p class="description"><?= $val->product_description;?></p>
					</div>
              
					<div class="row">
					<form action = "controller/cart?add" method="POST">
					  <div class="col-md-6">
							<div class="block quantity">
							<b> Quantity : </b>
								<input type="number" class="form-control" id="cart_quantity" value="1" min="0" max="10"  name="cart_quantity" required>
								<input type="hidden" name="product" value="<?= $val->id;?>" required>
								<input type="hidden" name="customer" value="<?= $_SESSION['id'];?>" required>
								<input type="hidden" name="code" value="<?= $_SESSION['transcode'];?>" required>
							</div>
							<br>
							
							 <p>Select Size:</p>
  
							<label>
								  <input type="radio" name="size" value="Small" class="radio" required> Small
								</label>
								<label>
								  <input type="radio" name="size" value="Medium"> Medium
								</label>
								<label>
								  <input type="radio" name="size" value="Large"> Large
								</label>
								<label>
								  <input type="radio" name="size" value="XLarge"> XLarge
								</label>
								<label>
								  <input type="radio" name="size" value="2XL"> 2XL
								</label>
														</div>
                        </div>
                    <div class="buttons d-flex my-5">
					
                     <?php if(isset($_SESSION['id'])){?>
                        <div class="block">
                            <button type="submit" class="shadow btn custom-btn">Add to cart</button>
                        </div>
					<?php } ?>
                     </form>
                    </div>




                </div>

            

                
				<?php } ?>
             
            </div>
        </div>
    </div>



    </div>

    <!-- Footer -->
    <?php include("includes/footer.php"); 
    ?>

    
 
</body>
</html>