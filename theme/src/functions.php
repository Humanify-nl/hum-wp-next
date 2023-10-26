<?php
add_action( 'after_setup_theme', function() {

  load_theme_textdomain( 'hum' );

  add_editor_style( array(
    'assets/css/editor.css',
  ) );

  add_theme_support( 'post-thumbnails' );
  
  add_post_type_support( 'page', 'excerpt' );
  remove_theme_support( 'post-formats' );
  remove_action( 'wp_body_open', 'wp_global_styles_render_svg_filters' );

} );

// disable editor
add_filter('use_block_editor_for_post', '__return_false');

include get_template_directory() . '/inc/scripts.php';
include get_template_directory() . '/inc/admin.php';
include get_template_directory() . '/inc/images.php';
include get_template_directory() . '/inc/excerpt.php';

// REST
include get_template_directory() . '/api/wp_app_password.php';
include get_template_directory() . '/api/featured_image_url.php';
//include get_template_directory() . '/api/pages.php';


add_action( 'rest_api_init', function() {
  
  // rest URL changed back (see wp-config)
  add_filter('rest_url', function($url) {
    return str_replace(WP_HOME, WP_HOME_ADMIN, $url);
  }, 10, 4);
  // fix /wp-admin links
  add_filter('redirect_canonical', '__return_false');

});

