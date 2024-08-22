<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>I Net-Home</title>
    <link rel="stylesheet" href="assets/css/main.min.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <!-- <script  src="assets/js/app.js" defer></script> -->
  </head>
  <body class="no-scrollbar">
    <!-- NAVBAR -->
    <nav class="navbar nav-bg navbar-expand-lg">
      <div class="container py-1 py-md-2">
        <img class="me-0 me-md-5" src="https://www.inetcsc.com/themes/bo_theme/landing_page/img/logo.png" alt="logo" />
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse px-3 px-md-0 row navbar-collapse" id="navbarSupportedContent">
          <form class="d-md-flex d-none col-md-6" role="search">
            <!-- <input class="form-control me-2" type="search" placeholder="Search for products" aria-label="Search" /> -->
            <!-- <button class="btn btn-1" type="submit">Search</button> -->
          </form>
          <ul class="navbar-nav col-md-6 justify-content-end me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link <?php echo $activePage == 'home' ? 'active' : ''; ?>" aria-current="page" href="home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link <?php echo $activePage == 'product' ? 'active' : ''; ?>" href="product">Products</a>
            </li>
            <li class="nav-item">
              <a href="contact" class="nav-link <?php echo $activePage == 'contact' ? 'active' : ''; ?>">Contact</a>
            </li>
            <?php if ($this->session->userdata('logged_in')): ?>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <?php echo $this->session->userdata('user_name'); ?>
                </a>
                <ul class="dropdown-menu  bg-danger" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item text-center " href="<?php echo base_url('crud/userLogout'); ?>">Logout</a></li>
                </ul>
              </li>
            <?php else: ?>
              <button onclick='window.location.href ="login"' class="btn btn-primary ms-md-4 rounded-md h-75 align-self-start align-self-md-center">Login</button>
            <?php endif; ?>
          </ul>
        </div>
      </div>
    </nav>
  </body>
</html>
