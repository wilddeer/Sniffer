(function() {
    var sniff = window.Sniff,
        tag = document.getElementsByTagName('html')[0],
        classNameArr = [tag.className];

    sniff.browser.name && classNameArr.push(sniff.browser.name);
    sniff.browser.engine && classNameArr.push(sniff.browser.engine);
    sniff.os.name && classNameArr.push(sniff.os.name);

    for (var prop in sniff.features) {
        if (sniff.features[prop]) classNameArr.push(prop);
    }

    tag.className = classNameArr.join(' ');
})();
