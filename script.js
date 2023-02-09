// Your code here
const table = document.getElementsByTagName("table")[0]
const addRow = document.getElementById("add-row")
const select = document.getElementsByTagName("select")[0]

addRow.addEventListener('click', makeRow)

function makeRow(){
    const row = document.createElement('tr')
    for(let i = 0; i < 20; i++){
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}

table.addEventListener('click', colorize)

function colorize(event){
console.log(event)
event.target.className
if(event.target.className.length){
    event.target.className = ""
}else {
    event.target.className = 'red'
}
}

select.addEventListener('change', callback)

function callback(event){
event.target.className = event.target.value
}
