define( [
        'jquery'
    ],
    function ( $ ) {
        'use strict';
        return {
	   paint:function ( $element, layout ) {
	   $element.empty();
                var $helloWorld  = $( document.createElement( 'div' ) );
                $helloWorld.html('Hello World from the extension "QlikSense Cookbook - HelloWorld"<br/>');
                $element.append( $helloWorld);
            }
        };
    } );
