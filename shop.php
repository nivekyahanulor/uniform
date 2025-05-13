<!DOCTYPE html>
<html lang="en">
<?php include "includes/header.php"?>

<body>
    <!-- Contact Page Content -->
       <div class="container mt-5">
        <div class="row">
        <h2 class="text-center mb-4">UNIVERSAL UNIFORM</h2>
        
        <div class="product-grid" style="position: ;">
			<?php
				 $universal = $mysqli->query("SELECT * from v_products where category = 'Universal Uniform'");
				 while($val = $universal->fetch_object()){
			?>
            <div class="product-item">
                <div class="product-image">
                    <img src="assets/products/<?= $val->location;?>" alt="GREEN UNIFROM 'MEN'">
                </div>
                <!-- Hover Size Chart -->
                <div class="hover-size-chart">
                    <span class="close-hover-chart">&times;</span>
                    <h4>Size Chart & Price</h4>
                    <table class="hover-size-chart-table">
                    <thead>
                    <tr>
                                <td>XS</td>
                                <td>34-36"</td>
                                <td>28-30"</td>
                                <td>370</td>
                            </tr>
                            <tr>
                                <td>S</td>
                                <td>38-40"</td>
                                <td>32-34"</td>
                                <td>390</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>42-44"</td>
                                <td>36-38"</td>
                                <td>410</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>46-48"</td>
                                <td>40-42"</td>
                                <td>440</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>50-52"</td>
                                <td>44-46"</td>
                                <td>460</td>
                            </tr>
                            <tr>
                                <td>XXL</td>
                                <td>54-56"</td>
                                <td>48-50"</td>
                                <td>480</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h4><?= $val->product_name;?></h4>
                <br>
                <div class="product-actions">
                    <a href="product-details?data=<?= $val->id;?>" > <button class="add-to-cart-btn" >View Details</button></a>
                    <button class="buy-now-btn">Buy Now</button>
                </div>
            </div>
			
			<?php } ?>
            
  
     
        </div>
        
        <h2 class="text-center mb-4 mt-5">WHITE UNIFORM</h2>
        <div class="product-grid">
			<?php
				 $universal = $mysqli->query("SELECT * from v_products where category = 'White Uniform'");
				 while($val = $universal->fetch_object()){
			?>
            <div class="product-item">
                <div class="product-image">
                    <img src="assets/products/<?= $val->location;?>" alt="GREEN UNIFROM 'MEN'">
                </div>
                <!-- Hover Size Chart -->
                <div class="hover-size-chart">
                    <span class="close-hover-chart">&times;</span>
                    <h4>Size Chart & Price</h4>
                    <table class="hover-size-chart-table">
                    <thead>
                    <tr>
                                <td>XS</td>
                                <td>34-36"</td>
                                <td>28-30"</td>
                                <td>370</td>
                            </tr>
                            <tr>
                                <td>S</td>
                                <td>38-40"</td>
                                <td>32-34"</td>
                                <td>390</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>42-44"</td>
                                <td>36-38"</td>
                                <td>410</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>46-48"</td>
                                <td>40-42"</td>
                                <td>440</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>50-52"</td>
                                <td>44-46"</td>
                                <td>460</td>
                            </tr>
                            <tr>
                                <td>XXL</td>
                                <td>54-56"</td>
                                <td>48-50"</td>
                                <td>480</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h4><?= $val->product_name;?></h4>
                <br>
                <div class="product-actions">
                    <a href="product-details?data=<?= $val->id;?>" > <button class="add-to-cart-btn" >View Details</button></a>
                    <button class="buy-now-btn">Buy Now</button>
                </div>
            </div>
			
			<?php } ?>
            
  
     
        </div>
    </div>
        </div>
        
     
    </div>

    <?php include "includes/footer.php";  ?>
   </body>
    
    <!-- FAQ JavaScript -->
    <script>
document.addEventListener("DOMContentLoaded", () => {
  const productItems = document.querySelectorAll(".product-item");

  productItems.forEach(item => {
    const hoverChart = item.querySelector(".hover-size-chart");
    const closeBtn = item.querySelector(".close-hover-chart");

    let closedOnce = false;

    // Prevent hover effect when closed
    item.addEventListener("mouseenter", () => {
      if (!closedOnce) {
        hoverChart.style.opacity = "1";
        hoverChart.style.visibility = "visible";
      }
    });

    item.addEventListener("mouseleave", () => {
      if (!closedOnce) {
        hoverChart.style.opacity = "0";
        hoverChart.style.visibility = "hidden";
      }
    });

    // Close button logic
    closeBtn?.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent accidental hover trigger
      hoverChart.style.opacity = "0";
      hoverChart.style.visibility = "hidden";
      closedOnce = true;

      // Re-enable hover after short delay or next hover
      setTimeout(() => {
        closedOnce = false;
      }, 100); // or remove this timeout if you want hover on next try
    });
  });
});
</script>

</body>
</html>