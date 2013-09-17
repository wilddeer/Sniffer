Sniffer
=======

'cause when u can't detect it, u should sniff it!

##Why u no feature-detect??/?////

I feature-detect like a boss. But when I can't, I use this shit to help me out.

- You cant reliably detect `overflow: scroll` behavior on mobile devices. And lot's of other stuff. Use da Sniffer!
- You have to sniff [false-positives](https://docs.google.com/spreadsheet/ccc?key=0AjA1cIs8C8MGdFdyQ0lMQnhMbHJEeVZpMW9XejhzU2c&usp=sharing) (some of my shitty tests there).
- You want to support those two idiots coming to your site from Kindle? I do! Make'em happy with contrast colors and disabled animations.

##Use it

Put it in your `<head>`, somewhere where you keep your Modernizr.

Now you have this beautifull object in your global scope:

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
			bw: true/undefined,
			mobile: true/undefined,
			serverside: true/undefined
		}
	}
	
You also have some fancy classes in your `HTML` tag: one for browser name, one for browser engine, one for os name and one for every feature that appears to be true.
