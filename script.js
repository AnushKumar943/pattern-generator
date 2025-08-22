function generatePattern() {
    let rows = document.getElementById("rows").value;
    let patternType = document.getElementById("patternType").value;
    let output = "";

    if (rows === "" || isNaN(rows) || rows <= 0) {
        alert("Please enter a valid number of rows.");
        return;
    }

    rows = parseInt(rows);

    if (patternType === "pyramid") {
        for (let i = 1; i <= rows; i++) {
            output += " ".repeat(rows - i) + "* ".repeat(i) + "\n";
        }
    } 
    else if (patternType === "triangle") {
        for (let i = 1; i <= rows; i++) {
            output += "* ".repeat(i) + "\n";
        }
    } 
    else if (patternType === "square") {
        for (let i = 1; i <= rows; i++) {
            output += "* ".repeat(rows) + "\n";
        }
    }

    document.getElementById("output").innerText = output;
}
