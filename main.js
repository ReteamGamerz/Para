para_array = [];

function submit() {
    var name_1 = document.getElementById("saritha1").value;
    var name_2 = document.getElementById("saritha_2").value;
    var name_3 = document.getElementById("saritha_3").value;
    var name_4 = document.getElementById("saritha_4").value; 
}

     para_array.push(name_1);
     para_array.push(name_2);
     para_array.push(name_3);
     para_array.push(name_4);

      console.log (para_array);

      document.getElementById("display_name").innerHTML = para_array;

      document.getElementById("submit_button").style.display = "none";

      document.getElementById("sort_button").style.display = "inline-block";

 

 function sorting() {
     para_array.sort ();

     console.log (para_array);

     document.getElementById ("display_name").innerHTML = para_array;
 }
