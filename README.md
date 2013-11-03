Sniffer
=======

'cause if u can't detect it, u should sniff it!

##Why u no feature-detect??/?////

I feature-detect like a boss. But when I can't, I use this shit to help me out.

- You can't reliably detect `overflow: scroll` behavior on mobile devices. And lot's of other stuff. Use da Sniffer!
- You have to sniff [false-positives](https://docs.google.com/spreadsheet/ccc?key=0AjA1cIs8C8MGdFdyQ0lMQnhMbHJEeVZpMW9XejhzU2c&usp=sharing) (some of my shitty tests there).
- You want to support those two idiots coming to your site from Kindle? I do! Make'em happy with contrast colors and disabled animations.

##Use it

Put it in your `<head>`, where you keep your Modernizr.

Now you have this beautiful object in your global scope:

	Sniffer = {
		browser: {
			name,
			engine,
			version
		},
		os: {
			name,
			version
		},
		features: {
			bw: bool, /* black-and-white */
			mobile: bool,
			serverside: bool /* serverside js & rendering, a-la Opera Mini */
		}
	}
	
You also have some fancy classes in your `HTML` tag: one for browser name, one for browser engine, one for OS name and one for each feature that appears to be true.

##Detects

**Browsers:**

- **Chrome** *[chrome]*
- **Firefox** *[firefox]*
- **IE** *[ie]*
- **Opera** *[opera]*
- **Opera Mini** *[operamini]*
- **Nokia Browser** *\[nokiabrowser\]* (!= Nokia Xpress) — Symbian Belle phones
- **Ovi Browser** a.k.a **Nokia Xpress** *[ovi]* — Nokia Asha, Series40 & Series60 phones

No Safari, 'cause there is no reliable way to detect it. No, srsly. If you desperately want Safari test, try `Sniffer.browser.name === undefined && Sniffer.browser.engine == 'webkit'`. Lots of other webkits will pass this test, though.

**Engines:**

- *webkit*
- *gecko*
- *trident*
- *presto*

**OS/Device:**

- **Windows** *[win]*
- **Mac** *[mac]*
- **Windows Phone** *[winphone]*
- **Android** *[android]*
- **iOS** *[ios]*
- **Blackberry** *[blackberry]*
- **Symbian** *[symbian]*
- **Kindle** *\[kindle\]* (Kindle Fire should be detected as Android)
- **Nintendo DSi** *[dsi]*
- **Nintendo 3DS** *[3ds]*
- **Linux** *[linux]* — actually anything linux-based not from the list above

**Features:**

- **Black and white** *[bw]*
- **Mobile** *[mobile]*
- **Serverside rendering** *[serverside]*

Have fun lads
