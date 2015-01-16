window.Sniffer = (function(win) {
	function _Sniffer(win) {
		var ua, platform, vendor,
			tag = document.getElementsByTagName('html')[0],
			data,
			sniff = {
				browser: {
					name: '',
					shortname: '',
					version: {
						major: NaN,
						minor: NaN,
						patch: NaN
					},
					engine: ''
				},
				os: {
					name: '',
					shortname: '',
					version: {
						name: '',
						string: '',
						major: NaN,
						minor: NaN,
						patch: NaN
					}
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
						name: 'Sailfish Browser',
						shortname: 'sailfishbrowser',
						engine: 'gecko',
						$version: {
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
						name: 'Internet Explorer',
						shortname: 'ie',
						engine: 'trident',
						$version: {
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
						name: 'Internet Explorer',
						shortname: 'ie',
						engine: 'trident',
						$version: {
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
						name: 'Opera',
						shortname: 'opera',
						engine: 'webkit',
						$version: {
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
						name: 'Chrome',
						shortname: 'chrome',
						engine: 'webkit',
						$version: {
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
						name: 'Firefox',
						shortname: 'firefox',
						engine: 'gecko',
						$version: {
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
						name: 'Nokia Browser',
						shortname: 'nokiabrowser',
						engine: 'webkit',
						$version: {
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
						name: 'Opera Mini',
						shortname: 'operamini',
						engine: 'presto',
						$version: {
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
						name: 'Opera Mini',
						shortname: 'operamini',
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
						name: 'Opera',
						shortname: 'opera',
						engine: 'presto',
						$version: {
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
						name: 'Ovi Browser',
						shortname: 'ovi',
						engine: 'gecko',
						$version: {
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
						name: 'Sailfish OS',
						shortname: 'sailfish'
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
						name: 'Windows Phone',
						shortname: 'winphone',
						$version: {
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
						name: 'Windows',
						shortname: 'win',
						$version: {
							string: ua,
							search: 'Windows NT ',
							names: {
								'6.3': '8.1',
								'6.2': '8',
								'6.1': '7',
								'6.0': 'Vista',
								'5.2': 'Server 2003 / XP x64 Edition',
								'5.1': 'XP',
								'5.01': '2000',
								'5.0': '2000'
							}
						}
					}
				},
				// Mac OS X
				{
					test: [
						{
							string: platform,
							search: 'Mac'
						},
						{
							string: ua,
							search: 'OS X 10'
						}
					],
					os: {
						name: 'Mac OS X',
						shortname: 'osx',
						$version: {
							string: ua,
							search: /OS X 10(_|\.)/,
							names: {
								'6': 'Snow Leopard',
								'7': 'Lion',
								'8': 'Mountain Lion',
								'9': 'Mavericks',
								'10': 'Yosemite'
							}
						}
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
						name: 'iOS',
						shortname: 'ios',
						$version: {
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
						name: 'Android',
						shortname: 'android',
						$version: {
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
						name: 'BlackBerry',
						shortname: 'blackberry',
						$version: {
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
						name: 'Symbian',
						shortname: 'symbian'
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
						name: 'Symbian',
						shortname: 'symbian'
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
						name: 'Kindle',
						shortname: 'kindle',
						$version: {
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
						name: 'PlayStation Vita',
						shortname: 'psvita'
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
						name: 'Nintendo DSi',
						shortname: 'dsi'
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
						name: 'Nintendo 3DS',
						shortname: '3ds'
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
						name: 'Viera',
						shortname: 'viera'
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
						name: 'Linux',
						shortname: 'linux'
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

			sniff.browser.shortname && className.push(sniff.browser.shortname);
			sniff.browser.engine && className.push(sniff.browser.engine);
			sniff.os.shortname && className.push(sniff.os.shortname);

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
					if (obj[i].$version) {
						var version = getVersion(obj[i].$version);

						if (version) {
							var semverArr = version.split('.');

							obj[i].version = {
								string: version,
								major: (semverArr[0]? parseInt(semverArr[0]): NaN),
								minor: (semverArr[1]? parseInt(semverArr[1]): NaN),
								patch: (semverArr[2]? parseInt(semverArr[2]): NaN),
								name: (obj[i].$version.names? obj[i].$version.names[version] || '': '')
							};
						}
					}

					for (var prop in obj[i]) {
						if (obj[i].hasOwnProperty(prop) && prop[0] !== '$') sniff[i][prop] = obj[i][prop];
					}
				}
			};
		}

		function getVersion(obj) {
			var search;

			if (obj.search instanceof RegExp) {
				search = (obj.string.match(obj.search) || [])[0];

				if (!search) return;
			}
			else {
				search = obj.search;
			}

			var index = obj.string.indexOf(search),
				substring;

			if (index == -1) return;

			substring = obj.string.substring(index+search.length);
			regexpResult = /^(\d+\.){0,2}\d+/.exec(substring);

			if (!regexpResult) return;

			return regexpResult[0];
		}

		init();

		return sniff;
	}

	//expose _Sniffer function for testing
	if (win.SNIFFER_TEST_RUN) win._Sniffer = _Sniffer;

	return _Sniffer(win);
})(window);
