function display(user){
    var input = document.getElementById("calculator");
    input.value += user;
}

function backSpace(){
    var input = document.getElementById("calculator");
    input.value = input.value.slice(0, -1);
}

function reset(){
    var input = document.getElementById("calculator");
    input.value = "";
}

function equalTo(){
    var input = document.getElementById("calculator");
    try {
        var result = eval(input.value);
        input.value = result;
    }catch {
        input.value = "Error"
    }
}
