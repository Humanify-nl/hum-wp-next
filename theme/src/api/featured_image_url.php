<?php
add_action('rest_api_init', 'register_rest_endpoints' );
function register_rest_endpoints(){
  register_rest_field( array('post', 'page'),
    'featured_img_url',
    array(
      'get_callback'    => 'get_rest_featured_image',
      'update_callback' => null,
      'schema'          => null,
    )
  );

  register_rest_field( array('page'),
  'next_path',
    array(
      'get_callback'    => 'get_rest_real_url',
      'update_callback' => null,
      'schema'          => null,
    )
  );
}

function get_rest_featured_image( $object, $field_name, $request ) {
  if( $object['featured_media'] ){
    $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
    return $img[0];
  }
  return false;
}

function get_rest_real_url( $object, $field_name, $request ) {
  if( $object['id'] ){
    $pageLink = get_permalink( $object['id'] );
    $parseLink = wp_parse_url($pageLink);
    
    $path = $parseLink['path'];
    // remove slash in front
    $trim = ltrim($path, '/');
    $path = $trim;
    
    return $path;
  }
  return false;
}