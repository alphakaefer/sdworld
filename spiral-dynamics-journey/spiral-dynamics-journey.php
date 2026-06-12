<?php
/**
 * Plugin Name:       Spiral Dynamics Journey
 * Plugin URI:        https://github.com/alphakaefer/sdworld
 * Description:       Interaktive Scroll-Reise durch die Ebenen von Spiral Dynamics. Erlebe die Konflikte jeder Ebene – und ihre Auflösung erst auf der nächsten. Einbindung per Shortcode [spiral_dynamics_journey].
 * Version:           1.0.0
 * Requires at least: 5.0
 * Requires PHP:      7.0
 * Author:            sdworld
 * Author URI:        https://github.com/alphakaefer/sdworld
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       spiral-dynamics-journey
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'SDJ_VERSION', '1.0.0' );
define( 'SDJ_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

/**
 * Assets registrieren (geladen werden sie erst, wenn der Shortcode benutzt wird).
 */
function sdj_register_assets() {
	wp_register_style(
		'sdj-style',
		SDJ_PLUGIN_URL . 'assets/css/sdj.css',
		array(),
		SDJ_VERSION
	);
	wp_register_script(
		'sdj-data',
		SDJ_PLUGIN_URL . 'assets/js/sdj-data.js',
		array(),
		SDJ_VERSION,
		true
	);
	wp_register_script(
		'sdj-app',
		SDJ_PLUGIN_URL . 'assets/js/sdj-app.js',
		array( 'sdj-data' ),
		SDJ_VERSION,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'sdj_register_assets' );

/**
 * Shortcode [spiral_dynamics_journey]
 *
 * Attribute:
 *   locked="yes|no"   – Ebenen erst freischalten, wenn der Übergang erlebt wurde (Standard: yes)
 *   progress="yes|no" – Fortschritt im Browser speichern, localStorage (Standard: yes)
 *
 * Beispiel: [spiral_dynamics_journey locked="no"]
 */
function sdj_shortcode( $atts ) {
	$atts = shortcode_atts(
		array(
			'locked'   => 'yes',
			'progress' => 'yes',
		),
		$atts,
		'spiral_dynamics_journey'
	);

	wp_enqueue_style( 'sdj-style' );
	wp_enqueue_script( 'sdj-app' );

	return sprintf(
		'<div class="sdj-app" data-locked="%s" data-progress="%s"></div>',
		esc_attr( $atts['locked'] ),
		esc_attr( $atts['progress'] )
	);
}
add_shortcode( 'spiral_dynamics_journey', 'sdj_shortcode' );
add_shortcode( 'sd_journey', 'sdj_shortcode' );
