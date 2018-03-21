// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Our new sponsor form
var form = jQuery("#new-sponsor").serialize();

// Create our new ticket for the sponsor
function NewSponsor() {
    var name = document.getElementById('form-name').value;
    var email = document.getElementById('form-email').value;
    var amount = document.getElementById('form-amount').value;
    var ticket_id = document.getElementById('form-ticket-id').value;

    jQuery.ajax({
            type: 'POST',
            url: "http://localhost:8080/NoAuth//Helpers/LoadObj?Name=" + name +";Email=" + email + ";Amount=" + amount + ";ticket_id="+ticket_id,
            dataType: "json",
    });
    modal.style.display = "none";
};

function detailsClicked( args )  {
    var subject = document.getElementById('sponsor-subject');
    var details = document.getElementById('sponsor-details');
    var goal = document.getElementById('sponsor-goal');
    var form_ticket_id = document.getElementById('form-ticket-id');

    subject.innerHTML = args['Subject'];
    details.innerHTML = args['Details'];
    goal.innerHTML = "Goal: $" + args['Goal'];
    form_ticket_id.value = args['ticket_id'];

    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}