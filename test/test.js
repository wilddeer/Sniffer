var S = _Sniffer,
    html = document.querySelector('html');

chai.should();

beforeEach(function(){
    html.className = '';
});

describe('Edge cases', function(){
    describe('Nothing passed to function', function(){
        it('should not die', function(){
            var result = S();

            result.os.name.should.be.not.ok;
            result.os.version.should.be.not.ok;
            result.browser.name.should.be.not.ok;
            result.browser.engine.should.be.not.ok;
            result.browser.version.should.be.not.ok;
            result.features.mobile.should.be.false;
            result.features.proxy.should.be.false;
            result.features.tv.should.be.false;
            result.features.bw.should.be.false;

            html.className.should.match(/\s*/);
        });
    });

    describe('No navigator', function(){
        it('should not die', function(){
            var result = S({});

            result.os.name.should.be.not.ok;
            result.os.version.should.be.not.ok;
            result.browser.name.should.be.not.ok;
            result.browser.engine.should.be.not.ok;
            result.browser.version.should.be.not.ok;
            result.features.mobile.should.be.false;
            result.features.proxy.should.be.false;
            result.features.tv.should.be.false;
            result.features.bw.should.be.false;

            html.className.should.match(/\s*/);
        });
    });

    describe('No userAgent, platform, vendor', function(){
        it('should not die', function(){
            var result = S({
                navigator: {}
            });

            result.os.name.should.be.not.ok;
            result.os.version.should.be.not.ok;
            result.browser.name.should.be.not.ok;
            result.browser.engine.should.be.not.ok;
            result.browser.version.should.be.not.ok;
            result.features.mobile.should.be.false;
            result.features.proxy.should.be.false;
            result.features.tv.should.be.false;
            result.features.bw.should.be.false;

            html.className.should.match(/\s*/);
        });
    });
});


describe('Devices', function(){
    describe('Jolla', function(){
        it('sailfish sailfishbrowser gecko mobile', function(){
            var result = S({
                navigator: {
                    userAgent: 'Mozilla/5.0 (Maemo; Linux; U; Jolla; Sailfish; Mobile; rv:31.0) Gecko/31.0 Firefox/31.0 SailfishBrowser/1.0',
                    platform: 'Linux armv7l',
                    vendor: ''
                }
            });

            result.os.name.should.equal('sailfish');
            result.os.version.should.be.not.ok;
            result.browser.name.should.equal('sailfishbrowser');
            result.browser.engine.should.equal('gecko');
            result.browser.version.should.equal(1);
            result.features.mobile.should.be.true;

            html.className.replace(/^\s|\s$/, '').split(' ').should.have.members('sailfish sailfishbrowser gecko mobile'.split(' '));

        });
    });

    describe('Viera Smart TV (TX-LR32E6)', function(){
        it('viera webkit tv', function(){
            var result = S({
                navigator: {
                    userAgent: 'Mozilla/5.0 (X11; FreeBSD; U; Viera; ru-RU) AppleWebKit/537.11 (KHTML, like Gecko) Viera/3.3.2 Chrome/23.0.1271.97 Safari/537.11',
                    platform: 'Linux',
                    vendor: 'Panasonic'
                }
            });

            result.os.name.should.equal('viera');
            result.os.version.should.be.not.ok;
            result.browser.engine.should.equal('webkit');
            result.browser.version.should.equal(23);
            result.features.tv.should.be.true;
        });
    });

    describe('PlayStation Vita', function(){
        it('os: psvita, engine: webkit, mobile', function(){
            var result = S({
                navigator: {
                    userAgent: 'Mozilla/5.0 (PlayStation Vita 3.01) AppleWebKit/536.26 (KHTML, like Gecko) Silk/3.2',
                    platform: '',
                    vendor: 'Apple Computer, Inc.'
                }
            });

            result.os.name.should.equal('psvita');
            result.os.version.should.be.not.ok;
            result.browser.engine.should.equal('webkit');
            result.browser.version.should.be.not.ok;
            result.features.mobile.should.be.true;
        });
    });

    describe('Nintendo 3DS', function(){
        it('os: 3ds, engine: webkit, mobile', function(){
            var result = S({
                navigator: {
                    userAgent: 'Mozilla/5.0 (Nintendo 3DS; U; ; ru) Version/1.7552.EU'
                }
            });

            result.os.name.should.equal('3ds');
            result.os.version.should.be.not.ok;
            result.browser.engine.should.equal('webkit');
            result.browser.version.should.be.not.ok;
            result.features.mobile.should.be.true;
        });
    });

    describe('Nintendo DSi', function(){
        it('os: dsi, browser: opera, engine: presto, mobile', function(){
            var result = S({
                opera: {},
                navigator: {
                    userAgent: 'Opera/9.50 (Nintendo DSi; Opera/507; U; en-US)',
                    platform: 'Nintendo DSi'
                }
            });

            result.os.name.should.equal('dsi');
            result.os.version.should.be.not.ok;
            result.browser.name.should.equal('opera');
            result.browser.engine.should.equal('presto');
            result.browser.version.should.be.not.ok;
            result.features.mobile.should.be.true;
        });
    });

    describe('Kindle Paperwhite', function(){
        it('engine: webkit, os: linux, nothing else can be detected from this UA', function(){
            var result = S({
                navigator: {
                    userAgent: 'Mozilla/5.0 (X11; ; U; Linux armv7l; en-us) AppleWebKit/534.26+ (KHTML, like Gecko) Version/5.0 Safari/534.26+',
                    platform: 'Linux armv7l',
                    vendor: 'Apple Inc.'
                }
            });

            result.os.name.should.be.equal('linux');
            result.os.version.should.be.not.ok;
            result.browser.name.should.be.not.ok;
            result.browser.engine.should.equal('webkit');
            result.browser.version.should.be.not.ok;
            result.features.mobile.should.be.false;
        });
    });

    describe('Kindle Keyboard', function(){
        it('os: kindle, engine: webkit, mobile, bw', function(){
            var result = S({
                navigator: {
                    userAgent: 'Mozilla/5.0 (Linux; U; en-US) AppleWebKit/528.5+ (KHTML, like Gecko, Safari/528.5+) Version/4.0 Kindle/3.0 (screen 600x800; rotate)'
                }
            });

            result.os.name.should.be.equal('kindle');
            result.os.version.should.be.equal(3);
            result.browser.name.should.be.not.ok;
            result.browser.engine.should.equal('webkit');
            result.browser.version.should.be.not.ok;
            result.features.mobile.should.be.true;
            result.features.bw.should.be.true;
        });
    });

    describe('Ovi (Nokia Xpress)', function(){
        it('os: kindle, browser: ovi, engine: gecko, mobile, proxy', function(){
            var result = S({
                navigator: {
                    userAgent: 'Mozilla/5.0 (Series40; Nokia501/11.1.1/ java_runtime_version=Nokia_Asha_1_1_1; Profile/MIDP-2.1 Configuration/CLDC-1.1) Gecko/20100401 S40OviBrowser/3.0.0.0.73',
                    platform: 'Linux x86_64',
                    vendor: ''
                }
            });

            result.os.name.should.be.equal('symbian');
            result.os.version.should.be.not.ok;
            result.browser.name.should.be.equal('ovi');
            result.browser.engine.should.equal('gecko');
            result.browser.version.should.be.equal(3);
            result.features.mobile.should.be.true;
            result.features.proxy.should.be.true;
        });
    });
});
