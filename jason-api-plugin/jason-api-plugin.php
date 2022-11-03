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
        // add_action('init' , array( $this, 'custom_post_type' ) );
    }

    function register(){
          add_action( 'wp_enqueue_scripts' , array( $this, 'enqueue' ));
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
    // function custom_post_type(){
    //     register_post_type( 'Platforms', [ 
    //         'public' => true,
    //         'label' => 'Platforms',
    //     ]);
    // }
    function enqueue(){
        wp_enqueue_style( 'mypluginstyle' , plugins_url( '/assets/style.css', __FILE__ )  );
        wp_enqueue_style('bootstrap_css', '//stackpath.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css');
        wp_enqueue_style('font-awesome        ', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css');
      
        wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);
        wp_enqueue_script( 'mypluginscript' , plugins_url( '/assets/api.js', __FILE__ )  );

        wp_localize_script('mypluginscript', 'myScript', array(
            'pluginsUrl' => plugins_url(),
            'siteUrl' => site_url(),
        ));
    }





}

if( class_exists('Jasonapiplugin')){
   $jasonapiplugin = new Jasonapiplugin();
   $jasonapiplugin -> register();
}

function tbare_wordpress_plugin_demo($atts) {
    $Content .= '
    <div class="row desktop casino-list-header">
        <div class="col-3 text-center">
          <p>Casino</p>
        </div>

        <div class="col-3 text-center">
         <p>Bonus</p>
        </div>

        <div class="col-3 text-center">
         <p>Features</p>
        </div>

        <div class="col-3 text-center">
         <p>Play</p>
        </div>

        

    </div>

<div class="casino-lists">
</div>
'
    ;
     
    return $Content;
}

add_shortcode('tbare-plugin-demo', 'tbare_wordpress_plugin_demo');


register_activation_hook( __FILE__, array( $jasonapiplugin , 'activate' ));

register_deactivation_hook( __FILE__, array( $jasonapiplugin , 'deactivate' ));

