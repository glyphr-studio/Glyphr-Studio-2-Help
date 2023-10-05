import{_ as t,o as e,c as o,O as n}from"./chunks/framework.e2b32f27.js";const f=JSON.parse('{"title":"Components","description":"","frontmatter":{},"headers":[],"relativePath":"data-types/components.md","filePath":"data-types/components.md","lastUpdated":1684971716000}'),a={name:"data-types/components.md"},s=n('<h1 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;Components&quot;">​</a></h1><p>Components are a type of <code>Glyph</code> that is not directly associated with a character or letter in your font. Components lets you define and re-use a collection of paths across many different glyphs. The root is called a &#39;Component&#39; and these are added by reference to other glyphs, where they are called &#39;Component Instances&#39;. Updating the root component will also update all component instances.</p><p>Glyphr Studio Components are not exported to fonts - it is a concept that is only in place to help design a font. All Component Instances will be exported to your font, along with regular Paths, as standard font outlines.</p><h2 id="component-roots-and-component-instances" tabindex="-1">Component Roots and Component Instances <a class="header-anchor" href="#component-roots-and-component-instances" aria-label="Permalink to &quot;Component Roots and Component Instances&quot;">​</a></h2><p>The link between roots and instances is shown on both glyphs, making it easy to navigate back and forth.</p><p>Any Glyph object (Character, Ligature, or Component) can be used as a component root. When you are on the edit page for a glyph that is being used as a root component, a card with a list of links will be shown in the panel area. Clicking on one of these links will navigate you to the other glyph that is using the root as a Component Instance.</p><p>Component Instances are shown along-side Paths - in both the Layers panel, and as a Component Instance card that is similar to the Path card in the Attributes panel. There will also be a link when a Component Instance is selected that will navigate you back to the Root Component glyph.</p><p>In the Layers Panel as well as on the Edit Canvas, regular paths have a 🟦Blue accent color. Component Instances have a 🟩Green accent color.</p><h2 id="component-instance-transforms" tabindex="-1">Component Instance transforms <a class="header-anchor" href="#component-instance-transforms" aria-label="Permalink to &quot;Component Instance transforms&quot;">​</a></h2><p>Many times, you&#39;ll only need to use the Component Instance with no changes with regards to it&#39;s Component Root. But, you may have to move, resize, or otherwise adjust a Component Instance to make it work in the destination glyph.</p><p>Component Instances <em>do not</em> have size or position attributes. Everything is in relation to it&#39;s Root Component. Component Instances only have x and y offsets, changes in width and height, and other transform information. This way, when the Root Component is edited, a Component Instance inherits all the changes, and then applies any additional transforms as needed.</p><h3 id="available-transforms" tabindex="-1">Available transforms <a class="header-anchor" href="#available-transforms" aria-label="Permalink to &quot;Available transforms&quot;">​</a></h3><table><thead><tr><th>Transform name</th><th>Description</th></tr></thead><tbody><tr><td><strong>Δ x</strong> and <strong>Δ y</strong></td><td>The difference in x or y position, as compared to the Root Component.</td></tr><tr><td><strong>Δ width</strong> and <strong>Δ height</strong></td><td>The difference in width or height, as compared to the Root Component.</td></tr><tr><td><strong>flip vertical</strong></td><td>Flip top to bottom, as compared to the Root Component.</td></tr><tr><td><strong>flip horizontal</strong></td><td>Flip left to right, as compared to the Root Component.</td></tr><tr><td><strong>reverse winding</strong></td><td>Reverse all the windings, as compared to the paths in the Root Component.</td></tr><tr><td><strong>rotation</strong></td><td>Number of degrees of rotation* as compared to the Root Component.</td></tr><tr><td><strong>rotate first</strong></td><td>When applying both rotation and size changes to a shape, the order of rotate/resize or resize/rotate will end up with two different results. Glyphr Studio tries to be smart about which to do first, but selecting this option will force the rotate transform to happen before the resize transform.</td></tr></tbody></table><p><strong>*Rotation Note</strong> Glyph Studio uses an angle system of Degrees - 360° total, with the top being 0°, moving clockwise for positive values and counter-clockwise for negative values. The bottom of the circle (6 o&#39;clock or 180°) the values switch between positive and negative. So, rotating a shape counter-clockwise will use angle values -1° through -179°, and rotating a shape clockwise will use angle values 0° through 180°.</p>',14),r=[s];function i(h,l,d,p,c,m){return e(),o("div",null,r)}const u=t(a,[["render",i]]);export{f as __pageData,u as default};
