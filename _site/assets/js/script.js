$( function () {

  var socialMenu = $( '.social-nav' ),
    textVal,
    classVal;

  WebFont.load( {
    google: {
      families: [ 'Poppins:400,600,700', 'Source Sans Pro:300,300i,400,400i,500,500i,600,600i,700,700i' ]
    }
  } );

  var faIcon = function ( type, target ) {
    $( target ).each( function ( index ) {
      textVal = $( this ).text();
      classVal = 'fa' + type + ' fa-' + textVal.toLowerCase().split( ' ' ).join( '-' );
      $( this ).wrapInner( '<span class="sr-only"></span>' ).append( '<i class="' + classVal + '"></i>' );
    } );
  };

  faIcon( 'b', $( socialMenu ).find( 'a' ) );

} );
