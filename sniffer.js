/*
	puper duper sniffer
	copyright dizaina.net
*/

var Sniffer = {
	browser: {
		/*
		name
		version
		engine
		*/
	},
	os: {
		/*
		name
		version
		*/
	},
	features: {
		/*
		bw
		mobile
		serverside
		*/
	},
	things: [
		'browser',
		'os',
		'features'
	],
	init: function () {
		for (var i = this.things.length - 1; i >= 0; i--) {
			this.test(this[this.things[i]+'Data']);
		};
		
		this.setClasses();
	},
	setClasses: function() {
		var tag = document.getElementsByTagName('html')[0],
			className = [tag.className];

		this.browser.name && className.push(this.browser.name);
		this.browser.engine && className.push(this.browser.engine);
		this.os.name && className.push(this.os.name);

		for (var prop in this.features) {
			className.push(prop);
		}

		tag.className = className.join(' ');
	},
	test: function(data) {
		var _this = this;
		for (var i=0; i<data.length; i++)	{
			var test = true;

			for (var j=0; j<data[i].test.length; j++) {
				if (!data[i].test[j].string || !data[i].test[j].search || data[i].test[j].string.indexOf(data[i].test[j].search) == -1) {
					if (data[i].test[j].prop === undefined) {
						test = false;
						break;
					}
				}
			}

			if (test) {
				_this.apply(data[i]);
				break;
			}
		}
	},
	apply: function(data) {
		var _this = this;

		for (var i = _this.things.length - 1; i >= 0; i--) {
			if (data[_this.things[i]]) {
				if (data[_this.things[i]].version) {
					data[_this.things[i]].version = _this.getVersion(data[_this.things[i]].version);
				}

				for (var prop in data[_this.things[i]]) {
					_this[_this.things[i]][prop] = data[_this.things[i]][prop];
				}
			}
		};
	},
	getVersion: function (data) {
		var index = data.string.indexOf(data.search);
		if (index == -1) return undefined;
		return parseFloat(data.string.substring(index+data.search.length));
	},
	browserData: [
		// IE
		{
			test: [
				{
					string: navigator.userAgent,
					search: 'MSIE'
				}
			],
			browser: {
				name: 'ie',
				engine: 'trident',
				version: {
					string: navigator.userAgent,
					search: 'MSIE '
				}
			}
		},
		// Opera 15+
		{
			test: [
				{
					string: navigator.vendor,
					search: 'Opera Software'
				}
			],
			browser: {
				engine: 'webkit',
				name: 'opera',
				version: {
					string: navigator.userAgent,
					search: 'OPR/'
				}
			}
		},
		// Chrome
		{
			test: [
				{
					string: navigator.userAgent,
					search: 'Chrome'
				}
			],
			browser: {
				engine: 'webkit',
				name: 'chrome',
				version: {
					string: navigator.userAgent,
					search: 'Chrome/'
				}
			}
		},
		// Firefox
		{
			test: [
				{
					string: navigator.userAgent,
					search: 'Firefox'
				}
			],
			browser: {
				name: 'firefox',
				engine: 'gecko',
				version: {
					string: navigator.userAgent,
					search: 'Firefox/'
				}
			}
		},
		// Nokia Browser (not Nokia Xpress)
		{
			test: [
				{
					string: navigator.userAgent,
					search: 'NokiaBrowser'
				}
			],
			browser: {
				engine: 'webkit',
				name: 'nokiabrowser',
				version: {
					string: navigator.userAgent,
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
					string: navigator.userAgent,
					search: 'Opera Mini'
				},
				{
					string: navigator.userAgent,
					search: 'Presto'
				}
			],
			browser: {
				name: 'operamini',
				engine: 'presto',
				version: {
					string: navigator.userAgent,
					search: 'Version/'
				}
			},
			features: {
				mobile: true,
				serverside: true
			}
		},
		// Opera Mini Webkit - future proof
		{
			test: [
				{
					string: navigator.userAgent,
					search: 'Opera Mini'
				},
				{
					string: navigator.userAgent,
					search: 'WebKit'
				}
			],
			browser: {
				name: 'opera',
				engine: 'webkit'
			},
			features: {
				mobile: true,
				serverside: true
			}
		},
		// Nintendo Browser
		{
			test: [
				{
					string: navigator.userAgent,
					search: 'Opera'
				},
				{
					string: navigator.userAgent,
					search: 'Nintendo'
				}
			],
			browser: {
				name: 'nintendobrowser',
				engine: 'presto',
				version: {
					string: navigator.userAgent,
					search: 'Opera/'
				}
			},
			features: {
				mobile: true
			}
		},
		// Opera
		{
			test: [
				{
					prop: window.opera
				}
			],
			browser: {
				name: 'opera',
				engine: 'presto',
				version: {
					string: navigator.userAgent,
					search: 'Version/'
				}
			}
		},
		// Ovi Browser = Nokia Xpress
		{
			test: [
				{
					string: navigator.userAgent,
					search: 'OviBrowser'
				}
			],
			browser: {
				name: 'ovi',
				version: {
					string: navigator.userAgent,
					search: 'OviBrowser/'
				}
			},
			features: {
				mobile: true,
				serverside: true
			}
		},
		// some other webkit browser
		{
			test: [
				{
					string: navigator.userAgent,
					search: 'WebKit'
				}
			],
			browser: {
				engine: 'webkit'
			}
		}
	],
	osData: [
		// Windows Phone
		{
			test: [
				{
					string: navigator.userAgent,
					search: 'Windows Phone'
				}
			],
			os: {
				name: 'winphone',
				version: {
					string: navigator.userAgent,
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
					string: navigator.platform,
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
					string: navigator.platform,
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
					string: navigator.userAgent,
					search: 'iPhone'
				}
			],
			os: {
				name: 'ios',
				version: {
					string: navigator.userAgent,
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
					string: navigator.userAgent,
					search: 'Android'
				}
			],
			os: {
				name: 'android',
				version: {
					string: navigator.userAgent,
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
					string: navigator.platform,
					search: 'BlackBerry'
				}
			],
			os: {
				name: 'blackberry',
				version: {
					string: navigator.userAgent,
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
					string: navigator.userAgent,
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
					string: navigator.userAgent,
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
					string: navigator.userAgent,
					search: 'Kindle'
				}
			],
			os: {
				name: 'kindle',
				version: {
					string: navigator.userAgent,
					search: 'Kindle/'
				}
			},
			features: {
				bw: true,
				mobile: true
			}
		},
		// Nintendo DSi
		{
			test: [
				{
					string: navigator.userAgent,
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
		// something linux-based, could be anything
		{
			test: [
				{
					string: navigator.platform,
					search: 'Linux'
				}
			],
			os: {
				name: 'linux'
			}
		}
	],
	featuresData: [
		{
			test: [
				{
					string: navigator.userAgent,
					search: 'mobile'
				}
			],
			features: {
				mobile: true
			}
		},
		{
			test: [
				{
					string: navigator.userAgent,
					search: 'Mobile'
				}
			],
			features: {
				mobile: true
			}
		}
	]
};

Sniffer.init();