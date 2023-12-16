import{_ as n,D as r,o as c,c as l,I as a,w as i,R as s,k as e,a as t}from"./chunks/framework.pKk-Oq-P.js";const h="/v2/help/assets/multi-projects_open.JWQoPcBG.png",p="/v2/help/assets/multi-projects_load.ZEeW9wSo.png",d="/v2/help/assets/multi-projects_action.mAI-wjmc.png",u="/v2/help/assets/multi-projects_menu.khX6zcl_.png",m="/v2/help/assets/multi-projects_welcome.E51OYbCa.png",M=JSON.parse('{"title":"Working with multiple projects","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started/working-with-multiple-projects.md","filePath":"getting-started/working-with-multiple-projects.md","lastUpdated":1702673998000}'),g={name:"getting-started/working-with-multiple-projects.md"},w=s("",23),_=s("",5),f=e("p",null,"This action will take the selected characters or ligatures from the source project, and add them to the destination project. If a character or ligature already exists in the destination project, it will be overwritten.",-1),b=e("p",null,"If the character or ligature object does not exist in the destination project, a default one will be created.",-1),j=e("p",null,"This action deals with glyph-level objects, so all associated metadata for the glyph object will be overwritten in the destination project.",-1),v=e("blockquote",null,[e("p",null,"Options:"),e("ul",null,[e("li",null,"Scale copied items, if the source and destination Em sizes do not match."),e("li",null,"Reverse copied shapes' windings.")])],-1),y=e("h3",{id:"add-component-roots",tabindex:"-1"},[t("Add component roots "),e("a",{class:"header-anchor",href:"#add-component-roots","aria-label":'Permalink to "Add component roots"'},"​")],-1),k=e("p",null,"This action will duplicate the selected components from the source project and add them to the destination project, ensuring they have unique IDs.",-1),T=e("p",null,"Copy and overwrite actions are available for Characters and Ligatures, but not for Components. This action is the only way to move Components from one project to another.",-1),q=e("blockquote",null,[e("p",null,"Options:"),e("ul",null,[e("li",null,"Scale copied items, if the source and destination Em sizes do not match."),e("li",null,"Reverse copied shapes' windings.")])],-1),x=e("h3",{id:"add-kern-groups",tabindex:"-1"},[t("Add kern groups "),e("a",{class:"header-anchor",href:"#add-kern-groups","aria-label":'Permalink to "Add kern groups"'},"​")],-1),P=e("p",null,[t("This action will duplicate the selected kern groups from the source project, and add them to the destination as new kern groups. If the destination project already has an identical kern group, then the value will "),e("strong",null,"not"),t(" be copied over.")],-1),C=e("blockquote",null,[e("p",null,"Options:"),e("ul",null,[e("li",null,"Scale copied items, if the source and destination Em sizes do not match.")])],-1),A=e("h3",{id:"overwrite-settings",tabindex:"-1"},[t("Overwrite settings "),e("a",{class:"header-anchor",href:"#overwrite-settings","aria-label":'Permalink to "Overwrite settings"'},"​")],-1),S=e("p",null,"This action will take the values from the selected settings in the source project, and overwrite the same setting's value in the destination project.",-1),W=e("h2",{id:"something-missing",tabindex:"-1"},[t("Something missing? "),e("a",{class:"header-anchor",href:"#something-missing","aria-label":'Permalink to "Something missing?"'},"​")],-1),I=e("p",null,"Cross-project actions are relatively easy to add. If you have a scenario that is not met by one of the actions above, please let us know your idea and there is a good chance we can add it in future versions.",-1),O=e("p",null,[e("a",{href:"mailto:mail@glyphrstudio.com",target:"_blank",rel:"noreferrer"},"mail@glyphrstudio.com")],-1);function G(E,V,B,D,N,R){const o=r("Badge");return c(),l("div",null,[w,a(o,{type:"tip"},{default:i(()=>[t("This is a copy action, so nothing will be deleted from the destination project.")]),_:1}),_,a(o,{type:"warning"},{default:i(()=>[t("This is an overwrite action, so items in the destination project will be deleted and replaced.")]),_:1}),f,b,j,v,y,a(o,{type:"tip"},{default:i(()=>[t("This is an add action, so new items will be created in the destination project.")]),_:1}),k,T,q,x,a(o,{type:"tip"},{default:i(()=>[t("This is an add action, so new items will be created in the destination project.")]),_:1}),P,C,A,a(o,{type:"warning"},{default:i(()=>[t("This is an overwrite action, so items in the destination project will be deleted and replaced.")]),_:1}),S,W,I,O])}const $=n(g,[["render",G]]);export{M as __pageData,$ as default};
