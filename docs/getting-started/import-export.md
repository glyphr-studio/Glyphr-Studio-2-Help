# Importing and exporting files

This page contains detailed information about what is imported and exported from/to various file formats.
Glyphr Studio supports three main file types:

- **Glyphr Studio Project files** - `.gs2` for v2 projects, and `.txt` for v1 projects
- **Font files** - generically `.otf`, `.ttf`, and `.woff` files
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
- **Project and App preferences** - these are not exported to fonts.
- **Path names** - In Glyphr Studio, paths can be given names which can be helpful to identify them in the Layers panel. Fonts have no concept of path names.
- **Glyph ranges** - Glyphr Studio can edit any Unicode glyph. A single project enables you to show or hide certain glyph ranges. This range data is not exported - fonts simply have a long list of Unicode characters.

#### Projects made with Glyphr Studio v1

Glyphr Studio v1 project files have a `.txt` suffix. The Glyphr Studio v2 app cannot export v1 project files, and
v2 project files cannot be loaded into the v1 app. But, v1 project files (created with version `1.13.2` or later)
can be imported into the Glyphr Studio v2 app. The project file structure from v1 will be copied and translated into
the new v2 format.

## OTF, TTF, and WOFF

### Importing OTF, TTF, and WOFF

Glyphr Studio uses OpenType.js to import font files. These three formats are supported,
and let Glyphr Studio read character outline data. There is also a limited set of font
metadata that is imported into a Glyphr Studio Project. Font files can contain massive
amounts of data, and much of this is _not_ imported.

#### ✅ Importing Ligatures

- Ligature information and glyph shapes **are** imported.

#### ✅ Importing Kerning data

- Some kerning data **is** imported:
  - Importing Kern data from font files is supported for the `GPOS` table, Lookup Type 2 format.
    - Can only import subtables with Pair Position Format 1. Subtables with Pair Position Format 2 are not supported.
  - Kerning data for Ligature characters is **not** supported: kerned characters must have a Unicode code point.

#### ✅ Importing Metadata

Here is a list of font metadata that does get imported. If that piece of data is not found, the Glyphr Studio default is shown in the last column.

| Font data name                                | Glyphr Studio default |
| --------------------------------------------- | --------------------- |
| font.familyName                               | "My Font"             |
| font.unitsPerEm                               | 2048                  |
| font.ascender                                 | 1550                  |
| font.descender                                | -440                  |
| font.tables.os2.sCapHeight                    | 1480                  |
| font.tables.os2.sxHeight                      | 1100                  |
| font.tables.os2.panose                        | "0 0 0 0 0 0 0 0 0 0" |
| font.tables.head.fontRevision or font.version | "Version 0.1"         |
| font.tables.name.fontSubfamily                | "Regular"             |
| font.tables.name.copyright                    | ""                    |
| font.tables.name.trademark                    | ""                    |
| font.tables.name.designer                     | ""                    |
| font.tables.name.designerURL                  | ""                    |
| font.tables.name.manufacturer                 | ""                    |
| font.tables.name.manufacturerURL              | ""                    |
| font.tables.name.license                      | ""                    |
| font.tables.name.licenseURL                   | ""                    |
| font.tables.name.description                  | ""                    |

### Exporting OTF

For font files, there is only one Export format: `.otf`. Even if you imported and started
a project from a TTF or WOFF file, Glyphr Studio can only export OTF files. If you need
additional file formats, we recommend using another tool (like Font Forge) to convert your
OTF file to other formats.

#### ✅ Exporting Ligatures

- Exporting Ligature information **is supported**.
- Ligature source characters must be in the BMP, below `U+FFFF`

#### ✅ Exporting Kerning data

- Kerning data **is exported**.
  Kern information will be exported using the `GPOS` table.

#### ✅ Exporting Metadata

The following pieces of metadata are passed off to OpenType.js to create the OTF file.

`unitsPerEm`, `ascender`, `descender`, `familyName`, `styleName`, `designer`, `designerURL`, `manufacturer`, `manufacturerURL`, `license`, `licenseURL`, `version`, `description`, `copyright`, `trademark`

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

| `font-face` attribute name | Glyphr Studio default |
| -------------------------- | --------------------- |
| font-family                | "My Font"             |
| font-style                 | "Regular"             |
| panose-1                   | "0 0 0 0 0 0 0 0 0 0" |
| units-per-em               | 2048                  |
| ascent                     | 1550                  |
| cap-height                 | 1480                  |
| x-height                   | 1100                  |
| descent                    | -440                  |
| font-variant               | "normal"              |
| font-weight                | 400                   |
| font-stretch               | "normal"              |
| underline-position         | -100                  |
| underline-thickness        | 20                    |
| strikethrough-position     | 550                   |
| strikethrough-thickness    | 20                    |
| overline-position          | 1600                  |
| overline-thickness         | 20                    |

### Exporting SVG Fonts

#### ✅ Exporting SVG Font Ligatures

- Exporting ligatures **is supported**.

#### ✅ Exporting SVG Font Kerning data

- Exporting kern data **is supported**.

#### ✅ Exporting SVG Font Metadata

The following metadata attributes will be exported:

`font-family`, `font-style`, `panose-1`, `units-per-em`, `ascent`, `cap-height`, `x-height`, `descent`, `font-variant`, `font-weight`, `font-stretch`, `stemv`, `stemh`, `slope`, `underline-position`, `underline-thickness`, `strikethrough-position`, `strikethrough-thickness`, `overline-position`, `overline-thickness`

These properties can be edited via the Settings > Font Metadata page in Glyphr Studio.
