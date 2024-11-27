# Making your first font with Glyphr Studio

## Intro

Way back in 2010 I started to have an interest in crating my own font.  After a little investigation I discovered that there was no free / open source typeface designer for Windows. [FontForge](https://fontforge.org/), at the time, was Linux only... and all the other options were quite expensive. Since that time FontForge is now available on all platforms - if you are looking for an advanced typeface designer that is free and open source, I whole-heartedly recommend it!

2010 was also around the time that HTML5 Canvas started to become (somewhat) available.  Since I couldn't find an affordable typeface design tool for Windows, I did what any Interaction Designer / JavaScript aficionado would do - I set out to create my own typeface design tool that was web-based. [Glyphr Studio](https://www.glyphrstudio.com) was born; it's focus is to make it easy for first-time typeface designers or hobbyists to create font files.

### Before we begin
Glyphr Studio provides a large set of custom-designed vector editing tools for typeface design. So, it could be the only tool you need to create a whole typeface from start to finish.  This tutorial, however, will start from a more common scenario. Many people have some characters designed in a different program like Adobe Illustrator or [Inkscape](https://www.inkscape.org), or maybe prefer to do their design work in those programs.  Glyphr Studio is quite powerful when it comes to working with SVG. This tutorial will go through setting up your external tool, creating characters in SVG format, then importing them to Glyphr Studio.


## Step 1: Figure out your key metrics
To avoid headaches down the road, we are going to do a little work up front to make sure our **graphic design space** (a.k.a. Adobe Illustrator or Inkscape) matches our **typeface design space** (a.k.a. Glyphr Studio).

Characters (or glyphs) in a typeface exist in what's called an "Em" Square. The Latin Capital Letter M is fairly square in it's dimensions, and back in the physical typesetting days, it was used as a standard block or size for type. These days, the "`em`" continues to be used as the unit of measure for font files. For simplicity you can think of an `em` the same way as you think of pixels being the unit of measure for graphic design.

Glyphr Studio has a default setting of `2048em` (which is very common for fonts, `1000em` is the other common size) which means from the top of the tallest letter to the bottom of the descender measures a total of `2048em` units.  Most individual characters are not `2048em` tall, or `2048em` wide - but this "Em Square" is the default overall design space.

![glyph key metrics](metrics.png)

In typeface design lingo, these main measurements are called *glyph metrics* or *key metrics*.  Here is a quick run-down, with Glyphr Studio defaults in parenthesis.

* **Ascender** (`1550em`) distance from the baseline up to the tallest letter.
* **Descender** (`-440em`) distance from the baseline down to the bottom of the lowest letter. The size of the descender is usually shown as a negative number.
* **Baseline** - split between the ascender and descender.
* **Cap Height** (`1480em`) distance from the baseline to the top of the tallest capital letter. Many times this is shorter than the overall Ascender.
* **X Height** (`1100em`) distance from the baseline to the top of (not-rounded) lowercase letters.
* **Overshoot** (`30em`) the distance that rounded letters extend above or below guide lines.  This is usually done to visually compensate between rounded letters and squared-off letters.

First item to do: decide on an overall size (either `1000em` or `2048em`) and also decide where the baseline falls within that height. If you're not sure, just use the defaults above.

## Step 2: Set up your workspace
The first decision for setting up your workspace is how to handle all the characters.  The [Basic Latin Character Range](https://en.wikipedia.org/wiki/Basic_Latin_(Unicode_block)) in Unicode has 95 characters - letters, numbers, and symbols.  You don't have to design all of them, but there are a few main ways to handle all these characters:
1) Create a single artboard with 95 layers
2) Create 95 artboards to show all characters at once
3) Use one wide artboard to show characters side by side

The pros for #1 and #2 is that there may be some automated way to save single artboards or layers as individual `.svg` files.  Glyphr Studio can import characters as individual `.svg` files, but it can also accept pasted SVG code as text.  In practice, I've always opted for option #3 - I find that seeing all my characters side by side actually helps me design the characters themselves.  Much of typeface design is about how a single character looks, but it is also very much about how all the characters look *together*.

