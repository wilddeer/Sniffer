/*!
 * Sniffer is a clientside browser/engine/os/device detection tool
 * v. 1.0.0 | https://github.com/wilddeer/Sniffer
 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
 *
 * MIT License
 */
window.Sniffer = (function(win) {
	function _Sniffer(win) {
		var ua, platform, vendor,
			tag = document.getElementsByTagName('html')[0],
			data,
			sniff = {
				browser: {
					name: '',
					version: NaN,
					engine: ''
				},
				os: {
					name: '',
					version: NaN
				},
				features: {
					bw: false,
					mobile: false,
					tv: false,
					proxy: false
				}
			};

		//return initial sniff state in case no window object passed
		if (!win) return sniff;

		ua = win.navigator && win.navigator.userAgent;
		platform = win.navigator && win.navigator.platform;
		vendor = win.navigator && win.navigator.vendor;

		data = {
			browser: [
				// Sailfish
				{
					test: [
						{
							string: ua,
							search: 'SailfishBrowser'
						}
					],
					browser: {
						name: 'sailfishbrowser',
						engine: 'gecko',
						version: {
							string: ua,
							search: 'SailfishBrowser/'
						}
					},
					features: {
						mobile: true
					}
				},
				// IE
				{
					test: [
						{
							string: ua,
							search: 'MSIE'
						}
					],
					browser: {
						name: 'ie',
						engine: 'trident',
						version: {
							string: ua,
							search: 'MSIE '
						}
					}
				},
				// IE 11+
				{
					test: [
						{
							string: ua,
							search: 'Trident'
						}
					],
					browser: {
						name: 'ie',
						engine: 'trident',
						version: {
							string: ua,
							search: 'rv:'
						}
					}
				},
				// Opera 15+
				{
					test: [
						{
							string: vendor,
							search: 'Opera Software'
						}
					],
					browser: {
						engine: 'webkit',
						name: 'opera',
						version: {
							string: ua,
							search: 'OPR/'
						}
					}
				},
				// Chrome
				{
					test: [
						{
							string: ua,
							search: 'Chrome'
						}
					],
					browser: {
						engine: 'webkit',
						name: 'chrome',
						version: {
							string: ua,
							search: 'Chrome/'
						}
					}
				},
				// Firefox
				{
					test: [
						{
							string: ua,
							search: 'Firefox'
						}
					],
					browser: {
						name: 'firefox',
						engine: 'gecko',
						version: {
							string: ua,
							search: 'Firefox/'
						}
					}
				},
				// Nokia Browser (not Nokia Xpress)
				{
					test: [
						{
							string: ua,
							search: 'NokiaBrowser'
						}
					],
					browser: {
						engine: 'webkit',
						name: 'nokiabrowser',
						version: {
							string: ua,
							search: 'NokiaBrowser/'
						}
					},
					features: {
						mobile: true
					}
				},
				// Opera Mini Presto
				{
					test: [
						{
							string: ua,
							search: 'Opera Mini'
						},
						{
							string: ua,
							search: 'Presto'
						}
					],
					browser: {
						name: 'operamini',
						engine: 'presto',
						version: {
							string: ua,
							search: 'Version/'
						}
					},
					features: {
						mobile: true,
						proxy: true
					}
				},
				// Opera Mini Webkit - future proof
				{
					test: [
						{
							string: ua,
							search: 'Opera Mini'
						},
						{
							string: ua,
							search: 'WebKit'
						}
					],
					browser: {
						name: 'opera',
						engine: 'webkit'
					},
					features: {
						mobile: true,
						proxy: true
					}
				},
				// Opera
				{
					test: [
						{
							prop: win.opera
						}
					],
					browser: {
						name: 'opera',
						engine: 'presto',
						version: {
							string: ua,
							search: 'Version/'
						}
					}
				},
				// Ovi Browser = Nokia Xpress
				{
					test: [
						{
							string: ua,
							search: 'OviBrowser'
						}
					],
					browser: {
						name: 'ovi',
						engine: 'gecko',
						version: {
							string: ua,
							search: 'OviBrowser/'
						}
					},
					features: {
						mobile: true,
						proxy: true
					}
				},
				// some other webkit browser
				{
					test: [
						{
							string: ua,
							search: 'WebKit'
						}
					],
					browser: {
						engine: 'webkit'
					}
				},
				// some other gecko browser
				{
					test: [
						{
							string: ua,
							search: 'Gecko/'
						}
					],
					browser: {
						engine: 'gecko'
					}
				}
			],
			os: [
				// Sailfish
				{
					test: [
						{
							string: ua,
							search: 'Sailfish'
						}
					],
					os: {
						name: 'sailfish'
					},
					features: {
						mobile: true
					}
				},
				// Windows Phone
				{
					test: [
						{
							string: ua,
							search: 'Windows Phone'
						}
					],
					os: {
						name: 'winphone',
						version: {
							string: ua,
							search: 'Windows Phone '
						}
					},
					features: {
						mobile: true
					}
				},
				// Windows
				{
					test: [
						{
							string: platform,
							search: 'Win'
						}
					],
					os: {
						name: 'win'
					}
				},
				// Mac
				{
					test: [
						{
							string: platform,
							search: 'Mac'
						}
					],
					os: {
						name: 'mac'
					}
				},
				// iOS
				{
					test: [
						{
							string: ua,
							search: 'iPhone'
						}
					],
					os: {
						name: 'ios',
						version: {
							string: ua,
							search: 'iPhone OS '
						}
					},
					features: {
						mobile: true
					}
				},
				// Android
				{
					test: [
						{
							string: ua,
							search: 'Android'
						}
					],
					os: {
						name: 'android',
						version: {
							string: ua,
							search: 'Android '
						}
					},
					features: {
						mobile: true
					}
				},
				// BlackBerry
				{
					test: [
						{
							string: platform,
							search: 'BlackBerry'
						}
					],
					os: {
						name: 'blackberry',
						version: {
							string: ua,
							search: 'BB'
						}
					},
					features: {
						mobile: true
					}
				},
				// Symbian
				{
					test: [
						{
							string: ua,
							search: 'Symbian'
						}
					],
					os: {
						name: 'symbian'
					},
					features: {
						mobile: true
					}
				},
				// Symbian
				{
					test: [
						{
							string: ua,
							search: 'Series40'
						}
					],
					os: {
						name: 'symbian'
					},
					features: {
						mobile: true
					}
				},
				// Kindle
				{
					test: [
						{
							string: ua,
							search: 'Kindle'
						}
					],
					os: {
						name: 'kindle',
						version: {
							string: ua,
							search: 'Kindle/'
						}
					},
					features: {
						bw: true,
						mobile: true
					}
				},
				// PS Vita
				{
					test: [
						{
							string: ua,
							search: 'PlayStation Vita'
						}
					],
					os: {
						name: 'psvita'
					},
					features: {
						mobile: true
					}
				},
				// Nintendo DSi
				{
					test: [
						{
							string: ua,
							search: 'Nintendo DSi'
						}
					],
					os: {
						name: 'dsi'
					},
					features: {
						mobile: true
					}
				},
				// Nintendo 3DS
				{
					test: [
						{
							string: ua,
							search: 'Nintendo 3DS'
						}
					],
					os: {
						name: '3ds'
					},
					browser: {
						engine: 'webkit'
					},
					features: {
						mobile: true
					}
				},
				// Viera smart tv
				{
					test: [
						{
							string: ua,
							search: 'Viera'
						}
					],
					os: {
						name: 'viera'
					},
					browser: {
						engine: 'webkit'
					},
					features: {
						tv: true
					}
				},
				// something linux-based, could be anything
				{
					test: [
						{
							string: platform,
							search: 'Linux'
						}
					],
					os: {
						name: 'linux'
					}
				}
			],
			features: [
				{
					test: [
						{
							string: ua,
							search: 'mobile'
						}
					],
					features: {
						mobile: true
					}
				}
			]
		};

		function init() {
			for (var i in data) {
				test(data[i]);
			};

			setClasses();
		}

		function setClasses() {
			var className = [tag.className];

			sniff.browser.name && className.push(sniff.browser.name);
			sniff.browser.engine && className.push(sniff.browser.engine);
			sniff.os.name && className.push(sniff.os.name);

			for (var prop in sniff.features) {
				if (sniff.features[prop]) className.push(prop);
			}

			tag.className = className.join(' ');
		}

		function test(obj) {
			for (var i=0; i<obj.length; i++) {
				var test = true;

				for (var j=0; j<obj[i].test.length; j++) {
					if (!obj[i].test[j].string || !obj[i].test[j].search || obj[i].test[j].string.toLowerCase().indexOf(obj[i].test[j].search.toLowerCase()) == -1) {
						if (obj[i].test[j].prop === undefined) {
							test = false;
							break;
						}
					}
				}

				if (test) {
					apply(obj[i]);
					break;
				}
			}
		}

		function apply(obj) {
			for (var i in data) {
				if (obj[i]) {
					if (obj[i].version) {
						obj[i].version = getVersion(obj[i].version);
					}

					for (var prop in obj[i]) {
						sniff[i][prop] = obj[i][prop];
					}
				}
			};
		}
		
		function getVersion(obj) {
			var index = obj.string.indexOf(obj.search);
			if (index == -1) return NaN;
			return parseFloat(obj.string.substring(index+obj.search.length));
		}

		init();

		return sniff;
	}

	//expose _Sniffer function for testing
	if (win.SNIFFER_TEST_RUN) win._Sniffer = _Sniffer;

	return _Sniffer(win);
})(window);
