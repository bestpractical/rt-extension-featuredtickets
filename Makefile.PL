use inc::Module::Install;

RTx     'RT-Extension-FeaturedTickets';
license 'gplv2';
repository 'https://github.com/bestpractical/rt-extension-featuredtickets';

requires_rt '4.4.0';
rt_too_new '4.6.0';

sign;
WriteAll;
