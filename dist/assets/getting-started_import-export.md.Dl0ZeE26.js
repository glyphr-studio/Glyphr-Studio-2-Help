import{_ as t,c as e,o,a1 as a}from"./chunks/framework.BupF6_oJ.js";const f=JSON.parse('{"title":"Importing and exporting files","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started/import-export.md","filePath":"getting-started/import-export.md","lastUpdated":1715209893000}'),r={name:"getting-started/import-export.md"},i=a('<h1 id="importing-and-exporting-files" tabindex="-1">Importing and exporting files <a class="header-anchor" href="#importing-and-exporting-files" aria-label="Permalink to &quot;Importing and exporting files&quot;">​</a></h1><p>This page contains detailed information about what is imported and exported from/to various file formats. Glyphr Studio supports three main file types:</p><ul><li><strong>Glyphr Studio Project files</strong> - <code>.gs2</code> for v2 projects, and <code>.txt</code> for v1 projects</li><li><strong>Font files</strong> - generically <code>.otf</code>, <code>.ttf</code>, and <code>.woff</code> files</li><li><strong>SVG Font files</strong> - a deprecated file format that is supported by Glyphr Studio</li></ul><h2 id="glyphr-studio-project-file" tabindex="-1">Glyphr Studio Project file <a class="header-anchor" href="#glyphr-studio-project-file" aria-label="Permalink to &quot;Glyphr Studio Project file&quot;">​</a></h2><p>The Glyphr Studio Project file contains all the information about your project, including metadata and glyph outlines. For Glyphr Studio v2, project files have a <code>.gs2</code> file suffix, but these are just text files, and the data is in JSON format.</p><p>Project files have a superset of features and information when compared to individual font files, so it&#39;s always recommended, for working on a given font, to save the Project File in addition to any exported Font file.</p><h4 id="project-specific-data-that-does-not-get-exported-to-fonts" tabindex="-1">Project-specific data that does not get exported to fonts <a class="header-anchor" href="#project-specific-data-that-does-not-get-exported-to-fonts" aria-label="Permalink to &quot;Project-specific data that does not get exported to fonts&quot;">​</a></h4><p>This is a list of things that Glyphr Studio Projects save, but have no equivalent in font files. These are extra things that help edit a font, but have no use for an exported font file itself.</p><ul><li><strong>Components</strong> - these are re-usable paths within a project. These are &#39;flattened&#39; and only their raw data is exported to fonts.</li><li><strong>Kern groups</strong> - in a font, kern information is (usually) stored as a long list of character pairs. In Glyphr Studio, it&#39;s possible to group similar kerned characters together. These groups are split apart and only their permutations are saved to fonts.</li><li><strong>Context glyphs and Live Previews</strong> - these are helpful for previewing what your font will look like during editing, but this information does not get exported to fonts.</li><li><strong>Project and App preferences</strong> - these are not exported to fonts.</li><li><strong>Path names</strong> - In Glyphr Studio, paths can be given names which can be helpful to identify them in the Layers panel. Fonts have no concept of path names.</li><li><strong>Glyph ranges</strong> - Glyphr Studio can edit any Unicode glyph. A single project enables you to show or hide certain glyph ranges. This range data is not exported - fonts simply have a long list of Unicode characters.</li></ul><h4 id="projects-made-with-glyphr-studio-v1" tabindex="-1">Projects made with Glyphr Studio v1 <a class="header-anchor" href="#projects-made-with-glyphr-studio-v1" aria-label="Permalink to &quot;Projects made with Glyphr Studio v1&quot;">​</a></h4><p>Glyphr Studio v1 project files have a <code>.txt</code> suffix. The Glyphr Studio v2 app cannot export v1 project files, and v2 project files cannot be loaded into the v1 app. But, v1 project files (created with version <code>1.13.2</code> or later) can be imported into the Glyphr Studio v2 app. The project file structure from v1 will be copied and translated into the new v2 format.</p><h2 id="otf-ttf-and-woff" tabindex="-1">OTF, TTF, and WOFF <a class="header-anchor" href="#otf-ttf-and-woff" aria-label="Permalink to &quot;OTF, TTF, and WOFF&quot;">​</a></h2><h3 id="importing-otf-ttf-and-woff" tabindex="-1">Importing OTF, TTF, and WOFF <a class="header-anchor" href="#importing-otf-ttf-and-woff" aria-label="Permalink to &quot;Importing OTF, TTF, and WOFF&quot;">​</a></h3><p>Glyphr Studio uses OpenType.js to import font files. These three formats are supported, and let Glyphr Studio read character outline data. There is also a limited set of font metadata that is imported into a Glyphr Studio Project. Font files can contain massive amounts of data, and much of this is <em>not</em> imported.</p><h4 id="✅-importing-ligatures" tabindex="-1">✅ Importing Ligatures <a class="header-anchor" href="#✅-importing-ligatures" aria-label="Permalink to &quot;✅ Importing Ligatures&quot;">​</a></h4><ul><li>Ligature information and glyph shapes <strong>are</strong> imported.</li></ul><h4 id="✅-importing-kerning-data" tabindex="-1">✅ Importing Kerning data <a class="header-anchor" href="#✅-importing-kerning-data" aria-label="Permalink to &quot;✅ Importing Kerning data&quot;">​</a></h4><ul><li>Some kerning data <strong>is</strong> imported: <ul><li>Importing Kern data from font files is supported for the <code>GPOS</code> table, Lookup Type 2 format. <ul><li>Can only import subtables with Pair Position Format 1. Subtables with Pair Position Format 2 are not supported.</li></ul></li><li>Kerning data for Ligature characters is <strong>not</strong> supported: kerned characters must have a Unicode code point.</li></ul></li></ul><h4 id="✅-importing-metadata" tabindex="-1">✅ Importing Metadata <a class="header-anchor" href="#✅-importing-metadata" aria-label="Permalink to &quot;✅ Importing Metadata&quot;">​</a></h4><p>Here is a list of font metadata that does get imported. If that piece of data is not found, the Glyphr Studio default is shown in the last column.</p><table><thead><tr><th>Font data name</th><th>Glyphr Studio default</th></tr></thead><tbody><tr><td>font.familyName</td><td>&quot;My Font&quot;</td></tr><tr><td>font.unitsPerEm</td><td>2048</td></tr><tr><td>font.ascender</td><td>1550</td></tr><tr><td>font.descender</td><td>-440</td></tr><tr><td>font.tables.os2.sCapHeight</td><td>1480</td></tr><tr><td>font.tables.os2.sxHeight</td><td>1100</td></tr><tr><td>font.tables.os2.panose</td><td>&quot;0 0 0 0 0 0 0 0 0 0&quot;</td></tr><tr><td>font.tables.head.fontRevision or font.version</td><td>&quot;Version 0.1&quot;</td></tr><tr><td>font.tables.name.fontSubfamily</td><td>&quot;Regular&quot;</td></tr><tr><td>font.tables.name.copyright</td><td>&quot;&quot;</td></tr><tr><td>font.tables.name.trademark</td><td>&quot;&quot;</td></tr><tr><td>font.tables.name.designer</td><td>&quot;&quot;</td></tr><tr><td>font.tables.name.designerURL</td><td>&quot;&quot;</td></tr><tr><td>font.tables.name.manufacturer</td><td>&quot;&quot;</td></tr><tr><td>font.tables.name.manufacturerURL</td><td>&quot;&quot;</td></tr><tr><td>font.tables.name.license</td><td>&quot;&quot;</td></tr><tr><td>font.tables.name.licenseURL</td><td>&quot;&quot;</td></tr><tr><td>font.tables.name.description</td><td>&quot;&quot;</td></tr></tbody></table><h3 id="exporting-otf" tabindex="-1">Exporting OTF <a class="header-anchor" href="#exporting-otf" aria-label="Permalink to &quot;Exporting OTF&quot;">​</a></h3><p>For font files, there is only one Export format: <code>.otf</code>. Even if you imported and started a project from a TTF or WOFF file, Glyphr Studio can only export OTF files. If you need additional file formats, we recommend using another tool (like Font Forge) to convert your OTF file to other formats.</p><h4 id="✅-exporting-ligatures" tabindex="-1">✅ Exporting Ligatures <a class="header-anchor" href="#✅-exporting-ligatures" aria-label="Permalink to &quot;✅ Exporting Ligatures&quot;">​</a></h4><ul><li>Exporting Ligature information <strong>is supported</strong>.</li><li>Ligature source characters must be in the BMP, below <code>U+FFFF</code></li></ul><h4 id="❌-exporting-kerning-data" tabindex="-1">❌ Exporting Kerning data <a class="header-anchor" href="#❌-exporting-kerning-data" aria-label="Permalink to &quot;❌ Exporting Kerning data&quot;">​</a></h4><ul><li>Kerning data is <strong>not</strong> exported. We are investigating if this will be possible (Currently an open issue with OpenType.js).</li></ul><h4 id="✅-exporting-metadata" tabindex="-1">✅ Exporting Metadata <a class="header-anchor" href="#✅-exporting-metadata" aria-label="Permalink to &quot;✅ Exporting Metadata&quot;">​</a></h4><p>The following pieces of metadata are passed off to OpenType.js to create the OTF file.</p><p><code>unitsPerEm</code>, <code>ascender</code>, <code>descender</code>, <code>familyName</code>, <code>styleName</code>, <code>designer</code>, <code>designerURL</code>, <code>manufacturer</code>, <code>manufacturerURL</code>, <code>license</code>, <code>licenseURL</code>, <code>version</code>, <code>description</code>, <code>copyright</code>, <code>trademark</code></p><p>These properties can be edited via the Settings &gt; Font Metadata page in Glyphr Studio.</p><h2 id="svg-fonts" tabindex="-1">SVG Fonts <a class="header-anchor" href="#svg-fonts" aria-label="Permalink to &quot;SVG Fonts&quot;">​</a></h2><p>SVG Font is a deprecated format, and is <em>not</em> the same as any old <code>.svg</code> file. SVG Fonts have a <code>&lt;font&gt;</code> tag, contain some metadata attributes, and also <code>&lt;glyph&gt;</code> and <code>&lt;hkern&gt;</code> tags for storing glyph outlines and kern data.</p><p>Since the format is deprecated (in favor of WOFF), browsers and other apps will not be able to use SVG Fonts. But, some other typeface design programs (like Font Forge) do still support reading and writing SVG Fonts, so this format can be useful for passing information back and forth between editors.</p><h3 id="importing-svg-fonts" tabindex="-1">Importing SVG Fonts <a class="header-anchor" href="#importing-svg-fonts" aria-label="Permalink to &quot;Importing SVG Fonts&quot;">​</a></h3><h4 id="✅-importing-ligatures-1" tabindex="-1">✅ Importing Ligatures <a class="header-anchor" href="#✅-importing-ligatures-1" aria-label="Permalink to &quot;✅ Importing Ligatures&quot;">​</a></h4><ul><li>Importing Ligature information <strong>is supported</strong>.</li><li>Ligature source characters must be in the BMP, below <code>U+FFFF</code></li></ul><h4 id="✅-importing-kerning-data-1" tabindex="-1">✅ Importing Kerning data <a class="header-anchor" href="#✅-importing-kerning-data-1" aria-label="Permalink to &quot;✅ Importing Kerning data&quot;">​</a></h4><ul><li>Importing kern data is supported!</li></ul><h4 id="✅-importing-metadata-1" tabindex="-1">✅ Importing Metadata <a class="header-anchor" href="#✅-importing-metadata-1" aria-label="Permalink to &quot;✅ Importing Metadata&quot;">​</a></h4><p>Here is the set of SVG Font Metadata that is imported. On the right is shown the Glyphr Studio Project default value that will be used in case this piece of data is not found:</p><table><thead><tr><th><code>font-face</code> attribute name</th><th>Glyphr Studio default</th></tr></thead><tbody><tr><td>font-family</td><td>&quot;My Font&quot;</td></tr><tr><td>font-style</td><td>&quot;Regular&quot;</td></tr><tr><td>panose-1</td><td>&quot;0 0 0 0 0 0 0 0 0 0&quot;</td></tr><tr><td>units-per-em</td><td>2048</td></tr><tr><td>ascent</td><td>1550</td></tr><tr><td>cap-height</td><td>1480</td></tr><tr><td>x-height</td><td>1100</td></tr><tr><td>descent</td><td>-440</td></tr><tr><td>font-variant</td><td>&quot;normal&quot;</td></tr><tr><td>font-weight</td><td>400</td></tr><tr><td>font-stretch</td><td>&quot;normal&quot;</td></tr><tr><td>underline-position</td><td>-100</td></tr><tr><td>underline-thickness</td><td>20</td></tr><tr><td>strikethrough-position</td><td>550</td></tr><tr><td>strikethrough-thickness</td><td>20</td></tr><tr><td>overline-position</td><td>1600</td></tr><tr><td>overline-thickness</td><td>20</td></tr></tbody></table><h3 id="exporting-svg-fonts" tabindex="-1">Exporting SVG Fonts <a class="header-anchor" href="#exporting-svg-fonts" aria-label="Permalink to &quot;Exporting SVG Fonts&quot;">​</a></h3><h4 id="✅-exporting-svg-font-ligatures" tabindex="-1">✅ Exporting SVG Font Ligatures <a class="header-anchor" href="#✅-exporting-svg-font-ligatures" aria-label="Permalink to &quot;✅ Exporting SVG Font Ligatures&quot;">​</a></h4><ul><li>Exporting ligatures is supported!</li></ul><h4 id="✅-exporting-svg-font-kerning-data" tabindex="-1">✅ Exporting SVG Font Kerning data <a class="header-anchor" href="#✅-exporting-svg-font-kerning-data" aria-label="Permalink to &quot;✅ Exporting SVG Font Kerning data&quot;">​</a></h4><ul><li>Exporting kern data is supported!</li></ul><h4 id="✅-exporting-svg-font-metadata" tabindex="-1">✅ Exporting SVG Font Metadata <a class="header-anchor" href="#✅-exporting-svg-font-metadata" aria-label="Permalink to &quot;✅ Exporting SVG Font Metadata&quot;">​</a></h4><p>The following metadata attributes will be exported:</p><p><code>font-family</code>, <code>font-style</code>, <code>panose-1</code>, <code>units-per-em</code>, <code>ascent</code>, <code>cap-height</code>, <code>x-height</code>, <code>descent</code>, <code>font-variant</code>, <code>font-weight</code>, <code>font-stretch</code>, <code>stemv</code>, <code>stemh</code>, <code>slope</code>, <code>underline-position</code>, <code>underline-thickness</code>, <code>strikethrough-position</code>, <code>strikethrough-thickness</code>, <code>overline-position</code>, <code>overline-thickness</code></p><p>These properties can be edited via the Settings &gt; Font Metadata page in Glyphr Studio.</p>',51),n=[i];function d(s,l,p,h,c,u){return o(),e("div",null,n)}const m=t(r,[["render",d]]);export{f as __pageData,m as default};