import{_ as a,c as t,o,ae as r}from"./chunks/framework.CB6Kt8Tg.js";const c="/help/assets/page_ligatures.H8Z-jV_K.png",p=JSON.parse('{"title":"Ligatures","description":"","frontmatter":{},"headers":[],"relativePath":"pages/ligatures.md","filePath":"pages/ligatures.md","lastUpdated":1714434308000}'),s={name:"pages/ligatures.md"};function i(n,e,d,h,u,l){return o(),t("div",null,e[0]||(e[0]=[r('<h1 id="ligatures" tabindex="-1">Ligatures <a class="header-anchor" href="#ligatures" aria-label="Permalink to &quot;Ligatures&quot;">​</a></h1><p>Ligatures are a feature of fonts where a specified sequence of characters is recognized and replaced with a single new character that you design. <em>Ligatures can have any sequence of two or more characters</em>. In a text editing program that has ligatures enabled, this sequence of characters is recognized, then replaced with the custom ligature character that you design.</p><p><img src="'+c+'" alt="Ligatures page"></p><p>Ligatures are a <code>Glyph</code> data type - they are a feature of fonts where a specified sequence of characters is recognized and replaced with a single new character that you design.</p><p>Some common Latin ligatures have an assigned Unicode code point (so, some Ligatures are Unicode Characters). But, <em>Ligatures can be defined by any sequence of two or more characters</em>. In a text editing program that has ligatures enabled, this sequence of characters is recognized, then replaced with the custom ligature character that you design. These custom Ligature characters are part of a font file, but they do not have an associated Unicode code point (some Ligatures are not Unicode Characters).</p><h3 id="note-about-ligature-characters-and-their-source-characters" tabindex="-1">Note about ligature characters and their source characters <a class="header-anchor" href="#note-about-ligature-characters-and-their-source-characters" aria-label="Permalink to &quot;Note about ligature characters and their source characters&quot;">​</a></h3><p><strong>Source characters must be below <code>U+FFFF</code></strong></p><p>Unicode characters above the Basic Multilingual Plane (above <code>U+FFFF</code>) are sometimes interpreted as a sequence of two characters, even though they have a single code point. In Glyphr Studio, this confuses how we define a Ligature. Specifying characters above <code>U+FFFF</code> is not allowed, as it causes unexpected behavior.</p><p><strong>Source characters must exist in the project</strong></p><p>Within the font file, Ligature characters are saved as a type of character that references two or more other characters in the font. Taking <code>ﬃ</code> as an example - usually you would design the <code>f</code> character and the <code>i</code> character, as well as create a Ligature for <code>ﬃ</code>, defined as <code>f</code> <code>f</code> <code>i</code>. In this case, the font has entries for all the &#39;source&#39; characters in the ligature.</p><p>You could, though, create a ligature for <code>ﬃ</code> without designing the individual <code>f</code> character. But, the missing <code>f</code> character would cause an error in the resulting font, because the ligature has nothing to reference. In this case, Glyphr Studio will create the <code>f</code> character for you to avoid this error. On export, for all of these &#39;missing source characters&#39;, a new character will be added to your project. This added character won&#39;t have any shapes or advance width, but it will be exported to your font file.</p><h2 id="common-use-cases" tabindex="-1">Common use cases <a class="header-anchor" href="#common-use-cases" aria-label="Permalink to &quot;Common use cases&quot;">​</a></h2><h3 id="traditional-latin" tabindex="-1">Traditional Latin <a class="header-anchor" href="#traditional-latin" aria-label="Permalink to &quot;Traditional Latin&quot;">​</a></h3><p>In Latin, there are some common ligatures that have been around for hundreds of years. These common ligatures are included in Unicode and have their own code point:</p><p><code>ae</code> -&gt; <code>æ</code>,  <code>AE</code> -&gt; <code>Æ</code>,  <code>ff</code> -&gt; <code>ﬀ</code>,  <code>fi</code> -&gt; <code>ﬁ</code>,  <code>fl</code> -&gt; <code>ﬂ</code>,  <code>oe</code> -&gt; <code>œ</code>,  <code>OE</code> -&gt; <code>Œ</code>,  <code>st</code> -&gt; <code>ﬆ</code>,  <code>ffi</code> -&gt; <code>ﬃ</code>,  <code>ffl</code> -&gt; <code>ﬄ</code></p><h3 id="cursive" tabindex="-1">Cursive <a class="header-anchor" href="#cursive" aria-label="Permalink to &quot;Cursive&quot;">​</a></h3><p>If you are creating a font that has a cursive or handwritten feel to it, Ligatures may be able to help you customize how two specific letters are attached. As a warning, permutations can add up quickly: if you made a Ligature character for every lowercase letter pair, that&#39;s 676 Ligatures you have to design. It would probably be good to use a strategy where many of the characters connect at a common point (maybe around the baseline) and just use ligatures for edge cases. For example, lowercase <code>o</code> in cursive connects to the next letter somewhere between the baseline and the x height.</p><h3 id="abugidas" tabindex="-1">Abugidas <a class="header-anchor" href="#abugidas" aria-label="Permalink to &quot;Abugidas&quot;">​</a></h3><p>An <a href="https://en.wikipedia.org/wiki/Abugida" target="_blank" rel="noreferrer">abugida</a> is a writing system where consonants and vowels are written as a single letter. If you are developing your own Constructed Language (conlang) and want to have a font to use for you abugida-based writing system, then Ligatures are probably right for you.</p><p>Using Latin as an example, it would be like being able to type <code>n</code> and <code>~</code> together, then have them automatically form a <code>ñ</code>.</p><p>In this system you would need (number of consonants) x (number of vowels) amount of Ligature characters... again, this could result in a very large set of Ligatures you need to design. This could be lessened if the base consonants were designed as stand-alone characters first, they could easily be added to many other Ligatures as <a href="./components.html">Components</a>.</p><p>Another strategy for creating an Abugida font may not leverage Ligatures. If your vowels have the same position no matter what it&#39;s base consonant looks like, then you could choose either all your vowels or all your consonants to have zero advance width. This means whatever character is typed next would be placed &quot;over&quot; the first character. The advantage of this system would be having to avoid having to create ligature characters for every single permutation, at the cost of not being able to place glyph elements in custom locations.</p>',22)]))}const f=a(s,[["render",i]]);export{p as __pageData,f as default};
