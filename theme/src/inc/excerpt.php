<?php
function hum_custom_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'hum_custom_excerpt_length', 999 );