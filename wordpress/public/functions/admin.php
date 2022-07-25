<?php 
  /**
   * Register menu.
   */
  require_once get_template_directory() . '/functions/class-wp-bootstrap-navwalker.php';

  register_nav_menus( array(
    'main' => __('Primary', 'uxoctopus'),
  ));

  /**
   * Add theme support.
   */
  function theme_support() {
    /**
     * Add custom logo.
     */
    $logo_width  = 120;
	  $logo_height = 90;

    /**
     * If the retina setting is active, 
     * double the recommended width and height.
     */
    if (get_theme_mod('retina_logo', false)) {
      $logo_width  = floor($logo_width * 2);
      $logo_height = floor($logo_height * 2);
    }

    $defaults = array(
      'width' => $logo_width,
      'height' => $logo_height,
      'flex-width' => true,
      'flex-height' => true,
    );

    add_theme_support('custom-logo', $defaults);

    /**
     * Excerpt text.
     */
    function excerpt($length) {
      return 10;
    }

    /**
     * Add support svg.
     */
    function cc_mime_types($mimes) {
      $mimes['svg'] = 'image/svg+xml';
      return $mimes;
    }

    /**
     * Add support for title tag.
     */
    add_theme_support('title-tag');

    /**
     * Add supports for thumbnail.
     */
    add_image_size('uxoctopus-fullscreen', 1980, 9999);

    add_theme_support('post-thumbnails');

    set_post_thumbnail_size(1280, 9999);

    /**
     * Add support for full and wide align images.
     */
    add_theme_support('align-wide');

    /**
     * Add support for responsive embeds.
     */
    add_theme_support('responsive-embeds');

    /**
     * Add theme support for selective refresh for widgets.
     */
	  add_theme_support( 'customize-selective-refresh-widgets' );

    /**
     * Add filters.
     */
    add_filter('excerpt_length', 'excerpt');
    add_filter('upload_mimes', 'cc_mime_types');
  }

  /**
   * Add actions.
   */
  add_action('after_setup_theme', 'theme_support');
?>
