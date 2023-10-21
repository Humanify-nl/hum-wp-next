<?php
/**
 * Admin mods
 *
 * @package hum-fse-6
 */

/**
 * Remove comments from admin bar
 *
 */
add_action( 'wp_before_admin_bar_render', function(){

  global $wp_admin_bar;
	$wp_admin_bar->remove_menu('comments');

} );


/**
 * Remove comment links from admin bar
 *
 */
add_action( 'init', function() {
  
	if (is_admin_bar_showing()) {
		remove_action( 'admin_bar_menu', 'wp_admin_bar_comments_menu', 60 );
  }

} );


// Custom footer text 
add_filter( 'admin_footer_text', function() {

  _e('Realisatie: <strong><a href="https://humanify.nl" target="_blank">Humanify websites</a></strong>', 'humtest');
  echo '<br />';
  echo '<small style="color: white; border-radius: 2px; padding: 0 4px 1px 4px; margin-right: 3px; background-color: #8892BF">PHP v' . (!empty(phpversion()) ? phpversion() : '?') . '</small>';
  echo '<small style="color: white; border-radius: 2px; padding: 0 4px 1px 4px; margin-right: 3px; background-color: #2F99A3">MySQL v' . (!empty(mysqli_get_client_version()) ? mysqli_get_client_version() : '?') . '</small>';

} );


// Clean dashboard
function hum_custom_dashboard_widgets() {

  global $wp_meta_boxes;
  wp_add_dashboard_widget( 'custom_help_widget', 'Humanify WordPress', 'hum_custom_dashboard_box', '', '', 'normal', 'high' );
}

function hum_custom_dashboard_box() {

    echo '<a href="https://humanify.nl" target="_blank">';
        echo '<img style="width: 180px; padding: 10px 0;" src="' . get_template_directory_uri() . '/assets/images/logo.png" alt="Humanify websites"/>';
    echo '</a>';
    echo '<div>';
      _e('Welkom op het dashboard van ' . get_bloginfo('title') . '.<br/><br/> Vragen of problemen? Aarzel niet om contact op te nemen via:<br/> <a href="mailto:rob@humanify.nl">rob@humanify.nl</a> of <a href="tel:+31630024662">+31 6 300 24 662</a>.</p>', 'hum-core' );
    echo '</div>';
}

add_action( 'wp_dashboard_setup', 'hum_custom_dashboard_widgets' );


function hum_remove_dashboard_metaboxes() {

  remove_action( 'welcome_panel', 'wp_welcome_panel' );
  remove_meta_box( 'dashboard_primary', 'dashboard', 'side' );
  remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' );
  remove_meta_box( 'dashboard_activity', 'dashboard', 'normal');
}
add_action( 'wp_dashboard_setup', 'hum_remove_dashboard_metaboxes' );


// Login logo
add_action( 'login_head', function() {

  $logo_path = '/assets/images/logo.png';
	if( ! file_exists( get_stylesheet_directory() . $logo_path ) )
		return;

	$logo = get_stylesheet_directory_uri() . $logo_path;
    ?>
    <style type="text/css">
    .login h1 a {
        background-image: url(<?=$logo;?>);
        background-size: contain;
        background-repeat: no-repeat;
		    background-position: center center;
        display: block;
        margin-bottom: 20px;
        overflow: hidden;
        text-indent: -9999em;
        width: 312px;
        height: 100px;
    }
    </style>
    <?php

} );


// Login Logo URL
function hum_login_header_url( $url ) {
  return esc_url( home_url() );
}
add_filter( 'login_headerurl', 'hum_login_header_url' );
add_filter( 'login_headertext', '__return_empty_string' );


// admin columns
include get_template_directory() . '/inc/admin-columns/admin-columns-posts.php';
include get_template_directory() . '/inc/admin-columns/admin-columns-pages.php';