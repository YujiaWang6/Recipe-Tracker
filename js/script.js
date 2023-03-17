window.onload = pageReady;

function pageReady(){
    //setting variables

    //form1 - Spiced Beef
    var spiced_beef_image = document.getElementById("spiced_beef_image");
    var dish1 = document.getElementById("list1");
    var formhandle = document.forms.form_dish1;
    formhandle.onsubmit = ingredient1;

    spiced_beef_image.onclick = spiced_beef;
    
    function spiced_beef()
    {
        formhandle.style.display="block";
    };

    function ingredient1()
    {
        var string1="";

        for(var i=1; i<formhandle.length-1;i=i+1)
        {
            if(formhandle[i].checked === false)
            {
                string1 = string1 + "<div>" + formhandle[i].value + " </div>";
            };
        };
        
        dish1.innerHTML = string1;
        formhandle.style.display="none";
        return false;
        
    }




   

}