#Sniffer

##&rsquo;cause if you can&rsquo;t detect it, you should sniff it!

Sniffer is a clientside browser/engine/os/device detection tool

> -- Why you no feature-detect??/?//

I feature-detect like a boss. But when I can't, I use dirty hacks to help me out.

- Some features are just undetectable. For instance, `overflow: scroll` behavior on mobile devices is one of them. Use da Sniffer!
- You have to sniff [false-positive & false-negative detects](https://docs.google.com/spreadsheet/ccc?key=0AjA1cIs8C8MGdFdyQ0lMQnhMbHJEeVZpMW9XejhzU2c&usp=sharing) (my mobile browsers tests there).
- You want to support those two idiots coming to your site from Kindle? I do! Make 'em happy with contrast colors and disabled animations.

##Get it

- **sniffer.js** – full dev script
- **sniffer.min.js** – minified production script

##Use it

Just put it in the `<head>`, like so :

```js
<script src="path/to/sniffer.js"></script>
```

That's it. Now you'll have `Sniff` object in your global scope:

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
		majorVersion: Number,
		minorVersion: Number,
		patchVersion: Number,
	},
	features: {
		bw: Boolean, /* black and white (e-book readers) */
		mobile: Boolean,
		tv: Boolean,
		proxy: Boolean /* serverside js & rendering, like in Opera Mini */
	}
};
```

If Sniffer can't detect something, it will leave empty string for strings or `NaN` for numbers.
	
You'll also have browser name, browser engine name, OS name and device features as classes in `<thml>` tag. Use them to vary the styles:

```css
html.bw body {
	color: black;
	background: white;
}

/* fu, ovi! */
html.ovi body {
	color: red;
	background: green;
}

```

##Detects

Class names/shortcodes in square brackets.

**Browsers:**

- **Chrome** *[chrome]*
- **Firefox** *[firefox]*
- **IE** *[ie]*
- **Opera** *[opera]*
- **Opera Mini** *[operamini]*
- **Nokia Browser** *[nokiabrowser]* (!= Nokia Xpress) — Symbian Belle phones
- **Ovi Browser** a.k.a **Nokia Xpress** *[ovi]* — Nokia Asha, Series40 &amp; Series60 phones, etc.
- **Sailfish Browser** *[sailfishbrowser]*

No Safari, &rsquo;cause there is no reliable way to detect it. No, srsly. If you desperately want a Safari test, try `Sniffer.browser.name === undefined && Sniffer.browser.engine == 'webkit'`. Lots of other webkits will pass this test, though.

**Engines:**

- **WebKit** *[webkit]*
- **Gecko** *[gecko]*
- **Trident** *[trident]*
- **Presto** *[presto]*

**OS/Devices:**

- **Windows** *[win]*
- **Mac** *[mac]*
- **Windows Phone** *[winphone]*
- **Android** *[android]*
- **iOS** *[ios]*
- **Blackberry** *[blackberry]*
- **Sailfish** *[sailfish]*
- **Symbian** *[symbian]*
- **Kindle** *[kindle]* (Kindle Fire should be detected as Android)
- **PlayStation Vita** *[psvita]*
- **Nintendo DSi** *[dsi]*
- **Nintendo 3DS** *[3ds]*
- **Linux** *[linux]* — actually anything linux-based not from the list above

**Features:**

- **Black and white** *[bw]*
- **Mobile** *[mobile]*
- **TV** *[tv]*
- **Proxy broswer (serverside rendering)** *[proxy]*

##Script variations

###Pure

Pure Sniffer function (no wrap, no autolaunch, no css classes), you decide how to use it.

- **sniffer.pure.js** – full dev script
- **sniffer.pure.min.js** – minified production script

###Exposed

Default script + Sniffer function in global scope.

- **sniffer.exposed.js** – full dev script
- **sniffer.exposed.min.js** – minified production script

##License

[MIT license](http://opensource.org/licenses/MIT).

Have fun, lads.
