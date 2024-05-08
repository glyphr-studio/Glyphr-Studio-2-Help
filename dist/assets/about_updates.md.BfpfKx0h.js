import{_ as s,D as n,c as l,l as e,a,I as i,w as o,a1 as r,o as h}from"./chunks/framework.BupF6_oJ.js";const Qe=JSON.parse('{"title":"Updates","description":"","frontmatter":{},"headers":[],"relativePath":"about/updates.md","filePath":"about/updates.md","lastUpdated":1715040737000}'),d={name:"about/updates.md"},c=r('<h1 id="updates" tabindex="-1">Updates <a class="header-anchor" href="#updates" aria-label="Permalink to &quot;Updates&quot;">​</a></h1><p>This info and more can be found on the <a href="https://github.com/glyphr-studio/Glyphr-Studio-2/releases" target="_blank" rel="noreferrer">Glyphr Studio 2 Github Releases Page</a>.</p><h2 id="latest-release" tabindex="-1">Latest release <a class="header-anchor" href="#latest-release" aria-label="Permalink to &quot;Latest release&quot;">​</a></h2>',3),p={id:"v2-1-10-patch-release",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#v2-1-10-patch-release","aria-label":'Permalink to "v2.1.10 <badge type="tip">patch release</badge>"'},"​",-1),_=r('<p><em>released 2024-05-08</em></p><h4 id="bug-fixes" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Importing Kern data from font files supports <code>GPOS</code> Lookup Type 2 tables. <ul><li>Cannot import subtables with Pair Position Format 2 (Bug fixed here).</li><li>Can only import subtables with Pair Position Format 1.</li></ul></li><li>Importing Kern data with multiple subtables is now <strong>actually</strong> supported.</li><li>Fixed the <code>display-canvas</code> element used for Font Preview on the Overview page and the Projects menu.</li></ul><p> </p><h2 id="version-2-1-x" tabindex="-1">Version 2.1.x <a class="header-anchor" href="#version-2-1-x" aria-label="Permalink to &quot;Version 2.1.x&quot;">​</a></h2>',5),g={id:"v2-1-9-patch-release",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#v2-1-9-patch-release","aria-label":'Permalink to "v2.1.9 <badge type="tip">patch release</badge>"'},"​",-1),b=r('<p><em>released 2024-05-06</em></p><h4 id="bug-fixes-1" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-1" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Importing Kern data from font files supports <code>GPOS</code> Lookup Type 2 tables, now supports coverage tables types 1 and 2.</li><li>Importing Kern data with multiple subtables is now supported.</li><li>Fixed a bug where Kern data was being imported with the wrong (+/-) sign.</li><li>Fixed a bug that occurred while importing glyphs from a v1 project, and having correct side bearings and advance width.</li></ul><p> </p>',4),m={id:"v2-1-8-patch-release",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#v2-1-8-patch-release","aria-label":'Permalink to "v2.1.8 <badge type="tip">patch release</badge>"'},"​",-1),v=r('<p><em>released 2024-04-30</em></p><h4 id="new-features" tabindex="-1">New features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New features&quot;">​</a></h4><ul><li>Multi-select shapes from the Layers Panel by holding down <code>Ctrl</code> key.</li><li>OTF Import now supports reading Kern data from <code>GPOS</code> type 2 table.</li></ul><h4 id="bug-fixes-2" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-2" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>The 2nd screen Live Preview window now works in Firefox!</li><li>Fixed an import and export SVG bug related to the Basic Latin Controls range.</li><li>Fixed an import SVG bug related to the semicolon character.</li><li>Advance Widths of zero can now be exported to OTF.</li></ul><p> </p>',6),y={id:"v2-1-7-patch-release",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#v2-1-7-patch-release","aria-label":'Permalink to "v2.1.7 <badge type="tip">patch release</badge>"'},"​",-1),P=e("p",null,[e("em",null,"released 2024-03-20")],-1),T=e("h4",{id:"bug-fixes-3",tabindex:"-1"},[a("Bug fixes "),e("a",{class:"header-anchor",href:"#bug-fixes-3","aria-label":'Permalink to "Bug fixes"'},"​")],-1),k=e("ul",null,[e("li",null,[a("On the Settings > Font page, made updates to the "),e("code",null,"Font weight"),a(' property. This was categorized as a "SVG Font" only property, but it does get exported to OTF files as well. Updated the inline help description for this property, and moved it into the "Other font metrics" section.')]),e("li",null,`Fixed an export bug in naming ligature characters. OTF glyphs have character restrictions for what a glyph's name can be. Regular glyphs were being exported with appropriate "short" names, but the generated names for ligatures were (erroneously) using accented characters and some special characters.`),e("li",null,"Added a warning about using Unicode characters above the BMP (U+FFFF) in ligatures. These characters will cause errors if you try to use them as ligature characters.")],-1),S=e("p",null," ",-1),q={id:"v2-1-6-patch-release",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#v2-1-6-patch-release","aria-label":'Permalink to "v2.1.6 <badge type="tip">patch release</badge>"'},"​",-1),C=e("p",null,[e("em",null,"released 2024-03-05")],-1),F=e("h4",{id:"bug-fixes-4",tabindex:"-1"},[a("Bug fixes "),e("a",{class:"header-anchor",href:"#bug-fixes-4","aria-label":'Permalink to "Bug fixes"'},"​")],-1),I=e("ul",null,[e("li",null,"Importing two files, now the second project that gets created does not overwrite the first one."),e("li",null,[a('Handling the "Basic Latin Controls" Character Range, it can now be selected from dropdowns and can be hidden from the Settings > App page. Also updated the behavior of importing font files to automatically hide "Basic Latin Controls" range if it only has the '),e("code",null,"0x0"),a(' ".notdef" character.')])],-1),B={id:"v2-1-5-patch-release",tabindex:"-1"},V=e("a",{class:"header-anchor",href:"#v2-1-5-patch-release","aria-label":'Permalink to "v2.1.5 <badge type="tip">patch release</badge>"'},"​",-1),N=e("p",null,[e("em",null,"released 2024-02-09")],-1),G=e("h4",{id:"bug-fixes-5",tabindex:"-1"},[a("Bug fixes "),e("a",{class:"header-anchor",href:"#bug-fixes-5","aria-label":'Permalink to "Bug fixes"'},"​")],-1),j=e("ul",null,[e("li",null,"Quick bug fix for metadata imported from OTF or WOFF files")],-1),O={id:"v2-1-4-patch-release",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#v2-1-4-patch-release","aria-label":'Permalink to "v2.1.4 <badge type="tip">patch release</badge>"'},"​",-1),E=r('<p><em>released 2024-02-06</em></p><h4 id="new-features-1" tabindex="-1">New features <a class="header-anchor" href="#new-features-1" aria-label="Permalink to &quot;New features&quot;">​</a></h4><ul><li>New Shape Combine actions. Since v1 &quot;Combine Shapes&quot; action has existed... although it was very buggy and not dependable. For this release, we switched to using Paper.js to handle these &quot;boolean&quot; combine actions. In addition to Unite, the other complementing actions were added, including: Divide, Subtract, Overlap, and Exclusion. These actions are the same as multi-shape actions in other graphic design programs, like Pathfinder commands in Adobe Illustrator.</li><li>We brought back the &quot;Previous Item&quot; / &quot;Next Item&quot; buttons that were in v1. They are now located in the details pane, below the cards in the Attributes panel. These let you easily cycle through all the characters in your project.</li></ul><h4 id="bug-fixes-6" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-6" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Fixed an Export to OTF bug regarding the <code>.notdef</code> character having zero advance width.</li><li>Fixed an Export to OTF bug around handling paths with no path points.</li><li>Fixed a bug around deleting Kern Groups.</li><li>Added resiliency around automatically falling back to existing enabled Character Ranges on delete or navigation.</li></ul>',5),R={id:"v2-1-3-patch-release",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#v2-1-3-patch-release","aria-label":'Permalink to "v2.1.3 <badge type="tip">patch release</badge>"'},"​",-1),U=r('<p><em>released 2024-01-26</em></p><h4 id="new-features-2" tabindex="-1">New features <a class="header-anchor" href="#new-features-2" aria-label="Permalink to &quot;New features&quot;">​</a></h4><ul><li>Advanced handling for Character Ranges: <ul><li>Easily show &amp; hide ranges. Hidden ranges do not display in the character chooser, or get exported to fonts. But they remain saved in the project data.</li><li>Option to delete all the project character data within a range.</li></ul></li><li>Ability to delete items (Characters, Ligatures, or Components) that act as component roots. There is a new setting that controls the behavior of what happens to component instances when a root gets deleted. The default behavior is now that component instances will be unlinked and converted into stand-alone paths if their component root is deleted.</li><li>New export toggles for Ligatures and Kerning</li></ul><h4 id="bug-fixes-7" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-7" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Fixed a bug in exporting to OTF where the <code>space</code> character was being interpreted as the <code>.notdef</code> character</li></ul><p> </p>',6),M={id:"v2-1-2-patch-release",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#v2-1-2-patch-release","aria-label":'Permalink to "v2.1.2 <badge type="tip">patch release</badge>"'},"​",-1),z=e("p",null,[e("em",null,"released 2024-01-22")],-1),W=e("p",null,"Fixing bugs that were introduced in 2.1.1",-1),H=e("h4",{id:"bug-fixes-8",tabindex:"-1"},[a("Bug fixes "),e("a",{class:"header-anchor",href:"#bug-fixes-8","aria-label":'Permalink to "Bug fixes"'},"​")],-1),$=e("ul",null,[e("li",null,"Navigation works to Kerning, Components, and Ligatures"),e("li",null,"Deleting the last item now falls back to the default Character")],-1),J=e("p",null," ",-1),Q={id:"v2-1-1-patch-release",tabindex:"-1"},X=e("a",{class:"header-anchor",href:"#v2-1-1-patch-release","aria-label":'Permalink to "v2.1.1 <badge type="tip">patch release</badge>"'},"​",-1),Y=r('<p><em>released 2024-01-19</em></p><h4 id="bug-fixes-9" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-9" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Now only characters that are part of visible character ranges will be exported to fonts. Previously, all characters were exported, even if you had hidden certain character ranges from the Settings &gt; Project page. <strong>Note</strong> Adding and removing character ranges from the Settings &gt; Project page does not delete characters from your project. It only controls what is visible in the UI Character Picker, and what gets exported to fonts.</li><li>&#39;Lock aspect ratio&#39; now works for multi-selected shapes.</li><li>Fixed a few bugs / increased resiliency for importing ligatures from fonts.</li><li>Using the keyboard shortcut <code>Ctrl</code>+<code>v</code> to paste SVG code directly onto the edit canvas, this is now working better, but not perfect (seems to work as expected in Firefox). <strong>Note</strong> Using the operating system clipboard is only possible if the Glyphr Studio clipboard is empty. There is a new &quot;Clear Glyphr Studio Clipboard&quot; action that does this, or you can just do <code>Ctrl</code>+<code>c</code> copy on nothing, to clear the clipboard.</li></ul><p> </p>',4),Z={id:"v2-1-0-minor-release",tabindex:"-1"},ee=e("a",{class:"header-anchor",href:"#v2-1-0-minor-release","aria-label":'Permalink to "v2.1.0 <badge type="tip">minor release</badge>"'},"​",-1),ae=e("p",null,[e("em",null,"released 2024-01-15")],-1),te=e("h4",{id:"new-features-3",tabindex:"-1"},[a("New features "),e("a",{class:"header-anchor",href:"#new-features-3","aria-label":'Permalink to "New features"'},"​")],-1),ie=e("p",null,"Across the main site, the app, and the help documentation, many URLs and descriptions have been updated to reflect that v2 is now the default experience for Glyphr Studio.",-1),oe=e("p",null," ",-1),re=e("h2",{id:"version-2-0-x",tabindex:"-1"},[a("Version 2.0.x "),e("a",{class:"header-anchor",href:"#version-2-0-x","aria-label":'Permalink to "Version 2.0.x"'},"​")],-1),se={id:"v2-0-3-patch-release",tabindex:"-1"},ne=e("a",{class:"header-anchor",href:"#v2-0-3-patch-release","aria-label":'Permalink to "v2.0.3 <badge type="tip">patch release</badge>"'},"​",-1),le=r('<p><em>released 2024-01-14</em></p><p>Getting in some bug fixes before the v1/v2 switch happens!</p><h4 id="bug-fixes-10" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-10" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Importing ligatures is now more resilient to individual errors.</li><li>Fixed some import / export bugs for SVG Fonts around the <code>.notdef</code> character and advanced Unicode ranges.</li><li>Some fit-and-finish style updates, including the new favicon.</li><li>Bug fix for the <code>input-number</code> control not displaying it&#39;s current value correctly.</li></ul><p> </p>',5),he={id:"v2-0-2-patch-release",tabindex:"-1"},de=e("a",{class:"header-anchor",href:"#v2-0-2-patch-release","aria-label":'Permalink to "v2.0.2 <badge type="tip">patch release</badge>"'},"​",-1),ce=r('<p><em>released 2024-01-03</em></p><h4 id="new-features-4" tabindex="-1">New features <a class="header-anchor" href="#new-features-4" aria-label="Permalink to &quot;New features&quot;">​</a></h4><ul><li>New App Setting to specify the number of items in the Item Chooser, applies to Ligatures, Components, and Kern Groups. If you have a project with a large number of these, you the Item Chooser will now page through smaller sets of items to help performance.</li></ul><h4 id="bug-fixes-11" tabindex="-1">Bug fixes <a class="header-anchor" href="#bug-fixes-11" aria-label="Permalink to &quot;Bug fixes&quot;">​</a></h4><ul><li>Loading and Saving files now works in FireFox.</li><li>Creating a new project with a custom name now actually applies the name to the Project Name and Font Family properties.</li><li>Crashes, errors, and displaying wrong information while navigating between pages and showing cards in the Panel.</li><li>&quot;Too large to autosave&quot; check now disables the auto save project setting.</li><li>Additional checks / resiliency for component links.</li><li>Global Actions are now more resilient to individual item failures.</li><li>Export Advance Widths of zero to be a very small number as to not cause OTF file failures.</li></ul><p> </p>',6),pe={id:"v2-0-1-patch-release",tabindex:"-1"},ue=e("a",{class:"header-anchor",href:"#v2-0-1-patch-release","aria-label":'Permalink to "v2.0.1 <badge type="tip">patch release</badge>"'},"​",-1),_e=e("p",null,[e("em",null,"released 2023-12-08")],-1),ge=e("h4",{id:"bug-fixes-12",tabindex:"-1"},[a("Bug fixes "),e("a",{class:"header-anchor",href:"#bug-fixes-12","aria-label":'Permalink to "Bug fixes"'},"​")],-1),fe=e("ul",null,[e("li",null,"Importing kern groups from projects."),e("li",null,"Better nav titles for kern groups, components, and ligatures with really long names."),e("li",null,"Undo for kern group edits."),e("li",null,"Export SVG now uses properly escaped values for characters that are also XML reserved characters.")],-1),be=e("p",null," ",-1),me={id:"v2-0-0-major-release",tabindex:"-1"},we=e("a",{class:"header-anchor",href:"#v2-0-0-major-release","aria-label":'Permalink to "v2.0.0 <badge type="tip">major release</badge>"'},"​",-1),ve=r('<p><em>released 2023-12-01</em></p><h4 id="main-features" tabindex="-1">Main features <a class="header-anchor" href="#main-features" aria-label="Permalink to &quot;Main features&quot;">​</a></h4><ul><li>From the Projects menu, open a second project, and be able to switch between them.</li><li>New Cross-project Actions, that allow you to move or overwrite shapes, characters, ligatures, components, kern groups, and settings - from one project to another.</li><li>No longer a limit to the Basic Multilingual Plane (Unicode through <code>U+FFFF</code>), any character from any plane can now be added as a character range.</li><li>Transform Origin control for resizing shapes and glyphs. No longer are items resized by the lower-left corner by default. A grid of origins are available, and the default is now baseline-left.</li><li>Modern file loading/saving - saving a file now directly overwrites the project file that was opened, instead of downloading a text file for every save.</li><li>Auto save - using the browser&#39;s local storage, automatically save the latest change for each project. And have the ability to restore projects from the Open Project page.</li><li>PANOSE builder - progressive drop-downs help you build the PANOSE number for your font.</li><li>New Kern Group actions let you search for or delete a specific letter pair.</li></ul><p>... and a lot of bug fixes.</p><p> </p><h2 id="version-2-alphas-and-betas" tabindex="-1">Version 2 Alphas and Betas <a class="header-anchor" href="#version-2-alphas-and-betas" aria-label="Permalink to &quot;Version 2 Alphas and Betas&quot;">​</a></h2>',6),ye={id:"v2-0-0-beta-2-1-pre-release",tabindex:"-1"},xe=e("a",{class:"header-anchor",href:"#v2-0-0-beta-2-1-pre-release","aria-label":'Permalink to "v2.0.0-beta.2.1 <badge type="warning">pre-release</badge>"'},"​",-1),Pe=r('<p><em>released 2023-10-06</em></p><h4 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>Beta 2.1 is the last Beta!</p><h4 id="main-features-1" tabindex="-1">Main features <a class="header-anchor" href="#main-features-1" aria-label="Permalink to &quot;Main features&quot;">​</a></h4><ul><li><strong>Rotate</strong> shapes with the rotation handle affordance on the edit canvas. Rotate Component Instances via the rotate property.</li><li><strong>Add Path Point tool</strong> lets you hover over an existing path and add a new point anywhere along the path you want.</li><li><strong>New Global Actions</strong>: Set all Side Bearings, and Round All.</li></ul><h4 id="other-small-things" tabindex="-1">Other small things <a class="header-anchor" href="#other-small-things" aria-label="Permalink to &quot;Other small things&quot;">​</a></h4><ul><li>More extensive testing and bug fixing for Combine Shapes algorithm.</li><li>Better display/communication between the edit canvas and the cards in the Attributes Panel.</li><li>Unit tests now have 100% coverage for Glyph Element classes, and common functions.</li><li>Help / Documentation updated.</li><li>Updated Oblegg, the example font.</li></ul><p> </p>',8),Te={id:"v2-0-0-beta-2-0-pre-release",tabindex:"-1"},ke=e("a",{class:"header-anchor",href:"#v2-0-0-beta-2-0-pre-release","aria-label":'Permalink to "v2.0.0-beta.2.0 <badge type="warning">pre-release</badge>"'},"​",-1),Se=r('<p><em>released 2023-09-07</em></p><h4 id="description-1" tabindex="-1">Description <a class="header-anchor" href="#description-1" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>Beta 2.0 is here, although not quite at feature parity with v1, a future Beta 2.1 will get us all the way there. In the mean time, here&#39;s the new stuff:</p><h4 id="main-features-2" tabindex="-1">Main features <a class="header-anchor" href="#main-features-2" aria-label="Permalink to &quot;Main features&quot;">​</a></h4><ul><li><strong>Kerning</strong> - Kern Groups can be saved and loaded from project files, and the new Kerning page allows you to create, edit, and delete Kern Groups.</li><li><strong>Global Actions Page</strong> - see a whole list of actions that you can run which can apply changes across many characters at once.</li><li><strong>Context Characters</strong> - a new panel was added to Character and Ligature edit pages that allows you to display other characters around the glyph you are currently editing.</li><li><strong>Live Previews</strong> - now much improved in functionality, the Live Preview Page has better scrolling options for sample text. Also a new Pop-out Window can be launched to display as many Live Previews as you want - great for seeing your changes in real time in a second window as you make edits in the main app window.</li><li><strong>Combine Shapes</strong> - now when you select two or more paths on the edit canvas, a &quot;Combine shapes&quot; action will allow you to merge multiple paths into as few paths as possible.</li></ul><p> </p>',6),qe={id:"v2-0-0-beta-1-1-pre-release",tabindex:"-1"},Ae=e("a",{class:"header-anchor",href:"#v2-0-0-beta-1-1-pre-release","aria-label":'Permalink to "v2.0.0-beta.1.1 <badge type="warning">pre-release</badge>"'},"​",-1),Ce=e("p",null,[e("em",null,"released 2023-06-14")],-1),Fe=e("h4",{id:"description-2",tabindex:"-1"},[a("Description "),e("a",{class:"header-anchor",href:"#description-2","aria-label":'Permalink to "Description"'},"​")],-1),Ie=e("p",null,[a("Beta 1.1 got rid of the old built-in SVG Parser, and replaced it with the new SVG-to-Bezier library. You can read more about why and how over at the blog: "),e("a",{href:"https://www.glyphrstudio.com/blog/2023/06/14/svg-to-bezier-a-gs2-side-quest/",target:"_blank",rel:"noreferrer"},"https://www.glyphrstudio.com/blog/2023/06/14/svg-to-bezier-a-gs2-side-quest/")],-1),Be=e("p",null," ",-1),Ve={id:"v2-0-0-beta-1-0-pre-release",tabindex:"-1"},Ne=e("a",{class:"header-anchor",href:"#v2-0-0-beta-1-0-pre-release","aria-label":'Permalink to "v2.0.0-beta.1.0 <badge type="warning">pre-release</badge>"'},"​",-1),Ge=r('<p><em>released 2023-06-01</em></p><h4 id="description-3" tabindex="-1">Description <a class="header-anchor" href="#description-3" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>Beta 1 is (hopefully) mostly stable from a Project File perspective. It also introduces two new areas of functionality in addition to several minor improvements.</p><h4 id="main-features-3" tabindex="-1">Main features <a class="header-anchor" href="#main-features-3" aria-label="Permalink to &quot;Main features&quot;">​</a></h4><ul><li><strong>Components</strong> - Use any glyph as a Component Root, or define stand-alone Components. Add these to any other glyph as Component Instances. Edit the Root, all the instances are also updated.</li><li><strong>Ligatures</strong> (Including import/export from OTF) - define a sequence of characters that will be recognized and replaced with a new specially designed character.</li></ul><h4 id="minor-features" tabindex="-1">Minor features <a class="header-anchor" href="#minor-features" aria-label="Permalink to &quot;Minor features&quot;">​</a></h4><ul><li>Fancy brand update with new logos, icons, and the &quot;Oblegg&quot; example font.</li><li>Lots of updates to make SVG import/export better.</li><li>Improved tab layouts for content pages - Help, About, and Settings.</li><li>Getting Started or First Run content for Components and Ligatures.</li><li>Updated help content.</li><li>Project summary information on the Overview page.</li><li>Renamed &quot;Glyphs&quot; to &quot;Characters&quot; (in the UI and in the code).</li><li>Importing OTF fonts automatically enables named Unicode ranges in your project.</li><li>Like, a bazillion bug fixes</li></ul><p> </p>',8),je={id:"v2-0-0-alpha-2-pre-release",tabindex:"-1"},Oe=e("a",{class:"header-anchor",href:"#v2-0-0-alpha-2-pre-release","aria-label":'Permalink to "v2.0.0-alpha.2 <badge type="danger">pre-release</badge>"'},"​",-1),De=r('<p><em>released 2023-02-01</em></p><h4 id="description-4" tabindex="-1">Description <a class="header-anchor" href="#description-4" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>The aim of Alpha 2 is to test some pieces of Glyphr Studio v2. Glyphr Studio is in Alpha because it is not a complete product yet. But feedback and bug-hunting on the following scenarios would be very helpful:</p><h4 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h4><ul><li>Save and Load Glyphr Studio Project files <code>.gs2</code></li><li>Import OTF, TTF, WOFF, and SVG Font files</li><li>Export OTF or SVG Font files</li><li>Update options on the Settings page for the App, your Project, or your Font</li><li>Use the Live Preview page to view your font as sentences or blocks of text</li></ul><p> </p>',6),Ee={id:"v2-0-0-alpha-1-pre-release",tabindex:"-1"},Re=e("a",{class:"header-anchor",href:"#v2-0-0-alpha-1-pre-release","aria-label":'Permalink to "v2.0.0-alpha.1 <badge type="danger">pre-release</badge>"'},"​",-1),Le=r('<p><em>released 2022-11-01</em></p><h4 id="description-5" tabindex="-1">Description <a class="header-anchor" href="#description-5" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>The aim of Alpha 1 is to test some pieces of Glyphr Studio v2. Glyphr Studio is in Alpha because it is not a complete product yet. But feedback and bug-hunting on the following scenarios would be very helpful.</p><h4 id="features-1" tabindex="-1">Features <a class="header-anchor" href="#features-1" aria-label="Permalink to &quot;Features&quot;">​</a></h4><ul><li>Navigate around using the upper-left Page button, and the Glyph Chooser</li><li>Create new shapes on the edit canvas</li><li>Resize shapes with the arrow tool</li><li>Edit paths with the pen tool</li><li>Edit glyph, path, and path point details from the Attributes panel</li></ul>',5);function Ue(Me,Ke,ze,We,He,$e){const t=n("badge");return h(),l("div",null,[c,e("h3",p,[a("v2.1.10 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),u]),_,e("h3",g,[a("v2.1.9 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),f]),b,e("h3",m,[a("v2.1.8 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),w]),v,e("h3",y,[a("v2.1.7 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),x]),P,T,k,S,e("h3",q,[a("v2.1.6 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),A]),C,F,I,e("h3",B,[a("v2.1.5 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),V]),N,G,j,e("h3",O,[a("v2.1.4 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),D]),E,e("h3",R,[a("v2.1.3 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),L]),U,e("h3",M,[a("v2.1.2 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),K]),z,W,H,$,J,e("h3",Q,[a("v2.1.1 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),X]),Y,e("h3",Z,[a("v2.1.0 "),i(t,{type:"tip"},{default:o(()=>[a("minor release")]),_:1}),a(),ee]),ae,te,ie,oe,re,e("h3",se,[a("v2.0.3 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),ne]),le,e("h3",he,[a("v2.0.2 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),de]),ce,e("h3",pe,[a("v2.0.1 "),i(t,{type:"tip"},{default:o(()=>[a("patch release")]),_:1}),a(),ue]),_e,ge,fe,be,e("h3",me,[a("v2.0.0 "),i(t,{type:"tip"},{default:o(()=>[a("major release")]),_:1}),a(),we]),ve,e("h3",ye,[a("v2.0.0-beta.2.1 "),i(t,{type:"warning"},{default:o(()=>[a("pre-release")]),_:1}),a(),xe]),Pe,e("h3",Te,[a("v2.0.0-beta.2.0 "),i(t,{type:"warning"},{default:o(()=>[a("pre-release")]),_:1}),a(),ke]),Se,e("h3",qe,[a("v2.0.0-beta.1.1 "),i(t,{type:"warning"},{default:o(()=>[a("pre-release")]),_:1}),a(),Ae]),Ce,Fe,Ie,Be,e("h3",Ve,[a("v2.0.0-beta.1.0 "),i(t,{type:"warning"},{default:o(()=>[a("pre-release")]),_:1}),a(),Ne]),Ge,e("h3",je,[a("v2.0.0-alpha.2 "),i(t,{type:"danger"},{default:o(()=>[a("pre-release")]),_:1}),a(),Oe]),De,e("h3",Ee,[a("v2.0.0-alpha.1 "),i(t,{type:"danger"},{default:o(()=>[a("pre-release")]),_:1}),a(),Re]),Le])}const Xe=s(d,[["render",Ue]]);export{Qe as __pageData,Xe as default};