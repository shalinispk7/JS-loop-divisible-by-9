// 16.divisible by 9
let n= parseInt(prompt("Enter Number"));
let i=1;
sum=0;
document.write("Numbers between "+ i+" and "+n +": ");
for(i=1;i<=n;i++){
	if(i%9==0){
		document.write(" "+ i+" ");
		sum=sum+i;
	}
}
 document.write("<br>");
document.write("The sum is: "+sum);
