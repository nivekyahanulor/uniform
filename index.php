<?php include("includes/header.php");?>

    <!-- Main Content Section -->
    <div class="container my-5">
        <div class="row">
            <!-- Left Column - Carousel -->
            <div class="col-md-6">
                <div id="fashionCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#fashionCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#fashionCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#fashionCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="assets/images/men.jpg" alt="Men's Fashion" class="d-block w-100">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/women.jpg" alt="Women's Fashion" class="d-block w-100">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/peuni.jpg" alt="Peuni Collection" class="d-block w-100">
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#fashionCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#fashionCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            
            <!-- Right Column - Business Description -->
            <div class="col-md-6">
                <div class="business-description p-4">
                    <h2>Welcome to Uniforms By SilverCreations</h2>
                    <p>
                        At our fashion boutique, we pride ourselves on offering the latest trends and timeless classics for both men and women. Our Peuni Collection represents the pinnacle of our design philosophy, combining elegance with comfort.
                    </p>
                    <p>
                        Founded in 1983, our business has grown from a small local shop to a recognized brand with a commitment to quality and customer satisfaction. Each piece in our collection is carefully selected to ensure that our customers receive only the best in fashion.
                    </p>
                    <p>
                        We believe that fashion is not just about wearing clothes, but about expressing yourself. Our team of experienced stylists is always ready to help you find the perfect outfit for any occasion, whether it's a casual day out or a formal event.
                    </p>
                    <p>
                        Visit our store today and discover why our customers keep coming back for more. Experience the difference that quality fashion can make in your life.
                    </p>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Footer -->
    <?php include("includes/footer.php");  ?>
</body>
</html>