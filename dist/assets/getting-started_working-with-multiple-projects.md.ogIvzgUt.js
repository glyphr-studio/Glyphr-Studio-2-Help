import{_ as n,D as r,o as c,c as l,I as a,w as i,R as s,k as e,a as t}from"./chunks/framework.Ytfnxf9G.js";const h="/v2/help/assets/multi-projects_open.JWQoPcBG.png",p="/v2/help/assets/multi-projects_load.ZEeW9wSo.png",d="/v2/help/assets/multi-projects_action.mAI-wjmc.png",u="/v2/help/assets/multi-projects_menu.khX6zcl_.png",m="/v2/help/assets/multi-projects_welcome.E51OYbCa.png",M=JSON.parse('{"title":"Working with multiple projects","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started/working-with-multiple-projects.md","filePath":"getting-started/working-with-multiple-projects.md","lastUpdated":1702673998000}'),g={name:"getting-started/working-with-multiple-projects.md"},w=s('<h1 id="working-with-multiple-projects" tabindex="-1">Working with multiple projects <a class="header-anchor" href="#working-with-multiple-projects" aria-label="Permalink to &quot;Working with multiple projects&quot;">​</a></h1><p>Glyphr Studio is able to open and switch between 2 projects within the app. This allows for cross-project actions.</p><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting started&quot;">​</a></h2><p>The first step, after opening a single project, is to go to the <code>Projects</code> menu and select &quot;Open another project&quot;</p><p><img src="'+h+'" alt="Opening a second project"></p><p>This will launch a screen very similar to the initial Open Projects page, except in a dialog box.</p><p><img src="'+p+'" alt="Load screen for a second project"></p><p>You can create a new project, or load another existing project (including drag-and-dropping a file onto the dialog box).</p><h2 id="what-s-possible-with-two-projects" tabindex="-1">What&#39;s possible with two projects <a class="header-anchor" href="#what-s-possible-with-two-projects" aria-label="Permalink to &quot;What&#39;s possible with two projects&quot;">​</a></h2><p>The first benefit to working with two projects is being able to copy shapes from an item in another project into the current project. In the Glyph attribute card, you can select the &quot;Get Paths From Another Project&quot; action. This will launch a glyph chooser dialog that displays items from the other project. Once you select an item, it&#39;s shapes will be copied from the other project into the current one.</p><p><img src="'+d+'" alt="Welcome screen for Cross-project Actions"></p><p>The other main benefit of having two open projects is that it unlocks Cross-project Actions. From the <code>Projects</code> menu, selecting Cross-project actions:</p><p><img src="'+u+'" alt="Welcome screen for Cross-project Actions"></p><p>Will launch a new page:</p><p><img src="'+m+'" alt="Welcome screen for Cross-project Actions"></p><p>An important concept to understand is that these actions have a &quot;source&quot; project and &quot;destination&quot; project. Which project is which can be easily flipped with the <code>⮀</code> button.</p><p>Generally, you can select items from the source project, and they get transferred (somehow) to the destination. The details about what happens, along with what options are available, are outlined below.</p><h2 id="main-use-cases-what-isn-t-possible" tabindex="-1">Main use cases &amp; what isn&#39;t possible <a class="header-anchor" href="#main-use-cases-what-isn-t-possible" aria-label="Permalink to &quot;Main use cases &amp; what isn&#39;t possible&quot;">​</a></h2><p>By far the most requested feature in Glyphr Studio v1 was on the topic of merging fonts, or moving a few characters from one font to another. Cross-project actions aim to meet these scenarios - and even extends the idea to Kern Groups and project settings.</p><p>Component instances / component roots are the big thing that is not possible when merging two projects. In order to safely move glyphs, each one has their component instance links &#39;resolved&#39; before the move. So, the destination glyph will look the same as the source glyph, but, importantly, the component instances will all be converted to regular stand-alone paths.</p><p>Moving characters or ligatures while maintaining all their current component links would be an incredibly complex action, and is not currently possible.</p><h2 id="details-for-each-cross-project-action" tabindex="-1">Details for each cross-project action <a class="header-anchor" href="#details-for-each-cross-project-action" aria-label="Permalink to &quot;Details for each cross-project action&quot;">​</a></h2><h3 id="copy-character-or-ligature-shapes" tabindex="-1">Copy character or ligature shapes <a class="header-anchor" href="#copy-character-or-ligature-shapes" aria-label="Permalink to &quot;Copy character or ligature shapes&quot;">​</a></h3>',23),_=s('<p>This action will take a copy of each path (or paths from a resolved component link) from the source project and insert them into the same character in the destination project.</p><p>Glyph-level data will not be copied over (with the exception of the Advance Width option below), this action only deals with path-level objects.</p><p>If the character or ligature object does not exist in the destination project, a default one will be created.</p><blockquote><p>Options:</p><ul><li>Scale copied items, if the source and destination Em sizes do not match.</li><li>Update the destination item&#39;s Advance Width to maintain right-side bearing.</li><li>Reverse copied shapes&#39; windings.</li></ul></blockquote><h3 id="overwrite-characters-or-ligatures" tabindex="-1">Overwrite characters or ligatures <a class="header-anchor" href="#overwrite-characters-or-ligatures" aria-label="Permalink to &quot;Overwrite characters or ligatures&quot;">​</a></h3>',5),f=e("p",null,"This action will take the selected characters or ligatures from the source project, and add them to the destination project. If a character or ligature already exists in the destination project, it will be overwritten.",-1),b=e("p",null,"If the character or ligature object does not exist in the destination project, a default one will be created.",-1),j=e("p",null,"This action deals with glyph-level objects, so all associated metadata for the glyph object will be overwritten in the destination project.",-1),v=e("blockquote",null,[e("p",null,"Options:"),e("ul",null,[e("li",null,"Scale copied items, if the source and destination Em sizes do not match."),e("li",null,"Reverse copied shapes' windings.")])],-1),y=e("h3",{id:"add-component-roots",tabindex:"-1"},[t("Add component roots "),e("a",{class:"header-anchor",href:"#add-component-roots","aria-label":'Permalink to "Add component roots"'},"​")],-1),k=e("p",null,"This action will duplicate the selected components from the source project and add them to the destination project, ensuring they have unique IDs.",-1),T=e("p",null,"Copy and overwrite actions are available for Characters and Ligatures, but not for Components. This action is the only way to move Components from one project to another.",-1),q=e("blockquote",null,[e("p",null,"Options:"),e("ul",null,[e("li",null,"Scale copied items, if the source and destination Em sizes do not match."),e("li",null,"Reverse copied shapes' windings.")])],-1),x=e("h3",{id:"add-kern-groups",tabindex:"-1"},[t("Add kern groups "),e("a",{class:"header-anchor",href:"#add-kern-groups","aria-label":'Permalink to "Add kern groups"'},"​")],-1),P=e("p",null,[t("This action will duplicate the selected kern groups from the source project, and add them to the destination as new kern groups. If the destination project already has an identical kern group, then the value will "),e("strong",null,"not"),t(" be copied over.")],-1),C=e("blockquote",null,[e("p",null,"Options:"),e("ul",null,[e("li",null,"Scale copied items, if the source and destination Em sizes do not match.")])],-1),A=e("h3",{id:"overwrite-settings",tabindex:"-1"},[t("Overwrite settings "),e("a",{class:"header-anchor",href:"#overwrite-settings","aria-label":'Permalink to "Overwrite settings"'},"​")],-1),S=e("p",null,"This action will take the values from the selected settings in the source project, and overwrite the same setting's value in the destination project.",-1),W=e("h2",{id:"something-missing",tabindex:"-1"},[t("Something missing? "),e("a",{class:"header-anchor",href:"#something-missing","aria-label":'Permalink to "Something missing?"'},"​")],-1),I=e("p",null,"Cross-project actions are relatively easy to add. If you have a scenario that is not met by one of the actions above, please let us know your idea and there is a good chance we can add it in future versions.",-1),O=e("p",null,[e("a",{href:"mailto:mail@glyphrstudio.com",target:"_blank",rel:"noreferrer"},"mail@glyphrstudio.com")],-1);function G(E,V,B,D,N,R){const o=r("Badge");return c(),l("div",null,[w,a(o,{type:"tip"},{default:i(()=>[t("This is a copy action, so nothing will be deleted from the destination project.")]),_:1}),_,a(o,{type:"warning"},{default:i(()=>[t("This is an overwrite action, so items in the destination project will be deleted and replaced.")]),_:1}),f,b,j,v,y,a(o,{type:"tip"},{default:i(()=>[t("This is an add action, so new items will be created in the destination project.")]),_:1}),k,T,q,x,a(o,{type:"tip"},{default:i(()=>[t("This is an add action, so new items will be created in the destination project.")]),_:1}),P,C,A,a(o,{type:"warning"},{default:i(()=>[t("This is an overwrite action, so items in the destination project will be deleted and replaced.")]),_:1}),S,W,I,O])}const $=n(g,[["render",G]]);export{M as __pageData,$ as default};