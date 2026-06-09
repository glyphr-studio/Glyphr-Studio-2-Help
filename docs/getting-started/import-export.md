# Importing and exporting files

This page contains detailed information about what is imported and exported from/to various file formats.
Glyphr Studio supports three main file types:

- **Glyphr Studio Project files** - `.gs2` for v2 projects, and `.txt` for v1 projects
- **Font files** - generically `.otf`, `.ttf`, `.woff` and `.woff2` files
- **SVG Font files** - a deprecated file format that is supported by Glyphr Studio

## Glyphr Studio Project file

The Glyphr Studio Project file contains all the information about your project,
including metadata and glyph outlines. For Glyphr Studio v2, project files have
a `.gs2` file suffix, but these are just text files, and the data is in JSON
format.

Project files have a superset of features and information when compared to
individual font files, so it's always recommended, for working on a given font,
to save the Project File in addition to any exported Font file.

#### Project-specific data that does not get exported to fonts

This is a list of things that Glyphr Studio Projects save, but have no equivalent
in font files. These are extra things that help edit a font, but have no use for
an exported font file itself.

- **Components** - these are re-usable paths within a project. These are 'flattened' and only their raw data is exported to fonts.
- **Kern groups** - in a font, kern information is (usually) stored as a long list of character pairs. In Glyphr Studio, it's possible to group similar kerned characters together. These groups are split apart and only their permutations are saved to fonts.
- **Context glyphs and Live Previews** - these are helpful for previewing what your font will look like during editing, but this information does not get exported to fonts.
- **Guides and Overshoot value** - these are only used for editing glyphs, and not exported to fonts.
- **Project and App preferences** - these are not exported to fonts.
- **Path names** - In Glyphr Studio, paths can be given names which can be helpful to identify them in the Layers panel. Fonts have no concept of path names.
- **Glyph ranges** - Glyphr Studio can edit any Unicode glyph. A single project enables you to show or hide certain glyph ranges. This range data is not exported - fonts simply have a long list of Unicode characters.

#### Projects made with Glyphr Studio v1

Glyphr Studio v1 project files have a `.txt` suffix. The Glyphr Studio v2 app cannot export v1 project files, and
v2 project files cannot be loaded into the v1 app. But, v1 project files (created with version `1.13.2` or later)
can be imported into the Glyphr Studio v2 app. The project file structure from v1 will be copied and translated into
the new v2 format.

## OTF, TTF, WOFF and WOFF2

### Importing OTF, TTF and WOFF

Glyphr Studio uses Font Flux JS to import font files. For importing, three formats are
supported: `.otf`, `.ttf`, and `.woff`. (WOFF2 files can be _exported_, but not imported -
if you need to bring a WOFF2 font into Glyphr Studio, convert it to one of the supported
formats first.) Importing lets Glyphr Studio read character outline data. There is also a
limited set of font metadata that is imported into a Glyphr Studio Project. Font files can
contain massive amounts of data, and much of this is _not_ imported.

#### ✅ Importing Ligatures

- Ligature information and glyph shapes **are** imported.

#### ✅ Importing Kerning data

- Kerning data **is** imported:
  - Font Flux JS reads kerning pairs from both the legacy `kern` table and the modern `GPOS` table, so kerning from most fonts is imported automatically.
  - Kerning data for Ligature characters is **not** supported: each side of a kern pair must be a character with a Unicode code point.

#### ✅ Importing Metadata

Font Flux JS parses each font table into a simplified `info` object, and Glyphr Studio reads
its values from there. Here is a list of font metadata that does get imported. If a piece of
data is not found, the Glyphr Studio default is shown in the last column.

| Font Flux JS `info` property | Glyphr Studio default | Glyphr Studio name    |
| ---------------------------- | --------------------- | --------------------- |
| info.familyName              | "My Font"             | Font family           |
| info.styleName               | "Regular"             | Font style            |
| info.version                 | "Version 0.1"         | Font version          |
| info.description             | ""                    | Font description      |
| info.panose                  | "0 0 0 0 0 0 0 0 0 0" | Panose-1              |
| info.unitsPerEm              | 2048                  | Units per Em (UPM)    |
| info.ascender                | 1550                  | Ascent                |
| info.descender               | -440                  | Descent               |
| info.capHeight               | 1480                  | Capital letter height |
| info.xHeight                 | 1100                  | X height              |
| --                           | 20                    | Overshoot             |
| info.weight                  | 400                   | Font weight           |
| info.italicAngle             | 0                     | Italic angle          |
| info.designer                | ""                    | Designer              |
| info.designerURL             | ""                    | Designer's URL        |
| info.manufacturer            | ""                    | Manufacturer          |
| info.vendorURL               | ""                    | Manufacturer's URL    |
| info.license                 | ""                    | License               |
| info.licenseURL              | ""                    | License URL           |
| info.copyright               | ""                    | Copyright             |
| info.trademark               | ""                    | Trademark             |

