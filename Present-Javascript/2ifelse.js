function age()
{
var Age;
Age=Number(document.getElementById("age").value);
if(Age>18)
{
    document.write("person is eligible for vote");
}
else{
    document.write("person is not eligible for vote");
}
}