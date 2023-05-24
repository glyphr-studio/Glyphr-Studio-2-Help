# Settings

The Settings page is where you can adjust different behaviors or data for your Project, the App, or your Font.

![Settings page](../img/page_settings.png)

## Project
### *Project name*

Name for this project. Can be different than the Font or Font Family nameAlso, this will be used as the name of the saved Glyphr Studio Project (.gs2) file.

### *Version*

The latest app version that edited this project file.

type: `Read only`

### *Initial version*

The app version this project file was first created with.

type: `Read only`

### *Project ID*

A unique ID used to identify this project.

type: `Read only`

## App
### *Save app preferences locally*

App preferences can be saved locally to your computer, then loaded automatically when you come back to this project.

type: `Boolean`

### *Warn about unsaved changes on window close*

This will stop closing the window or tab with an "Are you sure?" message if you have unsaved changes.

type: `Boolean`

### *Show non-graphic control characters*

Show the Unicode code points represent things that aren't letters. IUnicode, the C0 and C1 control code or control character sets define control codes for use in text by computer systems that use ASCII and derivatives of ASCII.

This setting should probably stay turned off, control characters can probably be safely ignored.

type: `Boolean`

### *Format project file for reading*

Glyphr Studio Project files (.gs2) are text files in JSON format. By default, this file is saved to optimize for smaller file size. Setting this option to true formats the file to be more easily read by a human, but could increase the file size by 2x or more.

type: `Boolean`

### *Move shapes when drag+dropping an SVG file*
When importing SVG by dragging and dropping a .svg file onto the canvas, move the imported shapes to the origin (x = 0, y = shapes height). Setting up your other vector editor (like Adobe or InkScape) to have coordinates that match Glyphr Studio's coordinates can be challenging - sometimes resulting in imported SVG shapes being very far away from the origin. This is a simplistic option to at least get the imported shapes near the right area of the canvas.

type: `Boolean`

### *Combine paths on export*

This will boolean-combine all paths before a font is exported. This may make the exported font perform better, but it will drastically increase export time.

type: `Boolean`

### *Max paths to combine on export*

Limit the total number of paths in a glyph to combine on export. This will only take effect if the "Combine paths on export" setting is true.

type: `Number`


## Font
### *Font family*

Base font family name, that will be shared across font styles. This will also be used as the base name for exported font files.

### *Font style*

Describes this font within the overall font family. Usually a combination of how bold this font is and if it is italic.

example:

`Thin`, `ExtraLight`, `Light`, <strong>`Regular`</strong>, `Medium`, `SemiBold`, <strong>`Bold`</strong>, `ExtraBold`, `Black`,

`Thin Italic`, `ExtraLight Italic`, `Light Italic`, <strong>`Italic`</strong>, `Medium Italic`, `SemiBold Italic`, `Bold Italic`, `ExtraBold Italic`, `Black Italic`

### *Font version*

If this font gets updates regularly, keep track of what version this iteration is. This is recommended to be in Semantic Versioning format, you can learn more at <a href="https://semver.org/" target="_blank">semver.org</a>.

example: `Version 1.0`

### *Font description*

Open-ended text to describe your font.

### *Panose-1*

Uses ten digits to describe the font's visual style.  A good overview can be found on Monotype's GitHub page: <a href="https://monotype.github.io/panose/pan2.htm" target="_blank">monotype.github.io/panose/pan2.htm</a><br>Each digit of the ten digits is separated by a space, and has a special meaning based on its position.

example: 

<strong>`0 0 0 0 0 0 0 0 0 0`</strong>

All zeros describe this font as 'any', which basically leaves it undefined.

<strong>`2 0 0 0 0 0 0 0 0 0`</strong>

The first digit is the major designator, where digit 2 represents Latin typefaces.

## Font Metrics
### Key Metrics
### *Units per Em (UPM)*

UPM is the measure of the overall design space for a character in this fontThink of UPM like how many pixels of height you have to work with for each character. UPM can be any number, but traditionally it is either 1000 or 2048.

example: `1000`, `2048`

type: `Em`

### *Ascent*

Distance from the baseline to the top of square and tall lowercase letter(Like: b d h k l).

type: `Em`

### *Descent*

Distance from the baseline to the bottom of letters that have square descenders (Like: p q y depending on style). This is expressed as a negative number.

type: `Em`

### *Capital letter height*

Distance from the baseline to the top of square capital letters (Like: A B E F H I K L M N P R T U V W X Y Z). Usually this is slightly smaller than the ascent.

type: `Em`

### *X height*

Distance from the baseline to the top of square lowercase letters (Like: v x z).

type: `Em`


### Other metrics
### *Overshoot*

Rounded characters are usually slightly larger than square characters to compensate for visual weight. For example, a lowercase 'o' will extend slightly above and below a lowercase 'x'. Overshoot is the measure of this distance.

type: `Em`

### *Line gap*

When text wraps onto multiple lines, this is the distance between the bottom of one Em Square to the top of the next line's Em Square.

type: `Em`

### *Italic angle*

Most common degree of slant for glyphs in an italic font.

type: `Degree`


### Links
### *Designer*

Person or team who created this font.

### *Designer's URL*

URL for the designer.

### *Manufacturer*

Company who created this font.

### *Manufacturer's URL*

URL for the manufacturer.

### *License*

License under which this font is release

### *License URL*

URL for the license.

### *Copyright*

Copyright string

### *Trademark*

Trademark string

## Properties for SVG Fonts
*These properties only get exported with SVG Fonts, not OTF fonts*

### *Font variant*

Either 'normal' or 'small-caps'.

### *Font weight*

How bold this font is. Can be 'normal', 'bold', or a number between 100 and 900.

### *Font stretch*

How condensed or expanded this font is.

example:

`normal`, `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`

### *Vertical stem*

Most common width measurement of vertical stems in this font.

type: `Em`

### *Horizontal stem*

Most common height measurement of horizontal stems in this font.

type: `Em`

### *Slope*

The angle, in degrees counterclockwise from the vertical, of the dominant vertical strokes of the font. The value is negative for fonts that slope to the right.

type: `Degree`

### *Underline position*

The ideal position of an underline with relation to the baseline (probably should be negative).

type: `Em`

### *Underline thickness*

The ideal height of an underline.

type: `Em`

### *Strikethrough position*

The ideal position of a strikethrough with relation to the baseline.

type: `Em`

### *Strikethrough thickness*

The ideal height of a strikethrough.

type: `Em`

### *Overline position*

The ideal position of an overline with relation to the baseline.

type: `Em`

### *Overline thickness*

The ideal height of an overline.

type: `Em`

