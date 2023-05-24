# Components

Components are a Glyphr Studio feature that lets you re-use a collection of paths across many different glyphs. The root is called a 'Component' and these are added by reference to other glyphs, where they are called 'Component Instances'. Updating the root component will also update all component instances.

Diacritic glyphs (glyphs with accents) are just one example of where having a shared component root can be used across many individual characters.

![Settings page](../img/page_components.png)

## Component Roots and Component Instances

The link between roots and instances is shown on both glyphs, making it easy to navigate back and forth.

Any Glyph object (Character, Ligature, or Component) can be used as a component root. When you are on the edit page for a glyph that is being used as a root component, a card with a list of links will be shown in the panel area. Clicking on one of these links will navigate you to the other glyph that is using the root as a Component Instance.

Component Instances are shown along-side Paths - in both the Layers panel, and as a Component Instance card that is similar to the Path card in the Attributes panel. There will also be a link when a Component Instance is selected that will navigate you back to the Root Component glyph.

## Component Instance transforms

Many times, you'll only need to use the Component Instance with no changes with regards to it's Component Root. But, you may have to move, resize, or otherwise adjust a Component Instance to make it work in the destination glyph.

Component Instances *do not* have size or position attributes. Everything is in relation to it's Root Component. Component Instances only have x and y offsets, changes in width and height, and other transform information. This way, when the Root Component is edited, a Component Instance inherits all the changes, and then applies any additional transforms as needed.

### Available transforms

#### Δ x and Δ y
The difference in x or y position, as compared to the root Glyph or Component that this Component Instance is linked to.

#### Δ width and Δ height
The difference in width or height, as compared to the root Glyph or Component that this Component Instance is linked to.

#### flip vertical
Flip top to bottom, as compared to the root Glyph or Component that this Component Instance is linked to.

#### flip horizontal
Flip left to right, as compared to the root Glyph or Component that this Component Instance is linked to.

#### reverse winding
Reverse all the windings, as compared to the root Glyph or Component that this Component Instance is linked to.

#### (planned for a future release: rotation and 'rotate first' options)