#Sniffer

Sniffer is a clientside browser/engine/os/device detection tool.

[Test your browser](http://wilddeer.github.io/Sniffer/test/)

[Test suite](http://wilddeer.github.io/Sniffer/test/mocha.htm)

##You have two options:

###1. Use default sniffer.js build

Get *sniffer.js* from [dist/](https://github.com/wilddeer/Sniffer/tree/master/dist). Drop the script tags in the `<head>`:

```js
<script src="path/to/sniffer.js"></script>
```

It will run automatically, collect the information on current device/os/browser and put the result in `window.Sniff` object (see [“Detection results”](#detection-results)). Now you can do horrible things:

```js
if (Sniff.os.name=='android' &&
	Sniff.os.majorVersion &&
	Sniff.os.majorVersion < 3 &&
	!Sniff.browser.name &&
	Sniff.browser.engine=='webkit') {
		//looks like default Android 2.x browser!
		myMagicOverflowScrollPolyfill();
}
```

It will also add browser name shortcode, browser engine shortcode, OS name shortcode and device features’ shortcodes to `<html>` tag’s className, so you can alter the styles accordingly (pretty much the Modernizr way):

```css
/* contrast colors for monochrome devices */
html.bw body {
	color: black;
	background: white;
}

/* make sure code snippets are readable in Opera Mini */
html.operamini pre code {
	white-space: pre-wrap;
}
```

###2. Use sniffer.pure.js

Get *sniffer.pure.js* from [dist/](https://github.com/wilddeer/Sniffer/tree/master/dist). It contains pure Sniffer function (no wrap, no autolaunch, no css classes), you decide how to use it. Just feed it a user agent string:

```js
Sniffer(userAgent)
```

It will return detection result, which will look like this &darr; 

##Detection results

```js
{
	browser: {
		fullName: String, // full human readable name
		name: String, // shortcode
		version: String, // semantic version, up to three parts (major.minor.patch)
		majorVersion: Number,
		minorVersion: Number,
		patchVersion: Number,
		engine: String // shortcode
	},
	os: {
		fullName: String, // full human readable name
		name: String, // shortcode
		version: String, // semantic version, up to three parts (major.minor.patch)
		versionName: String, // human readable version name, e.g. 'Vista', 'Mavericks', etc.
		versionAltNames: Array, // possible alternatives, e.g. Windows NT 5.2 can be 'XP' or 'Server 2003'
		majorVersion: Number,
		minorVersion: Number,
		patchVersion: Number
	},
	features: {
		bw: Boolean, /* black and white (e-book readers) */
		mobile: Boolean, /* includes phones, tablets, e-book readers, portable game consoles, etc. */
		tv: Boolean, /* smart tv */
		proxy: Boolean /* serverside js & rendering, like in Opera Mini */
	}
}
```

##Detects

Class names/shortcodes in square brackets.

**Browsers:**

- **Chrome** *[chrome]*
- **Firefox** *[firefox]*
- **IE** *[ie]*
- **Safari** *[safari]*
- **Opera** *[opera]*
- **Opera Mini** *[operamini]*
- **Opera Coast** *[coast]*
- **Nokia Browser** *[nokiabrowser]* (!= Nokia Xpress) — Symbian Belle phones
- **Ovi Browser** a.k.a **Nokia Xpress** *[ovi]* — Nokia Asha, Series40 &amp; Series60 phones, etc.
- **Sailfish Browser** *[sailfishbrowser]*

**Engines:**

- **WebKit** *[webkit]*
- **Gecko** *[gecko]*
- **Trident** *[trident]*
- **Presto** *[presto]*

**OS/Devices:**

- **Windows** *[win]*
- **Mac OS X** *[osx]*
- **Windows Phone** *[winphone]*
- **Android** *[android]*
- **iOS** *[ios]*
- **BlackBerry** *[blackberry]*
- **Sailfish OS** *[sailfish]*
- **Symbian** *[symbian]*
- **Kindle** *[kindle]* (Kindle Fire should be detected as Android)
- **PlayStation Vita** *[psvita]*
- **Nintendo DSi** *[dsi]*
- **Nintendo 3DS** *[3ds]*
- **Viera** *[viera]* (Panasonic Viera smart tv)

**Features:**

- **Black and white** *[bw]*
- **Mobile** *[mobile]*
- **TV** *[tv]*
- **Proxy broswer** (serverside rendering) *[proxy]*

##License

[MIT license](http://opensource.org/licenses/MIT).

Have fun, lads.
