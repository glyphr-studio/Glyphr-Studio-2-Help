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
 - **Kern groups** - in a font, kern information is (usually) stored as a long list of character pairs.  In Glyphr Studio, it's possible to group similar kerned characters together. These groups are split apart and only their permutations are saved to fonts.
 - **Context glyphs and Live Previews** - these are helpful for previewing what your font will look like during editing, but this information does not get exported to fonts.
 - **Project and App preferences** - these are not exported to fonts.
 - **Path names** - In Glyphr Studio, paths can be given names which can be helpful to identify them in the Layers panel. Fonts have no concept of path names.
 - **Glyph ranges** - Glyphr Studio can edit any Unicode glyph (below `U+FFFF`), but as a convenience a single project enables you to show or hide certain glyph ranges. This range data is not exported - fonts simply have a long list of Unicode characters.

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
amounts of data, and much of this is *not* imported.

#### Importing Ligatures
For Alpha 1 & Alpha 2, Ligatures are **not** imported. 
This will be supported later, though.

#### Importing Kerning data
For Alpha 1 & Alpha 2, Kerning data is **not** imported. 
This will be supported later, though.

#### Importing Metadata
Here is a list of font metadata that does get imported. If that piece of data is not found, the Glyphr Studio default is shown in the last column.

| Font data name | Glyphr Studio default |
| --- | --- |
| font.familyName | My Font |
| font.unitsPerEm | 1000 |
| font.ascender | 700 |
| font.descender | 300 |
| font.tables.os2.sCapHeight | 675 |
| font.tables.os2.sxHeight | 400 |
| font.tables.os2.panose | 0 0 0 0 0 0 0 0 0 0 |
| font.tables.head.fontRevision or font.version | Version 0.1 |
| font.tables.name.fontSubfamily | 'Regular' |
| font.tables.name.copyright | '' |
| font.tables.name.trademark | '' |
| font.tables.name.designer | '' |
| font.tables.name.designerURL | '' |
| font.tables.name.manufacturer | '' |
| font.tables.name.manufacturerURL | '' |
| font.tables.name.license | '' |
| font.tables.name.licenseURL | '' |
| font.tables.name.description | '' |

### Exporting OTF
For font files, there is only one Export format: `.otf`. Even if you imported and started 
a project from a TTF or WOFF file, Glyphr Studio can only export OTF files. If you need 
additional file formats, we recommend using another tool (like Font Forge) to convert your 
OTF file to other formats.

#### Exporting Ligatures
For Alpha 1 & Alpha 2, Ligatures are **not** exported. 
This will be supported later, though.

#### Exporting Kerning data
For Alpha 1 & Alpha 2, Kerning data is **not** exported. 
We are currently investigating if this will be possible.

#### Exporting Metadata
The following pieces of metadata are passed off to OpenType.js to create the OTF file.

`unitsPerEm`, `ascender`, `descender`, `familyName`, `styleName`, `designer`, `designerURL`, `manufacturer`, `manufacturerURL`, `license`, `licenseURL`, `version`, `description`, `copyright`, `trademark`

These properties can be edited via the Settings > Font Metadata page in Glyphr Studio.

## SVG Fonts
SVG Font is a deprecated format, and is *not* the same as any old `.svg` file. SVG 
Fonts have a `<font>` tag, contain some metadata attributes, and also `<glyph>` and 
`<hkern>` tags for storing glyph outlines and kern data.

Since the format is deprecated (in favor of WOFF), browsers and other apps 
will not be able to use 
SVG Fonts. But, some other typeface design programs (like Font Forge) do still support 
reading and writing SVG Fonts, so this format can be useful for passing information 
back and forth between editors.

### Importing SVG Fonts

#### Importing SVG Font Ligatures
This is supported!

#### Importing SVG Font Kerning data
This is supported!

#### Importing SVG Font Metadata
Here is the set of SVG Font Metadata that is imported. On the right is shown the 
Glyphr Studio Project default value that will be used in case this piece of data 
is not found:

| `font-face` attribute name | Glyphr Studio default | 
| --- | --- |
| font-family | My Font |
| font-style | Regular |
| panose-1 | 0 0 0 0 0 0 0 0 0 0 |
| units-per-em | 1000 |
| ascent | 700 |
| cap-height | 675 |
| x-height | 400 |
| descent | -300 |
| font-variant | normal |
| font-weight | 400 |
| font-stretch | normal |
| underline-position | -50 |
| underline-thickness | 10 |
| strikethrough-position | 300 |
| strikethrough-thickness | 10 |
| overline-position | 750 |
| overline-thickness | 10 |

### Exporting SVG Fonts
Exported data to SVG Fonts will include **Glyph**, **Kern** (horizontal), and **Ligature**
information. As well as the following metadata attributes:

`font-family`,`font-style`,`panose-1`,`units-per-em`,`ascent`,`cap-height`,`x-height`,`descent`,`font-variant`,`font-weight`,`font-stretch`,`stemv`,`stemh`,`slope`,`underline-position`,`underline-thickness`,`strikethrough-position`,`strikethrough-thickness`,`overline-position`,`overline-thickness`

These properties can be edited via the Settings > Font Metadata page in Glyphr Studio.