document.getElementById('card1').addEventListener('click',function(){
    alert("Board updated successfully")
    const value=document.getElementById('num2');
    const newnum=document.getElementById('num2').innerText;
    const add=parseInt(newnum)+1;
    value.innerText=add;
    const value2=document.getElementById('num1');
    const newnum2=document.getElementById('num1').innerText;
    const add2=parseInt(newnum2)-1;
    value2.innerText=add2;
    //const history=document.getElementById('history');
    const indexdiv=document.getElementById('indexdiv');
    const newdiv= document.createElement('div');
    const para= document.createElement('p');
    para.innerText=`You have Completed The Task fix mobile button issue at 12:48:15 PM`;
    //console.log(para);
    newdiv.append(para);
    //console.log(newdiv);
    indexdiv.append(newdiv);
    newdiv.classList.add('design');
    const btn=document.getElementById('card1');
    btn.disabled=true;
})

