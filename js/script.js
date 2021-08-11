function printArray(){

    const array = [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ];
    //               0    1    2    3    4    5    6    7    8    9    10

    document.getElementById("arr_1").innerHTML = ( array.join( ' ' ) );

    //---------------------------------

    var array2 = [];
    for ( var i = array.length ; i >= 0 ; i-- ) {
         array2.push( array[ i ] );
    };

    document.getElementById("arr_2").innerHTML = ( array2.join( ' ' ) );

    //----------------------------------

    var array3 = [];
    var i = 0;

    while ( i < array.length ) {
        
        array3.push( array[ i ].toUpperCase( ) );
    
        ++i;
    }

    document.getElementById("arr_3").innerHTML = ( array3.join( ' ' ) );


    //-----------------------------------

    var array4 = [];
    var i = 0;
    do {
        
        array4.push( array[ i ].toLowerCase() );
        ++i;

    } while ( i < array.length );

    document.getElementById("arr_4").innerHTML = ( array4.join( ' ' ) );


    //------------------------------------

    var array5 = [];
    
    for ( var i = 5 ; i <= array.length ; i++ ) {
        
        array5.push( array[ i ] );
    };

    array5.push('');

    for ( var i = 0 ; i < 6 ; i++ ){
        array5.push( array[ i ] );
    }

    document.getElementById("arr_5").innerHTML = ( array5.join( ' ' ) );

    //-------------------------------------

    var array6 = [];

    for ( var i = array5.length ; i >= 0 ; i-- ) {
         array6.push( array5[ i ] );
    };

    array6.push( ' ' );

    document.getElementById("arr_6").innerHTML = ( array6.join( ' ' ) );

    //--------------------------------------

    var array7 = [];
    
    for ( var i = 0 ; i < array.length ; i++ ) {
        array7.push( array[ i ] );
   };

    document.getElementById("arr_7").innerHTML = ( array7.join( '\n' ) );

    //--------------------------------------

    var array8 = [];
    
    for ( var i = 0 ; i < array.length ; i++ ) {
        array8.push( "|" + array[ i ] + "_" );
   };

    document.getElementById("arr_8").innerHTML = ( array8.join( ' ' ) );

    //--------------------------------------

    var array9 = [];
    
    for ( var i = 0 ; i < array.length ; i++ ) {
        array9.push( " " + array[ i ] + " ");
   };

    document.getElementById("arr_9").innerHTML = ( array9.join( '' ) );

    //--------------------------------------

    var array10 = [];

    array10.push( array[0]);

    for ( var i = 1 ; i < array.length ; i++ ) {

        if (  i % 2  == 0 ) {
            array10.push( array[ i ].toUpperCase());
        
        } else {
            array10.push( array[ i ].toLowerCase());

        };
   };

    document.getElementById("arr_10").innerHTML = ( array10.join( ' ' ) );

    //--------------------------------------

    var array11 = [];

    for ( var i = 0 ; i < array.length ; i++ ) {
        
        array11.push( array[ i ] );
        array11.push( array[ i ] );

   };

    document.getElementById("arr_11").innerHTML = ( array11.join( '' ) );

    //--------------------------------------

    var array12 = [];
    
    for ( var i = 0 ; i < array.length ; i++ ) {
        
        array12.push( array[ i ] + " &nbsp " );
   
    };

    document.getElementById("arr_12").innerHTML = ( array12.join( '' ) );

    //--------------------------------------

    var array13 = [];
    
    for ( var i = 0 ; i < array.length ; i++ ) {
        
        array13.push( array[ i ] + "-" );
   
    };


    document.getElementById("arr_13").innerHTML = ( array13.join( '' ) );

}

printArray();
