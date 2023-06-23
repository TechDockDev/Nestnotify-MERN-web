let  i = 0;
function changeVal(){
    for(let j=0; j<5; j++){
        i=j+1
    }
    console.log(i)
}

let k = setTimeout(changeVal, 2000)