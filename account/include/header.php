<!DOCTYPE html>
<?php session_start();
if(!isset($_SESSION['id'])){
	header("Location: ../index");
}
?>
<html lang="en">
    <head>

        <meta charset="utf-8" />
        <title>KLD Online Shop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">
        <?php 		include('../controller/database.php'); ?>
        <!-- App css -->
      
		
		<link href="../assets/css/datatables/dataTables.bootstrap5.min.css" rel="stylesheet" type="text/css" />
        <link href="../assets/css/datatables/responsive.bootstrap5.min.css" rel="stylesheet" type="text/css" />
        <link href="../assets/css/datatables/buttons.bootstrap5.min.css" rel="stylesheet" type="text/css" />
		
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
		
		  <link href="../assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bs-default-stylesheet" />
        <link href="../assets/css/app.min.css" rel="stylesheet" type="text/css" id="app-default-stylesheet" />
		
        <link href="../assets/css/bootstrap-dark.min.css" rel="stylesheet" type="text/css" id="bs-dark-stylesheet" />
        <link href="../assets/css/app-dark.min.css" rel="stylesheet" type="text/css" id="app-dark-stylesheet" />
		<link href="../assets/css/sweetalert2.min.css" rel="stylesheet" type="text/css" id="app-dark-stylesheet" />
        <!-- icons -->
        <link href="../assets/css/icons.min.css" rel="stylesheet" type="text/css" />
		
		<style>
		.bg-gray {    background-color: #b3b3b3; }
		</style>

    </head>

    <!-- body start -->
    <body class="loading" data-layout='{"mode": "light", "width": "fluid", "menuPosition": "fixed", "sidebar": { "color": "light", "size": "default", "showuser": false}, "topbar": {"color": "dark"}, "showRightSidebarOnPageLoad": true}'>

        <!-- Begin page -->
        <div id="wrapper">

            <!-- Topbar Start -->
		<div class="navbar-custom">
		<div class="container-fluid">
        <ul class="list-unstyled topnav-menu float-end mb-0">

			
    
            <li class="dropdown notification-list topbar-dropdown">
                <a class="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <img src="../assets/images/default.png" alt="user-image" class="rounded-circle">
                    <span class="pro-user-name ms-1">
                        Administrator <i class="mdi mdi-chevron-down"></i> 
                    </span>
                </a>
                <div class="dropdown-menu dropdown-menu-end profile-dropdown ">
                    <!-- item-->
                    <div class="dropdown-header noti-title">
                        <h6 class="text-overflow m-0">Welcome !</h6>
                    </div>
    
                  
    
                    <!-- item-->
                    <a href="logout" class="dropdown-item notify-item">
                        <i class="fe-log-out"></i>
                        <span>Logout</span>
                    </a>
    
                </div>
            </li>
    
          
    
        </ul>
    
        <!-- LOGO -->
        <div class="logo-box">
            <a href="#" class="logo logo-dark text-center">
                <span class="logo-sm">
                   <span class="logo-lg-text-light">KLD </span> 
                </span>
                <span class="logo-lg">
                   <span class="logo-lg-text-light">KLD SHOP</span> 
                </span>
            </a>
    
            <a href="#" class="logo logo-light text-center">
                <span class="logo-sm">
                   <span class="logo-lg-text-light">KLD </span> 
                </span>
                <span class="logo-lg">
                   <span class="logo-lg-text-light">KLD SHOP</span> 
                </span>
            </a>
        </div>
		
		<ul class="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
                <button class="button-menu-mobile waves-effect waves-light" fdprocessedid="ymlyom">
                    <i class="fe-menu"></i>
                </button>
            </li>

            <li>
                <!-- Mobile menu toggle (Horizontal Layout)-->
                <a class="navbar-toggle nav-link" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                    <div class="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
                <!-- End mobile menu toggle-->
            </li>   
         
        </ul>
 
        <div class="clearfix"></div>
    </div>
</div>
