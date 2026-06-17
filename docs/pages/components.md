# Components

Components are a Glyphr Studio feature that lets you re-use a collection of paths across many different glyphs. The root is called a 'Component' and these are added by reference to other glyphs, where they are called 'Component Instances'. Updating the root component will also update all component instances.

![Components page](../img/page_components.png)

Components are a type of `Glyph` that is not directly associated with a character or letter in your font. Components lets you define and re-use a collection of paths across many different glyphs. The root is called a 'Component' and these are added by reference to other glyphs, where they are called 'Component Instances'. Updating the root component will also update all component instances.

Diacritic glyphs (glyphs with accents) are just one example of where having a shared component root can be used across many individual characters.

Glyphr Studio Components (the roots) are not exported to fonts - they are a concept that is only in place to help design a font. All Component Instances will be exported to your font, along with regular Paths. Depending on your export settings and target format, Component Instances are exported either as TrueType composite glyphs (referencing the component's outlines) or as standard flattened font outlines. Composite glyphs can also be imported back as Components - see [Components & composite glyphs round-tripping](#components-composite-glyphs-round-tripping) below.

## Component Roots and Component Instances

The link between roots and instances is shown on both glyphs, making it easy to navigate back and forth.

Any Glyph object (Character, Ligature, or Component) can be used as a component root. When you are on the edit page for a glyph that is being used as a root component, a card with a list of links will be shown in the panel area. Clicking on one of these links will navigate you to the other glyph that is using the root as a Component Instance.

Component Instances are shown along-side Paths - in both the Layers panel, and as a Component Instance card that is similar to the Path card in the Attributes panel. There will also be a link when a Component Instance is selected that will navigate you back to the Root Component glyph.

In the Layers Panel as well as on the Edit Canvas, regular paths have a 🟦Blue accent color. Component Instances have a 🟩Green accent color.

## Component Instance transforms

Many times, you'll only need to use the Component Instance with no changes with regards to it's Component Root. But, you may have to move, resize, or otherwise adjust a Component Instance to make it work in the destination glyph.

Component Instances _do not_ have size or position attributes. Everything is in relation to it's Root Component. Component Instances only have x and y offsets, changes in width and height, and other transform information. This way, when the Root Component is edited, a Component Instance inherits all the changes, and then applies any additional transforms as needed.

### Available transforms

| Transform&nbsp;name                    | Description                                                                                                                                                                                                                                                                                            |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Δ&nbsp;x** and **Δ&nbsp;y**          | The difference in x or y position, as compared to the Root Component.                                                                                                                                                                                                                                  |
| **Δ&nbsp;width** and **Δ&nbsp;height** | The difference in width or height, as compared to the Root Component.                                                                                                                                                                                                                                  |
| **flip vertical**                      | Flip top to bottom, as compared to the Root Component.                                                                                                                                                                                                                                                 |
| **flip horizontal**                    | Flip left to right, as compared to the Root Component.                                                                                                                                                                                                                                                 |
| **reverse winding**                    | Reverse all the windings, as compared to the paths in the Root Component.                                                                                                                                                                                                                              |
| **rotation**                           | Number of degrees of rotation\* as compared to the Root Component.                                                                                                                                                                                                                                     |
| **rotate first**                       | When applying both rotation and size changes to a shape, the order of rotate/resize or resize/rotate will end up with two different results. Glyphr Studio tries to be smart about which to do first, but selecting this option will force the rotate transform to happen before the resize transform. |

**\*Rotation Note** Glyph Studio uses an angle system of Degrees - 360° total, with the top being 0°, moving clockwise for positive values and counter-clockwise for negative values. The bottom of the circle (6 o'clock or 180°) the values switch between positive and negative. So, rotating a shape counter-clockwise will use angle values -1° through -179°, and rotating a shape clockwise will use angle values 0° through 180°.

## Components & composite glyphs round-tripping

Many fonts already use TrueType _composite glyphs_ - characters built by referencing another glyph's outlines at an x/y offset, rather than storing their own outlines. Accented letters like `à á â` and the dotted `i` and `j` are common examples. Glyphr Studio's Components map naturally onto this concept, so it can import and export composites while keeping your Components intact.

Two paired settings on the [Project settings](./settings#project) page control this, and both are on by default:

- **Import composite glyphs as components** - when opening or importing a font, composite glyphs are brought in as Components and Component Instances instead of being flattened.
- **Export components as composite glyphs** - when exporting, characters built from Components are written back out as composite glyphs instead of being flattened.

With both on (the default), importing a font and re-exporting it as `.ttf`, `.woff`, or `.woff2` keeps Components intact end-to-end - accented characters and other composites stay editable as linked Components rather than collapsing into standalone outlines.

### What qualifies

The same core rules apply on both import and export:

- **Pure-position only.** A component qualifies only when it is a plain translation (an x/y offset). On import, composite components that are scaled, rotated, or use point-matching (anchor attachment) are flattened to outlines. On export, Component Instances that have any resize (Δ width / Δ height), rotation, horizontal/vertical flip, or reversed winding are flattened. A single glyph can be partially composite and partially flattened, on a per-component basis.
- **Shared roots are re-used.** On import, a Component Root is created once per referenced base glyph and then linked by every character that uses it. For example, the `a` outline becomes a single Component shared by `à á â ã ä å ā ă ą`, and the combining dot becomes one Component shared by `i`, `j`, and the dotted accents. The composite's per-character offset is preserved as the Component Instance's translate values.
- **TrueType only / the `.otf` caveat.** Composite glyphs only exist in TrueType-flavored formats (`.ttf`, `.woff`, `.woff2`). OpenType/CFF (`.otf`) cannot store composites, so on export to `.otf` every component is always flattened to outlines regardless of the setting. Same-format round-trips (TTF → Glyphr Studio → TTF) preserve component structure with high fidelity; when the format changes (for example TTF → OTF), only the conceptual/visual result is preserved, not the composite structure.
- **Turning either off.** Unchecking _Import composite glyphs as components_ flattens composites to plain outlines on import (the previous behavior). Unchecking _Export components as composite glyphs_ produces fully flattened outlines for every glyph on export - useful for maximum compatibility with tools that don't handle composite glyphs well.
