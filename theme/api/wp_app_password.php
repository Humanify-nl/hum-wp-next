<?php
// make auth available over non-https (unsafe!)
add_filter( 'wp_is_application_passwords_available', '__return_true' );