function calculateBill() {

    // Get quantities
    let cap        = parseInt(document.getElementById("cap").value) || 0;
    let latte      = parseInt(document.getElementById("latte").value) || 0;
    let espresso   = parseInt(document.getElementById("espresso").value) || 0;
    let coldcoffee = parseInt(document.getElementById("coldcoffee").value) || 0;
    let sandwich   = parseInt(document.getElementById("sandwich").value) || 0;
    let fries      = parseInt(document.getElementById("fries").value) || 0;
    let pizza      = parseInt(document.getElementById("pizza").value) || 0;
    let maggie     = parseInt(document.getElementById("maggie").value) || 0;
    let brownie    = parseInt(document.getElementById("brownie").value) || 0;
    let donut      = parseInt(document.getElementById("donut").value) || 0;

    // Calculate subtotal
    let subtotal =
        (cap * 120) +
        (latte * 150) +
        (espresso * 100) +
        (coldcoffee * 140) +
        (sandwich * 80) +
        (fries * 90) +
        (pizza * 210) +
        (maggie * 70) +
        (brownie * 90) +
        (donut * 70);

    // Check if any item is ordered
    if (subtotal === 0) {
        document.getElementById("summary").innerHTML = "⚠️ Please add at least one item!";
        document.getElementById("total").innerHTML = "";
        return;
    }

    // Build order summary (only ordered items)
    let summary = "";

    if (cap > 0)        summary += `Cappuccino: ${cap} x ₹120 = ₹${cap * 120}<br>`;
    if (latte > 0)      summary += `Latte: ${latte} x ₹150 = ₹${latte * 150}<br>`;
    if (espresso > 0)   summary += `Espresso: ${espresso} x ₹100 = ₹${espresso * 100}<br>`;
    if (coldcoffee > 0) summary += `Cold Coffee: ${coldcoffee} x ₹140 = ₹${coldcoffee * 140}<br>`;
    if (sandwich > 0)   summary += `Sandwich: ${sandwich} x ₹80 = ₹${sandwich * 80}<br>`;
    if (fries > 0)      summary += `French Fries: ${fries} x ₹90 = ₹${fries * 90}<br>`;
    if (pizza > 0)      summary += `Pizza: ${pizza} x ₹210 = ₹${pizza * 210}<br>`;
    if (maggie > 0)     summary += `Maggie: ${maggie} x ₹70 = ₹${maggie * 70}<br>`;
    if (brownie > 0)    summary += `Brownie: ${brownie} x ₹90 = ₹${brownie * 90}<br>`;
    if (donut > 0)      summary += `Donut: ${donut} x ₹70 = ₹${donut * 70}<br>`;

    // GST Calculation (5%)
    let gst   = Math.round(subtotal * 0.05);
    let total = subtotal + gst;

    // Display summary
    document.getElementById("summary").innerHTML = summary +
        `<br>─────────────────<br>
        Subtotal: ₹${subtotal}<br>
        GST (5%): ₹${gst}<br>`;

    // Display total
    document.getElementById("total").innerHTML = "Total Bill: ₹" + total;
}

// PRINT BILL
function printBill() {
    let billContent = document.querySelector(".bill").innerHTML;
    let win = window.open("", "_blank");
    win.document.write(`
        <html>
        <head>
            <title>Brewora Cafe - Bill</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 30px; max-width: 400px; margin: auto; }
                h2 { text-align: center; }
                h3 { text-align: center; }
                #actionButtons { display: none; }
            </style>
        </head>
        <body>${billContent}</body>
        </html>`);
    win.document.close();
    win.print();
}

// RESET / CLEAR
function resetBill() {
    document.getElementById("customerName").value = "";
    let ids = ["cap","latte","espresso","coldcoffee","sandwich","fries","pizza","maggie","brownie","donut"];
    ids.forEach(id => document.getElementById(id).value = 0);
    document.getElementById("summary").innerHTML = "";
    document.getElementById("total").innerHTML = "";
}