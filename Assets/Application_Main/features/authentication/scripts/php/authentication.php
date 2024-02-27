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
                        <h2 class="mx-0 mt-0 mb-1 p-0 tmpcolor_111111" id="productsTitleTMP"> Feature II: Authentication </h2>
                        <p class="mx-0 mt-1 mb-0 p-0 lh-sm" id="productsDescriptionTMP">
                            This feature is supposed to simulate an authentication method, where you only be able to see
                            a page's content if you are logged in. <br>  When you're ready, just type anything in the boxes
                        </p>
                    </div>
                    <div class="d-flex flex-column w-100 h-80 mx-0 mt-2 mb-2 p-0" id="content">

                        <div class="d-flex flex-column w-100 h-30 m-0 p-0 justify-content-center align-items-center">
                            <h5 class="m-0 p-0"> Correct Credentials: </h5>
                            <p class="m-0 p-0"><i> Username: admin </i></p>
                            <p class="m-0 p-0"><i> Password: admin </i></p>
                        </div>
                        <div class="d-flex flex-column w-25 h-50 mx-auto my-0 p-0 justify-content-start align-items-center">
                            <form class="d-flex flex-column w-100 m-0 p-0" id="LoginPNL">
                                <label class="m-0 p-0" for="username">Username:</label>
                                <input class="mx-0 my-1 p-0" type="text" id="username" name="username">
                                <label class="m-0 p-0" for="password">Password:</label>
                                <input class="mx-0 my-1 p-0" type="password" id="password" name="password">
                                <input class="mx-0 my-3 p-0" type="submit" value="Login" id="LoginBTN">
                            </form>
                            <div class="d-none flex-column w-100 h-20 m-0 p-0 justify-content-center align-items-center text-center" id="LoginErrorPNL">
                                <p class="m-0 p-0 tmpcolor_ed4337" id="LoginErrorTMP"> Invalid Credentials! </p>
                            </div>
                            <form class="d-none flex-column w-100 m-0 p-0 justify-content-center align-items-center text-center" id="LoginSuccessPNL">
                                <p class="w-100 m-0 p-0 tmpcolor_03c41e" id="LoginSuccessTMP"> You're logged in! </p>
                                <input class="w-100 mx-0 my-3 p-0" type="submit" value="Logout" id="LogoutBTN">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://kit.fontawesome.com/3c6c4efe58.js" crossorigin="anonymous"></script>
            <script src="/Assets/Application_Main/features/authentication/scripts/js/script.js"></script>
        </body>
    </html>
