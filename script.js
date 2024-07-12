let sarchbtn = document.querySelector(".searchbtn")
let query = document.querySelector(".query")

sarchbtn.addEventListener("click" , myfun)


function myfun(){
    if(query.value==""){
        alert("Nothing found")
    }
    else{
        let url = "https://www.google.com/search?q=" + query.value;
        window.open(url , '_self')
    }
}

