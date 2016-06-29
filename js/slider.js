var slider = {
    
    /*
    DEFAULT SETTINGS OF THE SLIDER    
    */
    
    defaultData: {
        container: null, //default value
        speed: 1234,
        autoplay: false,
        direction: 'horizontal',
        arrows: false,
        pagination: false,
        autodirection: 'left',
        loop: true,
        widthContainer: null,
        responsive: null
    },
    
    init: function(data){ 
        console.log(data);
        this.extendedData = this.extend(data)

        //this.extendedData = this.extend(data);
        console.log(this.extendedData)
        //this.mergingResult = this.extend(anyOuterArgument);
       // console.log(this.mergingResult);
    },
    
    extend: function(dupacycki){
       console.log(dupacycki)   
       var dupeczki = $.extend(this.defaultData, dupacycki);
       return dupeczki;
    }
    

    /*
    	function extend(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
}

// example
var a = { foo: true }, b = { bar: false };
var c = extend(a, b);

console.log(c);
    
    
    
    
        1. mergowanie danych od usera z danymi defaultowymi -> extend
        <html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery.extend demo</title>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>
 
<div id="log"></div>
 
<script>
var defaults = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
 
// Merge defaults and options, without modifying defaults
var settings = $.extend( {}, defaults, options );
 
// Assuming JSON.stringify - not available in IE<8
$( "#log" ).append( "<div><b>defaults -- </b>" + JSON.stringify( defaults ) + "</div>" );
$( "#log" ).append( "<div><b>options -- </b>" + JSON.stringify( options ) + "</div>" );
$( "#log" ).append( "<div><b>settings -- </b>" + JSON.stringify( settings ) + "</div>" );
</script>
 
</body>
</html>
    */
    
}

var dataUser = {
    container: $('#slider'), // wymagane
    speed: 500,
    autoplay: true,
    direction: 'vertical',
    arrows: true,
    pagination: true,
    autodirection: 'left',
    loop: true 
}





slider.init(dataUser);