# Settings

The Settings page is where you can adjust different behaviors or data for your Project, the App, or your Font.

![Settings page](../img/page_settings.png)

## Project

### _Project name_ <badge type="info">Text</badge>

Name for this project. Can be different than the Font or Font Family name. Also, this will be used as the name of the saved Glyphr Studio Project (.gs2) file.

### _Version_ <badge type="info">Read only</badge>

The latest app version that edited this project file.

### _Initial version_ <badge type="info">Read only</badge>

The app version this project file was first created with.

### _Project ID_ <badge type="info">Read only</badge>

A unique ID used to identify this project.

## App

### Saving

### _Warn about unsaved changes on window close_ <badge type="info">Boolean</badge>

This will stop closing the window or tab with an "Are you sure?" message if you have unsaved changes.

### _Format project file for reading_ <badge type="info">Boolean</badge>

Glyphr Studio Project files (.gs2) are text files in JSON format. By default, this file is saved to optimize for smaller file size. Setting this option to true formats the file to be more easily read by a human, but could increase the file size by 2x or more.

### _Auto-save a copy of the project with each change_ <badge type="info">Boolean</badge>

When enabled, this option will use your browser's local storage to keep backups. These backups can be restored from the Open Projects page. Your browser's local storage is confined to this browser on this computer. If you use Glyphr Studio from another browser or on another computer, those backups will be available from there.

### _Delete all auto-saved backups_ <badge type="info">Action button</badge>

Glyphr Studio uses your browser's local storage to keep auto-saved backups. If you use Glyphr Studio from a different browser, or on a different computer, you'll have to go there to restore or delete backups.

### Visibility

### _Show non-graphic control characters_ <badge type="info">Boolean</badge>

Show the Unicode code points represent things that aren't letters. In Unicode, the C0 and C1 control code or control character sets define control codes for use in text by computer systems that use ASCII and derivatives of ASCII.

This setting should probably stay turned off, control characters can probably be safely ignored.

### _Project preview text_ <badge type="info">Text</badge>

What text to show when previewing a project or switching between projects. If left blank, the string 'Aa Bb Cc Xx Yy Zz' will be used.

### Importing

### _Move shapes when drag+dropping an SVG file_ <badge type="info">Boolean</badge>

When importing SVG by dragging and dropping a .svg file onto the canvas, move the imported shapes to the origin (x = 0, y = shapes height). Setting up your other vector editor (like Adobe or InkScape) to have coordinates that match Glyphr Studio's coordinates can be challenging - sometimes resulting in imported SVG shapes being very far away from the origin. This is a simplistic option to at least get the imported shapes near the right area of the canvas.

## Font

### _Font family_ <badge type="info">Text</badge>

Base font family name, that will be shared across font styles. This will also be used as the base name for exported font files.

### _Font style_ <badge type="info">Text</badge>

Describes this font within the overall font family. Usually a combination of how bold this font is and if it is italic.

example:

`Thin`, `ExtraLight`, `Light`, <strong>`Regular`</strong>, `Medium`, `SemiBold`, <strong>`Bold`</strong>, `ExtraBold`, `Black`,

`Thin Italic`, `ExtraLight Italic`, `Light Italic`, <strong>`Italic`</strong>, `Medium Italic`, `SemiBold Italic`, `Bold Italic`, `ExtraBold Italic`, `Black Italic`

### _Font version_ <badge type="info">Text</badge>

If this font gets updates regularly, keep track of what version this iteration is. This is recommended to be in Semantic Versioning format, you can learn more at <a href="https://semver.org/" target="_blank">semver.org</a>.

example: `Version 1.0`

### _Font description_ <badge type="info">Text</badge>

Open-ended text to describe your font.

### _Panose-1_ <badge type="info">Text</badge>

Uses ten digits to describe the font's visual style. A good overview can be found on Monotype's GitHub page: <a href="https://monotype.github.io/panose/pan2.htm" target="_blank">monotype.github.io/panose/pan2.htm</a><br>Each digit of the ten digits is separated by a space, and has a special meaning based on its position.

