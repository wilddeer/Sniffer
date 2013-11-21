#Sniffer

##&rsquo;cause if u can&rsquo;t detect it, u should sniff it!

Sniffer is a clientside browser/engine/os/device detection tool

> -- Why u no feature-detect??/?//

I feature-detect like a boss. But when I can't, I use dirty hacks to help me out.

- Some features are just undetectable. For instance, `overflow: scroll` behavior on mobile devices is one of them. Use da Sniffer!
- You have to sniff [false-positives & false-negatives](https://docs.google.com/spreadsheet/ccc?key=0AjA1cIs8C8MGdFdyQ0lMQnhMbHJEeVZpMW9XejhzU2c&usp=sharing) (some of my mobile browsers tests there).
- You want to support those two idiots coming to your site from Kindle? I do! Make 'em happy with contrasting colors and disabled animations.

##Get it

- **sniffer.js** -- full dev script
- **sniffer.min.js** -- minified production script

##Use it

Put it in your `<head>`, where you keep your [Modernizr](http://modernizr.com) (Modernizr is not required, but you do use it, right?).

Now you have this beautiful object in your global scope:

````
{{> sniffer.object }}

````
	
You also have some fancy classes in your `HTML` tag: one for browser name, one for browser engine, one for OS name and one for each feature that appears to be true. Use them to vary the styles:

````
{{> sniffer.css.example }}

````

##Detects

Class/property names in square brackets.

**Browsers:**

{{#browser}}
- **{{name}}** *[{{prop}}]*{{comment.en}}
{{/browser}}

No Safari, &rsquo;cause there is no reliable way to detect it. No, srsly. If you desperately want a Safari test, try `Sniffer.browser.name === undefined && Sniffer.browser.engine == 'webkit'`. Lots of other webkits will pass this test, though.

**Engines:**

{{#engine}}
- **{{name}}** *[{{prop}}]*{{comment.en}}
{{/engine}}

**OS/Device:**

{{#os}}
- **{{name}}** *[{{prop}}]*{{comment.en}}
{{/os}}

**Features:**

{{#feature}}
- **{{name}}** *[{{prop}}]*{{comment.en}}
{{/feature}}

##License

[MIT license](http://opensource.org/licenses/MIT)

Have fun, lads.
