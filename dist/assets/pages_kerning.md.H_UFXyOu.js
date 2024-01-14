import{_ as e,o as a,c as n,R as t}from"./chunks/framework.Ytfnxf9G.js";const r="/v2/help/assets/page_kerning.KAYGM_bb.png",f=JSON.parse('{"title":"Kerning","description":"","frontmatter":{},"headers":[],"relativePath":"pages/kerning.md","filePath":"pages/kerning.md","lastUpdated":1705020331000}'),s={name:"pages/kerning.md"},i=t('<h1 id="kerning" tabindex="-1">Kerning <a class="header-anchor" href="#kerning" aria-label="Permalink to &quot;Kerning&quot;">​</a></h1><p>Kerning is an advanced feature of fonts that recognizes a pair of characters, then adjusts the spacing between them to some custom value. The default spacing between characters is zero - which is to say, the white space (side bearings) within each character are the only space shown.</p><p><img src="'+r+'" alt="Kerning page"></p><p>Some letter combinations, like <code>VA</code> as an example, if the default side bearing spacing is used, the letters visually look very far apart. Kerning can help the visual flow of character pairs look more well considered. Many character pairs may need either negative or positive kern values to make them &quot;look right&quot;.</p><h2 id="class-based-kerning" tabindex="-1">Class-based kerning <a class="header-anchor" href="#class-based-kerning" aria-label="Permalink to &quot;Class-based kerning&quot;">​</a></h2><p>Font files encode kerning values as three pieces of information: a left character, a right character, and a horizontal adjustment value. Fonts with many characters can end up having a huge amount of kern pairs. Glyphr Studio uses a system called Class-based Kerning, where groups of characters with similar edges (like <code>VvWw</code>) can be treated as a single left-hand group, and a group of right-hand characters (for example,<code>A/</code>) can be treated as single group - which can be given a single value. When a font is exported, the permutations are saved as individual kern pairs. But, while editing, grouping common characters often simplifies the overall kerning process.</p>',6),o=[i];function c(h,l,d,p,g,u){return a(),n("div",null,o)}const _=e(s,[["render",c]]);export{f as __pageData,_ as default};
