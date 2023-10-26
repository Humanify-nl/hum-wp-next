<?php
add_filter( 'acf/json/save_file_name', function( $filename, $post, $load_path ) {

  $filename = str_replace(
    array(
        ' ',
        '_',
    ),
    array(
        '-',
        '-'
    ),
    $post['title']
  );

  if ( ! empty($post['post_type']) ) {
    $filename = 'post-type-' . $post['post_type'];
  }

  if ( ! empty($post['taxonomy']) ) {
    $filename = 'tax-' . $filename;
  }

  $filename = strtolower( $filename ) . '.json';

  return $filename;

}, 10, 3 );