example:

<strong>`0 0 0 0 0 0 0 0 0 0`</strong>

All zeros describe this font as 'any', which basically leaves it undefined.

<strong>`2 0 0 0 0 0 0 0 0 0`</strong>

The first digit is the major designator, where digit 2 represents Latin typefaces.

## Font Metrics

### Key Metrics

### _Units per Em (UPM)_ <badge type="info">Em</badge>

UPM is the measure of the overall design space for a character in this fontThink of UPM like how many pixels of height you have to work with for each character. UPM can be any number, but traditionally it is either 1000 or 2048.

example: `1000`, `2048`

### _Ascent_ <badge type="info">Em</badge>

Distance from the baseline to the top of square and tall lowercase letter(Like: b d h k l).

### _Descent_ <badge type="info">Em</badge>

Distance from the baseline to the bottom of letters that have square descenders (Like: p q y depending on style). This is expressed as a negative number.

### _Capital letter height_ <badge type="info">Em</badge>

Distance from the baseline to the top of square capital letters (Like: A B E F H I K L M N P R T U V W X Y Z). Usually this is slightly smaller than the ascent.

### _X height_ <badge type="info">Em</badge>

Distance from the baseline to the top of square lowercase letters (Like: v x z).

### Other metrics

### _Overshoot_ <badge type="info">Em</badge>

Rounded characters are usually slightly larger than square characters to compensate for visual weight. For example, a lowercase 'o' will extend slightly above and below a lowercase 'x'. Overshoot is the measure of this distance.

### _Line gap_ <badge type="info">Em</badge>

When text wraps onto multiple lines, this is the distance between the bottom of one Em Square to the top of the next line's Em Square.

### _Italic angle_ <badge type="info">Degree</badge>

Most common degree of slant for glyphs in an italic font.

### Links

### _Designer_ <badge type="info">Text</badge>

Person or team who created this font.

### _Designer's URL_ <badge type="info">Text</badge>

URL for the designer.

### _Manufacturer_ <badge type="info">Text</badge>

Company who created this font.

### _Manufacturer's URL_ <badge type="info">Text</badge>

URL for the manufacturer.

### _License_ <badge type="info">Text</badge>

License under which this font is release

### _License URL_ <badge type="info">Text</badge>

URL for the license.

### _Copyright_ <badge type="info">Text</badge>

Copyright string

### _Trademark_ <badge type="info">Text</badge>

Trademark string

## Properties for SVG Fonts

_These properties only get exported with SVG Fonts, not OTF fonts_

### _Font variant_ <badge type="info">Text</badge>

Either 'normal' or 'small-caps'.

### _Font weight_ <badge type="info">Text</badge>

How bold this font is. Can be 'normal', 'bold', or a number between 100 and 900.

### _Font stretch_ <badge type="info">Text</badge>

How condensed or expanded this font is.

example:

`normal`, `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`

### _Vertical stem_ <badge type="info">Em</badge>

Most common width measurement of vertical stems in this font.

### _Horizontal stem_ <badge type="info">Em</badge>

Most common height measurement of horizontal stems in this font.

### _Slope_ <badge type="info">Degree</badge>

The angle, in degrees counterclockwise from the vertical, of the dominant vertical strokes of the font. The value is negative for fonts that slope to the right.

### _Underline position_ <badge type="info">Em</badge>

The ideal position of an underline with relation to the baseline (probably should be negative).

### _Underline thickness_ <badge type="info">Em</badge>

The ideal height of an underline.

### _Strikethrough position_ <badge type="info">Em</badge>

The ideal position of a strikethrough with relation to the baseline.

### _Strikethrough thickness_ <badge type="info">Em</badge>

The ideal height of a strikethrough.

### _Overline position_ <badge type="info">Em</badge>

The ideal position of an overline with relation to the baseline.

### _Overline thickness_ <badge type="info">Em</badge>

The ideal height of an overline.
