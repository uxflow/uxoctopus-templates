<?php
  wp_footer(); 

  $location = get_template_directory_uri();

  $main = $location . '/dist/index.js';
  $vendor = $location . '/dist/vendor.js';
?>
  
  <script src="<?php echo $vendor ?>" type="module"></script>
  <script src="<?php echo $main ?>" type="module"></script>

  </body>
</html>
