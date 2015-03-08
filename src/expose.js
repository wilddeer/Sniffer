//expose Sniffer
if (typeof(module) != 'undefined' && module.exports) {
    module.exports = Sniffer;
}
else {
    global.Sniffer = Sniffer;
}
