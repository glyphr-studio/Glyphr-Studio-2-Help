import{_ as t,o as e,c as o,O as n}from"./chunks/framework.c4d034b2.js";const u=JSON.parse('{"title":"Components","description":"","frontmatter":{},"headers":[],"relativePath":"data-types/components.md","filePath":"data-types/components.md","lastUpdated":1684971716000}'),a={name:"data-types/components.md"},s=n('<h1 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;Components&quot;">​</a></h1><p>Components are a type of <code>Glyph</code> that is not directly associated with a character or letter in your font. Components lets you define and re-use a collection of paths across many different glyphs. The root is called a &#39;Component&#39; and these are added by reference to other glyphs, where they are called &#39;Component Instances&#39;. Updating the root component will also update all component instances.</p><p>Glyphr Studio Components are not exported to fonts - it is a concept that is only in place to help design a font. All Component Instances will be exported to your font, along with regular Paths, as standard font outlines.</p><h2 id="component-roots-and-component-instances" tabindex="-1">Component Roots and Component Instances <a class="header-anchor" href="#component-roots-and-component-instances" aria-label="Permalink to &quot;Component Roots and Component Instances&quot;">​</a></h2><p>The link between roots and instances is shown on both glyphs, making it easy to navigate back and forth.</p><p>Any Glyph object (Character, Ligature, or Component) can be used as a component root. When you are on the edit page for a glyph that is being used as a root component, a card with a list of links will be shown in the panel area. Clicking on one of these links will navigate you to the other glyph that is using the root as a Component Instance.</p><p>Component Instances are shown along-side Paths - in both the Layers panel, and as a Component Instance card that is similar to the Path card in the Attributes panel. There will also be a link when a Component Instance is selected that will navigate you back to the Root Component glyph.</p><h2 id="component-instance-transforms" tabindex="-1">Component Instance transforms <a class="header-anchor" href="#component-instance-transforms" aria-label="Permalink to &quot;Component Instance transforms&quot;">​</a></h2><p>Many times, you&#39;ll only need to use the Component Instance with no changes with regards to it&#39;s Component Root. But, you may have to move, resize, or otherwise adjust a Component Instance to make it work in the destination glyph.</p><p>Component Instances <em>do not</em> have size or position attributes. Everything is in relation to it&#39;s Root Component. Component Instances only have x and y offsets, changes in width and height, and other transform information. This way, when the Root Component is edited, a Component Instance inherits all the changes, and then applies any additional transforms as needed.</p><h3 id="available-transforms" tabindex="-1">Available transforms <a class="header-anchor" href="#available-transforms" aria-label="Permalink to &quot;Available transforms&quot;">​</a></h3><h4 id="δ-x-and-δ-y" tabindex="-1">Δ x and Δ y <a class="header-anchor" href="#δ-x-and-δ-y" aria-label="Permalink to &quot;Δ x and Δ y&quot;">​</a></h4><p>The difference in x or y position, as compared to the root Glyph or Component that this Component Instance is linked to.</p><h4 id="δ-width-and-δ-height" tabindex="-1">Δ width and Δ height <a class="header-anchor" href="#δ-width-and-δ-height" aria-label="Permalink to &quot;Δ width and Δ height&quot;">​</a></h4><p>The difference in width or height, as compared to the root Glyph or Component that this Component Instance is linked to.</p><h4 id="flip-vertical" tabindex="-1">flip vertical <a class="header-anchor" href="#flip-vertical" aria-label="Permalink to &quot;flip vertical&quot;">​</a></h4><p>Flip top to bottom, as compared to the root Glyph or Component that this Component Instance is linked to.</p><h4 id="flip-horizontal" tabindex="-1">flip horizontal <a class="header-anchor" href="#flip-horizontal" aria-label="Permalink to &quot;flip horizontal&quot;">​</a></h4><p>Flip left to right, as compared to the root Glyph or Component that this Component Instance is linked to.</p><h4 id="reverse-winding" tabindex="-1">reverse winding <a class="header-anchor" href="#reverse-winding" aria-label="Permalink to &quot;reverse winding&quot;">​</a></h4><p>Reverse all the windings, as compared to the root Glyph or Component that this Component Instance is linked to.</p><h4 id="planned-for-a-future-release-rotation-and-rotate-first-options" tabindex="-1">(planned for a future release: rotation and &#39;rotate first&#39; options) <a class="header-anchor" href="#planned-for-a-future-release-rotation-and-rotate-first-options" aria-label="Permalink to &quot;(planned for a future release: rotation and &#39;rotate first&#39; options)&quot;">​</a></h4>',22),i=[s];function r(h,l,p,d,c,m){return e(),o("div",null,i)}const y=t(a,[["render",r]]);export{u as __pageData,y as default};