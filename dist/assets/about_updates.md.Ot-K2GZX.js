import{_ as s,D as n,o as l,c as d,k as e,a,I as o,w as r,R as i}from"./chunks/framework.pKk-Oq-P.js";const X=JSON.parse('{"title":"Updates","description":"","frontmatter":{},"headers":[],"relativePath":"about/updates.md","filePath":"about/updates.md","lastUpdated":1702673998000}'),h={name:"about/updates.md"},p=e("h1",{id:"updates",tabindex:"-1"},[a("Updates "),e("a",{class:"header-anchor",href:"#updates","aria-label":'Permalink to "Updates"'},"​")],-1),c=e("p",null,"All releases and more information can be found at GitHub:",-1),u=e("p",null,[e("a",{href:"https://github.com/glyphr-studio/Glyphr-Studio-2/releases",target:"_blank",rel:"noreferrer"},"https://github.com/glyphr-studio/Glyphr-Studio-2/releases")],-1),g={id:"v2-0-1-patch-release",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#v2-0-1-patch-release","aria-label":'Permalink to "v2.0.1 <badge type="tip">patch release</badge>"'},"​",-1),f=e("p",null,[e("em",null,"released 2023-12-08")],-1),b=e("h3",{id:"bug-fixes",tabindex:"-1"},[a("Bug fixes "),e("a",{class:"header-anchor",href:"#bug-fixes","aria-label":'Permalink to "Bug fixes"'},"​")],-1),m=e("ul",null,[e("li",null,"Importing kern groups from projects."),e("li",null,"Better nav titles for kern groups, components, and ligatures with really long names."),e("li",null,"Undo for kern group edits."),e("li",null,"Export SVG now uses properly escaped values for characters that are also XML reserved characters.")],-1),y={id:"v2-0-0-major-release",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#v2-0-0-major-release","aria-label":'Permalink to "v2.0.0 <badge type="tip">major release</badge>"'},"​",-1),v=i('<p><em>released 2023-12-01</em></p><h4 id="main-features" tabindex="-1">Main features <a class="header-anchor" href="#main-features" aria-label="Permalink to &quot;Main features&quot;">​</a></h4><ul><li>From the Projects menu, open a second project, and be able to switch between them.</li><li>New Cross-project Actions, that allow you to move or overwrite shapes, characters, ligatures, components, kern groups, and settings - from one project to another.</li><li>No longer a limit to the Basic Multilingual Plane (Unicode through <code>U+FFFF</code>), any character from any plane can now be added as a character range.</li><li>Transform Origin control for resizing shapes and glyphs. No longer are items resized by the lower-left corner by default. A grid of origins are available, and the default is now baseline-left.</li><li>Modern file loading/saving - saving a file now directly overwrites the project file that was opened, instead of downloading a text file for every save.</li><li>Auto save - using the browser&#39;s local storage, automatically save the latest change for each project. And have the ability to restore projects from the Open Project page.</li><li>PANOSE builder - progressive drop-downs help you build the PANOSE number for your font.</li><li>New Kern Group actions let you search for or delete a specific letter pair.</li></ul><p>... and a lot of bug fixes.</p>',4),P={id:"v2-0-0-beta-2-1-pre-release",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#v2-0-0-beta-2-1-pre-release","aria-label":'Permalink to "v2.0.0-beta.2.1 <badge type="warning">pre-release</badge>"'},"​",-1),T=i('<p><em>released 2023-10-06</em></p><h4 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>Beta 2.1 is the last Beta!</p><h4 id="main-features-1" tabindex="-1">Main features <a class="header-anchor" href="#main-features-1" aria-label="Permalink to &quot;Main features&quot;">​</a></h4><ul><li><strong>Rotate</strong> shapes with the rotation handle affordance on the edit canvas. Rotate Component Instances via the rotate property.</li><li><strong>Add Path Point tool</strong> lets you hover over an existing path and add a new point anywhere along the path you want.</li><li><strong>New Global Actions</strong>: Set all Side Bearings, and Round All.</li></ul><h4 id="other-small-things" tabindex="-1">Other small things <a class="header-anchor" href="#other-small-things" aria-label="Permalink to &quot;Other small things&quot;">​</a></h4><ul><li>More extensive testing and bug fixing for Combine Shapes algorithm.</li><li>Better display/communication between the edit canvas and the cards in the Attributes Panel.</li><li>Unit tests now have 100% coverage for Glyph Element classes, and common functions.</li><li>Help / Documentation updated.</li><li>Updated Oblegg, the example font.</li></ul>',7),S={id:"v2-0-0-beta-2-0-pre-release",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#v2-0-0-beta-2-0-pre-release","aria-label":'Permalink to "v2.0.0-beta.2.0 <badge type="warning">pre-release</badge>"'},"​",-1),A=i('<p><em>released 2023-09-07</em></p><h4 id="description-1" tabindex="-1">Description <a class="header-anchor" href="#description-1" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>Beta 2.0 is here, although not quite at feature parity with v1, a future Beta 2.1 will get us all the way there. In the mean time, here&#39;s the new stuff:</p><h4 id="main-features-2" tabindex="-1">Main features <a class="header-anchor" href="#main-features-2" aria-label="Permalink to &quot;Main features&quot;">​</a></h4><ul><li><strong>Kerning</strong> - Kern Groups can be saved and loaded from project files, and the new Kerning page allows you to create, edit, and delete Kern Groups.</li><li><strong>Global Actions Page</strong> - see a whole list of actions that you can run which can apply changes across many characters at once.</li><li><strong>Context Characters</strong> - a new panel was added to Character and Ligature edit pages that allows you to display other characters around the glyph you are currently editing.</li><li><strong>Live Previews</strong> - now much improved in functionality, the Live Preview Page has better scrolling options for sample text. Also a new Pop-out Window can be launched to display as many Live Previews as you want - great for seeing your changes in real time in a second window as you make edits in the main app window.</li><li><strong>Combine Shapes</strong> - now when you select two or more paths on the edit canvas, a &quot;Combine shapes&quot; action will allow you to merge multiple paths into as few paths as possible.</li></ul>',5),q={id:"v2-0-0-beta-1-1-pre-release",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#v2-0-0-beta-1-1-pre-release","aria-label":'Permalink to "v2.0.0-beta.1.1 <badge type="warning">pre-release</badge>"'},"​",-1),G=e("p",null,[e("em",null,"released 2023-06-14")],-1),I=e("h4",{id:"description-2",tabindex:"-1"},[a("Description "),e("a",{class:"header-anchor",href:"#description-2","aria-label":'Permalink to "Description"'},"​")],-1),F=e("p",null,[a("Beta 1.1 got rid of the old built-in SVG Parser, and replaced it with the new SVG-to-Bezier library. You can read more about why and how over at the blog: "),e("a",{href:"https://www.glyphrstudio.com/blog/2023/06/14/svg-to-bezier-a-gs2-side-quest/",target:"_blank",rel:"noreferrer"},"https://www.glyphrstudio.com/blog/2023/06/14/svg-to-bezier-a-gs2-side-quest/")],-1),V={id:"v2-0-0-beta-1-0-pre-release",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#v2-0-0-beta-1-0-pre-release","aria-label":'Permalink to "v2.0.0-beta.1.0 <badge type="warning">pre-release</badge>"'},"​",-1),j=i('<p><em>released 2023-06-01</em></p><h4 id="description-3" tabindex="-1">Description <a class="header-anchor" href="#description-3" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>Beta 1 is (hopefully) mostly stable from a Project File perspective. It also introduces two new areas of functionality in addition to several minor improvements.</p><h4 id="main-features-3" tabindex="-1">Main features <a class="header-anchor" href="#main-features-3" aria-label="Permalink to &quot;Main features&quot;">​</a></h4><ul><li><strong>Components</strong> - Use any glyph as a Component Root, or define stand-alone Components. Add these to any other glyph as Component Instances. Edit the Root, all the instances are also updated.</li><li><strong>Ligatures</strong> (Including import/export from OTF) - define a sequence of characters that will be recognized and replaced with a new specially designed character.</li></ul><h4 id="minor-features" tabindex="-1">Minor features <a class="header-anchor" href="#minor-features" aria-label="Permalink to &quot;Minor features&quot;">​</a></h4><ul><li>Fancy brand update with new logos, icons, and the &quot;Oblegg&quot; example font.</li><li>Lots of updates to make SVG import/export better.</li><li>Improved tab layouts for content pages - Help, About, and Settings.</li><li>Getting Started or First Run content for Components and Ligatures.</li><li>Updated help content.</li><li>Project summary information on the Overview page.</li><li>Renamed &quot;Glyphs&quot; to &quot;Characters&quot; (in the UI and in the code).</li><li>Importing OTF fonts automatically enables named Unicode ranges in your project.</li><li>Like, a bazillion bug fixes</li></ul>',7),N={id:"v2-0-0-alpha-2-pre-release",tabindex:"-1"},B=e("a",{class:"header-anchor",href:"#v2-0-0-alpha-2-pre-release","aria-label":'Permalink to "v2.0.0-alpha.2 <badge type="danger">pre-release</badge>"'},"​",-1),E=i('<p><em>released 2023-02-01</em></p><h4 id="description-4" tabindex="-1">Description <a class="header-anchor" href="#description-4" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>The aim of Alpha 2 is to test some pieces of Glyphr Studio v2. Glyphr Studio is in Alpha because it is not a complete product yet. But feedback and bug-hunting on the following scenarios would be very helpful:</p><h4 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h4><ul><li>Save and Load Glyphr Studio Project files <code>.gs2</code></li><li>Import OTF, TTF, WOFF, and SVG Font files</li><li>Export OTF or SVG Font files</li><li>Update options on the Settings page for the App, your Project, or your Font</li><li>Use the Live Preview page to view your font as sentences or blocks of text</li></ul>',5),O={id:"v2-0-0-alpha-1-pre-release",tabindex:"-1"},R=e("a",{class:"header-anchor",href:"#v2-0-0-alpha-1-pre-release","aria-label":'Permalink to "v2.0.0-alpha.1 <badge type="danger">pre-release</badge>"'},"​",-1),U=i('<p><em>released 2022-11-01</em></p><h4 id="description-5" tabindex="-1">Description <a class="header-anchor" href="#description-5" aria-label="Permalink to &quot;Description&quot;">​</a></h4><p>The aim of Alpha 1 is to test some pieces of Glyphr Studio v2. Glyphr Studio is in Alpha because it is not a complete product yet. But feedback and bug-hunting on the following scenarios would be very helpful.</p><h4 id="features-1" tabindex="-1">Features <a class="header-anchor" href="#features-1" aria-label="Permalink to &quot;Features&quot;">​</a></h4><ul><li>Navigate around using the upper-left Page button, and the Glyph Chooser</li><li>Create new shapes on the edit canvas</li><li>Resize shapes with the arrow tool</li><li>Edit paths with the pen tool</li><li>Edit glyph, path, and path point details from the Attributes panel</li></ul>',5);function M(L,z,K,$,H,W){const t=n("badge");return l(),d("div",null,[p,c,u,e("h2",g,[a("v2.0.1 "),o(t,{type:"tip"},{default:r(()=>[a("patch release")]),_:1}),a(),_]),f,b,m,e("h2",y,[a("v2.0.0 "),o(t,{type:"tip"},{default:r(()=>[a("major release")]),_:1}),a(),w]),v,e("h2",P,[a("v2.0.0-beta.2.1 "),o(t,{type:"warning"},{default:r(()=>[a("pre-release")]),_:1}),a(),x]),T,e("h2",S,[a("v2.0.0-beta.2.0 "),o(t,{type:"warning"},{default:r(()=>[a("pre-release")]),_:1}),a(),k]),A,e("h2",q,[a("v2.0.0-beta.1.1 "),o(t,{type:"warning"},{default:r(()=>[a("pre-release")]),_:1}),a(),C]),G,I,F,e("h2",V,[a("v2.0.0-beta.1.0 "),o(t,{type:"warning"},{default:r(()=>[a("pre-release")]),_:1}),a(),D]),j,e("h2",N,[a("v2.0.0-alpha.2 "),o(t,{type:"danger"},{default:r(()=>[a("pre-release")]),_:1}),a(),B]),E,e("h2",O,[a("v2.0.0-alpha.1 "),o(t,{type:"danger"},{default:r(()=>[a("pre-release")]),_:1}),a(),R]),U])}const Y=s(h,[["render",M]]);export{X as __pageData,Y as default};
