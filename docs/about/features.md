# Feature support

Very often we get questions like "Does Glyphr Studio support [something]". Font files have a huge list of features, and since Glyphr Studio is designed for beginners and hobbyists, only a small set of font features are supported.

**For the supported features, be sure to read the the Import / Export article for more detailed information.**

## What _is_ supported

- Kerning (Horizontal)
- Ligatures
- Editing any character in Unicode
  - This includes any character on any Unicode plane. Planes 0 through 3 (characters `U+0` through `U+32FFF`) have range names and can be searched for and added in the Settings > Project page. Additional planes (characters `U+40000` through `U+10FFFF`) are either unassigned or private / supplementary use areas. These can be added as custom ranges in Glyphr Studio.
  - This includes whitespace characters and control characters

### Supported import font formats

- OTF
- TTF
- WOFF
- SVG Font

### Supported export font formats

- OTF
- SVG Font

## What _is not_ supported

- Color fonts
- Variable fonts
- Multiple masters / interpolation
- Right-to-left (RTL) fonts
- Vertical fonts / Vertical kerning
- Contextual alternates / Stylistic alternates
- OpenType font features or variants

### Not supported export font formats

- TTF
- WOFF
- UFO
- (everything else)

## Questions or comments?

mail@glyphrstudio.com
