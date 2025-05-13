<?php

require_once(__DIR__ . '/../controller/database2.php');

class Cart{
    private $conn;
    public function __construct(){
        $this ->conn = Database::connect();
    }
	
	  public function getCartItems($userId) {
        $sql = "
            SELECT 
               v_cart.* , v_products.location, v_products.product_name, v_products.product_price
            FROM v_cart
            JOIN v_products ON v_cart.product_id = v_products.id
            WHERE v_cart.customer_id = :user_id and v_cart.is_checkout = 0
        ";

        $stmt = $this->conn->prepare($sql);
        $stmt->execute([':user_id' => $userId]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
	
	 public function getCheckedoutItem($userId) {
        $sql = "
            SELECT 
               v_cart.* , v_products.location, v_products.product_name, v_products.product_price
            FROM v_cart
            JOIN v_products ON v_cart.product_id = v_products.id
            WHERE v_cart.customer_id = :user_id and v_cart.is_checkout = 1
        ";

        $stmt = $this->conn->prepare($sql);
        $stmt->execute([':user_id' => $userId]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
	
    public function getCartCount($userId) {
		$sql = "SELECT COUNT(*) AS total FROM v_cart WHERE customer_id = :customer_id and v_cart.is_checkout = 0";
		$stmt = $this->conn->prepare($sql);
		$stmt->execute([':customer_id' => $userId]);
		$result = $stmt->fetch(PDO::FETCH_ASSOC);
		return $result['total'] ?? 0;
	}
	
	public function checkoutCart($userId) {
		$sql = "UPDATE v_cart set is_checkout = 1  WHERE transaction_code = :userId ";
		$stmt = $this->conn->prepare($sql);
		$stmt->execute([':userId' => $userId]);
	}
	
    public function addtoCart($quantity,$size,$product,$customer,$transcode,$date){
		
       $stmt = $this->conn->prepare("
			INSERT INTO v_cart (customer_id, product_id, quantity, size, transaction_code, date_added)
			VALUES (:customer_id, :product_id, :quantity, :size, :transaction_code, :date_added)
		");
		
        $stmt -> bindParam(":customer_id", $customer);
        $stmt -> bindParam(":product_id", $product);
        $stmt -> bindParam(":quantity", $quantity);
        $stmt -> bindParam(":size", $size);
        $stmt -> bindParam(":transaction_code", $transcode);
        $stmt -> bindParam(":date_added", $date);

        if ($stmt -> execute()){
            return true;
        }
        else {
            return false;
        }
    }
}

?>