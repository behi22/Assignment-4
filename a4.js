//Part a
let ad=0;
let str=prompt("Enter a string");
let l=prompt("Enter a letter");
let str1=str;
let l1=l;
str=str.toLowerCase();
l=l.toLowerCase();
for(let i=0;i<str.length;i++){
   if(str.charAt(i)==l)
       ad++;
}
console.log("The letter "+l1+" appears "+ad+" time(s) in "+str1);

//Part b
let sum=0;
let add=0;

do{
    let num=+prompt("Enter a number");
    if(num>=0){
        add++;
        sum+=num;
    }
    else
        break;
}while(true);

let avg=sum/add;

if(add==0)
    console.log("Error:No positive numbers entered.");
else
    console.log("The average is "+avg);

//Part c
let int=prompt("Enter an integer between 0 & 99");
let flw=1;
let sen="";
if(parseInt(int)>99 || parseInt(int)<0)
    console.log("Error.");
else{
    for(let i1=0;i1<parseInt(int);i1++){
        for(let i2=parseInt(int);i2>0;i2--){
            if(i2==flw)
                sen+=flw;
            else
                sen+=".";
        }
        sen+="\n";
        flw++;
    }
    console.log(sen);
}