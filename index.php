<?php
    $techAvail = array('logo-javascript', 'logo-html5', 'logo-css3');
    $resp = array('tablet-landscape-outline', 'arrow-forward-outline', 'phone-portrait-outline');

    $projects = array(
        'bike' => array(
            'title' => 'Bike Builder',
            'techList' => array_merge(array($techAvail[0], $techAvail[1], $techAvail[2]), $resp),
            'gitLink' => 'gitlink'
        ),
        'contact' => array(
            'title' => 'Contact Tracing',
            'techList' => array_merge(array($techAvail[0], $techAvail[1], $techAvail[2]), $resp),
            'gitLink' => 'gitlink'
        ),
        'snake' => array(
            'title' => 'Snake Game',
            'techList' => array_merge(array($techAvail[0], $techAvail[1], $techAvail[2]), $resp),
            'gitLink' => 'gitlink'
        ),
        'corona' => array(
            'title' => 'Corona Timer',
            'techList' => array_merge(array($techAvail[0], $techAvail[1], $techAvail[2]), $resp),
            'gitLink' => 'gitlink'
        ),
        'calc' => array(
            'title' => 'Calculator',
            'techList' => array_merge(array($techAvail[0], $techAvail[1], $techAvail[2]), $resp),
            'gitLink' => 'gitlink'
        ),
        'todo' => array(
            'title' => 'To-Do App',
            'techList' => array_merge(array($techAvail[0], $techAvail[1], $techAvail[2]), $resp),
            'gitLink' => 'gitlink'
        ),
        'canvas' => array(
            'title' => 'Canvas Circles',
            'techList' => array_merge(array($techAvail[0], $techAvail[1], $techAvail[2]), $resp),
            'gitLink' => 'gitlink'
        ),
    );

    include ('incl_head.php');
?>
    <body class="mainBody">
        <div class="wrapper">
            <div class="bg">
                <span>BIKE BUILDER</span>
            </div>
            <div class= "gitLinker">
                <span><a href="https://github.com/amarssadal/Amarjeet.io" target="_blank">View website source on Git</a></span>
                <ion-icon class="mainGit" name="logo-github"></ion-icon>
            </div>
            <div class="logoBox">
                <img class="logoImg" src="images/logo.png">
            </div>
            <div class="linkBox">
                <div class="link">
                <!-- EMPTY DIV TO SPACE OUT THE FIRST LINKBOX 1000VH DOWN -->
                </div>

                <?php
                    foreach($projects as $project) {
                        $title = $project['title'];
                        if (strpos($title, ' ') !== false) {
                            $temp = strpos($title, ' ');
                            $link = strtolower(substr($title, 0, $temp));
                        } else {
                            $temp = $title;
                            $link = strtolower($temp);
                        }
                        
                        $tech = $project['techList'];
                        $git = $project['gitLink'];
                        echo '
                            <div class="link ' . $link . '">
                                <div class="linkSub">
                                    <div class="linkTitle">' . strtoupper($title) . '</div>
                                        <div class="linkImage">
                                            <a href="sub.php?page='. $link . '">
                                                <img class="image" src="images/thumbnails/'. $link . '1.jpg" alt="'. $title . ' Image 1" />
                                            </a>
                                            <a href="sub.php?page='. $link . '">
                                                <img class="image" src="images/thumbnails/'. $link . '2.jpg" alt="' . $title . ' Image 2" />
                                            </a>
                                        </div>
                                        <div class="linkTech">
                                            ';
                                            foreach ($tech as $val) {
                                                echo '<ion-icon class="ionicons" name="' . $val . '"></ion-icon>';
                                            };
                                        echo '</div>
                                        <div class="linkIcons">
                                            <a href="' . $git . '" target="_blank">
                                                <ion-icon class="ionicons git" name="logo-github"></ion-icon>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ';
                    }
                ?>
            </div>
        <script src="main.js"></script>
    </body>
</html>