import{S as Y,i as Z,s as x,k as d,q as k,a as T,l as v,m,r as y,h as f,c as j,n as E,b as I,D as u,E as ee,u as q,F as L,g as p,d as b,f as G,o as te,M as ae,e as Q,v as J,N as se,y as le,z as ne,A as re,B as ie,O as oe}from"../chunks/index.2914ea36.js";import{g as ce}from"../chunks/navigation.2e92e3cc.js";function ue(i){let a,t,e,s=i[0].id+"",l,c,r,n,o,w=i[0].name+"",N,O,D=i[0].name_original+"",V,P,g,z,S=i[0].verse_count+"",$,B,K;return{c(){a=d("div"),t=d("div"),e=d("span"),l=k(s),c=k("-"),r=T(),n=d("div"),o=d("h4"),N=k(w),O=k(" - "),V=k(D),P=T(),g=d("div"),z=k("Ayet Sayısı: "),$=k(S),this.h()},l(_){a=v(_,"DIV",{class:!0});var h=m(a);t=v(h,"DIV",{class:!0});var C=m(t);e=v(C,"SPAN",{class:!0});var F=m(e);l=y(F,s),c=y(F,"-"),F.forEach(f),r=j(C),n=v(C,"DIV",{class:!0});var A=m(n);o=v(A,"H4",{class:!0});var M=m(o);N=y(M,w),O=y(M," - "),V=y(M,D),M.forEach(f),P=j(A),g=v(A,"DIV",{class:!0});var H=m(g);z=y(H,"Ayet Sayısı: "),$=y(H,S),H.forEach(f),A.forEach(f),C.forEach(f),h.forEach(f),this.h()},h(){E(e,"class","svelte-tagpwx"),E(o,"class","svelte-tagpwx"),E(g,"class","container svelte-tagpwx"),E(n,"class","b svelte-tagpwx"),E(t,"class","a svelte-tagpwx"),E(a,"class","card svelte-tagpwx")},m(_,h){I(_,a,h),u(a,t),u(t,e),u(e,l),u(e,c),u(t,r),u(t,n),u(n,o),u(o,N),u(o,O),u(o,V),u(n,P),u(n,g),u(g,z),u(g,$),B||(K=ee(a,"click",i[1]),B=!0)},p(_,[h]){h&1&&s!==(s=_[0].id+"")&&q(l,s),h&1&&w!==(w=_[0].name+"")&&q(N,w),h&1&&D!==(D=_[0].name_original+"")&&q(V,D),h&1&&S!==(S=_[0].verse_count+"")&&q($,S)},i:L,o:L,d(_){_&&f(a),B=!1,K()}}}function fe(i,a,t){let{sura:e={id:0,name:"",name_original:"",verse_count:0}}=a;function s(){ce(`/surahs/${e.id}`)}return i.$$set=l=>{"sura"in l&&t(0,e=l.sura)},[e,s]}class _e extends Y{constructor(a){super(),Z(this,a,fe,ue,x,{sura:0})}}function R(i,a,t){const e=i.slice();return e[2]=a[t],e[4]=t,e}function U(i){let a,t,e=i[0].surahs&&W(i);return{c(){e&&e.c(),a=Q()},l(s){e&&e.l(s),a=Q()},m(s,l){e&&e.m(s,l),I(s,a,l),t=!0},p(s,l){s[0].surahs?e?(e.p(s,l),l&1&&p(e,1)):(e=W(s),e.c(),p(e,1),e.m(a.parentNode,a)):e&&(J(),b(e,1,1,()=>{e=null}),G())},i(s){t||(p(e),t=!0)},o(s){b(e),t=!1},d(s){e&&e.d(s),s&&f(a)}}}function W(i){let a,t=[],e=new Map,s,l=i[0].surahs;const c=r=>r[2].id;for(let r=0;r<l.length;r+=1){let n=R(i,l,r),o=c(n);e.set(o,t[r]=X(o,n))}return{c(){a=d("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){a=v(r,"DIV",{class:!0});var n=m(a);for(let o=0;o<t.length;o+=1)t[o].l(n);n.forEach(f),this.h()},h(){E(a,"class","grid-container svelte-vctwhn")},m(r,n){I(r,a,n);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(a,null);s=!0},p(r,n){n&1&&(l=r[0].surahs,J(),t=se(t,n,c,1,r,l,e,a,oe,X,null,R),G())},i(r){if(!s){for(let n=0;n<l.length;n+=1)p(t[n]);s=!0}},o(r){for(let n=0;n<t.length;n+=1)b(t[n]);s=!1},d(r){r&&f(a);for(let n=0;n<t.length;n+=1)t[n].d()}}}function X(i,a){let t,e,s,l;return e=new _e({props:{sura:a[2]}}),{key:i,first:null,c(){t=d("div"),le(e.$$.fragment),s=T(),this.h()},l(c){t=v(c,"DIV",{});var r=m(t);ne(e.$$.fragment,r),s=j(r),r.forEach(f),this.h()},h(){this.first=t},m(c,r){I(c,t,r),re(e,t,null),u(t,s),l=!0},p(c,r){a=c;const n={};r&1&&(n.sura=a[2]),e.$set(n)},i(c){l||(p(e.$$.fragment,c),l=!0)},o(c){b(e.$$.fragment,c),l=!1},d(c){c&&f(t),ie(e)}}}function he(i){let a,t,e=i[1]&&U(i);return{c(){a=d("section"),e&&e.c()},l(s){a=v(s,"SECTION",{});var l=m(a);e&&e.l(l),l.forEach(f)},m(s,l){I(s,a,l),e&&e.m(a,null),t=!0},p(s,[l]){s[1]?e?(e.p(s,l),l&2&&p(e,1)):(e=U(s),e.c(),p(e,1),e.m(a,null)):e&&(J(),b(e,1,1,()=>{e=null}),G())},i(s){t||(p(e),t=!0)},o(s){b(e),t=!1},d(s){s&&f(a),e&&e.d()}}}function de(i,a,t){let e,{data:s}=a;return te(()=>{t(1,e=!0)}),ae(()=>{t(1,e=!1)}),i.$$set=l=>{"data"in l&&t(0,s=l.data)},t(1,e=!1),[s,e]}class pe extends Y{constructor(a){super(),Z(this,a,de,he,x,{data:0})}}export{pe as default};
