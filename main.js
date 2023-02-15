function clrsc() {
        document.getElementById("result").value = "";
    }
    
    function disp(value) {
        document.getElementById("result").value += value;
    }
    
    function cal() {
        var p = document.getElementById("result").value;
        var q = eval(p);
        document.getElementById("result").value = q;
    }
    function bkspc(){
        document.getElementById("result").value= document.getElementById("result").value.substring(0,document.getElementById("result").value.length-1);
    }