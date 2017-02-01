function menu_state() {
    var elementList = document.querySelectorAll(".nav")
    
    for(var element of elementList)
    {
        element.classList.toggle("menu_toggle")  
    }
    
}