(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{215:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return c});var n=a(0),r=a.n(n),i=a(218),o=a(224),s=a(222);function c(t){return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"About"}),r.a.createElement("p",null,"Wow, very legal and cool..."),r.a.createElement("p",null,r.a.createElement(i.a,{to:"/"},"Back to Buffet")))}},218:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(1),o=a.n(i),s=a(40),c=a.n(s);a.d(e,"a",function(){return c.a});a(219),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},219:function(t,e,a){var n;t.exports=(n=a(220))&&n.default||n},220:function(t,e,a){"use strict";a.r(e);a(41);var n=a(0),r=a.n(n),i=a(1),o=a.n(i),s=a(68),c=a(3),l=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},221:function(t){t.exports={data:{site:{siteMetadata:{title:"Pandas"}}}}},222:function(t,e,a){"use strict";var n=a(223),r=a(0),i=a.n(r),o=a(1),s=a.n(o),c=a(225),l=a.n(c);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,s=void 0===o?[]:o,c=t.title,u=n.data.site,d=e||u.siteMetadata.description,m=[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d},{name:"keywords",content:s.join(", ")}].concat(r);return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,meta:m})}u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},u.defaultProps={lang:"en",meta:[],keywords:[],description:""},e.a=u},223:function(t){t.exports={data:{site:{siteMetadata:{title:"Pandas",description:"Pandas love eating bamboo.",author:"Ronald Macmaster <ronnymacmaster@gmail.com>"}}}}},224:function(t,e,a){"use strict";var n=a(221),r=a(0),i=a.n(r),o=a(1),s=a.n(o),c=a(218),l=a(97),u=a.n(l);function d(t){var e=t.classes;t.siteTitle;return i.a.createElement("header",{className:e.header},i.a.createElement(c.a,{to:"/",className:e.title},i.a.createElement("h3",{style:{margin:"auto"}},"Pandas")),i.a.createElement(c.a,{to:"/about"},"About"))}d.propTypes={siteTitle:s.a.string},d.defaultProps={siteTitle:""};var m=u()(function(t){return{header:{display:"flex",justifyContent:"space-between",maxWidth:t.content.width,padding:t.spacing.unit,margin:"auto"},title:{display:"inline-block",textDecoration:"none",backgroundImage:"none",textShadow:"none"}}})(d);function p(t){var e=t.classes,a=t.children,r=n.data.site,o=(new Date).getFullYear();return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:r.siteMetadata.title}),i.a.createElement("div",{className:e.root},i.a.createElement("main",null,a),i.a.createElement("footer",null,"© ",o,", Ronald Macmaster")))}p.propTypes={children:s.a.node.isRequired};e.a=u()(function(t){return{root:{maxWidth:t.content.width,padding:t.spacing.unit,margin:"auto"}}})(p)}}]);
//# sourceMappingURL=component---src-pages-about-js-7b188632403277279dfa.js.map