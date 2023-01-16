<?php
require_once './includes/header.php';
?>
<body>

    <div id="hero">
        <video width="3840" height="2160" autoplay loop muted src="./src/media/header-video.mp4"></video>
        <div class="filter"></div>
        <div class="cutout">
            <h1>Unlocking Your Business Potential</h1>
        </div>
    </div>
    <div id="hero-opening"></div>
    <div id="content">
    <?php require_once './includes/nav.php'; ?>

    <div class="container rounded px-5 py-3" id="post-hero-text">
        <div class="row">
            <div class="col-sm text-center">
            <p class="h5">
                For over two decades, this has been Turner HR Services’ motto. Our goal
                 is to provide value-added expertise within the Human Resources field to help
                  you improve your business and maximize your mission. <br><br>

                Small businesses, who do not have a Human Resources department, have utilized Turner HR Services
                 to set up systems and ensure compliance with the myriad of employment laws. Larger businesses have
                  turned to Turner HR Services to supplement their human resource efforts in training, investigations
                   and various HR-related projects.</p>
            </div>
        </div>
    </div>

    <div id="block-nav" class="container-sm mb-5">
        <?php include_once "./includes/sections-card.php"; ?>
    </div>
    
    <?php
    include_once "./includes/quotes.php"; 
    include_once "./includes/client-list.php";
  
    ?>
        


<script src="./src/bootstrap/js/bootstrap.js"></script>
<script src="./src/js/custom.js"></script>
</body>
<?php
require_once './includes/footer.php';
?>
