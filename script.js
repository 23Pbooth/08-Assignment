


document.getElementById("btnsubmit").onclick = function(){

const sentence = document.getElementById("txtSentence").value;
const times = parseInt(document.getElementById("numTimes").value);
const ListBody = document.getElementById("list_container");
    
ListBody.innerHTML = ''
if (isNaN(times) || times < 1){
    alert("Please enter a valid number greater than 0")
}
    

for(i = 1; i <= times; i++){
    const listItem = document.createElement("li")
    listItem.textContent = sentence;
    ListBody.appendChild(listItem);
}


}