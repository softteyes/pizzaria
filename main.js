var menu_list_array=["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];
function getmenu(){
    var menu;
    menu="<ol class='menulist'>";
    menu_list_array.sort();
    for(var i=0; i<menu_list_array.length;i++){
    menu=menu+'<li>'+ menu_list_array[i] + '</li>';
    }
    menu=menu+"</ol>";
console.log(menu);
document.getElementById("display_menu").innerHTML = menu;
}

function add_item(){
    console.log(menu_list_array);
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    console.log(menu_list_array);
    menu_list_array.sort();
    htmldata="<section class='cards'>";
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+"<div class='card'>" +'<img src="images/pizzaImg.png"/>' + menu_list_array[i] +'</div>';
    }
    htmldata=htmldata+'</section>';
    console.log(htmldata);
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}