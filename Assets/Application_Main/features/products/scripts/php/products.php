<?php
    ?>
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset='utf-8'>
            <meta content='width=device-width, initial-scale=1' name='viewport'>
            <meta content='#000000' name='theme-color'>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
            <link href='/Assets/Application_3rdParty/Bootstrap%20Plus/Scripts/CSS/boostrap-plus.css' rel='stylesheet'>
            <link href='/Assets/Application_Main/base/scripts/css/style.css' rel='stylesheet'>
            <link href='/Assets/Application_Main/features/products/scripts/css/style.css' rel='stylesheet'>
            <link href='/Assets/Application_Main/base/sprites/fav.ico' rel='icon'>
            <title> Fastify POC </title>
        </head>
        <body class='vh-100 m-0 p-0 bgcolor_89cff0'
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <div class="d-flex flex-row w-100 h-100 m-0 p-0 justify-content-center align-items-center">
                <div class="d-flex flex-column w-50 h-60 m-0 p-5 bgcolor_f7f7f7">
                    <a class="d-flex flex-row-reverse w-100 h-10 mx-0 mt-0 mb-2 p-0 justify-content-end align-items-center" id="BackBTN" href="/"><i class="fas fa-arrow-left"></i></a>
                    <div class="d-flex flex-column w-100 h-20 mx-0 mt-0 mb-2 p-0" id="header">
                        <h2 class="mx-0 mt-0 mb-1 p-0 tmpcolor_111111" id="productsTitleTMP"> Feature I: Products List </h2>
                        <p class="mx-0 mt-1 mb-0 p-0 lh-1" id="productsDescriptionTMP">
                            This feature is supposed to simulate a product list. Here, you will be able to add, edit or
                            delete products.
                        </p>
                    </div>
                    <div class="d-flex flex-column w-100 h-80 mx-0 mt-2 mb-2 p-0" id="content">
                        <div class="d-flex flex-row w-100 h-10 mx-0 mt-0 mb-0 p-0">
                            <div class="d-flex flex-row col-3 h-100 mx-0 mt-0 mb-2 p-0 justify-content-start align-items-center">
                                <button class="btn btn-primary w-15 h-85 m-0 p-0" id="PlusBTN"><i class="fas fa-plus"></i></button>
                            </div>
                            <div class="d-flex flex-row col-6 h-100 mx-0 mt-0 mb-2 p-0 justify-content-center align-items-center">
                                <h5 class="m-0 p-0"> List of Products </h5>
                            </div>
                            <div class="d-flex flex-row col-3 h-100 mx-0 mt-0 mb-2 p-0 justify-content-end align-items-center">
                                <input class="form-control w-70 h-85 m-0 p-1" id="SearchProductInput" type="text" placeholder="Type an ID....">
                                <button class="btn btn-primary w-30 h-85 m-0 p-0 ms-1" id="SearchProductBTN"> Search </button>
                            </div>
                        </div>
                        <div class="d-flex flex-column w-100 h-90 mx-0 mt-0 mb-0 p-0" id="ProductsPNL">
                            <div class="d-flex flex-row w-100 h-100 m-0 p-2 align-items-center justify-content-center" id="ProductsPanelPlaceholderPNL">
                                <h6 class="m-0 p-0 tmpcolor_8d8d8d"> No products were found on the list... </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <script src="https://kit.fontawesome.com/3c6c4efe58.js" crossorigin="anonymous"></script>
            <script src="/Assets/Application_Main/base/scripts/js/Modal.js"></script>
            <script src="/Assets/Application_Main/features/products/scripts/js/script.js"></script>
        </body>
    </html>