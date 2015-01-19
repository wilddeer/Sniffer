var S = Sniffer,
    expect = chai.expect;

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
            it('browser should be not ok', function() {
                result.browser.name.should.be.not.ok;
            });
            it('engine should be webkit', function() {
                result.browser.engine.should.equal('webkit');
            });
            it('browser version should be not ok', function() {
                result.browser.version.should.be.not.ok;
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
    });

    describe('Mac OS X', function(){
        describe('Safari 4 on Snow Leopard', function(){
            var result = S('Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; en-us) AppleWebKit/531.22.7 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7');
            it('os should be osx', function() {
                result.os.name.should.equal('osx');
            });
            it('os version should be 6', function() {
                result.os.version.should.equal('6');
            });
            it('os version name should be Snow Leopard', function() {
                result.os.versionName.should.equal('Snow Leopard');
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
        });

        describe('Firefox 4 on Snow Leopard', function(){
            var result = S('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:2.0.1) Gecko/20100101 Firefox/4.0.1');
            it('os should be osx', function() {
                result.os.name.should.equal('osx');
            });
            it('os version should be 6', function() {
                result.os.version.should.equal('6');
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
            it('os version should be 6.8', function() {
                result.os.version.should.equal('6.8');
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
    });
});


describe('Devices', function(){
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
});
