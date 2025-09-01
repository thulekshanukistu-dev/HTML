
function series(n){
  let fact=1;
  let serieses = "";
  for(let i=1; i<=n; i++){
    fact*=i;
    serieses += fact + ", ";
    
  }
console.log(serieses);
}
series(5);

function printfibonacciseries(n){
  let seriesfibo=""
  if (n==1){
    seriesfibo="0";
  }
   else if (n==2){
     seriesfibo="0,1";
      }
      else if (n>2){
     let a=0 ,b=1 ,c=1;
     for(let i=3; i<=n; i++){
      seriesfibo+=(","+c);
      c=a+b;
      a=b;
      b=c;
      
     }

  }

console.log(seriesfibo);

    }
printfibonacciseries(9)
