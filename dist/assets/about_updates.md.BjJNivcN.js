import{_ as s,D as n,c as l,l as e,a,I as i,w as o,a1 as r,o as h}from"./chunks/framework.BupF6_oJ.js";const ya=JSON.parse('{"title":"Updates","description":"","frontmatter":{},"headers":[],"relativePath":"about/updates.md","filePath":"about/updates.md","lastUpdated":1722962303000}'),d={name:"about/updates.md"},c=r('<h1 id="updates" tabindex="-1">Updates <a class="header-anchor" href="#updates" aria-label="Permalink to &quot;Updates&quot;">​</a></h1><p>This info and more can be found on the <a href="https://github.com/glyphr-studio/Glyphr-Studio-2/releases" target="_blank" rel="noreferrer">Glyphr Studio 2 Github Releases Page</a>.</p><h2 id="latest-release" tabindex="-1">Latest release <a class="header-anchor" href="#latest-release" aria-label="Permalink to &quot;Latest release&quot;">​</a></h2>',3),p={id:"v2-3-4-patch-release",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#v2-3-4-patch-release","aria-label":'Permalink to "v2.3.4 <badge type="tip">patch release</badge>"'},"​",-1),g=e("p",null,[e("em",null,"released 2024-08-05")],-1),_=e("h4",{id:"bug-fixes",tabindex:"-1"},[a("Bug fixes "),e("a",{class:"header-anchor",href:"#bug-fixes","aria-label":'Permalink to "Bug fixes"'},"​")],-1),f=e("ul",null,[e("li",null,"Fixed a bug where imported fonts were not having the appropriate Character Ranges created and enabled.")],-1),b={id:"v2-3-3-patch-release",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#v2-3-3-patch-release","aria-label":'Permalink to "v2.3.3 <badge type="tip">patch release</badge>"'},"​",-1),v=e("p",null,[e("em",null,"released 2024-08-01")],-1),w=e("h4",{id:"bug-fixes-1",tabindex:"-1"},[a("Bug fixes "),e("a",{class:"header-anchor",href:"#bug-fixes-1","aria-label":'Permalink to "Bug fixes"'},"​")],-1),x=e("ul",null,[e("li",null,"Fixed a bug on the Cross Project Actions page that was causing item selection to fail.")],-1),y=e("h4",{id:"quality-improvements",tabindex:"-1"},[a("Quality improvements "),e("a",{class:"header-anchor",href:"#quality-improvements","aria-label":'Permalink to "Quality improvements"'},"​")],-1),P=e("ul",null,[e("li",null,"Added tests for boolean combine actions and page navigation.")],-1),T={id:"v2-3-2-patch-release",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#v2-3-2-patch-release","aria-label":'Permalink to "v2.3.2 <badge type="tip">patch release</badge>"'},"​",-1),S=e("p",null,[e("em",null,"released 2024-07-30")],-1),q=e("h4",{id:"bug-fixes-2",tabindex:"-1"},[a("Bug fixes "),e("a",{class:"header-anchor",href:"#bug-fixes-2","aria-label":'Permalink to "Bug fixes"'},"​")],-1),A=e("ul",null,[e("li",null,"Fixed a bug that prevented navigating to the Kerning page."),e("li",null,"Fixed a bug that was closing dialog boxes when trying to click on inputs.")],-1),C={id:"v2-3-1-patch-release",tabindex:"-1"},F=e("a",{class:"header-anchor",href:"#v2-3-1-patch-release","aria-label":'Permalink to "v2.3.1 <badge type="tip">patch release</badge>"'},"​",-1),I=r('<p><em>released 2024-07-29</em></p><h4 id="bug-fixes-3" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-3" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Fixed an edge case for exporting Ligatures where glyph indexes were not correct.</li></ul><h4 id="quality-improvements-1" tabindex="-1">Quality improvements <a class="header-anchor" href="#quality-improvements-1" aria-label="Permalink to &quot;Quality improvements&quot;">​</a></h4><ul><li>All code now has complete JSDoc documentation, with the ability to do type checking.</li><li>Added Storybook coverage for all basic UI components.</li><li>Vitest now supports functions that depend on Canvas.</li></ul><h2 id="version-2-3-x" tabindex="-1">Version 2.3.x <a class="header-anchor" href="#version-2-3-x" aria-label="Permalink to &quot;Version 2.3.x&quot;">​</a></h2>',6),B={id:"v2-3-0-minor-release",tabindex:"-1"},V=e("a",{class:"header-anchor",href:"#v2-3-0-minor-release","aria-label":'Permalink to "v2.3.0 <badge type="tip">minor release</badge>"'},"​",-1),N=r('<p><em>released 2024-06-19</em></p><h4 id="new-features" tabindex="-1">New features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New features&quot;">​</a></h4><ul><li>For the Glyph card &quot;Get paths&quot; and &quot;Add component instance&quot; actions, there is now a new option that will maintain the Right Side Bearing. If the new paths or components that get added are wider than the existing shapes, this option will keep the Right Side Bearing constant.</li><li>New Glyph card action &quot;Import SVG&quot;. This does the same thing as dragging+dropping a <code>.svg</code> file on the edit canvas, except it launches your browser&#39;s Open File dialog box, so you can navigate and select a <code>.svg</code> file that way. Also, the &quot;Export SVG&quot; glyph action icon was updated.</li><li>New setting and new glyph tile visuals that help you work with an item&#39;s edit state. Glyphr Studio now keeps track of each item&#39;s state: previously saved, was changed but not saved yet, was created but not edited, and not created yet. These states influence how an item&#39;s glyph tile name is displayed. Also, there is an option in Settings &gt; App that toggles whether or not the empty items (&quot;created but not edited&quot;) are exported to fonts or not.</li><li>For projects that have unsaved changes, a dot is now shown after the title in the browser tab.</li></ul><h4 id="bug-fixes-4" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-4" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Ligatures that (somehow) got created without their <code>gsub</code> property now have one generated based on its Ligature ID. This was causing a bug that caused navigating to a Ligature to fail.</li><li>Fixed a bug that was drawing random shapes in an Item&#39;s thumbnail if that item did not exist. Now it just draws nothing!</li><li>Fixed a bug for DevMode only, now honors not auto-saving.</li><li>Fixed a bug for Firefox that was causing extra stuff to show up on the Edit Canvas while dragging.</li></ul><h2 id="version-2-2-x" tabindex="-1">Version 2.2.x <a class="header-anchor" href="#version-2-2-x" aria-label="Permalink to &quot;Version 2.2.x&quot;">​</a></h2>',6),G={id:"v2-2-0-minor-release",tabindex:"-1"},j=e("a",{class:"header-anchor",href:"#v2-2-0-minor-release","aria-label":'Permalink to "v2.2.0 <badge type="tip">minor release</badge>"'},"​",-1),D=r('<p><em>released 2024-05-16</em></p><h4 id="new-features-1" tabindex="-1">New features <a class="header-anchor" href="#new-features-1" aria-label="Permalink to &quot;New features&quot;">​</a></h4><ul><li>SVG Import now supports the <code>transform</code> and the <code>transform-origin</code> attributes for svg tags. This builds on a recent release of our sister project, <a href="https://github.com/mattlag/SVG-to-Bezier" target="_blank" rel="noreferrer">SVG to Bezier</a>. <ul><li>Specifically, the <code>transform</code> attribute has many options for transformation commands, and we now support all of these different types of transformations: <code>matrix</code>, <code>translate</code>, <code>scale</code>, <code>rotate</code>, <code>skewX</code>, <code>skewY</code>.</li><li>We have a fairly extensive set of svg test files... but, as always, there may be some edge cases where svg code does not import as expected. If you encounter any unexpected behavior, please send the svg file to <a href="mailto:mail@glyphrstudio.com" target="_blank" rel="noreferrer">mail@glyphrstudio.com</a>, and that will help us immensely with finding bugs and improving Glyphr Studio!</li></ul></li></ul><h4 id="bug-fixes-5" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-5" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Fixed (yet another) bug around importing fonts with certain types of kern data. Along with this, improved the automated test coverage for importing different types of font files.</li></ul><p> </p><h2 id="version-2-1-x" tabindex="-1">Version 2.1.x <a class="header-anchor" href="#version-2-1-x" aria-label="Permalink to &quot;Version 2.1.x&quot;">​</a></h2>',7),R={id:"v2-1-10-patch-release",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#v2-1-10-patch-release","aria-label":'Permalink to "v2.1.10 <badge type="tip">patch release</badge>"'},"​",-1),O=r('<p><em>released 2024-05-08</em></p><h4 id="bug-fixes-6" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-6" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Importing Kern data from font files supports <code>GPOS</code> Lookup Type 2 tables. <ul><li>Cannot import subtables with Pair Position Format 2 (Bug fixed here).</li><li>Can only import subtables with Pair Position Format 1.</li></ul></li><li>Importing Kern data with multiple subtables is now <strong>actually</strong> supported.</li><li>Fixed the <code>display-canvas</code> element used for Font Preview on the Overview page and the Projects menu.</li></ul><p> </p>',4),L={id:"v2-1-9-patch-release",tabindex:"-1"},U=e("a",{class:"header-anchor",href:"#v2-1-9-patch-release","aria-label":'Permalink to "v2.1.9 <badge type="tip">patch release</badge>"'},"​",-1),M=r('<p><em>released 2024-05-06</em></p><h4 id="bug-fixes-7" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-7" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Importing Kern data from font files supports <code>GPOS</code> Lookup Type 2 tables, now supports coverage tables types 1 and 2.</li><li>Importing Kern data with multiple subtables is now supported.</li><li>Fixed a bug where Kern data was being imported with the wrong (+/-) sign.</li><li>Fixed a bug that occurred while importing glyphs from a v1 project, and having correct side bearings and advance width.</li></ul><p> </p>',4),K={id:"v2-1-8-patch-release",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#v2-1-8-patch-release","aria-label":'Permalink to "v2.1.8 <badge type="tip">patch release</badge>"'},"​",-1),W=r('<p><em>released 2024-04-30</em></p><h4 id="new-features-2" tabindex="-1">New features <a class="header-anchor" href="#new-features-2" aria-label="Permalink to &quot;New features&quot;">​</a></h4><ul><li>Multi-select shapes from the Layers Panel by holding down <code>Ctrl</code> key.</li><li>OTF Import now supports reading Kern data from <code>GPOS</code> type 2 table.</li></ul><h4 id="bug-fixes-8" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-8" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>The 2nd screen Live Preview window now works in Firefox!</li><li>Fixed an import and export SVG bug related to the Basic Latin Controls range.</li><li>Fixed an import SVG bug related to the semicolon character.</li><li>Advance Widths of zero can now be exported to OTF.</li></ul><p> </p>',6),Q={id:"v2-1-7-patch-release",tabindex:"-1"},H=e("a",{class:"header-anchor",href:"#v2-1-7-patch-release","aria-label":'Permalink to "v2.1.7 <badge type="tip">patch release</badge>"'},"​",-1),$=e("p",null,[e("em",null,"released 2024-03-20")],-1),J=e("h4",{id:"bug-fixes-9",tabindex:"-1"},[a("Bug fixes "),e("a",{class:"header-anchor",href:"#bug-fixes-9","aria-label":'Permalink to "Bug fixes"'},"​")],-1),X=e("ul",null,[e("li",null,[a("On the Settings > Font page, made updates to the "),e("code",null,"Font weight"),a(' property. This was categorized as a "SVG Font" only property, but it does get exported to OTF files as well. Updated the inline help description for this property, and moved it into the "Other font metrics" section.')]),e("li",null,`Fixed an export bug in naming ligature characters. OTF glyphs have character restrictions for what a glyph's name can be. Regular glyphs were being exported with appropriate "short" names, but the generated names for ligatures were (erroneously) using accented characters and some special characters.`),e("li",null,"Added a warning about using Unicode characters above the BMP (U+FFFF) in ligatures. These characters will cause errors if you try to use them as ligature characters.")],-1),Y=e("p",null," ",-1),Z={id:"v2-1-6-patch-release",tabindex:"-1"},ee=e("a",{class:"header-anchor",href:"#v2-1-6-patch-release","aria-label":'Permalink to "v2.1.6 <badge type="tip">patch release</badge>"'},"​",-1),ae=e("p",null,[e("em",null,"released 2024-03-05")],-1),te=e("h4",{id:"bug-fixes-10",tabindex:"-1"},[a("Bug fixes "),e("a",{class:"header-anchor",href:"#bug-fixes-10","aria-label":'Permalink to "Bug fixes"'},"​")],-1),ie=e("ul",null,[e("li",null,"Importing two files, now the second project that gets created does not overwrite the first one."),e("li",null,[a('Handling the "Basic Latin Controls" Character Range, it can now be selected from dropdowns and can be hidden from the Settings > App page. Also updated the behavior of importing font files to automatically hide "Basic Latin Controls" range if it only has the '),e("code",null,"0x0"),a(' ".notdef" character.')])],-1),oe={id:"v2-1-5-patch-release",tabindex:"-1"},re=e("a",{class:"header-anchor",href:"#v2-1-5-patch-release","aria-label":'Permalink to "v2.1.5 <badge type="tip">patch release</badge>"'},"​",-1),se=e("p",null,[e("em",null,"released 2024-02-09")],-1),ne=e("h4",{id:"bug-fixes-11",tabindex:"-1"},[a("Bug fixes "),e("a",{class:"header-anchor",href:"#bug-fixes-11","aria-label":'Permalink to "Bug fixes"'},"​")],-1),le=e("ul",null,[e("li",null,"Quick bug fix for metadata imported from OTF or WOFF files")],-1),he={id:"v2-1-4-patch-release",tabindex:"-1"},de=e("a",{class:"header-anchor",href:"#v2-1-4-patch-release","aria-label":'Permalink to "v2.1.4 <badge type="tip">patch release</badge>"'},"​",-1),ce=r('<p><em>released 2024-02-06</em></p><h4 id="new-features-3" tabindex="-1">New features <a class="header-anchor" href="#new-features-3" aria-label="Permalink to &quot;New features&quot;">​</a></h4><ul><li>New Shape Combine actions. Since v1 &quot;Combine Shapes&quot; action has existed... although it was very buggy and not dependable. For this release, we switched to using Paper.js to handle these &quot;boolean&quot; combine actions. In addition to Unite, the other complementing actions were added, including: Divide, Subtract, Overlap, and Exclusion. These actions are the same as multi-shape actions in other graphic design programs, like Pathfinder commands in Adobe Illustrator.</li><li>We brought back the &quot;Previous Item&quot; / &quot;Next Item&quot; buttons that were in v1. They are now located in the details pane, below the cards in the Attributes panel. These let you easily cycle through all the characters in your project.</li></ul><h4 id="bug-fixes-12" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-12" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Fixed an Export to OTF bug regarding the <code>.notdef</code> character having zero advance width.</li><li>Fixed an Export to OTF bug around handling paths with no path points.</li><li>Fixed a bug around deleting Kern Groups.</li><li>Added resiliency around automatically falling back to existing enabled Character Ranges on delete or navigation.</li></ul>',5),pe={id:"v2-1-3-patch-release",tabindex:"-1"},ue=e("a",{class:"header-anchor",href:"#v2-1-3-patch-release","aria-label":'Permalink to "v2.1.3 <badge type="tip">patch release</badge>"'},"​",-1),ge=r('<p><em>released 2024-01-26</em></p><h4 id="new-features-4" tabindex="-1">New features <a class="header-anchor" href="#new-features-4" aria-label="Permalink to &quot;New features&quot;">​</a></h4><ul><li>Advanced handling for Character Ranges: <ul><li>Easily show &amp; hide ranges. Hidden ranges do not display in the character chooser, or get exported to fonts. But they remain saved in the project data.</li><li>Option to delete all the project character data within a range.</li></ul></li><li>Ability to delete items (Characters, Ligatures, or Components) that act as component roots. There is a new setting that controls the behavior of what happens to component instances when a root gets deleted. The default behavior is now that component instances will be unlinked and converted into stand-alone paths if their component root is deleted.</li><li>New export toggles for Ligatures and Kerning</li></ul><h4 id="bug-fixes-13" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-13" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Fixed a bug in exporting to OTF where the <code>space</code> character was being interpreted as the <code>.notdef</code> character</li></ul><p> </p>',6),_e={id:"v2-1-2-patch-release",tabindex:"-1"},fe=e("a",{class:"header-anchor",href:"#v2-1-2-patch-release","aria-label":'Permalink to "v2.1.2 <badge type="tip">patch release</badge>"'},"​",-1),be=e("p",null,[e("em",null,"released 2024-01-22")],-1),me=e("p",null,"Fixing bugs that were introduced in 2.1.1",-1),ve=e("h4",{id:"bug-fixes-14",tabindex:"-1"},[a("Bug fixes "),e("a",{class:"header-anchor",href:"#bug-fixes-14","aria-label":'Permalink to "Bug fixes"'},"​")],-1),we=e("ul",null,[e("li",null,"Navigation works to Kerning, Components, and Ligatures"),e("li",null,"Deleting the last item now falls back to the default Character")],-1),xe=e("p",null," ",-1),ye={id:"v2-1-1-patch-release",tabindex:"-1"},Pe=e("a",{class:"header-anchor",href:"#v2-1-1-patch-release","aria-label":'Permalink to "v2.1.1 <badge type="tip">patch release</badge>"'},"​",-1),Te=r('<p><em>released 2024-01-19</em></p><h4 id="bug-fixes-15" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-15" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Now only characters that are part of visible character ranges will be exported to fonts. Previously, all characters were exported, even if you had hidden certain character ranges from the Settings &gt; Project page. <strong>Note</strong> Adding and removing character ranges from the Settings &gt; Project page does not delete characters from your project. It only controls what is visible in the UI Character Picker, and what gets exported to fonts.</li><li>&#39;Lock aspect ratio&#39; now works for multi-selected shapes.</li><li>Fixed a few bugs / increased resiliency for importing ligatures from fonts.</li><li>Using the keyboard shortcut <code>Ctrl</code>+<code>v</code> to paste SVG code directly onto the edit canvas, this is now working better, but not perfect (seems to work as expected in Firefox). <strong>Note</strong> Using the operating system clipboard is only possible if the Glyphr Studio clipboard is empty. There is a new &quot;Clear Glyphr Studio Clipboard&quot; action that does this, or you can just do <code>Ctrl</code>+<code>c</code> copy on nothing, to clear the clipboard.</li></ul><p> </p>',4),ke={id:"v2-1-0-minor-release",tabindex:"-1"},Se=e("a",{class:"header-anchor",href:"#v2-1-0-minor-release","aria-label":'Permalink to "v2.1.0 <badge type="tip">minor release</badge>"'},"​",-1),qe=e("p",null,[e("em",null,"released 2024-01-15")],-1),Ae=e("h4",{id:"new-features-5",tabindex:"-1"},[a("New features "),e("a",{class:"header-anchor",href:"#new-features-5","aria-label":'Permalink to "New features"'},"​")],-1),Ce=e("p",null,"Across the main site, the app, and the help documentation, many URLs and descriptions have been updated to reflect that v2 is now the default experience for Glyphr Studio.",-1),Fe=e("p",null," ",-1),Ie=e("h2",{id:"version-2-0-x",tabindex:"-1"},[a("Version 2.0.x "),e("a",{class:"header-anchor",href:"#version-2-0-x","aria-label":'Permalink to "Version 2.0.x"'},"​")],-1),Be={id:"v2-0-3-patch-release",tabindex:"-1"},Ve=e("a",{class:"header-anchor",href:"#v2-0-3-patch-release","aria-label":'Permalink to "v2.0.3 <badge type="tip">patch release</badge>"'},"​",-1),Ne=r('<p><em>released 2024-01-14</em></p><p>Getting in some bug fixes before the v1/v2 switch happens!</p><h4 id="bug-fixes-16" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-16" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Importing ligatures is now more resilient to individual errors.</li><li>Fixed some import / export bugs for SVG Fonts around the <code>.notdef</code> character and advanced Unicode ranges.</li><li>Some fit-and-finish style updates, including the new favicon.</li><li>Bug fix for the <code>input-number</code> control not displaying it&#39;s current value correctly.</li></ul><p> </p>',5),Ge={id:"v2-0-2-patch-release",tabindex:"-1"},je=e("a",{class:"header-anchor",href:"#v2-0-2-patch-release","aria-label":'Permalink to "v2.0.2 <badge type="tip">patch release</badge>"'},"​",-1),De=r('<p><em>released 2024-01-03</em></p><h4 id="new-features-6" tabindex="-1">New features <a class="header-anchor" href="#new-features-6" aria-label="Permalink to &quot;New features&quot;">​</a></h4><ul><li>New App Setting to specify the number of items in the Item Chooser, applies to Ligatures, Components, and Kern Groups. If you have a project with a large number of these, you the Item Chooser will now page through smaller sets of items to help performance.</li></ul><h4 id="bug-fixes-17" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-17" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Loading and Saving files now works in FireFox.</li><li>Creating a new project with a custom name now actually applies the name to the Project Name and Font Family properties.</li><li>Crashes, errors, and displaying wrong information while navigating between pages and showing cards in the Panel.</li><li>&quot;Too large to autosave&quot; check now disables the auto save project setting.</li><li>Additional checks / resiliency for component links.</li><li>Global Actions are now more resilient to individual item failures.</li><li>Export Advance Widths of zero to be a very small number as to not cause OTF file failures.</li></ul><p> </p>',6),Re={id:"v2-0-1-patch-release",tabindex:"-1"},Ee=e("a",{class:"header-anchor",href:"#v2-0-1-patch-release","aria-label":'Permalink to "v2.0.1 <badge type="tip">patch release</badge>"'},"​",-1),Oe=e("p",null,[e("em",null,"released 2023-12-08")],-1),Le=e("h4",{id:"bug-fixes-18",tabindex:"-1"},[a("Bug fixes "),e("a",{class:"header-anchor",href:"#bug-fixes-18","aria-label":'Permalink to "Bug fixes"'},"​")],-1),Ue=e("ul",null,[e("li",null,"Importing kern groups from projects."),e("li",null,"Better nav titles for kern groups, components, and ligatures with really long names."),e("li",null,"Undo for kern group edits."),e("li",null,"Export SVG now uses properly escaped values for characters that are also XML reserved characters.")],-1),Me=e("p",null," ",-1),Ke={id:"v2-0-0-major-release",tabindex:"-1"},ze=e("a",{class:"header-anchor",href:"#v2-0-0-major-release","aria-label":'Permalink to "v2.0.0 <badge type="tip">major release</badge>"'},"​",-1),We=r('<p><em>released 2023-12-01</em></p><h4 id="main-features" tabindex="-1">Main features <a class="header-anchor" href="#main-features" aria-label="Permalink to &quot;Main features&quot;">​</a></h4><ul><li>From the Projects menu, open a second project, and be able to switch between them.</li><li>New Cross-project Actions, that allow you to move or overwrite shapes, characters, ligatures, components, kern groups, and settings - from one project to another.</li><li>No longer a limit to the Basic Multilingual Plane (Unicode through <code>U+FFFF</code>), any character from any plane can now be added as a character range.</li><li>Transform Origin control for resizing shapes and glyphs. No longer are items resized by the lower-left corner by default. A grid of origins are available, and the default is now baseline-left.</li><li>Modern file loading/saving - saving a file now directly overwrites the project file that was opened, instead of downloading a text file for every save.</li><li>Auto save - using the browser&#39;s local storage, automatically save the latest change for each project. And have the ability to restore projects from the Open Project page.</li><li>PANOSE builder - progressive drop-downs help you build the PANOSE number for your font.</li><li>New Kern Group actions let you search for or delete a specific letter pair.</li></ul><p>... and a lot of bug fixes.</p><p> </p><h2 id="version-2-alphas-and-betas" tabindex="-1">Version 2 Alphas and Betas <a class="header-anchor" href="#version-2-alphas-and-betas" aria-label="Permalink to &quot;Version 2 Alphas and Betas&quot;">​</a></h2>',6),Qe={id:"v2-0-0-beta-2-1-pre-release",tabindex:"-1"},He=e("a",{class:"header-anchor",href:"#v2-0-0-beta-2-1-pre-release","aria-label":'Permalink to "v2.0.0-beta.2.1 <badge type="warning">pre-release</badge>"'},"​",-1),$e=r('<p><em>released 2023-10-06</em></p><h4 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>Beta 2.1 is the last Beta!</p><h4 id="main-features-1" tabindex="-1">Main features <a class="header-anchor" href="#main-features-1" aria-label="Permalink to &quot;Main features&quot;">​</a></h4><ul><li><strong>Rotate</strong> shapes with the rotation handle affordance on the edit canvas. Rotate Component Instances via the rotate property.</li><li><strong>Add Path Point tool</strong> lets you hover over an existing path and add a new point anywhere along the path you want.</li><li><strong>New Global Actions</strong>: Set all Side Bearings, and Round All.</li></ul><h4 id="other-small-things" tabindex="-1">Other small things <a class="header-anchor" href="#other-small-things" aria-label="Permalink to &quot;Other small things&quot;">​</a></h4><ul><li>More extensive testing and bug fixing for Combine Shapes algorithm.</li><li>Better display/communication between the edit canvas and the cards in the Attributes Panel.</li><li>Unit tests now have 100% coverage for Glyph Element classes, and common functions.</li><li>Help / Documentation updated.</li><li>Updated Oblegg, the example font.</li></ul><p> </p>',8),Je={id:"v2-0-0-beta-2-0-pre-release",tabindex:"-1"},Xe=e("a",{class:"header-anchor",href:"#v2-0-0-beta-2-0-pre-release","aria-label":'Permalink to "v2.0.0-beta.2.0 <badge type="warning">pre-release</badge>"'},"​",-1),Ye=r('<p><em>released 2023-09-07</em></p><h4 id="description-1" tabindex="-1">Description <a class="header-anchor" href="#description-1" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>Beta 2.0 is here, although not quite at feature parity with v1, a future Beta 2.1 will get us all the way there. In the mean time, here&#39;s the new stuff:</p><h4 id="main-features-2" tabindex="-1">Main features <a class="header-anchor" href="#main-features-2" aria-label="Permalink to &quot;Main features&quot;">​</a></h4><ul><li><strong>Kerning</strong> - Kern Groups can be saved and loaded from project files, and the new Kerning page allows you to create, edit, and delete Kern Groups.</li><li><strong>Global Actions Page</strong> - see a whole list of actions that you can run which can apply changes across many characters at once.</li><li><strong>Context Characters</strong> - a new panel was added to Character and Ligature edit pages that allows you to display other characters around the glyph you are currently editing.</li><li><strong>Live Previews</strong> - now much improved in functionality, the Live Preview Page has better scrolling options for sample text. Also a new Pop-out Window can be launched to display as many Live Previews as you want - great for seeing your changes in real time in a second window as you make edits in the main app window.</li><li><strong>Combine Shapes</strong> - now when you select two or more paths on the edit canvas, a &quot;Combine shapes&quot; action will allow you to merge multiple paths into as few paths as possible.</li></ul><p> </p>',6),Ze={id:"v2-0-0-beta-1-1-pre-release",tabindex:"-1"},ea=e("a",{class:"header-anchor",href:"#v2-0-0-beta-1-1-pre-release","aria-label":'Permalink to "v2.0.0-beta.1.1 <badge type="warning">pre-release</badge>"'},"​",-1),aa=e("p",null,[e("em",null,"released 2023-06-14")],-1),ta=e("h4",{id:"description-2",tabindex:"-1"},[a("Description "),e("a",{class:"header-anchor",href:"#description-2","aria-label":'Permalink to "Description"'},"​")],-1),ia=e("p",null,[a("Beta 1.1 got rid of the old built-in SVG Parser, and replaced it with the new SVG-to-Bezier library. You can read more about why and how over at the blog: "),e("a",{href:"https://www.glyphrstudio.com/blog/2023/06/14/svg-to-bezier-a-gs2-side-quest/",target:"_blank",rel:"noreferrer"},"https://www.glyphrstudio.com/blog/2023/06/14/svg-to-bezier-a-gs2-side-quest/")],-1),oa=e("p",null," ",-1),ra={id:"v2-0-0-beta-1-0-pre-release",tabindex:"-1"},sa=e("a",{class:"header-anchor",href:"#v2-0-0-beta-1-0-pre-release","aria-label":'Permalink to "v2.0.0-beta.1.0 <badge type="warning">pre-release</badge>"'},"​",-1),na=r('<p><em>released 2023-06-01</em></p><h4 id="description-3" tabindex="-1">Description <a class="header-anchor" href="#description-3" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>Beta 1 is (hopefully) mostly stable from a Project File perspective. It also introduces two new areas of functionality in addition to several minor improvements.</p><h4 id="main-features-3" tabindex="-1">Main features <a class="header-anchor" href="#main-features-3" aria-label="Permalink to &quot;Main features&quot;">​</a></h4><ul><li><strong>Components</strong> - Use any glyph as a Component Root, or define stand-alone Components. Add these to any other glyph as Component Instances. Edit the Root, all the instances are also updated.</li><li><strong>Ligatures</strong> (Including import/export from OTF) - define a sequence of characters that will be recognized and replaced with a new specially designed character.</li></ul><h4 id="minor-features" tabindex="-1">Minor features <a class="header-anchor" href="#minor-features" aria-label="Permalink to &quot;Minor features&quot;">​</a></h4><ul><li>Fancy brand update with new logos, icons, and the &quot;Oblegg&quot; example font.</li><li>Lots of updates to make SVG import/export better.</li><li>Improved tab layouts for content pages - Help, About, and Settings.</li><li>Getting Started or First Run content for Components and Ligatures.</li><li>Updated help content.</li><li>Project summary information on the Overview page.</li><li>Renamed &quot;Glyphs&quot; to &quot;Characters&quot; (in the UI and in the code).</li><li>Importing OTF fonts automatically enables named Unicode ranges in your project.</li><li>Like, a bazillion bug fixes</li></ul><p> </p>',8),la={id:"v2-0-0-alpha-2-pre-release",tabindex:"-1"},ha=e("a",{class:"header-anchor",href:"#v2-0-0-alpha-2-pre-release","aria-label":'Permalink to "v2.0.0-alpha.2 <badge type="danger">pre-release</badge>"'},"​",-1),da=r('<p><em>released 2023-02-01</em></p><h4 id="description-4" tabindex="-1">Description <a class="header-anchor" href="#description-4" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>The aim of Alpha 2 is to test some pieces of Glyphr Studio v2. Glyphr Studio is in Alpha because it is not a complete product yet. But feedback and bug-hunting on the following scenarios would be very helpful:</p><h4 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h4><ul><li>Save and Load Glyphr Studio Project files <code>.gs2</code></li><li>Import OTF, TTF, WOFF, and SVG Font files</li><li>Export OTF or SVG Font files</li><li>Update options on the Settings page for the App, your Project, or your Font</li><li>Use the Live Preview page to view your font as sentences or blocks of text</li></ul><p> </p>',6),ca={id:"v2-0-0-alpha-1-pre-release",tabindex:"-1"},pa=e("a",{class:"header-anchor",href:"#v2-0-0-alpha-1-pre-release","aria-label":'Permalink to "v2.0.0-alpha.1 <badge type="danger">pre-release</badge>"'},"​",-1),ua=r('<p><em>released 2022-11-01</em></p><h4 id="description-5" tabindex="-1">Description <a class="header-anchor" href="#description-5" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>The aim of Alpha 1 is to test some pieces of Glyphr Studio v2. Glyphr Studio is in Alpha because it is not a complete product yet. But feedback and bug-hunting on the following scenarios would be very helpful.</p><h4 id="features-1" tabindex="-1">Features <a class="header-anchor" href="#features-1" aria-label="Permalink to &quot;Features&quot;">​</a></h4><ul><li>Navigate around using the upper-left Page button, and the Glyph Chooser</li><li>Create new shapes on the edit canvas</li><li>Resize shapes with the arrow tool</li><li>Edit paths with the pen tool</li><li>Edit glyph, path, and path point details from the Attributes panel</li></ul>',5);function ga(_a,fa,ba,ma,va,wa){const t=n("badge");return h(),l("div",null,[c,e("h3",p,[a("v2.3.4 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),u]),g,_,f,e("h3",b,[a("v2.3.3 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),m]),v,w,x,y,P,e("h3",T,[a("v2.3.2 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),k]),S,q,A,e("h3",C,[a("v2.3.1 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),F]),I,e("h3",B,[a("v2.3.0 "),i(t,{type:"tip"},{default:o(()=>[a("minor release")]),_:1}),a(),V]),N,e("h3",G,[a("v2.2.0 "),i(t,{type:"tip"},{default:o(()=>[a("minor release")]),_:1}),a(),j]),D,e("h3",R,[a("v2.1.10 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),E]),O,e("h3",L,[a("v2.1.9 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),U]),M,e("h3",K,[a("v2.1.8 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),z]),W,e("h3",Q,[a("v2.1.7 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),H]),$,J,X,Y,e("h3",Z,[a("v2.1.6 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),ee]),ae,te,ie,e("h3",oe,[a("v2.1.5 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),re]),se,ne,le,e("h3",he,[a("v2.1.4 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),de]),ce,e("h3",pe,[a("v2.1.3 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),ue]),ge,e("h3",_e,[a("v2.1.2 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),fe]),be,me,ve,we,xe,e("h3",ye,[a("v2.1.1 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),Pe]),Te,e("h3",ke,[a("v2.1.0 "),i(t,{type:"tip"},{default:o(()=>[a("minor release")]),_:1}),a(),Se]),qe,Ae,Ce,Fe,Ie,e("h3",Be,[a("v2.0.3 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),Ve]),Ne,e("h3",Ge,[a("v2.0.2 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),je]),De,e("h3",Re,[a("v2.0.1 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),Ee]),Oe,Le,Ue,Me,e("h3",Ke,[a("v2.0.0 "),i(t,{type:"tip"},{default:o(()=>[a("major release")]),_:1}),a(),ze]),We,e("h3",Qe,[a("v2.0.0-beta.2.1 "),i(t,{type:"warning"},{default:o(()=>[a("pre-release")]),_:1}),a(),He]),$e,e("h3",Je,[a("v2.0.0-beta.2.0 "),i(t,{type:"warning"},{default:o(()=>[a("pre-release")]),_:1}),a(),Xe]),Ye,e("h3",Ze,[a("v2.0.0-beta.1.1 "),i(t,{type:"warning"},{default:o(()=>[a("pre-release")]),_:1}),a(),ea]),aa,ta,ia,oa,e("h3",ra,[a("v2.0.0-beta.1.0 "),i(t,{type:"warning"},{default:o(()=>[a("pre-release")]),_:1}),a(),sa]),na,e("h3",la,[a("v2.0.0-alpha.2 "),i(t,{type:"danger"},{default:o(()=>[a("pre-release")]),_:1}),a(),ha]),da,e("h3",ca,[a("v2.0.0-alpha.1 "),i(t,{type:"danger"},{default:o(()=>[a("pre-release")]),_:1}),a(),pa]),ua])}const Pa=s(d,[["render",ga]]);export{ya as __pageData,Pa as default};
