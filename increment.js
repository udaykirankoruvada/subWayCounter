var count=0;
var update;
// var today=new Date();
// var time=today.getMinutes();
// var hourNow=today.getHours();


function increment()
{
    count+=1;
    update=document.getElementById('count-el');
    update.textContent=count;
}

function save()
{
    var show;
    console.log(count)
    show=document.getElementById('saveshow');
    show.textContent+= count +" - "
    update.textContent=0;
    count=0
}