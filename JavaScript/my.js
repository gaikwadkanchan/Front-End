var today= Date();
var day= today.getDay();
var daylist='["sunday","Monday","tuesday","wednesday","Thursday","Friday","saturday"];
console.log("Today is :");
var hour=today.getHour();
var minute=today.getMinutes();
var second=today.getSeconds();
var prepand=(hour >=12)? "PM" : "AM";
hour=(hour >=12)? hour -12: hour;
if(hour==0 && prepand=='PM')
{
    if(minute===0 && second===0)
    {
        hour=12;
        prepand='Noon';
    }
    else{
        hour=12;
        prepand='PM'; 
    }
}
if(hour==0 && prepand=='AM')
{
    if(minute===0 && second===0)
    {
        hour=12;
        prepand='Midnight';
    }
    else{
        hour=12;
        prepand='AM'; 
    }
}
console.log("Current Time : "+hour + prepand+" : "+minute+" : "+second);