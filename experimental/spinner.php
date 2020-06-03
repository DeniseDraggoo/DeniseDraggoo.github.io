<?PHP
  // Original PHP code by Chirp Internet: www.chirp.com.au
  // Please acknowledge use of this code by including this header.

  $size = array();
  $rotation = $maxw = $maxh = 0;

  // identify images to display
  $dirlist = glob("images/beach*.jpg");
  $num = count($dirlist);

  // calculate the largest image dimensions
  for($i=0; $i < $num; $i++) {
    $img = $dirlist[$i];
    $size[$i] = getimagesize($img);
    if($size[$i][0] > $maxw) $maxw = $size[$i][0];
    if($size[$i][1] > $maxh) $maxh = $size[$i][1];
  }

  // display the carousel html
  echo "<div id=\"stage\" style=\"padding-left: ",($maxw*3/4),"px; height: {$maxh}px;\">\n";
  echo "<div id=\"spinner\" style=\"-webkit-transform-origin: ",($maxw*3/4),"px 0 0;\">\n";
  for($i=0; $i < $num; $i++) {
    $img = $dirlist[$i];
    $padleft = ($maxw - $size[$i][0]);
    $padh = ($maxh - $size[$i][1]) / 2;
    echo "<img style=\"-webkit-transform: rotateY(-",round($rotation,1),"deg) translateX(",($maxw*3/4),"px); padding: {$padh}px 0 {$padh}px ",($padleft + $maxw/2),"px;\" src=\"$img\" {$size[$i][3]} alt=\"\">\n";
    $rotation += 360 / $num;
  }
  echo "</div>\n";
  echo "</div>\n\n";
?>