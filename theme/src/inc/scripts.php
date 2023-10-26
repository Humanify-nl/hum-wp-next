<?php
add_action('admin_print_styles', function() {

  wp_enqueue_style('admin_style',
    get_stylesheet_directory_uri() .'/assets/css/admin.css',
    false,
    '1.0',
    'all'
  );

});
