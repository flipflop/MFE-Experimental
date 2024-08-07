// http://stackoverflow.com/questions/15377161/generate-unique-number-based-on-string-input-in-javascript

// A relative short unique id generated by the following:

let tinyId = (() => {

  let ___uqidc = null;

  function lz(i,c) {
    if( typeof c != 'number' || c <= 0 || (typeof i != 'number' && typeof i != 'string') ) { 
      return i; 
    }
    
    i+='';

    while( i.length < c ) { i='0'+i; }
    
    return i;  
  }

  function getHashCode(s) {
   var hash=0,c=(typeof s === 'string')?s.length:0,i=0;
   
   while(i<c) {
     hash = ((hash<<5)-hash)+s.charCodeAt(i++);
     //hash = hash & hash; // Convert to 32bit integer
   }

   return ( hash < 0 )?((hash*-1)+0xFFFFFFFF):hash; // convert to unsigned
  }

  function uniqueId( s, bres ) { 
    var i = null;
    if( s === undefined || typeof s !== 'string' ) {
      if( !___uqidc ) { 
        ___uqidc=0; 
      }
      else { 
        ++___uqidc; 
      } 
      
      var od = new Date();
           i = s = od.getTime()+''+___uqidc; 
    }
    
    else { 
      i = getHashCode( s );
    }
    
    return ((bres)?'res:':'')+i.toString(32)+'-'+lz((s.length*4).toString(16),3);  
  }

  return {
    uniqueId : uniqueId
  }

})();

export default tinyId;
// usage:
// tinyId.uniqueId('org-name--team-name--app-name');