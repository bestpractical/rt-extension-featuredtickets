var modal;
var span;
var form;
var span;
var name;
var email;
var amount;
var ticket_id;
var data;

jQuery(document).ready(function() {
    // Get the modal
    modal = document.getElementById('featured-tickets-modal-modal');

    FeaturedTicketsPage = document.getElementById('featured-tickets-body');

    // Get the <span> element that closes the modal
    FeaturedTicketSpan = document.getElementById('featured-tickets-modal-close');

    // Our new sponsor form
    form = jQuery("#new-sponsor").serialize();

    // When the user clicks on <span> (x), close the modal
    FeaturedTicketSpan.onclick = function() {
        modal.style.display = "none";
        FeaturedTicketsPage.style.overflow = 'auto';
    }
});

// Create our new ticket for the sponsor
function NewSponsor() {
    sponsor_name = document.getElementById('featured-tickets-name');
    email = document.getElementById('featured-tickets-email');
    amount = document.getElementById('featured-tickets-amount');
    ticket_id = document.getElementById('featured-tickets-ticket-id');

    data = { "Name" : sponsor_name.value, "Email" : email.value, "Amount" : amount.value, "ticket_id" : ticket_id.value };

    jQuery.ajax({
            type: 'POST',
            url: "/NoAuth/Helpers/NewSponsor",
            dataType: "json",
            data: data,
            success: function( data ) {
                console.log('AJAX call to NewSponsor created new sponsor ticket');
            },
            error: function () {
                console.log('An error occured with NewSponsor create');
            }
    });

    modal.style.display = "none";
    FeaturedTicketsPage.style.overflow = 'auto';

    sponsor_name.value = '';
    email.value = '';
    amount.value = '';
    ticket_id = '';
}

function detailsClicked( args )  {
    var subject = document.getElementById('featured-tickets-subject');
    var details = document.getElementById('featured-tickets-details');
    var goal = document.getElementById('featured-tickets-goal');
    var form_ticket_id = document.getElementById('featured-tickets-ticket-id');

    subject.innerHTML = args['Subject'];
    details.innerHTML = args['Details'];
    goal.innerHTML = args['Goal'];
    form_ticket_id.value = args['ticket_id'];

    modal.style.display = "block";
    FeaturedTicketsPage.style.overflow = 'hidden';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        FeaturedTicketsPage.style.overflow = 'auto';
    }
}
