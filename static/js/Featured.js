// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Our new sponsor form
var form = jQuery("#new-sponsor").serialize();

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Create our new ticket for the sponsor
function NewSponsor() {
    var name = document.getElementById('form-name');
    var email = document.getElementById('form-email');
    var amount = document.getElementById('form-amount');
    var ticket_id = document.getElementById('form-ticket-id');

    jQuery.ajax({
            type: 'POST',
            url: "http://localhost:8080/NoAuth//Helpers/LoadObj?Name=" + name.value +";Email=" + email.value + ";Amount=" + amount.value + ";ticket_id="+ticket_id.value,
            dataType: "json",
    });

    modal.style.display = "none";
    name.value = '';
    email.value = '';
    amount.value = '';
};

function detailsClicked( args )  {
    var subject = document.getElementById('sponsor-subject');
    var details = document.getElementById('sponsor-details');
    var goal = document.getElementById('sponsor-goal');
    var form_ticket_id = document.getElementById('form-ticket-id');

    subject.innerHTML = args['Subject'];
    details.innerHTML = args['Details'];
    goal.innerHTML = "Goal: $" + ( args['Goal'] ? args['Goal'] : 0 );
    form_ticket_id.value = args['ticket_id'];

    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}