So I would recommend the third option.  This does assume that we can copy a subset of shapes in our document that correspond to a single character.  Adobe Illustrator does this by default - if you multi-select shapes and copy them, you can paste them back in Illustrator as shapes. If you jump over to a text editor, pasting actually spits out the SVG Code equivalent of the shapes you copied.  Inkscape has similar functionality through a plugin called [Object to and from String](https://inkscape.org/en/~jabiertxof/%E2%98%85object-to-and-from-string).

**In all 3 cases you'll be making an artboard or document that is `2048px` tall.** The directions below are specifically for options #1 or #2, but the only difference for option #3 is making the width of the artboard or document really wide.

**Adobe Illustrator** 
- Create a new document and set the **units dropdown** to **Pixels** and set **Width** and **Height** to **`2048px`**. Or select the the artboard tool to adjust the dimensions of an existing artboard.
- Make sure the upper-left corner of your artboard is `0,0` - with the artboard tool selected the `x` and `y` coordinates should be `0`.
  - If you move the artboard later, be sure to re-zero the coordinates of the artboard. The artboard coordinates affect the position of the exported shapes.
- Make sure the rulers are visible either through the view menu or right-clicking the canvas. From the top ruler, drag down a guide line and place it at `1550px` - this will be your baseline. 
  - If you select a guide, you can set it's `y` value directly from the properties bar.
  - Optionally place guide lines for X Height at `508px` and Cap Height at `168px` (see note below about coordinate systems).
  - It's probably a good idea to lock your guidelines in place, either individually via the Layers Panel, or globally via Right Click > Lock Guides.  

**Inkscape**
- Create a new document and go to File > Document Properties > Page (tab)  
  - Under General, set the **Display Units** to **px**
  - Under Custom Size, *first* set the **Units** to **px**
  - *Then* set the **Height** to **`2048px`** and the **Width** to **`2048px`**
  - Under Scale, set **Scale x** to **1**, Scale y should automatically change to 1
  - If you expand the Viewbox section,`x` and `y` should be `0` and Width and Height should be `2048px`
- From the top ruler, drag down a guide line and place it at `440px` - this will be your baseline. 
  - You can double-click the guide line to adjust it's `y` value and to lock individual guides.
  - Optionally place guide lines for X Height at `1540px` and Cap Height at `1920px` (see note below about coordinate systems).
  - It's probably a good idea to lock your guidelines in place.  

### A note about coordinate systems
Measuring where things are is important to any design process, and unfortunately graphic design spaces are measured differently than typeface design spaces.  Making Em Units equal to Pixels is a great first step to make things easier.

The origin of the coordinate system is a little more tricky.  In the typeface design space the origin `0,0` is relative to the baseline, which is part of the way down the overall Em Square.  So `x`=`0` is the left hand edge, and moving to the right increases the `x` value.  `y`=`0` is the baseline, so moving up from the baseline increases the `y` value, and moving down from the baseline creates negative `y` values.

In Adobe Illustrator, the `0,0` point is in the upper left, and in Inkscape, the `0,0` point is in the lower left.  In the end, they both save as SVG (which has the `0,0` point in the upper left) so importing to Glyphr Studio works from both programs.  Depending on what you use, you may have to do a bit of math to figure out where your various guides should be to match the glyph metrics in your font.  The instructions in the previous section match the defaults Glyphr Studio uses, so that's a good place to start.

![Graphic Design vs. Typeface Design coordinate systems](coordinate_systems.png)


## Step 3: Design your characters
This part is up to you!  I would recommend starting with just a few characters - maybe 5 or so - and trying to go through the next export / import steps to get a feel for the overall process.  There may be some quirks in your design tool or in Glyphr Studio that are better discovered and worked out *before* you've gone off and designed a hundred characters.

Right away you'll probably need to know how to create **compound shapes**.  This is how you achieve a shape like an `O` - this character is just two circles.  Compound shapes are how we tell the design program we want the center of the o to be transparent.
- **Adobe Illustrator** - multi-select two shapes and either Right Click > Make Compound Path, or use the Pathfinder panel.
- **Inkscape** - multi-select two shapes and do Path > Combine, or press `Ctrl`+`k`


## Step 4: Prepare your designs for import
Here are a few things you may want to do before importing SVG into Glyphr Studio. In my typeface projects, I usually start with a *design* file, called something like `My Font - working.ai`.  When I'm pretty happy with everything, I make a copy of it and call it something like *flattened* or *export* `My Font - flattened.ai`.  In the copied file I can make all kinds of destructive actions, like remove guide lines or random shapes, flattening shapes, outlining strokes... basically all the stuff outlined below.

### Flatten your characters
Many times it's easy to design characters using lots of shapes.  For example, a Capital H is pretty easy to make with 3 rectangles.  In a Font File, these same three rectangles are perfectly valid, but it's a best practice to try to minimize the number of shapes in your characters as much as possible.  In the H example, those three rectangles can be combined to one path with 12 points.  

Partially this is for font file efficiency, but there is also a very strange bug with certain programs that read font files. Sometimes overlaps are shown as transparent, but only at small font sizes ([see an example](../img/overlap-issue.png)). There is no way to fix this besides having a well-formatted font file to begin with.

### Outline any strokes
Shapes in fonts don't have strokes with weights, they are just simple filled shapes.  You may have used stroke weights on paths in your design file, but you'll need to convert these to shapes before you import them.

- **Adobe Illustrator** - Select the path and do Object > Path > Outline Stroke
- **Inkscape** - Select the path and do Path > Stroke to Path

### Export Layers or Artboards to Files
If you are going the route of handling all your characters in layers or artboards, then now would be a good time to run the script that exports individual `.svg` files.  There is no native way to do this, so you'll have to find an Extension or Plug-in. A good place to start your search is either the official [Inkscape Extensions](https://inkscape.org/en/gallery/%3Dextension/) page or the [Adobe Illustrator Plug-ins](https://helpx.adobe.com/illustrator/plug-ins.html) page.

If you are doing Option #3 from the Step 2 above - directly copying shapes from your design program to Glyphr Studio - you can skip this step.


## Step 5: Import to Glyphr Studio
By this point you should either have individual `.svg` files for each character you have designed, or you can copy/paste SVG code that corresponds to a single character.

It's time to head on over to [glyphrstudio.com/app](https://www.glyphrstudio.com/app) and do the following:

- On the **New Project** page, give your project / font a name, then press **Start a new font from scratch**.
- By default you land on the **Overview** page. Go to the upper left Page menu and navigate to the **Settings** page, then select the **Font** tab.
  - Review the **Key Metrics** and make sure they match your design dimensions.  If you started with the default dimensions described in this article, no changes should be necessary.
  - Change tabs to the **Project** tab, and review the **Enabled character ranges**.  By default Basic Latin is selected, but if you have additional glyphs you can enable those glyph ranges here.

### Importing SVG
In Glyphr Studio v2, importing your SVG is as easy as drag+dropping a file or copy/pasting SVG code onto the Edit Canvas for that character.
  - Using the upper left **Page** menu, navigate to the **Characters** page.
  - Using the **Editing** menu, navigate to the character that you want to import SVG for.
  - Drag and drop your SVG file right onto the edit canvas, or hit `Ctrl`+`v` to paste SVG code after you've clicked on the edit canvas.

### Some Notes
- **Imported shapes are positioned far away from the origin?** On the **Settings** page **App** tab, toward the bottom there is an option called **Move shapes when drag+dropping an SVG file**. If your imported shapes are positioned oddly, this option will move the shapes back to `0,0` after they are imported.
- **Winding is important**, that is the direction, either clockwise or counterclockwise, that your path travels.  In graphic design, path winding is not important.  But in typeface design, paths with different winding 'cut out' each other, or appear transparent in the regions where they overlap.  Compound shapes should import to Glyphr Studio as paths with different winding - but if some shapes seem like they should have transparent regions but don't, go check that path's winding.  In Glyphr Studio the **winding** attribute is on the **Path** card for the selected shape.
- For each character, remember to add **Advance Width**, or update the **Side Bearings**. These are crucial properties for a character in a font (how much horizontal space it takes up) but your graphic design program has no concept of it. If you use the Live Preview tool in Glyphr Studio, or export and install your font and all the characters are just stacking on top of each other, then the Advance Width was probably left at zero.


# Thank you!
If you have any questions or feedback, you can check out [glyphrstudio.com/help](https://www.glyphrstudio.com/help) or just send me an email at [mail@glyphrstudio.com](mailto:mail@glyphrstudio.com).