- A note about Overshoot - this is not a piece of data that is saved to font files, so it is not imported. Glyphr Studio sets a sensible default on import (20, or 30 for fonts with a UPM above 2000), saves it to Project Files, and displays it on the Edit Canvas to help with creating glyphs.

### Exporting OTF, TTF, WOFF and WOFF2

Glyphr Studio can export your project as a font file in four formats: `.otf`, `.ttf`,
`.woff`, and `.woff2`. These are all available from the **File** menu. Font Flux JS handles
generating the correct font technology for each format (for example, CFF/PostScript outlines
for `.otf` and quadratic TrueType outlines for `.ttf`), so there's no longer any need to use
a separate tool to convert between font file formats.

#### ✅ Exporting Ligatures

- Exporting Ligature information **is supported**, via the `GSUB` table (`liga` feature).

#### ✅ Exporting Kerning data

- Kerning data **is exported**.
  Kern information will be exported using the `GPOS` table.

#### ✅ Exporting Metadata

The following pieces of metadata are passed to Font Flux JS to create the font file.

`unitsPerEm`, `ascender`, `descender`, `lineGap`, `capHeight`, `xHeight`, `familyName`, `styleName`, `italicAngle`, `weight`, `designer`, `designerURL`, `manufacturer`, `manufacturerURL`, `license`, `licenseURL`, `version`, `description`, `copyright`, `trademark`

These properties can be edited via the Settings > Font Metadata page in Glyphr Studio.

## SVG Fonts

SVG Font is a deprecated format, and is _not_ the same as any old `.svg` file. SVG
Fonts have a `<font>` tag, contain some metadata attributes, and also `<glyph>` and
`<hkern>` tags for storing glyph outlines and kern data.

Since the format is deprecated (in favor of WOFF), browsers and other apps
will not be able to use
SVG Fonts. But, some other typeface design programs (like Font Forge) do still support
reading and writing SVG Fonts, so this format can be useful for passing information
back and forth between editors.

### Importing SVG Fonts

#### ✅ Importing Ligatures

- Importing Ligature information **is supported**.
- Ligature source characters must be in the BMP, below `U+FFFF`

#### ✅ Importing Kerning data

- Importing kern data **is supported**.

#### ✅ Importing Metadata

Here is the set of SVG Font Metadata that is imported. On the right is shown the
Glyphr Studio Project default value that will be used in case this piece of data
is not found:

| `font-face` attribute name | Glyphr Studio default | Glyphr Studio name      |
| -------------------------- | --------------------- | ----------------------- |
| font-family                | "My Font"             | Font family             |
| font-style                 | "Regular"             | Font style              |
| panose-1                   | "0 0 0 0 0 0 0 0 0 0" | Panose-1                |
| units-per-em               | 2048                  | Units per Em (UPM)      |
| ascent                     | 1550                  | Ascent                  |
| descent                    | -440                  | Descent                 |
| cap-height                 | 1480                  | Capital letter height   |
| x-height                   | 1100                  | X height                |
| font-weight                | 400                   | Font weight             |
| font-variant               | "normal"              | Font variant            |
| font-stretch               | "normal"              | Font stretch            |
| stemv                      | 0                     | Vertical stem           |
| stemh                      | 0                     | Horizontal stem         |
| slope                      | 0                     | Slope                   |
| underline-position         | -100                  | Underline position      |
| underline-thickness        | 20                    | Underline thickness     |
| strikethrough-position     | 550                   | Strikethrough position  |
| strikethrough-thickness    | 20                    | Strikethrough thickness |
| overline-position          | 1600                  | Overline position       |
| overline-thickness         | 20                    | Overline thickness      |

### Exporting SVG Fonts

#### ✅ Exporting SVG Font Ligatures

- Exporting ligatures **is supported**.

#### ✅ Exporting SVG Font Kerning data

- Exporting kern data **is supported**.

#### ✅ Exporting SVG Font Metadata

The following metadata attributes will be exported:

`font-family`, `font-style`, `panose-1`, `units-per-em`, `ascent`, `cap-height`, `x-height`, `descent`, `font-variant`, `font-weight`, `font-stretch`, `stemv`, `stemh`, `slope`, `underline-position`, `underline-thickness`, `strikethrough-position`, `strikethrough-thickness`, `overline-position`, `overline-thickness`

These properties can be edited via the Settings > Font Metadata page in Glyphr Studio.
