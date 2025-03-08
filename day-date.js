const day=document.getElementById('day');
 const today=new Date();
 const dayindex=today.getDay();
 const daynames=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
 const  todayname=daynames[dayindex];
 day.innerText=todayname;
 date.innerText=today.toLocaleDateString();