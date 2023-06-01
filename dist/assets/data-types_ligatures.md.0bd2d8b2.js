import{_ as e,o as a,c as t,O as o}from"./chunks/framework.c4d034b2.js";const p=JSON.parse('{"title":"Ligatures","description":"","frontmatter":{},"headers":[],"relativePath":"data-types/ligatures.md","filePath":"data-types/ligatures.md","lastUpdated":1685120040000}'),r={name:"data-types/ligatures.md"},s=o('<h1 id="ligatures" tabindex="-1">Ligatures <a class="header-anchor" href="#ligatures" aria-label="Permalink to &quot;Ligatures&quot;">​</a></h1><p>Ligatures are <code>Glyph</code> data type - they are a feature of fonts where a specified sequence of characters is recognized and replaced with a single new character that you design.</p><p>Some common Latin ligatures have an assigned Unicode code point (so, some Ligatures are Unicode Characters). But, <em>Ligatures can be defined by any sequence of two or more characters</em>. In a text editing program that has ligatures enabled, this sequence of characters is recognized, then replaced with the custom ligature character that you design. These custom Ligature characters are part of a font file, but they do not have an associated Unicode code point (some Ligatures are not Unicode Characters).</p><h2 id="common-use-cases" tabindex="-1">Common use cases <a class="header-anchor" href="#common-use-cases" aria-label="Permalink to &quot;Common use cases&quot;">​</a></h2><h3 id="traditional-latin" tabindex="-1">Traditional Latin <a class="header-anchor" href="#traditional-latin" aria-label="Permalink to &quot;Traditional Latin&quot;">​</a></h3><p>In Latin, there are some common ligatures that have been around for hundreds of years. These common ligatures are included in Unicode and have their own code point:</p><p><code>ae</code> -&gt; <code>æ</code>,  <code>AE</code> -&gt; <code>Æ</code>,  <code>ff</code> -&gt; <code>ﬀ</code>,  <code>fi</code> -&gt; <code>ﬁ</code>,  <code>fl</code> -&gt; <code>ﬂ</code>,  <code>oe</code> -&gt; <code>œ</code>,  <code>OE</code> -&gt; <code>Œ</code>,  <code>st</code> -&gt; <code>ﬆ</code>,  <code>ffi</code> -&gt; <code>ﬃ</code>,  <code>ffl</code> -&gt; <code>ﬄ</code></p><h3 id="cursive" tabindex="-1">Cursive <a class="header-anchor" href="#cursive" aria-label="Permalink to &quot;Cursive&quot;">​</a></h3><p>If you are creating a font that has a cursive or handwritten feel to it, Ligatures may be able to help you customize how two specific letters are attached. As a warning, permutations can add up quickly: even if you only did a Ligature character for every lowercase letter pair, that&#39;s still 676 Ligatures. It would probably be good to use a strategy where many of the characters connect at a common point (maybe around the baseline) and just use ligatures for edge cases. For example, lowercase <code>o</code> in cursive connects to the next letter somewhere between the baseline and the x height.</p><h3 id="abugidas" tabindex="-1">Abugidas <a class="header-anchor" href="#abugidas" aria-label="Permalink to &quot;Abugidas&quot;">​</a></h3><p>An <a href="https://en.wikipedia.org/wiki/Abugida" target="_blank" rel="noreferrer">abugida</a> is a writing system where consonants and vowels are written as a single unit. If you are developing your own Constructed Language (conlang) and want to have a font to use for you abugida-based writing system, then Ligatures are probably right for you.</p><p>Using Latin as an example, it would be like being able to type <code>n</code> and <code>~</code> together, then have them automatically form a <code>ñ</code>.</p><p>In this system you would need (number of consonants) x (number of vowels) amount of Ligature characters... but if the base consonants were designed as stand-alone characters first, they could easily be added to many other Ligatures as Components.</p>',13),n=[s];function i(c,d,u,h,l,g){return a(),t("div",null,n)}const f=e(r,[["render",i]]);export{p as __pageData,f as default};
