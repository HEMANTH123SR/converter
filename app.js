let inputBox=document.getElementById("input-box")
function btnCliked(){
    document.getElementById("l-p").innerText=`${inputBox.value} meters = ${inputBox.value*3.281} feet`
    document.getElementById("v-p").innerText=`${inputBox.value} liters = ${inputBox.value*0.264} gallons `
    document.getElementById("m-p").innerText=`${inputBox.value} kilos = ${inputBox.value*2.204} pounds`

console.log("its cliked")
}

