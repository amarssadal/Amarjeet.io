<?php
    $current = $_GET['page'];
    $resp = array('tablet-landscape-outline', 'arrow-forward-outline', 'phone-portrait-outline');
    $techAvail = array('logo-javascript', 'logo-html5', 'logo-css3');
    $tech = array();
    switch ($current) {
        case 'bike':
            $title = 'Bike Builder';
            array_push($tech, $techAvail[0], $techAvail[1], $techAvail[2]);
            $ionics = array_merge($tech, $resp);
        break;
        case 'contact':
            $title = 'Contact Tracing';
            array_push($tech, $techAvail[0], $techAvail[1], $techAvail[2]);
            $ionics = array_merge($tech, $resp);
        break;
        case 'snake':
            $title = 'Snake Game';
            array_push($tech, $techAvail[0], $techAvail[1], $techAvail[2]);
            $ionics = array_merge($tech, $resp);
        break;
        case 'corona':
            $title = 'Corona Timer';
            array_push($tech, $techAvail[0], $techAvail[1], $techAvail[2]);
            $ionics = array_merge($tech, $resp);
        break;
        case 'calc':
            $title = 'Calculator';
            array_push($tech, $techAvail[0], $techAvail[1], $techAvail[2]);
            $ionics = array_merge($tech, $resp);
        break;
        case 'todo':
            $title = 'To-Do App';
            array_push($tech, $techAvail[0], $techAvail[1], $techAvail[2]);
            $ionics = array_merge($tech, $resp);
        break;
        case 'Circles':
            $title = 'Canvas Circles';
            array_push($tech, $techAvail[0], $techAvail[1], $techAvail[2]);
            $ionics = array_merge($tech, $resp);
        break;
    }
    include ('incl_head.php');
?>
    </head>
    <body class="bodySub">
        <div class="wrapper">
            <div class="topBar">
                <div class="logoBoxSub">
                    AMARJEET.IO
                </div>
                <div class="infoBoxSub">
                    <div class="pageTitleSub">
                        Bike Builder
                    </div>
                    <div class="linkTechSub">
                        <?php
                            foreach ($ionics as $val) {
                                echo '<ion-icon class="ionicons" name="' . $val . '"></ion-icon>';
                            }
                        ?>
                    </div>
                    <div class="linkIconsSub">
                        <a href="" target="_blank">
                            <ion-icon class="ionicons git sub" name="logo-github"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
            <?php include ('sub/' . $current . '/index.html') ?>
        </div>
        <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
    </body>
</html>