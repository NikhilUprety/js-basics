let a;
let b;
let c;
function greatest(a,b,c)
{
if(a>b && a>c){
    console.log("a is the greatest")
}
else if(b>c && b>a)
{
   console.log ("b is the greatest")
}
else
{
    console.log("c is the greatest")
}
}
greatest(4,7,3);