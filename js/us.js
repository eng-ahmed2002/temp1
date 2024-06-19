// creat varipel
let ul=document.querySelector('.our-work .lista')
let ulll=Array.from(ul.children)


// function for remove class active
function removeActiv(){
    ulll.forEach(lis => {
    lis.classList.remove("active")
    }); 
}

// function for add class active
function addAvtiv (){
    for(let i=0;i<ulll.length;i++){
        ulll[i].onclick=function(){
            removeActiv()
            ulll[i].classList.toggle("active")
        }
    }
}

// call function
addAvtiv()