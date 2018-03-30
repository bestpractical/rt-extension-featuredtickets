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

    var FeaturedTicketsModal = document.getElementById('featured-tickets-modal-modal');
    var FeaturedTicketsPage = document.getElementById('featured-tickets-body');
    var FeaturedTicketSpan = document.getElementById('featured-tickets-modal-close');

    FeaturedTicketsModal.style.display = "none";
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

    var FeaturedTicketsPage = document.getElementById('featured-tickets-body');
    var FeaturedTicketsModal = document.getElementById('featured-tickets-modal-modal');


    FeaturedTicketsModal.style.display = "block";
    FeaturedTicketsPage.style.overflow = 'hidden';

    FeaturedTicketSpan.onclick = function() {
        modal.style.display = "none";
        FeaturedTicketsPage.style.overflow = 'auto';
    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == FeaturedTicketsModal) {
            modal.style.display = "none";
            FeaturedTicketsPage.style.overflow = 'auto';
        }
    }
}
