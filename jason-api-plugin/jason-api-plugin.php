<?php
/**
 * @package 
 */
/*
Plugin Name: Jason Api Plugin
Description: This is my api plugin
Version:1.0.0
Author: Iasonas Tzitzis
Author URI:https://www.linkedin.com/in/iasonas-tzitzis-131509186/
*/


if ( ! defined( 'ABSPATH') ){
    die;
}

class Jasonapiplugin{

    function __construct() {
        add_action('init' , array( $this, 'custom_post_type' ) );
    }

    function activate(){
        flush_rewrite_rules();

    }
    function deactivate(){
        flush_rewrite_rules(); 
    }
    function uninstall(){
        flush_rewrite_rules();
    }
    function custom_post_type(){
        register_post_type( 'Platforms', [ 
            'public' => true,
            'label' => 'Platforms',
        ]);
    }



}

if( class_exists('Jasonapiplugin')){
   $jasonapiplugin = new Jasonapiplugin();
}



register_activation_hook( __FILE__, array( $jasonapiplugin , 'activate' ));

register_deactivation_hook( __FILE__, array( $jasonapiplugin , 'deactivate' ));

