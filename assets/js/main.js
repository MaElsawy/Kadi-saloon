function openNav() {
    
    document.getElementById("sidebar").classList.remove("-translate-x-full");

    document.getElementById("sidebar").classList.add("translate-x-0");

}

function closeNav() {

    document.getElementById("sidebar").classList.remove("translate-x-0");

    document.getElementById("sidebar").classList.add("-translate-x-full");
}

let table = document.getElementById("table");

let report = document.getElementById("report");

let invoice = document.getElementById("invoice");


let tablep = document.getElementById("Table-p");

let reportp = document.getElementById("Report-p");

let invoicep = document.getElementById("Invoice-p");


let booking1 = document.getElementById("Booking_1");

let booking2 = document.getElementById("Booking_2");

let booking3 = document.getElementById("Booking_3");


let tablebtn = document.getElementById("Table-btn");

let reportbtn = document.getElementById("Report-btn");

let invoicebtn = document.getElementById("Invoice-btn");


let customer = document.getElementById("customer");

let partner = document.getElementById("partner");

let Customerbtn = document.getElementById("Customer-btn");

let Partnerbtn = document.getElementById("Partner-btn");


function showTable() {

    table.classList.remove("hidden");

    report.classList.add("hidden");

    invoice.classList.add("hidden");


    tablep.classList.add("text-third");

    reportp.classList.remove("text-third");

    invoicep.classList.remove("text-third");


    booking1.classList.remove("hidden");

    booking2.classList.add("hidden");

    booking3.classList.add("hidden");


    tablebtn.classList.add("bg-white");

    reportbtn.classList.remove("bg-white");

    invoicebtn.classList.remove("bg-white");
}
function showReport() {
    table.classList.add("hidden");

    report.classList.remove("hidden");

    report.classList.add("flex");

    invoice.classList.add("hidden");


    tablep.classList.remove("text-third");

    tablep.classList.add("text-tenth");

    reportp.classList.add("text-third");

    invoicep.classList.remove("text-third");


    booking1.classList.add("hidden");

    booking2.classList.remove("hidden");

    booking3.classList.add("hidden");


    tablebtn.classList.remove("bg-white");

    reportbtn.classList.add("bg-white");

    invoicebtn.classList.remove("bg-white");
}
function showInvoice() {
    table.classList.add("hidden");

    report.classList.add("hidden");

    invoice.classList.add("flex");

    invoice.classList.remove("hidden");


    tablep.classList.remove("text-third");

    tablep.classList.add("text-tenth");

    reportp.classList.remove("text-third");

    invoicep.classList.add("text-third");


    booking1.classList.add("hidden");

    booking2.classList.add("hidden");

    booking3.classList.remove("hidden");


    tablebtn.classList.remove("bg-white");

    reportbtn.classList.remove("bg-white");

    invoicebtn.classList.add("bg-white");
}











function showCustomer() {

    customer.classList.remove("hidden");

    partner.classList.add("hidden");

    Partnerbtn.classList.remove("text-primary");

    Partnerbtn.classList.remove("font-extrabold");

    Customerbtn.classList.add("text-primary");

    Customerbtn.classList.add("font-extrabold");

    Customerbtn.classList.remove("text-tenth");

    Customerbtn.classList.remove("font-medium");

    Partnerbtn.classList.add("text-tenth");

    Partnerbtn.classList.remove("bg-white");

    Customerbtn.classList.add("bg-white");
}
function showPartner() {

    customer.classList.add("hidden");

    partner.classList.remove("hidden");

    Partnerbtn.classList.add("text-primary");

    Partnerbtn.classList.add("font-extrabold");

    Partnerbtn.classList.remove("text-tenth");

    Partnerbtn.classList.remove("font-medium");

    Customerbtn.classList.remove("text-primary");

    Customerbtn.classList.remove("font-extrabold");

    Customerbtn.classList.add("text-tenth");

    Customerbtn.classList.add("font-medium");

    Customerbtn.classList.remove("bg-white");

    Partnerbtn.classList.add("bg-white");
}
