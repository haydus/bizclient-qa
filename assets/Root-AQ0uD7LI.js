import{r as Nr,a as v,j as M,_ as K,u as Fr,T as _r,b as Or,c as je,d as Me,g as Ir,e as Dr,f as Ur,C as Br,h as Hr,i as Qr,k as Wr,R as Gr,H as Xr}from"./index-1625cX2G.js";var De,Le=Nr;De=Le.createRoot,Le.hydrateRoot;const Zr=v.createContext(null),Ue=Zr;function Be(){return v.useContext(Ue)}const qr=typeof Symbol=="function"&&Symbol.for,Kr=qr?Symbol.for("mui.nested"):"__THEME_NESTED__";function Yr(e,r){return typeof r=="function"?r(e):K({},e,r)}function Jr(e){const{children:r,theme:t}=e,n=Be(),s=v.useMemo(()=>{const i=n===null?t:Yr(n,t);return i!=null&&(i[Kr]=n!==null),i},[t,n]);return M.jsx(Ue.Provider,{value:s,children:r})}const Ae={};function Ne(e,r,t,n=!1){return v.useMemo(()=>{const s=e&&r[e]||r;if(typeof t=="function"){const i=t(s),d=e?K({},r,{[e]:i}):i;return n?()=>d:d}return e?K({},r,{[e]:t}):K({},r,t)},[e,r,t,n])}function Vr(e){const{children:r,theme:t,themeId:n}=e,s=Fr(Ae),i=Be()||Ae,d=Ne(n,s,t),g=Ne(n,i,t,!0);return M.jsx(Jr,{theme:g,children:M.jsx(_r.Provider,{value:d,children:r})})}const vr=["theme"];function et(e){let{theme:r}=e,t=Or(e,vr);const n=r[je];return M.jsx(Vr,K({},t,{themeId:n?je:void 0,theme:n||r}))}const Fe={components:{MuiButtonBase:{defaultProps:{disableRipple:!0}},MuiDivider:{styleOverrides:{vertical:{marginRight:10,marginLeft:10},middle:{marginTop:10,marginBottom:10,width:"80%"}}}}},rt={light:Me(Fe,{palette:{mode:"light",background:{default:"#fff",paper:"#eae3f3"},primary:{main:"#02027D"},secondary:{main:"#4b219f"}}}),dark:Me(Fe,{palette:{mode:"dark",background:{default:"#111",paper:"#260f8a"},primary:{main:"#eae3f3"},secondary:{main:"#a58fcd"}}})};var le={exports:{}};/*!
 * CSSJanus. https://www.mediawiki.org/wiki/CSSJanus
 *
 * Copyright 2014 Trevor Parscal
 * Copyright 2010 Roan Kattouw
 * Copyright 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e,r){var t;function n(i,d){var g=[],l=0;function b(h){return g.push(h),d}function R(){return g[l++]}return{tokenize:function(h){return h.replace(i,b)},detokenize:function(h){return h.replace(new RegExp("("+d+")","g"),R)}}}function s(){var i="`TMP`",d="`TMPLTR`",g="`TMPRTL`",l="`NOFLIP_SINGLE`",b="`NOFLIP_CLASS`",R="`COMMENT`",h="[^\\u0020-\\u007e]",U="(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)",T="(?:[0-9]*\\.[0-9]+|[0-9]+)",y="(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)",E="direction\\s*:\\s*",B="[!#$%&*-~]",C=`['"]?\\s*`,f="(^|[^a-zA-Z])",A="[^\\}]*?",N="\\/\\*\\!?\\s*@noflip\\s*\\*\\/",F="\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/",k="(?:"+U+"|\\\\[^\\r\\n\\f0-9a-f])",o="(?:[_a-z]|"+h+"|"+k+")",oe="(?:[_a-z0-9-]|"+h+"|"+k+")",Ye="-?"+o+oe+"*",pe=T+"(?:\\s*"+y+"|"+Ye+")?",$="((?:-?"+pe+")|(?:inherit|auto))",Je="(?:-?"+T+"(?:\\s*"+y+")?)",Ve="(?:\\+|\\-|\\*|\\/)",ve="(?:\\(|\\)|\\t| )",er="(?:"+ve+"|"+Je+"|"+Ve+"){3,}",rr="(?:calc\\((?:"+er+")\\))",ee="((?:-?"+pe+")|(?:inherit|auto)|"+rr+")",tr="((?:margin|padding|border-width)\\s*:\\s*)",nr="((?:-color|border-style)\\s*:\\s*)",Q="(#?"+oe+"+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",$e="(?:"+B+"|"+h+"|"+k+")*?",ke="(?![a-zA-Z])",fe="(?!("+oe+`|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|"[^"]*"|`+R+")*?{)",Pe="(?!"+$e+C+"\\))",re="(?="+$e+C+"\\))",ue="(\\s*(?:!important\\s*)?[;}])",Z=/`TMP`/g,sr=/`TMPLTR`/g,ar=/`TMPRTL`/g,cr=new RegExp(F,"gi"),ir=new RegExp("("+N+fe+"[^;}]+;?)","gi"),or=new RegExp("("+N+A+"})","gi"),pr=new RegExp("("+E+")ltr","gi"),fr=new RegExp("("+E+")rtl","gi"),ur=new RegExp(f+"(left)"+ke+Pe+fe,"gi"),gr=new RegExp(f+"(right)"+ke+Pe+fe,"gi"),dr=new RegExp(f+"(left)"+re,"gi"),hr=new RegExp(f+"(right)"+re,"gi"),xr=/(:dir\( *)ltr( *\))/g,lr=/(:dir\( *)rtl( *\))/g,mr=new RegExp(f+"(ltr)"+re,"gi"),wr=new RegExp(f+"(rtl)"+re,"gi"),Er=new RegExp(f+"([ns]?)e-resize","gi"),br=new RegExp(f+"([ns]?)w-resize","gi"),Rr=new RegExp(tr+ee+"(\\s+)"+ee+"(\\s+)"+ee+"(\\s+)"+ee+ue,"gi"),$r=new RegExp(nr+Q+"(\\s+)"+Q+"(\\s+)"+Q+"(\\s+)"+Q+ue,"gi"),kr=new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)("+pe+")","gi"),Pr=new RegExp("(background-position-x\\s*:\\s*)(-?"+T+"%)","gi"),Tr=new RegExp("(border-radius\\s*:\\s*)"+$+"(?:(?:\\s+"+$+")(?:\\s+"+$+")?(?:\\s+"+$+")?)?(?:(?:(?:\\s*\\/\\s*)"+$+")(?:\\s+"+$+")?(?:\\s+"+$+")?(?:\\s+"+$+")?)?"+ue,"gi"),yr=new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)"+$,"gi"),Cr=new RegExp("(text-shadow\\s*:\\s*)"+$+"(\\s*)"+Q,"gi"),Sr=new RegExp("(text-shadow\\s*:\\s*)"+Q+"(\\s*)"+$,"gi"),zr=new RegExp("(text-shadow\\s*:\\s*)"+$,"gi"),jr=new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)"+$+"(\\s*\\))","gi"),Mr=new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)"+$+"((?:\\s*,\\s*"+$+"){0,2}\\s*\\))","gi");function Te(a,S,x){var P,z;return x.slice(-1)==="%"&&(P=x.indexOf("."),P!==-1?(z=x.length-P-2,x=100-parseFloat(x),x=x.toFixed(z)+"%"):x=100-parseFloat(x)+"%"),S+x}function ge(a){switch(a.length){case 4:a=[a[1],a[0],a[3],a[2]];break;case 3:a=[a[1],a[0],a[1],a[2]];break;case 2:a=[a[1],a[0]];break;case 1:a=[a[0]];break}return a.join(" ")}function Lr(a,S){var x,P=[].slice.call(arguments),z=P.slice(2,6).filter(function(he){return he}),ze=P.slice(6,10).filter(function(he){return he}),Ar=P[10]||"";return ze.length?x=ge(z)+" / "+ge(ze):x=ge(z),S+x+Ar}function de(a){return parseFloat(a)===0?a:a[0]==="-"?a.slice(1):"-"+a}function ye(a,S,x){return S+de(x)}function Ce(a,S,x,P,z){return S+x+de(P)+z}function Se(a,S,x,P,z){return S+x+P+de(z)}return{transform:function(a,S){var x=new n(ir,l),P=new n(or,b),z=new n(cr,R);return a=z.tokenize(P.tokenize(x.tokenize(a.replace("`","%60")))),S.transformDirInUrl&&(a=a.replace(xr,"$1"+d+"$2").replace(lr,"$1"+g+"$2").replace(mr,"$1"+i).replace(wr,"$1ltr").replace(Z,"rtl").replace(sr,"ltr").replace(ar,"rtl")),S.transformEdgeInUrl&&(a=a.replace(dr,"$1"+i).replace(hr,"$1left").replace(Z,"right")),a=a.replace(pr,"$1"+i).replace(fr,"$1ltr").replace(Z,"rtl").replace(ur,"$1"+i).replace(gr,"$1left").replace(Z,"right").replace(Er,"$1$2"+i).replace(br,"$1$2e-resize").replace(Z,"w-resize").replace(Tr,Lr).replace(yr,ye).replace(Cr,Se).replace(Sr,Se).replace(zr,ye).replace(jr,Ce).replace(Mr,Ce).replace(Rr,"$1$2$3$8$5$6$7$4$9").replace($r,"$1$2$3$8$5$6$7$4$9").replace(kr,Te).replace(Pr,Te),a=x.detokenize(P.detokenize(z.detokenize(a))),a}}}t=new s,e.exports?r.transform=function(i,d,g){var l;return typeof d=="object"?l=d:(l={},typeof d=="boolean"&&(l.transformDirInUrl=d),typeof g=="boolean"&&(l.transformEdgeInUrl=g)),t.transform(i,l)}:typeof window<"u"&&(window.cssjanus=t)})(le,le.exports);var tt=le.exports;const nt=Ir(tt);var u="-ms-",Y="-moz-",p="-webkit-",me="comm",J="rule",be="decl",st="@media",at="@import",ct="@supports",He="@keyframes",Qe=Math.abs,Re=String.fromCharCode,we=Object.assign;function it(e,r){return w(e,0)^45?(((r<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}function We(e){return e.trim()}function O(e,r){return(e=r.exec(e))?e[0]:e}function c(e,r,t){return e.replace(r,t)}function te(e,r,t){return e.indexOf(r,t)}function w(e,r){return e.charCodeAt(r)|0}function H(e,r,t){return e.slice(r,t)}function _(e){return e.length}function ot(e){return e.length}function q(e,r){return r.push(e),e}function pt(e,r){return e.map(r).join("")}function _e(e,r){return e.filter(function(t){return!O(t,r)})}var ae=1,G=1,Ge=0,j=0,m=0,X="";function ce(e,r,t,n,s,i,d,g){return{value:e,root:r,parent:t,type:n,props:s,children:i,line:ae,column:G,length:d,return:"",siblings:g}}function I(e,r){return we(ce("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function W(e){for(;e.root;)e=I(e.root,{children:[e]});q(e,e.siblings)}function ft(){return m}function ut(){return m=j>0?w(X,--j):0,G--,m===10&&(G=1,ae--),m}function L(){return m=j<Ge?w(X,j++):0,G++,m===10&&(G=1,ae++),m}function D(){return w(X,j)}function ne(){return j}function ie(e,r){return H(X,e,r)}function V(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gt(e){return ae=G=1,Ge=_(X=e),j=0,[]}function dt(e){return X="",e}function xe(e){return We(ie(j-1,Ee(e===91?e+2:e===40?e+1:e)))}function ht(e){for(;(m=D())&&m<33;)L();return V(e)>2||V(m)>3?"":" "}function xt(e,r){for(;--r&&L()&&!(m<48||m>102||m>57&&m<65||m>70&&m<97););return ie(e,ne()+(r<6&&D()==32&&L()==32))}function Ee(e){for(;L();)switch(m){case e:return j;case 34:case 39:e!==34&&e!==39&&Ee(m);break;case 40:e===41&&Ee(e);break;case 92:L();break}return j}function lt(e,r){for(;L()&&e+m!==57;)if(e+m===84&&D()===47)break;return"/*"+ie(r,j-1)+"*"+Re(e===47?e:L())}function mt(e){for(;!V(D());)L();return ie(e,j)}function wt(e){return dt(se("",null,null,null,[""],e=gt(e),0,[0],e))}function se(e,r,t,n,s,i,d,g,l){for(var b=0,R=0,h=d,U=0,T=0,y=0,E=1,B=1,C=1,f=0,A="",N=s,F=i,k=n,o=A;B;)switch(y=f,f=L()){case 40:if(y!=108&&w(o,h-1)==58){te(o+=c(xe(f),"&","&\f"),"&\f",Qe(b?g[b-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:o+=xe(f);break;case 9:case 10:case 13:case 32:o+=ht(y);break;case 92:o+=xt(ne()-1,7);continue;case 47:switch(D()){case 42:case 47:q(Et(lt(L(),ne()),r,t,l),l),(V(y||1)==5||V(D()||1)==5)&&_(o)&&H(o,-1,void 0)!==" "&&(o+=" ");break;default:o+="/"}break;case 123*E:g[b++]=_(o)*C;case 125*E:case 59:case 0:switch(f){case 0:case 125:B=0;case 59+R:C==-1&&(o=c(o,/\f/g,"")),T>0&&(_(o)-h||E===0&&y===47)&&q(T>32?Ie(o+";",n,t,h-1,l):Ie(c(o," ","")+";",n,t,h-2,l),l);break;case 59:o+=";";default:if(q(k=Oe(o,r,t,b,R,s,g,A,N=[],F=[],h,i),i),f===123)if(R===0)se(o,r,k,k,N,i,h,g,F);else{switch(U){case 99:if(w(o,3)===110)break;case 108:if(w(o,2)===97)break;default:R=0;case 100:case 109:case 115:}R?se(e,k,k,n&&q(Oe(e,k,k,0,0,s,g,A,s,N=[],h,F),F),s,F,h,g,n?N:F):se(o,k,k,k,[""],F,0,g,F)}}b=R=T=0,E=C=1,A=o="",h=d;break;case 58:h=1+_(o),T=y;default:if(E<1){if(f==123)--E;else if(f==125&&E++==0&&ut()==125)continue}switch(o+=Re(f),f*E){case 38:C=R>0?1:(o+="\f",-1);break;case 44:g[b++]=(_(o)-1)*C,C=1;break;case 64:D()===45&&(o+=xe(L())),U=D(),R=h=_(A=o+=mt(ne())),f++;break;case 45:y===45&&_(o)==2&&(E=0)}}return i}function Oe(e,r,t,n,s,i,d,g,l,b,R,h){for(var U=s-1,T=s===0?i:[""],y=ot(T),E=0,B=0,C=0;E<n;++E)for(var f=0,A=H(e,U+1,U=Qe(B=d[E])),N=e;f<y;++f)(N=We(B>0?T[f]+" "+A:c(A,/&\f/g,T[f])))&&(l[C++]=N);return ce(e,r,t,s===0?J:g,l,b,R,h)}function Et(e,r,t,n){return ce(e,r,t,me,Re(ft()),H(e,2,-2),0,n)}function Ie(e,r,t,n,s){return ce(e,r,t,be,H(e,0,n),H(e,n+1,-1),n,s)}function Xe(e,r,t){switch(it(e,r)){case 5103:return p+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return p+e+e;case 4855:return p+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Y+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return p+e+Y+e+u+e+e;case 5936:switch(w(e,r+11)){case 114:return p+e+u+c(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return p+e+u+c(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return p+e+u+c(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return p+e+u+e+e;case 6165:return p+e+u+"flex-"+e+e;case 5187:return p+e+c(e,/(\w+).+(:[^]+)/,p+"box-$1$2"+u+"flex-$1$2")+e;case 5443:return p+e+u+"flex-item-"+c(e,/flex-|-self/g,"")+(O(e,/flex-|baseline/)?"":u+"grid-row-"+c(e,/flex-|-self/g,""))+e;case 4675:return p+e+u+"flex-line-pack"+c(e,/align-content|flex-|-self/g,"")+e;case 5548:return p+e+u+c(e,"shrink","negative")+e;case 5292:return p+e+u+c(e,"basis","preferred-size")+e;case 6060:return p+"box-"+c(e,"-grow","")+p+e+u+c(e,"grow","positive")+e;case 4554:return p+c(e,/([^-])(transform)/g,"$1"+p+"$2")+e;case 6187:return c(c(c(e,/(zoom-|grab)/,p+"$1"),/(image-set)/,p+"$1"),e,"")+e;case 5495:case 3959:return c(e,/(image-set\([^]*)/,p+"$1$`$1");case 4968:return c(c(e,/(.+:)(flex-)?(.*)/,p+"box-pack:$3"+u+"flex-pack:$3"),/space-between/,"justify")+p+e+e;case 4200:if(!O(e,/flex-|baseline/))return u+"grid-column-align"+H(e,r)+e;break;case 2592:case 3360:return u+c(e,"template-","")+e;case 4384:case 3616:return t&&t.some(function(n,s){return r=s,O(n.props,/grid-\w+-end/)})?~te(e+(t=t[r].value),"span",0)?e:u+c(e,"-start","")+e+u+"grid-row-span:"+(~te(t,"span",0)?O(t,/\d+/):+O(t,/\d+/)-+O(e,/\d+/))+";":u+c(e,"-start","")+e;case 4896:case 4128:return t&&t.some(function(n){return O(n.props,/grid-\w+-start/)})?e:u+c(c(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return c(e,/(.+)-inline(.+)/,p+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(e)-1-r>6)switch(w(e,r+1)){case 109:if(w(e,r+4)!==45)break;case 102:return c(e,/(.+:)(.+)-([^]+)/,"$1"+p+"$2-$3$1"+Y+(w(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~te(e,"stretch",0)?Xe(c(e,"stretch","fill-available"),r,t)+e:e}break;case 5152:case 5920:return c(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,i,d,g,l,b){return u+s+":"+i+b+(d?u+s+"-span:"+(g?l:+l-+i)+b:"")+e});case 4949:if(w(e,r+6)===121)return c(e,":",":"+p)+e;break;case 6444:switch(w(e,w(e,14)===45?18:11)){case 120:return c(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+p+(w(e,14)===45?"inline-":"")+"box$3$1"+p+"$2$3$1"+u+"$2box$3")+e;case 100:return c(e,":",":"+u)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return c(e,"scroll-","scroll-snap-")+e}return e}function Ze(e,r){for(var t="",n=0;n<e.length;n++)t+=r(e[n],n,e,r)||"";return t}function bt(e,r,t,n){if(e.length>-1&&!e.return)switch(e.type){case be:e.return=Xe(e.value,e.length,t);return;case He:return Ze([I(e,{value:c(e.value,"@","@"+p)})],n);case J:if(e.length)return pt(t=e.props,function(s){switch(O(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":W(I(e,{props:[c(s,/:(read-\w+)/,":"+Y+"$1")]})),W(I(e,{props:[s]})),we(e,{props:_e(t,n)});break;case"::placeholder":W(I(e,{props:[c(s,/:(plac\w+)/,":"+p+"input-$1")]})),W(I(e,{props:[c(s,/:(plac\w+)/,":"+Y+"$1")]})),W(I(e,{props:[c(s,/:(plac\w+)/,u+"input-$1")]})),W(I(e,{props:[s]})),we(e,{props:_e(t,n)});break}return""})}}function qe(e,r,t){switch(e.type){case at:case be:case me:return e.return=e.return||e.value;case J:e.value=Array.isArray(e.props)?e.props.join(","):e.props,Array.isArray(e.children)&&e.children.forEach(function(s){s.type===me&&(s.children=s.value)})}var n=Ze(Array.prototype.concat(e.children),qe);return _(n)?e.return=e.value+"{"+n+"}":""}function Ke(e,r,t,n){if(e.type===He||e.type===ct||e.type===J&&(!e.parent||e.parent.type===st||e.parent.type===J)){var s=nt.transform(qe(e));e.children=s?wt(s)[0].children:[],e.return=""}}Object.defineProperty(Ke,"name",{value:"stylisRTLPlugin"});const Rt=Dr({key:"muirtl",stylisPlugins:[bt,Ke]});function $t({children:e}){const[r]=Ur();return M.jsx(Br,{value:Rt,children:M.jsx(et,{theme:Hr({...rt[r],direction:Qr.dir(Wr)}),children:e})})}const kt=document.getElementById("root"),Pt=De(kt);function yt(e){Pt.render(M.jsx(v.StrictMode,{children:M.jsx(Gr,{children:M.jsx(Xr,{children:M.jsx($t,{children:M.jsx(e,{})})})})}))}export{yt as default};
