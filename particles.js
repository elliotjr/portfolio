var txt='SELECT * FROM USER WHERE USERNAME = "ELLIOT";'.split('');

var delay=120;
for ( i=0; i<txt.length;i++){
    setTimeout(function(){
        $(".type").append(txt.shift() )
    }, delay * i)
}
