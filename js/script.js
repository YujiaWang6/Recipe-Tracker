window.onload = pageReady;

function pageReady(){

    //form1 - Spiced Beef
    //setting variables
    var spiced_beef_image = document.getElementById("spiced_beef_image");
    var dish1 = document.getElementById("list1");
    var formhandle1 = document.forms.form_dish1;
    
    //setting up the listeners
    formhandle1.onsubmit = ingredient1;
    spiced_beef_image.onclick = spiced_beef;
    
    //creating the functions
    function spiced_beef()
    {
        if(formhandle1.style.display==="none")
        {
            formhandle1.style.display="block";
        }else
        {
            formhandle1.style.display="none";
        }
    };

    function ingredient1()
    {
        var string1="";

        for(var i=1; i<formhandle1.length-1;i++)
        {
            if(formhandle1[i].checked === false)
            {
                string1 = string1 + "<div>" + formhandle1[i].value + " </div>";
            };
        };
        
        dish1.innerHTML = string1;
        formhandle1.style.display="none";
        return false;
        
    };


    //form2 -Hot And Sour Noodles
    //setting variables
    var hot_sour_noodles_image = document.getElementById("hot_and_sour_noodles_image");
    var dish2 = document.getElementById("list2");
    var formhandle2 = document.forms.form_dish2;

    //setting up the listeners
    formhandle2.onsubmit = ingredient2;
    hot_sour_noodles_image.onclick = noodles;

    //creating the functions
    function noodles()
    {
        if(formhandle2.style.display ==="none"){
            formhandle2.style.display = "block";
        }else{
            formhandle2.style.display = "none";
        }
    };

    function ingredient2(){
        var string2 = "";
        for (var j=1; j<formhandle2.length-1; j++){
            if(formhandle2[j].checked === false){
                string2 = string2 + "<div>" + formhandle2[j].value + "</div>";
            }
        };
        dish2.innerHTML = string2;
        formhandle2.style.display = "none";
        return false
    };

    //form3 - Beef With Tomato Stew
   //setting variables
   var beef_tomato_image = document.getElementById("beef_with_tomato_stew_image");
   var dish3 = document.getElementById("list3");
   var formhandle3 = document.forms.form_dish3;

   //setting up the listeners
   formhandle3.onsubmit = ingredient3;
   beef_tomato_image.onclick = beef_tomato;


   //creating the functions
   function beef_tomato()
   {
        if(formhandle3.style.display==="none"){
            formhandle3.style.display="block";
        }else{
            formhandle3.style.display="none";
        }
        
   };

   function  ingredient3()
   {
        var string3 = "";

        for(var k=1;k<formhandle3.length-1;k++)
        {
            if(formhandle3[k].checked === false)
            {
                string3 = string3 + "<div>" + formhandle3[k].value + "</div>";

            }
        };

        dish3.innerHTML = string3;
        formhandle3.style.display = "none";
        return false;
   }

   //print out the ingredients
   var printBtn = document.getElementById("print");

   printBtn.onclick = printOut;

   function printOut(){
    window.print();
   }

   

}