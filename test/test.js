;(function(global) {


if (typeof(require) != 'undefined') {
    var chai = require('./chai.js'),
        S = require('../');
}
else {
    var chai = global.chai,
        S = global.Sniffer;
}

var expect = chai.expect;

chai.should();

describe('Edge cases', function(){
    describe('Nothing passed to function', function(){
        it('should not die', function(){
            var result = S();

            result.os.name.should.equal('');
            result.os.fullName.should.equal('');
            result.os.version.should.equal('');
            result.os.versionName.should.equal('');
            expect(result.os.majorVersion).to.equal(null);
            expect(result.os.minorVersion).to.equal(null);
            expect(result.os.patchVersion).to.equal(null);
            result.browser.name.should.equal('');
            result.browser.engine.should.equal('');
            result.browser.version.should.equal('');
            expect(result.browser.majorVersion).to.equal(null);
            expect(result.browser.minorVersion).to.equal(null);
            expect(result.browser.patchVersion).to.equal(null);
            result.features.mobile.should.be.false;
            result.features.proxy.should.be.false;
            result.features.tv.should.be.false;
            result.features.bw.should.be.false;
        });
    });
});


describe('Desktop browsers', function(){
    describe('Windows', function() {
        describe('IE 6 on Windows XP 64 bit', function(){
            var result = S('Mozilla/4.0 (Windows; MSIE 6.0; Windows NT 5.2)');
            it('os should be win', function() {
                result.os.name.should.equal('win');
            });
            it('os version should be 6.1', function() {
                result.os.version.should.equal('5.2');
            });
            it('os version name should be XP', function() {
                result.os.versionName.should.equal('XP');
            });
            it('os alt version name should be Server 2003', function() {
                result.os.versionAltNames[0].should.equal('Server 2003');
            });
            it('browser should be ie', function() {
                result.browser.name.should.equal('ie');
            });
            it('engine should be trident', function() {
                result.browser.engine.should.equal('trident');
            });
            it('browser version should be 6.0', function() {
                result.browser.version.should.equal('6.0');
            });
        });

        describe('Firefox 3 on Windows XP 64 bit', function(){
            var result = S('Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US; rv:1.9.0.18) Gecko/2010020220 Firefox/3.0.18 (.NET CLR 3.5.21022)');
            it('os should be win', function() {
                result.os.name.should.equal('win');
            });
            it('os version should be 6.1', function() {
                result.os.version.should.equal('5.2');
            });
            it('os version name should be XP', function() {
                result.os.versionName.should.equal('XP');
            });
            it('os alt version name should be Server 2003', function() {
                result.os.versionAltNames[0].should.equal('Server 2003');
            });
            it('browser should be firefox', function() {
                result.browser.name.should.equal('firefox');
            });
            it('engine should be gecko', function() {
                result.browser.engine.should.equal('gecko');
            });
            it('browser version should be 3.0.18', function() {
                result.browser.version.should.equal('3.0.18');
            });
        });

        describe('Opera 10.63 on Windows XP 64 bit', function(){
            var result = S('Opera/9.80 (Windows NT 5.2; U; en) Presto/2.6.30 Version/10.63');
            it('os should be win', function() {
                result.os.name.should.equal('win');
            });
            it('os version should be 6.1', function() {
                result.os.version.should.equal('5.2');
            });
            it('os version name should be XP', function() {
                result.os.versionName.should.equal('XP');
            });
            it('os alt version name should be Server 2003', function() {
                result.os.versionAltNames[0].should.equal('Server 2003');
            });
            it('browser should be opera', function() {
                result.browser.name.should.equal('opera');
            });
            it('engine should be presto', function() {
                result.browser.engine.should.equal('presto');
            });
            it('browser version should be 10.63', function() {
                result.browser.version.should.equal('10.63');
            });
        });

        describe('Safari 4 on Windows XP 64 bit', function(){
            var result = S('Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/531.22.7 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7');
            it('os should be win', function() {
                result.os.name.should.equal('win');
            });
            it('os version should be 6.1', function() {
                result.os.version.should.equal('5.2');
            });
            it('os version name should be XP', function() {
                result.os.versionName.should.equal('XP');
            });
            it('os alt version name should be Server 2003', function() {
                result.os.versionAltNames[0].should.equal('Server 2003');
            });
            it('browser should be safari', function() {
                result.browser.name.should.equal('safari');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 4.0.5', function() {
                result.browser.version.should.equal('4.0.5');
            });
        });

        describe('Chrome 39 on Windows 7', function(){
            var result = S('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36');
            it('os should be win', function() {
                result.os.name.should.equal('win');
            });
            it('os version should be 6.1', function() {
                result.os.version.should.equal('6.1');
            });
            it('os version name should be 7', function() {
                result.os.versionName.should.equal('7');
            });
            it('browser should be chrome', function() {
                result.browser.name.should.equal('chrome');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 39.0.2171', function() {
                result.browser.version.should.equal('39.0.2171');
            });
        });

        describe('Firefox 34 on Windows 7', function(){
            var result = S('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0');
            it('os should be win', function() {
                result.os.name.should.equal('win');
            });
            it('os version should be 6.1', function() {
                result.os.version.should.equal('6.1');
            });
            it('os version name should be 7', function() {
                result.os.versionName.should.equal('7');
            });
            it('browser should be firefox', function() {
                result.browser.name.should.equal('firefox');
            });
            it('engine should be gecko', function() {
                result.browser.engine.should.equal('gecko');
            });
            it('browser version should be 34.0', function() {
                result.browser.version.should.equal('34.0');
            });
        });

        describe('IE 11 on Windows 7', function(){
            var result = S('Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; Zune 4.7; rv:11.0) like Gecko');
            it('os should be win', function() {
                result.os.name.should.equal('win');
            });
            it('os version should be 6.1', function() {
                result.os.version.should.equal('6.1');
            });
            it('os version name should be 7', function() {
                result.os.versionName.should.equal('7');
            });
            it('browser should be ie', function() {
                result.browser.name.should.equal('ie');
            });
            it('engine should be trident', function() {
                result.browser.engine.should.equal('trident');
            });
            it('browser version should be 11.0', function() {
                result.browser.version.should.equal('11.0');
            });
        });

        describe('Opera 26 on Windows 7', function(){
            var result = S('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 OPR/26.0.1656.60');
            it('os should be win', function() {
                result.os.name.should.equal('win');
            });
            it('os version should be 6.1', function() {
                result.os.version.should.equal('6.1');
            });
            it('os version name should be 7', function() {
                result.os.versionName.should.equal('7');
            });
            it('browser should be opera', function() {
                result.browser.name.should.equal('opera');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 26.0.1656', function() {
                result.browser.version.should.equal('26.0.1656');
            });
        });

        describe('Opera 12.17 on Windows 7', function(){
            var result = S('Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.17');
            it('os should be win', function() {
                result.os.name.should.equal('win');
            });
            it('os version should be 6.1', function() {
                result.os.version.should.equal('6.1');
            });
            it('os version name should be 7', function() {
                result.os.versionName.should.equal('7');
            });
            it('browser should be opera', function() {
                result.browser.name.should.equal('opera');
            });
            it('engine should be presto', function() {
                result.browser.engine.should.equal('presto');
            });
            it('browser version should be 12.17', function() {
                result.browser.version.should.equal('12.17');
            });
        });

        describe('IE 10 on Windows 8', function(){
            var result = S('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729)');
            it('os should be win', function() {
                result.os.name.should.equal('win');
            });
            it('os version should be 6.2', function() {
                result.os.version.should.equal('6.2');
            });
            it('os version name should be 8', function() {
                result.os.versionName.should.equal('8');
            });
            it('browser should be ie', function() {
                result.browser.name.should.equal('ie');
            });
            it('engine should be trident', function() {
                result.browser.engine.should.equal('trident');
            });
            it('browser version should be 10.0', function() {
                result.browser.version.should.equal('10.0');
            });
        });

        describe('IE 11 on Windows 8.1', function(){
            var result = S('Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; rv:11.0) like Gecko');
            it('os should be win', function() {
                result.os.name.should.equal('win');
            });
            it('os version should be 6.3', function() {
                result.os.version.should.equal('6.3');
            });
            it('os version name should be 8.1', function() {
                result.os.versionName.should.equal('8.1');
            });
            it('browser should be ie', function() {
                result.browser.name.should.equal('ie');
            });
            it('engine should be trident', function() {
                result.browser.engine.should.equal('trident');
            });
            it('browser version should be 11.0', function() {
                result.browser.version.should.equal('11.0');
            });
        });

        describe('Edge on Windows 10 Preview', function(){
            var result = S('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.9600');
            it('os should be win', function() {
                result.os.name.should.equal('win');
            });
            it('os version should be 10.0', function() {
                result.os.version.should.equal('10.0');
            });
            it('os version name should be 10', function() {
                result.os.versionName.should.equal('10');
            });
            it('browser should be edge', function() {
                result.browser.name.should.equal('edge');
            });
            it('engine should be edgehtml', function() {
                result.browser.engine.should.equal('edgehtml');
            });
            it('browser version should be 12.9600', function() {
                result.browser.version.should.equal('12.9600');
            });
        });

        describe('Edge Chromium on Windows 10', function(){
            var result = S('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 Edg/87.0.664.57');
            it('os should be win', function() {
                result.os.name.should.equal('win');
            });
            it('os version should be 10.0', function() {
                result.os.version.should.equal('10.0');
            });
            it('os version name should be 10', function() {
                result.os.versionName.should.equal('10');
            });
            it('browser should be edge', function() {
                result.browser.name.should.equal('edge');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 87.0.664', function() {
                result.browser.version.should.equal('87.0.664');
            });
        });

        describe('YaBrowser on Window 8.1', function() {
            var result = S('Mozilla/5.0 (Windows NT 6.3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 YaBrowser/17.6.1.749 Yowser/2.5 Safari/537.36');
            it('os should be win', function() {
                result.os.name.should.equal('win');
            });
            it('os version should be 6.3', function() {
                result.os.version.should.equal('6.3');
            });
            it('os version name should be 8.1', function() {
                result.os.versionName.should.equal('8.1');
            });
            it('browser should be yabrowser', function() {
                result.browser.name.should.equal('yabrowser');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 17.6.1', function() {
                result.browser.version.should.equal('17.6.1');
            });
        });
    });

    describe('Mac OS X', function(){
        describe('Safari 4 on Snow Leopard', function(){
            var result = S('Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/531.22.7 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7');
            it('os should be osx', function() {
                result.os.name.should.equal('osx');
            });
            it('os version should be 10.6.8', function() {
                result.os.version.should.equal('10.6.8');
            });
            it('os version name should be Snow Leopard', function() {
                result.os.versionName.should.equal('Snow Leopard');
            });
            it('browser should be safari', function() {
                result.browser.name.should.equal('safari');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 4.0.5', function() {
                result.browser.version.should.equal('4.0.5');
            });
        });

        describe('Firefox 4 on Snow Leopard', function(){
            var result = S('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 Firefox/4.0.1');
            it('os should be osx', function() {
                result.os.name.should.equal('osx');
            });
            it('os version should be 10.6', function() {
                result.os.version.should.equal('10.6');
            });
            it('os version name should be Snow Leopard', function() {
                result.os.versionName.should.equal('Snow Leopard');
            });
            it('browser should be firefox', function() {
                result.browser.name.should.equal('firefox');
            });
            it('engine should be gecko', function() {
                result.browser.engine.should.equal('gecko');
            });
            it('browser version should be 4.0.1', function() {
                result.browser.version.should.equal('4.0.1');
            });
        });

        describe('Opera 11.11 on Snow Leopard', function(){
            var result = S('Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; en) Presto/2.8.131 Version/11.11');
            it('os should be osx', function() {
                result.os.name.should.equal('osx');
            });
            it('os version should be 10.6.8', function() {
                result.os.version.should.equal('10.6.8');
            });
            it('os version name should be Snow Leopard', function() {
                result.os.versionName.should.equal('Snow Leopard');
            });
            it('browser should be opera', function() {
                result.browser.name.should.equal('opera');
            });
            it('engine should be presto', function() {
                result.browser.engine.should.equal('presto');
            });
            it('browser version should be 11.11', function() {
                result.browser.version.should.equal('11.11');
            });
        });

        describe('Chrome 20 on Lion', function(){
            var result = S('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.47 Safari/536.11');
            it('os should be osx', function() {
                result.os.name.should.equal('osx');
            });
            it('os version should be 10.7.5', function() {
                result.os.version.should.equal('10.7.5');
            });
            it('os version name should be Lion', function() {
                result.os.versionName.should.equal('Lion');
            });
            it('browser should be chrome', function() {
                result.browser.name.should.equal('chrome');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 20.0.1132', function() {
                result.browser.version.should.equal('20.0.1132');
            });
        });

        describe('Safari 6.1 on Mountain Lion', function(){
            var result = S('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.71 (KHTML, like Gecko) Version/6.1 Safari/537.71');
            it('os should be osx', function() {
                result.os.name.should.equal('osx');
            });
            it('os version should be 10.8.5', function() {
                result.os.version.should.equal('10.8.5');
            });
            it('os version name should be Mountain Lion', function() {
                result.os.versionName.should.equal('Mountain Lion');
            });
            it('browser should be safari', function() {
                result.browser.name.should.equal('safari');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 6.1', function() {
                result.browser.version.should.equal('6.1');
            });
        });

        describe('Safari 7 on Mavericks', function(){
            var result = S('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.78.2 (KHTML, like Gecko) Version/7.0.6 Safari/537.78.2');
            it('os should be osx', function() {
                result.os.name.should.equal('osx');
            });
            it('os version should be 10.9.5', function() {
                result.os.version.should.equal('10.9.5');
            });
            it('os version name should be Mavericks', function() {
                result.os.versionName.should.equal('Mavericks');
            });
            it('browser should be safari', function() {
                result.browser.name.should.equal('safari');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 7.0.6', function() {
                result.browser.version.should.equal('7.0.6');
            });
        });

        describe('Opera 27 dev on Yosemite', function(){
            var result = S('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2202.3 Safari/537.36 OPR/27.0.1689.2 (Edition developer)');
            it('os should be osx', function() {
                result.os.name.should.equal('osx');
            });
            it('os version should be 10.10.1', function() {
                result.os.version.should.equal('10.10.1');
            });
            it('os version name should be Yosemite', function() {
                result.os.versionName.should.equal('Yosemite');
            });
            it('browser should be opera', function() {
                result.browser.name.should.equal('opera');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 27.0.1689', function() {
                result.browser.version.should.equal('27.0.1689');
            });
        });

        describe('Firefox 34 on Yosemite', function(){
            var result = S('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:34.0) Gecko/20100101 Firefox/34.0');
            it('os should be osx', function() {
                result.os.name.should.equal('osx');
            });
            it('os version should be 10.10', function() {
                result.os.version.should.equal('10.10');
            });
            it('os version name should be Yosemite', function() {
                result.os.versionName.should.equal('Yosemite');
            });
            it('browser should be firefox', function() {
                result.browser.name.should.equal('firefox');
            });
            it('engine should be gecko', function() {
                result.browser.engine.should.equal('gecko');
            });
            it('browser version should be 34.0', function() {
                result.browser.version.should.equal('34.0');
            });
        });

        describe('Safari 9 on El Capitan', function(){
            var result = S('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11) AppleWebKit/601.1.56 (KHTML, like Gecko) Version/9.0 Safari/601.1.56');
            it('os should be osx', function() {
                result.os.name.should.equal('osx');
            });
            it('os version should be 10.11', function() {
                result.os.version.should.equal('10.11');
            });
            it('os version name should be El Capitan', function() {
                result.os.versionName.should.equal('El Capitan');
            });
            it('browser should be safari', function() {
                result.browser.name.should.equal('safari');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 9.0', function() {
                result.browser.version.should.equal('9.0');
            });
        });

        describe('YaBrowser on Mac OS X 10', function(){
            var result = S('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 YaBrowser/16.6.0.8125 Safari/537.36');
            it('os should be osx', function() {
                result.os.name.should.equal('osx');
            });
            it('os version should be 10.9.5', function() {
                result.os.version.should.equal('10.9.5');
            });
            it('os version name should be Mavericks', function() {
                result.os.versionName.should.equal('Mavericks');
            });
            it('browser should be yabrowser', function() {
                result.browser.name.should.equal('yabrowser');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 16.6.0', function() {
                result.browser.version.should.equal('16.6.0');
            });
        });
    });

    describe('Ubuntu Linux Desktop', function () {
        describe('Firefox 35 on Ubuntu Desktop', function () {
            var result = S('Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0');
            it('os should be ubuntu', function() {
               result.os.name.should.equal('ubuntu');
            });
            it('os version should be blank', function() {
               result.os.version.should.equal('');
            });
            it('os version name should be blank', function() {
               result.os.versionName.should.equal('');
            });
            it('browser should be firefox', function() {
               result.browser.name.should.equal('firefox');
            });
            it('engine should be gecko', function() {
               result.browser.engine.should.equal('gecko');
            });
            it('browser version should be 35.0', function() {
               result.browser.version.should.equal('35.0');
            });
        });
        describe('Chromium 40 on Ubuntu Desktop', function(){
            var result = S('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/40.0.2214.111 Chrome/40.0.2214.111 Safari/537.36');
            it('os should be ubuntu', function() {
                result.os.name.should.equal('ubuntu');
            });
            it('os version should be blank', function() {
                result.os.version.should.equal('');
            });
            it('os version name should be blank', function() {
                result.os.versionName.should.equal('');
            });
            it('browser should be chrome', function() {
                result.browser.name.should.equal('chrome');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 40.0.2214', function() {
                result.browser.version.should.equal('40.0.2214');
            });
        });
    });

    describe('Fedora Linux Desktop', function () {
        describe('Firefox 37 on Fedora Linux Desktop', function () {
            var result = S('Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:37.0) Gecko/20100101 Firefox/37.0');
            it('os should be fedora', function() {
               result.os.name.should.equal('fedora');
            });
            it('os version should be blank', function() {
               result.os.version.should.equal('');
            });
            it('os version name should be blank', function() {
               result.os.versionName.should.equal('');
            });
            it('browser should be firefox', function() {
               result.browser.name.should.equal('firefox');
            });
            it('engine should be gecko', function() {
               result.browser.engine.should.equal('gecko');
            });
            it('browser version should be 37.0', function() {
               result.browser.version.should.equal('37.0');
            });
        });
        describe('Firefox 36 on Fedora Linux Desktop', function () {
            var result = S('Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:36.0) Gecko/20100101 Firefox/36.0');
            it('os should be fedora', function() {
               result.os.name.should.equal('fedora');
            });
            it('os version should be blank', function() {
               result.os.version.should.equal('');
            });
            it('os version name should be blank', function() {
               result.os.versionName.should.equal('');
            });
            it('browser should be firefox', function() {
               result.browser.name.should.equal('firefox');
            });
            it('engine should be gecko', function() {
               result.browser.engine.should.equal('gecko');
            });
            it('browser version should be 36.0', function() {
               result.browser.version.should.equal('36.0');
            });
        });
        describe('Chromium 40 on Fedora Linux Desktop', function(){
            var result = S('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Fedora/20 () Chromium/40.0.2194.0 Chrome/40.0.2194.0 Safari/537.36');
            it('os should be fedora', function() {
                result.os.name.should.equal('fedora');
            });
            it('os version should be 20', function() {
                result.os.version.should.equal('20');
            });
            it('os version name should be Heisenbug', function() {
                result.os.versionName.should.equal('Heisenbug');
            });
            it('browser should be chrome', function() {
                result.browser.name.should.equal('chrome');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 40.0.2194', function() {
                result.browser.version.should.equal('40.0.2194');
            });
        });
        describe('Chromium 27 on Fedora Linux Desktop', function(){
            var result = S('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Fedora/18 (OGxyVI07puJEIltprVOx+nKUtFBW0X1nDLz6GIOU7TM=) Chromium/27.0.1453.93 Chrome/27.0.1453.93 Safari/535.2');
            it('os should be fedora', function() {
                result.os.name.should.equal('fedora');
            });
            it('os version should be 18', function() {
                result.os.version.should.equal('18');
            });
            it('os version name should be Spherical Cow', function() {
                result.os.versionName.should.equal('Spherical Cow');
            });
            it('browser should be chrome', function() {
                result.browser.name.should.equal('chrome');
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be 27.0.1453', function() {
                result.browser.version.should.equal('27.0.1453');
            });
        });
    });
});


describe('Devices', function(){
    describe('Safari on iPod touch', function(){
        var result = S('Mozilla/5.0 (iPod touch; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B440 Safari/600.1.4');
        it('os should be ios', function() {
            result.os.name.should.equal('ios');
        });
        it('os version should be 8.1.2', function() {
            result.os.version.should.equal('8.1.2');
        });
        it('browser should be safari', function() {
            result.browser.name.should.equal('safari');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be 8.0', function() {
            result.browser.version.should.equal('8.0');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Chrome on iPod touch', function(){
        var result = S('Mozilla/5.0 (iPod; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) CriOS/39.0.2171.50 Mobile/12B440 Safari/600.1.4');
        it('os should be ios', function() {
            result.os.name.should.equal('ios');
        });
        it('os version should be 8.1.2', function() {
            result.os.version.should.equal('8.1.2');
        });
        it('browser should be chrome', function() {
            result.browser.name.should.equal('chrome');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be 39.0.2171', function() {
            result.browser.version.should.equal('39.0.2171');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Opera Coast on iPod touch', function(){
        var result = S('Mozilla/5.0 (iPod touch; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Coast/4.00.86810 Mobile/12B440 Safari/7534.48.3');
        it('os should be ios', function() {
            result.os.name.should.equal('ios');
        });
        it('os version should be 8.1.2', function() {
            result.os.version.should.equal('8.1.2');
        });
        it('browser should be coast', function() {
            result.browser.name.should.equal('coast');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be 4.00.86810', function() {
            result.browser.version.should.equal('4.00.86810');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Safari on iPad', function(){
        var result = S('Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53');
        it('os should be ios', function() {
            result.os.name.should.equal('ios');
        });
        it('os version should be 7.0.4', function() {
            result.os.version.should.equal('7.0.4');
        });
        it('browser should be safari', function() {
            result.browser.name.should.equal('safari');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be 7.0', function() {
            result.browser.version.should.equal('7.0');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('IE 11 on Windows Phone 8.1', function(){
        var result = S('Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; HTC; Windows Phone 8X by HTC) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537');
        it('os should be winphone', function() {
            result.os.name.should.equal('winphone');
        });
        it('os version should be 8.1', function() {
            result.os.version.should.equal('8.1');
        });
        it('browser should be ie', function() {
            result.browser.name.should.equal('ie');
        });
        it('engine should be trident', function() {
            result.browser.engine.should.equal('trident');
        });
        it('browser version should be 11.0', function() {
            result.browser.version.should.equal('11.0');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Android borwser on Android 2.3', function(){
        var result = S('Mozilla/5.0 (Linux; U; Android 2.3.6; ru-ru; ONE TOUCH 4007D Build/GRK39F) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1');
        it('os should be android', function() {
            result.os.name.should.equal('android');
        });
        it('os version should be 2.3.6', function() {
            result.os.version.should.equal('2.3.6');
        });
        it('browser should be not ok', function() {
            result.browser.name.should.be.not.ok;
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be not ok', function() {
            result.browser.version.should.be.not.ok;
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Android borwser on Android 3.2', function(){
        var result = S('Mozilla/5.0 (Linux; U; Android 3.2.1; ru-ru; ARCHOS 70it2 Build/HTK75D) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13');
        it('os should be android', function() {
            result.os.name.should.equal('android');
        });
        it('os version should be 3.2.1', function() {
            result.os.version.should.equal('3.2.1');
        });
        it('browser should be not ok', function() {
            result.browser.name.should.be.not.ok;
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be not ok', function() {
            result.browser.version.should.be.not.ok;
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Android borwser on Android 4.2', function(){
        var result = S('Mozilla/5.0 (Linux; U; Android 4.2.2; ru-ru; GT-P3100 Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30');
        it('os should be android', function() {
            result.os.name.should.equal('android');
        });
        it('os version should be 4.2.2', function() {
            result.os.version.should.equal('4.2.2');
        });
        it('browser should be not ok', function() {
            result.browser.name.should.be.not.ok;
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be not ok', function() {
            result.browser.version.should.be.not.ok;
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Chrome 39 on Android 4.2', function(){
        var result = S('Mozilla/5.0 (Linux; Android 4.2.2; GT-P3100 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.93 Safari/537.36');
        it('os should be android', function() {
            result.os.name.should.equal('android');
        });
        it('os version should be 4.2.2', function() {
            result.os.version.should.equal('4.2.2');
        });
        it('browser should be chrome', function() {
            result.browser.name.should.equal('chrome');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be 39.0.2171', function() {
            result.browser.version.should.equal('39.0.2171');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Firefox 34 on Android 4.2', function(){
        var result = S('Mozilla/5.0 (Android; Tablet; rv:34.0) Gecko/34.0 Firefox/34.0');
        it('os should be android', function() {
            result.os.name.should.equal('android');
        });
        it('os version should be not ok', function() {
            result.os.version.should.be.not.ok;
        });
        it('browser should be firefox', function() {
            result.browser.name.should.equal('firefox');
        });
        it('engine should be gecko', function() {
            result.browser.engine.should.equal('gecko');
        });
        it('browser version should be 34.0', function() {
            result.browser.version.should.equal('34.0');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Opera 24 on Android 4.2', function(){
        var result = S('Mozilla/5.0 (Linux; Android 4.2.2; GT-P3100 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.117 Safari/537.36 OPR/24.0.1565.82529');
        it('os should be android', function() {
            result.os.name.should.equal('android');
        });
        it('os version should be 4.2.2', function() {
            result.os.version.should.equal('4.2.2');
        });
        it('browser should be opera', function() {
            result.browser.name.should.equal('opera');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be 24.0.1565', function() {
            result.browser.version.should.equal('24.0.1565');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Opera Classic on Android 4.2', function(){
        var result = S('Opera/9.80 (Android 4.2.2; Linux; Opera Tablet/ADR-1411061201) Presto/2.11.355 Version/12.10');
        it('os should be android', function() {
            result.os.name.should.equal('android');
        });
        it('os version should be 4.2.2', function() {
            result.os.version.should.equal('4.2.2');
        });
        it('browser should be opera', function() {
            result.browser.name.should.equal('opera');
        });
        it('engine should be presto', function() {
            result.browser.engine.should.equal('presto');
        });
        it('browser version should be 12.10', function() {
            result.browser.version.should.equal('12.10');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Opera Mini on Android 4.2', function(){
        var result = S('Opera/9.80 (Android; Opera Mini/24.0.1565/35.6680; U; ru) Presto/2.8.119 Version/11.10');
        it('os should be android', function() {
            result.os.name.should.equal('android');
        });
        it('os version should be not ok', function() {
            result.os.version.should.be.not.ok;
        });
        it('browser should be operamini', function() {
            result.browser.name.should.equal('operamini');
        });
        it('engine should be presto', function() {
            result.browser.engine.should.equal('presto');
        });
        it('browser version should be 11.10', function() {
            result.browser.version.should.equal('11.10');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Jolla', function(){
        var result = S('Mozilla/5.0 (Maemo; Linux; U; Jolla; Sailfish; Mobile; rv:31.0) Gecko/31.0 Firefox/31.0 SailfishBrowser/1.0');
        it('os should be sailfish', function() {
            result.os.name.should.equal('sailfish');
        });
        it('browser should be sailfishbrowser', function() {
            result.browser.name.should.equal('sailfishbrowser');
        });
        it('engine should be gecko', function() {
            result.browser.engine.should.equal('gecko');
        });
        it('browser version should be 1.0', function() {
            result.browser.version.should.equal('1.0');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Viera Smart TV (TX-LR32E6)', function(){
        var result = S('Mozilla/5.0 (X11; FreeBSD; U; Viera; ru-RU) AppleWebKit/537.11 (KHTML, like Gecko) Viera/3.3.2 Chrome/23.0.1271.97 Safari/537.11');
        it('os should be viera', function() {
            result.os.name.should.equal('viera');
        });
        it('browser should be chrome', function() {
            result.browser.name.should.equal('chrome');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be 23.0.1271', function() {
            result.browser.version.should.equal('23.0.1271');
        });
        it('should be tv', function() {
            result.features.tv.should.be.true;
        });
    });

    describe('PlayStation 4', function(){
        var result = S('Mozilla/5.0 (PlayStation 4 3.15) AppleWebKit/537.73 (KHTML, like Gecko)');
        it('os should be playstation', function() {
            result.os.name.should.equal('playstation');
        });
        it('os version should be 4', function() {
            result.os.version.should.equal('4');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be not ok', function() {
            result.browser.version.should.be.not.ok;
        });
        it('should be tv', function() {
            result.features.tv.should.be.true;
        });
    });

    describe('PlayStation Vita', function(){
        var result = S('Mozilla/5.0 (PlayStation Vita 3.01) AppleWebKit/536.26 (KHTML, like Gecko) Silk/3.2');
        it('os should be psvita', function() {
            result.os.name.should.equal('psvita');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be not ok', function() {
            result.browser.version.should.be.not.ok;
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('New Nintendo 3DS', function(){
        var result = S('Mozilla/5.0 (New Nintendo 3DS like iPhone) AppleWebKit/536.30 (KHTML, like Gecko) NX/3.0.0.5.10 Mobile NintendoBrowser/1.1.9996.EU');
        it('os should be n3ds', function() {
            result.os.name.should.equal('n3ds');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be not ok', function() {
            result.browser.version.should.be.not.ok;
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Nintendo 3DS', function(){
        var result = S('Mozilla/5.0 (Nintendo 3DS; U; ; ru) Version/1.7552.EU');
        it('os should be 3ds', function() {
            result.os.name.should.equal('3ds');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be not ok', function() {
            result.browser.version.should.be.not.ok;
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Nintendo DSi', function(){
        var result = S('Opera/9.50 (Nintendo DSi; Opera/507; U; en-US)');
        it('os should be dsi', function() {
            result.os.name.should.equal('dsi');
        });
        it('browser should be opera', function() {
            result.browser.name.should.equal('opera');
        });
        it('engine should be presto', function() {
            result.browser.engine.should.equal('presto');
        });
        it('browser version should be not ok', function() {
            result.browser.version.should.be.not.ok;
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Kindle Paperwhite (clientside)', function(){
        var result = S('Mozilla/5.0 (X11; ; U; Linux armv7l; en-us) AppleWebKit/534.26+ (KHTML, like Gecko) Version/5.0 Safari/534.26+');
        it('os should be not ok', function() {
            result.os.name.should.be.not.ok;
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be not ok', function() {
            result.browser.version.should.be.not.ok;
        });
    });

    describe('Kindle Paperwhite (serverside)', function(){
        var result = S('Mozilla/5.0 (X11; U; Linux armv7l like Android; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/533.2+ Kindle/3.0+');
        it('os should be kindle', function() {
            result.os.name.should.equal('kindle');
        });
        it('os version should be 3.0', function() {
            result.os.version.should.equal('3.0');
        });
        it('browser should be not ok', function() {
            result.browser.name.should.be.not.ok;
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be not ok', function() {
            result.browser.version.should.be.not.ok;
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
        it('should be bw', function() {
            result.features.bw.should.be.true;
        });
    });

    describe('Kindle Keyboard', function(){
        var result = S('Mozilla/5.0 (Linux; U; en-US) AppleWebKit/528.5+ (KHTML, like Gecko, Safari/528.5+) Version/4.0 Kindle/3.0 (screen 600x800; rotate)');
        it('os should be kindle', function() {
            result.os.name.should.equal('kindle');
        });
        it('os version should be 3.0', function() {
            result.os.version.should.equal('3.0');
        });
        it('browser should be not ok', function() {
            result.browser.name.should.be.not.ok;
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be not ok', function() {
            result.browser.version.should.be.not.ok;
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
        it('should be bw', function() {
            result.features.bw.should.be.true;
        });
    });

    describe('Ovi (Nokia Xpress)', function(){
        var result = S('Mozilla/5.0 (Series40; Nokia501/11.1.1/ java_runtime_version=Nokia_Asha_1_1_1; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/3.0.0.0.73');
        it('os should be symbian', function() {
            result.os.name.should.equal('symbian');
        });
        it('browser should be ovi', function() {
            result.browser.name.should.equal('ovi');
        });
        it('engine should be gecko', function() {
            result.browser.engine.should.equal('gecko');
        });
        it('browser version should be 3.0.0', function() {
            result.browser.version.should.equal('3.0.0');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
        it('should be proxy', function() {
            result.features.proxy.should.be.true;
        });
    });

    describe('YaBrowser on iOS 7', function(){
        var result = S('Mozilla/5.0 (iPad; CPU OS 7_1_2 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) YaBrowser/14.7.1916.9531.11 Mobile/11D257 Safari/9537.53');
        it('os should be ios', function() {
            result.os.name.should.equal('ios');
        });
        it('os version should be 7.1.2', function() {
            result.os.version.should.equal('7.1.2');
        });
        it('browser should be yabrowser', function() {
            result.browser.name.should.equal('yabrowser');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be 14.7.1916', function() {
            result.browser.version.should.equal('14.7.1916');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('YaBrowser on Android 5.1.1', function(){
        var result = S('Mozilla/5.0 (Linux; Android 5.1.1; HSG1351 Build/LMY48G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 YaBrowser/16.4.0.9404.01 Safari/537.36');
        it('os should be android', function() {
            result.os.name.should.equal('android');
        });
        it('os version should be 5.1.1', function() {
            result.os.version.should.equal('5.1.1');
        });
        it('browser should be yabrowser', function() {
            result.browser.name.should.equal('yabrowser');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be 16.4.0', function() {
            result.browser.version.should.equal('16.4.0');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('UC Browser on iOS 12.1', function(){
        var result = S('Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/16B92 UCBrowser/12.1.7.1109 Mobile AliApp(TUnionSDK/0.1.20.3)');
        it('os should be android', function() {
            result.os.name.should.equal('ios');
        });
        it('os version should be 12.1', function() {
            result.os.version.should.equal('12.1');
        });
        it('browser should be ucbrowser', function() {
            result.browser.name.should.equal('ucbrowser');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be 12.1.7', function() {
            result.browser.version.should.equal('12.1.7');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });

    describe('Chrome on Big Sur', function(){
        var result = S('Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36');
        it('os should be osx', function() {
            result.os.name.should.equal('osx');
        });
        it('os version should be 11.0.1', function() {
            result.os.version.should.equal('11.0.1');
        });
        it('os version name should be Big Sur', function() {
            result.os.versionName.should.equal('Big Sur');
        });
        it('browser should be chrome', function() {
            result.browser.name.should.equal('chrome');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be 87.0.4280', function() {
            result.browser.version.should.equal('87.0.4280');
        });
    });

    describe('UC Browser on Android 6.0.1', function(){
        var result = S('Mozilla/5.0 (Linux; U; Android 6.0.1; zh-CN; F5121 Build/34.0.A.1.247) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.2214.89 UCBrowser/11.5.1.944 Mobile Safari/537.36');
        it('os should be android', function() {
            result.os.name.should.equal('android');
        });
        it('os version should be 6.0.1', function() {
            result.os.version.should.equal('6.0.1');
        });
        it('browser should be ucbrowser', function() {
            result.browser.name.should.equal('ucbrowser');
        });
        it('engine should be webkit', function() {
            result.browser.engine.should.equal('webkit');
        });
        it('browser version should be 11.5.1', function() {
            result.browser.version.should.equal('11.5.1');
        });
        it('should be mobile', function() {
            result.features.mobile.should.be.true;
        });
    });
});

describe('Features', function(){
    describe('Mobile', function(){
        it('Mobile should match mobile', function() {
            var result = S('Mobile');
            result.features.mobile.should.be.true;
        });
        it('mobile should match mobile', function() {
            var result = S('mobile');
            result.features.mobile.should.be.true;
        });
        it('MOBILE should match mobile', function() {
            var result = S('MOBILE');
            result.features.mobile.should.be.true;
        });
    });

    describe('TV', function(){
        it('smarttv should match tv', function() {
            var result = S('smarttv');
            result.features.tv.should.be.true;
        });
        it('SMART-TV should match tv', function() {
            var result = S('SMART-TV');
            result.features.tv.should.be.true;
        });
        it('Smart-TV should match tv', function() {
            var result = S('Smart-TV');
            result.features.tv.should.be.true;
        });
    });
});


})(this);
