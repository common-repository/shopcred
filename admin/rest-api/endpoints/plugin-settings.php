<?php
namespace ShopCred\Endpoints;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Posts class
 */
class Plugin_Settings extends Base {

	/**
	 * Returns query method
	 *
	 * @return string
	 */
	public function get_method() {
		return 'POST';
	}

	/**
	 * Returns route name
	 *
	 * @return string
	 */
	public function get_name() {
		return 'plugin-settings';
	}

	/**
	 * Returns plugin settings callback
	 *
	 * @param  $request
	 *
	 * @return \WP_Error|\WP_HTTP_Response|\WP_REST_Response
	 */
	public function callback( $request ) {

		$data = $request->get_params();

		$current = get_option( 'shopcred-settings', array() );

		if ( is_wp_error( $current ) ) {
			return rest_ensure_response( [
				'status'  => 'error',
				'message' => esc_html__( 'Server Error', 'shopcred' ),
			] );
		}

		foreach ( $data as $key => $value ) {
			$current[ $key ] = is_array( $value ) ? $value : esc_attr( $value );
		}

		update_option( 'shopcred-settings', $current );

		return rest_ensure_response( [
			'status'  => 'success',
			'message' => esc_html__( 'Settings have been saved', 'shopcred' ),
		] );

	}

}

