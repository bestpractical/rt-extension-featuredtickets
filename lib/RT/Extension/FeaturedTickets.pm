use strict;
use warnings;
package RT::Extension::FeaturedTickets;

our $VERSION = '0.01';

RT->AddStyleSheets("featured-tickets.css");
RT->AddJavaScript("featured-tickets.js");

=head1 NAME

RT-Extension-FeaturedTickets -Public web page for featured tickets.

=head1 RT VERSION

Works with RT 4.4


=head1 INSTALLATION

=over

=item C<perl Makefile.PL>

=item C<make>

=item C<make install>

=item C<make initdb>

May need root permissions


=item Edit your F</opt/rt4/etc/RT_SiteConfig.pm>

Activate the plugin by adding the below:

    Plugin('RT::Extension::FeaturedTickets');

or add C<RT::Extension::FeaturedTickets> to your existing C<@Plugins> line.

$FeaturedTicketsQueue specifies which queue the featured tickets will be loaded from when
the initial data is loaded the 'FeaturedTickets' queue is created by default. Renaming this queue is the simplest
way to use another queue name but keep the relevant applied custom fields.

    Set($FeaturedTicketsQueue, 'FeaturedTickets');

$FeaturedTicketStatuses is an array ref, where the ticket statuses that will be accepted from the $FeaturedTicketsQueue
are specified. Only tickets with one of the statuses in the array will be listed on the featured page.

    Set($FeaturedTicketStatuses, ['open', ...]);

Set which queue new sponsor tickets will be placed into with the $SponsorsQueue variable.

    Set($SponsorsQueue, 'Sponsors');

=item Clear your mason cache

    rm -rf /opt/rt4/var/mason_data/obj

=item Restart your webserver

=back

=head1 DESCRIPTION

Create a webpage that anyone can view (NoAuth), displaying details on featured tickets. A visitor
can decide to sign up as a requestor on a linked ticket in the same queue. The tickets featured
can be selected from a queue and limited to their statuses.



=head1 AUTHOR

Best Practical Solutions, LLC E<lt>modules@bestpractical.comE<gt>

=head1 BUGS

All bugs should be reported via email to

    L<bug-RT-Extension-FeaturedTickets@rt.cpan.org|mailto:bug-RT-Extension-FeaturedTickets@rt.cpan.org>

or via the web at

    L<rt.cpan.org|http://rt.cpan.org/Public/Dist/Display.html?Name=RT-Extension-FeaturedTickets>.

=head1 LICENSE AND COPYRIGHT

This software is Copyright (c) 2018 by Best Practical Solutions, LLC.

This is free software, licensed under:

  The GNU General Public License, Version 2, June 1991

=cut

1;
