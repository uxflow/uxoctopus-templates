<?php 
  /**
   * Post types.
   * Register your post types.
   */

  /**
   * Socials.
   */
  function socials() {
    register_post_type('social', array(
      'labels' => array(
        'name' => __('Redes Sociais'),
        'singular' => __('Rede Social'),
      ),
      'supports' => array(
        'title',
      ),
      'menu_position' => 20,
      'public' => true,
      'has_archive' => true,
      'show_ui' => true,
      'show_in_rest' => true,
      'menu_icon' => 'dashicons-share',
      'rewrite' => array(
        'slug' => 'redes-sociais'
      )
    ));
  };

  add_action('init', 'socials');
?>
