var obj = {name:'khadija',status:'single',education:'inter'}
var {name,status,education} = obj
console.log(name,education)


try {
    addeter ();
}
catch(a){ 
console.log(a)
} 




let click1 = () =>{
    setInterval (displayalert,1000)
}
let a= 0 
let displayalert =() =>{
    a++
    var d= new Date
    document.getElementById('aa').innerHTML = a;
    
    var date = d.getDate()
    var day = d.getMonth()+1
    var year = d.getFullYear()
    var hours = d.getHours()
    var min = d.getMinutes()
    var sec = d.getSeconds()
    
    var full = `date of today:` 
    + date + "/" + day + "/" + year + "/" + hours + "/" + min + "/" + sec 
    
    document.getElementById('dd').innerHTML = full;
    
}

