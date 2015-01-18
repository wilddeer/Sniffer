/*!
 * Sniffer is a clientside browser/engine/os/device detection tool
 * v. 1.0.0 | https://github.com/wilddeer/Sniffer
 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
 *
 * MIT License
 */

(function() {
	function Sniffer(win) {
		var ua, platform, vendor,
			data,
			sniff = {
				browser: {
					fullName: '',
					name: '',
					version: '',
					majorVersion: NaN,
					minorVersion: NaN,
					patchVersion: NaN,
					engine: ''
				},
				os: {
					fullName: '',
					name: '',
					version: '',
					versionName: '',
					majorVersion: NaN,
					minorVersion: NaN,
					patchVersion: NaN,
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
						fullName: 'Sailfish Browser',
						name: 'sailfishbrowser',
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
						fullName: 'Internet Explorer',
						name: 'ie',
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
						fullName: 'Internet Explorer',
						name: 'ie',
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
						fullName: 'Opera',
						name: 'opera',
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
						fullName: 'Chrome',
						name: 'chrome',
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
						fullName: 'Firefox',
						name: 'firefox',
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
						fullName: 'Nokia Browser',
						name: 'nokiabrowser',
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
						fullName: 'Opera Mini',
						name: 'operamini',
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
						fullName: 'Opera Mini',
						name: 'operamini',
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
						fullName: 'Opera',
						name: 'opera',
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
						fullName: 'Ovi Browser',
						name: 'ovi',
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
						fullName: 'Sailfish OS',
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
						fullName: 'Windows Phone',
						name: 'winphone',
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
						fullName: 'Windows',
						name: 'win',
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
						fullName: 'Mac OS X',
						name: 'osx',
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
						fullName: 'iOS',
						name: 'ios',
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
						fullName: 'Android',
						name: 'android',
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
						fullName: 'BlackBerry',
						name: 'blackberry',
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
						fullName: 'Symbian',
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
						fullName: 'Symbian',
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
						fullName: 'Kindle',
						name: 'kindle',
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
						fullName: 'PlayStation Vita',
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
						fullName: 'Nintendo DSi',
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
						fullName: 'Nintendo 3DS',
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
						fullName: 'Viera',
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
						fullName: 'Linux',
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
	
							obj[i].version = version,
							obj[i].majorVersion = (semverArr[0]? parseInt(semverArr[0]): NaN);
							obj[i].minorVersion = (semverArr[1]? parseInt(semverArr[1]): NaN);
							obj[i].patchVersion = (semverArr[2]? parseInt(semverArr[2]): NaN);
	
							if (obj[i].$version.names) {
								obj[i].versionName = obj[i].$version.names[version] || '';
							}
						}
					}
	
					for (var prop in obj[i]) {
						if (obj[i].hasOwnProperty(prop) && prop[0] !== '$') sniff[i][prop] = obj[i][prop];
					}
				}
			}
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
	
	//run Sniffer
	window.Sniff = Sniffer(window);
	
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
	
})();