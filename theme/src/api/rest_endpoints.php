<?php
function register_rest_endpoints(){
  register_rest_field( array('post', 'page'),
  'featured_img_url',
  array(
    'get_callback'    => 'get_rest_featured_image',
    'update_callback' => null,
    'schema'          => null,
    )
  );
  
  register_rest_field( array('post', 'page'),
  'next_path',
  array(
    'get_callback'    => 'get_rest_path',
    'update_callback' => null,
    'schema'          => null,
    )
  );

  register_rest_field( array('post', 'page'),
  'next_path_array',
  array(
    'get_callback'    => 'get_rest_path_array',
    'update_callback' => null,
    'schema'          => null,
    )
  );

  register_rest_field( 'attachment',
  'next_srcset',
  array(
    'get_callback'    => 'get_rest_media_srcset',
    'update_callback' => null,
    'schema'          => null,
    )
  );
}
add_action('rest_api_init', 'register_rest_endpoints' );

function get_rest_featured_image( $object, $field_name, $request ) {
  if( $object['featured_media'] ){
    $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
    return $img[0];
  }
  return false;
}

function get_rest_path_array( $object, $field_name, $request ) {
  if( $object['id'] ){
    $pageLink = get_permalink( $object['id'] );
    $parseLink = wp_parse_url($pageLink);
    
    $path = $parseLink['path'];
    // remove slash
    $path = ltrim($path, '/');
    $path = rtrim($path, '/');
    // explode for dynamic route [ part1 / part2 ]    
    $path = explode("/", $path);
    return $path;
  }
  return false;
}

function get_rest_path( $object, $field_name, $request ) {
  if( $object['id'] ){
    $pageLink = get_permalink( $object['id'] );
    $parseLink = wp_parse_url($pageLink);
    
    $path = $parseLink['path'];
    // remove slash
    //$path = ltrim($path, '/');

    return $path;
  }
  return false;
}


function get_rest_media_srcset( $object, $field_name, $request ) {
  if ( $object['id']) {
    $srcset = wp_get_attachment_image_srcset( $object['id'] );
    return $srcset;
  }
  return false;
}