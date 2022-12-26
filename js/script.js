var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
        // this.parentElement.querySelector(".img").src = "file-folder-icon-flat-style-documents-archive-vector-illustration-white-isolated-background-storage-business-concept_157943-627.png";
        // this.parentElement.querySelector(".img").style.width = "25px";
        // this.parentElement.querySelector(".img").style.height = "20px";
    });
}

// let parentCheckbox1 = document.getElementById("parentCheckbox1");
// parentCheckbox1.addEventListener(onclick,function(){
//     document.body.style.backgroundColor = "blue";
// });

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function check() {
    var checkbox = document.getElementsByName('ckbox[]');
    var ln = 0;
    for (var i = 0; i < checkbox.length; i++) { //check for child checkboxes
        if (checkbox[i].checked)
            ln++;
    }

    //select parent if all child are checked
    var all = document.getElementsByName('ckbox[]');
    var num = all.length;

    if (ln == num) {
        document.getElementById("parent_checkbox").checked = true;
    } else {
        document.getElementById("parent_checkbox").checked = false;
    }
}

function check2() {
    var checkbox = document.getElementsByName('ckbox2[]');
    var ln = 0;
    for (var i = 0; i < checkbox.length; i++) { //check for child checkboxes
        if (checkbox[i].checked)
            ln++;
    }

    //select parent if all child are checked
    var all = document.getElementsByName('ckbox2[]');
    var num = all.length;

    if (ln == num) {
        document.getElementById("parent_checkbox2").checked = true;
    } else {
        document.getElementById("parent_checkbox2").checked = false;
    }
}
function check3() {
    var checkbox = document.getElementsByName('ckbox3[]');
    var ln = 0;
    for (var i = 0; i < checkbox.length; i++) { //check for child checkboxes
        if (checkbox[i].checked)
            ln++;
    }

    //select parent if all child are checked
    var all = document.getElementsByName('ckbox3[]');
    var num = all.length;

    if (ln == num) {
        document.getElementById("parent_checkbox3").checked = true;
    } else {
        document.getElementById("parent_checkbox3").checked = false;
    }
}

function masterCheck() {
    var parent_checkbox = document.getElementById("parent_checkbox");
    if (parent_checkbox.checked === true) {
        var checkbox = document.getElementsByName('ckbox[]');
        for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = true;
        }
    }
    else{
        var checkbox = document.getElementsByName('ckbox[]');
        for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
        }
    }
    
    
}
function masterCheck2(){
    var parent_checkbox2 = document.getElementById("parent_checkbox2");
    if(parent_checkbox2.checked === true) {
        var checkbox = document.getElementsByName('ckbox2[]');
        for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = true;
        }
    }
    else{
        var checkbox = document.getElementsByName('ckbox2[]');
        for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
        }
    }
}

function masterCheck3(){
    var parent_checkbox3 = document.getElementById("parent_checkbox3");
    if (parent_checkbox3.checked === true) {
        var checkbox = document.getElementsByName('ckbox3[]');
        for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = true;
        }
    }
    else{
        var checkbox = document.getElementsByName('ckbox3[]');
        for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
        }
    }
}

const rightMove = document.getElementById("rightMove");
rightMove.addEventListener("click", function(){
    const elem = document.getElementById("myUL");
    var clone = elem.cloneNode(true);
    const myUL2 = document.getElementById("myUL2");
    myUL2.innerHTML = "";
    // right.append(clone);
    myUL2.append(clone);
    console.log(clone);
});

// const leftMove = document.getElementById("leftMove");
// leftMove.addEventListener("click",function(){
//     const myUL2 = document.getElementById("myUL2");
//     myUL2.style.display =  "none";
// });

const rightMove2 = document.getElementById("rightMove");
rightMove2.addEventListener("click", function(){
    
});