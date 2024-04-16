let items = document.getElementsByClassName('testmonial-card')
let j = 0;
carousel()
function carousel(){
    let i;
    for (i = 0; i < items.length; i++ ){
        items[i].style.display = "none";
    }
    j++;
    if (j > items.length) {
        j = 1
    }
    items[j - 1].style.display = "block";
    setTimeout(carousel, 2000)
}