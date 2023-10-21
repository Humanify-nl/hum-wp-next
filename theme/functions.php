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
