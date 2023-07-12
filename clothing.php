<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="kimg/logo.jpg" type="image/x-icon">
    <link rel="stylesheet" href="kcss/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@300;400&display=swap" rel="stylesheet">
   
    <script src="https://kit.fontawesome.com/d8bb648d7c.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@300;400&display=swap" rel="stylesheet">
    <title>Welcome to Krishti</title>
    <script>(function(w, d) { w.CollectId = "6447fb0a65918a6a20802df3"; var h = d.head || d.getElementsByTagName("head")[0]; var s = d.createElement("script"); s.setAttribute("type", "text/javascript"); s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js"); h.appendChild(s); })(window, document);</script>
</head>

<body>
    <nav class="navbar">
        <ul class="navlist">
            <div class="logo"><img src="kimg/logo.jpg"> </div>
            <li><a href="index.html" class="hov">Home</a></li>
            <li><a href="about.html" class="hov">About</a></li>
            <li><a href="contact.html" class="hov">Contact Us</a></li>
            <input type="text" name="search" id="src" placeholder="Search for any item">

            <button id="btn" name="button">search</button>
            <i class="fa-solid fa-user" id="reg" style="color: #0cce19;"></i>
            <!-- <a href="LOGIN/logout.php" id="ad1">Logout</a> -->
            <!-- <i class="fa-solid fa-user" id="log" style="color: #0cce19;"></i> -->
            <!-- <a href="LOGIN/login.php" id="ad2">Login</a> -->
            <a href="#" id="ad2"> <?php echo $_SESSION['email'] ?></a> 
            <i class="fa-solid fa-cart-shopping" id="navcart" style="color: #21bb02;"></i>
            <div class="cart">
                <h2 class="cart-title">Your Cart</h2>
                <div class="cart-content">

                </div>
                <div class="total">
                    <div class="total-title">Total</div>
                    <div class="total-price"></div>
                </div>
                <button type="button" class="btn-buy">Buy Now</button>
                <i class="fa-solid fa-rectangle-xmark" id="close-cart"></i>

            </div>
       
        </ul>


    </nav>


    <section>

        <div class="common-heading">
            <div class="common-heading-left">
                <h1>Fabric Items</h1>
            </div>
        </div>
        <div class="common-row col-deals">

            <div class="common-col">
                <img src="kimg/pmoslin.jpg" class="saree" alt="" class="product-img">
                <h3 class="product-title">Moslin Saree</h3>
                <h4 class="price">Price:  4770TK </h4>
                <i class="fa-solid fa-cart-plus add-cart" ></i>
            </div>

            <div class="common-col">
                <img src="kimg/pjamdani.jpg"  alt="" class="product-img">
                <h3 class="product-title">Jamdaani Saree</h3>
                <h4 class="price">Price: 4250TK </h4>
                <i class="fa-solid fa-cart-plus add-cart" ></i>
            </div>
            
            <div class="common-col">
                <img src="kimg/pkatan.jpg" alt="" class="product-img">
                <h3 class="product-title">Katan Saree</h3>
                <h4 class="price">Price: 4490TK </h4>
                <i class="fa-solid fa-cart-plus add-cart"></i>
            </div>

        </div>
        <div class="common-row col-deals">
            <div class="common-col">
                <img src="kimg/pnakshipakha.jpg" alt="" class="product-img">
                <h3 class="product-title">Nakshipakha (Hand-embroidery) </h3>
                <h4 class="price">Price: 5500TK </h4>
                <i class="fa-solid fa-cart-plus add-cart" ></i>
            </div>
            <div class="common-col">
                <img src="kimg/pnokshikatha.jpg "  alt="" class="product-img">
                <h3 class="product-title">Nakshikatha (Hand-embroidery)</h3>
                <h4 class="price">Price: 350TK </h4>
                <i class="fa-solid fa-cart-plus add-cart" ></i>
            </div>
            <div class="common-col">
                <img src="kimg/pnakshikatha2.jpg" alt="" class="product-img">
                <h3 class="product-title">Nakshikatha (Hand-embroidery)</h3>
                <h4 class="price">Price:  5000TK </h4>
                <i class="fa-solid fa-cart-plus add-cart"></i>
            </div>




        </div>

        </div>


    </section>
    <footer>
        <p>Copyright &copy; 2023, Parisa Reza</p>
    </footer>
</body>
<script src="js/jquery-3.6.4.min.js"></script>
<script src="cartt.js"></script>
<script>
    // seach product
    window.addEventListener('DOMContentLoaded', () => {
        $('#src').on('keyup', function () {
            var value = $(this).val().toLowerCase();
            $('section .common-col').filter(function () {
                $(this).toggle($(this).find('.product-title').text().toLowerCase().indexOf(value) > -1)
            });
        });

    });

</script>
</html>