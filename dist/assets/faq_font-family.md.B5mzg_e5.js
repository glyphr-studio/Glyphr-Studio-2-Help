import{_ as e,c as a,o,a1 as t}from"./chunks/framework.BupF6_oJ.js";const u=JSON.parse('{"title":"Font family","description":"","frontmatter":{},"headers":[],"relativePath":"faq/font-family.md","filePath":"faq/font-family.md","lastUpdated":1709769606000}'),i={name:"faq/font-family.md"},n=t('<h1 id="font-family" tabindex="-1">Font family <a class="header-anchor" href="#font-family" aria-label="Permalink to &quot;Font family&quot;">​</a></h1><h3 id="how-do-i-make-multiple-fonts-exported-from-glyphr-studio-be-recognizable-as-a-family-in-other-programs" tabindex="-1">How do I make multiple fonts exported from Glyphr Studio be recognizable as a family in other programs? <a class="header-anchor" href="#how-do-i-make-multiple-fonts-exported-from-glyphr-studio-be-recognizable-as-a-family-in-other-programs" aria-label="Permalink to &quot;How do I make multiple fonts exported from Glyphr Studio be recognizable as a family in other programs?&quot;">​</a></h3><p>This was a big challenge over the years, based on a bug in how OpenType.js exported font files. It was recently fixed, so if you follow these simple guidelines, fonts should be recognized as a family:</p><p><strong>On the Settings &gt; Font page</strong> ensure the following for the set of fonts you are wanting to family together:</p><ul><li><code>Font family</code> is the same across all the font files.</li><li><code>Font style</code> is accurate and unique across all the font files.</li><li><code>Font weight</code> is accurate, and corresponds to the Font Style field.</li><li><code>Italic angle</code> is accurate, and corresponds to the Font Style field.</li></ul><p>Figuring out what exactly is looked at to determine a font family took trial and error, so if you encounter a set of fonts that don&#39;t seem to be recognized as a family, please email us at <a href="mailto:mail@glyphrstudio.com" target="_blank" rel="noreferrer">mail@glyphrstudio.com</a> and we can adjust the code to enable it.</p><h3 id="what-can-go-wrong" tabindex="-1">What can go wrong <a class="header-anchor" href="#what-can-go-wrong" aria-label="Permalink to &quot;What can go wrong&quot;">​</a></h3><p>There are many fonts that exist in isolation, without Bold or Italic variations. Word processor apps usually compensate for this by having a built-in capability to do &quot;fake bold&quot; (basically add weight uniformly around shapes) and &quot;fake italic&quot; (just skewing shapes, otherwise known as &#39;oblique&#39;).</p><p>If a set of fonts are properly recognized as a family by your operating system and word processor, trying to bold or italic some text will result in using the other fonts in the family, as opposed to these &quot;fake&quot; variants that are automatically generated.</p><p>Other signs for a set of font files not being recognized as a family is if the individual files are shown as different font choices. In your word processor app&#39;s font menu, they may be listed separately, like:</p><ul><li>Font Name Regular</li><li>Font Name Bold</li><li>Font Name Italic</li></ul><p>As opposed to just seeing &quot;Font Name&quot; with the Bold and Italic variants used when those styles are applied.</p><p>If you are trying to design a font family and are encountering these signs, go back and ensure all the fonts&#39; metadata is correct.</p>',13),s=[n];function l(r,d,f,c,h,p){return o(),a("div",null,s)}const g=e(i,[["render",l]]);export{u as __pageData,g as default};
