(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0mN4":function(e,t,n){"use strict";n("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"1Ur/":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("qKvR"),o=n("0TFn"),s=n.n(o);t.a=function(e){var t=e.children;return r.a.createElement("main",null,r.a.createElement(i.a,{styles:"\n        body,\n        html {\n          margin: 0;\n          padding: 0;\n        }\n\n        html {\n          box-sizing: border-box;\n          font-size: 62.5%;\n          background: "+s.a.colors.background+";\n        }\n\n        body {\n          margin: 0;\n          -webkit-font-smoothing: antialiased;\n          -moz-osx-font-smoothing: grayscale;\n\n          line-height: 1.6;\n          font-size: 2.1rem;\n          font-weight: 400;\n          font-family: "+s.a.fonts.sansSerif+";\n          height: 100%;\n          background: "+s.a.colors.background+";\n\n          color: "+s.a.colors.text+";\n          text-rendering: optimizeLegibility;\n        }\n\n        h1,\n        h2,\n        p,\n        i,\n        a {\n          color: "+s.a.colors.text+";\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          line-height: 1.1;\n        }\n\n        h1 {\n          font-size: 48px;\n          text-align: left;\n          margin-bottom: 8px;\n        }\n\n        h2 {\n          font-size: 26px;\n          font-weight: 700;\n          padding: 0;\n          margin: 56px 0 -13px -1.883px;\n          text-align: left;\n          line-height: 34.5px;\n          letter-spacing: -0.45px;\n        }\n\n        p,\n        i,\n        a {\n          margin-top: 21px;\n          font-size: 21px;\n          letter-spacing: -0.03px;\n          line-height: 1.58;\n        }\n\n        a {\n          text-decoration: underline;\n        }\n\n        blockquote {\n          font-size: 30px;\n          font-style: italic;\n          letter-spacing: -0.36px;\n          line-height: 44.4px;\n          overflow-wrap: break-word;\n          margin: 55px 0 33px 0;\n          color: "+s.a.colors.muted+";\n          border-left: 3px solid "+s.a.colors.text+";\n          padding-left: 20px;\n          margin-left: -23px;\n          padding-bottom: 2px;\n        }\n\n        blockquote p:last-child {\n          margin-bottom: 0;\n        }\n\n        pre,\n        code {\n          font-size: 16px;\n          background: "+s.a.colors.codeBackground+";\n          font-family: "+s.a.fonts.monospace+";\n        }\n\n        code {\n          padding: 3px 4px;\n          margin: 0 2px;\n        }\n\n        pre {\n          overflow-x: auto;\n          padding: 20px;\n        }\n\n        pre code {\n          padding: 0;\n          margin: 0;\n        }\n\n        mark {\n          background: "+s.a.colors.primary+";\n        }\n\n        ::selection {\n          background-color: "+s.a.colors.primary+";\n        }\n\n        img {\n          max-width: 100%;\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          position: relative;\n        }\n        .anchor {\n          position: absolute;\n          left: -30px;\n          opacity: 0;\n          width: 30px;\n        }\n\n        h1:hover .anchor,\n        h2:hover .anchor,\n        h3:hover .anchor,\n        h4:hover .anchor,\n        h5:hover .anchor,\n        h6:hover .anchor {\n          opacity: 1;\n        }\n\n        h1 .anchor {\n          margin-top: 21px;\n        }\n        h3 .anchor {\n          margin-top: 5px;\n        }\n        h4 .anchor {\n          margin-top: 2px;\n        }\n\n        figcaption {\n          width: 100%;\n          margin-top: 10px;\n          line-height: 1.4;\n          color: "+s.a.colors.muted+";\n          letter-spacing: 0;\n          text-align: center;\n          font-size: 14px;\n        }\n      "}),t)}},"41CG":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));n("bHtr");function a(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function r(e){return"function"!=typeof Date.prototype.toLocaleDateString?e:new Date(e).toLocaleDateString("en",{day:"numeric",month:"long",year:"numeric"})}},"9eSz":function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("EK0E"),n("INYr"),n("0mN4");var a=n("TqRt");t.__esModule=!0,t.default=void 0;var r,i=a(n("PJYZ")),o=a(n("VbXa")),s=a(n("8OQS")),d=a(n("pVnL")),l=a(n("q1tI")),c=a(n("17x9")),u=function(e){var t=(0,d.default)({},e),n=t.resolutions,a=t.sizes,r=t.critical;return n&&(t.fixed=n,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,n=e.fixed;return g(t||n).src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},h=Object.create({}),m=function(e){var t=u(e),n=p(t);return h[n]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,x=new WeakMap;function w(e){return e.map((function(e){var t=e.src,n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:i}),l.default.createElement("source",{media:r,srcSet:n,sizes:i}))}))}function S(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function E(e){return e.map((function(e){var t=e.src,n=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:n,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,n=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:n,srcSet:a})}))}function k(e,t){var n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return n&&(n.observe(e),x.set(e,t)),function(){n.unobserve(e),x.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+l+o+s+n+a+t+i+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=l.default.forwardRef((function(e,t){var n=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(O,(0,d.default)({ref:t,src:n},i,{ariaHidden:o}));return a.length>1?l.default.createElement("picture",null,r(a),s):s})),O=l.default.forwardRef((function(e,t){var n=e.sizes,a=e.srcSet,r=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:n,srcSet:a,src:r},g,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=y&&m(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!b&&v&&!n.isCritical&&!n.seenBefore;var a=n.isCritical||y&&(b||!n.useIOSupport);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=l.default.createRef(),n.placeholderRef=t.placeholderRef||l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,i.default)(n)),n.handleRef=n.handleRef.bind((0,i.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=p(t),h[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,x=e.itemProp,S=e.loading,k=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:L?1:0,transition:V?"opacity "+y+"ms":"none"},s),q="boolean"==typeof b?"lightgray":b,H={transitionDelay:y+"ms"},M=(0,d.default)((0,d.default)((0,d.default)({opacity:this.state.imgLoaded?0:1},V&&H),s),f),N={title:t,alt:this.state.isVisible?"":n,style:M,className:p,itemProp:x};if(h){var T=h,j=g(h);return l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),q&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&H)}),j.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:N,imageVariants:T,generateSources:I}),j.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:N,imageVariants:T,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(T),l.default.createElement(O,{alt:n,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:S,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)((0,d.default)({alt:n,title:t,loading:S},j),{},{imageVariants:T}))}}))}if(m){var G=m,P=g(m),W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete W.display,l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},q&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:q,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},V&&H)}),P.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:N,imageVariants:G,generateSources:I}),P.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:N,imageVariants:G,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(G),l.default.createElement(O,{alt:n,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:S,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)((0,d.default)({alt:n,title:t,loading:S},P),{},{imageVariants:G}))}}))}return null},t}(l.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),q=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});V.propTypes={resolutions:C,sizes:q,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([q,c.default.arrayOf(q)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var H=V;t.default=H},DHGC:function(e,t,n){"use strict";n("0mN4");var a=n("zhBo"),r=n("q1tI"),i=n.n(r),o=n("TJpk"),s=n.n(o);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,d=e.title,l=e.canonicalLink,c=e.image,u=a.data,f=u.site,p=u.avatar,g=function(e){return e?""+f.siteMetadata.siteUrl+e:f.siteUrl},h=t||f.siteMetadata.description,m=d||f.siteMetadata.title,b=c||p.childImageSharp.fixed.src;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:m,meta:[{charset:"utf-8"},{"http-equiv":"X-UA-Compatible",content:"IE=edge"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"theme-color",content:"#fff"},{itemprop:"name",content:m},{name:"description",content:h},{itemprop:"image",content:g(b)},{property:"og:title",content:d||f.siteMetadata.title},{property:"og:description",content:h},{property:"og:image",content:g(b)},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:f.siteMetadata.social.twitter},{name:"twitter:site",content:f.siteMetadata.social.twitter},{name:"twitter:title",content:d},{name:"twitter:description",content:h},{name:"twitter:image",content:g(b)}].concat(o&&o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r),link:[].concat(l?{rel:"canonical",href:l}:[])})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},t.a=d},Nr18:function(e,t,n){"use strict";var a=n("S/j/"),r=n("d/Gc"),i=n("ne8i");e.exports=function(e){for(var t=a(this),n=i(t.length),o=arguments.length,s=r(o>1?arguments[1]:void 0,n),d=o>2?arguments[2]:void 0,l=void 0===d?n:r(d,n);l>s;)t[s++]=e;return t}},bHtr:function(e,t,n){var a=n("XKFU");a(a.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},nIY7:function(e,t,n){"use strict";n("OGtf")("big",(function(e){return function(){return e(this,"big","","")}}))},nOnG:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("5D9J");var o=n("0TFn"),s=n.n(o);function d(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  font-size: 1.5rem;\n  display: inline-flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  margin: 0.2rem;\n  margin-right: 10px;\n  border-radius: 1.25rem;\n  background-color: ",";\n  color: ",";\n\n  $:not(:first-child) {\n    margin-left: 0;\n  }\n"]);return d=function(){return e},e}var l=i.a.span(d(),(function(e){return s.a.colors.categories[e.category]?s.a.colors.categories[e.category].background:s.a.colors.primary}),(function(e){return s.a.colors.categories[e.category]?s.a.colors.categories[e.category].text:s.a.colors.muted}));t.a=function(e){var t=e.items;return r.a.createElement("div",null,(t||[]).map((function(e){return r.a.createElement(l,{key:e,category:e},(n=(t=e)[0],a=t.slice(1),""+n.toUpperCase()+a));var t,n,a})))}},qEkR:function(e,t,n){"use strict";n("f3/d"),n("nIY7");var a=n("q1tI"),r=n.n(a),i=n("5D9J");function o(){var e=d(["\n  max-width: ",";\n  margin: 0 auto;\n  width: 80%;\n"]);return o=function(){return e},e}function s(){var e=d(["\n  ","\n"]);return s=function(){return e},e}function d(e,t){return t||(t=e.slice(0)),e.raw=t,e}var l=i.a.section(s(),(function(e){return e.centered?"display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;":""})),c=i.a.div(o(),(function(e){return e.big?"960px":"700px"}));t.a=function(e){var t=e.name,n=e.centered,a=e.children,i=e.big;return r.a.createElement(l,{id:t,centered:n},r.a.createElement(c,{big:i},a))}},zhBo:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"src":"/static/77b699ee4748cd19e9d9c97057b6dbfb/48094/avatar.png"}}},"site":{"siteMetadata":{"siteUrl":"https://lehasvv2009.netlify.app","title":"Alex Soroka","description":"Alex Soroka\'s blog","author":"Alex Soroka","social":{"twitter":""}}}}}')}}]);
//# sourceMappingURL=e55b1624863f201557be7973b640ebc2d41868d9-cf9bb96bd1d6c958c6af.js.map