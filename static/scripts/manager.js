let rows = document.querySelectorAll(".manager .manager-rows .row")

// #region CheckBox
let checkBox = document.querySelectorAll(".checkbox")
let checkBoxAll = document.querySelector(".check-all")
checkBox.forEach(e => e.addEventListener("click", function(){
    let state = e.getAttribute("data-state")
    if(state=="off"){
        e.setAttribute("data-state", "on")
    }else{e.setAttribute("data-state", "off")}

    if(e == checkBoxAll){
        allState = checkBoxAll.getAttribute("data-state")
        checkBox.forEach(c => c.setAttribute("data-state", allState))
    }

    let everyBoxState = "undefined"
    let equal = true

    for(i=1; i < checkBox.length; i++){
        let partial = checkBox[1].getAttribute("data-state")
        if(checkBox[i].getAttribute("data-state") != partial) {
            equal = false
        }   
    }
    if(equal){
        let everyBoxState = checkBox[1].getAttribute("data-state")
        checkBoxAll.setAttribute("data-state", everyBoxState)
    }else{
        checkBoxAll.setAttribute("data-state", "off")
    }
    
} ))
// #endregion

// #region New Item

let addItemBtn = document.getElementById("add-item")
let addItemForm = document.getElementById("new-item")
let cancelNewItem = document.getElementById("add-item-cancel")

function toggleNewItemForm(){
    addItemForm.classList.toggle("d-none")
}

addItemBtn.addEventListener("click", function(){
    toggleNewItemForm()
})
cancelNewItem.addEventListener("click", function(){
    toggleNewItemForm()
})

// addItemBtn.addEventListener("click", toggleNewItemForm())
// cancelNewItem.addEventListener("click", toggleNewItemForm())

// #endregion

// #region Extend Row

let itemName = document.querySelectorAll(".column.name")
itemName.forEach(e => e.addEventListener("click", function(){
    thisRow = this.parentElement.parentElement
    if(thisRow.classList.contains("guide")){return}
    thisRow.classList.toggle("collapsed")
}))

// let addItemT = document.getElementById("add-item-test")

// addItemT.addEventListener("click",function(){
//     console.log("s")
//     let selectedRows = document.querySelectorAll(".selected")
//     console.log(selectedRows)
//     selectedRows.forEach(e => e.previousElementSibling.before(e))
// })

// #endregion

//#region Edit Iem

let edit = document.querySelectorAll(".row-extended span.edit")

edit.forEach(e => e.addEventListener("click", function(){
    let thisRow = e.parentElement.parentElement
    console.log(thisRow)
}))

//#endregion