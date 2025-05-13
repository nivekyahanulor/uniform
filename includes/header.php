<!DOCTYPE html>
<?php session_start();
if(!isset($_SESSION['id'])){}
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Collection - Fashion Store</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/footer.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
	<?php include("controller/database.php");?>
	<style>
	html, body {
		height: 100%;
		margin: 0;
	}
	.container {
		min-height: 100%;
		display: flex;
		flex-direction: column;
	}

	</style>
</head>
<body> 
    <!-- Include the header -->
    <header>

        <div class="header-container">
            <h1>SILVER CREATION</h1>
            <div class="spacer"></div>
            <div class="main-nav">
                <ul>
                    <li>
                        <a href="index.php">
                            <i class="bi bi-house-door"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="shop.php">
                            <i class="bi bi-bag"></i>
                            <span>Shop</span>
                        </a>
                    </li>
                    <li>
                        <a href="about.php">
                            <i class="bi bi-people"></i>
                            <span>About Us</span>
                        </a>
                    </li>
                    <li>
                        <a href="contact.php">
                            <i class="bi bi-chat-dots"></i>
                            <span>Contact</span>
                        </a>
                    </li>
					<?php   if(isset($_SESSION['id'])){ ?>
					 <li>
                        <a href="order.php">
                            <i class="bi bi-list"></i>
                            <span>Orders</span>
                        </a>
                    </li>
					<?php } ?>
                </ul>
            </div>
			
			<?php
			
			  if(isset($_SESSION['id'])){

				   require_once "models/Cart.php";

				   // Create Cart object
					$cart = new Cart();

					// Fetch and display cart items for a user
					$userId = $_SESSION['id'];
					$items = $cart->getCartCount($userId);


								  
				  $cart_count = $items;
			  } else {
				  $cart_count = 0;
			  }
			  
			?>
            
            <div class="icons-container">
                <!-- Add cart icon here -->
                <div class="cart-icon">
				<?php  if(isset($_SESSION['id'])){ ?>
                    <a href="cart">
                        <i class="bi bi-cart"></i>
                        <span class="cart-badge"><?php echo $cart_count; ?></span>
                    </a>
				<?php } else { ?>
				  <a href="#">
                        <i class="bi bi-cart"></i>
                        <span class="cart-badge"><?php echo $cart_count; ?></span>
                    </a>
				<?php } ?>
                </div>
                
                <div class="user-profile">
                    <div class="dropdown">
                        <button class="user-icon-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-circle"></i>
                        </button>
                        <div class="dropdown-menu user-dropdown" style="width:300px;">
                            <?php
                
                            if(isset($_SESSION['id'])){
                
                            ?>
                
                            <div class="user-actions">
                
                                <ul style="list-style-type:none;">
                                 <h5>User Profile</h5>
                                    <li><i class="bi bi-person"></i> <?= $_SESSION['name'];?></li>
                                    <li><i class="bi bi-envelope"></i> <?= $_SESSION['email'];?></li>
                                    <li><i class="bi bi-telephone"></i> <?= $_SESSION['contact'];?></li>
                                    <li><i class="bi bi-geo-alt"></i> <?= $_SESSION['address'];?></li>
                                </ul>
                            </div>
                            <div class="dropdown-divider"></div>
                            <div class="user-actions">
                                <a href="changepass.php" class="dropdown-item">
                                    <i class="bi bi-key"></i> Change Password
                                </a>
                                <a href="logout.php" class="dropdown-item">
                                    <i class="bi bi-box-arrow-right"></i> Logout
                                </a>
                            </div>
                
                
                            <?php } else { ?>
                
                            <div class="user-actions">
                                <a href="login.php" class="dropdown-item">
                                    <i class="bi bi-box-arrow-right"></i> Login
                                </a>
                            </div>
                
                
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>