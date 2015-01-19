//run Sniffer
window.Sniff = Sniffer(navigator.userAgent);

//expose Sniffer for testing
if (window.SNIFFER_TEST_RUN) window.Sniffer = Sniffer;
