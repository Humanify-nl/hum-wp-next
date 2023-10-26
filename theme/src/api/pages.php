<?php
add_action('rest_api_init', 'register_rest_pages' );

function register_rest_pages(){
  register_rest_field( array('page'),
    'next_url',
    array(
      'get_callback'    => 'get_rest_page_link',
      'update_callback' => null,
      'schema'          => null,
    )
  );
}

function get_rest_page_link( $object, $field_name, $request ) {
  
  $pages = get_pages();

  return $page_link;

}