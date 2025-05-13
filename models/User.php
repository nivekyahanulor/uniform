<?php
require_once "../controller/database2.php";
class User{
    private $conn;
    public function __construct(){
        $this ->conn = Database::connect();
    }
    public function login($email){
        $sql = $this ->conn ->prepare("SELECT * FROM v_users WHERE email = :email");
        $sql ->bindParam(":email", $email);
        $sql ->execute(); 
        return $sql -> fetch(PDO::FETCH_ASSOC);
    }
	
	 public function updateCustomerCode($id ,  $code){
        $sql = $this ->conn ->prepare("UPDATE  v_users  set code = '$code' WHERE id = :id");
        $sql ->bindParam(":id", $id);
        $sql ->execute(); 
    }
	
	
    public function insertUsers($name,$contact,$email,$address,$password, $date,$role){
		
       $stmt = $this->conn->prepare("
			INSERT INTO v_users (fullname, email, mobile, address, password, date_added,role)
			VALUES (:fullname, :email, :mobile, :address, :password, :date_added,:role)
		");
		
        $stmt -> bindParam(":fullname", $name);
        $stmt -> bindParam(":mobile", $contact);
        $stmt -> bindParam(":email", $email);
        $stmt -> bindParam(":address", $address);
        $stmt -> bindParam(":password", $password);
        $stmt -> bindParam(":date_added", $date);
        $stmt -> bindParam(":role", $role);

        if ($stmt -> execute()){
            return true;
        }
        else {
            return false;
        }
    }
}

?>