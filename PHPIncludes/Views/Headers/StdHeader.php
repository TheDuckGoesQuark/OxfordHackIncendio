<!DOCTYPE html>
  <html>
  <head>
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php

    if(isset($pageRequirements)){
      $cssFiles = $pageRequirements->getFiles("css");

      $pageTitle = $pageRequirements->getFiles("title");

    }

    if(isset($cssFiles)){
    	foreach($cssFiles as  $fileName) {
   			echo '<link rel="stylesheet" type="text/css" href="' .  $fileName .  '">'; 		
       	}
    }

    //bootstrap
    echo ' <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" cossorigin="anonymous">';
    echo '<script src="https://js.pusher.com/3.2/pusher.min.js"></script>';
    
    //Echo out the page title if it is set
    if(isset($pageTitle) && $pageTitle != ""){

      echo '<title>' . $pageTitle . '</title>';  
    
    }
    
    ?>

  </head>