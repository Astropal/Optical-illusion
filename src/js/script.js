function addElement () {
    var count = 0;
    for(i=0; i<180; i++){
    ++count;
    var currentDiv = document.getElementById('marker2');
    var parentDiv = document.getElementById("marker1");
    var newObj = document.createElement("li");
    newObj.className = "object";
    newObj.style.cssText = "transform: rotateY("+count+"deg); background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); color:linear-gradient(to right, orange , yellow, green, cyan, blue, violet);";
    parentDiv.insertBefore(newObj, currentDiv);
    }
}