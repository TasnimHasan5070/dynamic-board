const day=document.getElementById('day');
 const today=new Date();
 const dayindex=today.getDay();
 const daynames=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
 const  todayname=daynames[dayindex];
 day.innerText=todayname;
 //date.innerText=today.toLocaleDateString();
 const monthnames=['january','february','march','april','may','june','july','august','september','october','november','december'];
 const datenum=today.getDate();
 const newmonth=today.getMonth();
 const month=monthnames[newmonth];
 const year=today.getFullYear();
 date.innerText=datenum+ " "+month+" "+ " " +year;