<?php
namespace ShopCred;

use ShopCred\Dashboard as Dashboard;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Notice_Manager Class
 */
class Notice_Manager {

	/**
	 * [$registered_notices description]
	 * @var array
	 */
	public $registered_notices = array();

	/**
	 * [get_registered_plugins description]
	 * @return [type] [description]
	 */

	public function get_registered_notices( $page_slug = false ) {

		if ( ! $page_slug ) {
			return $this->registered_notices;
		}

		$page_notices = array_filter( $this->registered_notices, function( $notice ) use ( $page_slug ) {

			if ( is_array( $notice['page'] ) && in_array( $page_slug, $notice['page'] ) ) {
				return true;
			} elseif ( $page_slug === $notice['page'] ) {
				return true;
			}

			return false;
		} );

		if ( ! empty( $page_notices ) ) {
			return array_values( $page_notices );
		}

		return false;
	}

	/**
	 * [get_registered_plugins description]
	 * @return [type] [description]
	 */
	public function register_notice( $notice_args = array() ) {

		$defaults = array(
			'id'            => false,
			'page'          => array (),
			'preset'        => 'alert', // alert, notice
			'type'          => 'info', // info, success, danger, error
			'typeBgColor'   => false, // info, success, danger, error
			'duration'      => false,
			'icon'          => false,
			'title'         => '',
			'message'       => '',
			'buttons'       => array (),
			'customClass'   => '',
		);

		$notice_args = wp_parse_args( $notice_args, $defaults );

		if ( ! $notice_args['id'] || ! $notice_args['page'] || empty( $notice_args['message'] ) ) {
			return false;
		}

		if ( ! is_array( $notice_args['page'] ) ) {
			$pages[] = $notice_args['page'];
			$notice_args['page'] = $pages;
		}

		$this->registered_notices[] = $notice_args;
	}

}
