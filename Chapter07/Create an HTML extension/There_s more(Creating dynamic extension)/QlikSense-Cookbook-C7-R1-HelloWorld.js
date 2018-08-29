define( [
        'jquery'
    ],
    function ( $ ) {
        'use strict';
        return {
	definition: {
    type: "items",
    component: "accordion",
    items: {
        appearancePanel: {
            uses: "settings",
            items: {
                QSPropertyPanel: {
                    ref: "QSDynamicExtension",
                    type: "string",
                    label: "QlikSense extension Text"
                }
            }
        }
    }
},			
            paint: function ( $element, layout ) {
	console.log(layout);
	$element.empty();
              var $helloWorld  = $(document.createElement('div'));
               $helloWorld.html(layout.QSDynamicExtension);
               $element.append($helloWorld);
            }
        };
    } 
);

