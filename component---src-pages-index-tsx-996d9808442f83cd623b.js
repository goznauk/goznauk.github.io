(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{IgkI:function(e,t,a){"use strict";a("LnO1"),a("3eMz"),a("dtAy"),a("DB+v");var n=a("ERkP"),i=a("j/s1"),c=a("GkOb"),r=i.c.ul.withConfig({displayName:"SocialProfilestyle__SocialProfileWrapper",componentId:"ez1c1e-0"})(["\n  display: inline-flex;\n"]),s=i.c.div.withConfig({displayName:"SocialProfilestyle__Tooltip",componentId:"ez1c1e-1"})(["\n  position: absolute;\n  background-color: #fff;\n  pointer-events: none;\n  padding: 0.4rem 0.8rem;\n  border-radius: 3px;\n  color: #333;\n  font-size: 13px;\n  bottom: 90%;\n  left: 50%;\n  opacity: 0;\n  white-space: nowrap;\n  visibility: hidden;\n  z-index: 999;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\n  transform: translate3d(-50%, 0, 0);\n  transition: 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);\n\n  &:after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-top: 6px solid #fff;\n    border-right: 6px solid transparent;\n    border-left: 6px solid transparent;\n    bottom: -6px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"]),o=i.c.li.withConfig({displayName:"SocialProfilestyle__SocialProfileItem",componentId:"ez1c1e-2"})(["\n  list-style: none;\n  position: relative;\n  margin-right: 20px;\n  &:last-child {\n    margin-right: 0;\n  }\n  &:hover {\n    "," {\n      opacity: 1;\n      visibility: visible;\n      bottom: calc(100% + 5px);\n    }\n  }\n\n  a {\n    color: ",";\n    font-size: 22px;\n    padding: 0.2em;\n    display: block;\n    svg {\n      display: block;\n    }\n  }\n"],s,Object(c.themeGet)("colors.textColor","#292929"));t.a=function(e){var t=e.items,a=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["items"]);return n.createElement(r,a,t.map((function(e,t){return n.createElement(o,{key:t},n.createElement("a",{href:e.url,"aria-label":"social profile"},e.icon||"icon"),n.createElement(s,null,e.tooltip||"Social Link"))})))}},QXrq:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'210\'%20height=\'210\'%3e%3cpath%20d=\'M0%20105v105h211V0H0v105m65-7c-4%201-5%2012-2%2015%205%205%2010%201%2010-7%200-7-3-10-8-8m12%201c-4%204-2%2016%204%2016%204%200%206-3%206-9%200-8-6-11-10-7m54%200c-3%203-3%2012%200%2014%204%204%209%202%2010-4%201-9-5-15-10-10m14%200c-5%205-2%2016%204%2016%204%200%206-4%206-10-1-8-6-10-10-6m-81%201c-2%204-2%2012%202%2013%204%202%207-5%205-11-2-3-5-4-7-2m14%200c-2%203-1%2011%201%2013%204%203%209-5%206-11-2-3-5-4-7-2m54%200c-4%206%200%2016%205%2012%203-1%203-9%201-12h-6m14%200c-4%206%200%2016%205%2013%202-1%203-7%202-11-2-3-5-4-7-2\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1,"src":"/static/095ae8304f4d1c3aa6024cb2384ff866/39198/author.jpg","srcSet":"/static/095ae8304f4d1c3aa6024cb2384ff866/2a692/author.jpg 53w,\\n/static/095ae8304f4d1c3aa6024cb2384ff866/5ada2/author.jpg 105w,\\n/static/095ae8304f4d1c3aa6024cb2384ff866/39198/author.jpg 210w,\\n/static/095ae8304f4d1c3aa6024cb2384ff866/cb315/author.jpg 300w","srcWebp":"/static/095ae8304f4d1c3aa6024cb2384ff866/3d7a8/author.webp","srcSetWebp":"/static/095ae8304f4d1c3aa6024cb2384ff866/82663/author.webp 53w,\\n/static/095ae8304f4d1c3aa6024cb2384ff866/b28bd/author.webp 105w,\\n/static/095ae8304f4d1c3aa6024cb2384ff866/3d7a8/author.webp 210w,\\n/static/095ae8304f4d1c3aa6024cb2384ff866/e22a1/author.webp 300w","sizes":"(max-width: 210px) 100vw, 210px"}}},"site":{"siteMetadata":{"author":"H.John Choi","about":":)"}}}}')},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("ERkP"),i=a.n(n),c=a("9Dj+"),r=(a("PN9k"),a("j/s1")),s=r.c.div.withConfig({displayName:"style__PersonalBlogWrapper",componentId:"tz8z1e-0"})([""]),o=a("QXrq"),d=a("6c1n"),l=a.n(d),p=a("IgkI"),m=a("GkOb"),f=r.c.div.withConfig({displayName:"style__IntroWrapper",componentId:"sc-1v5pybk-0"})(["\n  width: 610px;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 150px 10px 0 10px;\n  text-align: center;\n  @media (max-width: 1400px) {\n    padding: 120px 10px 0 10px;\n  }\n  @media (max-width: 1200px) {\n    padding: 100px 10px 0 10px;\n  }\n  @media (max-width: 990px) {\n    padding: 70px 10px 0 10px;\n  }\n  @media (max-width: 575px) {\n    padding: 50px 25px 0 25px;\n  }\n"]),g=r.c.div.withConfig({displayName:"style__IntroImage",componentId:"sc-1v5pybk-1"})(["\n  width: 270px;\n  height: 270px;\n  padding: 30px;\n  border-radius: 50%;\n  margin: 0 auto;\n  border: 1px solid ",";\n  margin-bottom: 30px;\n  @media (max-width: 990px) {\n    width: 220px;\n    height: 220px;\n    padding: 25px;\n    margin-bottom: 25px;\n  }\n  @media (max-width: 990px) {\n    width: 180px;\n    height: 180px;\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n    border-radius: 50%;\n  }\n"],Object(m.themeGet)("colors.lightBorderColor","#ededed")),h=r.c.h1.withConfig({displayName:"style__IntroTitle",componentId:"sc-1v5pybk-2"})(["\n  font-size: 30px;\n  font-weight: 400;\n  font-family: ",";\n  color: ",";\n  text-align: center;\n  margin-bottom: 20px;\n  @media (max-width: 990px) {\n    font-size: 26px;\n    margin-bottom: 15px;\n  }\n  @media (max-width: 575px) {\n    font-size: 22px;\n  }\n"],Object(m.themeGet)("fontFamily.1","'Poppins', sans-serif"),Object(m.themeGet)("colors.textColor","#292929")),w=r.c.p.withConfig({displayName:"style__Desciption",componentId:"sc-1v5pybk-3"})(["\n  color: ",";\n  font-size: ","px;\n  line-height: ",";\n  text-align: center;\n"],Object(m.themeGet)("colors.textColor","#292929"),Object(m.themeGet)("fontSizes.3","15"),Object(m.themeGet)("lineHeights.text","2")),u=a("kGh7"),b=[{icon:i.a.createElement(u.e,null),url:"#",tooltip:"Facebook"},{icon:i.a.createElement(u.g,null),url:"#",tooltip:"Instagram"},{icon:i.a.createElement(u.k,null),url:"#",tooltip:"Twitter"},{icon:i.a.createElement(u.f,null),url:"#",tooltip:"Github"}],v=function(e){var t=o.data,a=t.site.siteMetadata,n=a.author,c=a.about,r=t.avatar.childImageSharp.fluid;return i.a.createElement(f,null,i.a.createElement(g,null,i.a.createElement(l.a,{fluid:r,alt:"author"})),i.a.createElement(h,null,"Hey! I’m ",i.a.createElement("b",null,n)),i.a.createElement(w,null,c),i.a.createElement(p.a,{items:b}))},x=a("uHhS"),y=a("t3iN"),k=a("mj59"),j=r.c.div.withConfig({displayName:"style__BlogPostsWrapper",componentId:"fuqvic-0"})(["\n  margin: 0 auto;\n  padding-top: 120px;\n  position: relative;\n  .post_card {\n    margin-bottom: 120px;\n    @media (max-width: 990px) {\n      margin-bottom: 90px;\n    }\n    @media (max-width: 575px) {\n      margin-bottom: 60px;\n    }\n  }\n  @media (min-width: 990px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  }\n  @media (min-width: 1400px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    padding: 80px 45px 0 45px;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 25px 0 25px;\n  }\n"]),S=function(e){var t=x.data,a=t.allMarkdownRemark.edges,i=t.allSitePage.nodes[0].context.numPages,c=t.allSitePage.nodes[0].context.currentPage;return n.createElement(j,null,a.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.createElement(y.a,{key:t.fields.slug,title:a,image:null==t.frontmatter.cover?null:t.frontmatter.cover.childImageSharp.fluid,url:t.fields.slug,description:t.frontmatter.description||t.excerpt,date:t.frontmatter.date,tags:t.frontmatter.tags})})),i>>1?n.createElement(k.a,{nextLink:"/page/2",currentPage:c,totalPage:i}):"")},E=function(e){var t=Object.assign({},e);return n.createElement(s,t,n.createElement(v,null),n.createElement(S,null))},I=a("H8eV");a.d(t,"pageQuery",(function(){return P}));t.default=function(e){var t=e.data;return i.a.createElement(c.a,null,i.a.createElement(I.a,{title:"Personal Blog",description:t.site.siteMetadata.description}),i.a.createElement(E,null))};var P="3998338720"},mj59:function(e,t,a){"use strict";a("LnO1"),a("3eMz"),a("dtAy"),a("DB+v"),a("PN9k");var n=a("ERkP"),i=a("Wbzz"),c=a("kGh7"),r=a("j/s1"),s=a("GkOb"),o=r.c.div.withConfig({displayName:"paginationstyle__PaginationWrapper",componentId:"sc-1syjwz5-0"})(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]),d=r.c.div.withConfig({displayName:"paginationstyle__PrevPage",componentId:"sc-1syjwz5-1"})(["\n  min-width: 32px;\n  a {\n    width: 32px;\n    height: 32px;\n    color: ",";\n    border-radius: 50%;\n    background-color: #f3f3f3;\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: 0.15s ease-in-out;\n    svg {\n      display: block;\n    }\n    &:hover {\n      color: #fff;\n      background-color: ",";\n    }\n  }\n"],Object(s.themeGet)("colors.textColor","#292929"),Object(s.themeGet)("colors.primary","#D10068")),l=r.c.div.withConfig({displayName:"paginationstyle__NextPage",componentId:"sc-1syjwz5-2"})(["\n  min-width: 32px;\n  a {\n    width: 32px;\n    height: 32px;\n    color: ",";\n    border-radius: 50%;\n    background-color: #f3f3f3;\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: 0.15s ease-in-out;\n    svg {\n      display: block;\n    }\n    &:hover {\n      color: #fff;\n      background-color: ",";\n    }\n  }\n"],Object(s.themeGet)("colors.textColor","#292929"),Object(s.themeGet)("colors.primary","#D10068")),p=r.c.div.withConfig({displayName:"paginationstyle__PageNumber",componentId:"sc-1syjwz5-3"})([""]);t.a=function(e){var t=e.prevLink,a=e.nextLink,r=e.currentPage,s=e.totalPage,m=e.className,f=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["prevLink","nextLink","currentPage","totalPage","className"]);return n.createElement(o,Object.assign({},f,{className:m}),n.createElement(d,null,t&&n.createElement(i.Link,{to:""+t,"aria-label":"Prev"},n.createElement(c.l,null))),n.createElement(p,null,"Page "+r+" Of "+s),n.createElement(l,null,a&&n.createElement(i.Link,{to:""+a,"aria-label":"Next"},n.createElement(c.m,null))))}},uHhS:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Goznauk Dev Blog"}},"allSitePage":{"nodes":[{"context":{"numPages":2,"currentPage":1}}]},"allMarkdownRemark":{"totalCount":6,"edges":[{"node":{"excerpt":"Documentation stored with source files shares the same permissions.\\nDocumentation stored in a separate Git repository can use different\\naccess controls. If Gerrit Code Review is being used, branch level\\nread permissions can be used to grant or restrict access to any\\ndocumentation branches. READMEs…","fields":{"slug":"/markdown-test/"},"frontmatter":{"date":"22 <span> Apr </span>","title":"This is markdown unity test!","description":null,"tags":["markdown","test","unity"],"cover":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'1170\'%20height=\'690\'%3e%3cpath%20d=\'M0%20345v345h1171V0H0v345m488-42c-15%203-23%2018-23%2044%200%2030%209%2044%2030%2045%2010%200%2017-3%2023-10%206-8%207-13%207-33%201-24-1-31-10-39-6-6-17-9-27-7m212%200c-18%204-27%2020-27%2049%200%2027%209%2039%2029%2040s31-10%2031-31c0-10-2-15-9-21-11-10-29-9-40%201-6%205-6%205-4-6%202-12%208-21%2017-25%204-2%2018-3%2024-1%204%202%205%202%205-2%200-3-16-6-26-4m65%201c-21%205-27%2037-10%2051%2010%209%2029%208%2039-1l5-4v3c0%206-2%2014-5%2020-6%2013-19%2017-39%2012-3-1-3-1-3%202%201%208%2030%207%2040-2%2013-12%2018-48%209-67-6-13-21-19-36-14m79-2l-6%202c-14%204-21%2021-20%2049s12%2040%2033%2039c19-1%2027-14%2028-41s-5-40-18-46c-4-2-15-3-17-3m-572%207a336%20336%200%2000-13%2011c-4%203-5%205-5%207%200%204%201%204%205%200l14-11%207-5v80h6v-87l-3-1-11%206m72%200a336%20336%200%2000-13%2011c-4%203-5%205-5%207%200%204%201%204%205%200l14-11%207-5v80h6v-87l-3-1-11%206m51-4c-1%204%200%204%2025%204h24l-3%205c-10%2017-20%2040-28%2063l-5%2014h3c3%200%204%200%205-3a472%20472%200%200129-69c6-12%207-14%204-15-3-2-53-1-54%201m375%203c-12%202-18%2010-18%2024%200%2015%208%2024%2022%2024%2015%200%2024-9%2024-23%201-17-11-27-28-25m75%200c-14%202-20%2012-21%2036-1%2028%207%2043%2025%2043%2016%200%2024-13%2024-40%200-29-10-42-28-39m-360%202c-9%205-13%2015-14%2032-1%2025%205%2039%2017%2044%2011%203%2022-1%2027-12l3-5c2-3%202-31%201-37-1-9-6-17-11-21s-17-4-23-1m86%2019c-1%201%200%203%2012%2014l12%2013-5%205-12%2013c-8%208-8%208-6%2010%201%202%202%202%2014-10l14-13%2013%2013c12%2011%2013%2012%2014%2011%203-3%203-2-10-16-10-10-13-13-12-14l12-13c12-11%2013-12%2010-14-2-1-4%201-15%2011l-13%2013-12-12c-13-14-14-14-16-11m127%2010c-7%202-15%208-17%2014-2%204-1%2014%201%2019%204%209%209%2014%2019%2015%2016%201%2026-8%2026-25s-13-27-29-23\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1.69364161849711,"src":"/static/756dd00204b0e473f73c523440dea61f/30f7e/preview-1.jpg","srcSet":"/static/756dd00204b0e473f73c523440dea61f/09d57/preview-1.jpg 293w,\\n/static/756dd00204b0e473f73c523440dea61f/43a0e/preview-1.jpg 585w,\\n/static/756dd00204b0e473f73c523440dea61f/30f7e/preview-1.jpg 1170w","srcWebp":"/static/756dd00204b0e473f73c523440dea61f/38f9a/preview-1.webp","srcSetWebp":"/static/756dd00204b0e473f73c523440dea61f/791ea/preview-1.webp 293w,\\n/static/756dd00204b0e473f73c523440dea61f/fcb78/preview-1.webp 585w,\\n/static/756dd00204b0e473f73c523440dea61f/38f9a/preview-1.webp 1170w","sizes":"(max-width: 1170px) 100vw, 1170px"}}}}}},{"node":{"excerpt":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra sapien nibh, sed tempor mauris suscipit ac. Duis libero nibh, porttitor at posuere at, luctus et urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce et augue vitae nisl…","fields":{"slug":"/Installing-Multiple-Versions/"},"frontmatter":{"date":"16 <span> Apr </span>","title":"Installing Multiple Versions of Node.js Using NVM","description":null,"tags":["javaScript","tips","node"],"cover":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'1170\'%20height=\'690\'%3e%3cpath%20d=\'M0%20345v345h1171V0H0v345m488-42c-15%203-23%2018-23%2044%200%2030%209%2044%2030%2045%2010%200%2017-3%2023-10%206-8%207-13%207-33%201-24-1-31-10-39-6-6-17-9-27-7m212%200c-18%204-27%2020-27%2049%200%2027%209%2039%2029%2040s31-10%2031-31c0-10-2-15-9-21-11-10-29-9-40%201-6%205-6%205-4-6%202-12%208-21%2017-25%204-2%2018-3%2024-1%204%202%205%202%205-2%200-3-16-6-26-4m65%201c-21%205-27%2037-10%2051%2010%209%2029%208%2039-1l5-4v3c0%206-2%2014-5%2020-6%2013-19%2017-39%2012-3-1-3-1-3%202%201%208%2030%207%2040-2%2013-12%2018-48%209-67-6-13-21-19-36-14m79-2l-6%202c-14%204-21%2021-20%2049s12%2040%2033%2039c19-1%2027-14%2028-41s-5-40-18-46c-4-2-15-3-17-3m-572%207a336%20336%200%2000-13%2011c-4%203-5%205-5%207%200%204%201%204%205%200l14-11%207-5v80h6v-87l-3-1-11%206m72%200a336%20336%200%2000-13%2011c-4%203-5%205-5%207%200%204%201%204%205%200l14-11%207-5v80h6v-87l-3-1-11%206m51-4c-1%204%200%204%2025%204h24l-3%205c-10%2017-20%2040-28%2063l-5%2014h3c3%200%204%200%205-3a472%20472%200%200129-69c6-12%207-14%204-15-3-2-53-1-54%201m375%203c-12%202-18%2010-18%2024%200%2015%208%2024%2022%2024%2015%200%2024-9%2024-23%201-17-11-27-28-25m75%200c-14%202-20%2012-21%2036-1%2028%207%2043%2025%2043%2016%200%2024-13%2024-40%200-29-10-42-28-39m-360%202c-9%205-13%2015-14%2032-1%2025%205%2039%2017%2044%2011%203%2022-1%2027-12l3-5c2-3%202-31%201-37-1-9-6-17-11-21s-17-4-23-1m86%2019c-1%201%200%203%2012%2014l12%2013-5%205-12%2013c-8%208-8%208-6%2010%201%202%202%202%2014-10l14-13%2013%2013c12%2011%2013%2012%2014%2011%203-3%203-2-10-16-10-10-13-13-12-14l12-13c12-11%2013-12%2010-14-2-1-4%201-15%2011l-13%2013-12-12c-13-14-14-14-16-11m127%2010c-7%202-15%208-17%2014-2%204-1%2014%201%2019%204%209%209%2014%2019%2015%2016%201%2026-8%2026-25s-13-27-29-23\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1.69364161849711,"src":"/static/756dd00204b0e473f73c523440dea61f/30f7e/preview.jpg","srcSet":"/static/756dd00204b0e473f73c523440dea61f/09d57/preview.jpg 293w,\\n/static/756dd00204b0e473f73c523440dea61f/43a0e/preview.jpg 585w,\\n/static/756dd00204b0e473f73c523440dea61f/30f7e/preview.jpg 1170w","srcWebp":"/static/756dd00204b0e473f73c523440dea61f/38f9a/preview.webp","srcSetWebp":"/static/756dd00204b0e473f73c523440dea61f/791ea/preview.webp 293w,\\n/static/756dd00204b0e473f73c523440dea61f/fcb78/preview.webp 585w,\\n/static/756dd00204b0e473f73c523440dea61f/38f9a/preview.webp 1170w","sizes":"(max-width: 1170px) 100vw, 1170px"}}}}}},{"node":{"excerpt":"Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage’s HTML, to be run client-side by a JavaScript…","fields":{"slug":"can-i-use-hooks-today"},"frontmatter":{"date":"20 <span> Mar </span>","title":"Can I Use Hooks Today?","description":"Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage’s HTML, to be run client-side by a JavaScript engine in the user’s web browser.","tags":["javascript","hooks","test"],"cover":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'1170\'%20height=\'690\'%3e%3cpath%20d=\'M0%20345v345h1171V0H0v345m488-42c-15%203-23%2018-23%2044%200%2030%209%2044%2030%2045%2010%200%2017-3%2023-10%206-8%207-13%207-33%201-24-1-31-10-39-6-6-17-9-27-7m212%200c-18%204-27%2020-27%2049%200%2027%209%2039%2029%2040s31-10%2031-31c0-10-2-15-9-21-11-10-29-9-40%201-6%205-6%205-4-6%202-12%208-21%2017-25%204-2%2018-3%2024-1%204%202%205%202%205-2%200-3-16-6-26-4m65%201c-21%205-27%2037-10%2051%2010%209%2029%208%2039-1l5-4v3c0%206-2%2014-5%2020-6%2013-19%2017-39%2012-3-1-3-1-3%202%201%208%2030%207%2040-2%2013-12%2018-48%209-67-6-13-21-19-36-14m79-2l-6%202c-14%204-21%2021-20%2049s12%2040%2033%2039c19-1%2027-14%2028-41s-5-40-18-46c-4-2-15-3-17-3m-572%207a336%20336%200%2000-13%2011c-4%203-5%205-5%207%200%204%201%204%205%200l14-11%207-5v80h6v-87l-3-1-11%206m72%200a336%20336%200%2000-13%2011c-4%203-5%205-5%207%200%204%201%204%205%200l14-11%207-5v80h6v-87l-3-1-11%206m51-4c-1%204%200%204%2025%204h24l-3%205c-10%2017-20%2040-28%2063l-5%2014h3c3%200%204%200%205-3a472%20472%200%200129-69c6-12%207-14%204-15-3-2-53-1-54%201m375%203c-12%202-18%2010-18%2024%200%2015%208%2024%2022%2024%2015%200%2024-9%2024-23%201-17-11-27-28-25m75%200c-14%202-20%2012-21%2036-1%2028%207%2043%2025%2043%2016%200%2024-13%2024-40%200-29-10-42-28-39m-360%202c-9%205-13%2015-14%2032-1%2025%205%2039%2017%2044%2011%203%2022-1%2027-12l3-5c2-3%202-31%201-37-1-9-6-17-11-21s-17-4-23-1m86%2019c-1%201%200%203%2012%2014l12%2013-5%205-12%2013c-8%208-8%208-6%2010%201%202%202%202%2014-10l14-13%2013%2013c12%2011%2013%2012%2014%2011%203-3%203-2-10-16-10-10-13-13-12-14l12-13c12-11%2013-12%2010-14-2-1-4%201-15%2011l-13%2013-12-12c-13-14-14-14-16-11m127%2010c-7%202-15%208-17%2014-2%204-1%2014%201%2019%204%209%209%2014%2019%2015%2016%201%2026-8%2026-25s-13-27-29-23\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1.69364161849711,"src":"/static/756dd00204b0e473f73c523440dea61f/30f7e/preview.jpg","srcSet":"/static/756dd00204b0e473f73c523440dea61f/09d57/preview.jpg 293w,\\n/static/756dd00204b0e473f73c523440dea61f/43a0e/preview.jpg 585w,\\n/static/756dd00204b0e473f73c523440dea61f/30f7e/preview.jpg 1170w","srcWebp":"/static/756dd00204b0e473f73c523440dea61f/38f9a/preview.webp","srcSetWebp":"/static/756dd00204b0e473f73c523440dea61f/791ea/preview.webp 293w,\\n/static/756dd00204b0e473f73c523440dea61f/fcb78/preview.webp 585w,\\n/static/756dd00204b0e473f73c523440dea61f/38f9a/preview.webp 1170w","sizes":"(max-width: 1170px) 100vw, 1170px"}}}}}},{"node":{"excerpt":"Given the discourse around this issue, it can be easy to either overestimate the scope of this problem, or discount solving it as irrelevant to the libraries’ mission. Recent studies have shown that the scale and impact of fake news is less significant than much of the initial reporting would…","fields":{"slug":"/an-example-can-be/"},"frontmatter":{"date":"06 <span> Mar </span>","title":"An example can be illustrative","description":null,"tags":["markdown","test","tips"],"cover":{"childImageSharp":{"fluid":{"tracedSVG":"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20width=\'1170\'%20height=\'690\'%3e%3cpath%20d=\'M0%20345v345h1171V0H0v345m488-42c-15%203-23%2018-23%2044%200%2030%209%2044%2030%2045%2010%200%2017-3%2023-10%206-8%207-13%207-33%201-24-1-31-10-39-6-6-17-9-27-7m212%200c-18%204-27%2020-27%2049%200%2027%209%2039%2029%2040s31-10%2031-31c0-10-2-15-9-21-11-10-29-9-40%201-6%205-6%205-4-6%202-12%208-21%2017-25%204-2%2018-3%2024-1%204%202%205%202%205-2%200-3-16-6-26-4m65%201c-21%205-27%2037-10%2051%2010%209%2029%208%2039-1l5-4v3c0%206-2%2014-5%2020-6%2013-19%2017-39%2012-3-1-3-1-3%202%201%208%2030%207%2040-2%2013-12%2018-48%209-67-6-13-21-19-36-14m79-2l-6%202c-14%204-21%2021-20%2049s12%2040%2033%2039c19-1%2027-14%2028-41s-5-40-18-46c-4-2-15-3-17-3m-572%207a336%20336%200%2000-13%2011c-4%203-5%205-5%207%200%204%201%204%205%200l14-11%207-5v80h6v-87l-3-1-11%206m72%200a336%20336%200%2000-13%2011c-4%203-5%205-5%207%200%204%201%204%205%200l14-11%207-5v80h6v-87l-3-1-11%206m51-4c-1%204%200%204%2025%204h24l-3%205c-10%2017-20%2040-28%2063l-5%2014h3c3%200%204%200%205-3a472%20472%200%200129-69c6-12%207-14%204-15-3-2-53-1-54%201m375%203c-12%202-18%2010-18%2024%200%2015%208%2024%2022%2024%2015%200%2024-9%2024-23%201-17-11-27-28-25m75%200c-14%202-20%2012-21%2036-1%2028%207%2043%2025%2043%2016%200%2024-13%2024-40%200-29-10-42-28-39m-360%202c-9%205-13%2015-14%2032-1%2025%205%2039%2017%2044%2011%203%2022-1%2027-12l3-5c2-3%202-31%201-37-1-9-6-17-11-21s-17-4-23-1m86%2019c-1%201%200%203%2012%2014l12%2013-5%205-12%2013c-8%208-8%208-6%2010%201%202%202%202%2014-10l14-13%2013%2013c12%2011%2013%2012%2014%2011%203-3%203-2-10-16-10-10-13-13-12-14l12-13c12-11%2013-12%2010-14-2-1-4%201-15%2011l-13%2013-12-12c-13-14-14-14-16-11m127%2010c-7%202-15%208-17%2014-2%204-1%2014%201%2019%204%209%209%2014%2019%2015%2016%201%2026-8%2026-25s-13-27-29-23\'%20fill=\'%23d3d3d3\'%20fill-rule=\'evenodd\'/%3e%3c/svg%3e","aspectRatio":1.69364161849711,"src":"/static/756dd00204b0e473f73c523440dea61f/30f7e/preview.jpg","srcSet":"/static/756dd00204b0e473f73c523440dea61f/09d57/preview.jpg 293w,\\n/static/756dd00204b0e473f73c523440dea61f/43a0e/preview.jpg 585w,\\n/static/756dd00204b0e473f73c523440dea61f/30f7e/preview.jpg 1170w","srcWebp":"/static/756dd00204b0e473f73c523440dea61f/38f9a/preview.webp","srcSetWebp":"/static/756dd00204b0e473f73c523440dea61f/791ea/preview.webp 293w,\\n/static/756dd00204b0e473f73c523440dea61f/fcb78/preview.webp 585w,\\n/static/756dd00204b0e473f73c523440dea61f/38f9a/preview.webp 1170w","sizes":"(max-width: 1170px) 100vw, 1170px"}}}}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-996d9808442f83cd623b.js.map