function multiplicar(){    
    try{ 
    var num1 = parseInt(document.getElementById('personas').value) || 0;
    var num2 = 255;
    document.getElementById('precio').value = num1 * num2;

}
    catch(e){}
}