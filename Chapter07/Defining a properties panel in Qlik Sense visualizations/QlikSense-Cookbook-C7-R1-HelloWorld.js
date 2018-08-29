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
                },
				
        sorting: {
            uses: "sorting"
        }
        		
            }
        }
    }
},			
            paint: function ( $element, layout ) {
	//console.log(layout);
	 console.info('paint >> layout >> ', layout);
	$element.empty();
              var $helloWorld  = $(document.createElement('div'));
	// Variable holding the output
	var html = '<b>Property values:</b><br/>';
	html += 'Title: ' + layout.title + '<br/>';
	html += 'SubTitle: ' + layout.subtitle + '<br/>';
           // Assigning the variable to our output container
    $helloWorld.html( html );    			   
               $element.append($helloWorld);
            }
        };
    } 
);
	
