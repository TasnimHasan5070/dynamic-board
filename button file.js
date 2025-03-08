document.getElementById('theme').addEventListener('click',function(){
    //const theme= document.getElementById('theme').innerHTML;
    //console.log(theme);
    const color={
        r: Math.floor(Math.random()*255),
        g: Math.floor(Math.random()*255),
        b: Math.floor(Math.random()*255)
    };
      colorstr='rgb('+color.r+","+color.g+","+color.b+')';
       document.body.style.backgroundColor=colorstr;
    })


    

