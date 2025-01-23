var T0=Object.defineProperty;var D0=(r,n,t)=>n in r?T0(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t;var Se=(r,n,t)=>D0(r,typeof n!="symbol"?n+"":n,t);import{s as be,q as on,l as De,d as J,I as Rc,t as Ra,j as Ba,o as Pa,n as nn,a2 as yi,E as nt,v as Cf,e as xe,f as Oe,g as Qe,ae as Fs,F as tt,G as rt,H as it,k as yn,m as At,b as $a,c as Ua,ah as E0,ai as _0,ak as Bc,K as v0}from"./scheduler.6x_t8-M_.js";import{S as Be,i as Pe,t as ee,g as Ft,b as oe,e as Nt,c as jt,a as gr,m as Ht,d as zt}from"./index.DNIXW-5M.js";import{b as C0}from"./control.r7MQQjJB.js";function lt(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Af(r,n){const t={},s={},o={$$scope:1};let a=r.length;for(;a--;){const l=r[a],f=n[a];if(f){for(const p in l)p in f||(s[p]=1);for(const p in f)o[p]||(t[p]=f[p],o[p]=1);r[a]=f}else for(const p in l)o[p]=1}for(const l in s)l in t||(t[l]=void 0);return t}function vv(r){return typeof r=="object"&&r!==null?r:{}}function Pc(r){let n,t,s;var o=r[1][r[0].type];function a(l,f){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[N0]},$$scope:{ctx:l}}}}return o&&(n=Rc(o,a(r))),{c(){n&&jt(n.$$.fragment),t=on()},l(l){n&&gr(n.$$.fragment,l),t=on()},m(l,f){n&&Ht(n,l,f),De(l,t,f),s=!0},p(l,f){if(f&3&&o!==(o=l[1][l[0].type])){if(n){Ft();const p=n;oe(p.$$.fragment,1,0,()=>{zt(p,1)}),Nt()}o?(n=Rc(o,a(l)),jt(n.$$.fragment),ee(n.$$.fragment,1),Ht(n,t.parentNode,t)):n=null}else if(o){const p={};f&1&&(p.token=l[0]),f&4&&(p.options=l[2]),f&2&&(p.renderers=l[1]),f&15&&(p.$$scope={dirty:f,ctx:l}),n.$set(p)}},i(l){s||(n&&ee(n.$$.fragment,l),s=!0)},o(l){n&&oe(n.$$.fragment,l),s=!1},d(l){l&&J(t),n&&zt(n,l)}}}function A0(r){let n=r[0].raw+"",t;return{c(){t=Ra(n)},l(s){t=Ba(s,n)},m(s,o){De(s,t,o)},p(s,o){o&1&&n!==(n=s[0].raw+"")&&Pa(t,n)},i:nn,o:nn,d(s){s&&J(t)}}}function F0(r){let n,t;return n=new $s({props:{tokens:r[0].tokens,renderers:r[1],options:r[2]}}),{c(){jt(n.$$.fragment)},l(s){gr(n.$$.fragment,s)},m(s,o){Ht(n,s,o),t=!0},p(s,o){const a={};o&1&&(a.tokens=s[0].tokens),o&2&&(a.renderers=s[1]),o&4&&(a.options=s[2]),n.$set(a)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){zt(n,s)}}}function N0(r){let n,t,s,o;const a=[F0,A0],l=[];function f(p,m){return"tokens"in p[0]&&p[0].tokens?0:1}return n=f(r),t=l[n]=a[n](r),{c(){t.c(),s=on()},l(p){t.l(p),s=on()},m(p,m){l[n].m(p,m),De(p,s,m),o=!0},p(p,m){let y=n;n=f(p),n===y?l[n].p(p,m):(Ft(),oe(l[y],1,1,()=>{l[y]=null}),Nt(),t=l[n],t?t.p(p,m):(t=l[n]=a[n](p),t.c()),ee(t,1),t.m(s.parentNode,s))},i(p){o||(ee(t),o=!0)},o(p){oe(t),o=!1},d(p){p&&J(s),l[n].d(p)}}}function b0(r){let n,t,s=r[1][r[0].type]&&Pc(r);return{c(){s&&s.c(),n=on()},l(o){s&&s.l(o),n=on()},m(o,a){s&&s.m(o,a),De(o,n,a),t=!0},p(o,[a]){o[1][o[0].type]?s?(s.p(o,a),a&3&&ee(s,1)):(s=Pc(o),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(Ft(),oe(s,1,1,()=>{s=null}),Nt())},i(o){t||(ee(s),t=!0)},o(o){oe(s),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function w0(r,n,t){let{token:s}=n,{renderers:o}=n,{options:a}=n;return r.$$set=l=>{"token"in l&&t(0,s=l.token),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,a=l.options)},[s,o,a]}class Ff extends Be{constructor(n){super(),Pe(this,n,w0,b0,be,{token:0,renderers:1,options:2})}}function $c(r,n,t){const s=r.slice();return s[3]=n[t],s}function Uc(r){let n,t,s=lt(r[0]),o=[];for(let l=0;l<s.length;l+=1)o[l]=Mc($c(r,s,l));const a=l=>oe(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();n=on()},l(l){for(let f=0;f<o.length;f+=1)o[f].l(l);n=on()},m(l,f){for(let p=0;p<o.length;p+=1)o[p]&&o[p].m(l,f);De(l,n,f),t=!0},p(l,f){if(f&7){s=lt(l[0]);let p;for(p=0;p<s.length;p+=1){const m=$c(l,s,p);o[p]?(o[p].p(m,f),ee(o[p],1)):(o[p]=Mc(m),o[p].c(),ee(o[p],1),o[p].m(n.parentNode,n))}for(Ft(),p=s.length;p<o.length;p+=1)a(p);Nt()}},i(l){if(!t){for(let f=0;f<s.length;f+=1)ee(o[f]);t=!0}},o(l){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)oe(o[f]);t=!1},d(l){l&&J(n),yi(o,l)}}}function Mc(r){let n,t;return n=new Ff({props:{token:r[3],renderers:r[1],options:r[2]}}),{c(){jt(n.$$.fragment)},l(s){gr(n.$$.fragment,s)},m(s,o){Ht(n,s,o),t=!0},p(s,o){const a={};o&1&&(a.token=s[3]),o&2&&(a.renderers=s[1]),o&4&&(a.options=s[2]),n.$set(a)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){zt(n,s)}}}function x0(r){let n,t,s=r[0]&&Uc(r);return{c(){s&&s.c(),n=on()},l(o){s&&s.l(o),n=on()},m(o,a){s&&s.m(o,a),De(o,n,a),t=!0},p(o,[a]){o[0]?s?(s.p(o,a),a&1&&ee(s,1)):(s=Uc(o),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(Ft(),oe(s,1,1,()=>{s=null}),Nt())},i(o){t||(ee(s),t=!0)},o(o){oe(s),t=!1},d(o){o&&J(n),s&&s.d(o)}}}function O0(r,n,t){let{tokens:s}=n,{renderers:o}=n,{options:a}=n;return r.$$set=l=>{"tokens"in l&&t(0,s=l.tokens),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,a=l.options)},[s,o,a]}class $s extends Be{constructor(n){super(),Pe(this,n,O0,x0,be,{tokens:0,renderers:1,options:2})}}function Si(...r){return`/${r.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}`}function Ii(r){return r.startsWith("/")||r.startsWith("#")}function Nf(r,n){return n.slug(r).replace(/--+/g,"-")}function ya(r){let n,t;const s=r[5].default,o=nt(s,r,r[4],null);let a=[{id:r[1]}],l={};for(let f=0;f<a.length;f+=1)l=Cf(l,a[f]);return{c(){n=xe(`h${r[0].depth}`),o&&o.c(),this.h()},l(f){n=Oe(f,(`h${r[0].depth}`||"null").toUpperCase(),{id:!0});var p=Qe(n);o&&o.l(p),p.forEach(J),this.h()},h(){Fs(`h${r[0].depth}`)(n,l)},m(f,p){De(f,n,p),o&&o.m(n,null),t=!0},p(f,p){o&&o.p&&(!t||p&16)&&tt(o,s,f,f[4],t?it(s,f[4],p,null):rt(f[4]),null),Fs(`h${f[0].depth}`)(n,l=Af(a,[(!t||p&2)&&{id:f[1]}]))},i(f){t||(ee(o,f),t=!0)},o(f){oe(o,f),t=!1},d(f){f&&J(n),o&&o.d(f)}}}function k0(r){let n=`h${r[0].depth}`,t,s,o=`h${r[0].depth}`&&ya(r);return{c(){o&&o.c(),t=on()},l(a){o&&o.l(a),t=on()},m(a,l){o&&o.m(a,l),De(a,t,l),s=!0},p(a,[l]){`h${a[0].depth}`?n?be(n,`h${a[0].depth}`)?(o.d(1),o=ya(a),n=`h${a[0].depth}`,o.c(),o.m(t.parentNode,t)):o.p(a,l):(o=ya(a),n=`h${a[0].depth}`,o.c(),o.m(t.parentNode,t)):n&&(o.d(1),o=null,n=`h${a[0].depth}`)},i(a){s||(ee(o,a),s=!0)},o(a){oe(o,a),s=!1},d(a){a&&J(t),o&&o.d(a)}}}function L0(r,n,t){let{$$slots:s={},$$scope:o}=n,{token:a}=n,{options:l}=n;const f=void 0;let p;return r.$$set=m=>{"token"in m&&t(0,a=m.token),"options"in m&&t(2,l=m.options),"$$scope"in m&&t(4,o=m.$$scope)},r.$$.update=()=>{r.$$.dirty&5&&t(1,p=Nf(a.text,l.slugger))},[a,p,l,f,o,s]}class R0 extends Be{constructor(n){super(),Pe(this,n,L0,k0,be,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function B0(r){let n,t;const s=r[4].default,o=nt(s,r,r[3],null);return{c(){n=xe("blockquote"),o&&o.c()},l(a){n=Oe(a,"BLOCKQUOTE",{});var l=Qe(n);o&&o.l(l),l.forEach(J)},m(a,l){De(a,n,l),o&&o.m(n,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,a,a[3],t?it(s,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(o,a),t=!0)},o(a){oe(o,a),t=!1},d(a){a&&J(n),o&&o.d(a)}}}function P0(r,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class $0 extends Be{constructor(n){super(),Pe(this,n,P0,B0,be,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Gc(r,n,t){const s=r.slice();return s[4]=n[t],s}function Vc(r){let n,t;return n=new Ff({props:{token:{...r[4]},options:r[1],renderers:r[2]}}),{c(){jt(n.$$.fragment)},l(s){gr(n.$$.fragment,s)},m(s,o){Ht(n,s,o),t=!0},p(s,o){const a={};o&1&&(a.token={...s[4]}),o&2&&(a.options=s[1]),o&4&&(a.renderers=s[2]),n.$set(a)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){zt(n,s)}}}function Sa(r){let n,t,s,o=lt(r[0].items),a=[];for(let m=0;m<o.length;m+=1)a[m]=Vc(Gc(r,o,m));const l=m=>oe(a[m],1,1,()=>{a[m]=null});let f=[{start:t=r[0].start||1}],p={};for(let m=0;m<f.length;m+=1)p=Cf(p,f[m]);return{c(){n=xe(r[3]);for(let m=0;m<a.length;m+=1)a[m].c();this.h()},l(m){n=Oe(m,(r[3]||"null").toUpperCase(),{start:!0});var y=Qe(n);for(let I=0;I<a.length;I+=1)a[I].l(y);y.forEach(J),this.h()},h(){Fs(r[3])(n,p)},m(m,y){De(m,n,y);for(let I=0;I<a.length;I+=1)a[I]&&a[I].m(n,null);s=!0},p(m,y){if(y&7){o=lt(m[0].items);let I;for(I=0;I<o.length;I+=1){const O=Gc(m,o,I);a[I]?(a[I].p(O,y),ee(a[I],1)):(a[I]=Vc(O),a[I].c(),ee(a[I],1),a[I].m(n,null))}for(Ft(),I=o.length;I<a.length;I+=1)l(I);Nt()}Fs(m[3])(n,p=Af(f,[(!s||y&1&&t!==(t=m[0].start||1))&&{start:t}]))},i(m){if(!s){for(let y=0;y<o.length;y+=1)ee(a[y]);s=!0}},o(m){a=a.filter(Boolean);for(let y=0;y<a.length;y+=1)oe(a[y]);s=!1},d(m){m&&J(n),yi(a,m)}}}function U0(r){let n=r[3],t,s=r[3]&&Sa(r);return{c(){s&&s.c(),t=on()},l(o){s&&s.l(o),t=on()},m(o,a){s&&s.m(o,a),De(o,t,a)},p(o,[a]){o[3]?n?be(n,o[3])?(s.d(1),s=Sa(o),n=o[3],s.c(),s.m(t.parentNode,t)):s.p(o,a):(s=Sa(o),n=o[3],s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=o[3])},i:nn,o(o){oe(s,o)},d(o){o&&J(t),s&&s.d(o)}}}function M0(r,n,t){let{token:s}=n,{options:o}=n,{renderers:a}=n,l;return r.$$set=f=>{"token"in f&&t(0,s=f.token),"options"in f&&t(1,o=f.options),"renderers"in f&&t(2,a=f.renderers)},r.$$.update=()=>{r.$$.dirty&1&&t(3,l=s.ordered?"ol":"ul")},[s,o,a,l]}class G0 extends Be{constructor(n){super(),Pe(this,n,M0,U0,be,{token:0,options:1,renderers:2})}}function V0(r){let n,t;const s=r[4].default,o=nt(s,r,r[3],null);return{c(){n=xe("li"),o&&o.c()},l(a){n=Oe(a,"LI",{});var l=Qe(n);o&&o.l(l),l.forEach(J)},m(a,l){De(a,n,l),o&&o.m(n,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,a,a[3],t?it(s,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(o,a),t=!0)},o(a){oe(o,a),t=!1},d(a){a&&J(n),o&&o.d(a)}}}function q0(r,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class Q0 extends Be{constructor(n){super(),Pe(this,n,q0,V0,be,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function j0(r){let n;return{c(){n=xe("br")},l(t){n=Oe(t,"BR",{})},m(t,s){De(t,n,s)},p:nn,i:nn,o:nn,d(t){t&&J(n)}}}function H0(r,n,t){return[void 0,void 0,void 0]}class z0 extends Be{constructor(n){super(),Pe(this,n,H0,j0,be,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Y0(r){let n,t,s=r[0].text+"",o,a;return{c(){n=xe("pre"),t=xe("code"),o=Ra(s),this.h()},l(l){n=Oe(l,"PRE",{});var f=Qe(n);t=Oe(f,"CODE",{class:!0});var p=Qe(t);o=Ba(p,s),p.forEach(J),f.forEach(J),this.h()},h(){yn(t,"class",a=`lang-${r[0].lang}`)},m(l,f){De(l,n,f),At(n,t),At(t,o)},p(l,[f]){f&1&&s!==(s=l[0].text+"")&&Pa(o,s),f&1&&a!==(a=`lang-${l[0].lang}`)&&yn(t,"class",a)},i:nn,o:nn,d(l){l&&J(n)}}}function W0(r,n,t){let{token:s}=n;const o=void 0,a=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,a]}class J0 extends Be{constructor(n){super(),Pe(this,n,W0,Y0,be,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function X0(r){let n,t=r[0].raw.slice(1,r[0].raw.length-1)+"",s;return{c(){n=xe("code"),s=Ra(t)},l(o){n=Oe(o,"CODE",{});var a=Qe(n);s=Ba(a,t),a.forEach(J)},m(o,a){De(o,n,a),At(n,s)},p(o,[a]){a&1&&t!==(t=o[0].raw.slice(1,o[0].raw.length-1)+"")&&Pa(s,t)},i:nn,o:nn,d(o){o&&J(n)}}}function Z0(r,n,t){let{token:s}=n;const o=void 0,a=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,a]}class K0 extends Be{constructor(n){super(),Pe(this,n,Z0,X0,be,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function qc(r,n,t){const s=r.slice();return s[3]=n[t],s}function Qc(r,n,t){const s=r.slice();return s[6]=n[t],s}function jc(r,n,t){const s=r.slice();return s[9]=n[t],s}function Hc(r){let n,t,s,o;return t=new $s({props:{tokens:r[9].tokens,options:r[1],renderers:r[2]}}),{c(){n=xe("th"),jt(t.$$.fragment),s=$a(),this.h()},l(a){n=Oe(a,"TH",{scope:!0});var l=Qe(n);gr(t.$$.fragment,l),s=Ua(l),l.forEach(J),this.h()},h(){yn(n,"scope","col")},m(a,l){De(a,n,l),Ht(t,n,null),At(n,s),o=!0},p(a,l){const f={};l&1&&(f.tokens=a[9].tokens),l&2&&(f.options=a[1]),l&4&&(f.renderers=a[2]),t.$set(f)},i(a){o||(ee(t.$$.fragment,a),o=!0)},o(a){oe(t.$$.fragment,a),o=!1},d(a){a&&J(n),zt(t)}}}function zc(r){let n,t,s;return t=new $s({props:{tokens:r[6].tokens,options:r[1],renderers:r[2]}}),{c(){n=xe("td"),jt(t.$$.fragment)},l(o){n=Oe(o,"TD",{});var a=Qe(n);gr(t.$$.fragment,a),a.forEach(J)},m(o,a){De(o,n,a),Ht(t,n,null),s=!0},p(o,a){const l={};a&1&&(l.tokens=o[6].tokens),a&2&&(l.options=o[1]),a&4&&(l.renderers=o[2]),t.$set(l)},i(o){s||(ee(t.$$.fragment,o),s=!0)},o(o){oe(t.$$.fragment,o),s=!1},d(o){o&&J(n),zt(t)}}}function Yc(r){let n,t,s,o=lt(r[3]),a=[];for(let f=0;f<o.length;f+=1)a[f]=zc(Qc(r,o,f));const l=f=>oe(a[f],1,1,()=>{a[f]=null});return{c(){n=xe("tr");for(let f=0;f<a.length;f+=1)a[f].c();t=$a()},l(f){n=Oe(f,"TR",{});var p=Qe(n);for(let m=0;m<a.length;m+=1)a[m].l(p);t=Ua(p),p.forEach(J)},m(f,p){De(f,n,p);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(n,null);At(n,t),s=!0},p(f,p){if(p&7){o=lt(f[3]);let m;for(m=0;m<o.length;m+=1){const y=Qc(f,o,m);a[m]?(a[m].p(y,p),ee(a[m],1)):(a[m]=zc(y),a[m].c(),ee(a[m],1),a[m].m(n,t))}for(Ft(),m=o.length;m<a.length;m+=1)l(m);Nt()}},i(f){if(!s){for(let p=0;p<o.length;p+=1)ee(a[p]);s=!0}},o(f){a=a.filter(Boolean);for(let p=0;p<a.length;p+=1)oe(a[p]);s=!1},d(f){f&&J(n),yi(a,f)}}}function eT(r){let n,t,s,o,a,l,f=lt(r[0].header),p=[];for(let F=0;F<f.length;F+=1)p[F]=Hc(jc(r,f,F));const m=F=>oe(p[F],1,1,()=>{p[F]=null});let y=lt(r[0].rows),I=[];for(let F=0;F<y.length;F+=1)I[F]=Yc(qc(r,y,F));const O=F=>oe(I[F],1,1,()=>{I[F]=null});return{c(){n=xe("table"),t=xe("thead"),s=xe("tr");for(let F=0;F<p.length;F+=1)p[F].c();o=$a(),a=xe("tbody");for(let F=0;F<I.length;F+=1)I[F].c()},l(F){n=Oe(F,"TABLE",{});var N=Qe(n);t=Oe(N,"THEAD",{});var B=Qe(t);s=Oe(B,"TR",{});var j=Qe(s);for(let Ae=0;Ae<p.length;Ae+=1)p[Ae].l(j);j.forEach(J),B.forEach(J),o=Ua(N),a=Oe(N,"TBODY",{});var ce=Qe(a);for(let Ae=0;Ae<I.length;Ae+=1)I[Ae].l(ce);ce.forEach(J),N.forEach(J)},m(F,N){De(F,n,N),At(n,t),At(t,s);for(let B=0;B<p.length;B+=1)p[B]&&p[B].m(s,null);At(n,o),At(n,a);for(let B=0;B<I.length;B+=1)I[B]&&I[B].m(a,null);l=!0},p(F,[N]){if(N&7){f=lt(F[0].header);let B;for(B=0;B<f.length;B+=1){const j=jc(F,f,B);p[B]?(p[B].p(j,N),ee(p[B],1)):(p[B]=Hc(j),p[B].c(),ee(p[B],1),p[B].m(s,null))}for(Ft(),B=f.length;B<p.length;B+=1)m(B);Nt()}if(N&7){y=lt(F[0].rows);let B;for(B=0;B<y.length;B+=1){const j=qc(F,y,B);I[B]?(I[B].p(j,N),ee(I[B],1)):(I[B]=Yc(j),I[B].c(),ee(I[B],1),I[B].m(a,null))}for(Ft(),B=y.length;B<I.length;B+=1)O(B);Nt()}},i(F){if(!l){for(let N=0;N<f.length;N+=1)ee(p[N]);for(let N=0;N<y.length;N+=1)ee(I[N]);l=!0}},o(F){p=p.filter(Boolean);for(let N=0;N<p.length;N+=1)oe(p[N]);I=I.filter(Boolean);for(let N=0;N<I.length;N+=1)oe(I[N]);l=!1},d(F){F&&J(n),yi(p,F),yi(I,F)}}}function nT(r,n,t){let{token:s}=n,{options:o}=n,{renderers:a}=n;return r.$$set=l=>{"token"in l&&t(0,s=l.token),"options"in l&&t(1,o=l.options),"renderers"in l&&t(2,a=l.renderers)},[s,o,a]}class tT extends Be{constructor(n){super(),Pe(this,n,nT,eT,be,{token:0,options:1,renderers:2})}}function rT(r){let n,t=r[0].text+"",s;return{c(){n=new E0(!1),s=on(),this.h()},l(o){n=_0(o,!1),s=on(),this.h()},h(){n.a=s},m(o,a){n.m(t,o,a),De(o,s,a)},p(o,[a]){a&1&&t!==(t=o[0].text+"")&&n.p(t)},i:nn,o:nn,d(o){o&&(J(s),n.d())}}}function iT(r,n,t){let{token:s}=n;const o=void 0,a=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,a]}class sT extends Be{constructor(n){super(),Pe(this,n,iT,rT,be,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function oT(r){let n,t;const s=r[4].default,o=nt(s,r,r[3],null);return{c(){n=xe("p"),o&&o.c()},l(a){n=Oe(a,"P",{});var l=Qe(n);o&&o.l(l),l.forEach(J)},m(a,l){De(a,n,l),o&&o.m(n,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,a,a[3],t?it(s,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(o,a),t=!0)},o(a){oe(o,a),t=!1},d(a){a&&J(n),o&&o.d(a)}}}function aT(r,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class uT extends Be{constructor(n){super(),Pe(this,n,aT,oT,be,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function lT(r){let n,t,s,o;const a=r[4].default,l=nt(a,r,r[3],null);return{c(){n=xe("a"),l&&l.c(),this.h()},l(f){n=Oe(f,"A",{href:!0,title:!0});var p=Qe(n);l&&l.l(p),p.forEach(J),this.h()},h(){yn(n,"href",t=Ii(r[0].href)?Si(r[1].baseUrl,r[0].href):r[0].href),yn(n,"title",s=r[0].title)},m(f,p){De(f,n,p),l&&l.m(n,null),o=!0},p(f,[p]){l&&l.p&&(!o||p&8)&&tt(l,a,f,f[3],o?it(a,f[3],p,null):rt(f[3]),null),(!o||p&3&&t!==(t=Ii(f[0].href)?Si(f[1].baseUrl,f[0].href):f[0].href))&&yn(n,"href",t),(!o||p&1&&s!==(s=f[0].title))&&yn(n,"title",s)},i(f){o||(ee(l,f),o=!0)},o(f){oe(l,f),o=!1},d(f){f&&J(n),l&&l.d(f)}}}function cT(r,n,t){let{$$slots:s={},$$scope:o}=n,{token:a}=n,{options:l}=n;const f=void 0;return r.$$set=p=>{"token"in p&&t(0,a=p.token),"options"in p&&t(1,l=p.options),"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class fT extends Be{constructor(n){super(),Pe(this,n,cT,lT,be,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function pT(r){let n;const t=r[4].default,s=nt(t,r,r[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,a){s&&s.m(o,a),n=!0},p(o,[a]){s&&s.p&&(!n||a&8)&&tt(s,t,o,o[3],n?it(t,o[3],a,null):rt(o[3]),null)},i(o){n||(ee(s,o),n=!0)},o(o){oe(s,o),n=!1},d(o){s&&s.d(o)}}}function dT(r,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class hT extends Be{constructor(n){super(),Pe(this,n,dT,pT,be,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function gT(r){let n,t;const s=r[4].default,o=nt(s,r,r[3],null);return{c(){n=xe("dfn"),o&&o.c()},l(a){n=Oe(a,"DFN",{});var l=Qe(n);o&&o.l(l),l.forEach(J)},m(a,l){De(a,n,l),o&&o.m(n,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,a,a[3],t?it(s,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(o,a),t=!0)},o(a){oe(o,a),t=!1},d(a){a&&J(n),o&&o.d(a)}}}function mT(r,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class yT extends Be{constructor(n){super(),Pe(this,n,mT,gT,be,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ST(r){let n,t;const s=r[4].default,o=nt(s,r,r[3],null);return{c(){n=xe("del"),o&&o.c()},l(a){n=Oe(a,"DEL",{});var l=Qe(n);o&&o.l(l),l.forEach(J)},m(a,l){De(a,n,l),o&&o.m(n,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,a,a[3],t?it(s,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(o,a),t=!0)},o(a){oe(o,a),t=!1},d(a){a&&J(n),o&&o.d(a)}}}function IT(r,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class TT extends Be{constructor(n){super(),Pe(this,n,IT,ST,be,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function DT(r){let n,t;const s=r[4].default,o=nt(s,r,r[3],null);return{c(){n=xe("em"),o&&o.c()},l(a){n=Oe(a,"EM",{});var l=Qe(n);o&&o.l(l),l.forEach(J)},m(a,l){De(a,n,l),o&&o.m(n,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,a,a[3],t?it(s,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(o,a),t=!0)},o(a){oe(o,a),t=!1},d(a){a&&J(n),o&&o.d(a)}}}function ET(r,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class _T extends Be{constructor(n){super(),Pe(this,n,ET,DT,be,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function vT(r){let n;return{c(){n=xe("hr")},l(t){n=Oe(t,"HR",{})},m(t,s){De(t,n,s)},p:nn,i:nn,o:nn,d(t){t&&J(n)}}}function CT(r,n,t){return[void 0,void 0,void 0]}class AT extends Be{constructor(n){super(),Pe(this,n,CT,vT,be,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function FT(r){let n,t;const s=r[4].default,o=nt(s,r,r[3],null);return{c(){n=xe("strong"),o&&o.c()},l(a){n=Oe(a,"STRONG",{});var l=Qe(n);o&&o.l(l),l.forEach(J)},m(a,l){De(a,n,l),o&&o.m(n,null),t=!0},p(a,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,a,a[3],t?it(s,a[3],l,null):rt(a[3]),null)},i(a){t||(ee(o,a),t=!0)},o(a){oe(o,a),t=!1},d(a){a&&J(n),o&&o.d(a)}}}function NT(r,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class bT extends Be{constructor(n){super(),Pe(this,n,NT,FT,be,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function wT(r){let n,t,s,o;return{c(){n=xe("img"),this.h()},l(a){n=Oe(a,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Bc(n.src,t=Ii(r[0].href)?Si(r[1].baseUrl,r[0].href):r[0].href)||yn(n,"src",t),yn(n,"title",s=r[0].title),yn(n,"alt",o=r[0].text),yn(n,"class","markdown-image svelte-z38cge")},m(a,l){De(a,n,l)},p(a,[l]){l&3&&!Bc(n.src,t=Ii(a[0].href)?Si(a[1].baseUrl,a[0].href):a[0].href)&&yn(n,"src",t),l&1&&s!==(s=a[0].title)&&yn(n,"title",s),l&1&&o!==(o=a[0].text)&&yn(n,"alt",o)},i:nn,o:nn,d(a){a&&J(n)}}}function xT(r,n,t){let{token:s}=n,{options:o}=n;const a=void 0;return r.$$set=l=>{"token"in l&&t(0,s=l.token),"options"in l&&t(1,o=l.options)},[s,o,a]}class OT extends Be{constructor(n){super(),Pe(this,n,xT,wT,be,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function kT(r){let n;const t=r[4].default,s=nt(t,r,r[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,a){s&&s.m(o,a),n=!0},p(o,[a]){s&&s.p&&(!n||a&8)&&tt(s,t,o,o[3],n?it(t,o[3],a,null):rt(o[3]),null)},i(o){n||(ee(s,o),n=!0)},o(o){oe(s,o),n=!1},d(o){s&&s.d(o)}}}function LT(r,n,t){let{$$slots:s={},$$scope:o}=n;const a=void 0,l=void 0,f=void 0;return r.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[a,l,f,o,s]}class Wc extends Be{constructor(n){super(),Pe(this,n,LT,kT,be,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}const RT=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,BT=Object.hasOwnProperty;class bf{constructor(){this.occurrences,this.reset()}slug(n,t){const s=this;let o=PT(n,t===!0);const a=o;for(;BT.call(s.occurrences,o);)s.occurrences[a]++,o=a+"-"+s.occurrences[a];return s.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function PT(r,n){return typeof r!="string"?"":(n||(r=r.toLowerCase()),r.replace(RT,"").replace(/ /g,"-"))}function Ma(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let mr=Ma();function wf(r){mr=r}const xf=/[&<>"']/,$T=new RegExp(xf.source,"g"),Of=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,UT=new RegExp(Of.source,"g"),MT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jc=r=>MT[r];function Fn(r,n){if(n){if(xf.test(r))return r.replace($T,Jc)}else if(Of.test(r))return r.replace(UT,Jc);return r}const GT=/(^|[^\[])\^/g;function Te(r,n){let t=typeof r=="string"?r:r.source;n=n||"";const s={replace:(o,a)=>{let l=typeof a=="string"?a:a.source;return l=l.replace(GT,"$1"),t=t.replace(o,l),s},getRegex:()=>new RegExp(t,n)};return s}function Xc(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const di={exec:()=>null};function Zc(r,n){const t=r.replace(/\|/g,(a,l,f)=>{let p=!1,m=l;for(;--m>=0&&f[m]==="\\";)p=!p;return p?"|":" |"}),s=t.split(/ \|/);let o=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),n)if(s.length>n)s.splice(n);else for(;s.length<n;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(/\\\|/g,"|");return s}function ai(r,n,t){const s=r.length;if(s===0)return"";let o=0;for(;o<s&&r.charAt(s-o-1)===n;)o++;return r.slice(0,s-o)}function VT(r,n){if(r.indexOf(n[1])===-1)return-1;let t=0;for(let s=0;s<r.length;s++)if(r[s]==="\\")s++;else if(r[s]===n[0])t++;else if(r[s]===n[1]&&(t--,t<0))return s;return-1}function Kc(r,n,t,s){const o=n.href,a=n.title?Fn(n.title):null,l=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){s.state.inLink=!0;const f={type:"link",raw:t,href:o,title:a,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,f}return{type:"image",raw:t,href:o,title:a,text:Fn(l)}}function qT(r,n){const t=r.match(/^(\s+)(?:```)/);if(t===null)return n;const s=t[1];return n.split(`
`).map(o=>{const a=o.match(/^\s+/);if(a===null)return o;const[l]=a;return l.length>=s.length?o.slice(s.length):o}).join(`
`)}class Ns{constructor(n){Se(this,"options");Se(this,"rules");Se(this,"lexer");this.options=n||mr}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const s=t[0].replace(/^(?: {1,4}| {0,3}\t)/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:ai(s,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const s=t[0],o=qT(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:o}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let s=t[2].trim();if(/#$/.test(s)){const o=ai(s,"#");(this.options.pedantic||!o||/ $/.test(o))&&(s=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:ai(t[0],`
`)}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let s=ai(t[0],`
`).split(`
`),o="",a="";const l=[];for(;s.length>0;){let f=!1;const p=[];let m;for(m=0;m<s.length;m++)if(/^ {0,3}>/.test(s[m]))p.push(s[m]),f=!0;else if(!f)p.push(s[m]);else break;s=s.slice(m);const y=p.join(`
`),I=y.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");o=o?`${o}
${y}`:y,a=a?`${a}
${I}`:I;const O=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(I,l,!0),this.lexer.state.top=O,s.length===0)break;const F=l[l.length-1];if((F==null?void 0:F.type)==="code")break;if((F==null?void 0:F.type)==="blockquote"){const N=F,B=N.raw+`
`+s.join(`
`),j=this.blockquote(B);l[l.length-1]=j,o=o.substring(0,o.length-N.raw.length)+j.raw,a=a.substring(0,a.length-N.text.length)+j.text;break}else if((F==null?void 0:F.type)==="list"){const N=F,B=N.raw+`
`+s.join(`
`),j=this.list(B);l[l.length-1]=j,o=o.substring(0,o.length-F.raw.length)+j.raw,a=a.substring(0,a.length-N.raw.length)+j.raw,s=B.substring(l[l.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:l,text:a}}}list(n){let t=this.rules.block.list.exec(n);if(t){let s=t[1].trim();const o=s.length>1,a={type:"list",raw:"",ordered:o,start:o?+s.slice(0,-1):"",loose:!1,items:[]};s=o?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=o?s:"[*+-]");const l=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let f=!1;for(;n;){let p=!1,m="",y="";if(!(t=l.exec(n))||this.rules.block.hr.test(n))break;m=t[0],n=n.substring(m.length);let I=t[2].split(`
`,1)[0].replace(/^\t+/,ce=>" ".repeat(3*ce.length)),O=n.split(`
`,1)[0],F=!I.trim(),N=0;if(this.options.pedantic?(N=2,y=I.trimStart()):F?N=t[1].length+1:(N=t[2].search(/[^ ]/),N=N>4?1:N,y=I.slice(N),N+=t[1].length),F&&/^[ \t]*$/.test(O)&&(m+=O+`
`,n=n.substring(O.length+1),p=!0),!p){const ce=new RegExp(`^ {0,${Math.min(3,N-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Ae=new RegExp(`^ {0,${Math.min(3,N-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),ye=new RegExp(`^ {0,${Math.min(3,N-1)}}(?:\`\`\`|~~~)`),ke=new RegExp(`^ {0,${Math.min(3,N-1)}}#`),He=new RegExp(`^ {0,${Math.min(3,N-1)}}<[a-z].*>`,"i");for(;n;){const We=n.split(`
`,1)[0];let Le;if(O=We,this.options.pedantic?(O=O.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  "),Le=O):Le=O.replace(/\t/g,"    "),ye.test(O)||ke.test(O)||He.test(O)||ce.test(O)||Ae.test(O))break;if(Le.search(/[^ ]/)>=N||!O.trim())y+=`
`+Le.slice(N);else{if(F||I.replace(/\t/g,"    ").search(/[^ ]/)>=4||ye.test(I)||ke.test(I)||Ae.test(I))break;y+=`
`+O}!F&&!O.trim()&&(F=!0),m+=We+`
`,n=n.substring(We.length+1),I=Le.slice(N)}}a.loose||(f?a.loose=!0:/\n[ \t]*\n[ \t]*$/.test(m)&&(f=!0));let B=null,j;this.options.gfm&&(B=/^\[[ xX]\] /.exec(y),B&&(j=B[0]!=="[ ] ",y=y.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:m,task:!!B,checked:j,loose:!1,text:y,tokens:[]}),a.raw+=m}a.items[a.items.length-1].raw=a.items[a.items.length-1].raw.trimEnd(),a.items[a.items.length-1].text=a.items[a.items.length-1].text.trimEnd(),a.raw=a.raw.trimEnd();for(let p=0;p<a.items.length;p++)if(this.lexer.state.top=!1,a.items[p].tokens=this.lexer.blockTokens(a.items[p].text,[]),!a.loose){const m=a.items[p].tokens.filter(I=>I.type==="space"),y=m.length>0&&m.some(I=>/\n.*\n/.test(I.raw));a.loose=y}if(a.loose)for(let p=0;p<a.items.length;p++)a.items[p].loose=!0;return a}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),o=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:o,title:a}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const s=Zc(t[1]),o=t[2].replace(/^\||\| *$/g,"").split("|"),a=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],l={type:"table",raw:t[0],header:[],align:[],rows:[]};if(s.length===o.length){for(const f of o)/^ *-+: *$/.test(f)?l.align.push("right"):/^ *:-+: *$/.test(f)?l.align.push("center"):/^ *:-+ *$/.test(f)?l.align.push("left"):l.align.push(null);for(let f=0;f<s.length;f++)l.header.push({text:s[f],tokens:this.lexer.inline(s[f]),header:!0,align:l.align[f]});for(const f of a)l.rows.push(Zc(f,l.header.length).map((p,m)=>({text:p,tokens:this.lexer.inline(p),header:!1,align:l.align[m]})));return l}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:Fn(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const l=ai(s.slice(0,-1),"\\");if((s.length-l.length)%2===0)return}else{const l=VT(t[2],"()");if(l>-1){const p=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,p).trim(),t[3]=""}}let o=t[2],a="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);l&&(o=l[1],a=l[3])}else a=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(s)?o=o.slice(1):o=o.slice(1,-1)),Kc(t,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let s;if((s=this.rules.inline.reflink.exec(n))||(s=this.rules.inline.nolink.exec(n))){const o=(s[2]||s[1]).replace(/\s+/g," "),a=t[o.toLowerCase()];if(!a){const l=s[0].charAt(0);return{type:"text",raw:l,text:l}}return Kc(s,a,s[0],this.lexer)}}emStrong(n,t,s=""){let o=this.rules.inline.emStrongLDelim.exec(n);if(!o||o[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const l=[...o[0]].length-1;let f,p,m=l,y=0;const I=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(I.lastIndex=0,t=t.slice(-1*n.length+l);(o=I.exec(t))!=null;){if(f=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!f)continue;if(p=[...f].length,o[3]||o[4]){m+=p;continue}else if((o[5]||o[6])&&l%3&&!((l+p)%3)){y+=p;continue}if(m-=p,m>0)continue;p=Math.min(p,p+m+y);const O=[...o[0]][0].length,F=n.slice(0,l+o.index+O+p);if(Math.min(l,p)%2){const B=F.slice(1,-1);return{type:"em",raw:F,text:B,tokens:this.lexer.inlineTokens(B)}}const N=F.slice(2,-2);return{type:"strong",raw:F,text:N,tokens:this.lexer.inlineTokens(N)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let s=t[2].replace(/\n/g," ");const o=/[^ ]/.test(s),a=/^ /.test(s)&&/ $/.test(s);return o&&a&&(s=s.substring(1,s.length-1)),s=Fn(s,!0),{type:"codespan",raw:t[0],text:s}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let s,o;return t[2]==="@"?(s=Fn(t[1]),o="mailto:"+s):(s=Fn(t[1]),o=s),{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}url(n){var s;let t;if(t=this.rules.inline.url.exec(n)){let o,a;if(t[2]==="@")o=Fn(t[0]),a="mailto:"+o;else{let l;do l=t[0],t[0]=((s=this.rules.inline._backpedal.exec(t[0]))==null?void 0:s[0])??"";while(l!==t[0]);o=Fn(t[0]),t[1]==="www."?a="http://"+t[0]:a=t[0]}return{type:"link",raw:t[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let s;return this.lexer.state.inRawBlock?s=t[0]:s=Fn(t[0]),{type:"text",raw:t[0],text:s}}}}const QT=/^(?:[ \t]*(?:\n|$))+/,jT=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,HT=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,_i=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,zT=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,kf=/(?:[*+-]|\d{1,9}[.)])/,Lf=Te(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,kf).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Ga=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,YT=/^[^\n]+/,Va=/(?!\s*\])(?:\\.|[^\[\]\\])+/,WT=Te(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Va).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),JT=Te(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,kf).getRegex(),Us="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",qa=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,XT=Te("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",qa).replace("tag",Us).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Rf=Te(Ga).replace("hr",_i).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Us).getRegex(),ZT=Te(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Rf).getRegex(),Qa={blockquote:ZT,code:jT,def:WT,fences:HT,heading:zT,hr:_i,html:XT,lheading:Lf,list:JT,newline:QT,paragraph:Rf,table:di,text:YT},ef=Te("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",_i).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Us).getRegex(),KT={...Qa,table:ef,paragraph:Te(Ga).replace("hr",_i).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ef).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Us).getRegex()},eD={...Qa,html:Te(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",qa).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:di,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Te(Ga).replace("hr",_i).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Lf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Bf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,nD=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Pf=/^( {2,}|\\)\n(?!\s*$)/,tD=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,vi="\\p{P}\\p{S}",rD=Te(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,vi).getRegex(),iD=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,sD=Te(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,vi).getRegex(),oD=Te("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,vi).getRegex(),aD=Te("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,vi).getRegex(),uD=Te(/\\([punct])/,"gu").replace(/punct/g,vi).getRegex(),lD=Te(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),cD=Te(qa).replace("(?:-->|$)","-->").getRegex(),fD=Te("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",cD).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),bs=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,pD=Te(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",bs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),$f=Te(/^!?\[(label)\]\[(ref)\]/).replace("label",bs).replace("ref",Va).getRegex(),Uf=Te(/^!?\[(ref)\](?:\[\])?/).replace("ref",Va).getRegex(),dD=Te("reflink|nolink(?!\\()","g").replace("reflink",$f).replace("nolink",Uf).getRegex(),ja={_backpedal:di,anyPunctuation:uD,autolink:lD,blockSkip:iD,br:Pf,code:nD,del:di,emStrongLDelim:sD,emStrongRDelimAst:oD,emStrongRDelimUnd:aD,escape:Bf,link:pD,nolink:Uf,punctuation:rD,reflink:$f,reflinkSearch:dD,tag:fD,text:tD,url:di},hD={...ja,link:Te(/^!?\[(label)\]\((.*?)\)/).replace("label",bs).getRegex(),reflink:Te(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",bs).getRegex()},Ca={...ja,escape:Te(Bf).replace("])","~|])").getRegex(),url:Te(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},gD={...Ca,br:Te(Pf).replace("{2,}","*").getRegex(),text:Te(Ca.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Is={normal:Qa,gfm:KT,pedantic:eD},ui={normal:ja,gfm:Ca,breaks:gD,pedantic:hD};class Nn{constructor(n){Se(this,"tokens");Se(this,"options");Se(this,"state");Se(this,"tokenizer");Se(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||mr,this.options.tokenizer=this.options.tokenizer||new Ns,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Is.normal,inline:ui.normal};this.options.pedantic?(t.block=Is.pedantic,t.inline=ui.pedantic):this.options.gfm&&(t.block=Is.gfm,this.options.breaks?t.inline=ui.breaks:t.inline=ui.gfm),this.tokenizer.rules=t}static get rules(){return{block:Is,inline:ui}}static lex(n,t){return new Nn(t).lex(n)}static lexInline(n,t){return new Nn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[],s=!1){this.options.pedantic&&(n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""));let o,a,l;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(f=>(o=f.call({lexer:this},n,t))?(n=n.substring(o.raw.length),t.push(o),!0):!1))){if(o=this.tokenizer.space(n)){n=n.substring(o.raw.length),o.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(o);continue}if(o=this.tokenizer.code(n)){n=n.substring(o.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(o);continue}if(o=this.tokenizer.fences(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.heading(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.hr(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.blockquote(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.list(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.html(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.def(n)){n=n.substring(o.raw.length),a=t[t.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+o.raw,a.text+=`
`+o.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title});continue}if(o=this.tokenizer.table(n)){n=n.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.lheading(n)){n=n.substring(o.raw.length),t.push(o);continue}if(l=n,this.options.extensions&&this.options.extensions.startBlock){let f=1/0;const p=n.slice(1);let m;this.options.extensions.startBlock.forEach(y=>{m=y.call({lexer:this},p),typeof m=="number"&&m>=0&&(f=Math.min(f,m))}),f<1/0&&f>=0&&(l=n.substring(0,f+1))}if(this.state.top&&(o=this.tokenizer.paragraph(l))){a=t[t.length-1],s&&(a==null?void 0:a.type)==="paragraph"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(o),s=l.length!==n.length,n=n.substring(o.raw.length);continue}if(o=this.tokenizer.text(n)){n=n.substring(o.raw.length),a=t[t.length-1],a&&a.type==="text"?(a.raw+=`
`+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):t.push(o);continue}if(n){const f="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let s,o,a,l=n,f,p,m;if(this.tokens.links){const y=Object.keys(this.tokens.links);if(y.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)y.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,f.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(p||(m=""),p=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(y=>(s=y.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(n,l,m)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(n)){n=n.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(n))){n=n.substring(s.raw.length),t.push(s);continue}if(a=n,this.options.extensions&&this.options.extensions.startInline){let y=1/0;const I=n.slice(1);let O;this.options.extensions.startInline.forEach(F=>{O=F.call({lexer:this},I),typeof O=="number"&&O>=0&&(y=Math.min(y,O))}),y<1/0&&y>=0&&(a=n.substring(0,y+1))}if(s=this.tokenizer.inlineText(a)){n=n.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(m=s.raw.slice(-1)),p=!0,o=t[t.length-1],o&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(n){const y="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return t}}class ws{constructor(n){Se(this,"options");Se(this,"parser");this.options=n||mr}space(n){return""}code({text:n,lang:t,escaped:s}){var l;const o=(l=(t||"").match(/^\S*/))==null?void 0:l[0],a=n.replace(/\n$/,"")+`
`;return o?'<pre><code class="language-'+Fn(o)+'">'+(s?a:Fn(a,!0))+`</code></pre>
`:"<pre><code>"+(s?a:Fn(a,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${this.parser.parse(n)}</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:t}){return`<h${t}>${this.parser.parseInline(n)}</h${t}>
`}hr(n){return`<hr>
`}list(n){const t=n.ordered,s=n.start;let o="";for(let f=0;f<n.items.length;f++){const p=n.items[f];o+=this.listitem(p)}const a=t?"ol":"ul",l=t&&s!==1?' start="'+s+'"':"";return"<"+a+l+`>
`+o+"</"+a+`>
`}listitem(n){let t="";if(n.task){const s=this.checkbox({checked:!!n.checked});n.loose?n.tokens.length>0&&n.tokens[0].type==="paragraph"?(n.tokens[0].text=s+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=s+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",raw:s+" ",text:s+" "}):t+=s+" "}return t+=this.parser.parse(n.tokens,!!n.loose),`<li>${t}</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${this.parser.parseInline(n)}</p>
`}table(n){let t="",s="";for(let a=0;a<n.header.length;a++)s+=this.tablecell(n.header[a]);t+=this.tablerow({text:s});let o="";for(let a=0;a<n.rows.length;a++){const l=n.rows[a];s="";for(let f=0;f<l.length;f++)s+=this.tablecell(l[f]);o+=this.tablerow({text:s})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+o+`</table>
`}tablerow({text:n}){return`<tr>
${n}</tr>
`}tablecell(n){const t=this.parser.parseInline(n.tokens),s=n.header?"th":"td";return(n.align?`<${s} align="${n.align}">`:`<${s}>`)+t+`</${s}>
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${n}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:t,tokens:s}){const o=this.parser.parseInline(s),a=Xc(n);if(a===null)return o;n=a;let l='<a href="'+n+'"';return t&&(l+=' title="'+t+'"'),l+=">"+o+"</a>",l}image({href:n,title:t,text:s}){const o=Xc(n);if(o===null)return s;n=o;let a=`<img src="${n}" alt="${s}"`;return t&&(a+=` title="${t}"`),a+=">",a}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}}class Ha{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}}class Mn{constructor(n){Se(this,"options");Se(this,"renderer");Se(this,"textRenderer");this.options=n||mr,this.options.renderer=this.options.renderer||new ws,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ha}static parse(n,t){return new Mn(t).parse(n)}static parseInline(n,t){return new Mn(t).parseInline(n)}parse(n,t=!0){let s="";for(let o=0;o<n.length;o++){const a=n[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const f=a,p=this.options.extensions.renderers[f.type].call({parser:this},f);if(p!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type)){s+=p||"";continue}}const l=a;switch(l.type){case"space":{s+=this.renderer.space(l);continue}case"hr":{s+=this.renderer.hr(l);continue}case"heading":{s+=this.renderer.heading(l);continue}case"code":{s+=this.renderer.code(l);continue}case"table":{s+=this.renderer.table(l);continue}case"blockquote":{s+=this.renderer.blockquote(l);continue}case"list":{s+=this.renderer.list(l);continue}case"html":{s+=this.renderer.html(l);continue}case"paragraph":{s+=this.renderer.paragraph(l);continue}case"text":{let f=l,p=this.renderer.text(f);for(;o+1<n.length&&n[o+1].type==="text";)f=n[++o],p+=`
`+this.renderer.text(f);t?s+=this.renderer.paragraph({type:"paragraph",raw:p,text:p,tokens:[{type:"text",raw:p,text:p}]}):s+=p;continue}default:{const f='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return s}parseInline(n,t){t=t||this.renderer;let s="";for(let o=0;o<n.length;o++){const a=n[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const f=this.options.extensions.renderers[a.type].call({parser:this},a);if(f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){s+=f||"";continue}}const l=a;switch(l.type){case"escape":{s+=t.text(l);break}case"html":{s+=t.html(l);break}case"link":{s+=t.link(l);break}case"image":{s+=t.image(l);break}case"strong":{s+=t.strong(l);break}case"em":{s+=t.em(l);break}case"codespan":{s+=t.codespan(l);break}case"br":{s+=t.br(l);break}case"del":{s+=t.del(l);break}case"text":{s+=t.text(l);break}default:{const f='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return s}}class hi{constructor(n){Se(this,"options");Se(this,"block");this.options=n||mr}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}provideLexer(){return this.block?Nn.lex:Nn.lexInline}provideParser(){return this.block?Mn.parse:Mn.parseInline}}Se(hi,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));class mD{constructor(...n){Se(this,"defaults",Ma());Se(this,"options",this.setOptions);Se(this,"parse",this.parseMarkdown(!0));Se(this,"parseInline",this.parseMarkdown(!1));Se(this,"Parser",Mn);Se(this,"Renderer",ws);Se(this,"TextRenderer",Ha);Se(this,"Lexer",Nn);Se(this,"Tokenizer",Ns);Se(this,"Hooks",hi);this.use(...n)}walkTokens(n,t){var o,a;let s=[];for(const l of n)switch(s=s.concat(t.call(this,l)),l.type){case"table":{const f=l;for(const p of f.header)s=s.concat(this.walkTokens(p.tokens,t));for(const p of f.rows)for(const m of p)s=s.concat(this.walkTokens(m.tokens,t));break}case"list":{const f=l;s=s.concat(this.walkTokens(f.items,t));break}default:{const f=l;(a=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&a[f.type]?this.defaults.extensions.childTokens[f.type].forEach(p=>{const m=f[p].flat(1/0);s=s.concat(this.walkTokens(m,t))}):f.tokens&&(s=s.concat(this.walkTokens(f.tokens,t)))}}return s}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(s=>{const o={...s};if(o.async=this.defaults.async||o.async||!1,s.extensions&&(s.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const l=t.renderers[a.name];l?t.renderers[a.name]=function(...f){let p=a.renderer.apply(this,f);return p===!1&&(p=l.apply(this,f)),p}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[a.level];l?l.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),o.extensions=t),s.renderer){const a=this.defaults.renderer||new ws(this.defaults);for(const l in s.renderer){if(!(l in a))throw new Error(`renderer '${l}' does not exist`);if(["options","parser"].includes(l))continue;const f=l,p=s.renderer[f],m=a[f];a[f]=(...y)=>{let I=p.apply(a,y);return I===!1&&(I=m.apply(a,y)),I||""}}o.renderer=a}if(s.tokenizer){const a=this.defaults.tokenizer||new Ns(this.defaults);for(const l in s.tokenizer){if(!(l in a))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;const f=l,p=s.tokenizer[f],m=a[f];a[f]=(...y)=>{let I=p.apply(a,y);return I===!1&&(I=m.apply(a,y)),I}}o.tokenizer=a}if(s.hooks){const a=this.defaults.hooks||new hi;for(const l in s.hooks){if(!(l in a))throw new Error(`hook '${l}' does not exist`);if(["options","block"].includes(l))continue;const f=l,p=s.hooks[f],m=a[f];hi.passThroughHooks.has(l)?a[f]=y=>{if(this.defaults.async)return Promise.resolve(p.call(a,y)).then(O=>m.call(a,O));const I=p.call(a,y);return m.call(a,I)}:a[f]=(...y)=>{let I=p.apply(a,y);return I===!1&&(I=m.apply(a,y)),I}}o.hooks=a}if(s.walkTokens){const a=this.defaults.walkTokens,l=s.walkTokens;o.walkTokens=function(f){let p=[];return p.push(l.call(this,f)),a&&(p=p.concat(a.call(this,f))),p}}this.defaults={...this.defaults,...o}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return Nn.lex(n,t??this.defaults)}parser(n,t){return Mn.parse(n,t??this.defaults)}parseMarkdown(n){return(s,o)=>{const a={...o},l={...this.defaults,...a},f=this.onError(!!l.silent,!!l.async);if(this.defaults.async===!0&&a.async===!1)return f(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof s>"u"||s===null)return f(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return f(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));l.hooks&&(l.hooks.options=l,l.hooks.block=n);const p=l.hooks?l.hooks.provideLexer():n?Nn.lex:Nn.lexInline,m=l.hooks?l.hooks.provideParser():n?Mn.parse:Mn.parseInline;if(l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(s):s).then(y=>p(y,l)).then(y=>l.hooks?l.hooks.processAllTokens(y):y).then(y=>l.walkTokens?Promise.all(this.walkTokens(y,l.walkTokens)).then(()=>y):y).then(y=>m(y,l)).then(y=>l.hooks?l.hooks.postprocess(y):y).catch(f);try{l.hooks&&(s=l.hooks.preprocess(s));let y=p(s,l);l.hooks&&(y=l.hooks.processAllTokens(y)),l.walkTokens&&this.walkTokens(y,l.walkTokens);let I=m(y,l);return l.hooks&&(I=l.hooks.postprocess(I)),I}catch(y){return f(y)}}}onError(n,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const o="<p>An error occurred:</p><pre>"+Fn(s.message+"",!0)+"</pre>";return t?Promise.resolve(o):o}if(t)return Promise.reject(s);throw s}}}const fr=new mD;function Ie(r,n){return fr.parse(r,n)}Ie.options=Ie.setOptions=function(r){return fr.setOptions(r),Ie.defaults=fr.defaults,wf(Ie.defaults),Ie};Ie.getDefaults=Ma;Ie.defaults=mr;Ie.use=function(...r){return fr.use(...r),Ie.defaults=fr.defaults,wf(Ie.defaults),Ie};Ie.walkTokens=function(r,n){return fr.walkTokens(r,n)};Ie.parseInline=fr.parseInline;Ie.Parser=Mn;Ie.parser=Mn.parse;Ie.Renderer=ws;Ie.TextRenderer=Ha;Ie.Lexer=Nn;Ie.lexer=Nn.lex;Ie.Tokenizer=Ns;Ie.Hooks=hi;Ie.parse=Ie;Ie.options;Ie.setOptions;Ie.use;Ie.walkTokens;Ie.parseInline;Mn.parse;Nn.lex;function yD(r){return new Nn().lex(r)}const SD=()=>({heading:R0,blockquote:$0,list:G0,list_item:Q0,br:z0,code:J0,codespan:K0,table:tT,html:sT,paragraph:uT,link:fT,text:hT,def:yT,del:TT,em:_T,hr:AT,strong:bT,image:OT,space:Wc,escape:Wc}),ID=()=>({baseUrl:"/",slugger:new bf});function TD(){const r=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||r(n)},v0(()=>{console.warn=r})}function DD(r){let n,t;return n=new $s({props:{tokens:r[0],renderers:r[1],options:r[2]}}),{c(){jt(n.$$.fragment)},l(s){gr(n.$$.fragment,s)},m(s,o){Ht(n,s,o),t=!0},p(s,[o]){const a={};o&1&&(a.tokens=s[0]),o&2&&(a.renderers=s[1]),o&4&&(a.options=s[2]),n.$set(a)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){zt(n,s)}}}function ED(r,n,t){TD();let{source:s}=n,{options:o={}}=n,{renderers:a={}}=n,l,f,p;return r.$$set=m=>{"source"in m&&t(3,s=m.source),"options"in m&&t(4,o=m.options),"renderers"in m&&t(5,a=m.renderers)},r.$$.update=()=>{r.$$.dirty&56&&(t(0,l=yD(s)),t(1,f={...SD(),...a}),t(2,p={...ID(),...o}))},[l,f,p,s,o,a]}class Cv extends Be{constructor(n){super(),Pe(this,n,ED,DD,be,{source:3,options:4,renderers:5})}}const Ci={joinUrlPaths:Si,isRelative:Ii,generatePathSegment:Nf};var li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _D(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var xs={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */xs.exports;(function(r,n){(function(){var t,s="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",f="Invalid `variable` option passed into `_.template`",p="__lodash_hash_undefined__",m=500,y="__lodash_placeholder__",I=1,O=2,F=4,N=1,B=2,j=1,ce=2,Ae=4,ye=8,ke=16,He=32,We=64,Le=128,dt=256,k=512,X=30,an="...",kt=800,Jt=16,Ni=1,Sr=2,bi=3,Xt=1/0,ht=9007199254740991,Ir=17976931348623157e292,Zt=NaN,wn=4294967295,C=wn-1,V=wn>>>1,$=[["ary",Le],["bind",j],["bindKey",ce],["curry",ye],["curryRight",ke],["flip",k],["partial",He],["partialRight",We],["rearg",dt]],M="[object Arguments]",de="[object Array]",$e="[object AsyncFunction]",he="[object Boolean]",xn="[object Date]",Mr="[object DOMException]",Lt="[object Error]",tn="[object Function]",iu="[object GeneratorFunction]",Qn="[object Map]",Gr="[object Number]",Pp="[object Null]",gt="[object Object]",su="[object Promise]",$p="[object Proxy]",Vr="[object RegExp]",jn="[object Set]",qr="[object String]",wi="[object Symbol]",Up="[object Undefined]",Qr="[object WeakMap]",Mp="[object WeakSet]",jr="[object ArrayBuffer]",Tr="[object DataView]",Ws="[object Float32Array]",Js="[object Float64Array]",Xs="[object Int8Array]",Zs="[object Int16Array]",Ks="[object Int32Array]",eo="[object Uint8Array]",no="[object Uint8ClampedArray]",to="[object Uint16Array]",ro="[object Uint32Array]",Gp=/\b__p \+= '';/g,Vp=/\b(__p \+=) '' \+/g,qp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ou=/&(?:amp|lt|gt|quot|#39);/g,au=/[&<>"']/g,Qp=RegExp(ou.source),jp=RegExp(au.source),Hp=/<%-([\s\S]+?)%>/g,zp=/<%([\s\S]+?)%>/g,uu=/<%=([\s\S]+?)%>/g,Yp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Wp=/^\w*$/,Jp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,io=/[\\^$.*+?()[\]{}|]/g,Xp=RegExp(io.source),so=/^\s+/,Zp=/\s/,Kp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ed=/\{\n\/\* \[wrapped with (.+)\] \*/,nd=/,? & /,td=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,rd=/[()=,{}\[\]\/\s]/,id=/\\(\\)?/g,sd=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,lu=/\w*$/,od=/^[-+]0x[0-9a-f]+$/i,ad=/^0b[01]+$/i,ud=/^\[object .+?Constructor\]$/,ld=/^0o[0-7]+$/i,cd=/^(?:0|[1-9]\d*)$/,fd=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xi=/($^)/,pd=/['\n\r\u2028\u2029\\]/g,Oi="\\ud800-\\udfff",dd="\\u0300-\\u036f",hd="\\ufe20-\\ufe2f",gd="\\u20d0-\\u20ff",cu=dd+hd+gd,fu="\\u2700-\\u27bf",pu="a-z\\xdf-\\xf6\\xf8-\\xff",md="\\xac\\xb1\\xd7\\xf7",yd="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Sd="\\u2000-\\u206f",Id=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",du="A-Z\\xc0-\\xd6\\xd8-\\xde",hu="\\ufe0e\\ufe0f",gu=md+yd+Sd+Id,oo="['’]",Td="["+Oi+"]",mu="["+gu+"]",ki="["+cu+"]",yu="\\d+",Dd="["+fu+"]",Su="["+pu+"]",Iu="[^"+Oi+gu+yu+fu+pu+du+"]",ao="\\ud83c[\\udffb-\\udfff]",Ed="(?:"+ki+"|"+ao+")",Tu="[^"+Oi+"]",uo="(?:\\ud83c[\\udde6-\\uddff]){2}",lo="[\\ud800-\\udbff][\\udc00-\\udfff]",Dr="["+du+"]",Du="\\u200d",Eu="(?:"+Su+"|"+Iu+")",_d="(?:"+Dr+"|"+Iu+")",_u="(?:"+oo+"(?:d|ll|m|re|s|t|ve))?",vu="(?:"+oo+"(?:D|LL|M|RE|S|T|VE))?",Cu=Ed+"?",Au="["+hu+"]?",vd="(?:"+Du+"(?:"+[Tu,uo,lo].join("|")+")"+Au+Cu+")*",Cd="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ad="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fu=Au+Cu+vd,Fd="(?:"+[Dd,uo,lo].join("|")+")"+Fu,Nd="(?:"+[Tu+ki+"?",ki,uo,lo,Td].join("|")+")",bd=RegExp(oo,"g"),wd=RegExp(ki,"g"),co=RegExp(ao+"(?="+ao+")|"+Nd+Fu,"g"),xd=RegExp([Dr+"?"+Su+"+"+_u+"(?="+[mu,Dr,"$"].join("|")+")",_d+"+"+vu+"(?="+[mu,Dr+Eu,"$"].join("|")+")",Dr+"?"+Eu+"+"+_u,Dr+"+"+vu,Ad,Cd,yu,Fd].join("|"),"g"),Od=RegExp("["+Du+Oi+cu+hu+"]"),kd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ld=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Rd=-1,Fe={};Fe[Ws]=Fe[Js]=Fe[Xs]=Fe[Zs]=Fe[Ks]=Fe[eo]=Fe[no]=Fe[to]=Fe[ro]=!0,Fe[M]=Fe[de]=Fe[jr]=Fe[he]=Fe[Tr]=Fe[xn]=Fe[Lt]=Fe[tn]=Fe[Qn]=Fe[Gr]=Fe[gt]=Fe[Vr]=Fe[jn]=Fe[qr]=Fe[Qr]=!1;var ve={};ve[M]=ve[de]=ve[jr]=ve[Tr]=ve[he]=ve[xn]=ve[Ws]=ve[Js]=ve[Xs]=ve[Zs]=ve[Ks]=ve[Qn]=ve[Gr]=ve[gt]=ve[Vr]=ve[jn]=ve[qr]=ve[wi]=ve[eo]=ve[no]=ve[to]=ve[ro]=!0,ve[Lt]=ve[tn]=ve[Qr]=!1;var Bd={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Pd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$d={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Ud={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Md=parseFloat,Gd=parseInt,Nu=typeof li=="object"&&li&&li.Object===Object&&li,Vd=typeof self=="object"&&self&&self.Object===Object&&self,Ke=Nu||Vd||Function("return this")(),fo=n&&!n.nodeType&&n,Kt=fo&&!0&&r&&!r.nodeType&&r,bu=Kt&&Kt.exports===fo,po=bu&&Nu.process,On=function(){try{var E=Kt&&Kt.require&&Kt.require("util").types;return E||po&&po.binding&&po.binding("util")}catch{}}(),wu=On&&On.isArrayBuffer,xu=On&&On.isDate,Ou=On&&On.isMap,ku=On&&On.isRegExp,Lu=On&&On.isSet,Ru=On&&On.isTypedArray;function Tn(E,A,v){switch(v.length){case 0:return E.call(A);case 1:return E.call(A,v[0]);case 2:return E.call(A,v[0],v[1]);case 3:return E.call(A,v[0],v[1],v[2])}return E.apply(A,v)}function qd(E,A,v,G){for(var Z=-1,pe=E==null?0:E.length;++Z<pe;){var ze=E[Z];A(G,ze,v(ze),E)}return G}function kn(E,A){for(var v=-1,G=E==null?0:E.length;++v<G&&A(E[v],v,E)!==!1;);return E}function Qd(E,A){for(var v=E==null?0:E.length;v--&&A(E[v],v,E)!==!1;);return E}function Bu(E,A){for(var v=-1,G=E==null?0:E.length;++v<G;)if(!A(E[v],v,E))return!1;return!0}function Rt(E,A){for(var v=-1,G=E==null?0:E.length,Z=0,pe=[];++v<G;){var ze=E[v];A(ze,v,E)&&(pe[Z++]=ze)}return pe}function Li(E,A){var v=E==null?0:E.length;return!!v&&Er(E,A,0)>-1}function ho(E,A,v){for(var G=-1,Z=E==null?0:E.length;++G<Z;)if(v(A,E[G]))return!0;return!1}function Ne(E,A){for(var v=-1,G=E==null?0:E.length,Z=Array(G);++v<G;)Z[v]=A(E[v],v,E);return Z}function Bt(E,A){for(var v=-1,G=A.length,Z=E.length;++v<G;)E[Z+v]=A[v];return E}function go(E,A,v,G){var Z=-1,pe=E==null?0:E.length;for(G&&pe&&(v=E[++Z]);++Z<pe;)v=A(v,E[Z],Z,E);return v}function jd(E,A,v,G){var Z=E==null?0:E.length;for(G&&Z&&(v=E[--Z]);Z--;)v=A(v,E[Z],Z,E);return v}function mo(E,A){for(var v=-1,G=E==null?0:E.length;++v<G;)if(A(E[v],v,E))return!0;return!1}var Hd=yo("length");function zd(E){return E.split("")}function Yd(E){return E.match(td)||[]}function Pu(E,A,v){var G;return v(E,function(Z,pe,ze){if(A(Z,pe,ze))return G=pe,!1}),G}function Ri(E,A,v,G){for(var Z=E.length,pe=v+(G?1:-1);G?pe--:++pe<Z;)if(A(E[pe],pe,E))return pe;return-1}function Er(E,A,v){return A===A?oh(E,A,v):Ri(E,$u,v)}function Wd(E,A,v,G){for(var Z=v-1,pe=E.length;++Z<pe;)if(G(E[Z],A))return Z;return-1}function $u(E){return E!==E}function Uu(E,A){var v=E==null?0:E.length;return v?Io(E,A)/v:Zt}function yo(E){return function(A){return A==null?t:A[E]}}function So(E){return function(A){return E==null?t:E[A]}}function Mu(E,A,v,G,Z){return Z(E,function(pe,ze,Ee){v=G?(G=!1,pe):A(v,pe,ze,Ee)}),v}function Jd(E,A){var v=E.length;for(E.sort(A);v--;)E[v]=E[v].value;return E}function Io(E,A){for(var v,G=-1,Z=E.length;++G<Z;){var pe=A(E[G]);pe!==t&&(v=v===t?pe:v+pe)}return v}function To(E,A){for(var v=-1,G=Array(E);++v<E;)G[v]=A(v);return G}function Xd(E,A){return Ne(A,function(v){return[v,E[v]]})}function Gu(E){return E&&E.slice(0,ju(E)+1).replace(so,"")}function Dn(E){return function(A){return E(A)}}function Do(E,A){return Ne(A,function(v){return E[v]})}function Hr(E,A){return E.has(A)}function Vu(E,A){for(var v=-1,G=E.length;++v<G&&Er(A,E[v],0)>-1;);return v}function qu(E,A){for(var v=E.length;v--&&Er(A,E[v],0)>-1;);return v}function Zd(E,A){for(var v=E.length,G=0;v--;)E[v]===A&&++G;return G}var Kd=So(Bd),eh=So(Pd);function nh(E){return"\\"+Ud[E]}function th(E,A){return E==null?t:E[A]}function _r(E){return Od.test(E)}function rh(E){return kd.test(E)}function ih(E){for(var A,v=[];!(A=E.next()).done;)v.push(A.value);return v}function Eo(E){var A=-1,v=Array(E.size);return E.forEach(function(G,Z){v[++A]=[Z,G]}),v}function Qu(E,A){return function(v){return E(A(v))}}function Pt(E,A){for(var v=-1,G=E.length,Z=0,pe=[];++v<G;){var ze=E[v];(ze===A||ze===y)&&(E[v]=y,pe[Z++]=v)}return pe}function Bi(E){var A=-1,v=Array(E.size);return E.forEach(function(G){v[++A]=G}),v}function sh(E){var A=-1,v=Array(E.size);return E.forEach(function(G){v[++A]=[G,G]}),v}function oh(E,A,v){for(var G=v-1,Z=E.length;++G<Z;)if(E[G]===A)return G;return-1}function ah(E,A,v){for(var G=v+1;G--;)if(E[G]===A)return G;return G}function vr(E){return _r(E)?lh(E):Hd(E)}function Hn(E){return _r(E)?ch(E):zd(E)}function ju(E){for(var A=E.length;A--&&Zp.test(E.charAt(A)););return A}var uh=So($d);function lh(E){for(var A=co.lastIndex=0;co.test(E);)++A;return A}function ch(E){return E.match(co)||[]}function fh(E){return E.match(xd)||[]}var ph=function E(A){A=A==null?Ke:Cr.defaults(Ke.Object(),A,Cr.pick(Ke,Ld));var v=A.Array,G=A.Date,Z=A.Error,pe=A.Function,ze=A.Math,Ee=A.Object,_o=A.RegExp,dh=A.String,Ln=A.TypeError,Pi=v.prototype,hh=pe.prototype,Ar=Ee.prototype,$i=A["__core-js_shared__"],Ui=hh.toString,me=Ar.hasOwnProperty,gh=0,Hu=function(){var e=/[^.]+$/.exec($i&&$i.keys&&$i.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Mi=Ar.toString,mh=Ui.call(Ee),yh=Ke._,Sh=_o("^"+Ui.call(me).replace(io,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Gi=bu?A.Buffer:t,$t=A.Symbol,Vi=A.Uint8Array,zu=Gi?Gi.allocUnsafe:t,qi=Qu(Ee.getPrototypeOf,Ee),Yu=Ee.create,Wu=Ar.propertyIsEnumerable,Qi=Pi.splice,Ju=$t?$t.isConcatSpreadable:t,zr=$t?$t.iterator:t,er=$t?$t.toStringTag:t,ji=function(){try{var e=sr(Ee,"defineProperty");return e({},"",{}),e}catch{}}(),Ih=A.clearTimeout!==Ke.clearTimeout&&A.clearTimeout,Th=G&&G.now!==Ke.Date.now&&G.now,Dh=A.setTimeout!==Ke.setTimeout&&A.setTimeout,Hi=ze.ceil,zi=ze.floor,vo=Ee.getOwnPropertySymbols,Eh=Gi?Gi.isBuffer:t,Xu=A.isFinite,_h=Pi.join,vh=Qu(Ee.keys,Ee),Ye=ze.max,rn=ze.min,Ch=G.now,Ah=A.parseInt,Zu=ze.random,Fh=Pi.reverse,Co=sr(A,"DataView"),Yr=sr(A,"Map"),Ao=sr(A,"Promise"),Fr=sr(A,"Set"),Wr=sr(A,"WeakMap"),Jr=sr(Ee,"create"),Yi=Wr&&new Wr,Nr={},Nh=or(Co),bh=or(Yr),wh=or(Ao),xh=or(Fr),Oh=or(Wr),Wi=$t?$t.prototype:t,Xr=Wi?Wi.valueOf:t,Ku=Wi?Wi.toString:t;function h(e){if(Re(e)&&!K(e)&&!(e instanceof ae)){if(e instanceof Rn)return e;if(me.call(e,"__wrapped__"))return ec(e)}return new Rn(e)}var br=function(){function e(){}return function(i){if(!we(i))return{};if(Yu)return Yu(i);e.prototype=i;var u=new e;return e.prototype=t,u}}();function Ji(){}function Rn(e,i){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=t}h.templateSettings={escape:Hp,evaluate:zp,interpolate:uu,variable:"",imports:{_:h}},h.prototype=Ji.prototype,h.prototype.constructor=h,Rn.prototype=br(Ji.prototype),Rn.prototype.constructor=Rn;function ae(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=wn,this.__views__=[]}function kh(){var e=new ae(this.__wrapped__);return e.__actions__=dn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=dn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=dn(this.__views__),e}function Lh(){if(this.__filtered__){var e=new ae(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Rh(){var e=this.__wrapped__.value(),i=this.__dir__,u=K(e),c=i<0,d=u?e.length:0,g=zg(0,d,this.__views__),S=g.start,T=g.end,_=T-S,b=c?T:S-1,w=this.__iteratees__,L=w.length,P=0,Q=rn(_,this.__takeCount__);if(!u||!c&&d==_&&Q==_)return _l(e,this.__actions__);var Y=[];e:for(;_--&&P<Q;){b+=i;for(var te=-1,W=e[b];++te<L;){var se=w[te],le=se.iteratee,vn=se.type,cn=le(W);if(vn==Sr)W=cn;else if(!cn){if(vn==Ni)continue e;break e}}Y[P++]=W}return Y}ae.prototype=br(Ji.prototype),ae.prototype.constructor=ae;function nr(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function Bh(){this.__data__=Jr?Jr(null):{},this.size=0}function Ph(e){var i=this.has(e)&&delete this.__data__[e];return this.size-=i?1:0,i}function $h(e){var i=this.__data__;if(Jr){var u=i[e];return u===p?t:u}return me.call(i,e)?i[e]:t}function Uh(e){var i=this.__data__;return Jr?i[e]!==t:me.call(i,e)}function Mh(e,i){var u=this.__data__;return this.size+=this.has(e)?0:1,u[e]=Jr&&i===t?p:i,this}nr.prototype.clear=Bh,nr.prototype.delete=Ph,nr.prototype.get=$h,nr.prototype.has=Uh,nr.prototype.set=Mh;function mt(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function Gh(){this.__data__=[],this.size=0}function Vh(e){var i=this.__data__,u=Xi(i,e);if(u<0)return!1;var c=i.length-1;return u==c?i.pop():Qi.call(i,u,1),--this.size,!0}function qh(e){var i=this.__data__,u=Xi(i,e);return u<0?t:i[u][1]}function Qh(e){return Xi(this.__data__,e)>-1}function jh(e,i){var u=this.__data__,c=Xi(u,e);return c<0?(++this.size,u.push([e,i])):u[c][1]=i,this}mt.prototype.clear=Gh,mt.prototype.delete=Vh,mt.prototype.get=qh,mt.prototype.has=Qh,mt.prototype.set=jh;function yt(e){var i=-1,u=e==null?0:e.length;for(this.clear();++i<u;){var c=e[i];this.set(c[0],c[1])}}function Hh(){this.size=0,this.__data__={hash:new nr,map:new(Yr||mt),string:new nr}}function zh(e){var i=ls(this,e).delete(e);return this.size-=i?1:0,i}function Yh(e){return ls(this,e).get(e)}function Wh(e){return ls(this,e).has(e)}function Jh(e,i){var u=ls(this,e),c=u.size;return u.set(e,i),this.size+=u.size==c?0:1,this}yt.prototype.clear=Hh,yt.prototype.delete=zh,yt.prototype.get=Yh,yt.prototype.has=Wh,yt.prototype.set=Jh;function tr(e){var i=-1,u=e==null?0:e.length;for(this.__data__=new yt;++i<u;)this.add(e[i])}function Xh(e){return this.__data__.set(e,p),this}function Zh(e){return this.__data__.has(e)}tr.prototype.add=tr.prototype.push=Xh,tr.prototype.has=Zh;function zn(e){var i=this.__data__=new mt(e);this.size=i.size}function Kh(){this.__data__=new mt,this.size=0}function eg(e){var i=this.__data__,u=i.delete(e);return this.size=i.size,u}function ng(e){return this.__data__.get(e)}function tg(e){return this.__data__.has(e)}function rg(e,i){var u=this.__data__;if(u instanceof mt){var c=u.__data__;if(!Yr||c.length<o-1)return c.push([e,i]),this.size=++u.size,this;u=this.__data__=new yt(c)}return u.set(e,i),this.size=u.size,this}zn.prototype.clear=Kh,zn.prototype.delete=eg,zn.prototype.get=ng,zn.prototype.has=tg,zn.prototype.set=rg;function el(e,i){var u=K(e),c=!u&&ar(e),d=!u&&!c&&qt(e),g=!u&&!c&&!d&&kr(e),S=u||c||d||g,T=S?To(e.length,dh):[],_=T.length;for(var b in e)(i||me.call(e,b))&&!(S&&(b=="length"||d&&(b=="offset"||b=="parent")||g&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||Dt(b,_)))&&T.push(b);return T}function nl(e){var i=e.length;return i?e[Po(0,i-1)]:t}function ig(e,i){return cs(dn(e),rr(i,0,e.length))}function sg(e){return cs(dn(e))}function Fo(e,i,u){(u!==t&&!Yn(e[i],u)||u===t&&!(i in e))&&St(e,i,u)}function Zr(e,i,u){var c=e[i];(!(me.call(e,i)&&Yn(c,u))||u===t&&!(i in e))&&St(e,i,u)}function Xi(e,i){for(var u=e.length;u--;)if(Yn(e[u][0],i))return u;return-1}function og(e,i,u,c){return Ut(e,function(d,g,S){i(c,d,u(d),S)}),c}function tl(e,i){return e&&at(i,Je(i),e)}function ag(e,i){return e&&at(i,gn(i),e)}function St(e,i,u){i=="__proto__"&&ji?ji(e,i,{configurable:!0,enumerable:!0,value:u,writable:!0}):e[i]=u}function No(e,i){for(var u=-1,c=i.length,d=v(c),g=e==null;++u<c;)d[u]=g?t:ua(e,i[u]);return d}function rr(e,i,u){return e===e&&(u!==t&&(e=e<=u?e:u),i!==t&&(e=e>=i?e:i)),e}function Bn(e,i,u,c,d,g){var S,T=i&I,_=i&O,b=i&F;if(u&&(S=d?u(e,c,d,g):u(e)),S!==t)return S;if(!we(e))return e;var w=K(e);if(w){if(S=Wg(e),!T)return dn(e,S)}else{var L=sn(e),P=L==tn||L==iu;if(qt(e))return Al(e,T);if(L==gt||L==M||P&&!d){if(S=_||P?{}:jl(e),!T)return _?$g(e,ag(S,e)):Pg(e,tl(S,e))}else{if(!ve[L])return d?e:{};S=Jg(e,L,T)}}g||(g=new zn);var Q=g.get(e);if(Q)return Q;g.set(e,S),Tc(e)?e.forEach(function(W){S.add(Bn(W,i,u,W,e,g))}):Sc(e)&&e.forEach(function(W,se){S.set(se,Bn(W,i,u,se,e,g))});var Y=b?_?Yo:zo:_?gn:Je,te=w?t:Y(e);return kn(te||e,function(W,se){te&&(se=W,W=e[se]),Zr(S,se,Bn(W,i,u,se,e,g))}),S}function ug(e){var i=Je(e);return function(u){return rl(u,e,i)}}function rl(e,i,u){var c=u.length;if(e==null)return!c;for(e=Ee(e);c--;){var d=u[c],g=i[d],S=e[d];if(S===t&&!(d in e)||!g(S))return!1}return!0}function il(e,i,u){if(typeof e!="function")throw new Ln(l);return si(function(){e.apply(t,u)},i)}function Kr(e,i,u,c){var d=-1,g=Li,S=!0,T=e.length,_=[],b=i.length;if(!T)return _;u&&(i=Ne(i,Dn(u))),c?(g=ho,S=!1):i.length>=o&&(g=Hr,S=!1,i=new tr(i));e:for(;++d<T;){var w=e[d],L=u==null?w:u(w);if(w=c||w!==0?w:0,S&&L===L){for(var P=b;P--;)if(i[P]===L)continue e;_.push(w)}else g(i,L,c)||_.push(w)}return _}var Ut=xl(ot),sl=xl(wo,!0);function lg(e,i){var u=!0;return Ut(e,function(c,d,g){return u=!!i(c,d,g),u}),u}function Zi(e,i,u){for(var c=-1,d=e.length;++c<d;){var g=e[c],S=i(g);if(S!=null&&(T===t?S===S&&!_n(S):u(S,T)))var T=S,_=g}return _}function cg(e,i,u,c){var d=e.length;for(u=ne(u),u<0&&(u=-u>d?0:d+u),c=c===t||c>d?d:ne(c),c<0&&(c+=d),c=u>c?0:Ec(c);u<c;)e[u++]=i;return e}function ol(e,i){var u=[];return Ut(e,function(c,d,g){i(c,d,g)&&u.push(c)}),u}function en(e,i,u,c,d){var g=-1,S=e.length;for(u||(u=Zg),d||(d=[]);++g<S;){var T=e[g];i>0&&u(T)?i>1?en(T,i-1,u,c,d):Bt(d,T):c||(d[d.length]=T)}return d}var bo=Ol(),al=Ol(!0);function ot(e,i){return e&&bo(e,i,Je)}function wo(e,i){return e&&al(e,i,Je)}function Ki(e,i){return Rt(i,function(u){return Et(e[u])})}function ir(e,i){i=Gt(i,e);for(var u=0,c=i.length;e!=null&&u<c;)e=e[ut(i[u++])];return u&&u==c?e:t}function ul(e,i,u){var c=i(e);return K(e)?c:Bt(c,u(e))}function un(e){return e==null?e===t?Up:Pp:er&&er in Ee(e)?Hg(e):sm(e)}function xo(e,i){return e>i}function fg(e,i){return e!=null&&me.call(e,i)}function pg(e,i){return e!=null&&i in Ee(e)}function dg(e,i,u){return e>=rn(i,u)&&e<Ye(i,u)}function Oo(e,i,u){for(var c=u?ho:Li,d=e[0].length,g=e.length,S=g,T=v(g),_=1/0,b=[];S--;){var w=e[S];S&&i&&(w=Ne(w,Dn(i))),_=rn(w.length,_),T[S]=!u&&(i||d>=120&&w.length>=120)?new tr(S&&w):t}w=e[0];var L=-1,P=T[0];e:for(;++L<d&&b.length<_;){var Q=w[L],Y=i?i(Q):Q;if(Q=u||Q!==0?Q:0,!(P?Hr(P,Y):c(b,Y,u))){for(S=g;--S;){var te=T[S];if(!(te?Hr(te,Y):c(e[S],Y,u)))continue e}P&&P.push(Y),b.push(Q)}}return b}function hg(e,i,u,c){return ot(e,function(d,g,S){i(c,u(d),g,S)}),c}function ei(e,i,u){i=Gt(i,e),e=Wl(e,i);var c=e==null?e:e[ut($n(i))];return c==null?t:Tn(c,e,u)}function ll(e){return Re(e)&&un(e)==M}function gg(e){return Re(e)&&un(e)==jr}function mg(e){return Re(e)&&un(e)==xn}function ni(e,i,u,c,d){return e===i?!0:e==null||i==null||!Re(e)&&!Re(i)?e!==e&&i!==i:yg(e,i,u,c,ni,d)}function yg(e,i,u,c,d,g){var S=K(e),T=K(i),_=S?de:sn(e),b=T?de:sn(i);_=_==M?gt:_,b=b==M?gt:b;var w=_==gt,L=b==gt,P=_==b;if(P&&qt(e)){if(!qt(i))return!1;S=!0,w=!1}if(P&&!w)return g||(g=new zn),S||kr(e)?Vl(e,i,u,c,d,g):Qg(e,i,_,u,c,d,g);if(!(u&N)){var Q=w&&me.call(e,"__wrapped__"),Y=L&&me.call(i,"__wrapped__");if(Q||Y){var te=Q?e.value():e,W=Y?i.value():i;return g||(g=new zn),d(te,W,u,c,g)}}return P?(g||(g=new zn),jg(e,i,u,c,d,g)):!1}function Sg(e){return Re(e)&&sn(e)==Qn}function ko(e,i,u,c){var d=u.length,g=d,S=!c;if(e==null)return!g;for(e=Ee(e);d--;){var T=u[d];if(S&&T[2]?T[1]!==e[T[0]]:!(T[0]in e))return!1}for(;++d<g;){T=u[d];var _=T[0],b=e[_],w=T[1];if(S&&T[2]){if(b===t&&!(_ in e))return!1}else{var L=new zn;if(c)var P=c(b,w,_,e,i,L);if(!(P===t?ni(w,b,N|B,c,L):P))return!1}}return!0}function cl(e){if(!we(e)||em(e))return!1;var i=Et(e)?Sh:ud;return i.test(or(e))}function Ig(e){return Re(e)&&un(e)==Vr}function Tg(e){return Re(e)&&sn(e)==jn}function Dg(e){return Re(e)&&ms(e.length)&&!!Fe[un(e)]}function fl(e){return typeof e=="function"?e:e==null?mn:typeof e=="object"?K(e)?hl(e[0],e[1]):dl(e):kc(e)}function Lo(e){if(!ii(e))return vh(e);var i=[];for(var u in Ee(e))me.call(e,u)&&u!="constructor"&&i.push(u);return i}function Eg(e){if(!we(e))return im(e);var i=ii(e),u=[];for(var c in e)c=="constructor"&&(i||!me.call(e,c))||u.push(c);return u}function Ro(e,i){return e<i}function pl(e,i){var u=-1,c=hn(e)?v(e.length):[];return Ut(e,function(d,g,S){c[++u]=i(d,g,S)}),c}function dl(e){var i=Jo(e);return i.length==1&&i[0][2]?zl(i[0][0],i[0][1]):function(u){return u===e||ko(u,e,i)}}function hl(e,i){return Zo(e)&&Hl(i)?zl(ut(e),i):function(u){var c=ua(u,e);return c===t&&c===i?la(u,e):ni(i,c,N|B)}}function es(e,i,u,c,d){e!==i&&bo(i,function(g,S){if(d||(d=new zn),we(g))_g(e,i,S,u,es,c,d);else{var T=c?c(ea(e,S),g,S+"",e,i,d):t;T===t&&(T=g),Fo(e,S,T)}},gn)}function _g(e,i,u,c,d,g,S){var T=ea(e,u),_=ea(i,u),b=S.get(_);if(b){Fo(e,u,b);return}var w=g?g(T,_,u+"",e,i,S):t,L=w===t;if(L){var P=K(_),Q=!P&&qt(_),Y=!P&&!Q&&kr(_);w=_,P||Q||Y?K(T)?w=T:Ue(T)?w=dn(T):Q?(L=!1,w=Al(_,!0)):Y?(L=!1,w=Fl(_,!0)):w=[]:oi(_)||ar(_)?(w=T,ar(T)?w=_c(T):(!we(T)||Et(T))&&(w=jl(_))):L=!1}L&&(S.set(_,w),d(w,_,c,g,S),S.delete(_)),Fo(e,u,w)}function gl(e,i){var u=e.length;if(u)return i+=i<0?u:0,Dt(i,u)?e[i]:t}function ml(e,i,u){i.length?i=Ne(i,function(g){return K(g)?function(S){return ir(S,g.length===1?g[0]:g)}:g}):i=[mn];var c=-1;i=Ne(i,Dn(z()));var d=pl(e,function(g,S,T){var _=Ne(i,function(b){return b(g)});return{criteria:_,index:++c,value:g}});return Jd(d,function(g,S){return Bg(g,S,u)})}function vg(e,i){return yl(e,i,function(u,c){return la(e,c)})}function yl(e,i,u){for(var c=-1,d=i.length,g={};++c<d;){var S=i[c],T=ir(e,S);u(T,S)&&ti(g,Gt(S,e),T)}return g}function Cg(e){return function(i){return ir(i,e)}}function Bo(e,i,u,c){var d=c?Wd:Er,g=-1,S=i.length,T=e;for(e===i&&(i=dn(i)),u&&(T=Ne(e,Dn(u)));++g<S;)for(var _=0,b=i[g],w=u?u(b):b;(_=d(T,w,_,c))>-1;)T!==e&&Qi.call(T,_,1),Qi.call(e,_,1);return e}function Sl(e,i){for(var u=e?i.length:0,c=u-1;u--;){var d=i[u];if(u==c||d!==g){var g=d;Dt(d)?Qi.call(e,d,1):Mo(e,d)}}return e}function Po(e,i){return e+zi(Zu()*(i-e+1))}function Ag(e,i,u,c){for(var d=-1,g=Ye(Hi((i-e)/(u||1)),0),S=v(g);g--;)S[c?g:++d]=e,e+=u;return S}function $o(e,i){var u="";if(!e||i<1||i>ht)return u;do i%2&&(u+=e),i=zi(i/2),i&&(e+=e);while(i);return u}function re(e,i){return na(Yl(e,i,mn),e+"")}function Fg(e){return nl(Lr(e))}function Ng(e,i){var u=Lr(e);return cs(u,rr(i,0,u.length))}function ti(e,i,u,c){if(!we(e))return e;i=Gt(i,e);for(var d=-1,g=i.length,S=g-1,T=e;T!=null&&++d<g;){var _=ut(i[d]),b=u;if(_==="__proto__"||_==="constructor"||_==="prototype")return e;if(d!=S){var w=T[_];b=c?c(w,_,T):t,b===t&&(b=we(w)?w:Dt(i[d+1])?[]:{})}Zr(T,_,b),T=T[_]}return e}var Il=Yi?function(e,i){return Yi.set(e,i),e}:mn,bg=ji?function(e,i){return ji(e,"toString",{configurable:!0,enumerable:!1,value:fa(i),writable:!0})}:mn;function wg(e){return cs(Lr(e))}function Pn(e,i,u){var c=-1,d=e.length;i<0&&(i=-i>d?0:d+i),u=u>d?d:u,u<0&&(u+=d),d=i>u?0:u-i>>>0,i>>>=0;for(var g=v(d);++c<d;)g[c]=e[c+i];return g}function xg(e,i){var u;return Ut(e,function(c,d,g){return u=i(c,d,g),!u}),!!u}function ns(e,i,u){var c=0,d=e==null?c:e.length;if(typeof i=="number"&&i===i&&d<=V){for(;c<d;){var g=c+d>>>1,S=e[g];S!==null&&!_n(S)&&(u?S<=i:S<i)?c=g+1:d=g}return d}return Uo(e,i,mn,u)}function Uo(e,i,u,c){var d=0,g=e==null?0:e.length;if(g===0)return 0;i=u(i);for(var S=i!==i,T=i===null,_=_n(i),b=i===t;d<g;){var w=zi((d+g)/2),L=u(e[w]),P=L!==t,Q=L===null,Y=L===L,te=_n(L);if(S)var W=c||Y;else b?W=Y&&(c||P):T?W=Y&&P&&(c||!Q):_?W=Y&&P&&!Q&&(c||!te):Q||te?W=!1:W=c?L<=i:L<i;W?d=w+1:g=w}return rn(g,C)}function Tl(e,i){for(var u=-1,c=e.length,d=0,g=[];++u<c;){var S=e[u],T=i?i(S):S;if(!u||!Yn(T,_)){var _=T;g[d++]=S===0?0:S}}return g}function Dl(e){return typeof e=="number"?e:_n(e)?Zt:+e}function En(e){if(typeof e=="string")return e;if(K(e))return Ne(e,En)+"";if(_n(e))return Ku?Ku.call(e):"";var i=e+"";return i=="0"&&1/e==-1/0?"-0":i}function Mt(e,i,u){var c=-1,d=Li,g=e.length,S=!0,T=[],_=T;if(u)S=!1,d=ho;else if(g>=o){var b=i?null:Vg(e);if(b)return Bi(b);S=!1,d=Hr,_=new tr}else _=i?[]:T;e:for(;++c<g;){var w=e[c],L=i?i(w):w;if(w=u||w!==0?w:0,S&&L===L){for(var P=_.length;P--;)if(_[P]===L)continue e;i&&_.push(L),T.push(w)}else d(_,L,u)||(_!==T&&_.push(L),T.push(w))}return T}function Mo(e,i){return i=Gt(i,e),e=Wl(e,i),e==null||delete e[ut($n(i))]}function El(e,i,u,c){return ti(e,i,u(ir(e,i)),c)}function ts(e,i,u,c){for(var d=e.length,g=c?d:-1;(c?g--:++g<d)&&i(e[g],g,e););return u?Pn(e,c?0:g,c?g+1:d):Pn(e,c?g+1:0,c?d:g)}function _l(e,i){var u=e;return u instanceof ae&&(u=u.value()),go(i,function(c,d){return d.func.apply(d.thisArg,Bt([c],d.args))},u)}function Go(e,i,u){var c=e.length;if(c<2)return c?Mt(e[0]):[];for(var d=-1,g=v(c);++d<c;)for(var S=e[d],T=-1;++T<c;)T!=d&&(g[d]=Kr(g[d]||S,e[T],i,u));return Mt(en(g,1),i,u)}function vl(e,i,u){for(var c=-1,d=e.length,g=i.length,S={};++c<d;){var T=c<g?i[c]:t;u(S,e[c],T)}return S}function Vo(e){return Ue(e)?e:[]}function qo(e){return typeof e=="function"?e:mn}function Gt(e,i){return K(e)?e:Zo(e,i)?[e]:Kl(ge(e))}var Og=re;function Vt(e,i,u){var c=e.length;return u=u===t?c:u,!i&&u>=c?e:Pn(e,i,u)}var Cl=Ih||function(e){return Ke.clearTimeout(e)};function Al(e,i){if(i)return e.slice();var u=e.length,c=zu?zu(u):new e.constructor(u);return e.copy(c),c}function Qo(e){var i=new e.constructor(e.byteLength);return new Vi(i).set(new Vi(e)),i}function kg(e,i){var u=i?Qo(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.byteLength)}function Lg(e){var i=new e.constructor(e.source,lu.exec(e));return i.lastIndex=e.lastIndex,i}function Rg(e){return Xr?Ee(Xr.call(e)):{}}function Fl(e,i){var u=i?Qo(e.buffer):e.buffer;return new e.constructor(u,e.byteOffset,e.length)}function Nl(e,i){if(e!==i){var u=e!==t,c=e===null,d=e===e,g=_n(e),S=i!==t,T=i===null,_=i===i,b=_n(i);if(!T&&!b&&!g&&e>i||g&&S&&_&&!T&&!b||c&&S&&_||!u&&_||!d)return 1;if(!c&&!g&&!b&&e<i||b&&u&&d&&!c&&!g||T&&u&&d||!S&&d||!_)return-1}return 0}function Bg(e,i,u){for(var c=-1,d=e.criteria,g=i.criteria,S=d.length,T=u.length;++c<S;){var _=Nl(d[c],g[c]);if(_){if(c>=T)return _;var b=u[c];return _*(b=="desc"?-1:1)}}return e.index-i.index}function bl(e,i,u,c){for(var d=-1,g=e.length,S=u.length,T=-1,_=i.length,b=Ye(g-S,0),w=v(_+b),L=!c;++T<_;)w[T]=i[T];for(;++d<S;)(L||d<g)&&(w[u[d]]=e[d]);for(;b--;)w[T++]=e[d++];return w}function wl(e,i,u,c){for(var d=-1,g=e.length,S=-1,T=u.length,_=-1,b=i.length,w=Ye(g-T,0),L=v(w+b),P=!c;++d<w;)L[d]=e[d];for(var Q=d;++_<b;)L[Q+_]=i[_];for(;++S<T;)(P||d<g)&&(L[Q+u[S]]=e[d++]);return L}function dn(e,i){var u=-1,c=e.length;for(i||(i=v(c));++u<c;)i[u]=e[u];return i}function at(e,i,u,c){var d=!u;u||(u={});for(var g=-1,S=i.length;++g<S;){var T=i[g],_=c?c(u[T],e[T],T,u,e):t;_===t&&(_=e[T]),d?St(u,T,_):Zr(u,T,_)}return u}function Pg(e,i){return at(e,Xo(e),i)}function $g(e,i){return at(e,ql(e),i)}function rs(e,i){return function(u,c){var d=K(u)?qd:og,g=i?i():{};return d(u,e,z(c,2),g)}}function wr(e){return re(function(i,u){var c=-1,d=u.length,g=d>1?u[d-1]:t,S=d>2?u[2]:t;for(g=e.length>3&&typeof g=="function"?(d--,g):t,S&&ln(u[0],u[1],S)&&(g=d<3?t:g,d=1),i=Ee(i);++c<d;){var T=u[c];T&&e(i,T,c,g)}return i})}function xl(e,i){return function(u,c){if(u==null)return u;if(!hn(u))return e(u,c);for(var d=u.length,g=i?d:-1,S=Ee(u);(i?g--:++g<d)&&c(S[g],g,S)!==!1;);return u}}function Ol(e){return function(i,u,c){for(var d=-1,g=Ee(i),S=c(i),T=S.length;T--;){var _=S[e?T:++d];if(u(g[_],_,g)===!1)break}return i}}function Ug(e,i,u){var c=i&j,d=ri(e);function g(){var S=this&&this!==Ke&&this instanceof g?d:e;return S.apply(c?u:this,arguments)}return g}function kl(e){return function(i){i=ge(i);var u=_r(i)?Hn(i):t,c=u?u[0]:i.charAt(0),d=u?Vt(u,1).join(""):i.slice(1);return c[e]()+d}}function xr(e){return function(i){return go(xc(wc(i).replace(bd,"")),e,"")}}function ri(e){return function(){var i=arguments;switch(i.length){case 0:return new e;case 1:return new e(i[0]);case 2:return new e(i[0],i[1]);case 3:return new e(i[0],i[1],i[2]);case 4:return new e(i[0],i[1],i[2],i[3]);case 5:return new e(i[0],i[1],i[2],i[3],i[4]);case 6:return new e(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var u=br(e.prototype),c=e.apply(u,i);return we(c)?c:u}}function Mg(e,i,u){var c=ri(e);function d(){for(var g=arguments.length,S=v(g),T=g,_=Or(d);T--;)S[T]=arguments[T];var b=g<3&&S[0]!==_&&S[g-1]!==_?[]:Pt(S,_);if(g-=b.length,g<u)return $l(e,i,is,d.placeholder,t,S,b,t,t,u-g);var w=this&&this!==Ke&&this instanceof d?c:e;return Tn(w,this,S)}return d}function Ll(e){return function(i,u,c){var d=Ee(i);if(!hn(i)){var g=z(u,3);i=Je(i),u=function(T){return g(d[T],T,d)}}var S=e(i,u,c);return S>-1?d[g?i[S]:S]:t}}function Rl(e){return Tt(function(i){var u=i.length,c=u,d=Rn.prototype.thru;for(e&&i.reverse();c--;){var g=i[c];if(typeof g!="function")throw new Ln(l);if(d&&!S&&us(g)=="wrapper")var S=new Rn([],!0)}for(c=S?c:u;++c<u;){g=i[c];var T=us(g),_=T=="wrapper"?Wo(g):t;_&&Ko(_[0])&&_[1]==(Le|ye|He|dt)&&!_[4].length&&_[9]==1?S=S[us(_[0])].apply(S,_[3]):S=g.length==1&&Ko(g)?S[T]():S.thru(g)}return function(){var b=arguments,w=b[0];if(S&&b.length==1&&K(w))return S.plant(w).value();for(var L=0,P=u?i[L].apply(this,b):w;++L<u;)P=i[L].call(this,P);return P}})}function is(e,i,u,c,d,g,S,T,_,b){var w=i&Le,L=i&j,P=i&ce,Q=i&(ye|ke),Y=i&k,te=P?t:ri(e);function W(){for(var se=arguments.length,le=v(se),vn=se;vn--;)le[vn]=arguments[vn];if(Q)var cn=Or(W),Cn=Zd(le,cn);if(c&&(le=bl(le,c,d,Q)),g&&(le=wl(le,g,S,Q)),se-=Cn,Q&&se<b){var Me=Pt(le,cn);return $l(e,i,is,W.placeholder,u,le,Me,T,_,b-se)}var Wn=L?u:this,vt=P?Wn[e]:e;return se=le.length,T?le=om(le,T):Y&&se>1&&le.reverse(),w&&_<se&&(le.length=_),this&&this!==Ke&&this instanceof W&&(vt=te||ri(vt)),vt.apply(Wn,le)}return W}function Bl(e,i){return function(u,c){return hg(u,e,i(c),{})}}function ss(e,i){return function(u,c){var d;if(u===t&&c===t)return i;if(u!==t&&(d=u),c!==t){if(d===t)return c;typeof u=="string"||typeof c=="string"?(u=En(u),c=En(c)):(u=Dl(u),c=Dl(c)),d=e(u,c)}return d}}function jo(e){return Tt(function(i){return i=Ne(i,Dn(z())),re(function(u){var c=this;return e(i,function(d){return Tn(d,c,u)})})})}function os(e,i){i=i===t?" ":En(i);var u=i.length;if(u<2)return u?$o(i,e):i;var c=$o(i,Hi(e/vr(i)));return _r(i)?Vt(Hn(c),0,e).join(""):c.slice(0,e)}function Gg(e,i,u,c){var d=i&j,g=ri(e);function S(){for(var T=-1,_=arguments.length,b=-1,w=c.length,L=v(w+_),P=this&&this!==Ke&&this instanceof S?g:e;++b<w;)L[b]=c[b];for(;_--;)L[b++]=arguments[++T];return Tn(P,d?u:this,L)}return S}function Pl(e){return function(i,u,c){return c&&typeof c!="number"&&ln(i,u,c)&&(u=c=t),i=_t(i),u===t?(u=i,i=0):u=_t(u),c=c===t?i<u?1:-1:_t(c),Ag(i,u,c,e)}}function as(e){return function(i,u){return typeof i=="string"&&typeof u=="string"||(i=Un(i),u=Un(u)),e(i,u)}}function $l(e,i,u,c,d,g,S,T,_,b){var w=i&ye,L=w?S:t,P=w?t:S,Q=w?g:t,Y=w?t:g;i|=w?He:We,i&=~(w?We:He),i&Ae||(i&=-4);var te=[e,i,d,Q,L,Y,P,T,_,b],W=u.apply(t,te);return Ko(e)&&Jl(W,te),W.placeholder=c,Xl(W,e,i)}function Ho(e){var i=ze[e];return function(u,c){if(u=Un(u),c=c==null?0:rn(ne(c),292),c&&Xu(u)){var d=(ge(u)+"e").split("e"),g=i(d[0]+"e"+(+d[1]+c));return d=(ge(g)+"e").split("e"),+(d[0]+"e"+(+d[1]-c))}return i(u)}}var Vg=Fr&&1/Bi(new Fr([,-0]))[1]==Xt?function(e){return new Fr(e)}:ha;function Ul(e){return function(i){var u=sn(i);return u==Qn?Eo(i):u==jn?sh(i):Xd(i,e(i))}}function It(e,i,u,c,d,g,S,T){var _=i&ce;if(!_&&typeof e!="function")throw new Ln(l);var b=c?c.length:0;if(b||(i&=-97,c=d=t),S=S===t?S:Ye(ne(S),0),T=T===t?T:ne(T),b-=d?d.length:0,i&We){var w=c,L=d;c=d=t}var P=_?t:Wo(e),Q=[e,i,u,c,d,w,L,g,S,T];if(P&&rm(Q,P),e=Q[0],i=Q[1],u=Q[2],c=Q[3],d=Q[4],T=Q[9]=Q[9]===t?_?0:e.length:Ye(Q[9]-b,0),!T&&i&(ye|ke)&&(i&=-25),!i||i==j)var Y=Ug(e,i,u);else i==ye||i==ke?Y=Mg(e,i,T):(i==He||i==(j|He))&&!d.length?Y=Gg(e,i,u,c):Y=is.apply(t,Q);var te=P?Il:Jl;return Xl(te(Y,Q),e,i)}function Ml(e,i,u,c){return e===t||Yn(e,Ar[u])&&!me.call(c,u)?i:e}function Gl(e,i,u,c,d,g){return we(e)&&we(i)&&(g.set(i,e),es(e,i,t,Gl,g),g.delete(i)),e}function qg(e){return oi(e)?t:e}function Vl(e,i,u,c,d,g){var S=u&N,T=e.length,_=i.length;if(T!=_&&!(S&&_>T))return!1;var b=g.get(e),w=g.get(i);if(b&&w)return b==i&&w==e;var L=-1,P=!0,Q=u&B?new tr:t;for(g.set(e,i),g.set(i,e);++L<T;){var Y=e[L],te=i[L];if(c)var W=S?c(te,Y,L,i,e,g):c(Y,te,L,e,i,g);if(W!==t){if(W)continue;P=!1;break}if(Q){if(!mo(i,function(se,le){if(!Hr(Q,le)&&(Y===se||d(Y,se,u,c,g)))return Q.push(le)})){P=!1;break}}else if(!(Y===te||d(Y,te,u,c,g))){P=!1;break}}return g.delete(e),g.delete(i),P}function Qg(e,i,u,c,d,g,S){switch(u){case Tr:if(e.byteLength!=i.byteLength||e.byteOffset!=i.byteOffset)return!1;e=e.buffer,i=i.buffer;case jr:return!(e.byteLength!=i.byteLength||!g(new Vi(e),new Vi(i)));case he:case xn:case Gr:return Yn(+e,+i);case Lt:return e.name==i.name&&e.message==i.message;case Vr:case qr:return e==i+"";case Qn:var T=Eo;case jn:var _=c&N;if(T||(T=Bi),e.size!=i.size&&!_)return!1;var b=S.get(e);if(b)return b==i;c|=B,S.set(e,i);var w=Vl(T(e),T(i),c,d,g,S);return S.delete(e),w;case wi:if(Xr)return Xr.call(e)==Xr.call(i)}return!1}function jg(e,i,u,c,d,g){var S=u&N,T=zo(e),_=T.length,b=zo(i),w=b.length;if(_!=w&&!S)return!1;for(var L=_;L--;){var P=T[L];if(!(S?P in i:me.call(i,P)))return!1}var Q=g.get(e),Y=g.get(i);if(Q&&Y)return Q==i&&Y==e;var te=!0;g.set(e,i),g.set(i,e);for(var W=S;++L<_;){P=T[L];var se=e[P],le=i[P];if(c)var vn=S?c(le,se,P,i,e,g):c(se,le,P,e,i,g);if(!(vn===t?se===le||d(se,le,u,c,g):vn)){te=!1;break}W||(W=P=="constructor")}if(te&&!W){var cn=e.constructor,Cn=i.constructor;cn!=Cn&&"constructor"in e&&"constructor"in i&&!(typeof cn=="function"&&cn instanceof cn&&typeof Cn=="function"&&Cn instanceof Cn)&&(te=!1)}return g.delete(e),g.delete(i),te}function Tt(e){return na(Yl(e,t,rc),e+"")}function zo(e){return ul(e,Je,Xo)}function Yo(e){return ul(e,gn,ql)}var Wo=Yi?function(e){return Yi.get(e)}:ha;function us(e){for(var i=e.name+"",u=Nr[i],c=me.call(Nr,i)?u.length:0;c--;){var d=u[c],g=d.func;if(g==null||g==e)return d.name}return i}function Or(e){var i=me.call(h,"placeholder")?h:e;return i.placeholder}function z(){var e=h.iteratee||pa;return e=e===pa?fl:e,arguments.length?e(arguments[0],arguments[1]):e}function ls(e,i){var u=e.__data__;return Kg(i)?u[typeof i=="string"?"string":"hash"]:u.map}function Jo(e){for(var i=Je(e),u=i.length;u--;){var c=i[u],d=e[c];i[u]=[c,d,Hl(d)]}return i}function sr(e,i){var u=th(e,i);return cl(u)?u:t}function Hg(e){var i=me.call(e,er),u=e[er];try{e[er]=t;var c=!0}catch{}var d=Mi.call(e);return c&&(i?e[er]=u:delete e[er]),d}var Xo=vo?function(e){return e==null?[]:(e=Ee(e),Rt(vo(e),function(i){return Wu.call(e,i)}))}:ga,ql=vo?function(e){for(var i=[];e;)Bt(i,Xo(e)),e=qi(e);return i}:ga,sn=un;(Co&&sn(new Co(new ArrayBuffer(1)))!=Tr||Yr&&sn(new Yr)!=Qn||Ao&&sn(Ao.resolve())!=su||Fr&&sn(new Fr)!=jn||Wr&&sn(new Wr)!=Qr)&&(sn=function(e){var i=un(e),u=i==gt?e.constructor:t,c=u?or(u):"";if(c)switch(c){case Nh:return Tr;case bh:return Qn;case wh:return su;case xh:return jn;case Oh:return Qr}return i});function zg(e,i,u){for(var c=-1,d=u.length;++c<d;){var g=u[c],S=g.size;switch(g.type){case"drop":e+=S;break;case"dropRight":i-=S;break;case"take":i=rn(i,e+S);break;case"takeRight":e=Ye(e,i-S);break}}return{start:e,end:i}}function Yg(e){var i=e.match(ed);return i?i[1].split(nd):[]}function Ql(e,i,u){i=Gt(i,e);for(var c=-1,d=i.length,g=!1;++c<d;){var S=ut(i[c]);if(!(g=e!=null&&u(e,S)))break;e=e[S]}return g||++c!=d?g:(d=e==null?0:e.length,!!d&&ms(d)&&Dt(S,d)&&(K(e)||ar(e)))}function Wg(e){var i=e.length,u=new e.constructor(i);return i&&typeof e[0]=="string"&&me.call(e,"index")&&(u.index=e.index,u.input=e.input),u}function jl(e){return typeof e.constructor=="function"&&!ii(e)?br(qi(e)):{}}function Jg(e,i,u){var c=e.constructor;switch(i){case jr:return Qo(e);case he:case xn:return new c(+e);case Tr:return kg(e,u);case Ws:case Js:case Xs:case Zs:case Ks:case eo:case no:case to:case ro:return Fl(e,u);case Qn:return new c;case Gr:case qr:return new c(e);case Vr:return Lg(e);case jn:return new c;case wi:return Rg(e)}}function Xg(e,i){var u=i.length;if(!u)return e;var c=u-1;return i[c]=(u>1?"& ":"")+i[c],i=i.join(u>2?", ":" "),e.replace(Kp,`{
/* [wrapped with `+i+`] */
`)}function Zg(e){return K(e)||ar(e)||!!(Ju&&e&&e[Ju])}function Dt(e,i){var u=typeof e;return i=i??ht,!!i&&(u=="number"||u!="symbol"&&cd.test(e))&&e>-1&&e%1==0&&e<i}function ln(e,i,u){if(!we(u))return!1;var c=typeof i;return(c=="number"?hn(u)&&Dt(i,u.length):c=="string"&&i in u)?Yn(u[i],e):!1}function Zo(e,i){if(K(e))return!1;var u=typeof e;return u=="number"||u=="symbol"||u=="boolean"||e==null||_n(e)?!0:Wp.test(e)||!Yp.test(e)||i!=null&&e in Ee(i)}function Kg(e){var i=typeof e;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?e!=="__proto__":e===null}function Ko(e){var i=us(e),u=h[i];if(typeof u!="function"||!(i in ae.prototype))return!1;if(e===u)return!0;var c=Wo(u);return!!c&&e===c[0]}function em(e){return!!Hu&&Hu in e}var nm=$i?Et:ma;function ii(e){var i=e&&e.constructor,u=typeof i=="function"&&i.prototype||Ar;return e===u}function Hl(e){return e===e&&!we(e)}function zl(e,i){return function(u){return u==null?!1:u[e]===i&&(i!==t||e in Ee(u))}}function tm(e){var i=hs(e,function(c){return u.size===m&&u.clear(),c}),u=i.cache;return i}function rm(e,i){var u=e[1],c=i[1],d=u|c,g=d<(j|ce|Le),S=c==Le&&u==ye||c==Le&&u==dt&&e[7].length<=i[8]||c==(Le|dt)&&i[7].length<=i[8]&&u==ye;if(!(g||S))return e;c&j&&(e[2]=i[2],d|=u&j?0:Ae);var T=i[3];if(T){var _=e[3];e[3]=_?bl(_,T,i[4]):T,e[4]=_?Pt(e[3],y):i[4]}return T=i[5],T&&(_=e[5],e[5]=_?wl(_,T,i[6]):T,e[6]=_?Pt(e[5],y):i[6]),T=i[7],T&&(e[7]=T),c&Le&&(e[8]=e[8]==null?i[8]:rn(e[8],i[8])),e[9]==null&&(e[9]=i[9]),e[0]=i[0],e[1]=d,e}function im(e){var i=[];if(e!=null)for(var u in Ee(e))i.push(u);return i}function sm(e){return Mi.call(e)}function Yl(e,i,u){return i=Ye(i===t?e.length-1:i,0),function(){for(var c=arguments,d=-1,g=Ye(c.length-i,0),S=v(g);++d<g;)S[d]=c[i+d];d=-1;for(var T=v(i+1);++d<i;)T[d]=c[d];return T[i]=u(S),Tn(e,this,T)}}function Wl(e,i){return i.length<2?e:ir(e,Pn(i,0,-1))}function om(e,i){for(var u=e.length,c=rn(i.length,u),d=dn(e);c--;){var g=i[c];e[c]=Dt(g,u)?d[g]:t}return e}function ea(e,i){if(!(i==="constructor"&&typeof e[i]=="function")&&i!="__proto__")return e[i]}var Jl=Zl(Il),si=Dh||function(e,i){return Ke.setTimeout(e,i)},na=Zl(bg);function Xl(e,i,u){var c=i+"";return na(e,Xg(c,am(Yg(c),u)))}function Zl(e){var i=0,u=0;return function(){var c=Ch(),d=Jt-(c-u);if(u=c,d>0){if(++i>=kt)return arguments[0]}else i=0;return e.apply(t,arguments)}}function cs(e,i){var u=-1,c=e.length,d=c-1;for(i=i===t?c:i;++u<i;){var g=Po(u,d),S=e[g];e[g]=e[u],e[u]=S}return e.length=i,e}var Kl=tm(function(e){var i=[];return e.charCodeAt(0)===46&&i.push(""),e.replace(Jp,function(u,c,d,g){i.push(d?g.replace(id,"$1"):c||u)}),i});function ut(e){if(typeof e=="string"||_n(e))return e;var i=e+"";return i=="0"&&1/e==-1/0?"-0":i}function or(e){if(e!=null){try{return Ui.call(e)}catch{}try{return e+""}catch{}}return""}function am(e,i){return kn($,function(u){var c="_."+u[0];i&u[1]&&!Li(e,c)&&e.push(c)}),e.sort()}function ec(e){if(e instanceof ae)return e.clone();var i=new Rn(e.__wrapped__,e.__chain__);return i.__actions__=dn(e.__actions__),i.__index__=e.__index__,i.__values__=e.__values__,i}function um(e,i,u){(u?ln(e,i,u):i===t)?i=1:i=Ye(ne(i),0);var c=e==null?0:e.length;if(!c||i<1)return[];for(var d=0,g=0,S=v(Hi(c/i));d<c;)S[g++]=Pn(e,d,d+=i);return S}function lm(e){for(var i=-1,u=e==null?0:e.length,c=0,d=[];++i<u;){var g=e[i];g&&(d[c++]=g)}return d}function cm(){var e=arguments.length;if(!e)return[];for(var i=v(e-1),u=arguments[0],c=e;c--;)i[c-1]=arguments[c];return Bt(K(u)?dn(u):[u],en(i,1))}var fm=re(function(e,i){return Ue(e)?Kr(e,en(i,1,Ue,!0)):[]}),pm=re(function(e,i){var u=$n(i);return Ue(u)&&(u=t),Ue(e)?Kr(e,en(i,1,Ue,!0),z(u,2)):[]}),dm=re(function(e,i){var u=$n(i);return Ue(u)&&(u=t),Ue(e)?Kr(e,en(i,1,Ue,!0),t,u):[]});function hm(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),Pn(e,i<0?0:i,c)):[]}function gm(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),i=c-i,Pn(e,0,i<0?0:i)):[]}function mm(e,i){return e&&e.length?ts(e,z(i,3),!0,!0):[]}function ym(e,i){return e&&e.length?ts(e,z(i,3),!0):[]}function Sm(e,i,u,c){var d=e==null?0:e.length;return d?(u&&typeof u!="number"&&ln(e,i,u)&&(u=0,c=d),cg(e,i,u,c)):[]}function nc(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var d=u==null?0:ne(u);return d<0&&(d=Ye(c+d,0)),Ri(e,z(i,3),d)}function tc(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var d=c-1;return u!==t&&(d=ne(u),d=u<0?Ye(c+d,0):rn(d,c-1)),Ri(e,z(i,3),d,!0)}function rc(e){var i=e==null?0:e.length;return i?en(e,1):[]}function Im(e){var i=e==null?0:e.length;return i?en(e,Xt):[]}function Tm(e,i){var u=e==null?0:e.length;return u?(i=i===t?1:ne(i),en(e,i)):[]}function Dm(e){for(var i=-1,u=e==null?0:e.length,c={};++i<u;){var d=e[i];c[d[0]]=d[1]}return c}function ic(e){return e&&e.length?e[0]:t}function Em(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var d=u==null?0:ne(u);return d<0&&(d=Ye(c+d,0)),Er(e,i,d)}function _m(e){var i=e==null?0:e.length;return i?Pn(e,0,-1):[]}var vm=re(function(e){var i=Ne(e,Vo);return i.length&&i[0]===e[0]?Oo(i):[]}),Cm=re(function(e){var i=$n(e),u=Ne(e,Vo);return i===$n(u)?i=t:u.pop(),u.length&&u[0]===e[0]?Oo(u,z(i,2)):[]}),Am=re(function(e){var i=$n(e),u=Ne(e,Vo);return i=typeof i=="function"?i:t,i&&u.pop(),u.length&&u[0]===e[0]?Oo(u,t,i):[]});function Fm(e,i){return e==null?"":_h.call(e,i)}function $n(e){var i=e==null?0:e.length;return i?e[i-1]:t}function Nm(e,i,u){var c=e==null?0:e.length;if(!c)return-1;var d=c;return u!==t&&(d=ne(u),d=d<0?Ye(c+d,0):rn(d,c-1)),i===i?ah(e,i,d):Ri(e,$u,d,!0)}function bm(e,i){return e&&e.length?gl(e,ne(i)):t}var wm=re(sc);function sc(e,i){return e&&e.length&&i&&i.length?Bo(e,i):e}function xm(e,i,u){return e&&e.length&&i&&i.length?Bo(e,i,z(u,2)):e}function Om(e,i,u){return e&&e.length&&i&&i.length?Bo(e,i,t,u):e}var km=Tt(function(e,i){var u=e==null?0:e.length,c=No(e,i);return Sl(e,Ne(i,function(d){return Dt(d,u)?+d:d}).sort(Nl)),c});function Lm(e,i){var u=[];if(!(e&&e.length))return u;var c=-1,d=[],g=e.length;for(i=z(i,3);++c<g;){var S=e[c];i(S,c,e)&&(u.push(S),d.push(c))}return Sl(e,d),u}function ta(e){return e==null?e:Fh.call(e)}function Rm(e,i,u){var c=e==null?0:e.length;return c?(u&&typeof u!="number"&&ln(e,i,u)?(i=0,u=c):(i=i==null?0:ne(i),u=u===t?c:ne(u)),Pn(e,i,u)):[]}function Bm(e,i){return ns(e,i)}function Pm(e,i,u){return Uo(e,i,z(u,2))}function $m(e,i){var u=e==null?0:e.length;if(u){var c=ns(e,i);if(c<u&&Yn(e[c],i))return c}return-1}function Um(e,i){return ns(e,i,!0)}function Mm(e,i,u){return Uo(e,i,z(u,2),!0)}function Gm(e,i){var u=e==null?0:e.length;if(u){var c=ns(e,i,!0)-1;if(Yn(e[c],i))return c}return-1}function Vm(e){return e&&e.length?Tl(e):[]}function qm(e,i){return e&&e.length?Tl(e,z(i,2)):[]}function Qm(e){var i=e==null?0:e.length;return i?Pn(e,1,i):[]}function jm(e,i,u){return e&&e.length?(i=u||i===t?1:ne(i),Pn(e,0,i<0?0:i)):[]}function Hm(e,i,u){var c=e==null?0:e.length;return c?(i=u||i===t?1:ne(i),i=c-i,Pn(e,i<0?0:i,c)):[]}function zm(e,i){return e&&e.length?ts(e,z(i,3),!1,!0):[]}function Ym(e,i){return e&&e.length?ts(e,z(i,3)):[]}var Wm=re(function(e){return Mt(en(e,1,Ue,!0))}),Jm=re(function(e){var i=$n(e);return Ue(i)&&(i=t),Mt(en(e,1,Ue,!0),z(i,2))}),Xm=re(function(e){var i=$n(e);return i=typeof i=="function"?i:t,Mt(en(e,1,Ue,!0),t,i)});function Zm(e){return e&&e.length?Mt(e):[]}function Km(e,i){return e&&e.length?Mt(e,z(i,2)):[]}function ey(e,i){return i=typeof i=="function"?i:t,e&&e.length?Mt(e,t,i):[]}function ra(e){if(!(e&&e.length))return[];var i=0;return e=Rt(e,function(u){if(Ue(u))return i=Ye(u.length,i),!0}),To(i,function(u){return Ne(e,yo(u))})}function oc(e,i){if(!(e&&e.length))return[];var u=ra(e);return i==null?u:Ne(u,function(c){return Tn(i,t,c)})}var ny=re(function(e,i){return Ue(e)?Kr(e,i):[]}),ty=re(function(e){return Go(Rt(e,Ue))}),ry=re(function(e){var i=$n(e);return Ue(i)&&(i=t),Go(Rt(e,Ue),z(i,2))}),iy=re(function(e){var i=$n(e);return i=typeof i=="function"?i:t,Go(Rt(e,Ue),t,i)}),sy=re(ra);function oy(e,i){return vl(e||[],i||[],Zr)}function ay(e,i){return vl(e||[],i||[],ti)}var uy=re(function(e){var i=e.length,u=i>1?e[i-1]:t;return u=typeof u=="function"?(e.pop(),u):t,oc(e,u)});function ac(e){var i=h(e);return i.__chain__=!0,i}function ly(e,i){return i(e),e}function fs(e,i){return i(e)}var cy=Tt(function(e){var i=e.length,u=i?e[0]:0,c=this.__wrapped__,d=function(g){return No(g,e)};return i>1||this.__actions__.length||!(c instanceof ae)||!Dt(u)?this.thru(d):(c=c.slice(u,+u+(i?1:0)),c.__actions__.push({func:fs,args:[d],thisArg:t}),new Rn(c,this.__chain__).thru(function(g){return i&&!g.length&&g.push(t),g}))});function fy(){return ac(this)}function py(){return new Rn(this.value(),this.__chain__)}function dy(){this.__values__===t&&(this.__values__=Dc(this.value()));var e=this.__index__>=this.__values__.length,i=e?t:this.__values__[this.__index__++];return{done:e,value:i}}function hy(){return this}function gy(e){for(var i,u=this;u instanceof Ji;){var c=ec(u);c.__index__=0,c.__values__=t,i?d.__wrapped__=c:i=c;var d=c;u=u.__wrapped__}return d.__wrapped__=e,i}function my(){var e=this.__wrapped__;if(e instanceof ae){var i=e;return this.__actions__.length&&(i=new ae(this)),i=i.reverse(),i.__actions__.push({func:fs,args:[ta],thisArg:t}),new Rn(i,this.__chain__)}return this.thru(ta)}function yy(){return _l(this.__wrapped__,this.__actions__)}var Sy=rs(function(e,i,u){me.call(e,u)?++e[u]:St(e,u,1)});function Iy(e,i,u){var c=K(e)?Bu:lg;return u&&ln(e,i,u)&&(i=t),c(e,z(i,3))}function Ty(e,i){var u=K(e)?Rt:ol;return u(e,z(i,3))}var Dy=Ll(nc),Ey=Ll(tc);function _y(e,i){return en(ps(e,i),1)}function vy(e,i){return en(ps(e,i),Xt)}function Cy(e,i,u){return u=u===t?1:ne(u),en(ps(e,i),u)}function uc(e,i){var u=K(e)?kn:Ut;return u(e,z(i,3))}function lc(e,i){var u=K(e)?Qd:sl;return u(e,z(i,3))}var Ay=rs(function(e,i,u){me.call(e,u)?e[u].push(i):St(e,u,[i])});function Fy(e,i,u,c){e=hn(e)?e:Lr(e),u=u&&!c?ne(u):0;var d=e.length;return u<0&&(u=Ye(d+u,0)),ys(e)?u<=d&&e.indexOf(i,u)>-1:!!d&&Er(e,i,u)>-1}var Ny=re(function(e,i,u){var c=-1,d=typeof i=="function",g=hn(e)?v(e.length):[];return Ut(e,function(S){g[++c]=d?Tn(i,S,u):ei(S,i,u)}),g}),by=rs(function(e,i,u){St(e,u,i)});function ps(e,i){var u=K(e)?Ne:pl;return u(e,z(i,3))}function wy(e,i,u,c){return e==null?[]:(K(i)||(i=i==null?[]:[i]),u=c?t:u,K(u)||(u=u==null?[]:[u]),ml(e,i,u))}var xy=rs(function(e,i,u){e[u?0:1].push(i)},function(){return[[],[]]});function Oy(e,i,u){var c=K(e)?go:Mu,d=arguments.length<3;return c(e,z(i,4),u,d,Ut)}function ky(e,i,u){var c=K(e)?jd:Mu,d=arguments.length<3;return c(e,z(i,4),u,d,sl)}function Ly(e,i){var u=K(e)?Rt:ol;return u(e,gs(z(i,3)))}function Ry(e){var i=K(e)?nl:Fg;return i(e)}function By(e,i,u){(u?ln(e,i,u):i===t)?i=1:i=ne(i);var c=K(e)?ig:Ng;return c(e,i)}function Py(e){var i=K(e)?sg:wg;return i(e)}function $y(e){if(e==null)return 0;if(hn(e))return ys(e)?vr(e):e.length;var i=sn(e);return i==Qn||i==jn?e.size:Lo(e).length}function Uy(e,i,u){var c=K(e)?mo:xg;return u&&ln(e,i,u)&&(i=t),c(e,z(i,3))}var My=re(function(e,i){if(e==null)return[];var u=i.length;return u>1&&ln(e,i[0],i[1])?i=[]:u>2&&ln(i[0],i[1],i[2])&&(i=[i[0]]),ml(e,en(i,1),[])}),ds=Th||function(){return Ke.Date.now()};function Gy(e,i){if(typeof i!="function")throw new Ln(l);return e=ne(e),function(){if(--e<1)return i.apply(this,arguments)}}function cc(e,i,u){return i=u?t:i,i=e&&i==null?e.length:i,It(e,Le,t,t,t,t,i)}function fc(e,i){var u;if(typeof i!="function")throw new Ln(l);return e=ne(e),function(){return--e>0&&(u=i.apply(this,arguments)),e<=1&&(i=t),u}}var ia=re(function(e,i,u){var c=j;if(u.length){var d=Pt(u,Or(ia));c|=He}return It(e,c,i,u,d)}),pc=re(function(e,i,u){var c=j|ce;if(u.length){var d=Pt(u,Or(pc));c|=He}return It(i,c,e,u,d)});function dc(e,i,u){i=u?t:i;var c=It(e,ye,t,t,t,t,t,i);return c.placeholder=dc.placeholder,c}function hc(e,i,u){i=u?t:i;var c=It(e,ke,t,t,t,t,t,i);return c.placeholder=hc.placeholder,c}function gc(e,i,u){var c,d,g,S,T,_,b=0,w=!1,L=!1,P=!0;if(typeof e!="function")throw new Ln(l);i=Un(i)||0,we(u)&&(w=!!u.leading,L="maxWait"in u,g=L?Ye(Un(u.maxWait)||0,i):g,P="trailing"in u?!!u.trailing:P);function Q(Me){var Wn=c,vt=d;return c=d=t,b=Me,S=e.apply(vt,Wn),S}function Y(Me){return b=Me,T=si(se,i),w?Q(Me):S}function te(Me){var Wn=Me-_,vt=Me-b,Lc=i-Wn;return L?rn(Lc,g-vt):Lc}function W(Me){var Wn=Me-_,vt=Me-b;return _===t||Wn>=i||Wn<0||L&&vt>=g}function se(){var Me=ds();if(W(Me))return le(Me);T=si(se,te(Me))}function le(Me){return T=t,P&&c?Q(Me):(c=d=t,S)}function vn(){T!==t&&Cl(T),b=0,c=_=d=T=t}function cn(){return T===t?S:le(ds())}function Cn(){var Me=ds(),Wn=W(Me);if(c=arguments,d=this,_=Me,Wn){if(T===t)return Y(_);if(L)return Cl(T),T=si(se,i),Q(_)}return T===t&&(T=si(se,i)),S}return Cn.cancel=vn,Cn.flush=cn,Cn}var Vy=re(function(e,i){return il(e,1,i)}),qy=re(function(e,i,u){return il(e,Un(i)||0,u)});function Qy(e){return It(e,k)}function hs(e,i){if(typeof e!="function"||i!=null&&typeof i!="function")throw new Ln(l);var u=function(){var c=arguments,d=i?i.apply(this,c):c[0],g=u.cache;if(g.has(d))return g.get(d);var S=e.apply(this,c);return u.cache=g.set(d,S)||g,S};return u.cache=new(hs.Cache||yt),u}hs.Cache=yt;function gs(e){if(typeof e!="function")throw new Ln(l);return function(){var i=arguments;switch(i.length){case 0:return!e.call(this);case 1:return!e.call(this,i[0]);case 2:return!e.call(this,i[0],i[1]);case 3:return!e.call(this,i[0],i[1],i[2])}return!e.apply(this,i)}}function jy(e){return fc(2,e)}var Hy=Og(function(e,i){i=i.length==1&&K(i[0])?Ne(i[0],Dn(z())):Ne(en(i,1),Dn(z()));var u=i.length;return re(function(c){for(var d=-1,g=rn(c.length,u);++d<g;)c[d]=i[d].call(this,c[d]);return Tn(e,this,c)})}),sa=re(function(e,i){var u=Pt(i,Or(sa));return It(e,He,t,i,u)}),mc=re(function(e,i){var u=Pt(i,Or(mc));return It(e,We,t,i,u)}),zy=Tt(function(e,i){return It(e,dt,t,t,t,i)});function Yy(e,i){if(typeof e!="function")throw new Ln(l);return i=i===t?i:ne(i),re(e,i)}function Wy(e,i){if(typeof e!="function")throw new Ln(l);return i=i==null?0:Ye(ne(i),0),re(function(u){var c=u[i],d=Vt(u,0,i);return c&&Bt(d,c),Tn(e,this,d)})}function Jy(e,i,u){var c=!0,d=!0;if(typeof e!="function")throw new Ln(l);return we(u)&&(c="leading"in u?!!u.leading:c,d="trailing"in u?!!u.trailing:d),gc(e,i,{leading:c,maxWait:i,trailing:d})}function Xy(e){return cc(e,1)}function Zy(e,i){return sa(qo(i),e)}function Ky(){if(!arguments.length)return[];var e=arguments[0];return K(e)?e:[e]}function eS(e){return Bn(e,F)}function nS(e,i){return i=typeof i=="function"?i:t,Bn(e,F,i)}function tS(e){return Bn(e,I|F)}function rS(e,i){return i=typeof i=="function"?i:t,Bn(e,I|F,i)}function iS(e,i){return i==null||rl(e,i,Je(i))}function Yn(e,i){return e===i||e!==e&&i!==i}var sS=as(xo),oS=as(function(e,i){return e>=i}),ar=ll(function(){return arguments}())?ll:function(e){return Re(e)&&me.call(e,"callee")&&!Wu.call(e,"callee")},K=v.isArray,aS=wu?Dn(wu):gg;function hn(e){return e!=null&&ms(e.length)&&!Et(e)}function Ue(e){return Re(e)&&hn(e)}function uS(e){return e===!0||e===!1||Re(e)&&un(e)==he}var qt=Eh||ma,lS=xu?Dn(xu):mg;function cS(e){return Re(e)&&e.nodeType===1&&!oi(e)}function fS(e){if(e==null)return!0;if(hn(e)&&(K(e)||typeof e=="string"||typeof e.splice=="function"||qt(e)||kr(e)||ar(e)))return!e.length;var i=sn(e);if(i==Qn||i==jn)return!e.size;if(ii(e))return!Lo(e).length;for(var u in e)if(me.call(e,u))return!1;return!0}function pS(e,i){return ni(e,i)}function dS(e,i,u){u=typeof u=="function"?u:t;var c=u?u(e,i):t;return c===t?ni(e,i,t,u):!!c}function oa(e){if(!Re(e))return!1;var i=un(e);return i==Lt||i==Mr||typeof e.message=="string"&&typeof e.name=="string"&&!oi(e)}function hS(e){return typeof e=="number"&&Xu(e)}function Et(e){if(!we(e))return!1;var i=un(e);return i==tn||i==iu||i==$e||i==$p}function yc(e){return typeof e=="number"&&e==ne(e)}function ms(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ht}function we(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}function Re(e){return e!=null&&typeof e=="object"}var Sc=Ou?Dn(Ou):Sg;function gS(e,i){return e===i||ko(e,i,Jo(i))}function mS(e,i,u){return u=typeof u=="function"?u:t,ko(e,i,Jo(i),u)}function yS(e){return Ic(e)&&e!=+e}function SS(e){if(nm(e))throw new Z(a);return cl(e)}function IS(e){return e===null}function TS(e){return e==null}function Ic(e){return typeof e=="number"||Re(e)&&un(e)==Gr}function oi(e){if(!Re(e)||un(e)!=gt)return!1;var i=qi(e);if(i===null)return!0;var u=me.call(i,"constructor")&&i.constructor;return typeof u=="function"&&u instanceof u&&Ui.call(u)==mh}var aa=ku?Dn(ku):Ig;function DS(e){return yc(e)&&e>=-9007199254740991&&e<=ht}var Tc=Lu?Dn(Lu):Tg;function ys(e){return typeof e=="string"||!K(e)&&Re(e)&&un(e)==qr}function _n(e){return typeof e=="symbol"||Re(e)&&un(e)==wi}var kr=Ru?Dn(Ru):Dg;function ES(e){return e===t}function _S(e){return Re(e)&&sn(e)==Qr}function vS(e){return Re(e)&&un(e)==Mp}var CS=as(Ro),AS=as(function(e,i){return e<=i});function Dc(e){if(!e)return[];if(hn(e))return ys(e)?Hn(e):dn(e);if(zr&&e[zr])return ih(e[zr]());var i=sn(e),u=i==Qn?Eo:i==jn?Bi:Lr;return u(e)}function _t(e){if(!e)return e===0?e:0;if(e=Un(e),e===Xt||e===-1/0){var i=e<0?-1:1;return i*Ir}return e===e?e:0}function ne(e){var i=_t(e),u=i%1;return i===i?u?i-u:i:0}function Ec(e){return e?rr(ne(e),0,wn):0}function Un(e){if(typeof e=="number")return e;if(_n(e))return Zt;if(we(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=we(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=Gu(e);var u=ad.test(e);return u||ld.test(e)?Gd(e.slice(2),u?2:8):od.test(e)?Zt:+e}function _c(e){return at(e,gn(e))}function FS(e){return e?rr(ne(e),-9007199254740991,ht):e===0?e:0}function ge(e){return e==null?"":En(e)}var NS=wr(function(e,i){if(ii(i)||hn(i)){at(i,Je(i),e);return}for(var u in i)me.call(i,u)&&Zr(e,u,i[u])}),vc=wr(function(e,i){at(i,gn(i),e)}),Ss=wr(function(e,i,u,c){at(i,gn(i),e,c)}),bS=wr(function(e,i,u,c){at(i,Je(i),e,c)}),wS=Tt(No);function xS(e,i){var u=br(e);return i==null?u:tl(u,i)}var OS=re(function(e,i){e=Ee(e);var u=-1,c=i.length,d=c>2?i[2]:t;for(d&&ln(i[0],i[1],d)&&(c=1);++u<c;)for(var g=i[u],S=gn(g),T=-1,_=S.length;++T<_;){var b=S[T],w=e[b];(w===t||Yn(w,Ar[b])&&!me.call(e,b))&&(e[b]=g[b])}return e}),kS=re(function(e){return e.push(t,Gl),Tn(Cc,t,e)});function LS(e,i){return Pu(e,z(i,3),ot)}function RS(e,i){return Pu(e,z(i,3),wo)}function BS(e,i){return e==null?e:bo(e,z(i,3),gn)}function PS(e,i){return e==null?e:al(e,z(i,3),gn)}function $S(e,i){return e&&ot(e,z(i,3))}function US(e,i){return e&&wo(e,z(i,3))}function MS(e){return e==null?[]:Ki(e,Je(e))}function GS(e){return e==null?[]:Ki(e,gn(e))}function ua(e,i,u){var c=e==null?t:ir(e,i);return c===t?u:c}function VS(e,i){return e!=null&&Ql(e,i,fg)}function la(e,i){return e!=null&&Ql(e,i,pg)}var qS=Bl(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=Mi.call(i)),e[i]=u},fa(mn)),QS=Bl(function(e,i,u){i!=null&&typeof i.toString!="function"&&(i=Mi.call(i)),me.call(e,i)?e[i].push(u):e[i]=[u]},z),jS=re(ei);function Je(e){return hn(e)?el(e):Lo(e)}function gn(e){return hn(e)?el(e,!0):Eg(e)}function HS(e,i){var u={};return i=z(i,3),ot(e,function(c,d,g){St(u,i(c,d,g),c)}),u}function zS(e,i){var u={};return i=z(i,3),ot(e,function(c,d,g){St(u,d,i(c,d,g))}),u}var YS=wr(function(e,i,u){es(e,i,u)}),Cc=wr(function(e,i,u,c){es(e,i,u,c)}),WS=Tt(function(e,i){var u={};if(e==null)return u;var c=!1;i=Ne(i,function(g){return g=Gt(g,e),c||(c=g.length>1),g}),at(e,Yo(e),u),c&&(u=Bn(u,I|O|F,qg));for(var d=i.length;d--;)Mo(u,i[d]);return u});function JS(e,i){return Ac(e,gs(z(i)))}var XS=Tt(function(e,i){return e==null?{}:vg(e,i)});function Ac(e,i){if(e==null)return{};var u=Ne(Yo(e),function(c){return[c]});return i=z(i),yl(e,u,function(c,d){return i(c,d[0])})}function ZS(e,i,u){i=Gt(i,e);var c=-1,d=i.length;for(d||(d=1,e=t);++c<d;){var g=e==null?t:e[ut(i[c])];g===t&&(c=d,g=u),e=Et(g)?g.call(e):g}return e}function KS(e,i,u){return e==null?e:ti(e,i,u)}function eI(e,i,u,c){return c=typeof c=="function"?c:t,e==null?e:ti(e,i,u,c)}var Fc=Ul(Je),Nc=Ul(gn);function nI(e,i,u){var c=K(e),d=c||qt(e)||kr(e);if(i=z(i,4),u==null){var g=e&&e.constructor;d?u=c?new g:[]:we(e)?u=Et(g)?br(qi(e)):{}:u={}}return(d?kn:ot)(e,function(S,T,_){return i(u,S,T,_)}),u}function tI(e,i){return e==null?!0:Mo(e,i)}function rI(e,i,u){return e==null?e:El(e,i,qo(u))}function iI(e,i,u,c){return c=typeof c=="function"?c:t,e==null?e:El(e,i,qo(u),c)}function Lr(e){return e==null?[]:Do(e,Je(e))}function sI(e){return e==null?[]:Do(e,gn(e))}function oI(e,i,u){return u===t&&(u=i,i=t),u!==t&&(u=Un(u),u=u===u?u:0),i!==t&&(i=Un(i),i=i===i?i:0),rr(Un(e),i,u)}function aI(e,i,u){return i=_t(i),u===t?(u=i,i=0):u=_t(u),e=Un(e),dg(e,i,u)}function uI(e,i,u){if(u&&typeof u!="boolean"&&ln(e,i,u)&&(i=u=t),u===t&&(typeof i=="boolean"?(u=i,i=t):typeof e=="boolean"&&(u=e,e=t)),e===t&&i===t?(e=0,i=1):(e=_t(e),i===t?(i=e,e=0):i=_t(i)),e>i){var c=e;e=i,i=c}if(u||e%1||i%1){var d=Zu();return rn(e+d*(i-e+Md("1e-"+((d+"").length-1))),i)}return Po(e,i)}var lI=xr(function(e,i,u){return i=i.toLowerCase(),e+(u?bc(i):i)});function bc(e){return ca(ge(e).toLowerCase())}function wc(e){return e=ge(e),e&&e.replace(fd,Kd).replace(wd,"")}function cI(e,i,u){e=ge(e),i=En(i);var c=e.length;u=u===t?c:rr(ne(u),0,c);var d=u;return u-=i.length,u>=0&&e.slice(u,d)==i}function fI(e){return e=ge(e),e&&jp.test(e)?e.replace(au,eh):e}function pI(e){return e=ge(e),e&&Xp.test(e)?e.replace(io,"\\$&"):e}var dI=xr(function(e,i,u){return e+(u?"-":"")+i.toLowerCase()}),hI=xr(function(e,i,u){return e+(u?" ":"")+i.toLowerCase()}),gI=kl("toLowerCase");function mI(e,i,u){e=ge(e),i=ne(i);var c=i?vr(e):0;if(!i||c>=i)return e;var d=(i-c)/2;return os(zi(d),u)+e+os(Hi(d),u)}function yI(e,i,u){e=ge(e),i=ne(i);var c=i?vr(e):0;return i&&c<i?e+os(i-c,u):e}function SI(e,i,u){e=ge(e),i=ne(i);var c=i?vr(e):0;return i&&c<i?os(i-c,u)+e:e}function II(e,i,u){return u||i==null?i=0:i&&(i=+i),Ah(ge(e).replace(so,""),i||0)}function TI(e,i,u){return(u?ln(e,i,u):i===t)?i=1:i=ne(i),$o(ge(e),i)}function DI(){var e=arguments,i=ge(e[0]);return e.length<3?i:i.replace(e[1],e[2])}var EI=xr(function(e,i,u){return e+(u?"_":"")+i.toLowerCase()});function _I(e,i,u){return u&&typeof u!="number"&&ln(e,i,u)&&(i=u=t),u=u===t?wn:u>>>0,u?(e=ge(e),e&&(typeof i=="string"||i!=null&&!aa(i))&&(i=En(i),!i&&_r(e))?Vt(Hn(e),0,u):e.split(i,u)):[]}var vI=xr(function(e,i,u){return e+(u?" ":"")+ca(i)});function CI(e,i,u){return e=ge(e),u=u==null?0:rr(ne(u),0,e.length),i=En(i),e.slice(u,u+i.length)==i}function AI(e,i,u){var c=h.templateSettings;u&&ln(e,i,u)&&(i=t),e=ge(e),i=Ss({},i,c,Ml);var d=Ss({},i.imports,c.imports,Ml),g=Je(d),S=Do(d,g),T,_,b=0,w=i.interpolate||xi,L="__p += '",P=_o((i.escape||xi).source+"|"+w.source+"|"+(w===uu?sd:xi).source+"|"+(i.evaluate||xi).source+"|$","g"),Q="//# sourceURL="+(me.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Rd+"]")+`
`;e.replace(P,function(W,se,le,vn,cn,Cn){return le||(le=vn),L+=e.slice(b,Cn).replace(pd,nh),se&&(T=!0,L+=`' +
__e(`+se+`) +
'`),cn&&(_=!0,L+=`';
`+cn+`;
__p += '`),le&&(L+=`' +
((__t = (`+le+`)) == null ? '' : __t) +
'`),b=Cn+W.length,W}),L+=`';
`;var Y=me.call(i,"variable")&&i.variable;if(!Y)L=`with (obj) {
`+L+`
}
`;else if(rd.test(Y))throw new Z(f);L=(_?L.replace(Gp,""):L).replace(Vp,"$1").replace(qp,"$1;"),L="function("+(Y||"obj")+`) {
`+(Y?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(T?", __e = _.escape":"")+(_?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+L+`return __p
}`;var te=Oc(function(){return pe(g,Q+"return "+L).apply(t,S)});if(te.source=L,oa(te))throw te;return te}function FI(e){return ge(e).toLowerCase()}function NI(e){return ge(e).toUpperCase()}function bI(e,i,u){if(e=ge(e),e&&(u||i===t))return Gu(e);if(!e||!(i=En(i)))return e;var c=Hn(e),d=Hn(i),g=Vu(c,d),S=qu(c,d)+1;return Vt(c,g,S).join("")}function wI(e,i,u){if(e=ge(e),e&&(u||i===t))return e.slice(0,ju(e)+1);if(!e||!(i=En(i)))return e;var c=Hn(e),d=qu(c,Hn(i))+1;return Vt(c,0,d).join("")}function xI(e,i,u){if(e=ge(e),e&&(u||i===t))return e.replace(so,"");if(!e||!(i=En(i)))return e;var c=Hn(e),d=Vu(c,Hn(i));return Vt(c,d).join("")}function OI(e,i){var u=X,c=an;if(we(i)){var d="separator"in i?i.separator:d;u="length"in i?ne(i.length):u,c="omission"in i?En(i.omission):c}e=ge(e);var g=e.length;if(_r(e)){var S=Hn(e);g=S.length}if(u>=g)return e;var T=u-vr(c);if(T<1)return c;var _=S?Vt(S,0,T).join(""):e.slice(0,T);if(d===t)return _+c;if(S&&(T+=_.length-T),aa(d)){if(e.slice(T).search(d)){var b,w=_;for(d.global||(d=_o(d.source,ge(lu.exec(d))+"g")),d.lastIndex=0;b=d.exec(w);)var L=b.index;_=_.slice(0,L===t?T:L)}}else if(e.indexOf(En(d),T)!=T){var P=_.lastIndexOf(d);P>-1&&(_=_.slice(0,P))}return _+c}function kI(e){return e=ge(e),e&&Qp.test(e)?e.replace(ou,uh):e}var LI=xr(function(e,i,u){return e+(u?" ":"")+i.toUpperCase()}),ca=kl("toUpperCase");function xc(e,i,u){return e=ge(e),i=u?t:i,i===t?rh(e)?fh(e):Yd(e):e.match(i)||[]}var Oc=re(function(e,i){try{return Tn(e,t,i)}catch(u){return oa(u)?u:new Z(u)}}),RI=Tt(function(e,i){return kn(i,function(u){u=ut(u),St(e,u,ia(e[u],e))}),e});function BI(e){var i=e==null?0:e.length,u=z();return e=i?Ne(e,function(c){if(typeof c[1]!="function")throw new Ln(l);return[u(c[0]),c[1]]}):[],re(function(c){for(var d=-1;++d<i;){var g=e[d];if(Tn(g[0],this,c))return Tn(g[1],this,c)}})}function PI(e){return ug(Bn(e,I))}function fa(e){return function(){return e}}function $I(e,i){return e==null||e!==e?i:e}var UI=Rl(),MI=Rl(!0);function mn(e){return e}function pa(e){return fl(typeof e=="function"?e:Bn(e,I))}function GI(e){return dl(Bn(e,I))}function VI(e,i){return hl(e,Bn(i,I))}var qI=re(function(e,i){return function(u){return ei(u,e,i)}}),QI=re(function(e,i){return function(u){return ei(e,u,i)}});function da(e,i,u){var c=Je(i),d=Ki(i,c);u==null&&!(we(i)&&(d.length||!c.length))&&(u=i,i=e,e=this,d=Ki(i,Je(i)));var g=!(we(u)&&"chain"in u)||!!u.chain,S=Et(e);return kn(d,function(T){var _=i[T];e[T]=_,S&&(e.prototype[T]=function(){var b=this.__chain__;if(g||b){var w=e(this.__wrapped__),L=w.__actions__=dn(this.__actions__);return L.push({func:_,args:arguments,thisArg:e}),w.__chain__=b,w}return _.apply(e,Bt([this.value()],arguments))})}),e}function jI(){return Ke._===this&&(Ke._=yh),this}function ha(){}function HI(e){return e=ne(e),re(function(i){return gl(i,e)})}var zI=jo(Ne),YI=jo(Bu),WI=jo(mo);function kc(e){return Zo(e)?yo(ut(e)):Cg(e)}function JI(e){return function(i){return e==null?t:ir(e,i)}}var XI=Pl(),ZI=Pl(!0);function ga(){return[]}function ma(){return!1}function KI(){return{}}function e0(){return""}function n0(){return!0}function t0(e,i){if(e=ne(e),e<1||e>ht)return[];var u=wn,c=rn(e,wn);i=z(i),e-=wn;for(var d=To(c,i);++u<e;)i(u);return d}function r0(e){return K(e)?Ne(e,ut):_n(e)?[e]:dn(Kl(ge(e)))}function i0(e){var i=++gh;return ge(e)+i}var s0=ss(function(e,i){return e+i},0),o0=Ho("ceil"),a0=ss(function(e,i){return e/i},1),u0=Ho("floor");function l0(e){return e&&e.length?Zi(e,mn,xo):t}function c0(e,i){return e&&e.length?Zi(e,z(i,2),xo):t}function f0(e){return Uu(e,mn)}function p0(e,i){return Uu(e,z(i,2))}function d0(e){return e&&e.length?Zi(e,mn,Ro):t}function h0(e,i){return e&&e.length?Zi(e,z(i,2),Ro):t}var g0=ss(function(e,i){return e*i},1),m0=Ho("round"),y0=ss(function(e,i){return e-i},0);function S0(e){return e&&e.length?Io(e,mn):0}function I0(e,i){return e&&e.length?Io(e,z(i,2)):0}return h.after=Gy,h.ary=cc,h.assign=NS,h.assignIn=vc,h.assignInWith=Ss,h.assignWith=bS,h.at=wS,h.before=fc,h.bind=ia,h.bindAll=RI,h.bindKey=pc,h.castArray=Ky,h.chain=ac,h.chunk=um,h.compact=lm,h.concat=cm,h.cond=BI,h.conforms=PI,h.constant=fa,h.countBy=Sy,h.create=xS,h.curry=dc,h.curryRight=hc,h.debounce=gc,h.defaults=OS,h.defaultsDeep=kS,h.defer=Vy,h.delay=qy,h.difference=fm,h.differenceBy=pm,h.differenceWith=dm,h.drop=hm,h.dropRight=gm,h.dropRightWhile=mm,h.dropWhile=ym,h.fill=Sm,h.filter=Ty,h.flatMap=_y,h.flatMapDeep=vy,h.flatMapDepth=Cy,h.flatten=rc,h.flattenDeep=Im,h.flattenDepth=Tm,h.flip=Qy,h.flow=UI,h.flowRight=MI,h.fromPairs=Dm,h.functions=MS,h.functionsIn=GS,h.groupBy=Ay,h.initial=_m,h.intersection=vm,h.intersectionBy=Cm,h.intersectionWith=Am,h.invert=qS,h.invertBy=QS,h.invokeMap=Ny,h.iteratee=pa,h.keyBy=by,h.keys=Je,h.keysIn=gn,h.map=ps,h.mapKeys=HS,h.mapValues=zS,h.matches=GI,h.matchesProperty=VI,h.memoize=hs,h.merge=YS,h.mergeWith=Cc,h.method=qI,h.methodOf=QI,h.mixin=da,h.negate=gs,h.nthArg=HI,h.omit=WS,h.omitBy=JS,h.once=jy,h.orderBy=wy,h.over=zI,h.overArgs=Hy,h.overEvery=YI,h.overSome=WI,h.partial=sa,h.partialRight=mc,h.partition=xy,h.pick=XS,h.pickBy=Ac,h.property=kc,h.propertyOf=JI,h.pull=wm,h.pullAll=sc,h.pullAllBy=xm,h.pullAllWith=Om,h.pullAt=km,h.range=XI,h.rangeRight=ZI,h.rearg=zy,h.reject=Ly,h.remove=Lm,h.rest=Yy,h.reverse=ta,h.sampleSize=By,h.set=KS,h.setWith=eI,h.shuffle=Py,h.slice=Rm,h.sortBy=My,h.sortedUniq=Vm,h.sortedUniqBy=qm,h.split=_I,h.spread=Wy,h.tail=Qm,h.take=jm,h.takeRight=Hm,h.takeRightWhile=zm,h.takeWhile=Ym,h.tap=ly,h.throttle=Jy,h.thru=fs,h.toArray=Dc,h.toPairs=Fc,h.toPairsIn=Nc,h.toPath=r0,h.toPlainObject=_c,h.transform=nI,h.unary=Xy,h.union=Wm,h.unionBy=Jm,h.unionWith=Xm,h.uniq=Zm,h.uniqBy=Km,h.uniqWith=ey,h.unset=tI,h.unzip=ra,h.unzipWith=oc,h.update=rI,h.updateWith=iI,h.values=Lr,h.valuesIn=sI,h.without=ny,h.words=xc,h.wrap=Zy,h.xor=ty,h.xorBy=ry,h.xorWith=iy,h.zip=sy,h.zipObject=oy,h.zipObjectDeep=ay,h.zipWith=uy,h.entries=Fc,h.entriesIn=Nc,h.extend=vc,h.extendWith=Ss,da(h,h),h.add=s0,h.attempt=Oc,h.camelCase=lI,h.capitalize=bc,h.ceil=o0,h.clamp=oI,h.clone=eS,h.cloneDeep=tS,h.cloneDeepWith=rS,h.cloneWith=nS,h.conformsTo=iS,h.deburr=wc,h.defaultTo=$I,h.divide=a0,h.endsWith=cI,h.eq=Yn,h.escape=fI,h.escapeRegExp=pI,h.every=Iy,h.find=Dy,h.findIndex=nc,h.findKey=LS,h.findLast=Ey,h.findLastIndex=tc,h.findLastKey=RS,h.floor=u0,h.forEach=uc,h.forEachRight=lc,h.forIn=BS,h.forInRight=PS,h.forOwn=$S,h.forOwnRight=US,h.get=ua,h.gt=sS,h.gte=oS,h.has=VS,h.hasIn=la,h.head=ic,h.identity=mn,h.includes=Fy,h.indexOf=Em,h.inRange=aI,h.invoke=jS,h.isArguments=ar,h.isArray=K,h.isArrayBuffer=aS,h.isArrayLike=hn,h.isArrayLikeObject=Ue,h.isBoolean=uS,h.isBuffer=qt,h.isDate=lS,h.isElement=cS,h.isEmpty=fS,h.isEqual=pS,h.isEqualWith=dS,h.isError=oa,h.isFinite=hS,h.isFunction=Et,h.isInteger=yc,h.isLength=ms,h.isMap=Sc,h.isMatch=gS,h.isMatchWith=mS,h.isNaN=yS,h.isNative=SS,h.isNil=TS,h.isNull=IS,h.isNumber=Ic,h.isObject=we,h.isObjectLike=Re,h.isPlainObject=oi,h.isRegExp=aa,h.isSafeInteger=DS,h.isSet=Tc,h.isString=ys,h.isSymbol=_n,h.isTypedArray=kr,h.isUndefined=ES,h.isWeakMap=_S,h.isWeakSet=vS,h.join=Fm,h.kebabCase=dI,h.last=$n,h.lastIndexOf=Nm,h.lowerCase=hI,h.lowerFirst=gI,h.lt=CS,h.lte=AS,h.max=l0,h.maxBy=c0,h.mean=f0,h.meanBy=p0,h.min=d0,h.minBy=h0,h.stubArray=ga,h.stubFalse=ma,h.stubObject=KI,h.stubString=e0,h.stubTrue=n0,h.multiply=g0,h.nth=bm,h.noConflict=jI,h.noop=ha,h.now=ds,h.pad=mI,h.padEnd=yI,h.padStart=SI,h.parseInt=II,h.random=uI,h.reduce=Oy,h.reduceRight=ky,h.repeat=TI,h.replace=DI,h.result=ZS,h.round=m0,h.runInContext=E,h.sample=Ry,h.size=$y,h.snakeCase=EI,h.some=Uy,h.sortedIndex=Bm,h.sortedIndexBy=Pm,h.sortedIndexOf=$m,h.sortedLastIndex=Um,h.sortedLastIndexBy=Mm,h.sortedLastIndexOf=Gm,h.startCase=vI,h.startsWith=CI,h.subtract=y0,h.sum=S0,h.sumBy=I0,h.template=AI,h.times=t0,h.toFinite=_t,h.toInteger=ne,h.toLength=Ec,h.toLower=FI,h.toNumber=Un,h.toSafeInteger=FS,h.toString=ge,h.toUpper=NI,h.trim=bI,h.trimEnd=wI,h.trimStart=xI,h.truncate=OI,h.unescape=kI,h.uniqueId=i0,h.upperCase=LI,h.upperFirst=ca,h.each=uc,h.eachRight=lc,h.first=ic,da(h,function(){var e={};return ot(h,function(i,u){me.call(h.prototype,u)||(e[u]=i)}),e}(),{chain:!1}),h.VERSION=s,kn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){h[e].placeholder=h}),kn(["drop","take"],function(e,i){ae.prototype[e]=function(u){u=u===t?1:Ye(ne(u),0);var c=this.__filtered__&&!i?new ae(this):this.clone();return c.__filtered__?c.__takeCount__=rn(u,c.__takeCount__):c.__views__.push({size:rn(u,wn),type:e+(c.__dir__<0?"Right":"")}),c},ae.prototype[e+"Right"]=function(u){return this.reverse()[e](u).reverse()}}),kn(["filter","map","takeWhile"],function(e,i){var u=i+1,c=u==Ni||u==bi;ae.prototype[e]=function(d){var g=this.clone();return g.__iteratees__.push({iteratee:z(d,3),type:u}),g.__filtered__=g.__filtered__||c,g}}),kn(["head","last"],function(e,i){var u="take"+(i?"Right":"");ae.prototype[e]=function(){return this[u](1).value()[0]}}),kn(["initial","tail"],function(e,i){var u="drop"+(i?"":"Right");ae.prototype[e]=function(){return this.__filtered__?new ae(this):this[u](1)}}),ae.prototype.compact=function(){return this.filter(mn)},ae.prototype.find=function(e){return this.filter(e).head()},ae.prototype.findLast=function(e){return this.reverse().find(e)},ae.prototype.invokeMap=re(function(e,i){return typeof e=="function"?new ae(this):this.map(function(u){return ei(u,e,i)})}),ae.prototype.reject=function(e){return this.filter(gs(z(e)))},ae.prototype.slice=function(e,i){e=ne(e);var u=this;return u.__filtered__&&(e>0||i<0)?new ae(u):(e<0?u=u.takeRight(-e):e&&(u=u.drop(e)),i!==t&&(i=ne(i),u=i<0?u.dropRight(-i):u.take(i-e)),u)},ae.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},ae.prototype.toArray=function(){return this.take(wn)},ot(ae.prototype,function(e,i){var u=/^(?:filter|find|map|reject)|While$/.test(i),c=/^(?:head|last)$/.test(i),d=h[c?"take"+(i=="last"?"Right":""):i],g=c||/^find/.test(i);d&&(h.prototype[i]=function(){var S=this.__wrapped__,T=c?[1]:arguments,_=S instanceof ae,b=T[0],w=_||K(S),L=function(se){var le=d.apply(h,Bt([se],T));return c&&P?le[0]:le};w&&u&&typeof b=="function"&&b.length!=1&&(_=w=!1);var P=this.__chain__,Q=!!this.__actions__.length,Y=g&&!P,te=_&&!Q;if(!g&&w){S=te?S:new ae(this);var W=e.apply(S,T);return W.__actions__.push({func:fs,args:[L],thisArg:t}),new Rn(W,P)}return Y&&te?e.apply(this,T):(W=this.thru(L),Y?c?W.value()[0]:W.value():W)})}),kn(["pop","push","shift","sort","splice","unshift"],function(e){var i=Pi[e],u=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);h.prototype[e]=function(){var d=arguments;if(c&&!this.__chain__){var g=this.value();return i.apply(K(g)?g:[],d)}return this[u](function(S){return i.apply(K(S)?S:[],d)})}}),ot(ae.prototype,function(e,i){var u=h[i];if(u){var c=u.name+"";me.call(Nr,c)||(Nr[c]=[]),Nr[c].push({name:i,func:u})}}),Nr[is(t,ce).name]=[{name:"wrapper",func:t}],ae.prototype.clone=kh,ae.prototype.reverse=Lh,ae.prototype.value=Rh,h.prototype.at=cy,h.prototype.chain=fy,h.prototype.commit=py,h.prototype.next=dy,h.prototype.plant=gy,h.prototype.reverse=my,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=yy,h.prototype.first=h.prototype.head,zr&&(h.prototype[zr]=hy),h},Cr=ph();Kt?((Kt.exports=Cr)._=Cr,fo._=Cr):Ke._=Cr}).call(li)})(xs,xs.exports);var vD=xs.exports;const bt=_D(vD);function CD(){return{convert:r=>{if(r===null||r===void 0)return null;switch(typeof r){case"boolean":return r;case"string":{const n=r.toLowerCase().trim();return n==="true"||n==="t"||n==="1"}case"number":return r!==0;default:return null}},asString:r=>String(r),type:r=>r.boolean().optional()}}function An(r,n){const t=s=>n.convert(s[r]);return{name:AD(r),key:r,asEnv:s=>({[r]:n.asString(s)}),zod:{type:n.type},get:t,getOrDefault:(s,o)=>t(s)??o}}function AD(r){return r.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}An("MAGIDOC_GENERATE",CD());function Ts(r){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(r(n)).optional()}}function nf(r){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(r(n).optional()).optional()}}function Ds(){return{convert:r=>r==null||r===""?null:String(r),asString:r=>String(r),type:r=>r.string().optional()}}function tf(r){return{convert:n=>n==null||!r.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(r).optional()}}var Ms={APP_LOGO:An("APP_LOGO",Ds()),APP_TITLE:An("APP_TITLE",Ds()),APP_FAVICON:An("APP_FAVICON",Ds()),SITE_ROOT:An("SITE_ROOT",Ds()),SITE_META:An("SITE_META",nf(r=>r.string())),CUSTOM_STYLES:An("CUSTOM_STYLES",Ts(r=>r.string())),FIELDS_SORTING:An("FIELDS_SORTING",tf(["default","alphabetical"])),ARGUMENTS_SORTING:An("ARGUMENTS_SORTING",tf(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:An("QUERY_GENERATION_FACTORIES",nf(r=>r.union([r.string(),r.boolean(),r.number(),r.null(),r.record(r.unknown())]))),PAGES:An("PAGES",Ts(r=>{const n=r.lazy(()=>r.object({title:r.string().min(1),content:r.union([r.array(n),r.string().min(1)])}));return n})),EXTERNAL_LINKS:An("EXTERNAL_LINKS",Ts(r=>r.object({label:r.string().min(1),href:r.string().min(1),position:r.union([r.literal("header"),r.literal("navigation")]).optional(),kind:r.string().min(1).optional(),group:r.string().min(1).optional()}))),DIRECTIVES:An("DIRECTIVES",Ts(r=>r.object({name:r.string().min(1),args:r.array(r.string())})))};const FD="/BC_GQL_Magidoc",ND="https://support.bigcommerce.com/favicon.ico",bD="https://storage.googleapis.com/s.mkswft.com/RmlsZTo3NzQyZWFmYy1iMTY5LTQxNzItYTcxNi1iNWRjNzA1YWRjMDA=/bg-image.webp",wD="BigCommerce B2B Edition GraphQL Docs",xD=`[{"title":"BigCommerce B2b Edition GraphQL Docs","content":[{"title":"Welcome","content":"\\n # Welcome to the BigCommerce B2B Edition GraphQL Docs\\n \\n These docs were autogenerated with [Magidoc.js](https://magidoc.js.org/).\\n \\n ## About This Documentation\\n \\n Here you'll find everything you need to get started with the BigCommerce B2B Edition GraphQL endpoint:\\n - Querying order and customer data\\n - Managing products\\n - Working with B2B accounts, and more\\n \\n ## Additional Resources\\n \\n - [B2B Edition Overview](https://support.bigcommerce.com/s/article/B2B-Edition#docs)  \\n - [B2B Edition Developer Docs](https://developer.bigcommerce.com/b2b-edition/apis)\\n \\n Also see the standard [BigCommerce GraphQL Playground](https://api-b2b.bigcommerce.com/graphql/playground)\\n           "}]}]`,OD='{"GenericScalar":{"example":"my-generic-value"},"Decimal":123.45,"Date":"2025-01-01","JSONString":"{\\"some\\":\\"json\\"}","ProductQuantity":10,"CurrencyDecimalPlaces":2}',kD="true",Mf={SITE_ROOT:FD,APP_FAVICON:ND,APP_LOGO:bD,APP_TITLE:wD,PAGES:xD,QUERY_GENERATION_FACTORIES:OD,MAGIDOC_GENERATE:kD};function Av(r){return r.get(Mf)}function Gs(r,n){return r.getOrDefault(Mf,n)}function Vs(){return Gs(Ms.SITE_ROOT,C0)}class LD{constructor(n){Se(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var gi;(function(r){r.UNION="union",r.ARGUMENT="argument",r.FIELD="field"})(gi||(gi={}));function fe(r,n){if(!!!r)throw new Error(n)}function wt(r){return typeof r=="object"&&r!==null}function Kn(r,n){if(!!!r)throw new Error(n??"Unexpected invariant triggered.")}const RD=/\r\n|[\n\r]/g;function Aa(r,n){let t=0,s=1;for(const o of r.body.matchAll(RD)){if(typeof o.index=="number"||Kn(!1),o.index>=n)break;t=o.index+o[0].length,s+=1}return{line:s,column:n+1-t}}function BD(r){return Gf(r.source,Aa(r.source,r.start))}function Gf(r,n){const t=r.locationOffset.column-1,s="".padStart(t)+r.body,o=n.line-1,a=r.locationOffset.line-1,l=n.line+a,f=n.line===1?t:0,p=n.column+f,m=`${r.name}:${l}:${p}
`,y=s.split(/\r\n|[\n\r]/g),I=y[o];if(I.length>120){const O=Math.floor(p/80),F=p%80,N=[];for(let B=0;B<I.length;B+=80)N.push(I.slice(B,B+80));return m+rf([[`${l} |`,N[0]],...N.slice(1,O+1).map(B=>["|",B]),["|","^".padStart(F)],["|",N[O+1]]])}return m+rf([[`${l-1} |`,y[o-1]],[`${l} |`,I],["|","^".padStart(p)],[`${l+1} |`,y[o+1]]])}function rf(r){const n=r.filter(([s,o])=>o!==void 0),t=Math.max(...n.map(([s])=>s.length));return n.map(([s,o])=>s.padStart(t)+(o?" "+o:"")).join(`
`)}function PD(r){const n=r[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:r[1],positions:r[2],path:r[3],originalError:r[4],extensions:r[5]}:n}class R extends Error{constructor(n,...t){var s,o,a;const{nodes:l,source:f,positions:p,path:m,originalError:y,extensions:I}=PD(t);super(n),this.name="GraphQLError",this.path=m??void 0,this.originalError=y??void 0,this.nodes=sf(Array.isArray(l)?l:l?[l]:void 0);const O=sf((s=this.nodes)===null||s===void 0?void 0:s.map(N=>N.loc).filter(N=>N!=null));this.source=f??(O==null||(o=O[0])===null||o===void 0?void 0:o.source),this.positions=p??(O==null?void 0:O.map(N=>N.start)),this.locations=p&&f?p.map(N=>Aa(f,N)):O==null?void 0:O.map(N=>Aa(N.source,N.start));const F=wt(y==null?void 0:y.extensions)?y==null?void 0:y.extensions:void 0;this.extensions=(a=I??F)!==null&&a!==void 0?a:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),y!=null&&y.stack?Object.defineProperty(this,"stack",{value:y.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,R):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+BD(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+Gf(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function sf(r){return r===void 0||r.length===0?void 0:r}function Xe(r,n,t){return new R(`Syntax Error: ${t}`,{source:r,positions:[n]})}class $D{constructor(n,t,s){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Vf{constructor(n,t,s,o,a,l){this.kind=n,this.start=t,this.end=s,this.line=o,this.column=a,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const qf={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},UD=new Set(Object.keys(qf));function of(r){const n=r==null?void 0:r.kind;return typeof n=="string"&&UD.has(n)}var Gn;(function(r){r.QUERY="query",r.MUTATION="mutation",r.SUBSCRIPTION="subscription"})(Gn||(Gn={}));var H;(function(r){r.QUERY="QUERY",r.MUTATION="MUTATION",r.SUBSCRIPTION="SUBSCRIPTION",r.FIELD="FIELD",r.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",r.FRAGMENT_SPREAD="FRAGMENT_SPREAD",r.INLINE_FRAGMENT="INLINE_FRAGMENT",r.VARIABLE_DEFINITION="VARIABLE_DEFINITION",r.SCHEMA="SCHEMA",r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.FIELD_DEFINITION="FIELD_DEFINITION",r.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.ENUM_VALUE="ENUM_VALUE",r.INPUT_OBJECT="INPUT_OBJECT",r.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(H||(H={}));var D;(function(r){r.NAME="Name",r.DOCUMENT="Document",r.OPERATION_DEFINITION="OperationDefinition",r.VARIABLE_DEFINITION="VariableDefinition",r.SELECTION_SET="SelectionSet",r.FIELD="Field",r.ARGUMENT="Argument",r.FRAGMENT_SPREAD="FragmentSpread",r.INLINE_FRAGMENT="InlineFragment",r.FRAGMENT_DEFINITION="FragmentDefinition",r.VARIABLE="Variable",r.INT="IntValue",r.FLOAT="FloatValue",r.STRING="StringValue",r.BOOLEAN="BooleanValue",r.NULL="NullValue",r.ENUM="EnumValue",r.LIST="ListValue",r.OBJECT="ObjectValue",r.OBJECT_FIELD="ObjectField",r.DIRECTIVE="Directive",r.NAMED_TYPE="NamedType",r.LIST_TYPE="ListType",r.NON_NULL_TYPE="NonNullType",r.SCHEMA_DEFINITION="SchemaDefinition",r.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",r.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",r.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",r.FIELD_DEFINITION="FieldDefinition",r.INPUT_VALUE_DEFINITION="InputValueDefinition",r.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",r.UNION_TYPE_DEFINITION="UnionTypeDefinition",r.ENUM_TYPE_DEFINITION="EnumTypeDefinition",r.ENUM_VALUE_DEFINITION="EnumValueDefinition",r.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",r.DIRECTIVE_DEFINITION="DirectiveDefinition",r.SCHEMA_EXTENSION="SchemaExtension",r.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",r.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",r.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",r.UNION_TYPE_EXTENSION="UnionTypeExtension",r.ENUM_TYPE_EXTENSION="EnumTypeExtension",r.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(D||(D={}));function Fa(r){return r===9||r===32}function Ti(r){return r>=48&&r<=57}function Qf(r){return r>=97&&r<=122||r>=65&&r<=90}function za(r){return Qf(r)||r===95}function jf(r){return Qf(r)||Ti(r)||r===95}function MD(r){var n;let t=Number.MAX_SAFE_INTEGER,s=null,o=-1;for(let l=0;l<r.length;++l){var a;const f=r[l],p=GD(f);p!==f.length&&(s=(a=s)!==null&&a!==void 0?a:l,o=l,l!==0&&p<t&&(t=p))}return r.map((l,f)=>f===0?l:l.slice(t)).slice((n=s)!==null&&n!==void 0?n:0,o+1)}function GD(r){let n=0;for(;n<r.length&&Fa(r.charCodeAt(n));)++n;return n}function VD(r,n){const t=r.replace(/"""/g,'\\"""'),s=t.split(/\r\n|[\n\r]/g),o=s.length===1,a=s.length>1&&s.slice(1).every(F=>F.length===0||Fa(F.charCodeAt(0))),l=t.endsWith('\\"""'),f=r.endsWith('"')&&!l,p=r.endsWith("\\"),m=f||p,y=!o||r.length>70||m||a||l;let I="";const O=o&&Fa(r.charCodeAt(0));return(y&&!O||a)&&(I+=`
`),I+=t,(y||m)&&(I+=`
`),'"""'+I+'"""'}var x;(function(r){r.SOF="<SOF>",r.EOF="<EOF>",r.BANG="!",r.DOLLAR="$",r.AMP="&",r.PAREN_L="(",r.PAREN_R=")",r.SPREAD="...",r.COLON=":",r.EQUALS="=",r.AT="@",r.BRACKET_L="[",r.BRACKET_R="]",r.BRACE_L="{",r.PIPE="|",r.BRACE_R="}",r.NAME="Name",r.INT="Int",r.FLOAT="Float",r.STRING="String",r.BLOCK_STRING="BlockString",r.COMMENT="Comment"})(x||(x={}));class qD{constructor(n){const t=new Vf(x.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==x.EOF)do if(n.next)n=n.next;else{const t=jD(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===x.COMMENT);return n}}function QD(r){return r===x.BANG||r===x.DOLLAR||r===x.AMP||r===x.PAREN_L||r===x.PAREN_R||r===x.SPREAD||r===x.COLON||r===x.EQUALS||r===x.AT||r===x.BRACKET_L||r===x.BRACKET_R||r===x.BRACE_L||r===x.PIPE||r===x.BRACE_R}function $r(r){return r>=0&&r<=55295||r>=57344&&r<=1114111}function qs(r,n){return Hf(r.charCodeAt(n))&&zf(r.charCodeAt(n+1))}function Hf(r){return r>=55296&&r<=56319}function zf(r){return r>=56320&&r<=57343}function pr(r,n){const t=r.source.body.codePointAt(n);if(t===void 0)return x.EOF;if(t>=32&&t<=126){const s=String.fromCodePoint(t);return s==='"'?`'"'`:`"${s}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function qe(r,n,t,s,o){const a=r.line,l=1+t-r.lineStart;return new Vf(n,t,s,a,l,o)}function jD(r,n){const t=r.source.body,s=t.length;let o=n;for(;o<s;){const a=t.charCodeAt(o);switch(a){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++r.line,r.lineStart=o;continue;case 13:t.charCodeAt(o+1)===10?o+=2:++o,++r.line,r.lineStart=o;continue;case 35:return HD(r,o);case 33:return qe(r,x.BANG,o,o+1);case 36:return qe(r,x.DOLLAR,o,o+1);case 38:return qe(r,x.AMP,o,o+1);case 40:return qe(r,x.PAREN_L,o,o+1);case 41:return qe(r,x.PAREN_R,o,o+1);case 46:if(t.charCodeAt(o+1)===46&&t.charCodeAt(o+2)===46)return qe(r,x.SPREAD,o,o+3);break;case 58:return qe(r,x.COLON,o,o+1);case 61:return qe(r,x.EQUALS,o,o+1);case 64:return qe(r,x.AT,o,o+1);case 91:return qe(r,x.BRACKET_L,o,o+1);case 93:return qe(r,x.BRACKET_R,o,o+1);case 123:return qe(r,x.BRACE_L,o,o+1);case 124:return qe(r,x.PIPE,o,o+1);case 125:return qe(r,x.BRACE_R,o,o+1);case 34:return t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34?ZD(r,o):YD(r,o)}if(Ti(a)||a===45)return zD(r,o,a);if(za(a))return KD(r,o);throw Xe(r.source,o,a===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:$r(a)||qs(t,o)?`Unexpected character: ${pr(r,o)}.`:`Invalid character: ${pr(r,o)}.`)}return qe(r,x.EOF,s,s)}function HD(r,n){const t=r.source.body,s=t.length;let o=n+1;for(;o<s;){const a=t.charCodeAt(o);if(a===10||a===13)break;if($r(a))++o;else if(qs(t,o))o+=2;else break}return qe(r,x.COMMENT,n,o,t.slice(n+1,o))}function zD(r,n,t){const s=r.source.body;let o=n,a=t,l=!1;if(a===45&&(a=s.charCodeAt(++o)),a===48){if(a=s.charCodeAt(++o),Ti(a))throw Xe(r.source,o,`Invalid number, unexpected digit after 0: ${pr(r,o)}.`)}else o=Ia(r,o,a),a=s.charCodeAt(o);if(a===46&&(l=!0,a=s.charCodeAt(++o),o=Ia(r,o,a),a=s.charCodeAt(o)),(a===69||a===101)&&(l=!0,a=s.charCodeAt(++o),(a===43||a===45)&&(a=s.charCodeAt(++o)),o=Ia(r,o,a),a=s.charCodeAt(o)),a===46||za(a))throw Xe(r.source,o,`Invalid number, expected digit but got: ${pr(r,o)}.`);return qe(r,l?x.FLOAT:x.INT,n,o,s.slice(n,o))}function Ia(r,n,t){if(!Ti(t))throw Xe(r.source,n,`Invalid number, expected digit but got: ${pr(r,n)}.`);const s=r.source.body;let o=n+1;for(;Ti(s.charCodeAt(o));)++o;return o}function YD(r,n){const t=r.source.body,s=t.length;let o=n+1,a=o,l="";for(;o<s;){const f=t.charCodeAt(o);if(f===34)return l+=t.slice(a,o),qe(r,x.STRING,n,o+1,l);if(f===92){l+=t.slice(a,o);const p=t.charCodeAt(o+1)===117?t.charCodeAt(o+2)===123?WD(r,o):JD(r,o):XD(r,o);l+=p.value,o+=p.size,a=o;continue}if(f===10||f===13)break;if($r(f))++o;else if(qs(t,o))o+=2;else throw Xe(r.source,o,`Invalid character within String: ${pr(r,o)}.`)}throw Xe(r.source,o,"Unterminated string.")}function WD(r,n){const t=r.source.body;let s=0,o=3;for(;o<12;){const a=t.charCodeAt(n+o++);if(a===125){if(o<5||!$r(s))break;return{value:String.fromCodePoint(s),size:o}}if(s=s<<4|ci(a),s<0)break}throw Xe(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+o)}".`)}function JD(r,n){const t=r.source.body,s=af(t,n+2);if($r(s))return{value:String.fromCodePoint(s),size:6};if(Hf(s)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const o=af(t,n+8);if(zf(o))return{value:String.fromCodePoint(s,o),size:12}}throw Xe(r.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function af(r,n){return ci(r.charCodeAt(n))<<12|ci(r.charCodeAt(n+1))<<8|ci(r.charCodeAt(n+2))<<4|ci(r.charCodeAt(n+3))}function ci(r){return r>=48&&r<=57?r-48:r>=65&&r<=70?r-55:r>=97&&r<=102?r-87:-1}function XD(r,n){const t=r.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Xe(r.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function ZD(r,n){const t=r.source.body,s=t.length;let o=r.lineStart,a=n+3,l=a,f="";const p=[];for(;a<s;){const m=t.charCodeAt(a);if(m===34&&t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34){f+=t.slice(l,a),p.push(f);const y=qe(r,x.BLOCK_STRING,n,a+3,MD(p).join(`
`));return r.line+=p.length-1,r.lineStart=o,y}if(m===92&&t.charCodeAt(a+1)===34&&t.charCodeAt(a+2)===34&&t.charCodeAt(a+3)===34){f+=t.slice(l,a),l=a+1,a+=4;continue}if(m===10||m===13){f+=t.slice(l,a),p.push(f),m===13&&t.charCodeAt(a+1)===10?a+=2:++a,f="",l=a,o=a;continue}if($r(m))++a;else if(qs(t,a))a+=2;else throw Xe(r.source,a,`Invalid character within String: ${pr(r,a)}.`)}throw Xe(r.source,a,"Unterminated string.")}function KD(r,n){const t=r.source.body,s=t.length;let o=n+1;for(;o<s;){const a=t.charCodeAt(o);if(jf(a))++o;else break}return qe(r,x.NAME,n,o,t.slice(n,o))}const eE=10,Yf=2;function U(r){return Qs(r,[])}function Qs(r,n){switch(typeof r){case"string":return JSON.stringify(r);case"function":return r.name?`[function ${r.name}]`:"[function]";case"object":return nE(r,n);default:return String(r)}}function nE(r,n){if(r===null)return"null";if(n.includes(r))return"[Circular]";const t=[...n,r];if(tE(r)){const s=r.toJSON();if(s!==r)return typeof s=="string"?s:Qs(s,t)}else if(Array.isArray(r))return iE(r,t);return rE(r,t)}function tE(r){return typeof r.toJSON=="function"}function rE(r,n){const t=Object.entries(r);return t.length===0?"{}":n.length>Yf?"["+sE(r)+"]":"{ "+t.map(([o,a])=>o+": "+Qs(a,n)).join(", ")+" }"}function iE(r,n){if(r.length===0)return"[]";if(n.length>Yf)return"[Array]";const t=Math.min(eE,r.length),s=r.length-t,o=[];for(let a=0;a<t;++a)o.push(Qs(r[a],n));return s===1?o.push("... 1 more item"):s>1&&o.push(`... ${s} more items`),"["+o.join(", ")+"]"}function sE(r){const n=Object.prototype.toString.call(r).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof r.constructor=="function"){const t=r.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const oE=globalThis.process&&!0,pt=oE?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var s;const o=t.prototype[Symbol.toStringTag],a=Symbol.toStringTag in n?n[Symbol.toStringTag]:(s=n.constructor)===null||s===void 0?void 0:s.name;if(o===a){const l=U(n);throw new Error(`Cannot use ${o} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class Wf{constructor(n,t="GraphQL request",s={line:1,column:1}){typeof n=="string"||fe(!1,`Body must be a string. Received: ${U(n)}.`),this.body=n,this.name=t,this.locationOffset=s,this.locationOffset.line>0||fe(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||fe(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function aE(r){return pt(r,Wf)}function uE(r,n){return new Jf(r,n).parseDocument()}function lE(r,n){const t=new Jf(r,n);t.expectToken(x.SOF);const s=t.parseValueLiteral(!1);return t.expectToken(x.EOF),s}class Jf{constructor(n,t={}){const s=aE(n)?n:new Wf(n);this._lexer=new qD(s),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(x.NAME);return this.node(n,{kind:D.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:D.DOCUMENT,definitions:this.many(x.SOF,this.parseDefinition,x.EOF)})}parseDefinition(){if(this.peek(x.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===x.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Xe(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(x.BRACE_L))return this.node(n,{kind:D.OPERATION_DEFINITION,operation:Gn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let s;return this.peek(x.NAME)&&(s=this.parseName()),this.node(n,{kind:D.OPERATION_DEFINITION,operation:t,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(x.NAME);switch(n.value){case"query":return Gn.QUERY;case"mutation":return Gn.MUTATION;case"subscription":return Gn.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(x.PAREN_L,this.parseVariableDefinition,x.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:D.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(x.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(x.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(x.DOLLAR),this.node(n,{kind:D.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:D.SELECTION_SET,selections:this.many(x.BRACE_L,this.parseSelection,x.BRACE_R)})}parseSelection(){return this.peek(x.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let s,o;return this.expectOptionalToken(x.COLON)?(s=t,o=this.parseName()):o=t,this.node(n,{kind:D.FIELD,alias:s,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(x.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(x.PAREN_L,t,x.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,s=this.parseName();return this.expectToken(x.COLON),this.node(t,{kind:D.ARGUMENT,name:s,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(x.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(x.NAME)?this.node(n,{kind:D.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:D.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:D.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:D.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case x.BRACKET_L:return this.parseList(n);case x.BRACE_L:return this.parseObject(n);case x.INT:return this.advanceLexer(),this.node(t,{kind:D.INT,value:t.value});case x.FLOAT:return this.advanceLexer(),this.node(t,{kind:D.FLOAT,value:t.value});case x.STRING:case x.BLOCK_STRING:return this.parseStringLiteral();case x.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:D.BOOLEAN,value:!0});case"false":return this.node(t,{kind:D.BOOLEAN,value:!1});case"null":return this.node(t,{kind:D.NULL});default:return this.node(t,{kind:D.ENUM,value:t.value})}case x.DOLLAR:if(n)if(this.expectToken(x.DOLLAR),this._lexer.token.kind===x.NAME){const s=this._lexer.token.value;throw Xe(this._lexer.source,t.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:D.STRING,value:n.value,block:n.kind===x.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:D.LIST,values:this.any(x.BRACKET_L,t,x.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:D.OBJECT,fields:this.any(x.BRACE_L,t,x.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,s=this.parseName();return this.expectToken(x.COLON),this.node(t,{kind:D.OBJECT_FIELD,name:s,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(x.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(x.AT),this.node(t,{kind:D.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(x.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(x.BRACKET_R),t=this.node(n,{kind:D.LIST_TYPE,type:s})}else t=this.parseNamedType();return this.expectOptionalToken(x.BANG)?this.node(n,{kind:D.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:D.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(x.STRING)||this.peek(x.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),o=this.many(x.BRACE_L,this.parseOperationTypeDefinition,x.BRACE_R);return this.node(n,{kind:D.SCHEMA_DEFINITION,description:t,directives:s,operationTypes:o})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(x.COLON);const s=this.parseNamedType();return this.node(n,{kind:D.OPERATION_TYPE_DEFINITION,operation:t,type:s})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),o=this.parseConstDirectives();return this.node(n,{kind:D.SCALAR_TYPE_DEFINITION,description:t,name:s,directives:o})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),o=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:D.OBJECT_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:a,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(x.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(x.BRACE_L,this.parseFieldDefinition,x.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName(),o=this.parseArgumentDefs();this.expectToken(x.COLON);const a=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(n,{kind:D.FIELD_DEFINITION,description:t,name:s,arguments:o,type:a,directives:l})}parseArgumentDefs(){return this.optionalMany(x.PAREN_L,this.parseInputValueDef,x.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName();this.expectToken(x.COLON);const o=this.parseTypeReference();let a;this.expectOptionalToken(x.EQUALS)&&(a=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(n,{kind:D.INPUT_VALUE_DEFINITION,description:t,name:s,type:o,defaultValue:a,directives:l})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),o=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:D.INTERFACE_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:a,fields:l})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),o=this.parseConstDirectives(),a=this.parseUnionMemberTypes();return this.node(n,{kind:D.UNION_TYPE_DEFINITION,description:t,name:s,directives:o,types:a})}parseUnionMemberTypes(){return this.expectOptionalToken(x.EQUALS)?this.delimitedMany(x.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),o=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();return this.node(n,{kind:D.ENUM_TYPE_DEFINITION,description:t,name:s,directives:o,values:a})}parseEnumValuesDefinition(){return this.optionalMany(x.BRACE_L,this.parseEnumValueDefinition,x.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(n,{kind:D.ENUM_VALUE_DEFINITION,description:t,name:s,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Xe(this._lexer.source,this._lexer.token.start,`${Es(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),o=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();return this.node(n,{kind:D.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:s,directives:o,fields:a})}parseInputFieldsDefinition(){return this.optionalMany(x.BRACE_L,this.parseInputValueDef,x.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===x.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),s=this.optionalMany(x.BRACE_L,this.parseOperationTypeDefinition,x.BRACE_R);if(t.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:D.SCHEMA_EXTENSION,directives:t,operationTypes:s})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(n,{kind:D.SCALAR_TYPE_EXTENSION,name:t,directives:s})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:D.OBJECT_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:a})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&a.length===0)throw this.unexpected();return this.node(n,{kind:D.INTERFACE_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:a})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:D.UNION_TYPE_EXTENSION,name:t,directives:s,types:o})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:D.ENUM_TYPE_EXTENSION,name:t,directives:s,values:o})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:D.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:s,fields:o})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(x.AT);const s=this.parseName(),o=this.parseArgumentDefs(),a=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(n,{kind:D.DIRECTIVE_DEFINITION,description:t,name:s,arguments:o,repeatable:a,locations:l})}parseDirectiveLocations(){return this.delimitedMany(x.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(H,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new $D(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Xe(this._lexer.source,t.start,`Expected ${Xf(n)}, found ${Es(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===x.NAME&&t.value===n)this.advanceLexer();else throw Xe(this._lexer.source,t.start,`Expected "${n}", found ${Es(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===x.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Xe(this._lexer.source,t.start,`Unexpected ${Es(t)}.`)}any(n,t,s){this.expectToken(n);const o=[];for(;!this.expectOptionalToken(s);)o.push(t.call(this));return o}optionalMany(n,t,s){if(this.expectOptionalToken(n)){const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}return[]}many(n,t,s){this.expectToken(n);const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}delimitedMany(n,t){this.expectOptionalToken(n);const s=[];do s.push(t.call(this));while(this.expectOptionalToken(n));return s}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==x.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Xe(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function Es(r){const n=r.value;return Xf(r.kind)+(n!=null?` "${n}"`:"")}function Xf(r){return QD(r)?`"${r}"`:r}const cE=5;function Yt(r,n){const[t,s]=n?[r,n]:[void 0,r];let o=" Did you mean ";t&&(o+=t+" ");const a=s.map(p=>`"${p}"`);switch(a.length){case 0:return"";case 1:return o+a[0]+"?";case 2:return o+a[0]+" or "+a[1]+"?"}const l=a.slice(0,cE),f=l.pop();return o+l.join(", ")+", or "+f+"?"}function uf(r){return r}function dr(r,n){const t=Object.create(null);for(const s of r)t[n(s)]=s;return t}function lr(r,n,t){const s=Object.create(null);for(const o of r)s[n(o)]=t(o);return s}function Ct(r,n){const t=Object.create(null);for(const s of Object.keys(r))t[s]=n(r[s],s);return t}function Ya(r,n){let t=0,s=0;for(;t<r.length&&s<n.length;){let o=r.charCodeAt(t),a=n.charCodeAt(s);if(_s(o)&&_s(a)){let l=0;do++t,l=l*10+o-Na,o=r.charCodeAt(t);while(_s(o)&&l>0);let f=0;do++s,f=f*10+a-Na,a=n.charCodeAt(s);while(_s(a)&&f>0);if(l<f)return-1;if(l>f)return 1}else{if(o<a)return-1;if(o>a)return 1;++t,++s}}return r.length-n.length}const Na=48,fE=57;function _s(r){return!isNaN(r)&&Na<=r&&r<=fE}function yr(r,n){const t=Object.create(null),s=new pE(r),o=Math.floor(r.length*.4)+1;for(const a of n){const l=s.measure(a,o);l!==void 0&&(t[a]=l)}return Object.keys(t).sort((a,l)=>{const f=t[a]-t[l];return f!==0?f:Ya(a,l)})}class pE{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=lf(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const s=n.toLowerCase();if(this._inputLowerCase===s)return 1;let o=lf(s),a=this._inputArray;if(o.length<a.length){const y=o;o=a,a=y}const l=o.length,f=a.length;if(l-f>t)return;const p=this._rows;for(let y=0;y<=f;y++)p[0][y]=y;for(let y=1;y<=l;y++){const I=p[(y-1)%3],O=p[y%3];let F=O[0]=y;for(let N=1;N<=f;N++){const B=o[y-1]===a[N-1]?0:1;let j=Math.min(I[N]+1,O[N-1]+1,I[N-1]+B);if(y>1&&N>1&&o[y-1]===a[N-2]&&o[y-2]===a[N-1]){const ce=p[(y-2)%3][N-2];j=Math.min(j,ce+1)}j<F&&(F=j),O[N]=j}if(F>t)return}const m=p[l%3][f];return m<=t?m:void 0}}function lf(r){const n=r.length,t=new Array(n);for(let s=0;s<n;++s)t[s]=r.charCodeAt(s);return t}function qn(r){if(r==null)return Object.create(null);if(Object.getPrototypeOf(r)===null)return r;const n=Object.create(null);for(const[t,s]of Object.entries(r))n[t]=s;return n}function dE(r){return`"${r.replace(hE,gE)}"`}const hE=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function gE(r){return mE[r.charCodeAt(0)]}const mE=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],fi=Object.freeze({});function Zf(r,n,t=qf){const s=new Map;for(const ce of Object.values(D))s.set(ce,Kf(n,ce));let o,a=Array.isArray(r),l=[r],f=-1,p=[],m=r,y,I;const O=[],F=[];do{f++;const ce=f===l.length,Ae=ce&&p.length!==0;if(ce){if(y=F.length===0?void 0:O[O.length-1],m=I,I=F.pop(),Ae)if(a){m=m.slice();let ke=0;for(const[He,We]of p){const Le=He-ke;We===null?(m.splice(Le,1),ke++):m[Le]=We}}else{m=Object.defineProperties({},Object.getOwnPropertyDescriptors(m));for(const[ke,He]of p)m[ke]=He}f=o.index,l=o.keys,p=o.edits,a=o.inArray,o=o.prev}else if(I){if(y=a?f:l[f],m=I[y],m==null)continue;O.push(y)}let ye;if(!Array.isArray(m)){var N,B;of(m)||fe(!1,`Invalid AST Node: ${U(m)}.`);const ke=ce?(N=s.get(m.kind))===null||N===void 0?void 0:N.leave:(B=s.get(m.kind))===null||B===void 0?void 0:B.enter;if(ye=ke==null?void 0:ke.call(n,m,y,I,O,F),ye===fi)break;if(ye===!1){if(!ce){O.pop();continue}}else if(ye!==void 0&&(p.push([y,ye]),!ce))if(of(ye))m=ye;else{O.pop();continue}}if(ye===void 0&&Ae&&p.push([y,m]),ce)O.pop();else{var j;o={inArray:a,index:f,keys:l,edits:p,prev:o},a=Array.isArray(m),l=a?m:(j=t[m.kind])!==null&&j!==void 0?j:[],f=-1,p=[],I&&F.push(I),I=m}}while(o!==void 0);return p.length!==0?p[p.length-1][1]:r}function yE(r){const n=new Array(r.length).fill(null),t=Object.create(null);for(const s of Object.values(D)){let o=!1;const a=new Array(r.length).fill(void 0),l=new Array(r.length).fill(void 0);for(let p=0;p<r.length;++p){const{enter:m,leave:y}=Kf(r[p],s);o||(o=m!=null||y!=null),a[p]=m,l[p]=y}if(!o)continue;const f={enter(...p){const m=p[0];for(let I=0;I<r.length;I++)if(n[I]===null){var y;const O=(y=a[I])===null||y===void 0?void 0:y.apply(r[I],p);if(O===!1)n[I]=m;else if(O===fi)n[I]=fi;else if(O!==void 0)return O}},leave(...p){const m=p[0];for(let I=0;I<r.length;I++)if(n[I]===null){var y;const O=(y=l[I])===null||y===void 0?void 0:y.apply(r[I],p);if(O===fi)n[I]=fi;else if(O!==void 0&&O!==!1)return O}else n[I]===m&&(n[I]=null)}};t[s]=f}return t}function Kf(r,n){const t=r[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:r.enter,leave:r.leave}}function Ze(r){return Zf(r,IE)}const SE=80,IE={Name:{leave:r=>r.value},Variable:{leave:r=>"$"+r.name},Document:{leave:r=>q(r.definitions,`

`)},OperationDefinition:{leave(r){const n=ue("(",q(r.variableDefinitions,", "),")"),t=q([r.operation,q([r.name,n]),q(r.directives," ")]," ");return(t==="query"?"":t+" ")+r.selectionSet}},VariableDefinition:{leave:({variable:r,type:n,defaultValue:t,directives:s})=>r+": "+n+ue(" = ",t)+ue(" ",q(s," "))},SelectionSet:{leave:({selections:r})=>Jn(r)},Field:{leave({alias:r,name:n,arguments:t,directives:s,selectionSet:o}){const a=ue("",r,": ")+n;let l=a+ue("(",q(t,", "),")");return l.length>SE&&(l=a+ue(`(
`,As(q(t,`
`)),`
)`)),q([l,q(s," "),o]," ")}},Argument:{leave:({name:r,value:n})=>r+": "+n},FragmentSpread:{leave:({name:r,directives:n})=>"..."+r+ue(" ",q(n," "))},InlineFragment:{leave:({typeCondition:r,directives:n,selectionSet:t})=>q(["...",ue("on ",r),q(n," "),t]," ")},FragmentDefinition:{leave:({name:r,typeCondition:n,variableDefinitions:t,directives:s,selectionSet:o})=>`fragment ${r}${ue("(",q(t,", "),")")} on ${n} ${ue("",q(s," ")," ")}`+o},IntValue:{leave:({value:r})=>r},FloatValue:{leave:({value:r})=>r},StringValue:{leave:({value:r,block:n})=>n?VD(r):dE(r)},BooleanValue:{leave:({value:r})=>r?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:r})=>r},ListValue:{leave:({values:r})=>"["+q(r,", ")+"]"},ObjectValue:{leave:({fields:r})=>"{"+q(r,", ")+"}"},ObjectField:{leave:({name:r,value:n})=>r+": "+n},Directive:{leave:({name:r,arguments:n})=>"@"+r+ue("(",q(n,", "),")")},NamedType:{leave:({name:r})=>r},ListType:{leave:({type:r})=>"["+r+"]"},NonNullType:{leave:({type:r})=>r+"!"},SchemaDefinition:{leave:({description:r,directives:n,operationTypes:t})=>ue("",r,`
`)+q(["schema",q(n," "),Jn(t)]," ")},OperationTypeDefinition:{leave:({operation:r,type:n})=>r+": "+n},ScalarTypeDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+q(["scalar",n,q(t," ")]," ")},ObjectTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:s,fields:o})=>ue("",r,`
`)+q(["type",n,ue("implements ",q(t," & ")),q(s," "),Jn(o)]," ")},FieldDefinition:{leave:({description:r,name:n,arguments:t,type:s,directives:o})=>ue("",r,`
`)+n+(cf(t)?ue(`(
`,As(q(t,`
`)),`
)`):ue("(",q(t,", "),")"))+": "+s+ue(" ",q(o," "))},InputValueDefinition:{leave:({description:r,name:n,type:t,defaultValue:s,directives:o})=>ue("",r,`
`)+q([n+": "+t,ue("= ",s),q(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:r,name:n,interfaces:t,directives:s,fields:o})=>ue("",r,`
`)+q(["interface",n,ue("implements ",q(t," & ")),q(s," "),Jn(o)]," ")},UnionTypeDefinition:{leave:({description:r,name:n,directives:t,types:s})=>ue("",r,`
`)+q(["union",n,q(t," "),ue("= ",q(s," | "))]," ")},EnumTypeDefinition:{leave:({description:r,name:n,directives:t,values:s})=>ue("",r,`
`)+q(["enum",n,q(t," "),Jn(s)]," ")},EnumValueDefinition:{leave:({description:r,name:n,directives:t})=>ue("",r,`
`)+q([n,q(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:r,name:n,directives:t,fields:s})=>ue("",r,`
`)+q(["input",n,q(t," "),Jn(s)]," ")},DirectiveDefinition:{leave:({description:r,name:n,arguments:t,repeatable:s,locations:o})=>ue("",r,`
`)+"directive @"+n+(cf(t)?ue(`(
`,As(q(t,`
`)),`
)`):ue("(",q(t,", "),")"))+(s?" repeatable":"")+" on "+q(o," | ")},SchemaExtension:{leave:({directives:r,operationTypes:n})=>q(["extend schema",q(r," "),Jn(n)]," ")},ScalarTypeExtension:{leave:({name:r,directives:n})=>q(["extend scalar",r,q(n," ")]," ")},ObjectTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:s})=>q(["extend type",r,ue("implements ",q(n," & ")),q(t," "),Jn(s)]," ")},InterfaceTypeExtension:{leave:({name:r,interfaces:n,directives:t,fields:s})=>q(["extend interface",r,ue("implements ",q(n," & ")),q(t," "),Jn(s)]," ")},UnionTypeExtension:{leave:({name:r,directives:n,types:t})=>q(["extend union",r,q(n," "),ue("= ",q(t," | "))]," ")},EnumTypeExtension:{leave:({name:r,directives:n,values:t})=>q(["extend enum",r,q(n," "),Jn(t)]," ")},InputObjectTypeExtension:{leave:({name:r,directives:n,fields:t})=>q(["extend input",r,q(n," "),Jn(t)]," ")}};function q(r,n=""){var t;return(t=r==null?void 0:r.filter(s=>s).join(n))!==null&&t!==void 0?t:""}function Jn(r){return ue(`{
`,As(q(r,`
`)),`
}`)}function ue(r,n,t=""){return n!=null&&n!==""?r+n+t:""}function As(r){return ue("  ",r.replace(/\n/g,`
  `))}function cf(r){var n;return(n=r==null?void 0:r.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function ba(r,n){switch(r.kind){case D.NULL:return null;case D.INT:return parseInt(r.value,10);case D.FLOAT:return parseFloat(r.value);case D.STRING:case D.ENUM:case D.BOOLEAN:return r.value;case D.LIST:return r.values.map(t=>ba(t,n));case D.OBJECT:return lr(r.fields,t=>t.name.value,t=>ba(t.value,n));case D.VARIABLE:return n==null?void 0:n[r.name.value]}}function st(r){if(r!=null||fe(!1,"Must provide name."),typeof r=="string"||fe(!1,"Expected name to be a string."),r.length===0)throw new R("Expected name to be a non-empty string.");for(let n=1;n<r.length;++n)if(!jf(r.charCodeAt(n)))throw new R(`Names must only contain [_a-zA-Z0-9] but "${r}" does not.`);if(!za(r.charCodeAt(0)))throw new R(`Names must start with [_a-zA-Z] but "${r}" does not.`);return r}function TE(r){if(r==="true"||r==="false"||r==="null")throw new R(`Enum values cannot be named: ${r}`);return st(r)}function Wa(r){return Wt(r)||je(r)||Ve(r)||Vn(r)||et(r)||Sn(r)||In(r)||Ce(r)}function Wt(r){return pt(r,xt)}function je(r){return pt(r,ct)}function DE(r){if(!je(r))throw new Error(`Expected ${U(r)} to be a GraphQL Object type.`);return r}function Ve(r){return pt(r,Os)}function EE(r){if(!Ve(r))throw new Error(`Expected ${U(r)} to be a GraphQL Interface type.`);return r}function Vn(r){return pt(r,ks)}function et(r){return pt(r,Pr)}function Sn(r){return pt(r,Ls)}function In(r){return pt(r,fn)}function Ce(r){return pt(r,ie)}function Ja(r){return Wt(r)||et(r)||Sn(r)||Xa(r)&&Ja(r.ofType)}function ep(r){return Wt(r)||je(r)||Ve(r)||Vn(r)||et(r)||Xa(r)&&ep(r.ofType)}function Br(r){return Wt(r)||et(r)}function Di(r){return je(r)||Ve(r)||Vn(r)}function cr(r){return Ve(r)||Vn(r)}class fn{constructor(n){Wa(n)||fe(!1,`Expected ${U(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class ie{constructor(n){np(n)||fe(!1,`Expected ${U(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Xa(r){return In(r)||Ce(r)}function np(r){return Wa(r)&&!Ce(r)}function _E(r){if(!np(r))throw new Error(`Expected ${U(r)} to be a GraphQL nullable type.`);return r}function vE(r){if(r)return Ce(r)?r.ofType:r}function Fv(r){return Wt(r)||je(r)||Ve(r)||Vn(r)||et(r)||Sn(r)}function hr(r){if(r){let n=r;for(;Xa(n);)n=n.ofType;return n}}function tp(r){return typeof r=="function"?r():r}function rp(r){return typeof r=="function"?r():r}class xt{constructor(n){var t,s,o,a;const l=(t=n.parseValue)!==null&&t!==void 0?t:uf;this.name=st(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(s=n.serialize)!==null&&s!==void 0?s:uf,this.parseValue=l,this.parseLiteral=(o=n.parseLiteral)!==null&&o!==void 0?o:(f,p)=>l(ba(f,p)),this.extensions=qn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(a=n.extensionASTNodes)!==null&&a!==void 0?a:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||fe(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${U(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||fe(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||fe(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class ct{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=qn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>sp(n),this._interfaces=()=>ip(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||fe(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${U(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:ap(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function ip(r){var n;const t=tp((n=r.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||fe(!1,`${r.name} interfaces must be an Array or a function which returns an Array.`),t}function sp(r){const n=rp(r.fields);return Rr(n)||fe(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),Ct(n,(t,s)=>{var o;Rr(t)||fe(!1,`${r.name}.${s} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||fe(!1,`${r.name}.${s} field resolver must be a function if provided, but got: ${U(t.resolve)}.`);const a=(o=t.args)!==null&&o!==void 0?o:{};return Rr(a)||fe(!1,`${r.name}.${s} args must be an object with argument names as keys.`),{name:st(s),description:t.description,type:t.type,args:op(a),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:qn(t.extensions),astNode:t.astNode}})}function op(r){return Object.entries(r).map(([n,t])=>({name:st(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:qn(t.extensions),astNode:t.astNode}))}function Rr(r){return wt(r)&&!Array.isArray(r)}function ap(r){return Ct(r,n=>({description:n.description,type:n.type,args:up(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function up(r){return lr(r,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function lp(r){return Ce(r.type)&&r.defaultValue===void 0}class Os{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=qn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=sp.bind(void 0,n),this._interfaces=ip.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${U(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:ap(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class ks{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=qn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=CE.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||fe(!1,`${this.name} must provide "resolveType" as a function, but got: ${U(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function CE(r){const n=tp(r.types);return Array.isArray(n)||fe(!1,`Must provide Array of types or a function which returns such an array for Union ${r.name}.`),n}class Pr{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.extensions=qn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=typeof n.values=="function"?n.values:ff(this.name,n.values),this._valueLookup=null,this._nameLookup=null}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return typeof this._values=="function"&&(this._values=ff(this.name,this._values())),this._values}getValue(n){return this._nameLookup===null&&(this._nameLookup=dr(this.getValues(),t=>t.name)),this._nameLookup[n]}serialize(n){this._valueLookup===null&&(this._valueLookup=new Map(this.getValues().map(s=>[s.value,s])));const t=this._valueLookup.get(n);if(t===void 0)throw new R(`Enum "${this.name}" cannot represent value: ${U(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const s=U(n);throw new R(`Enum "${this.name}" cannot represent non-string value: ${s}.`+vs(this,s))}const t=this.getValue(n);if(t==null)throw new R(`Value "${n}" does not exist in "${this.name}" enum.`+vs(this,n));return t.value}parseLiteral(n,t){if(n.kind!==D.ENUM){const o=Ze(n);throw new R(`Enum "${this.name}" cannot represent non-enum value: ${o}.`+vs(this,o),{nodes:n})}const s=this.getValue(n.value);if(s==null){const o=Ze(n);throw new R(`Value "${o}" does not exist in "${this.name}" enum.`+vs(this,o),{nodes:n})}return s.value}toConfig(){const n=lr(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function vs(r,n){const t=r.getValues().map(o=>o.name),s=yr(n,t);return Yt("the enum value",s)}function ff(r,n){return Rr(n)||fe(!1,`${r} values must be an object with value names as keys.`),Object.entries(n).map(([t,s])=>(Rr(s)||fe(!1,`${r}.${t} must refer to an object with a "value" key representing an internal value but got: ${U(s)}.`),{name:TE(t),description:s.description,value:s.value!==void 0?s.value:t,deprecationReason:s.deprecationReason,extensions:qn(s.extensions),astNode:s.astNode}))}class Ls{constructor(n){var t,s;this.name=st(n.name),this.description=n.description,this.extensions=qn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this.isOneOf=(s=n.isOneOf)!==null&&s!==void 0?s:!1,this._fields=AE.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=Ct(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,isOneOf:this.isOneOf}}toString(){return this.name}toJSON(){return this.toString()}}function AE(r){const n=rp(r.fields);return Rr(n)||fe(!1,`${r.name} fields must be an object with field names as keys or a function which returns such an object.`),Ct(n,(t,s)=>(!("resolve"in t)||fe(!1,`${r.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:st(s),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:qn(t.extensions),astNode:t.astNode}))}function FE(r){return Ce(r.type)&&r.defaultValue===void 0}function mi(r,n,t){return n===t?!0:Ce(t)?Ce(n)?mi(r,n.ofType,t.ofType):!1:Ce(n)?mi(r,n.ofType,t):In(t)?In(n)?mi(r,n.ofType,t.ofType):!1:In(n)?!1:cr(t)&&(Ve(n)||je(n))&&r.isSubType(t,n)}function pf(r,n,t){return n===t?!0:cr(n)?cr(t)?r.getPossibleTypes(n).some(s=>r.isSubType(t,s)):r.isSubType(n,t):cr(t)?r.isSubType(t,n):!1}const Ta=2147483647,Da=-2147483648,NE=new xt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(r){const n=Ai(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new R(`Int cannot represent non-integer value: ${U(n)}`);if(t>Ta||t<Da)throw new R("Int cannot represent non 32-bit signed integer value: "+U(n));return t},parseValue(r){if(typeof r!="number"||!Number.isInteger(r))throw new R(`Int cannot represent non-integer value: ${U(r)}`);if(r>Ta||r<Da)throw new R(`Int cannot represent non 32-bit signed integer value: ${r}`);return r},parseLiteral(r){if(r.kind!==D.INT)throw new R(`Int cannot represent non-integer value: ${Ze(r)}`,{nodes:r});const n=parseInt(r.value,10);if(n>Ta||n<Da)throw new R(`Int cannot represent non 32-bit signed integer value: ${r.value}`,{nodes:r});return n}}),bE=new xt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(r){const n=Ai(r);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new R(`Float cannot represent non numeric value: ${U(n)}`);return t},parseValue(r){if(typeof r!="number"||!Number.isFinite(r))throw new R(`Float cannot represent non numeric value: ${U(r)}`);return r},parseLiteral(r){if(r.kind!==D.FLOAT&&r.kind!==D.INT)throw new R(`Float cannot represent non numeric value: ${Ze(r)}`,r);return parseFloat(r.value)}}),Ge=new xt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(r){const n=Ai(r);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new R(`String cannot represent value: ${U(r)}`)},parseValue(r){if(typeof r!="string")throw new R(`String cannot represent a non string value: ${U(r)}`);return r},parseLiteral(r){if(r.kind!==D.STRING)throw new R(`String cannot represent a non string value: ${Ze(r)}`,{nodes:r});return r.value}}),bn=new xt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(r){const n=Ai(r);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new R(`Boolean cannot represent a non boolean value: ${U(n)}`)},parseValue(r){if(typeof r!="boolean")throw new R(`Boolean cannot represent a non boolean value: ${U(r)}`);return r},parseLiteral(r){if(r.kind!==D.BOOLEAN)throw new R(`Boolean cannot represent a non boolean value: ${Ze(r)}`,{nodes:r});return r.value}}),cp=new xt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(r){const n=Ai(r);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new R(`ID cannot represent value: ${U(r)}`)},parseValue(r){if(typeof r=="string")return r;if(typeof r=="number"&&Number.isInteger(r))return r.toString();throw new R(`ID cannot represent value: ${U(r)}`)},parseLiteral(r){if(r.kind!==D.STRING&&r.kind!==D.INT)throw new R("ID cannot represent a non-string and non-integer value: "+Ze(r),{nodes:r});return r.value}}),js=Object.freeze([Ge,NE,bE,bn,cp]);function wE(r){return js.some(({name:n})=>r.name===n)}function Ai(r){if(wt(r)){if(typeof r.valueOf=="function"){const n=r.valueOf();if(!wt(n))return n}if(typeof r.toJSON=="function")return r.toJSON()}return r}function xE(r){return pt(r,Ot)}class Ot{constructor(n){var t,s;this.name=st(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=qn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||fe(!1,`@${n.name} locations must be an Array.`);const o=(s=n.args)!==null&&s!==void 0?s:{};wt(o)&&!Array.isArray(o)||fe(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=op(o)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:up(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const fp=new Ot({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[H.FIELD,H.FRAGMENT_SPREAD,H.INLINE_FRAGMENT],args:{if:{type:new ie(bn),description:"Included when true."}}}),pp=new Ot({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[H.FIELD,H.FRAGMENT_SPREAD,H.INLINE_FRAGMENT],args:{if:{type:new ie(bn),description:"Skipped when true."}}}),OE="No longer supported",dp=new Ot({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[H.FIELD_DEFINITION,H.ARGUMENT_DEFINITION,H.INPUT_FIELD_DEFINITION,H.ENUM_VALUE],args:{reason:{type:Ge,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:OE}}}),hp=new Ot({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[H.SCALAR],args:{url:{type:new ie(Ge),description:"The URL that specifies the behavior of this scalar."}}}),gp=new Ot({name:"oneOf",description:"Indicates exactly one field must be supplied and this field must not be `null`.",locations:[H.INPUT_OBJECT],args:{}}),Ur=Object.freeze([fp,pp,dp,hp,gp]);function kE(r){return typeof r=="object"&&typeof(r==null?void 0:r[Symbol.iterator])=="function"}function pi(r,n){if(Ce(n)){const t=pi(r,n.ofType);return(t==null?void 0:t.kind)===D.NULL?null:t}if(r===null)return{kind:D.NULL};if(r===void 0)return null;if(In(n)){const t=n.ofType;if(kE(r)){const s=[];for(const o of r){const a=pi(o,t);a!=null&&s.push(a)}return{kind:D.LIST,values:s}}return pi(r,t)}if(Sn(n)){if(!wt(r))return null;const t=[];for(const s of Object.values(n.getFields())){const o=pi(r[s.name],s.type);o&&t.push({kind:D.OBJECT_FIELD,name:{kind:D.NAME,value:s.name},value:o})}return{kind:D.OBJECT,fields:t}}if(Br(n)){const t=n.serialize(r);if(t==null)return null;if(typeof t=="boolean")return{kind:D.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const s=String(t);return df.test(s)?{kind:D.INT,value:s}:{kind:D.FLOAT,value:s}}if(typeof t=="string")return et(n)?{kind:D.ENUM,value:t}:n===cp&&df.test(t)?{kind:D.INT,value:t}:{kind:D.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${U(t)}.`)}Kn(!1,"Unexpected input type: "+U(n))}const df=/^-?(?:0|[1-9][0-9]*)$/,Za=new ct({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Ge,resolve:r=>r.description},types:{description:"A list of all types supported by this server.",type:new ie(new fn(new ie(Zn))),resolve(r){return Object.values(r.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new ie(Zn),resolve:r=>r.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Zn,resolve:r=>r.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Zn,resolve:r=>r.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new ie(new fn(new ie(mp))),resolve:r=>r.getDirectives()}})}),mp=new ct({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},isRepeatable:{type:new ie(bn),resolve:r=>r.isRepeatable},locations:{type:new ie(new fn(new ie(yp))),resolve:r=>r.locations},args:{type:new ie(new fn(new ie(Hs))),args:{includeDeprecated:{type:bn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}}})}),yp=new Pr({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:H.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:H.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:H.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:H.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:H.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:H.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:H.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:H.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:H.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:H.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:H.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:H.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:H.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:H.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:H.UNION,description:"Location adjacent to a union definition."},ENUM:{value:H.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:H.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:H.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:H.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Zn=new ct({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new ie(Tp),resolve(r){if(Wt(r))return _e.SCALAR;if(je(r))return _e.OBJECT;if(Ve(r))return _e.INTERFACE;if(Vn(r))return _e.UNION;if(et(r))return _e.ENUM;if(Sn(r))return _e.INPUT_OBJECT;if(In(r))return _e.LIST;if(Ce(r))return _e.NON_NULL;Kn(!1,`Unexpected type: "${U(r)}".`)}},name:{type:Ge,resolve:r=>"name"in r?r.name:void 0},description:{type:Ge,resolve:r=>"description"in r?r.description:void 0},specifiedByURL:{type:Ge,resolve:r=>"specifiedByURL"in r?r.specifiedByURL:void 0},fields:{type:new fn(new ie(Sp)),args:{includeDeprecated:{type:bn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(je(r)||Ve(r)){const t=Object.values(r.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new fn(new ie(Zn)),resolve(r){if(je(r)||Ve(r))return r.getInterfaces()}},possibleTypes:{type:new fn(new ie(Zn)),resolve(r,n,t,{schema:s}){if(cr(r))return s.getPossibleTypes(r)}},enumValues:{type:new fn(new ie(Ip)),args:{includeDeprecated:{type:bn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(et(r)){const t=r.getValues();return n?t:t.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new fn(new ie(Hs)),args:{includeDeprecated:{type:bn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){if(Sn(r)){const t=Object.values(r.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},ofType:{type:Zn,resolve:r=>"ofType"in r?r.ofType:void 0},isOneOf:{type:bn,resolve:r=>{if(Sn(r))return r.isOneOf}}})}),Sp=new ct({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},args:{type:new ie(new fn(new ie(Hs))),args:{includeDeprecated:{type:bn,defaultValue:!1}},resolve(r,{includeDeprecated:n}){return n?r.args:r.args.filter(t=>t.deprecationReason==null)}},type:{type:new ie(Zn),resolve:r=>r.type},isDeprecated:{type:new ie(bn),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ge,resolve:r=>r.deprecationReason}})}),Hs=new ct({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},type:{type:new ie(Zn),resolve:r=>r.type},defaultValue:{type:Ge,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(r){const{type:n,defaultValue:t}=r,s=pi(t,n);return s?Ze(s):null}},isDeprecated:{type:new ie(bn),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ge,resolve:r=>r.deprecationReason}})}),Ip=new ct({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new ie(Ge),resolve:r=>r.name},description:{type:Ge,resolve:r=>r.description},isDeprecated:{type:new ie(bn),resolve:r=>r.deprecationReason!=null},deprecationReason:{type:Ge,resolve:r=>r.deprecationReason}})});var _e;(function(r){r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.INPUT_OBJECT="INPUT_OBJECT",r.LIST="LIST",r.NON_NULL="NON_NULL"})(_e||(_e={}));const Tp=new Pr({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:_e.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:_e.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:_e.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:_e.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:_e.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:_e.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:_e.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:_e.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new ie(Za);new ie(Ge);new ie(Ge);const zs=Object.freeze([Za,mp,yp,Zn,Sp,Hs,Ip,Tp]);function LE(r){return zs.some(({name:n})=>r.name===n)}class Dp{constructor(n){var t,s;this.__validationErrors=n.assumeValid===!0?[]:void 0,wt(n)||fe(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||fe(!1,`"types" must be Array if provided but got: ${U(n.types)}.`),!n.directives||Array.isArray(n.directives)||fe(!1,`"directives" must be Array if provided but got: ${U(n.directives)}.`),this.description=n.description,this.extensions=qn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(s=n.directives)!==null&&s!==void 0?s:Ur;const o=new Set(n.types);if(n.types!=null)for(const a of n.types)o.delete(a),Xn(a,o);this._queryType!=null&&Xn(this._queryType,o),this._mutationType!=null&&Xn(this._mutationType,o),this._subscriptionType!=null&&Xn(this._subscriptionType,o);for(const a of this._directives)if(xE(a))for(const l of a.args)Xn(l.type,o);Xn(Za,o),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const a of o){if(a==null)continue;const l=a.name;if(l||fe(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=a,Ve(a)){for(const f of a.getInterfaces())if(Ve(f)){let p=this._implementationsMap[f.name];p===void 0&&(p=this._implementationsMap[f.name]={objects:[],interfaces:[]}),p.interfaces.push(a)}}else if(je(a)){for(const f of a.getInterfaces())if(Ve(f)){let p=this._implementationsMap[f.name];p===void 0&&(p=this._implementationsMap[f.name]={objects:[],interfaces:[]}),p.objects.push(a)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case Gn.QUERY:return this.getQueryType();case Gn.MUTATION:return this.getMutationType();case Gn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Vn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let s=this._subTypeMap[n.name];if(s===void 0){if(s=Object.create(null),Vn(n))for(const o of n.getTypes())s[o.name]=!0;else{const o=this.getImplementations(n);for(const a of o.objects)s[a.name]=!0;for(const a of o.interfaces)s[a.name]=!0}this._subTypeMap[n.name]=s}return s[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Xn(r,n){const t=hr(r);if(!n.has(t)){if(n.add(t),Vn(t))for(const s of t.getTypes())Xn(s,n);else if(je(t)||Ve(t)){for(const s of t.getInterfaces())Xn(s,n);for(const s of Object.values(t.getFields())){Xn(s.type,n);for(const o of s.args)Xn(o.type,n)}}else if(Sn(t))for(const s of Object.values(t.getFields()))Xn(s.type,n)}return n}function ft(r,n){switch(n.kind){case D.LIST_TYPE:{const t=ft(r,n.type);return t&&new fn(t)}case D.NON_NULL_TYPE:{const t=ft(r,n.type);return t&&new ie(t)}case D.NAMED_TYPE:return r.getType(n.name.value)}}function RE(r){return r.kind===D.OPERATION_DEFINITION||r.kind===D.FRAGMENT_DEFINITION}function BE(r){return r.kind===D.SCHEMA_DEFINITION||Fi(r)||r.kind===D.DIRECTIVE_DEFINITION}function Fi(r){return r.kind===D.SCALAR_TYPE_DEFINITION||r.kind===D.OBJECT_TYPE_DEFINITION||r.kind===D.INTERFACE_TYPE_DEFINITION||r.kind===D.UNION_TYPE_DEFINITION||r.kind===D.ENUM_TYPE_DEFINITION||r.kind===D.INPUT_OBJECT_TYPE_DEFINITION}function PE(r){return r.kind===D.SCHEMA_EXTENSION||Ka(r)}function Ka(r){return r.kind===D.SCALAR_TYPE_EXTENSION||r.kind===D.OBJECT_TYPE_EXTENSION||r.kind===D.INTERFACE_TYPE_EXTENSION||r.kind===D.UNION_TYPE_EXTENSION||r.kind===D.ENUM_TYPE_EXTENSION||r.kind===D.INPUT_OBJECT_TYPE_EXTENSION}function $E(r){return{Document(n){for(const t of n.definitions)if(!RE(t)){const s=t.kind===D.SCHEMA_DEFINITION||t.kind===D.SCHEMA_EXTENSION?"schema":'"'+t.name.value+'"';r.reportError(new R(`The ${s} definition is not executable.`,{nodes:t}))}return!1}}}function UE(r){return{Field(n){const t=r.getParentType();if(t&&!r.getFieldDef()){const o=r.getSchema(),a=n.name.value;let l=Yt("to use an inline fragment on",ME(o,t,a));l===""&&(l=Yt(GE(t,a))),r.reportError(new R(`Cannot query field "${a}" on type "${t.name}".`+l,{nodes:n}))}}}}function ME(r,n,t){if(!cr(n))return[];const s=new Set,o=Object.create(null);for(const l of r.getPossibleTypes(n))if(l.getFields()[t]){s.add(l),o[l.name]=1;for(const f of l.getInterfaces()){var a;f.getFields()[t]&&(s.add(f),o[f.name]=((a=o[f.name])!==null&&a!==void 0?a:0)+1)}}return[...s].sort((l,f)=>{const p=o[f.name]-o[l.name];return p!==0?p:Ve(l)&&r.isSubType(l,f)?-1:Ve(f)&&r.isSubType(f,l)?1:Ya(l.name,f.name)}).map(l=>l.name)}function GE(r,n){if(je(r)||Ve(r)){const t=Object.keys(r.getFields());return yr(n,t)}return[]}function VE(r){return{InlineFragment(n){const t=n.typeCondition;if(t){const s=ft(r.getSchema(),t);if(s&&!Di(s)){const o=Ze(t);r.reportError(new R(`Fragment cannot condition on non composite type "${o}".`,{nodes:t}))}}},FragmentDefinition(n){const t=ft(r.getSchema(),n.typeCondition);if(t&&!Di(t)){const s=Ze(n.typeCondition);r.reportError(new R(`Fragment "${n.name.value}" cannot condition on non composite type "${s}".`,{nodes:n.typeCondition}))}}}}function qE(r){return{...Ep(r),Argument(n){const t=r.getArgument(),s=r.getFieldDef(),o=r.getParentType();if(!t&&s&&o){const a=n.name.value,l=s.args.map(p=>p.name),f=yr(a,l);r.reportError(new R(`Unknown argument "${a}" on field "${o.name}.${s.name}".`+Yt(f),{nodes:n}))}}}}function Ep(r){const n=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():Ur;for(const l of s)n[l.name]=l.args.map(f=>f.name);const o=r.getDocument().definitions;for(const l of o)if(l.kind===D.DIRECTIVE_DEFINITION){var a;const f=(a=l.arguments)!==null&&a!==void 0?a:[];n[l.name.value]=f.map(p=>p.name.value)}return{Directive(l){const f=l.name.value,p=n[f];if(l.arguments&&p)for(const m of l.arguments){const y=m.name.value;if(!p.includes(y)){const I=yr(y,p);r.reportError(new R(`Unknown argument "${y}" on directive "@${f}".`+Yt(I),{nodes:m}))}}return!1}}}function _p(r){const n=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():Ur;for(const a of s)n[a.name]=a.locations;const o=r.getDocument().definitions;for(const a of o)a.kind===D.DIRECTIVE_DEFINITION&&(n[a.name.value]=a.locations.map(l=>l.value));return{Directive(a,l,f,p,m){const y=a.name.value,I=n[y];if(!I){r.reportError(new R(`Unknown directive "@${y}".`,{nodes:a}));return}const O=QE(m);O&&!I.includes(O)&&r.reportError(new R(`Directive "@${y}" may not be used on ${O}.`,{nodes:a}))}}}function QE(r){const n=r[r.length-1];switch("kind"in n||Kn(!1),n.kind){case D.OPERATION_DEFINITION:return jE(n.operation);case D.FIELD:return H.FIELD;case D.FRAGMENT_SPREAD:return H.FRAGMENT_SPREAD;case D.INLINE_FRAGMENT:return H.INLINE_FRAGMENT;case D.FRAGMENT_DEFINITION:return H.FRAGMENT_DEFINITION;case D.VARIABLE_DEFINITION:return H.VARIABLE_DEFINITION;case D.SCHEMA_DEFINITION:case D.SCHEMA_EXTENSION:return H.SCHEMA;case D.SCALAR_TYPE_DEFINITION:case D.SCALAR_TYPE_EXTENSION:return H.SCALAR;case D.OBJECT_TYPE_DEFINITION:case D.OBJECT_TYPE_EXTENSION:return H.OBJECT;case D.FIELD_DEFINITION:return H.FIELD_DEFINITION;case D.INTERFACE_TYPE_DEFINITION:case D.INTERFACE_TYPE_EXTENSION:return H.INTERFACE;case D.UNION_TYPE_DEFINITION:case D.UNION_TYPE_EXTENSION:return H.UNION;case D.ENUM_TYPE_DEFINITION:case D.ENUM_TYPE_EXTENSION:return H.ENUM;case D.ENUM_VALUE_DEFINITION:return H.ENUM_VALUE;case D.INPUT_OBJECT_TYPE_DEFINITION:case D.INPUT_OBJECT_TYPE_EXTENSION:return H.INPUT_OBJECT;case D.INPUT_VALUE_DEFINITION:{const t=r[r.length-3];return"kind"in t||Kn(!1),t.kind===D.INPUT_OBJECT_TYPE_DEFINITION?H.INPUT_FIELD_DEFINITION:H.ARGUMENT_DEFINITION}default:Kn(!1,"Unexpected kind: "+U(n.kind))}}function jE(r){switch(r){case Gn.QUERY:return H.QUERY;case Gn.MUTATION:return H.MUTATION;case Gn.SUBSCRIPTION:return H.SUBSCRIPTION}}function HE(r){return{FragmentSpread(n){const t=n.name.value;r.getFragment(t)||r.reportError(new R(`Unknown fragment "${t}".`,{nodes:n.name}))}}}function vp(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);for(const a of r.getDocument().definitions)Fi(a)&&(s[a.name.value]=!0);const o=[...Object.keys(t),...Object.keys(s)];return{NamedType(a,l,f,p,m){const y=a.name.value;if(!t[y]&&!s[y]){var I;const O=(I=m[2])!==null&&I!==void 0?I:f,F=O!=null&&zE(O);if(F&&hf.includes(y))return;const N=yr(y,F?hf.concat(o):o);r.reportError(new R(`Unknown type "${y}".`+Yt(N),{nodes:a}))}}}}const hf=[...js,...zs].map(r=>r.name);function zE(r){return"kind"in r&&(BE(r)||PE(r))}function YE(r){let n=0;return{Document(t){n=t.definitions.filter(s=>s.kind===D.OPERATION_DEFINITION).length},OperationDefinition(t){!t.name&&n>1&&r.reportError(new R("This anonymous operation must be the only defined operation.",{nodes:t}))}}}function WE(r){var n,t,s;const o=r.getSchema(),a=(n=(t=(s=o==null?void 0:o.astNode)!==null&&s!==void 0?s:o==null?void 0:o.getQueryType())!==null&&t!==void 0?t:o==null?void 0:o.getMutationType())!==null&&n!==void 0?n:o==null?void 0:o.getSubscriptionType();let l=0;return{SchemaDefinition(f){if(a){r.reportError(new R("Cannot define a new schema within a schema extension.",{nodes:f}));return}l>0&&r.reportError(new R("Must provide only one schema definition.",{nodes:f})),++l}}}const JE=3;function XE(r){function n(t,s=Object.create(null),o=0){if(t.kind===D.FRAGMENT_SPREAD){const a=t.name.value;if(s[a]===!0)return!1;const l=r.getFragment(a);if(!l)return!1;try{return s[a]=!0,n(l,s,o)}finally{s[a]=void 0}}if(t.kind===D.FIELD&&(t.name.value==="fields"||t.name.value==="interfaces"||t.name.value==="possibleTypes"||t.name.value==="inputFields")&&(o++,o>=JE))return!0;if("selectionSet"in t&&t.selectionSet){for(const a of t.selectionSet.selections)if(n(a,s,o))return!0}return!1}return{Field(t){if((t.name.value==="__schema"||t.name.value==="__type")&&n(t))return r.reportError(new R("Maximum introspection depth exceeded",{nodes:[t]})),!1}}}function ZE(r){const n=Object.create(null),t=[],s=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(a){return o(a),!1}};function o(a){if(n[a.name.value])return;const l=a.name.value;n[l]=!0;const f=r.getFragmentSpreads(a.selectionSet);if(f.length!==0){s[l]=t.length;for(const p of f){const m=p.name.value,y=s[m];if(t.push(p),y===void 0){const I=r.getFragment(m);I&&o(I)}else{const I=t.slice(y),O=I.slice(0,-1).map(F=>'"'+F.name.value+'"').join(", ");r.reportError(new R(`Cannot spread fragment "${m}" within itself`+(O!==""?` via ${O}.`:"."),{nodes:I}))}t.pop()}s[l]=void 0}}}function KE(r){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const s=r.getRecursiveVariableUsages(t);for(const{node:o}of s){const a=o.name.value;n[a]!==!0&&r.reportError(new R(t.name?`Variable "$${a}" is not defined by operation "${t.name.value}".`:`Variable "$${a}" is not defined.`,{nodes:[o,t]}))}}},VariableDefinition(t){n[t.variable.name.value]=!0}}}function e_(r){const n=[],t=[];return{OperationDefinition(s){return n.push(s),!1},FragmentDefinition(s){return t.push(s),!1},Document:{leave(){const s=Object.create(null);for(const o of n)for(const a of r.getRecursivelyReferencedFragments(o))s[a.name.value]=!0;for(const o of t){const a=o.name.value;s[a]!==!0&&r.reportError(new R(`Fragment "${a}" is never used.`,{nodes:o}))}}}}}function n_(r){let n=[];return{OperationDefinition:{enter(){n=[]},leave(t){const s=Object.create(null),o=r.getRecursiveVariableUsages(t);for(const{node:a}of o)s[a.name.value]=!0;for(const a of n){const l=a.variable.name.value;s[l]!==!0&&r.reportError(new R(t.name?`Variable "$${l}" is never used in operation "${t.name.value}".`:`Variable "$${l}" is never used.`,{nodes:a}))}}},VariableDefinition(t){n.push(t)}}}function eu(r){switch(r.kind){case D.OBJECT:return{...r,fields:t_(r.fields)};case D.LIST:return{...r,values:r.values.map(eu)};case D.INT:case D.FLOAT:case D.STRING:case D.BOOLEAN:case D.NULL:case D.ENUM:case D.VARIABLE:return r}}function t_(r){return r.map(n=>({...n,value:eu(n.value)})).sort((n,t)=>Ya(n.name.value,t.name.value))}function Cp(r){return Array.isArray(r)?r.map(([n,t])=>`subfields "${n}" conflict because `+Cp(t)).join(" and "):r}function r_(r){const n=new l_,t=new Map;return{SelectionSet(s){const o=i_(r,t,n,r.getParentType(),s);for(const[[a,l],f,p]of o){const m=Cp(l);r.reportError(new R(`Fields "${a}" conflict because ${m}. Use different aliases on the fields to fetch both if this was intentional.`,{nodes:f.concat(p)}))}}}}function i_(r,n,t,s,o){const a=[],[l,f]=Ps(r,n,s,o);if(o_(r,a,n,t,l),f.length!==0)for(let p=0;p<f.length;p++){Rs(r,a,n,t,!1,l,f[p]);for(let m=p+1;m<f.length;m++)Bs(r,a,n,t,!1,f[p],f[m])}return a}function Rs(r,n,t,s,o,a,l){const f=r.getFragment(l);if(!f)return;const[p,m]=xa(r,t,f);if(a!==p){nu(r,n,t,s,o,a,p);for(const y of m)s.has(y,l,o)||(s.add(y,l,o),Rs(r,n,t,s,o,a,y))}}function Bs(r,n,t,s,o,a,l){if(a===l||s.has(a,l,o))return;s.add(a,l,o);const f=r.getFragment(a),p=r.getFragment(l);if(!f||!p)return;const[m,y]=xa(r,t,f),[I,O]=xa(r,t,p);nu(r,n,t,s,o,m,I);for(const F of O)Bs(r,n,t,s,o,a,F);for(const F of y)Bs(r,n,t,s,o,F,l)}function s_(r,n,t,s,o,a,l,f){const p=[],[m,y]=Ps(r,n,o,a),[I,O]=Ps(r,n,l,f);nu(r,p,n,t,s,m,I);for(const F of O)Rs(r,p,n,t,s,m,F);for(const F of y)Rs(r,p,n,t,s,I,F);for(const F of y)for(const N of O)Bs(r,p,n,t,s,F,N);return p}function o_(r,n,t,s,o){for(const[a,l]of Object.entries(o))if(l.length>1)for(let f=0;f<l.length;f++)for(let p=f+1;p<l.length;p++){const m=Ap(r,t,s,!1,a,l[f],l[p]);m&&n.push(m)}}function nu(r,n,t,s,o,a,l){for(const[f,p]of Object.entries(a)){const m=l[f];if(m)for(const y of p)for(const I of m){const O=Ap(r,t,s,o,f,y,I);O&&n.push(O)}}}function Ap(r,n,t,s,o,a,l){const[f,p,m]=a,[y,I,O]=l,F=s||f!==y&&je(f)&&je(y);if(!F){const Ae=p.name.value,ye=I.name.value;if(Ae!==ye)return[[o,`"${Ae}" and "${ye}" are different fields`],[p],[I]];if(!a_(p,I))return[[o,"they have differing arguments"],[p],[I]]}const N=m==null?void 0:m.type,B=O==null?void 0:O.type;if(N&&B&&wa(N,B))return[[o,`they return conflicting types "${U(N)}" and "${U(B)}"`],[p],[I]];const j=p.selectionSet,ce=I.selectionSet;if(j&&ce){const Ae=s_(r,n,t,F,hr(N),j,hr(B),ce);return u_(Ae,o,p,I)}}function a_(r,n){const t=r.arguments,s=n.arguments;if(t===void 0||t.length===0)return s===void 0||s.length===0;if(s===void 0||s.length===0||t.length!==s.length)return!1;const o=new Map(s.map(({name:a,value:l})=>[a.value,l]));return t.every(a=>{const l=a.value,f=o.get(a.name.value);return f===void 0?!1:gf(l)===gf(f)})}function gf(r){return Ze(eu(r))}function wa(r,n){return In(r)?In(n)?wa(r.ofType,n.ofType):!0:In(n)?!0:Ce(r)?Ce(n)?wa(r.ofType,n.ofType):!0:Ce(n)?!0:Br(r)||Br(n)?r!==n:!1}function Ps(r,n,t,s){const o=n.get(s);if(o)return o;const a=Object.create(null),l=Object.create(null);Fp(r,t,s,a,l);const f=[a,Object.keys(l)];return n.set(s,f),f}function xa(r,n,t){const s=n.get(t.selectionSet);if(s)return s;const o=ft(r.getSchema(),t.typeCondition);return Ps(r,n,o,t.selectionSet)}function Fp(r,n,t,s,o){for(const a of t.selections)switch(a.kind){case D.FIELD:{const l=a.name.value;let f;(je(n)||Ve(n))&&(f=n.getFields()[l]);const p=a.alias?a.alias.value:l;s[p]||(s[p]=[]),s[p].push([n,a,f]);break}case D.FRAGMENT_SPREAD:o[a.name.value]=!0;break;case D.INLINE_FRAGMENT:{const l=a.typeCondition,f=l?ft(r.getSchema(),l):n;Fp(r,f,a.selectionSet,s,o);break}}}function u_(r,n,t,s){if(r.length>0)return[[n,r.map(([o])=>o)],[t,...r.map(([,o])=>o).flat()],[s,...r.map(([,,o])=>o).flat()]]}class l_{constructor(){this._data=new Map}has(n,t,s){var o;const[a,l]=n<t?[n,t]:[t,n],f=(o=this._data.get(a))===null||o===void 0?void 0:o.get(l);return f===void 0?!1:s?!0:s===f}add(n,t,s){const[o,a]=n<t?[n,t]:[t,n],l=this._data.get(o);l===void 0?this._data.set(o,new Map([[a,s]])):l.set(a,s)}}function c_(r){return{InlineFragment(n){const t=r.getType(),s=r.getParentType();if(Di(t)&&Di(s)&&!pf(r.getSchema(),t,s)){const o=U(s),a=U(t);r.reportError(new R(`Fragment cannot be spread here as objects of type "${o}" can never be of type "${a}".`,{nodes:n}))}},FragmentSpread(n){const t=n.name.value,s=f_(r,t),o=r.getParentType();if(s&&o&&!pf(r.getSchema(),s,o)){const a=U(o),l=U(s);r.reportError(new R(`Fragment "${t}" cannot be spread here as objects of type "${a}" can never be of type "${l}".`,{nodes:n}))}}}}function f_(r,n){const t=r.getFragment(n);if(t){const s=ft(r.getSchema(),t.typeCondition);if(Di(s))return s}}function p_(r){const n=r.getSchema(),t=Object.create(null);for(const o of r.getDocument().definitions)Fi(o)&&(t[o.name.value]=o);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(o){const a=o.name.value,l=t[a],f=n==null?void 0:n.getType(a);let p;if(l?p=d_[l.kind]:f&&(p=h_(f)),p){if(p!==o.kind){const m=g_(o.kind);r.reportError(new R(`Cannot extend non-${m} type "${a}".`,{nodes:l?[l,o]:o}))}}else{const m=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),y=yr(a,m);r.reportError(new R(`Cannot extend type "${a}" because it is not defined.`+Yt(y),{nodes:o.name}))}}}const d_={[D.SCALAR_TYPE_DEFINITION]:D.SCALAR_TYPE_EXTENSION,[D.OBJECT_TYPE_DEFINITION]:D.OBJECT_TYPE_EXTENSION,[D.INTERFACE_TYPE_DEFINITION]:D.INTERFACE_TYPE_EXTENSION,[D.UNION_TYPE_DEFINITION]:D.UNION_TYPE_EXTENSION,[D.ENUM_TYPE_DEFINITION]:D.ENUM_TYPE_EXTENSION,[D.INPUT_OBJECT_TYPE_DEFINITION]:D.INPUT_OBJECT_TYPE_EXTENSION};function h_(r){if(Wt(r))return D.SCALAR_TYPE_EXTENSION;if(je(r))return D.OBJECT_TYPE_EXTENSION;if(Ve(r))return D.INTERFACE_TYPE_EXTENSION;if(Vn(r))return D.UNION_TYPE_EXTENSION;if(et(r))return D.ENUM_TYPE_EXTENSION;if(Sn(r))return D.INPUT_OBJECT_TYPE_EXTENSION;Kn(!1,"Unexpected type: "+U(r))}function g_(r){switch(r){case D.SCALAR_TYPE_EXTENSION:return"scalar";case D.OBJECT_TYPE_EXTENSION:return"object";case D.INTERFACE_TYPE_EXTENSION:return"interface";case D.UNION_TYPE_EXTENSION:return"union";case D.ENUM_TYPE_EXTENSION:return"enum";case D.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Kn(!1,"Unexpected kind: "+U(r))}}function m_(r){return{...Np(r),Field:{leave(n){var t;const s=r.getFieldDef();if(!s)return!1;const o=new Set((t=n.arguments)===null||t===void 0?void 0:t.map(a=>a.name.value));for(const a of s.args)if(!o.has(a.name)&&lp(a)){const l=U(a.type);r.reportError(new R(`Field "${s.name}" argument "${a.name}" of type "${l}" is required, but it was not provided.`,{nodes:n}))}}}}}function Np(r){var n;const t=Object.create(null),s=r.getSchema(),o=(n=s==null?void 0:s.getDirectives())!==null&&n!==void 0?n:Ur;for(const f of o)t[f.name]=dr(f.args.filter(lp),p=>p.name);const a=r.getDocument().definitions;for(const f of a)if(f.kind===D.DIRECTIVE_DEFINITION){var l;const p=(l=f.arguments)!==null&&l!==void 0?l:[];t[f.name.value]=dr(p.filter(y_),m=>m.name.value)}return{Directive:{leave(f){const p=f.name.value,m=t[p];if(m){var y;const I=(y=f.arguments)!==null&&y!==void 0?y:[],O=new Set(I.map(F=>F.name.value));for(const[F,N]of Object.entries(m))if(!O.has(F)){const B=Wa(N.type)?U(N.type):Ze(N.type);r.reportError(new R(`Directive "@${p}" argument "${F}" of type "${B}" is required, but it was not provided.`,{nodes:f}))}}}}}}function y_(r){return r.type.kind===D.NON_NULL_TYPE&&r.defaultValue==null}function S_(r){return{Field(n){const t=r.getType(),s=n.selectionSet;if(t){if(Br(hr(t))){if(s){const o=n.name.value,a=U(t);r.reportError(new R(`Field "${o}" must not have a selection since type "${a}" has no subfields.`,{nodes:s}))}}else if(!s){const o=n.name.value,a=U(t);r.reportError(new R(`Field "${o}" of type "${a}" must have a selection of subfields. Did you mean "${o} { ... }"?`,{nodes:n}))}}}}}function Qt(r,n,t){if(r){if(r.kind===D.VARIABLE){const s=r.name.value;if(t==null||t[s]===void 0)return;const o=t[s];return o===null&&Ce(n)?void 0:o}if(Ce(n))return r.kind===D.NULL?void 0:Qt(r,n.ofType,t);if(r.kind===D.NULL)return null;if(In(n)){const s=n.ofType;if(r.kind===D.LIST){const a=[];for(const l of r.values)if(mf(l,t)){if(Ce(s))return;a.push(null)}else{const f=Qt(l,s,t);if(f===void 0)return;a.push(f)}return a}const o=Qt(r,s,t);return o===void 0?void 0:[o]}if(Sn(n)){if(r.kind!==D.OBJECT)return;const s=Object.create(null),o=dr(r.fields,a=>a.name.value);for(const a of Object.values(n.getFields())){const l=o[a.name];if(!l||mf(l.value,t)){if(a.defaultValue!==void 0)s[a.name]=a.defaultValue;else if(Ce(a.type))return;continue}const f=Qt(l.value,a.type,t);if(f===void 0)return;s[a.name]=f}if(n.isOneOf){const a=Object.keys(s);if(a.length!==1||s[a[0]]===null)return}return s}if(Br(n)){let s;try{s=n.parseLiteral(r,t)}catch{return}return s===void 0?void 0:s}Kn(!1,"Unexpected input type: "+U(n))}}function mf(r,n){return r.kind===D.VARIABLE&&(n==null||n[r.name.value]===void 0)}function I_(r,n,t){var s;const o={},a=(s=n.arguments)!==null&&s!==void 0?s:[],l=dr(a,f=>f.name.value);for(const f of r.args){const p=f.name,m=f.type,y=l[p];if(!y){if(f.defaultValue!==void 0)o[p]=f.defaultValue;else if(Ce(m))throw new R(`Argument "${p}" of required type "${U(m)}" was not provided.`,{nodes:n});continue}const I=y.value;let O=I.kind===D.NULL;if(I.kind===D.VARIABLE){const N=I.name.value;if(t==null||!T_(t,N)){if(f.defaultValue!==void 0)o[p]=f.defaultValue;else if(Ce(m))throw new R(`Argument "${p}" of required type "${U(m)}" was provided the variable "$${N}" which was not provided a runtime value.`,{nodes:I});continue}O=t[N]==null}if(O&&Ce(m))throw new R(`Argument "${p}" of non-null type "${U(m)}" must not be null.`,{nodes:I});const F=Qt(I,m,t);if(F===void 0)throw new R(`Argument "${p}" has invalid value ${Ze(I)}.`,{nodes:I});o[p]=F}return o}function Ei(r,n,t){var s;const o=(s=n.directives)===null||s===void 0?void 0:s.find(a=>a.name.value===r.name);if(o)return I_(r,o,t)}function T_(r,n){return Object.prototype.hasOwnProperty.call(r,n)}function D_(r,n,t,s,o){const a=new Map;return Oa(r,n,t,s,o,a,new Set),a}function Oa(r,n,t,s,o,a,l){for(const f of o.selections)switch(f.kind){case D.FIELD:{if(!Ea(t,f))continue;const p=E_(f),m=a.get(p);m!==void 0?m.push(f):a.set(p,[f]);break}case D.INLINE_FRAGMENT:{if(!Ea(t,f)||!yf(r,f,s))continue;Oa(r,n,t,s,f.selectionSet,a,l);break}case D.FRAGMENT_SPREAD:{const p=f.name.value;if(l.has(p)||!Ea(t,f))continue;l.add(p);const m=n[p];if(!m||!yf(r,m,s))continue;Oa(r,n,t,s,m.selectionSet,a,l);break}}}function Ea(r,n){const t=Ei(pp,n,r);if((t==null?void 0:t.if)===!0)return!1;const s=Ei(fp,n,r);return(s==null?void 0:s.if)!==!1}function yf(r,n,t){const s=n.typeCondition;if(!s)return!0;const o=ft(r,s);return o===t?!0:cr(o)?r.isSubType(o,t):!1}function E_(r){return r.alias?r.alias.value:r.name.value}function __(r){return{OperationDefinition(n){if(n.operation==="subscription"){const t=r.getSchema(),s=t.getSubscriptionType();if(s){const o=n.name?n.name.value:null,a=Object.create(null),l=r.getDocument(),f=Object.create(null);for(const m of l.definitions)m.kind===D.FRAGMENT_DEFINITION&&(f[m.name.value]=m);const p=D_(t,f,a,s,n.selectionSet);if(p.size>1){const I=[...p.values()].slice(1).flat();r.reportError(new R(o!=null?`Subscription "${o}" must select only one top level field.`:"Anonymous Subscription must select only one top level field.",{nodes:I}))}for(const m of p.values())m[0].name.value.startsWith("__")&&r.reportError(new R(o!=null?`Subscription "${o}" must not select an introspection top level field.`:"Anonymous Subscription must not select an introspection top level field.",{nodes:m}))}}}}}function tu(r,n){const t=new Map;for(const s of r){const o=n(s),a=t.get(o);a===void 0?t.set(o,[s]):a.push(s)}return t}function v_(r){return{DirectiveDefinition(s){var o;const a=(o=s.arguments)!==null&&o!==void 0?o:[];return t(`@${s.name.value}`,a)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(s){var o;const a=s.name.value,l=(o=s.fields)!==null&&o!==void 0?o:[];for(const p of l){var f;const m=p.name.value,y=(f=p.arguments)!==null&&f!==void 0?f:[];t(`${a}.${m}`,y)}return!1}function t(s,o){const a=tu(o,l=>l.name.value);for(const[l,f]of a)f.length>1&&r.reportError(new R(`Argument "${s}(${l}:)" can only be defined once.`,{nodes:f.map(p=>p.name)}));return!1}}function bp(r){return{Field:n,Directive:n};function n(t){var s;const o=(s=t.arguments)!==null&&s!==void 0?s:[],a=tu(o,l=>l.name.value);for(const[l,f]of a)f.length>1&&r.reportError(new R(`There can be only one argument named "${l}".`,{nodes:f.map(p=>p.name)}))}}function C_(r){const n=Object.create(null),t=r.getSchema();return{DirectiveDefinition(s){const o=s.name.value;if(t!=null&&t.getDirective(o)){r.reportError(new R(`Directive "@${o}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return n[o]?r.reportError(new R(`There can be only one directive named "@${o}".`,{nodes:[n[o],s.name]})):n[o]=s.name,!1}}}function wp(r){const n=Object.create(null),t=r.getSchema(),s=t?t.getDirectives():Ur;for(const f of s)n[f.name]=!f.isRepeatable;const o=r.getDocument().definitions;for(const f of o)f.kind===D.DIRECTIVE_DEFINITION&&(n[f.name.value]=!f.repeatable);const a=Object.create(null),l=Object.create(null);return{enter(f){if(!("directives"in f)||!f.directives)return;let p;if(f.kind===D.SCHEMA_DEFINITION||f.kind===D.SCHEMA_EXTENSION)p=a;else if(Fi(f)||Ka(f)){const m=f.name.value;p=l[m],p===void 0&&(l[m]=p=Object.create(null))}else p=Object.create(null);for(const m of f.directives){const y=m.name.value;n[y]&&(p[y]?r.reportError(new R(`The directive "@${y}" can only be used once at this location.`,{nodes:[p[y],m]})):p[y]=m)}}}}function A_(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:o,EnumTypeExtension:o};function o(a){var l;const f=a.name.value;s[f]||(s[f]=Object.create(null));const p=(l=a.values)!==null&&l!==void 0?l:[],m=s[f];for(const y of p){const I=y.name.value,O=t[f];et(O)&&O.getValue(I)?r.reportError(new R(`Enum value "${f}.${I}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:y.name})):m[I]?r.reportError(new R(`Enum value "${f}.${I}" can only be defined once.`,{nodes:[m[I],y.name]})):m[I]=y.name}return!1}}function F_(r){const n=r.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:o,InputObjectTypeExtension:o,InterfaceTypeDefinition:o,InterfaceTypeExtension:o,ObjectTypeDefinition:o,ObjectTypeExtension:o};function o(a){var l;const f=a.name.value;s[f]||(s[f]=Object.create(null));const p=(l=a.fields)!==null&&l!==void 0?l:[],m=s[f];for(const y of p){const I=y.name.value;N_(t[f],I)?r.reportError(new R(`Field "${f}.${I}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:y.name})):m[I]?r.reportError(new R(`Field "${f}.${I}" can only be defined once.`,{nodes:[m[I],y.name]})):m[I]=y.name}return!1}}function N_(r,n){return je(r)||Ve(r)||Sn(r)?r.getFields()[n]!=null:!1}function b_(r){const n=Object.create(null);return{OperationDefinition:()=>!1,FragmentDefinition(t){const s=t.name.value;return n[s]?r.reportError(new R(`There can be only one fragment named "${s}".`,{nodes:[n[s],t.name]})):n[s]=t.name,!1}}}function xp(r){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const s=n.pop();s||Kn(!1),t=s}},ObjectField(s){const o=s.name.value;t[o]?r.reportError(new R(`There can be only one input field named "${o}".`,{nodes:[t[o],s.name]})):t[o]=s.name}}}function w_(r){const n=Object.create(null);return{OperationDefinition(t){const s=t.name;return s&&(n[s.value]?r.reportError(new R(`There can be only one operation named "${s.value}".`,{nodes:[n[s.value],s]})):n[s.value]=s),!1},FragmentDefinition:()=>!1}}function x_(r){const n=r.getSchema(),t=Object.create(null),s=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:o,SchemaExtension:o};function o(a){var l;const f=(l=a.operationTypes)!==null&&l!==void 0?l:[];for(const p of f){const m=p.operation,y=t[m];s[m]?r.reportError(new R(`Type for ${m} already defined in the schema. It cannot be redefined.`,{nodes:p})):y?r.reportError(new R(`There can be only one ${m} type in schema.`,{nodes:[y,p]})):t[m]=p}return!1}}function O_(r){const n=Object.create(null),t=r.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(o){const a=o.name.value;if(t!=null&&t.getType(a)){r.reportError(new R(`Type "${a}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:o.name}));return}return n[a]?r.reportError(new R(`There can be only one type named "${a}".`,{nodes:[n[a],o.name]})):n[a]=o.name,!1}}function k_(r){return{OperationDefinition(n){var t;const s=(t=n.variableDefinitions)!==null&&t!==void 0?t:[],o=tu(s,a=>a.variable.name.value);for(const[a,l]of o)l.length>1&&r.reportError(new R(`There can be only one variable named "$${a}".`,{nodes:l.map(f=>f.variable.name)}))}}}function L_(r){let n={};return{OperationDefinition:{enter(){n={}}},VariableDefinition(t){n[t.variable.name.value]=t},ListValue(t){const s=vE(r.getParentInputType());if(!In(s))return ur(r,t),!1},ObjectValue(t){const s=hr(r.getInputType());if(!Sn(s))return ur(r,t),!1;const o=dr(t.fields,a=>a.name.value);for(const a of Object.values(s.getFields()))if(!o[a.name]&&FE(a)){const f=U(a.type);r.reportError(new R(`Field "${s.name}.${a.name}" of required type "${f}" was not provided.`,{nodes:t}))}s.isOneOf&&R_(r,t,s,o,n)},ObjectField(t){const s=hr(r.getParentInputType());if(!r.getInputType()&&Sn(s)){const a=yr(t.name.value,Object.keys(s.getFields()));r.reportError(new R(`Field "${t.name.value}" is not defined by type "${s.name}".`+Yt(a),{nodes:t}))}},NullValue(t){const s=r.getInputType();Ce(s)&&r.reportError(new R(`Expected value of type "${U(s)}", found ${Ze(t)}.`,{nodes:t}))},EnumValue:t=>ur(r,t),IntValue:t=>ur(r,t),FloatValue:t=>ur(r,t),StringValue:t=>ur(r,t),BooleanValue:t=>ur(r,t)}}function ur(r,n){const t=r.getInputType();if(!t)return;const s=hr(t);if(!Br(s)){const o=U(t);r.reportError(new R(`Expected value of type "${o}", found ${Ze(n)}.`,{nodes:n}));return}try{if(s.parseLiteral(n,void 0)===void 0){const a=U(t);r.reportError(new R(`Expected value of type "${a}", found ${Ze(n)}.`,{nodes:n}))}}catch(o){const a=U(t);o instanceof R?r.reportError(o):r.reportError(new R(`Expected value of type "${a}", found ${Ze(n)}; `+o.message,{nodes:n,originalError:o}))}}function R_(r,n,t,s,o){var a;const l=Object.keys(s);if(l.length!==1){r.reportError(new R(`OneOf Input Object "${t.name}" must specify exactly one key.`,{nodes:[n]}));return}const p=(a=s[l[0]])===null||a===void 0?void 0:a.value,m=!p||p.kind===D.NULL,y=(p==null?void 0:p.kind)===D.VARIABLE;if(m){r.reportError(new R(`Field "${t.name}.${l[0]}" must be non-null.`,{nodes:[n]}));return}if(y){const I=p.name.value;o[I].type.kind!==D.NON_NULL_TYPE&&r.reportError(new R(`Variable "${I}" must be non-nullable to be used for OneOf Input Object "${t.name}".`,{nodes:[n]}))}}function B_(r){return{VariableDefinition(n){const t=ft(r.getSchema(),n.type);if(t!==void 0&&!Ja(t)){const s=n.variable.name.value,o=Ze(n.type);r.reportError(new R(`Variable "$${s}" cannot be non-input type "${o}".`,{nodes:n.type}))}}}}function P_(r){let n=Object.create(null);return{OperationDefinition:{enter(){n=Object.create(null)},leave(t){const s=r.getRecursiveVariableUsages(t);for(const{node:o,type:a,defaultValue:l}of s){const f=o.name.value,p=n[f];if(p&&a){const m=r.getSchema(),y=ft(m,p.type);if(y&&!$_(m,y,p.defaultValue,a,l)){const I=U(y),O=U(a);r.reportError(new R(`Variable "$${f}" of type "${I}" used in position expecting type "${O}".`,{nodes:[p,o]}))}}}}},VariableDefinition(t){n[t.variable.name.value]=t}}}function $_(r,n,t,s,o){if(Ce(s)&&!Ce(n)){if(!(t!=null&&t.kind!==D.NULL)&&!(o!==void 0))return!1;const f=s.ofType;return mi(r,n,f)}return mi(r,n,s)}const U_=Object.freeze([XE]);Object.freeze([$E,w_,YE,__,vp,VE,B_,S_,UE,b_,HE,e_,c_,ZE,k_,KE,n_,_p,wp,qE,bp,L_,m_,P_,r_,xp,...U_]);const M_=Object.freeze([WE,x_,O_,A_,F_,v_,C_,vp,_p,wp,p_,Ep,bp,xp,Np]);class G_{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const s of this.getDocument().definitions)s.kind===D.FRAGMENT_DEFINITION&&(t[s.name.value]=s);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const s=[n];let o;for(;o=s.pop();)for(const a of o.selections)a.kind===D.FRAGMENT_SPREAD?t.push(a):a.selectionSet&&s.push(a.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const s=Object.create(null),o=[n.selectionSet];let a;for(;a=o.pop();)for(const l of this.getFragmentSpreads(a)){const f=l.name.value;if(s[f]!==!0){s[f]=!0;const p=this.getFragment(f);p&&(t.push(p),o.push(p.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class V_ extends G_{constructor(n,t,s){super(n,s),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function q_(r,n,t=M_){const s=[],o=new V_(r,n,l=>{s.push(l)}),a=t.map(l=>l(o));return Zf(r,yE(a)),s}function Q_(r){const n=q_(r);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function j_(r,n){wt(r)&&wt(r.__schema)||fe(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${U(r)}.`);const t=r.__schema,s=lr(t.types,k=>k.name,k=>O(k));for(const k of[...js,...zs])s[k.name]&&(s[k.name]=k);const o=t.queryType?y(t.queryType):null,a=t.mutationType?y(t.mutationType):null,l=t.subscriptionType?y(t.subscriptionType):null,f=t.directives?t.directives.map(dt):[];return new Dp({description:t.description,query:o,mutation:a,subscription:l,types:Object.values(s),directives:f,assumeValid:void 0});function p(k){if(k.kind===_e.LIST){const X=k.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");return new fn(p(X))}if(k.kind===_e.NON_NULL){const X=k.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");const an=p(X);return new ie(_E(an))}return m(k)}function m(k){const X=k.name;if(!X)throw new Error(`Unknown type reference: ${U(k)}.`);const an=s[X];if(!an)throw new Error(`Invalid or incomplete schema, unknown type: ${X}. Ensure that a full introspection query is used in order to build a client schema.`);return an}function y(k){return DE(m(k))}function I(k){return EE(m(k))}function O(k){if(k!=null&&k.name!=null&&k.kind!=null)switch(k.kind){case _e.SCALAR:return F(k);case _e.OBJECT:return B(k);case _e.INTERFACE:return j(k);case _e.UNION:return ce(k);case _e.ENUM:return Ae(k);case _e.INPUT_OBJECT:return ye(k)}const X=U(k);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${X}.`)}function F(k){return new xt({name:k.name,description:k.description,specifiedByURL:k.specifiedByURL})}function N(k){if(k.interfaces===null&&k.kind===_e.INTERFACE)return[];if(!k.interfaces){const X=U(k);throw new Error(`Introspection result missing interfaces: ${X}.`)}return k.interfaces.map(I)}function B(k){return new ct({name:k.name,description:k.description,interfaces:()=>N(k),fields:()=>ke(k)})}function j(k){return new Os({name:k.name,description:k.description,interfaces:()=>N(k),fields:()=>ke(k)})}function ce(k){if(!k.possibleTypes){const X=U(k);throw new Error(`Introspection result missing possibleTypes: ${X}.`)}return new ks({name:k.name,description:k.description,types:()=>k.possibleTypes.map(y)})}function Ae(k){if(!k.enumValues){const X=U(k);throw new Error(`Introspection result missing enumValues: ${X}.`)}return new Pr({name:k.name,description:k.description,values:lr(k.enumValues,X=>X.name,X=>({description:X.description,deprecationReason:X.deprecationReason}))})}function ye(k){if(!k.inputFields){const X=U(k);throw new Error(`Introspection result missing inputFields: ${X}.`)}return new Ls({name:k.name,description:k.description,fields:()=>We(k.inputFields),isOneOf:k.isOneOf})}function ke(k){if(!k.fields)throw new Error(`Introspection result missing fields: ${U(k)}.`);return lr(k.fields,X=>X.name,He)}function He(k){const X=p(k.type);if(!ep(X)){const an=U(X);throw new Error(`Introspection must provide output type for fields, but received: ${an}.`)}if(!k.args){const an=U(k);throw new Error(`Introspection result missing field args: ${an}.`)}return{description:k.description,deprecationReason:k.deprecationReason,type:X,args:We(k.args)}}function We(k){return lr(k,X=>X.name,Le)}function Le(k){const X=p(k.type);if(!Ja(X)){const kt=U(X);throw new Error(`Introspection must provide input type for arguments, but received: ${kt}.`)}const an=k.defaultValue!=null?Qt(lE(k.defaultValue),X):void 0;return{description:k.description,type:X,defaultValue:an,deprecationReason:k.deprecationReason}}function dt(k){if(!k.args){const X=U(k);throw new Error(`Introspection result missing directive args: ${X}.`)}if(!k.locations){const X=U(k);throw new Error(`Introspection result missing directive locations: ${X}.`)}return new Ot({name:k.name,description:k.description,isRepeatable:k.isRepeatable,locations:k.locations.slice(),args:We(k.args)})}}function H_(r,n,t){var s,o,a,l;const f=[],p=Object.create(null),m=[];let y;const I=[];for(const C of n.definitions)if(C.kind===D.SCHEMA_DEFINITION)y=C;else if(C.kind===D.SCHEMA_EXTENSION)I.push(C);else if(Fi(C))f.push(C);else if(Ka(C)){const V=C.name.value,$=p[V];p[V]=$?$.concat([C]):[C]}else C.kind===D.DIRECTIVE_DEFINITION&&m.push(C);if(Object.keys(p).length===0&&f.length===0&&m.length===0&&I.length===0&&y==null)return r;const O=Object.create(null);for(const C of r.types)O[C.name]=Ae(C);for(const C of f){var F;const V=C.name.value;O[V]=(F=Sf[V])!==null&&F!==void 0?F:wn(C)}const N={query:r.query&&j(r.query),mutation:r.mutation&&j(r.mutation),subscription:r.subscription&&j(r.subscription),...y&&an([y]),...an(I)};return{description:(s=y)===null||s===void 0||(o=s.description)===null||o===void 0?void 0:o.value,...N,types:Object.values(O),directives:[...r.directives.map(ce),...m.map(Ni)],extensions:Object.create(null),astNode:(a=y)!==null&&a!==void 0?a:r.astNode,extensionASTNodes:r.extensionASTNodes.concat(I),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function B(C){return In(C)?new fn(B(C.ofType)):Ce(C)?new ie(B(C.ofType)):j(C)}function j(C){return O[C.name]}function ce(C){const V=C.toConfig();return new Ot({...V,args:Ct(V.args,X)})}function Ae(C){if(LE(C)||wE(C))return C;if(Wt(C))return He(C);if(je(C))return We(C);if(Ve(C))return Le(C);if(Vn(C))return dt(C);if(et(C))return ke(C);if(Sn(C))return ye(C);Kn(!1,"Unexpected type: "+U(C))}function ye(C){var V;const $=C.toConfig(),M=(V=p[$.name])!==null&&V!==void 0?V:[];return new Ls({...$,fields:()=>({...Ct($.fields,de=>({...de,type:B(de.type)})),...Xt(M)}),extensionASTNodes:$.extensionASTNodes.concat(M)})}function ke(C){var V;const $=C.toConfig(),M=(V=p[C.name])!==null&&V!==void 0?V:[];return new Pr({...$,values:{...$.values,...ht(M)},extensionASTNodes:$.extensionASTNodes.concat(M)})}function He(C){var V;const $=C.toConfig(),M=(V=p[$.name])!==null&&V!==void 0?V:[];let de=$.specifiedByURL;for(const he of M){var $e;de=($e=If(he))!==null&&$e!==void 0?$e:de}return new xt({...$,specifiedByURL:de,extensionASTNodes:$.extensionASTNodes.concat(M)})}function We(C){var V;const $=C.toConfig(),M=(V=p[$.name])!==null&&V!==void 0?V:[];return new ct({...$,interfaces:()=>[...C.getInterfaces().map(j),...Ir(M)],fields:()=>({...Ct($.fields,k),...Sr(M)}),extensionASTNodes:$.extensionASTNodes.concat(M)})}function Le(C){var V;const $=C.toConfig(),M=(V=p[$.name])!==null&&V!==void 0?V:[];return new Os({...$,interfaces:()=>[...C.getInterfaces().map(j),...Ir(M)],fields:()=>({...Ct($.fields,k),...Sr(M)}),extensionASTNodes:$.extensionASTNodes.concat(M)})}function dt(C){var V;const $=C.toConfig(),M=(V=p[$.name])!==null&&V!==void 0?V:[];return new ks({...$,types:()=>[...C.getTypes().map(j),...Zt(M)],extensionASTNodes:$.extensionASTNodes.concat(M)})}function k(C){return{...C,type:B(C.type),args:C.args&&Ct(C.args,X)}}function X(C){return{...C,type:B(C.type)}}function an(C){const V={};for(const M of C){var $;const de=($=M.operationTypes)!==null&&$!==void 0?$:[];for(const $e of de)V[$e.operation]=kt($e.type)}return V}function kt(C){var V;const $=C.name.value,M=(V=Sf[$])!==null&&V!==void 0?V:O[$];if(M===void 0)throw new Error(`Unknown type: "${$}".`);return M}function Jt(C){return C.kind===D.LIST_TYPE?new fn(Jt(C.type)):C.kind===D.NON_NULL_TYPE?new ie(Jt(C.type)):kt(C)}function Ni(C){var V;return new Ot({name:C.name.value,description:(V=C.description)===null||V===void 0?void 0:V.value,locations:C.locations.map(({value:$})=>$),isRepeatable:C.repeatable,args:bi(C.arguments),astNode:C})}function Sr(C){const V=Object.create(null);for(const de of C){var $;const $e=($=de.fields)!==null&&$!==void 0?$:[];for(const he of $e){var M;V[he.name.value]={type:Jt(he.type),description:(M=he.description)===null||M===void 0?void 0:M.value,args:bi(he.arguments),deprecationReason:Cs(he),astNode:he}}}return V}function bi(C){const V=C??[],$=Object.create(null);for(const de of V){var M;const $e=Jt(de.type);$[de.name.value]={type:$e,description:(M=de.description)===null||M===void 0?void 0:M.value,defaultValue:Qt(de.defaultValue,$e),deprecationReason:Cs(de),astNode:de}}return $}function Xt(C){const V=Object.create(null);for(const de of C){var $;const $e=($=de.fields)!==null&&$!==void 0?$:[];for(const he of $e){var M;const xn=Jt(he.type);V[he.name.value]={type:xn,description:(M=he.description)===null||M===void 0?void 0:M.value,defaultValue:Qt(he.defaultValue,xn),deprecationReason:Cs(he),astNode:he}}}return V}function ht(C){const V=Object.create(null);for(const de of C){var $;const $e=($=de.values)!==null&&$!==void 0?$:[];for(const he of $e){var M;V[he.name.value]={description:(M=he.description)===null||M===void 0?void 0:M.value,deprecationReason:Cs(he),astNode:he}}}return V}function Ir(C){return C.flatMap(V=>{var $,M;return($=(M=V.interfaces)===null||M===void 0?void 0:M.map(kt))!==null&&$!==void 0?$:[]})}function Zt(C){return C.flatMap(V=>{var $,M;return($=(M=V.types)===null||M===void 0?void 0:M.map(kt))!==null&&$!==void 0?$:[]})}function wn(C){var V;const $=C.name.value,M=(V=p[$])!==null&&V!==void 0?V:[];switch(C.kind){case D.OBJECT_TYPE_DEFINITION:{var de;const tn=[C,...M];return new ct({name:$,description:(de=C.description)===null||de===void 0?void 0:de.value,interfaces:()=>Ir(tn),fields:()=>Sr(tn),astNode:C,extensionASTNodes:M})}case D.INTERFACE_TYPE_DEFINITION:{var $e;const tn=[C,...M];return new Os({name:$,description:($e=C.description)===null||$e===void 0?void 0:$e.value,interfaces:()=>Ir(tn),fields:()=>Sr(tn),astNode:C,extensionASTNodes:M})}case D.ENUM_TYPE_DEFINITION:{var he;const tn=[C,...M];return new Pr({name:$,description:(he=C.description)===null||he===void 0?void 0:he.value,values:ht(tn),astNode:C,extensionASTNodes:M})}case D.UNION_TYPE_DEFINITION:{var xn;const tn=[C,...M];return new ks({name:$,description:(xn=C.description)===null||xn===void 0?void 0:xn.value,types:()=>Zt(tn),astNode:C,extensionASTNodes:M})}case D.SCALAR_TYPE_DEFINITION:{var Mr;return new xt({name:$,description:(Mr=C.description)===null||Mr===void 0?void 0:Mr.value,specifiedByURL:If(C),astNode:C,extensionASTNodes:M})}case D.INPUT_OBJECT_TYPE_DEFINITION:{var Lt;const tn=[C,...M];return new Ls({name:$,description:(Lt=C.description)===null||Lt===void 0?void 0:Lt.value,fields:()=>Xt(tn),astNode:C,extensionASTNodes:M,isOneOf:z_(C)})}}}}const Sf=dr([...js,...zs],r=>r.name);function Cs(r){const n=Ei(dp,r);return n==null?void 0:n.reason}function If(r){const n=Ei(hp,r);return n==null?void 0:n.url}function z_(r){return!!Ei(gp,r)}function Y_(r,n){r!=null&&r.kind===D.DOCUMENT||fe(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&Q_(r);const s=H_({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},r,n);if(s.astNode==null)for(const a of s.types)switch(a.name){case"Query":s.query=a;break;case"Mutation":s.mutation=a;break;case"Subscription":s.subscription=a;break}const o=[...s.directives,...Ur.filter(a=>s.directives.every(l=>l.name!==a.name))];return new Dp({...s,directives:o})}function W_(r,n){const t=uE(r,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return Y_(t,{assumeValidSDL:void 0,assumeValid:void 0})}function J_(r){const n=new Map;return X_(r,t=>{je(t)&&Z_(t,s=>{const o=ka(s.type);_a(n,o).references.push({kind:gi.FIELD,parent:t,by:s}),K_(s,l=>{const f=ka(l.type);_a(n,f).references.push({kind:gi.ARGUMENT,field:s,type:t,by:l})})}),Vn(t)&&t.getTypes().forEach(s=>{_a(n,s).references.push({kind:gi.UNION,by:t})})}),new LD(n)}function X_(r,n){Object.entries(r.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function Z_(r,n){Object.entries(r.getFields()).forEach(([,t])=>{n(t)})}function K_(r,n){Object.entries(r.args).forEach(([,t])=>{n(t)})}function _a(r,n){let t=r.get(n.name);return t||(t={references:[]},r.set(n.name,t)),t}function ka(r){return Ce(r)||In(r)?ka(r.ofType):r}const Tf=`
type Query {
  companyRoles(companyId: Int, offset: Int, before: String, after: String, first: Int, last: Int, search: String): CompanyRolesTypeCountableConnection
  companyRole(companyId: Int, roleId: Int!): CompanyRoleType
  companyPermissions: [CompanyPermissionsType]
  accountSettings(companyId: Int!): AccountSettingType
  customerAccountSettings: CustomerAccountSettingsType
  invoices(companyIds: [Int] = [], offset: Int, before: String, after: String, first: Int, last: Int, search: String, orderBy: String, invoiceNumber: String, type: String, orderNumber: String, purchaseOrderNumber: String, externalCustomerId: String, storeHash: String, externalId: String, status: [String], beginDateAt: Decimal, endDateAt: Decimal, idIn: String, beginDueDateAt: Decimal, endDueDateAt: Decimal): InvoiceTypeCountableConnection
  invoice(invoiceId: Int!): InvoiceType
  invoiceStats(status: Int!, companyIds: [Int] = [], decimalPlaces: Int): InvoiceStatsType
  invoiceCustomerInformation: InvoiceCustomerInformationType
  invoicePayments(offset: Int, before: String, after: String, first: Int, last: Int, invoiceId: Decimal, dateCreatedBeginAt: Date, dateCreatedEndAt: Date): InvoicePaymentTypeCountableConnection
  invoicePayment(paymentId: Int!): InvoicePaymentType
  invoicePaymentModules: [PaymentModuleType]
  invoiceBcOrderAllowMethods: BcOrderAllowMethodsType
  invoicePaymentBcCart(paymentId: Int!): PaymentRelatedCartType
  invoicePaymentFees: PaymentFeesType
  receipts(paymentStatus: [Int], offset: Int, before: String, after: String, first: Int, last: Int, search: String, orderBy: String): ReceiptTypeCountableConnection
  receipt(id: Int!): ReceiptType
  allReceiptLines(paymentStatus: [Int], offset: Int, before: String, after: String, first: Int, last: Int, search: String, orderBy: String, invoiceId: String): ReceiptLinesTypeCountableConnection
  receiptLine(id: Int!): ReceiptLinesType
  receiptLines(receiptId: Int!, offset: Int, before: String, after: String, first: Int, last: Int, search: String, orderBy: String, invoiceId: String): ReceiptLinesTypeCountableConnection
  order(id: Int!): BcOrderType
  allOrders(companyIds: [Int] = [], offset: Int, before: String, after: String, first: Int, last: Int, q: String, companyId: Decimal, bcOrderId: Decimal, poNumber: String, extraInt1: Decimal, extraInt2: Decimal, extraInt3: Decimal, extraInt4: Decimal, extraInt5: Decimal, extraStr1: String, extraStr2: String, extraStr3: String, extraStr4: String, extraStr5: String, beginDateAt: Date, endDateAt: Date, companyName: String, search: String, status: String, email: String, orderBy: String, extraStr1_In: String, isShowMy: String, createdBy: String): OrderTypeCountableConnection
  orderProducts(bcOrderId: Int!): [OrderProductType]
  orderImages(orderIds: [Int]!): [OrderImageType]
  orderedProducts(channelId: Int = null, offset: Int, before: String, after: String, first: Int, last: Int, q: String, productId: Decimal, beginDateAt: Date, endDateAt: Date, minOrderedTimes: Decimal, maxOrderedTimes: Decimal, orderBy: String): OrderedProductTypeCountableConnection
  customerOrders(channelId: Int = null, offset: Int, before: String, after: String, first: Int, last: Int, q: String, companyId: Decimal, bcOrderId: Decimal, poNumber: String, extraInt1: Decimal, extraInt2: Decimal, extraInt3: Decimal, extraInt4: Decimal, extraInt5: Decimal, extraStr1: String, extraStr2: String, extraStr3: String, extraStr4: String, extraStr5: String, beginDateAt: Date, endDateAt: Date, companyName: String, search: String, status: String, email: String, orderBy: String, extraStr1_In: String, isShowMy: String, createdBy: String): OrderTypeCountableConnection
  customerOrder(id: Int!): BcOrderType
  createdByUser(companyId: Int!, module: Int!): CreateByType
  shoppingLists(isShowMy: Boolean, isDefault: Boolean, offset: Int, before: String, after: String, first: Int, last: Int, search: String, status: [Int], orderBy: String, createdBy: String, email: String): ShoppingListPageTypeCountableConnection
  shoppingList(id: Int!): ShoppingListType
  shoppingListsIdName: [ShoppingListIdNameType]
  customerShoppingLists(channelId: Int = null, offset: Int, before: String, after: String, first: Int, last: Int, search: String, orderBy: String): CustomerShoppingListPageTypeCountableConnection
  customerShoppingList(id: Int!): CustomerShoppingListType
  customerShoppingListsIdName(channelId: Int = null): [CustomerShoppingListIdNameType]
  companyExtraFields(storeHash: String!): [ExtraFieldsConfigType]
  userCompany(userId: Int!): CompanyType
  companyValidateEmail(storeHash: String!, email: String!, role: Int!, channelId: Int): CompanyEmailValidateType
  companyUserInfo(storeHash: String!, email: String!, customerId: Int): CompanyUserInfoType
  accountFormFields(storeHash: String!, formType: Int!): [AccountFormFieldsType]
  companyCreditConfig(isMasqueradingCompany: Boolean): CompanyCreditConfigType
  companyPaymentTerms(companyId: Int!): CompanyPaymentTermsType
  companySubsidiaries: [CompanySubsidiariesType]
  superAdminCompanies(superAdminId: Int!, offset: Int, before: String, after: String, first: Int, last: Int, search: String, orderBy: String): SuperAdminCompanyTypeCountableConnection
  superAdminMasquerading(customerId: Int!): CompanyType
  quotes(offset: Int, before: String, after: String, first: Int, last: Int, search: String, orderBy: String, quoteNumber: String, company: String, salesRep: String, status: Decimal, quoteTitle: String, createdBy: String, dateCreatedBeginAt: Date, dateCreatedEndAt: Date, dateUpdatedBeginAt: Date, dateUpdatedEndAt: Date, dateExpiredBeginAt: Date, dateExpiredEndAt: Date, email: String): QuoteTypeCountableConnection
  customerQuotes(channelId: Int, offset: Int, before: String, after: String, first: Int, last: Int, search: String, orderBy: String, quoteNumber: String, company: String, salesRep: String, status: Decimal, quoteTitle: String, createdBy: String, dateCreatedBeginAt: Date, dateCreatedEndAt: Date, dateUpdatedBeginAt: Date, dateUpdatedEndAt: Date, dateExpiredBeginAt: Date, dateExpiredEndAt: Date, email: String): QuoteTypeCountableConnection
  quote(id: Int!, storeHash: String!, date: String!): QuoteType
  quoteUserStoreInfo(storeHash: String, companyId: Int, salesRepId: Int): StoreUserInfo
  quoteConfig(storeHash: String!): QuoteConfigType
  quoteExtraFieldsConfig(storeHash: String, channelId: Int): [QuoteExtraFieldsType]
  users(companyId: Int!, offset: Int, before: String, after: String, first: Int, last: Int, email: String, firstName: String, lastName: String, role: Decimal, search: String, companyRoleId: Decimal): UserTypeCountableConnection
  user(companyId: Int!, userId: Int!): UserType
  userEmailCheck(email: String!, companyId: Int = null, storeHash: String = "", channelId: Int = null): UserEmailCheckType
  customerEmailCheck(email: String!, storeHash: String!, channelId: Int = null): CustomerEmailCheckType
  userExtraFields: [ExtraFieldsConfigType]
  currentUser: UserType
  customerInfo: CustomerInfoType
  userLoginState(storeHash: String!, email: String!): UserLoginState
  userMasqueradingCompany: CompanyInfoType
  orderStatuses: [OrderStatusType]
  bcOrderStatuses: [OrderStatusType]
  currencies(storeHash: String!, channelId: String!): StoreCurrencies
  autoLoader(storeHash: String!): StoreAutoLoaderType
  storeLimitations(storeHash: String!, limitationType: Int!): StoreLimitationsType
  storeBasicInfo(storeHash: String!, bcChannelId: Int): StoreBasicInfoType
  storefrontScript(storeHash: String, channelId: Int, siteUrl: String): StorefrontScriptType
  storefrontDefaultLanguage(storeHash: String!, channelId: Int!): StorefrontLanguageType
  storefrontProductSettings(storeHash: String!, channelId: Int): StorefrontProductSettingType
  storeConfigSwitchStatus(key: String!): StoreConfigType
  storeCheckoutConfig: [CheckoutConfigType]
  storefrontConfig(storeHash: String!): StoreFrontConfigType
  storefrontConfigs(storeHash: String!, channelId: Int, keys: [String]): [StorefrontConfigType]
  productVariantsInfo(productId: String!): [CatalogsVariantType]
  variantSku(storeHash: String!, variantSkus: [String]!, currencyCode: String, channelId: Int = null): [CatalogQuickProductType]
  productsInventory(products: [ProductInventoryInputType]!): [ProductInventoryType]
  productsLoad(currencyCode: String!, productList: [ProductVariantInputType]!, companyId: String): [ProductVariantInfoType]
  productsSearch(storeHash: String, channelId: Int, search: String, productIds: [Int], currencyCode: String, companyId: String, offset: Int, limit: Int, customerGroupId: Int, showAllProducts: Boolean, categoryFilter: Boolean): [ProductInfoType]
  taxZoneRates(storeHash: String!): [TaxZoneRateType]
  productPurchasable(storeHash: String, productId: Int, sku: String, isProduct: Boolean): ProductPurchasableType
  priceProducts(storeHash: String, channelId: Int, currencyCode: String!, customerGroupId: Int, items: [PricingProductItemInputType]!): [PricingProductType]
  addresses(companyId: Int!, offset: Int, before: String, after: String, first: Int, last: Int, search: String, firstName: String, lastName: String, address: String, country: String, state: String, city: String, label: String, uuid: String, isShipping: Decimal, isBilling: Decimal, company: String): AddressTypeCountableConnection
  address(companyId: Int!, addressId: Int!): AddressType
  countries(storeHash: String): [CountryType]
  defaultShippingAddress(companyId: Int!): AddressType
  defaultBillingAddress(companyId: Int!): AddressType
  customerAddresses(offset: Int, before: String, after: String, first: Int, last: Int, search: String, firstName: String, lastName: String, country: String, stateOrProvince: String, city: String, company: String): CustomerAddressTypeCountableConnection
  customerAddress(addressId: Int!): CustomerAddressType
  addressConfig(storeHash: String!): [AddressStoreConfigType]
  addressExtraFields(storeHash: String!): [ExtraFieldsConfigType]
}


type CompanyRolesTypeCountableConnection {
  pageInfo: PageInfo!
  edges: [CompanyRolesTypeCountableEdge!]!
  totalCount: Int
}


type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}


type CompanyRolesTypeCountableEdge {
  node: CompanyRolesType!
  cursor: String!
}


type CompanyRolesType implements Node {
  id: ID!
  name: String
  roleType: Int
  roleLevel: Int
}


interface Node {
  id: ID!
}


type CompanyRoleType implements Node {
  id: ID!
  name: String
  roleType: Int
  roleLevel: Int
  permissions: [CompanyRolePermissionsType]
}


type CompanyRolePermissionsType implements Node {
  id: ID!
  name: String
  isCustom: Boolean
  code: String
  permissionLevel: Int
}


type CompanyPermissionsType implements Node {
  id: ID!
  name: String
  description: String
  isCustom: Boolean
  code: String
  moduleName: String
}


type AccountSettingType {
  firstName: String
  lastName: String
  company: String
  phoneNumber: String
  email: String
  formFields: [FormFieldsType]
  role: Int
  extraFields: [UserExtraFieldsValueType]
  companyRoleId: Int
  companyRoleName: String
}


type FormFieldsType {
  name: String!
  value: GenericScalar!
}


scalar GenericScalar


type UserExtraFieldsValueType {
  fieldName: String
  fieldValue: String
}


type CustomerAccountSettingsType {
  firstName: String
  lastName: String
  company: String
  phoneNumber: String
  email: String
  formFields: [FormFieldsType]
}


type InvoiceTypeCountableConnection {
  pageInfo: PageInfo!
  edges: [InvoiceTypeCountableEdge!]!
  totalCount: Int
}


type InvoiceTypeCountableEdge {
  node: InvoiceType!
  cursor: String!
}


type InvoiceType implements Node {
  id: ID!
  createdAt: Int
  updatedAt: Int
  storeHash: String
  customerId: String
  externalId: String
  externalCustomerId: String
  invoiceNumber: String
  type: String
  dueDate: Int
  status: Int
  orderNumber: String
  purchaseOrderNumber: String
  details: GenericScalar
  pendingPaymentCount: Int
  source: Int
  originalBalance: InvoiceBalanceType
  openBalance: InvoiceBalanceType
  notAllowedPay: Int
  bcInformation: BCInfomation
  extraFields: [InvoiceExtraFieldsType]
  timeOffset: Int
  storeInfo: InvoiceStoreInfoType
  channelId: Int
  channelName: String
  companyInfo: CompanyInfoType
  orderUserId: Int
}


type InvoiceBalanceType {
  code: String
  value: String
}


type BCInfomation {
  customerName: String
  bcId: Int
  bcGroupName: String
  bcUrl: String
}


type InvoiceExtraFieldsType {
  fieldName: String
  fieldValue: String
}


type InvoiceStoreInfoType {
  name: String
  firstName: String
  lastName: String
  address: String
  country: String
  countryCode: String
  phone: String
  adminEmail: String
}


type CompanyInfoType {
  companyId: String
  companyName: String
  companyAddress: String
  companyCountry: String
  companyState: String
  companyCity: String
  companyZipCode: String
  phoneNumber: String
  bcId: String
}


scalar Decimal


type InvoiceStatsType {
  totalBalance: Float
  overDueBalance: Float
  hasDueInvoice: Boolean
  hasOverDueInvoice: Boolean
}


type InvoiceCustomerInformationType {
  companyId: String
  companyName: String
  payerId: String
  payerName: String
}


type InvoicePaymentTypeCountableConnection {
  pageInfo: PageInfo!
  edges: [InvoicePaymentTypeCountableEdge!]!
  totalCount: Int
}


type InvoicePaymentTypeCountableEdge {
  node: InvoicePaymentType!
  cursor: String!
}


type InvoicePaymentType implements Node {
  id: ID!
  createdAt: Int!
  updatedAt: Int!
  externalId: String
  externalCustomerId: String
  totalCode: String
  totalAmount: Decimal
  payerName: String
  payerCustomerId: String
  details: GenericScalar
  moduleName: String!
  fees: GenericScalar
  moduleData: GenericScalar
  processingStatus: Int!
  appliedStatus: Int!
  fundingStatus: Int!
  customerName: String
  customerBcId: Int
  customerBcGroupName: String
  paymentReceiptSet(offset: Int, before: String, after: String, first: Int, last: Int, search: String, orderBy: String): ReceiptTypeCountableConnection!
  companyId: String
  companyName: String
  customerGroupId: String
  channelId: Int
  channelName: String
}


type ReceiptTypeCountableConnection {
  pageInfo: PageInfo!
  edges: [ReceiptTypeCountableEdge!]!
  totalCount: Int
}


type ReceiptTypeCountableEdge {
  node: ReceiptType!
  cursor: String!
}


type ReceiptType implements Node {
  id: ID!
  createdAt: Int
  updatedAt: Int
  storeHash: String
  customerId: Int
  externalId: Int
  externalCustomerId: Int
  totalCode: String
  totalAmount: Decimal
  payerName: String
  payerCustomerId: String
  details: GenericScalar
  paymentId: Int
  transactionType: String
  paymentType: String
  referenceNumber: String
  receiptLineSet(offset: Int, before: String, after: String, first: Int, last: Int, search: String, orderBy: String, invoiceId: String): ReceiptLinesTypeCountableConnection!
  total: GenericScalar
}


type ReceiptLinesTypeCountableConnection {
  pageInfo: PageInfo!
  edges: [ReceiptLinesTypeCountableEdge!]!
  totalCount: Int
}


type ReceiptLinesTypeCountableEdge {
  node: ReceiptLinesType!
  cursor: String!
}


type ReceiptLinesType implements Node {
  id: ID!
  createdAt: Int
  updatedAt: Int
  storeHash: String
  customerId: Int
  externalId: Int
  externalCustomerId: Int
  receiptId: Int
  invoiceId: Int
  amountCode: String
  amount: GenericScalar
  paymentStatus: Int
  paymentType: String
  invoiceNumber: String
  paymentId: Int
  transactionType: String
  referenceNumber: String
  companyInfo: CompanyInfoType
}


scalar Date


type PaymentModuleType {
  moduleName: String
  value: GenericScalar
}


type BcOrderAllowMethodsType {
  allowMethods: [String]
}


type PaymentRelatedCartType {
  cartId: String
  cartUrl: String
}


type PaymentFeesType {
  paymentFees: GenericScalar
}


type BcOrderType {
  id: ID!
  companyName: String
  firstName: String
  lastName: String
  status: String
  customerId: Int
  customStatus: String
  dateCreated: String
  dateModified: String
  dateShipped: String
  statusId: Int
  subtotalExTax: String
  subtotalIncTax: String
  subtotalTax: String
  baseShippingCost: String
  shippingCostExTax: String
  shippingCostIncTax: String
  shippingCostTax: String
  shippingCostTaxClassId: String
  baseHandlingCost: String
  handlingCostExTax: String
  handlingCostIncTax: String
  handlingCostTax: String
  handlingCostTaxClassId: Int
  baseWrappingCost: String
  wrappingCostExTax: String
  wrappingCostIncTax: String
  wrappingCostTax: String
  wrappingCostTaxClassId: Int
  totalExTax: String
  totalIncTax: String
  totalTax: String
  itemsTotal: Int
  itemsShipped: Int
  paymentMethod: String
  paymentProviderId: String
  paymentStatus: String
  refundedAmount: String
  orderIsDigital: Boolean
  storeCreditAmount: String
  giftCertificateAmount: String
  ipAddress: String
  geoipCountry: String
  geoipCountryIso2: String
  currencyId: Int
  currencyCode: String
  currencyExchangeRate: String
  defaultCurrencyId: Int
  defaultCurrencyCode: String
  staffNotes: String
  customerMessage: String
  discountAmount: String
  couponDiscount: String
  shippingAddressCount: Int
  isDeleted: Boolean
  ebayOrderId: String
  cartId: String
  ipAddressV6: String
  isEmailOptIn: Boolean
  poNumber: String
  storeDefaultCurrencyCode: String
  storeDefaultToTransactionalExchangeRate: String
  customerLocale: String
  channelId: String
  orderSource: String
  externalSource: String
  creditCardType: String
  externalId: String
  externalMerchantId: String
  taxProviderId: String
  canReturn: Boolean
  createdEmail: String
  products: GenericScalar
  coupons: GenericScalar
  extraFields: GenericScalar
  billingAddress: GenericScalar
  shippingAddresses: GenericScalar
  shippingAddress: GenericScalar
  shipments: GenericScalar
  extraInt1: Int
  extraInt2: Int
  extraInt3: Int
  extraInt4: Int
  extraInt5: Int
  extraStr1: String
  extraStr2: String
  extraStr3: String
  extraStr4: String
  extraStr5: String
  extraText: String
  extraInfo: GenericScalar
  money: GenericScalar
  referenceNumber: String
  isInvoiceOrder: Int
  updatedAt: String
  externalOrderId: String
  ipStatus: Int
  invoiceId: Int
  orderHistoryEvent: [OrderHistoryEventType]
  companyInfo: CompanyInfoType
}


type OrderHistoryEventType {
  id: Int
  eventType: Int
  status: String
  extraFields: GenericScalar
  createdAt: Int
}


type OrderTypeCountableConnection {
  pageInfo: PageInfo!
  edges: [OrderTypeCountableEdge!]!
  totalCount: Int
}


type OrderTypeCountableEdge {
  node: OrderType!
  cursor: String!
}


type OrderType implements Node {
  id: ID!
  createdAt: Int!
  updatedAt: Int!
  bcOrderId: Int!
  bcCustomerId: Int
  companyId: CompanyType
  totalIncTax: Float
  currencyCode: String
  usdIncTax: Float
  money: JSONString
  items: Int
  cartId: String
  userId: Int!
  poNumber: String
  referenceNumber: String
  status: String!
  customStatus: String
  statusCode: Int!
  isArchived: Boolean
  isInvoiceOrder: OrdersOrdersIsInvoiceOrderChoices!
  invoiceId: String
  invoiceNumber: String
  invoiceStatus: String
  ipStatus: OrdersOrdersIpStatusChoices
  flag: OrdersOrdersFlagChoices
  billingName: String
  merchantEmail: String
  extraInt1: Int
  extraInt2: Int
  extraInt3: Int
  extraInt4: Int
  extraInt5: Int
  extraStr1: String
  extraStr2: String
  extraStr3: String
  extraStr4: String
  extraStr5: String
  extraText: JSONString
  extraInfo: JSONString
  bcOrderInfos: JSONString!
  shippingAddress: JSONString!
  shipments: JSONString!
  products: JSONString!
  customer: JSONString!
  createdFrom: OrdersOrdersCreatedFromChoices
  customOrderStatus: String
  companyName: String
  orderStatus: String
  firstName: String
  lastName: String
  orderId: String
  channelId: Int
  channelName: String
  companyInfo: CompanyInfoType
}


type CompanyType implements Node {
  id: ID!
  companyName: String
  bcGroupName: String
  description: String
  catalogId: String
  companyStatus: Int
  addressLine1: String
  addressLine2: String
  city: String
  state: String
  zipCode: String
  country: String
  extraFields: [ExtraFieldsValueType]
  customerGroupId: Int
}


type ExtraFieldsValueType {
  fieldName: String
  fieldValue: String
}


scalar JSONString


enum OrdersOrdersIsInvoiceOrderChoices {
  A_0
  A_1
}


enum OrdersOrdersIpStatusChoices {
  A_0
  A_1
  A_2
}


enum OrdersOrdersFlagChoices {
  A_0
  A_1
  A_2
  A_3
}


enum OrdersOrdersCreatedFromChoices {
  A_0
  A_1
  A_2
  A_3
  A_4
}


type OrderProductType {
  notes: String
  quantity: String
  productId: String
  variantId: String
  optionList: GenericScalar
}


type OrderImageType {
  orderId: String
  imageUrl: String
}


type OrderedProductTypeCountableConnection {
  pageInfo: PageInfo!
  edges: [OrderedProductTypeCountableEdge!]!
  totalCount: Int
}


type OrderedProductTypeCountableEdge {
  node: OrderedProductType!
  cursor: String!
}


type OrderedProductType implements Node {
  id: ID!
  createdAt: Int!
  updatedAt: Int!
  productName: String!
  productBrandName: String
  variantSku: String
  productId: String!
  variantId: String!
  optionList: GenericScalar
  orderedTimes: String!
  firstOrderedAt: Int!
  lastOrderedAt: Int!
  lastOrderedItems: String!
  companyId: CompanyType
  ordersInfo: GenericScalar
  orderProductId: String!
  sku: String!
  lastOrdered: String!
  optionSelections: GenericScalar
  imageUrl: String
  channelId: Int
  channelName: String
  baseSku: String
  basePrice: String
  discount: String
  tax: String
  enteredInclusive: Boolean
  productUrl: String
}


type CreateByType {
  results: GenericScalar
}


type ShoppingListPageTypeCountableConnection {
  pageInfo: PageInfo!
  edges: [ShoppingListPageTypeCountableEdge!]!
  totalCount: Int
}


type ShoppingListPageTypeCountableEdge {
  node: ShoppingListPageType!
  cursor: String!
}


type ShoppingListPageType implements Node {
  id: ID!
  createdAt: Int
  updatedAt: Int
  name: String
  description: String
  reason: String
  status: Int
  approvedFlag: Boolean
  customerInfo: CustomerInfo
  isOwner: Boolean
  products(offset: Int, before: String, after: String, first: Int, last: Int, search: String, orderBy: String): BaseShoppingListItemCountableConnection
  channelId: Int
  channelName: String
  companyInfo: CompanyInfoType
}


type CustomerInfo {
  firstName: String
  lastName: String
  userId: Int
  email: String
  role: String
}


type BaseShoppingListItemCountableConnection {
  pageInfo: PageInfo!
  edges: [BaseShoppingListItemCountableEdge!]!
  totalCount: Int
}


type BaseShoppingListItemCountableEdge {
  node: BaseShoppingListItem!
  cursor: String!
}


type BaseShoppingListItem implements Node {
  id: ID!
  createdAt: Int
  updatedAt: Int
  productId: Int
  variantId: Int
  quantity: Int
  productSku: String
  optionList: GenericScalar
  itemId: Int
  productNote: String
}


type ShoppingListType implements Node {
  id: ID!
  createdAt: Int
  updatedAt: Int
  name: String
  description: String
  reason: String
  status: Int
  approvedFlag: Boolean
  customerInfo: CustomerInfo
  isOwner: Boolean
  grandTotal: String
  totalDiscount: String
  totalTax: String
  isShowGrandTotal: Boolean
  products(offset: Int, before: String, after: String, first: Int, last: Int, search: String, orderBy: String): ShoppingListItemCountableConnection
  channelId: Int
  channelName: String
  companyInfo: CompanyInfoType
}


type ShoppingListItemCountableConnection {
  pageInfo: PageInfo!
  edges: [ShoppingListItemCountableEdge!]!
  totalCount: Int
}


type ShoppingListItemCountableEdge {
  node: ShoppingListItem!
  cursor: String!
}


type ShoppingListItem implements Node {
  id: ID!
  createdAt: Int
  updatedAt: Int
  productId: Int
  variantId: Int
  quantity: Int
  optionList: GenericScalar
  productName: String
  itemId: Int
  baseSku: String
  variantSku: String
  basePrice: String
  discount: String
  tax: String
  enteredInclusive: Boolean
  productUrl: String
  primaryImage: String
  sortOrder: Int
  productNote: String
}


type ShoppingListIdNameType implements Node {
  id: ID!
  name: String
  status: Int!
}


type CustomerShoppingListPageTypeCountableConnection {
  pageInfo: PageInfo!
  edges: [CustomerShoppingListPageTypeCountableEdge!]!
  totalCount: Int
}


type CustomerShoppingListPageTypeCountableEdge {
  node: CustomerShoppingListPageType!
  cursor: String!
}


type CustomerShoppingListPageType implements Node {
  id: ID!
  createdAt: Int
  updatedAt: Int
  name: String
  description: String
  reason: String
  products(offset: Int, before: String, after: String, first: Int, last: Int, search: String, orderBy: String): BaseShoppingListItemCountableConnection
  channelId: Int
  channelName: String
}


type CustomerShoppingListType implements Node {
  id: ID!
  createdAt: Int
  updatedAt: Int
  name: String
  description: String
  reason: String
  grandTotal: String
  totalDiscount: String
  totalTax: String
  isShowGrandTotal: Boolean
  products(offset: Int, before: String, after: String, first: Int, last: Int, search: String, orderBy: String): ShoppingListItemCountableConnection
  channelId: Int
  channelName: String
}


type CustomerShoppingListIdNameType implements Node {
  id: ID!
  name: String
}


type ExtraFieldsConfigType {
  fieldName: String
  fieldType: Int
  isRequired: Boolean
  defaultValue: String
  maximumLength: String
  numberOfRows: String
  maximumValue: String
  listOfValue: [String]
  visibleToEnduser: Boolean
  labelName: String
}


type CompanyEmailValidateType {
  isValid: Boolean
  userInfo: CompanyEmailUserInfoType
}


type CompanyEmailUserInfoType {
  id: Int
  firstName: String
  lastName: String
  phoneNumber: String
  role: Int
  companyRoleId: Int
  companyRoleName: String
  email: String
  forcePasswordReset: Boolean
}


type CompanyUserInfoType {
  userType: Int
  userInfo: CompanyEmailUserInfoType
}


type AccountFormFieldsType implements Node {
  id: ID!
  createdAt: Int
  updatedAt: Int
  formType: Int
  fieldFrom: Int
  fieldId: String
  fieldIndex: Int
  custom: Boolean
  groupId: Int
  groupName: String
  isRequired: Boolean
  visible: Boolean
  labelName: String
  fieldName: String
  fieldType: String
  valueConfigs: GenericScalar
}


type CompanyCreditConfigType {
  creditEnabled: Boolean
  creditCurrency: String
  availableCredit: Float
  limitPurchases: Boolean
  creditHold: Boolean
  currency: GenericScalar
}


type CompanyPaymentTermsType {
  isEnabled: Boolean
  paymentTerms: Int
}


type CompanySubsidiariesType {
  companyId: Int
  companyName: String
  parentCompanyId: Int
  parentCompanyName: String
  channelFlag: Boolean
}


type SuperAdminCompanyTypeCountableConnection {
  pageInfo: PageInfo!
  edges: [SuperAdminCompanyTypeCountableEdge!]!
  totalCount: Int
}


type SuperAdminCompanyTypeCountableEdge {
  node: SuperAdminCompanyType!
  cursor: String!
}


type SuperAdminCompanyType implements Node {
  companyId: Int
  id: ID!
  companyName: String
  bcGroupName: String
  companyAdminName: String
  companyEmail: String
  extraFields: [SuperAdminCompanyExtraFieldsValueType]
}


type SuperAdminCompanyExtraFieldsValueType {
  fieldName: String
  fieldValue: String
}


type QuoteTypeCountableConnection {
  pageInfo: PageInfo!
  edges: [QuoteTypeCountableEdge!]!
  totalCount: Int
}


type QuoteTypeCountableEdge {
  node: QuoteType!
  cursor: String!
}


type QuoteType implements Node {
  id: ID!
  createdAt: Int!
  updatedAt: Int!
  quoteNumber: String
  quoteTitle: String
  referenceNumber: String
  userEmail: String
  bcCustomerId: Int
  createdBy: String
  createdByEmail: String
  expiredAt: Int
  companyId: CompanyType
  salesRepStatus: Int!
  customerStatus: Int!
  subtotal: String
  discount: String
  grandTotal: String
  cartId: String
  cartUrl: String
  checkoutUrl: String
  bcOrderId: String
  currency: GenericScalar
  contactInfo: GenericScalar
  trackingHistory: GenericScalar
  extraFields: [QuoteExtraFieldsValueType]
  notes: String
  legalTerms: String
  shippingTotal: String
  taxTotal: String
  totalAmount: String
  shippingMethod: GenericScalar
  billingAddress: GenericScalar
  oldSalesRepStatus: Int
  oldCustomerStatus: Int
  recipients: GenericScalar
  discountType: Int
  discountValue: String
  pdfTemplate: String
  pdfLang: String
  displayDiscount: Boolean
  allowCheckout: Boolean
  status: Int
  company: String
  salesRep: String
  salesRepEmail: String
  orderId: String
  shippingAddress: GenericScalar
  productsList: [ProductType]
  storefrontAttachFiles: [QuoteAttachFiles]
  backendAttachFiles: [QuoteAttachFiles]
  storeInfo: StoreInfoType
  companyInfo: CompanyInfoType
  salesRepInfo: salesRepInfoType
  quoteLogo: String
  quoteUrl: String
  channelId: Int
  channelName: String
}


type QuoteExtraFieldsValueType {
  fieldName: String
  fieldValue: String
}


type ProductType {
  productId: String
  sku: String
  basePrice: String
  discount: String
  offeredPrice: String
  quantity: Int
  variantId: Int
  imageUrl: String
  orderQuantityMaximum: Int
  orderQuantityMinimum: Int
  productName: String
  options: GenericScalar
  notes: String
  purchaseHandled: Boolean
  costPrice: String
  inventoryTracking: String
  inventoryLevel: Int
  productUrl: String
  type: String
  isFreeShipping: Boolean
  availability: String
  isPriceHidden: Boolean
  purchasingDisabled: Boolean
}


type QuoteAttachFiles {
  id: Int
  fileName: String
  fileType: String
  fileUrl: String
  createdBy: String
}


type StoreInfoType {
  storeName: String
  storeAddress: String
  storeCountry: String
  storeLogo: String
  storeUrl: String
}


type salesRepInfoType {
  salesRepName: String
  salesRepEmail: String
  salesRepPhoneNumber: String
}


type StoreUserInfo {
  storeInfo: StoreInfoType
  companyInfo: CompanyInfoType
  salesRepInfo: salesRepInfoType
}


type QuoteConfigType {
  switchStatus: [QuoteSwitchConfigType]
  otherConfigs: [QuoteOtherConfigType]
}


type QuoteSwitchConfigType {
  key: String
  isEnabled: String
}


type QuoteOtherConfigType {
  key: String
  value: String
}


type QuoteExtraFieldsType {
  fieldName: String
  fieldType: Int
  isRequired: Boolean
  defaultValue: String
  maximumLength: String
  numberOfRows: String
  maximumValue: String
  listOfValue: [String]
  visibleToEnduser: Boolean
  labelName: String
  id: ID
  fieldCategory: String
  isUnique: Boolean
  valueConfigs: GenericScalar
}


type UserTypeCountableConnection {
  pageInfo: PageInfo!
  edges: [UserTypeCountableEdge!]!
  totalCount: Int
}


type UserTypeCountableEdge {
  node: UserType!
  cursor: String!
}


type UserType implements Node {
  id: ID!
  createdAt: Int!
  updatedAt: Int!
  firstName: String!
  lastName: String!
  email: String!
  phone: String
  bcId: Int!
  role: Int!
  masqueradingCompanyId: Int
  uuid: String
  extraFields: [UserExtraFieldsValueType]
  companyRoleId: Int
  companyRoleName: String
  companyInfo: CompanyInfoType
}


type UserEmailCheckType {
  userType: Int
  userInfo: UserEmailCheckInfoType
}


type UserEmailCheckInfoType {
  id: Int
  email: String
  firstName: String
  lastName: String
  phoneNumber: String
  role: Int
  companyName: String
  originChannelId: Int
  forcePasswordReset: Boolean
}


type CustomerEmailCheckType {
  userType: Int
}


type CustomerInfoType {
  userType: Int
  userInfo: CompanyEmailUserInfoType
  permissions: [AuthRolePermissionType]
}


type AuthRolePermissionType {
  code: String
  permissionLevel: Int
}


type UserLoginState {
  forcePasswordReset: Boolean
}


type OrderStatusType {
  systemLabel: String
  customLabel: String
  statusCode: String
}


type StoreCurrencies {
  currencies: [Currencies]
  channelCurrencies: GenericScalar
  enteredInclusiveTax: Boolean
}


type Currencies {
  id: String
  is_default: Boolean
  last_updated: String
  country_iso2: String
  default_for_country_codes: [String]
  currency_code: String
  currency_exchange_rate: String
  name: String
  token: String
  auto_update: Boolean
  token_location: String
  decimal_token: String
  thousands_token: String
  decimal_places: Int
  enabled: Boolean
  is_transactional: Boolean
}


type StoreAutoLoaderType {
  storefrontUrl: String
  checkoutUrl: String
}


type StoreLimitationsType {
  canCreate: Boolean
  hasLimitation: Boolean
  limitationCount: Int
  limitationType: Int
  limitationTypeName: String
  resourceCount: Int
}


type StoreBasicInfoType {
  storeName: String
  storeAddress: String
  storeCountry: String
  storeLogo: String
  storeUrl: String
  storeSites: [StoreSitesType]
  timeFormat: StoreTimeFormatType
  multiStorefrontEnabled: Boolean
}


type StoreSitesType {
  channelId: Int
  urls: [String]
  iconUrl: String
  isEnabled: Boolean
  b2bEnabled: Boolean
  b3ChannelId: Int
  channelLogo: String
  type: String
  platform: String
  translationVersion: Int
}


type StoreTimeFormatType {
  display: String
  export: String
  extendedDisplay: String
  offset: Int
}


type StorefrontScriptType {
  storeHash: String
  channelId: Int
  script: String
}


type StorefrontLanguageType {
  language: String
}


type StorefrontProductSettingType {
  showProductPrice: Boolean
  showProductSku: Boolean
  showProductWeight: Boolean
  showProductBrand: Boolean
  showProductShipping: Boolean
  showProductRating: Boolean
  showAddToCartLink: Boolean
  defaultPreorderMessage: String
  showBreadcrumbsProductPages: String
  showAddToCartQtyBox: Boolean
  showAddToWishlist: Boolean
  hidePriceFromGuests: Boolean
}


type StoreConfigType {
  id: String
  key: String
  isEnabled: String
}


type CheckoutConfigType {
  configName: String
  id: Int
  value: String
  type: String
}


type StoreFrontConfigType {
  config: StoreFrontConfigsType
  configId: Int
}


type StoreFrontConfigsType {
  accountSettings: Boolean
  addressBook: Boolean
  buyAgain: Boolean
  dashboard: Boolean
  invoice: StoreFrontInvoiceConfigType
  messages: Boolean
  orders: Boolean
  quickOrderPad: Boolean
  quotes: Boolean
  recentlyViewed: Boolean
  returns: Boolean
  shoppingLists: Boolean
  tradeProfessionalApplication: Boolean
  userManagement: Boolean
  wishLists: Boolean
}


type StoreFrontInvoiceConfigType {
  value: Boolean
  enabledStatus: Boolean
}


type StorefrontConfigType {
  key: String
  value: String
  extraFields: GenericScalar
}


type CatalogsVariantType {
  sku: String
  variantId: Int
}


type CatalogQuickProductType {
  isStock: String
  stock: Int
  calculatedPrice: String
  imageUrl: String
  productId: String
  variantId: String
  baseSku: String
  productName: String
  categories: [JSONString]
  option: [GenericScalar]
  isVisible: String
  minQuantity: Int
  maxQuantity: Int
  modifiers: [GenericScalar]
  purchasingDisabled: String
  variantSku: String
}


type ProductInventoryType {
  productId: Int
  variantId: Int
  quantity: Int
  modifiers: [GenericScalar]
  productInventoryTracking: String
  productInventoryLevel: Int
  productInventoryWarningLevel: Int
  variantInventoryLevel: Int
  variantInventoryWarningLevel: Int
  purchasingDisabled: Boolean
  isVisible: Boolean
}


input ProductInventoryInputType {
  productId: Int!
  variantId: Int
  quantity: Int
}


type ProductVariantInfoType {
  productId: Int
  variantId: Int
  companyId: Int
  channelId: [Int]
  storeHash: String
  sku: String
  imageUrl: String
  hasPriceList: Boolean
  bulkPrices: [String]
  purchasingDisabled: Boolean
  costPrice: String
  inventoryLevel: Int
  modifiers: [GenericScalar]
  isAvailable: Boolean
  calculatedPrice: String
  currencyCode: String
  optionValues: [GenericScalar]
  availability: String
  isPriceHidden: Boolean
}


input ProductVariantInputType {
  productId: Int!
  variantId: Int!
}


type ProductInfoType {
  id: Int
  name: String
  sku: String
  costPrice: String
  inventoryLevel: Int
  inventoryTracking: String
  availability: String
  orderQuantityMinimum: Int
  orderQuantityMaximum: Int
  variants: [GenericScalar]
  currencyCode: String
  imageUrl: String
  modifiers: [GenericScalar]
  options: [GenericScalar]
  optionsV3: [GenericScalar]
  channelId: [Int]
  productUrl: String
  taxClassId: Int
  isPriceHidden: Boolean
}


type TaxZoneRateType {
  id: Int
  name: String
  enabled: Boolean
  shopperTargetSettings: TaxZoneShopperTargetType
  rates: [TaxRateType]
  priceDisplaySettings: PriceDisplaySettingsType
}


type TaxZoneShopperTargetType {
  locations: [TaxZoneShopperTargetLocationType]
  customerGroups: [Int]
}


type TaxZoneShopperTargetLocationType {
  countryCode: String
  subdivisionCodes: [String]
  postalCodes: [String]
}


type TaxRateType {
  id: Int
  name: String
  enabled: Boolean
  priority: Int
  classRates: [TaxClassRateType]
}


type TaxClassRateType {
  rate: Float
  taxClassId: Int
}


type PriceDisplaySettingsType {
  showInclusive: Boolean
  showBothOnDetailView: Boolean
  showBothOnListView: Boolean
}


type ProductPurchasableType {
  availability: String
  inventoryLevel: Int
  inventoryTracking: String
  purchasingDisabled: Boolean
}


type PricingProductType {
  productId: Int
  variantId: Int
  options: [PricingProductItemOptionsType]
  referenceRequest: ReferenceRequestType
  retailPrice: PriceType
  salePrice: PriceType
  minimumAdvertisedPrice: PriceType
  saved: PriceType
  price: PriceType
  calculatedPrice: PriceType
  priceRange: PriceRangeType
  retailPriceRange: PriceRangeType
  bulkPricing: [BulkPricingType]
}


type PricingProductItemOptionsType {
  optionId: Int
  valueId: Int
}


type ReferenceRequestType {
  productId: Int!
  variantId: Int
  options: [PricingProductItemOptionsType]
}


type PriceType {
  asEntered: Float
  enteredInclusive: Boolean
  taxExclusive: Float
  taxInclusive: Float
}


type PriceRangeType {
  minimum: PriceType
  maximum: PriceType
}


type BulkPricingType {
  minimum: Int
  maximum: Int
  discountAmount: Float
  discountType: String
  taxDiscountAmount: [PriceType]
}


input PricingProductItemInputType {
  productId: Int!
  variantId: Int
  options: [PricingProductItemOptionsInputType]
}


input PricingProductItemOptionsInputType {
  optionId: Int
  valueId: Int
}


type AddressTypeCountableConnection {
  pageInfo: PageInfo!
  edges: [AddressTypeCountableEdge!]!
  totalCount: Int
}


type AddressTypeCountableEdge {
  node: AddressType!
  cursor: String!
}


type AddressType implements Node {
  id: ID!
  createdAt: Int!
  updatedAt: Int!
  firstName: String!
  lastName: String!
  isShipping: Int
  isBilling: Int
  addressLine1: String
  addressLine2: String
  address: String
  city: String!
  state: String
  stateCode: String
  country: String!
  countryCode: String
  zipCode: String
  phoneNumber: String
  isActive: Int!
  label: String
  company: String
  uuid: String
  extraFields: [AddressExtraFieldType]
  isDefaultShipping: Int
  isDefaultBilling: Int
  companyInfo: CompanyInfoType
}


type AddressExtraFieldType {
  fieldName: String
  fieldValue: String
}


type CountryType {
  id: String
  countryName: String
  countryCode: String
  states: [StatesType]
}


type StatesType {
  stateName: String
  stateCode: String
}


type CustomerAddressTypeCountableConnection {
  pageInfo: PageInfo!
  edges: [CustomerAddressTypeCountableEdge!]!
  totalCount: Int
}


type CustomerAddressTypeCountableEdge {
  node: CustomerAddressType!
  cursor: String!
}


type CustomerAddressType implements Node {
  id: ID!
  createdAt: Int!
  updatedAt: Int!
  firstName: String!
  lastName: String!
  company: String!
  bcAddressId: Int!
  address1: String!
  address2: String!
  city: String!
  stateOrProvince: String!
  postalCode: String!
  country: String!
  countryCode: String!
  phone: String!
  addressType: String!
  formFields: [AddressFormFieldsType]
}


type AddressFormFieldsType {
  name: String!
  value: GenericScalar!
  addressId: String
}


type AddressStoreConfigType {
  key: String
  isEnabled: String
}


type Mutation {
  productUpload(productListData: ProductUploadInputType!): ProductsUpload
  productAnonUpload(productListData: ProductAnonUploadInputType): ProductsAnonUpload
  updateAccountSettings(updateData: InputAccountType!): UpdateAccount
  updateCustomerAccountSettings(updateData: InputCustomerAccountType): UpdateCustomerAccount
  invoicePdf(invoiceId: Int!, isPayNow: Boolean): invoicePdf
  invoicesExport(invoiceFilterData: InvoiceFilterDataType, lang: String): invoicesExport
  invoiceCreateBcCart(bcCartData: BcCartInputType!): CreateBcCartMutation
  invoiceFinishBcPayment(comment: String, orderId: Int!): FinishBcPayMutation
  createOrder(createData: OrderCreateInputType!): OrderCreate
  shoppingListsCreate(shoppingListData: ShoppingListsInputType!): ShoppingListsCreate
  shoppingListsUpdate(id: Int, shoppingListData: ShoppingListsInputType): ShoppingListsUpdate
  shoppingListsDelete(id: Int!): ShoppingListsDelete
  shoppingListsDuplicate(sampleShoppingListId: Int!, shoppingListData: ShoppingListsDuplicateInputType!): ShoppingListsDuplicate
  shoppingListsItemsCreate(items: [ShoppingListsItemsInputType]!, shoppingListId: Int!): ShoppingListsItemsCreate
  shoppingListsItemsUpdate(itemData: ShoppingListsItemsUpdateInputType!, itemId: Int!, shoppingListId: Int!): ShoppingListsItemsUpdate
  shoppingListsItemsDelete(itemId: Int!, shoppingListId: Int!): ShoppingListsItemsDelete
  customerShoppingListsCreate(shoppingListData: CustomerShoppingListsInputType!): CustomerShoppingListsCreate
  customerShoppingListsUpdate(id: Int!, shoppingListData: CustomerShoppingListsInputType!): CustomerShoppingListsUpdate
  customerShoppingListsDelete(id: Int!): CustomerShoppingListsDelete
  customerShoppingListsDuplicate(sampleShoppingListId: Int!, shoppingListData: ShoppingListsDuplicateInputType!): CustomerShoppingListsDuplicate
  customerShoppingListsItemsCreate(items: [ShoppingListsItemsInputType], shoppingListId: Int): CustomerShoppingListsItemsCreate
  customerShoppingListsItemsUpdate(itemData: ShoppingListsItemsUpdateInputType!, itemId: Int!, shoppingListId: Int!): CustomerShoppingListsItemsUpdate
  customerShoppingListsItemsDelete(itemId: Int!, shoppingListId: Int!): CustomerShoppingListsItemsDelete
  quoteCreate(quoteData: QuoteInputType!): QuoteCreate
  quoteUpdate(id: Int!, quoteData: QuoteUpdateInputType!): QuoteUpdate
  quoteCheckout(id: Int!, storeHash: String!): QuoteCheckout
  quoteOrdered(id: Int!, orderedData: QuoteOrderedInputType!): QuoteOrdered
  quoteEmail(emailData: QuoteEmailInputType!): QuoteEmail
  quotePdfExport(currency: QuoteCurrencyInputType!, quoteId: Int!, storeHash: String!): QuotePdfExport
  quoteAttachFileDelete(fileId: Int!, quoteId: Int!): QuoteAttachmentDelete
  quoteAttachFileCreate(fileList: [QuoteFileListInputType], quoteId: Int!): QuoteAttachmentCreate
  quoteFrontendPdf(createdAt: Int!, isPreview: Boolean, lang: String!, quoteId: Int!, storeHash: String!): QuoteFrontendPdf
  superAdminBeginMasquerade(companyId: Int!, userId: Int): SuperAdminBeginMasquerade
  superAdminEndMasquerade(companyId: Int!, userId: Int): SuperAdminEndMasquerade
  companyCreate(companyData: CompanyInputType): CompanyCreate
  login(loginData: UserLoginType!): UserLogin
  checkoutLogin(cartData: CheckoutLoginType!): UserCheckoutLogin
  authorization(authData: UserAuthType!): UserAuthorization
  userCreate(userData: UserInputType!): UserCreate
  userUpdate(userData: UserUpdateInputType!): UserUpdate
  userDelete(companyId: Int!, userId: Int!): UserDelete
  storeFrontToken(storeFrontTokenData: CustomerStoreFrontTokenInputType!): UserStoreFrontToken
  customerCreate(customerData: CustomerInputType!): CustomerCreate
  customerSubscribersCreate(subscribersData: CustomerSubscribersInputType!): CustomerSubscribersCreate
  userMasqueradingCompanyBegin(companyId: Int!): UserMasqueradingCompanyBegin
  userMasqueradingCompanyEnd: UserMasqueradingCompanyEnd
  addressCreate(addressData: AddressInputType!): AddressCreate
  addressUpdate(addressData: AddressUpdateType!): AddressUpdate
  addressDelete(addressId: Int!, companyId: Int!): AddressDelete
  customerAddressCreate(addressData: CustomerAddressInputType!): CustomerAddressCreate
  customerAddressUpdate(addressData: CustomerAddressUpdateType!): CustomerAddressUpdate
  customerAddressDelete(bcAddressId: Int!): CustomerAddressDelete
}


type ProductsUpload {
  result: ProductUploadType
}


type ProductUploadType {
  errorFile: String
  errorProduct: GenericScalar
  validProduct: GenericScalar
  stockErrorFile: String
  stockErrorSkus: GenericScalar
}


input ProductUploadInputType {
  productList: [ProductListType]
  currencyCode: String
  channelId: Int
  isToCart: Boolean
  withModifiers: Boolean = false
}


input ProductListType {
  sku: String
  qty: String
}


type ProductsAnonUpload {
  result: ProductUploadType
}


input ProductAnonUploadInputType {
  productList: [ProductListType]
  currencyCode: String
  channelId: Int
  isToCart: Boolean
  withModifiers: Boolean = false
  storeHash: String!
}


type UpdateAccount {
  result: AccountSettingType
}


input InputAccountType {
  firstName: String
  lastName: String
  phoneNumber: String
  email: String
  currentPassword: String!
  newPassword: String
  confirmPassword: String
  formFields: [FormFieldsInputType] = []
  companyId: Int!
  extraFields: [UserExtraField]
}


input FormFieldsInputType {
  name: String!
  value: GenericScalar!
}


input UserExtraField {
  fieldName: String!
  fieldValue: String!
}


type UpdateCustomerAccount {
  result: CustomerAccountSettingsType
}


input InputCustomerAccountType {
  firstName: String
  lastName: String
  phoneNumber: String
  email: String
  currentPassword: String!
  newPassword: String
  confirmPassword: String
  formFields: [FormFieldsInputType] = []
  company: String
}


type invoicePdf {
  url: String
}


type invoicesExport {
  url: String
}


input InvoiceFilterDataType {
  search: String
  invoiceNumber: String
  orderNumber: String
  beginDateAt: Int
  endDateAt: Int
  status: [Int]
  idIn: String
  orderBy: String
  companyIds: [Int] = []
}


type CreateBcCartMutation {
  result: PaymentBcCartType
}


type PaymentBcCartType {
  checkoutUrl: String
  cartId: String
}


input BcCartInputType {
  lineItems: [InvoiceLineItemsInputType]!
  currency: String!
  details: GenericScalar!
}


input InvoiceLineItemsInputType {
  invoiceId: Int!
  amount: String!
}


type FinishBcPayMutation {
  result: GenericScalar
}


type OrderCreate {
  orderId: Int
}


input OrderCreateInputType {
  bcOrderId: Int!
  poNumber: String
  referenceNumber: String
  isSaveOrderComment: String = "1"
  extraInt1: Int
  extraInt2: Int
  extraInt3: Int
  extraInt4: Int
  extraInt5: Int
  extraStr1: String
  extraStr2: String
  extraStr3: String
  extraStr4: String
  extraStr5: String
  extraText: String
  extraInfo: String
  extraFields: GenericScalar
}


type ShoppingListsCreate {
  shoppingList: ShoppingListType
}


input ShoppingListsInputType {
  name: String!
  description: String!
  status: Int!
  companyId: Int
}


type ShoppingListsUpdate {
  shoppingList: ShoppingListType
}


type ShoppingListsDelete {
  message: String
}


type ShoppingListsDuplicate {
  shoppingList: ShoppingListType
}


input ShoppingListsDuplicateInputType {
  name: String!
  description: String!
}


type ShoppingListsItemsCreate {
  shoppingListsItems: [ShoppingListItem]
}


input ShoppingListsItemsInputType {
  productId: Int!
  variantId: Int!
  quantity: ProductQuantity!
  optionList: [ShoppingListsItemsOptionInputType]
  sortOrder: Int
  productNote: String
}


scalar ProductQuantity


input ShoppingListsItemsOptionInputType {
  optionId: String!
  optionValue: GenericScalar!
}


type ShoppingListsItemsUpdate {
  shoppingListsItem: ShoppingListItem
}


input ShoppingListsItemsUpdateInputType {
  variantId: Int
  quantity: ProductQuantity
  optionList: [ShoppingListsItemsOptionInputType]
  sortOrder: Int
  productNote: String
}


type ShoppingListsItemsDelete {
  message: String
}


type CustomerShoppingListsCreate {
  shoppingList: CustomerShoppingListType
}


input CustomerShoppingListsInputType {
  name: String!
  description: String!
  channelId: Int
}


type CustomerShoppingListsUpdate {
  shoppingList: CustomerShoppingListType
}


type CustomerShoppingListsDelete {
  message: String
}


type CustomerShoppingListsDuplicate {
  shoppingList: CustomerShoppingListType
}


type CustomerShoppingListsItemsCreate {
  shoppingListsItems: [ShoppingListItem]
}


type CustomerShoppingListsItemsUpdate {
  shoppingListsItem: ShoppingListItem
}


type CustomerShoppingListsItemsDelete {
  message: String
}


type QuoteCreate {
  quote: QuoteType
}


input QuoteInputType {
  notes: String
  legalTerms: String
  totalAmount: Decimal
  message: String
  subtotal: Decimal!
  discount: Decimal!
  grandTotal: Decimal!
  referenceNumber: String
  userEmail: String
  expiredAt: String
  quoteTitle: String
  shippingAddress: ShippingAddressInputType!
  billingAddress: BillingAddressInputType!
  contactInfo: ContactInfoInputType!
  companyId: Int
  currency: CurrencyInputType!
  storeHash: String!
  productList: [ProductInputType]!
  shippingTotal: Decimal
  taxTotal: Decimal
  shippingMethod: GenericScalar
  extraFields: [QuoteExtraFieldsInputType]
  recipients: [GenericScalar]
  discountType: Int
  discountValue: Decimal
  fileList: [QuoteFileListInputType]
  channelId: Int
}


input ShippingAddressInputType {
  country: String
  state: String
  city: String
  zipCode: String
  address: String
  apartment: String
  addressId: Int
  firstName: String
  lastName: String
  addressLine1: String
  addressLine2: String
  phoneNumber: String
  label: String
  extraFields: [QuoteAddressExtraFieldsInputType]
  shippingCity: String
  shippingZipCode: String
  companyName: String
}


input QuoteAddressExtraFieldsInputType {
  fieldName: String
  fieldValue: String
}


input BillingAddressInputType {
  country: String
  state: String
  city: String
  zipCode: String
  address: String
  apartment: String
  addressId: Int
  firstName: String
  lastName: String
  addressLine1: String
  addressLine2: String
  phoneNumber: String
  label: String
  extraFields: [QuoteAddressExtraFieldsInputType]
  companyName: String
}


input ContactInfoInputType {
  name: String!
  email: String!
  companyName: String
  phoneNumber: String
}


input CurrencyInputType {
  currencyExchangeRate: String
  token: String
  location: String
  decimalToken: String
  decimalPlaces: CurrencyDecimalPlaces
  thousandsToken: String
  currencyCode: String
}


scalar CurrencyDecimalPlaces


input ProductInputType {
  productId: Int!
  sku: String!
  basePrice: Decimal!
  discount: Decimal!
  offeredPrice: Decimal!
  quantity: Int!
  variantId: Int!
  imageUrl: String!
  productName: String!
  options: [ProductOptionInputType]
}


input ProductOptionInputType {
  optionId: Int
  optionValue: String
  optionLabel: String
  optionName: String
  type: String
}


input QuoteExtraFieldsInputType {
  id: Int
  fieldName: String
  value: String
}


input QuoteFileListInputType {
  id: Int
  fileUrl: String!
  fileName: String!
  fileType: String!
  fileSize: Int
}


type QuoteUpdate {
  quote: QuoteType
}


input QuoteUpdateInputType {
  storeHash: String!
  message: String
  userEmail: String!
  lastMessage: Int
}


type QuoteCheckout {
  quoteCheckout: QuoteCheckoutType
}


type QuoteCheckoutType {
  checkoutUrl: String
  cartId: String
  cartUrl: String
}


type QuoteOrdered {
  message: String
}


input QuoteOrderedInputType {
  orderId: String!
  storeHash: String!
  shippingTotal: Decimal!
  taxTotal: Decimal!
  shippingMethod: ShippingMethodInputType!
}


input ShippingMethodInputType {
  id: String!
  type: String!
  description: String!
  imageUrl: String!
  transitTime: String!
  cost: Float!
  additionalDescription: String!
}


type QuoteEmail {
  message: String
}


input QuoteEmailInputType {
  email: String!
  quoteId: Int!
}


type QuotePdfExport {
  url: String
}


input QuoteCurrencyInputType {
  currencyExchangeRate: String!
  token: String
}


type QuoteAttachmentDelete {
  message: String
}


type QuoteAttachmentCreate {
  attachFiles: [QuoteAttachFiles]
}


type QuoteFrontendPdf {
  url: String
  content: String
}


type SuperAdminBeginMasquerade {
  userInfo: UserInfoType
}


type UserInfoType {
  email: String
  firstName: String
  lastName: String
  phoneNumber: String
}


type SuperAdminEndMasquerade {
  message: String
}


type CompanyCreate {
  company: CompanyType
}


input CompanyInputType {
  storeHash: String!
  customerId: String!
  companyName: String!
  companyEmail: String
  addressLine1: String!
  addressLine2: String
  city: String!
  companyPhoneNumber: String
  country: String!
  state: String!
  zipCode: String!
  extraFields: [CompanyExtraField]
  fileList: [CompanyAttachedFile]
  userExtraFields: [CompanyUserExtraField]
  channelId: Int
  addressExtraFields: [CompanyAddressExtraField]
}


input CompanyExtraField {
  fieldName: String!
  fieldValue: String!
}


input CompanyAttachedFile {
  fileUrl: String!
  fileName: String!
  fileType: String!
  fileSize: String
}


input CompanyUserExtraField {
  fieldName: String!
  fieldValue: String!
}


input CompanyAddressExtraField {
  fieldName: String!
  fieldValue: String!
}


type UserLogin {
  result: UserAuthResultType
}


type UserAuthResultType {
  token: String
  user: UserType
  loginType: Int
  storefrontLoginToken: String
  permissions: [AuthRolePermissionType]
}


input UserLoginType {
  storeHash: String!
  email: String!
  password: String!
  channelId: Int = 1
  redirectUrl: String = "#/orders"
}


type UserCheckoutLogin {
  result: CheckoutResultLoginType
}


type CheckoutResultLoginType {
  redirectUrl: String
}


input CheckoutLoginType {
  cartId: String!
}


type UserAuthorization {
  result: UserAuthResultType
}


input UserAuthType {
  bcToken: String!
  channelId: Int = 1
}


type UserCreate {
  user: UserType
}


input UserInputType {
  companyId: Int!
  email: String!
  firstName: String!
  lastName: String!
  phone: String = ""
  role: Int
  companyRoleId: Int
  uuid: String = ""
  acceptEmail: Boolean = null
  extraFields: [UserExtraField]
  addChannel: Boolean = false
}


type UserUpdate {
  user: UserType
}


input UserUpdateInputType {
  companyId: Int!
  userId: Int!
  firstName: String
  lastName: String
  phone: String
  role: Int
  companyRoleId: Int
  uuid: String
  extraFields: [UserExtraField]
}


type UserDelete {
  message: String
}


type UserStoreFrontToken {
  token: String
}


input CustomerStoreFrontTokenInputType {
  storeHash: String!
  channelId: Int!
  expiresAt: Int!
  allowedCorsOrigins: [String]!
}


type CustomerCreate {
  customer: CustomerType
}


type CustomerType {
  id: Int
  email: String
  firstName: String
  lastName: String
  company: String
  phone: String
  notes: String
  taxExemptCategory: String
  registrationIpAddress: String
  customerGroupId: Int
  dateModified: String
  dateCreated: String
  addressCount: Int
  attributeCount: Int
  authentication: CustomerAuthenticationType
  addresses: [CustomerAddressesType]
  attributes: [CustomerAttributeType]
  formFields: [FormFieldsType]
  storeCreditAmounts: [CustomerStoreCreditAmountsType]
  acceptsProductReviewAbandonedCartEmails: Boolean
  originChannelId: Int
  channelIds: [Int]
}


type CustomerAuthenticationType {
  forcePasswordReset: Boolean
}


type CustomerAddressesType {
  firstName: String
  lastName: String
  company: String
  address1: String
  address2: String
  city: String
  stateOrProvince: String
  postalCode: String
  countryCode: String
  phone: String
  addressType: String
  customerId: Int
  id: Int
  country: String
  formFields: [FormFieldsType]
}


type CustomerAttributeType {
  id: Int
  attributeId: Int
  attributeValue: String
  customerId: Int
  dateCreated: String
  dateModified: String
}


type CustomerStoreCreditAmountsType {
  amount: Float
}


input CustomerInputType {
  storeHash: String!
  email: String!
  firstName: String!
  lastName: String!
  company: String
  phone: String
  notes: String
  addresses: [CustomerAddressInputType]
  authentication: CustomerAuthenticationInputType = null
  acceptsProductReviewAbandonedCartEmails: Boolean
  originChannelId: Int
  channelIds: [Int]
  formFields: [FormFieldsInputType]
  triggerAccountCreatedNotification: Boolean
}


input CustomerAddressInputType {
  firstName: String!
  lastName: String!
  company: String
  address1: String!
  address2: String
  city: String!
  phone: String
  stateOrProvince: String = ""
  countryCode: String!
  postalCode: String!
  addressType: String
  formFields: [AddressFormFieldsInputType] = []
}


input AddressFormFieldsInputType {
  name: String!
  value: GenericScalar!
}


input CustomerAuthenticationInputType {
  forcePasswordReset: Boolean
  newPassword: String
}


type CustomerSubscribersCreate {
  customerSubscribers: CustomerSubscribersType
}


type CustomerSubscribersType {
  email: String
  firstName: String
  lastName: String
  source: String
  orderId: Int
  channelId: Int
  id: Int
  dateCreated: String
  dateModified: String
  consents: [String]
}


input CustomerSubscribersInputType {
  storeHash: String!
  email: String!
  firstName: String
  lastName: String
  source: String
  orderId: Int
  channelId: Int
}


type UserMasqueradingCompanyBegin {
  userMasqueradingCompanyBegin: CompanyInfoType
}


type UserMasqueradingCompanyEnd {
  message: String
}


type AddressCreate {
  address: AddressType
}


input AddressInputType {
  companyId: Int!
  firstName: String!
  lastName: String!
  addressLine1: String!
  addressLine2: String = ""
  country: String!
  countryCode: String!
  state: String = ""
  stateCode: String = ""
  city: String!
  zipCode: String!
  phoneNumber: String = ""
  isShipping: Int = 0
  isBilling: Int = 0
  isDefaultShipping: Int = 0
  isDefaultBilling: Int = 0
  label: String = ""
  uuid: String = ""
  extraFields: [AddressExtraFieldInputType] = []
  company: String
}


input AddressExtraFieldInputType {
  fieldName: String!
  fieldValue: String!
}


type AddressUpdate {
  address: AddressType
}


input AddressUpdateType {
  companyId: Int!
  firstName: String!
  lastName: String!
  addressLine1: String!
  addressLine2: String = ""
  country: String!
  countryCode: String!
  state: String = ""
  stateCode: String = ""
  city: String!
  zipCode: String!
  phoneNumber: String = ""
  isShipping: Int = 0
  isBilling: Int = 0
  isDefaultShipping: Int = 0
  isDefaultBilling: Int = 0
  label: String = ""
  uuid: String = ""
  extraFields: [AddressExtraFieldInputType] = []
  company: String
  addressId: Int!
}


type AddressDelete {
  message: String
}


type CustomerAddressCreate {
  address: CustomerAddressType
}


type CustomerAddressUpdate {
  address: CustomerAddressType
}


input CustomerAddressUpdateType {
  firstName: String!
  lastName: String!
  company: String
  address1: String!
  address2: String
  city: String!
  phone: String
  stateOrProvince: String = ""
  countryCode: String!
  postalCode: String!
  addressType: String
  formFields: [AddressFormFieldsInputType] = []
  bcAddressId: Int!
}


type CustomerAddressDelete {
  message: String
}


`,pn=pv(),La=Gs(Ms.DIRECTIVES,[]);var Ef;const ev=Ys((Ef=pn.getQueryType())==null?void 0:Ef.getFields());var _f;const nv=Ys((_f=pn.getMutationType())==null?void 0:_f.getFields());var vf;const tv=Ys((vf=pn.getSubscriptionType())==null?void 0:vf.getFields()),ru=bt.keyBy(kp(),r=>r.name.toLocaleLowerCase()),rv=bt.mapValues(ru,r=>{const n=La.find(t=>(t==null?void 0:t.name)===r.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?r.args:n.args.map(t=>r.args.find(s=>s.name===t)).filter(t=>!!t):[]}),iv=Ys(pn.getTypeMap()),sv=J_(pn);function Ys(r){return bt.mapKeys(r||{},(n,t)=>t.toLocaleLowerCase())}function ov(){return bt.size(pn.getTypeMap())<=10}function av(){return[va("Queries",pn.getQueryType()),va("Mutations",pn.getMutationType()),va("Subscriptions",pn.getSubscriptionType()),dv(),cv()].filter(r=>!!r)}function va(r,n){return lv(r,uv(n))}function uv(r){return bt.sortBy((r==null?void 0:r.getFields())||{},n=>n.name)}function lv(r,n){return n.length===0?null:{type:"menu",title:r,children:n.map(t=>({type:"page",title:t.name,section:r,deprecated:!!t.deprecationReason,href:Ci.joinUrlPaths(Vs(),r.toLocaleLowerCase(),t.name)}))}}function cv(){return ov()?null:{type:"menu",title:"Types",children:bt.sortBy(bt.map(pn.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:Ci.joinUrlPaths(Vs(),"types",n.name)}))}}function Nv(){return!!pn.getQueryType()}function bv(r){return ev[r.toLocaleLowerCase()]}function wv(){return!!pn.getMutationType()}function xv(r){return nv[r.toLocaleLowerCase()]}function Ov(){return!!pn.getSubscriptionType()}function kv(r){return tv[r.toLocaleLowerCase()]}function Lv(r){return iv[r.toLocaleLowerCase()]}function fv(r){return ru[r.toLocaleLowerCase()]}function Rv(r){return fv(r.name)!==void 0}function Bv(){return bt.size(ru)>0}function Pv(r){return rv[r.name.toLocaleLowerCase()]||[]}function $v(r){if(r)return sv.getFor(r)}function Uv(r){return bt.flatMap(r.getFields(),n=>({field:n,possibleDescriptions:Op(n,r)}))}function Op(r,n){return r?r.description?[{description:r.description,from:n}]:je(n)?n.getInterfaces().flatMap(t=>Op(t.getFields()[r.name],t)):[]:[]}function kp(){return La.some(r=>(r==null?void 0:r.name)==="*")?pn.getDirectives().filter(r=>!["include","skip","deprecated","specifiedBy"].includes(r.name)):La.filter(r=>!!(r!=null&&r.name)).map(({name:r})=>r?pn.getDirective(r):void 0).filter(r=>!!r)}function pv(){return Tf.trim().length===0?j_(JSON.parse(JSON.stringify({__schema:{types:[]}}))):W_(Tf)}function dv(){const r=kp();return r.length===0?null:{type:"menu",title:"Directives",children:r.map(n=>({type:"page",title:n.name,href:Ci.joinUrlPaths(Vs(),"directives",n.name),section:"Directives"}))}}const Mv=Gs(Ms.APP_TITLE,"GraphQL Documentation"),Lp=gv().concat(av());yv(Lp);const hv=Object.freeze(Lp),Gv=mv();function gv(){return Gs(Ms.PAGES,Iv()).filter(n=>!!n).map(n=>Bp([],n))}function mv(){const r=Sv();if(r)return r.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function yv(r){function n(s,o){for(const a of s){if(a.type==="page"){o(a);continue}a.type==="menu"&&n(a.children,o)}}let t;n(r,s=>{t&&(t.next={title:s.title,section:s.section,href:s.href},s.previous={title:t.title,section:t.section,href:t.href}),t=s})}function Sv(){return Rp(()=>!0)}function Vv(r){return Rp(n=>n.href.toLocaleLowerCase()===r.toLocaleLowerCase())}function Rp(r){function n(t){for(const s of t){if(s.type==="page"&&r(s))return s;if(s.type==="menu"){const o=n(s.children);if(o)return o}}return null}return n(hv)}function Bp(r,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:Ci.joinUrlPaths(Vs(),...r,Df(n.title))};const t=r.concat([Df(n.title)]);return{type:"menu",title:n.title,children:n.content.map(s=>({...Bp(t,s),section:n.title}))}}function Df(r){return Ci.generatePathSegment(r,new bf)}function Iv(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(r=>r.trim()).join(`
`)}]}]}export{_D as A,ov as B,Lv as C,$v as D,Wt as E,et as F,Ve as G,Vn as H,je as I,Sn as J,D as K,Uv as L,hr as M,Br as N,Av as O,$s as P,Ff as Q,gi as R,Cv as S,bf as T,Ie as U,Nn as V,Mv as W,bt as _,wv as a,Nv as b,bv as c,Ov as d,kv as e,Vv as f,xv as g,Gv as h,Af as i,vv as j,Bv as k,fv as l,Pv as m,Vs as n,Rv as o,hv as p,lt as q,np as r,pn as s,In as t,Ci as u,Ce as v,Fv as w,Gs as x,Ms as y,li as z};
