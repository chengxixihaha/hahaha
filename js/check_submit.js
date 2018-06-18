function drawform() {
    var n = document.getElementById("value_of_n").value;
    var newform = "";
    var num = 0;
    for(var row = n; row >= 1; row--) {
        newform += "<tr>";
        for(var col = n; col >= 1; col--) {
            num++;
            newform += "<td>"+num+"</td>";
        }
        newform += "</tr>"
    }
    document.getElementById("newtable").innerHTML = newform;
    // document.write("<table>" + newform + "</table>");
    return newform
}

function enterdrawform() {
    if(event.keyCode == 13) {
        var n = document.getElementById("value_of_n").value;
        var newform = "";
        var num = 0;
        for(var row = n; row >= 1; row--) {
            newform += "<tr>";
            for(var col = n; col >= 1; col--) {
                num++;
                newform += "<td>"+num+"</td>";
            }
            newform += "</tr>"
        }
        document.getElementById("newtable").innerHTML = newform;
        // document.write("<table>" + newform + "</table>");
        return newform
    }
}