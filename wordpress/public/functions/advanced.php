<?php
  /**
   * Save JSON in folder '/data'.
   */
  function save($path) {
    $path = get_stylesheet_directory() . '/data';

    return $path;  
  }

  /**
   * Load JSON in folder '/data'.
   */
  function load($paths) {  
    unset($paths[0]);

    $paths[] = get_stylesheet_directory() . '/data';

    return $paths;   
  }

 add_filter('acf/settings/save_json', 'save');
 add_filter('acf/settings/load_json', 'load');
?>
