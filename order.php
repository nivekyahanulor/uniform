<?php include("includes/header.php");?>

<style>


.container {
  margin: 5% 3%;
}
@media (min-width: 48em) {
  .container {
    margin: 2%;
  }
}
@media (min-width: 75em) {
  .container {
    margin: 2em auto;
    max-width: 75em;
  }
}

.responsive-table {
  width: 100%;
  margin-bottom: 1.5em;
  border-spacing: 0;
}
@media (min-width: 48em) {
  .responsive-table {
    font-size: 0.9em;
  }
}
@media (min-width: 62em) {
  .responsive-table {
    font-size: 1em;
  }
}
.responsive-table thead {
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  /* IE6, IE7 */
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
@media (min-width: 48em) {
  .responsive-table thead {
    position: relative;
    clip: auto;
    height: auto;
    width: auto;
    overflow: auto;
  }
}
.responsive-table thead th {
  background-color: #26890d;
  border: 1px solid #86bc25;
  font-weight: normal;
  text-align: center;
  color: white;
}
.responsive-table thead th:first-of-type {
  text-align: left;
}
.responsive-table tbody,
.responsive-table tr,
.responsive-table th,
.responsive-table td {
  display: block;
  padding: 0;
  text-align: left;
  white-space: normal;
}
@media (min-width: 48em) {
  .responsive-table tr {
    display: table-row;
  }
}
.responsive-table th,
.responsive-table td {
  padding: 0.5em;
  vertical-align: middle;
}
@media (min-width: 30em) {
  .responsive-table th,
.responsive-table td {
    padding: 0.75em 0.5em;
  }
}
@media (min-width: 48em) {
  .responsive-table th,
.responsive-table td {
    display: table-cell;
    padding: 0.5em;
  }
}
@media (min-width: 62em) {
  .responsive-table th,
.responsive-table td {
    padding: 0.75em 0.5em;
  }
}
@media (min-width: 75em) {
  .responsive-table th,
.responsive-table td {
    padding: 0.75em;
  }
}
.responsive-table caption {
  margin-bottom: 1em;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
}
@media (min-width: 48em) {
  .responsive-table caption {
    font-size: 1.5em;
  }
}
.responsive-table tfoot {
  font-size: 0.8em;
  font-style: italic;
}
@media (min-width: 62em) {
  .responsive-table tfoot {
    font-size: 0.9em;
  }
}
@media (min-width: 48em) {
  .responsive-table tbody {
    display: table-row-group;
  }
}
.responsive-table tbody tr {
  margin-bottom: 1em;
}
@media (min-width: 48em) {
  .responsive-table tbody tr {
    display: table-row;
    border-width: 1px;
  }
}
.responsive-table tbody tr:last-of-type {
  margin-bottom: 0;
}
@media (min-width: 48em) {
  .responsive-table tbody tr:nth-of-type(even) {
    background-color: rgba(0, 0, 0, 0.12);
  }
}
.responsive-table tbody th[scope=row] {
  background-color: #26890d;
  color: white;
}
@media (min-width: 30em) {
  .responsive-table tbody th[scope=row] {
    border-left: 1px solid #86bc25;
    border-bottom: 1px solid #86bc25;
  }
}
@media (min-width: 48em) {
  .responsive-table tbody th[scope=row] {
    background-color: transparent;
    color: #000001;
    text-align: left;
  }
}
.responsive-table tbody td {
  text-align: right;
}
@media (min-width: 48em) {
  .responsive-table tbody td {
    border-left: 1px solid #86bc25;
    border-bottom: 1px solid #86bc25;
    text-align: center;
  }
}
@media (min-width: 48em) {
  .responsive-table tbody td:last-of-type {
    border-right: 1px solid #86bc25;
  }
}
.responsive-table tbody td[data-type=currency] {
  text-align: right;
}
.responsive-table tbody td[data-title]:before {
  content: attr(data-title);
  float: left;
  font-size: 0.8em;
  color: rgba(0, 0, 0, 0.54);
}
@media (min-width: 30em) {
  .responsive-table tbody td[data-title]:before {
    font-size: 0.9em;
  }
}
@media (min-width: 48em) {
  .responsive-table tbody td[data-title]:before {
    content: none;
  }
}
</style>
<div class="container">
<h3> My Orders </h3>
<hr>
  <table class="responsive-table">
    <thead>
      <tr>
        <th scope="col">Transaction Code</th>
        <th scope="col">Product Name</th>
        <th scope="col">Quantity</th>
        <th scope="col">Amount</th>
        <th scope="col">Total</th>
        <th scope="col">Size</th>
        <th scope="col">Status</th>
        <th scope="col">Date Ordered</th>
      </tr>
    </thead>
    
    <tbody>
	<?php
		require_once "models/Cart.php";

		$cart = new Cart();

		$userId = $_SESSION['id'];
		$items = $cart->getCheckedoutItem($userId);
							
		$subtotal = 0;

		foreach ($items as $item) {
								
			
							
							?>
      <tr>
        <th scope="row"><?= $item['transaction_code'];?></th>
        <td ><?= $item['product_name'];?></td>
        <td ><?= $item['quantity'];?></td>
        <td ><?= $item['product_price'];?></td>
        <td ><?= $item['product_price'] * $item['quantity'] ;?></td>
        <td ><?= $item['size'];?></td>
        <td ><?php if($item['is_status'] == 0){ echo "Pending";} else { echo "Approved";}?></td>
        <td ><?= $item['date_added'];?></td>
      </tr>
	
	<?php } ?>
      
    </tbody>
  </table>
</div>
<?php include("includes/footer.php");   ?>
