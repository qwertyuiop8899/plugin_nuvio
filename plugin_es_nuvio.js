/* Eurostreaming (es) provider - Nuvio plugin
 * Only TV series. Extracts mixdrop, turbovid, deltabit streams
 * with clicka.cc captcha OCR resolution (pure JS, zero dependencies).
 */

// =========================================================================
// ZERO-DEPENDENCY INFLATER (pure JS zlib inflater)
// =========================================================================
var _unzlibSync;

// =========================================================================
// SAFE FETCH WRAPPER (for Nuvio / React Native client sandbox)
// =========================================================================
(()=>{var wr=(r,n,t)=>()=>{if(t)throw t[0];try{return r&&(n=r(r=0)),n}catch(a){throw t=[a],a}};var mr=(r,n)=>()=>{try{return n||r((n={exports:{}}).exports,n),n.exports}catch(t){throw n=0,t}};function hr(r,n){return Cr(r.subarray(Br(r,n&&n.dictionary),-4),{i:2},n&&n.out,n&&n.dictionary)}var h,S,xr,tr,er,zr,ir,ar,or,Ar,sr,Mr,Lr,W,g,o,I,B,o,o,o,o,fr,o,Sr,Tr,d,u,V,Ur,Fr,Dr,l,Cr,Ir,Br,Zr,Er,ur=wr(()=>{h=Uint8Array,S=Uint16Array,xr=Int32Array,tr=new h([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),er=new h([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),zr=new h([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ir=function(r,n){for(var t=new S(31),a=0;a<31;++a)t[a]=n+=1<<r[a-1];for(var i=new xr(t[30]),a=1;a<30;++a)for(var c=t[a];c<t[a+1];++c)i[c]=c-t[a]<<5|a;return{b:t,r:i}},ar=ir(tr,2),or=ar.b,Ar=ar.r;or[28]=258,Ar[258]=28;sr=ir(er,0),Mr=sr.b,Lr=sr.r,W=new S(32768);for(o=0;o<32768;++o)g=(o&43690)>>1|(o&21845)<<1,g=(g&52428)>>2|(g&13107)<<2,g=(g&61680)>>4|(g&3855)<<4,W[o]=((g&65280)>>8|(g&255)<<8)>>1;I=(function(r,n,t){for(var a=r.length,i=0,c=new S(n);i<a;++i)r[i]&&++c[r[i]-1];var y=new S(n);for(i=1;i<n;++i)y[i]=y[i-1]+c[i-1]<<1;var p;if(t){p=new S(1<<n);var z=15-n;for(i=0;i<a;++i)if(r[i])for(var T=i<<4|r[i],w=n-r[i],e=y[r[i]-1]++<<w,s=e|(1<<w)-1;e<=s;++e)p[W[e]>>z]=T}else for(p=new S(a),i=0;i<a;++i)r[i]&&(p[i]=W[y[r[i]-1]++]>>15-r[i]);return p}),B=new h(288);for(o=0;o<144;++o)B[o]=8;for(o=144;o<256;++o)B[o]=9;for(o=256;o<280;++o)B[o]=7;for(o=280;o<288;++o)B[o]=8;fr=new h(32);for(o=0;o<32;++o)fr[o]=5;Sr=I(B,9,1),Tr=I(fr,5,1),d=function(r){for(var n=r[0],t=1;t<r.length;++t)r[t]>n&&(n=r[t]);return n},u=function(r,n,t){var a=n/8|0;return(r[a]|r[a+1]<<8)>>(n&7)&t},V=function(r,n){var t=n/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(n&7)},Ur=function(r){return(r+7)/8|0},Fr=function(r,n,t){return(n==null||n<0)&&(n=0),(t==null||t>r.length)&&(t=r.length),new h(r.subarray(n,t))},Dr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],l=function(r,n,t){var a=new Error(n||Dr[r]);if(a.code=r,Error.captureStackTrace&&Error.captureStackTrace(a,l),!t)throw a;return a},Cr=function(r,n,t,a){var i=r.length,c=a?a.length:0;if(!i||n.f&&!n.l)return t||new h(0);var y=!t,p=y||n.i!=2,z=n.i;y&&(t=new h(i*3));var T=function(_){var rr=t.length;if(_>rr){var nr=new h(Math.max(rr*2,_));nr.set(t),t=nr}},w=n.f||0,e=n.p||0,s=n.b||0,x=n.l,Z=n.d,U=n.m,F=n.n,G=i*8;do{if(!x){w=u(r,e,1);var O=u(r,e+1,3);if(e+=3,O)if(O==1)x=Sr,Z=Tr,U=9,F=5;else if(O==2){var P=u(r,e,31)+257,Y=u(r,e+10,15)+4,j=P+u(r,e+5,31)+1;e+=14;for(var D=new h(j),$=new h(19),f=0;f<Y;++f)$[zr[f]]=u(r,e+f*3,7);e+=Y*3;for(var J=d($),vr=(1<<J)-1,cr=I($,J,1),f=0;f<j;){var K=cr[u(r,e,vr)];e+=K&15;var v=K>>4;if(v<16)D[f++]=v;else{var A=0,E=0;for(v==16?(E=3+u(r,e,3),e+=2,A=D[f-1]):v==17?(E=3+u(r,e,7),e+=3):v==18&&(E=11+u(r,e,127),e+=7);E--;)D[f++]=A}}var Q=D.subarray(0,P),m=D.subarray(P);U=d(Q),F=d(m),x=I(Q,U,1),Z=I(m,F,1)}else l(1);else{var v=Ur(e)+4,q=r[v-4]|r[v-3]<<8,L=v+q;if(L>i){z&&l(0);break}p&&T(s+q),t.set(r.subarray(v,L),s),n.b=s+=q,n.p=e=L*8,n.f=w;continue}if(e>G){z&&l(0);break}}p&&T(s+131072);for(var pr=(1<<U)-1,gr=(1<<F)-1,H=e;;H=e){var A=x[V(r,e)&pr],M=A>>4;if(e+=A&15,e>G){z&&l(0);break}if(A||l(2),M<256)t[s++]=M;else if(M==256){H=e,x=null;break}else{var X=M-254;if(M>264){var f=M-257,C=tr[f];X=u(r,e,(1<<C)-1)+or[f],e+=C}var N=Z[V(r,e)&gr],R=N>>4;N||l(3),e+=N&15;var m=Mr[R];if(R>3){var C=er[R];m+=V(r,e)&(1<<C)-1,e+=C}if(e>G){z&&l(0);break}p&&T(s+131072);var k=s+X;if(s<m){var b=c-m,yr=Math.min(m,k);for(b+s<0&&l(3);s<yr;++s)t[s]=a[b+s]}for(;s<k;++s)t[s]=t[s-m]}}n.l=x,n.p=H,n.b=s,n.f=w,x&&(w=1,n.m=U,n.d=Z,n.n=F)}while(!w);return s!=t.length&&y?Fr(t,0,s):t.subarray(0,s)},Ir=new h(0),Br=function(r,n){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&l(6,"invalid zlib data"),(r[1]>>5&1)==+!n&&l(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};Zr=typeof TextDecoder<"u"&&new TextDecoder,Er=0;try{Zr.decode(Ir,{stream:!0}),Er=1}catch{}});var Or=mr(lr=>{ur();var Gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:lr;_unzlibSync=hr;_unzlibSync=hr;Gr._unzlibSync=hr});Or();})();

// =========================================================================
// BASE64 DECODER POLYFILL (for React Native environments without atob)
// =========================================================================
function _atob(b64) {
  if (typeof atob !== "undefined") return atob(b64);
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var str = String(b64).replace(/=+$/, "");
  var output = "";
  for (var bc = 0, bs, buffer, idx = 0; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
    buffer = chars.indexOf(buffer);
  }
  return output;
}

// =========================================================================
// URL HELPERS (pure regex, no reliance on global URL / React Native URL polyfill)
// =========================================================================
function _resolveUrl(href, base) {
  if (!href) return base || '';
  href = String(href).trim();
  if (href.indexOf('://') >= 0) return href;
  if (href.indexOf('//') === 0) {
    var proto = (base && base.indexOf('https:') === 0) ? 'https:' : 'http:';
    return proto + href;
  }
  if (!base) return href;
  var baseMatch = String(base).match(/^(https?:\/\/[^\/]+)(.*)$/i);
  if (!baseMatch) return href;
  var baseOrigin = baseMatch[1];
  var basePath = baseMatch[2] || '';
  if (href.indexOf('/') === 0) {
    return baseOrigin + href;
  }
  var dir = basePath.substring(0, basePath.lastIndexOf('/') + 1);
  if (!dir) dir = '/';
  return baseOrigin + dir + href;
}

function _getUrlOrigin(url) {
  var m = String(url || '').match(/^(https?:\/\/[^\/:]+(?::\d+)?)/i);
  return m ? m[1] : '';
}

function _getUrlHost(url) {
  var m = String(url || '').match(/^https?:\/\/([^\/]+)/i);
  return m ? m[1].toLowerCase() : '';
}

function _getUrlHostname(url) {
  var m = String(url || '').match(/^https?:\/\/([^/:]+)/i);
  return m ? m[1].toLowerCase() : '';
}

function _getUrlPath(url) {
  var m = String(url || '').match(/^https?:\/\/[^\/]+(\/?.*?)(?:[?#]|$)/i);
  return (m && m[1]) ? (m[1].startsWith('/') ? m[1] : '/' + m[1]) : '/';
}

// =========================================================================
// SAFE FETCH WRAPPER (automatically proxies clicka/deltabit/turbovid/safego)
// =========================================================================
var ES_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36';

function _customFetch(url, options, timeoutMs) {
  var targetUrl = url;
  var lower = String(url || '').toLowerCase();
  var isClicaDeltabit = lower.indexOf('clicka.cc/delta') >= 0 || lower.indexOf('clicka.cc/adelta') >= 0;
  var isClicaTurbovid = lower.indexOf('clicka.cc/tv/') >= 0 || lower.indexOf('clicka.cc/tva/') >= 0;
  var isDeltabitHost = lower.indexOf('deltabit') >= 0;
  var isTurbovidHost = lower.indexOf('turbovid') >= 0;
  var isSafego = lower.indexOf('safego.cc') >= 0;
  var isEurostreaming = lower.indexOf('eurostreaming') >= 0;

  if (isClicaDeltabit || isClicaTurbovid || isDeltabitHost || isTurbovidHost || isSafego || isEurostreaming) {
    if (lower.indexOf('workers.dev') < 0) {
      targetUrl = 'https://vidclick.leanhhu061208-775.workers.dev/?url=' + encodeURIComponent(url);
    }
  }

  var ms = timeoutMs || (options && options.timeout) || 15000;
  var opts = options ? Object.assign({}, options) : {};
  delete opts.timeout;

  var fetchFn = (typeof fetch !== 'undefined') ? fetch : (typeof globalThis !== 'undefined' ? globalThis.fetch : null);
  if (!fetchFn) {
    return Promise.reject(new Error('fetch is not defined in runtime'));
  }

  var timer = null;
  var timeoutPromise = new Promise(function (_, reject) {
    timer = setTimeout(function () {
      reject(new Error('Fetch timeout (' + ms + 'ms) for ' + url));
    }, ms);
  });

  return Promise.race([
    fetchFn(targetUrl, opts).then(function (res) {
      if (timer) clearTimeout(timer);
      return res;
    }),
    timeoutPromise
  ]);
}

var MD_HOSTS = [
  'mixdrop.vip', 'mixdrop.ps', 'mixdrop.ch', 'mixdrop.to', 'mixdrop.club',
  'mixdrop.is', 'mixdrop.sb', 'mixdrop.co', 'mixdrop.ag', 'mixdrop.net',
  'm1xdrop.net', 'mxdrop.net', 'miixdrop.net'
];

var MD_PAT = 'm[i1!ì]{1,2}[x×][ _-]?d[r]{1,2}[o0ø][ _-]?p';

function _decodeEntities(s) {
  if (!s) return '';
  return s
    .replace(/&quot;/g, '"').replace(/&#0?34;/g, '"')
    .replace(/&#0?39;/g, "'").replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function _sleep(ms) {
  return new Promise(function (r) { setTimeout(r, ms); });
}

function _isDigit(s) { return /^\d+$/.test(s); }

// =========================================================================
// COOKIE JAR
// =========================================================================
function _jarGet(url, jar) {
  if (!jar) return '';
  var hostname = _getUrlHostname(url);
  var cookies = jar[hostname];
  if (!cookies) return '';
  var parts = [];
  for (var name in cookies) {
    parts.push(name + '=' + cookies[name]);
  }
  return parts.join('; ');
}

function _jarSet(url, setCookieHeader, jar) {
  if (!jar || !setCookieHeader) return;
  var hostname = _getUrlHostname(url);
  if (!jar[hostname]) jar[hostname] = {};
  var list = Array.isArray(setCookieHeader) ? setCookieHeader : [setCookieHeader];
  for (var i = 0; i < list.length; i++) {
    var raw = list[i].split(';')[0];
    var eqIdx = raw.indexOf('=');
    if (eqIdx > 0) {
      var k = raw.substring(0, eqIdx).trim();
      var v = raw.substring(eqIdx + 1).trim();
      jar[hostname][k] = v;
    }
  }
}

// =========================================================================
// EMBEDDED PURE JS BITMAP CAPTCHA OCR (for clicka.cc)
// =========================================================================
function _solveCaptchaBmp(bmpBuffer) {
  try {
    if (!bmpBuffer || bmpBuffer.length < 54) return null;
    var dataOffset = bmpBuffer[10] | (bmpBuffer[11] << 8) | (bmpBuffer[12] << 16) | (bmpBuffer[13] << 24);
    var width = bmpBuffer[18] | (bmpBuffer[19] << 8) | (bmpBuffer[20] << 16) | (bmpBuffer[21] << 24);
    var height = bmpBuffer[22] | (bmpBuffer[23] << 8) | (bmpBuffer[24] << 16) | (bmpBuffer[25] << 24);
    var bpp = bmpBuffer[28] | (bmpBuffer[29] << 8);

    if (bpp !== 24 && bpp !== 32) return null;
    var bytesPerPixel = bpp / 8;
    var rowSize = Math.floor((bpp * width + 31) / 32) * 4;
    var isTopDown = height < 0;
    var absHeight = Math.abs(height);

    var grid = [];
    for (var y = 0; y < absHeight; y++) {
      grid.push(new Uint8Array(width));
    }

    for (var r = 0; r < absHeight; r++) {
      var sourceRow = isTopDown ? r : (absHeight - 1 - r);
      var rowStart = dataOffset + r * rowSize;
      for (var c = 0; c < width; c++) {
        var p = rowStart + c * bytesPerPixel;
        var blue = bmpBuffer[p];
        var green = bmpBuffer[p + 1];
        var red = bmpBuffer[p + 2];
        var isDark = (red < 120 && green < 120 && blue < 120);
        grid[sourceRow][c] = isDark ? 1 : 0;
      }
    }

    var colCounts = new Int32Array(width);
    for (var c = 0; c < width; c++) {
      var cnt = 0;
      for (var r = 0; r < absHeight; r++) {
        if (grid[r][c]) cnt++;
      }
      colCounts[c] = cnt;
    }

    var segments = [];
    var inDigit = false;
    var startCol = 0;
    for (var c = 0; c < width; c++) {
      if (colCounts[c] > 1) {
        if (!inDigit) { inDigit = true; startCol = c; }
      } else {
        if (inDigit) {
          inDigit = false;
          if (c - startCol >= 5) segments.push({ start: startCol, end: c });
        }
      }
    }
    if (inDigit && width - startCol >= 5) segments.push({ start: startCol, end: width });

    if (segments.length > 6) {
      segments.sort(function (a, b) { return (b.end - b.start) - (a.end - a.start); });
      segments = segments.slice(0, 6);
      segments.sort(function (a, b) { return a.start - b.start; });
    }

    var result = '';
    for (var i = 0; i < segments.length; i++) {
      var seg = segments[i];
      var digit = _recognizeDigit(grid, absHeight, seg.start, seg.end);
      if (digit !== null) result += digit;
    }

    return result.length >= 4 ? result : null;
  } catch (e) {
    return null;
  }
}

var _DIGIT_MODELS = (function () {
  var data = {};
  data[0] = { w: 10, pixels: [[0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0]] };
  data[1] = { w: 6, pixels: [[0, 0, 1, 1, 0, 0], [0, 1, 1, 1, 0, 0], [1, 1, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1]] };
  data[2] = { w: 10, pixels: [[0, 1, 1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]] };
  data[3] = { w: 10, pixels: [[0, 1, 1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [1, 1, 0, 0, 0, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 0, 0, 0]] };
  data[4] = { w: 10, pixels: [[0, 0, 0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 1, 1, 0, 0, 0], [0, 1, 1, 0, 0, 1, 1, 0, 0, 0], [1, 1, 0, 0, 0, 1, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 0, 0]] };
  data[5] = { w: 10, pixels: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [1, 1, 0, 0, 0, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 0, 0, 0]] };
  data[6] = { w: 10, pixels: [[0, 0, 1, 1, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 1, 0, 0], [1, 1, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 1, 1, 1, 1, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 1, 1, 0], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0]] };
  data[7] = { w: 10, pixels: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]] };
  data[8] = { w: 10, pixels: [[0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 0]] };
  data[9] = { w: 10, pixels: [[0, 0, 1, 1, 1, 1, 1, 1, 0, 0], [0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 0, 0, 0, 1, 1], [0, 1, 1, 0, 0, 0, 0, 1, 1, 1], [0, 0, 1, 1, 1, 1, 1, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0], [0, 1, 1, 0, 0, 0, 0, 1, 1, 0], [0, 0, 1, 1, 1, 1, 1, 0, 0, 0]] };
  return data;
})();

function _recognizeDigit(grid, height, colStart, colEnd) {
  var minR = height, maxR = 0;
  for (var r = 0; r < height; r++) {
    for (var c = colStart; c < colEnd; c++) {
      if (grid[r][c]) {
        if (r < minR) minR = r;
        if (r > maxR) maxR = r;
      }
    }
  }

  if (minR > maxR) return null;
  var dH = maxR - minR + 1;
  var dW = colEnd - colStart;
  if (dH < 8 || dW < 4) return null;

  var bestDigit = null;
  var bestScore = -1;

  for (var d = 0; d <= 9; d++) {
    var model = _DIGIT_MODELS[d];
    var mH = model.pixels.length;
    var mW = model.w;

    var matches = 0;
    var total = 0;

    for (var my = 0; my < mH; my++) {
      var gy = Math.floor(minR + (my / mH) * dH);
      for (var mx = 0; mx < mW; mx++) {
        var gx = Math.floor(colStart + (mx / mW) * dW);
        var gVal = (gy < height && gx < grid[0].length) ? grid[gy][gx] : 0;
        var mVal = model.pixels[my][mx];
        if (gVal === mVal) matches++;
        total++;
      }
    }

    var score = matches / total;
    if (score > bestScore) {
      bestScore = score;
      bestDigit = d;
    }
  }

  return bestScore >= 0.70 ? String(bestDigit) : null;
}

// =========================================================================
// PURE JS PNG INFLATER & OCR
// =========================================================================
function _solveCaptchaPng(pngBuffer) {
  try {
    if (!pngBuffer || pngBuffer.length < 8) return null;
    if (pngBuffer[0] !== 0x89 || pngBuffer[1] !== 0x50 || pngBuffer[2] !== 0x4E || pngBuffer[3] !== 0x47) {
      return null;
    }

    var width = 0, height = 0, bitDepth = 0, colorType = 0;
    var idatChunks = [];
    var offset = 8;

    while (offset < pngBuffer.length) {
      var length = (pngBuffer[offset] << 24) | (pngBuffer[offset + 1] << 16) | (pngBuffer[offset + 2] << 8) | pngBuffer[offset + 3];
      offset += 4;
      var type = String.fromCharCode(pngBuffer[offset], pngBuffer[offset + 1], pngBuffer[offset + 2], pngBuffer[offset + 3]);
      offset += 4;

      if (type === 'IHDR') {
        width = (pngBuffer[offset] << 24) | (pngBuffer[offset + 1] << 16) | (pngBuffer[offset + 2] << 8) | pngBuffer[offset + 3];
        height = (pngBuffer[offset + 4] << 24) | (pngBuffer[offset + 5] << 16) | (pngBuffer[offset + 6] << 8) | pngBuffer[offset + 7];
        bitDepth = pngBuffer[offset + 8];
        colorType = pngBuffer[offset + 9];
      } else if (type === 'IDAT') {
        idatChunks.push(pngBuffer.subarray(offset, offset + length));
      } else if (type === 'IEND') {
        break;
      }
      offset += length + 4;
    }

    if (!idatChunks.length || !width || !height) return null;

    var totalLen = 0;
    for (var i = 0; i < idatChunks.length; i++) totalLen += idatChunks[i].length;
    var allIdat = new Uint8Array(totalLen);
    var pos = 0;
    for (var i = 0; i < idatChunks.length; i++) {
      allIdat.set(idatChunks[i], pos);
      pos += idatChunks[i].length;
    }

    var rawData = null;
    if (typeof _unzlibSync === 'function') {
      try { rawData = _unzlibSync(allIdat); } catch (e) { }
    }
    if (!rawData) return null;

    var bytesPerPixel = 1;
    if (colorType === 2) bytesPerPixel = 3;
    else if (colorType === 6) bytesPerPixel = 4;
    else if (colorType === 0) bytesPerPixel = 1;
    else if (colorType === 4) bytesPerPixel = 2;

    var stride = width * bytesPerPixel;
    var grid = [];
    for (var y = 0; y < height; y++) {
      grid.push(new Uint8Array(width));
    }

    var defiltered = new Uint8Array(height * stride);
    var srcPos = 0;
    var dstPos = 0;

    for (var row = 0; row < height; row++) {
      var filterType = rawData[srcPos++];
      var rowStart = dstPos;
      var priorRowStart = rowStart - stride;

      for (var col = 0; col < stride; col++) {
        var x = rawData[srcPos++];
        var a = (col >= bytesPerPixel) ? defiltered[rowStart + col - bytesPerPixel] : 0;
        var b = (row > 0) ? defiltered[priorRowStart + col] : 0;
        var c = (row > 0 && col >= bytesPerPixel) ? defiltered[priorRowStart + col - bytesPerPixel] : 0;

        var val = 0;
        if (filterType === 0) val = x;
        else if (filterType === 1) val = (x + a) & 0xff;
        else if (filterType === 2) val = (x + b) & 0xff;
        else if (filterType === 3) val = (x + Math.floor((a + b) / 2)) & 0xff;
        else if (filterType === 4) {
          var p = a + b - c;
          var pa = Math.abs(p - a);
          var pb = Math.abs(p - b);
          var pc = Math.abs(p - c);
          var pr = (pa <= pb && pa <= pc) ? a : ((pb <= pc) ? b : c);
          val = (x + pr) & 0xff;
        }
        defiltered[dstPos++] = val;
      }

      for (var col = 0; col < width; col++) {
        var pIdx = rowStart + col * bytesPerPixel;
        var isDark = false;
        if (bytesPerPixel >= 3) {
          var r = defiltered[pIdx];
          var g = defiltered[pIdx + 1];
          var b = defiltered[pIdx + 2];
          isDark = (r < 120 && g < 120 && b < 120);
        } else {
          isDark = defiltered[pIdx] < 120;
        }
        grid[row][col] = isDark ? 1 : 0;
      }
    }

    var colCounts = new Int32Array(width);
    for (var c = 0; c < width; c++) {
      var cnt = 0;
      for (var r = 0; r < height; r++) {
        if (grid[r][c]) cnt++;
      }
      colCounts[c] = cnt;
    }

    var segments = [];
    var inDigit = false;
    var startCol = 0;
    for (var c = 0; c < width; c++) {
      if (colCounts[c] > 1) {
        if (!inDigit) { inDigit = true; startCol = c; }
      } else {
        if (inDigit) {
          inDigit = false;
          if (c - startCol >= 5) segments.push({ start: startCol, end: c });
        }
      }
    }
    if (inDigit && width - startCol >= 5) segments.push({ start: startCol, end: width });

    if (segments.length > 6) {
      segments.sort(function (a, b) { return (b.end - b.start) - (a.end - a.start); });
      segments = segments.slice(0, 6);
      segments.sort(function (a, b) { return a.start - b.start; });
    }

    var result = '';
    for (var i = 0; i < segments.length; i++) {
      var seg = segments[i];
      var digit = _recognizeDigit(grid, height, seg.start, seg.end);
      if (digit !== null) result += digit;
    }

    return result.length >= 4 ? result : null;
  } catch (e) {
    return null;
  }
}

function _parseCaptchaImage(buf) {
  if (!buf || buf.length < 8) return null;
  if (buf[0] === 0x42 && buf[1] === 0x4D) {
    return _solveCaptchaBmp(buf);
  }
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47) {
    return _solveCaptchaPng(buf);
  }
  return null;
}

function _formEncode(obj) {
  var parts = [];
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]));
    }
  }
  return parts.join('&');
}

// =========================================================================
// PACKER / OBFUSCATED JS UNPACKER
// =========================================================================
function unpackPackedJs(packedCode) {
  if (!packedCode || packedCode.indexOf('eval(function(p,a,c,k,e,d)') < 0) {
    return packedCode;
  }
  try {
    var regex = /eval\s*\(\s*function\s*\(\s*p\s*,\s*a\s*,\s*c\s*,\s*k\s*,\s*e\s*,\s*[dr]\s*\)\s*\{[\s\S]*?\}\s*\(\s*'([\s\S]*?)'\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*'([\s\S]*?)'\.split\('\|'\)/;
    var match = packedCode.match(regex);
    if (!match) return packedCode;

    var p = match[1];
    var a = parseInt(match[2], 10);
    var c = parseInt(match[3], 10);
    var k = match[4].split('|');

    var e = function (c) {
      return (c < a ? '' : e(parseInt(c / a, 10))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    };

    while (c--) {
      if (k[c]) {
        var word = e(c);
        p = p.replace(new RegExp('\\b' + word + '\\b', 'g'), k[c]);
      }
    }
    return p;
  } catch (err) {
    return packedCode;
  }
}

function _findStreamSource(html) {
  var m3u8Match = html.match(/(https?:\/\/[^"'\s<>]+\.m3u8[^"'\s<>]*)/i);
  if (m3u8Match) return m3u8Match[1];
  var fileMatch = html.match(/(?:file|source|src)\s*:\s*["']([^"']+\.mp4[^"']*)["']/i);
  if (fileMatch) return fileMatch[1];
  var mp4Match = html.match(/(https?:\/\/[^"'\s<>]+\.mp4[^"'\s<>]*)/i);
  if (mp4Match) return mp4Match[1];
  return null;
}

// =========================================================================
// CAPTCHA OCR & FORM SUBMISSION
// =========================================================================
function _resolveCaptchaAndSubmit(pageUrl, html, jar) {
  return new Promise(function (resolve, reject) {
    var imgMatch = html.match(/<img[^>]+src=["'](data:image\/[^"']+|[^"']*(?:captcha|secoder|secur)[^"']*)["']/i);
    if (!imgMatch) return resolve(null);
    var imgSrc = imgMatch[1];

    function doSolve(buffer) {
      var code = _parseCaptchaImage(buffer);
      if (!code) return resolve(null);

      var formMatch = html.match(/<form[^>]+action=["']([^"']*)["'][^>]*>([\s\S]*?)<\/form>/i);
      var action = pageUrl;
      var formHtml = html;
      if (formMatch) {
        action = formMatch[1] ? _resolveUrl(formMatch[1], pageUrl) : pageUrl;
        formHtml = formMatch[2];
      }

      var formData = {};
      var inputRe = /<input[^>]+name=["']([^"']+)["'][^>]*value=["']([^"']*)["']/gi;
      var im;
      var captchaFieldFound = false;

      while ((im = inputRe.exec(formHtml)) !== null) {
        var n = im[1];
        var v = im[2];
        var nLow = n.toLowerCase();
        if (nLow.indexOf('captcha') >= 0 || nLow.indexOf('code') >= 0 || nLow.indexOf('sec') >= 0) {
          v = code;
          captchaFieldFound = true;
        }
        formData[n] = v;
      }

      if (!captchaFieldFound) {
        formData['captcha'] = code;
      }

      var postHeaders = {
        'User-Agent': ES_UA,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': _getUrlOrigin(pageUrl),
        'Referer': pageUrl
      };
      var cstr = _jarGet(pageUrl, jar);
      if (cstr) postHeaders['Cookie'] = cstr;

      _customFetch(action, {
        method: 'POST',
        headers: postHeaders,
        body: _formEncode(formData),
        redirect: 'manual'
      }, 15000)
        .then(function (r) {
          try {
            var sc = r.headers.get('set-cookie') || r.headers.get('Set-Cookie');
            if (sc) _jarSet(pageUrl, sc, jar);
          } catch (e) { }
          if (r.status >= 300 && r.status < 400) {
            var loc = r.headers.get('location') || r.headers.get('Location');
            if (loc) {
              return resolve({ redirectedUrl: _resolveUrl(loc, action) });
            }
          }
          return r.text().then(function (txt) {
            resolve({ html: txt, url: action });
          });
        })
        .catch(function (err) { resolve(null); });
    }

    if (imgSrc.startsWith('data:image/')) {
      var commaIdx = imgSrc.indexOf(',');
      var b64 = imgSrc.substring(commaIdx + 1);
      var binaryStr = _atob(b64);
      var u8 = new Uint8Array(binaryStr.length);
      for (var bi = 0; bi < binaryStr.length; bi++) {
        u8[bi] = binaryStr.charCodeAt(bi);
      }
      doSolve(u8);
    } else {
      var fullImgUrl = _resolveUrl(imgSrc, pageUrl);
      var imgHeaders = {
        'User-Agent': ES_UA,
        'Referer': pageUrl
      };
      var cstr = _jarGet(pageUrl, jar);
      if (cstr) imgHeaders['Cookie'] = cstr;

      _customFetch(fullImgUrl, { headers: imgHeaders }, 10000)
        .then(function (r) {
          try {
            var sc = r.headers.get('set-cookie') || r.headers.get('Set-Cookie');
            if (sc) _jarSet(pageUrl, sc, jar);
          } catch (e) { }
          return r.arrayBuffer();
        })
        .then(function (ab) { doSolve(new Uint8Array(ab)); })
        .catch(function () { resolve(null); });
    }
  });
}

// =========================================================================
// CLICKA.CC RESOLVER
// =========================================================================
function resolveClickacc(clickaUrl, kind, jar) {
  var maxRedirects = 10;
  var currentUrl = clickaUrl;
  var referer = 'https://eurostreamings.live/';

  function next() {
    if (maxRedirects-- <= 0) return Promise.reject(new Error('Clickacc: too many redirects'));

    var headers = {
      'User-Agent': ES_UA,
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7',
      'Referer': referer
    };
    var cookieStr = _jarGet(currentUrl, jar);
    if (cookieStr) headers['Cookie'] = cookieStr;

    return _customFetch(currentUrl, { headers: headers, redirect: 'manual' }, 15000)
      .then(function (r) {
        try {
          var sc = r.headers.get('set-cookie') || r.headers.get('Set-Cookie');
          if (sc) _jarSet(currentUrl, sc, jar);
        } catch (e) { }

        if (r.status >= 300 && r.status < 400) {
          var loc = r.headers.get('location') || r.headers.get('Location');
          if (!loc) return Promise.reject(new Error('Clickacc: redirect without Location'));
          var nextUrl = _resolveUrl(loc, currentUrl);
          referer = currentUrl;
          currentUrl = nextUrl;

          var destHostname = _getUrlHostname(nextUrl);
          if (destHostname.indexOf('clicka.cc') >= 0 || destHostname.indexOf('safego.cc') >= 0) {
            return next();
          }

          if (destHostname.indexOf('turbovid') >= 0) {
            return extractTurbovid(nextUrl, jar).then(function (res) {
              return { url: res.url, name: 'Eurostreaming - Turbovid', title: 'Turbovid [ITA]', quality: '1080p', headers: res.headers };
            });
          }
          if (destHostname.indexOf('deltabit') >= 0) {
            return extractDeltabit(nextUrl, jar).then(function (res) {
              return { url: res.url, name: 'Eurostreaming - DeltaBit', title: 'DeltaBit [ITA]', quality: '1080p', headers: res.headers };
            });
          }
          if (destHostname.indexOf('mixdrop') >= 0) {
            return extractMixdrop(nextUrl);
          }
          return { url: nextUrl, name: 'Eurostreaming - Direct', title: 'Direct', quality: 'HD' };
        }

        return r.text().then(function (html) {
          var intermediateMatch = html.match(/https?:\/\/(?:www\.)?safego\.cc\/[A-Za-z0-9]+/i);
          if (intermediateMatch && intermediateMatch[0] !== currentUrl) {
            referer = currentUrl;
            currentUrl = intermediateMatch[0];
            return next();
          }

          var turbovidMatch = html.match(/https?:\/\/[a-z0-9_\-.]*turbovid[a-z0-9_\-.]*\/[a-zA-Z0-9_\-]+/i);
          if (turbovidMatch) {
            return extractTurbovid(turbovidMatch[0], jar).then(function (res) {
              return { url: res.url, name: 'Eurostreaming - Turbovid', title: 'Turbovid [ITA]', quality: '1080p', headers: res.headers };
            });
          }

          var deltabitMatch = html.match(/https?:\/\/[a-z0-9_\-.]*deltabit[a-z0-9_\-.]*\/[a-zA-Z0-9_\-]+/i);
          if (deltabitMatch) {
            return extractDeltabit(deltabitMatch[0], jar).then(function (res) {
              return { url: res.url, name: 'Eurostreaming - DeltaBit', title: 'DeltaBit [ITA]', quality: '1080p', headers: res.headers };
            });
          }

          var mixdropMatch = html.match(/https?:\/\/[a-z0-9_\-.]*mixdrop[a-z0-9_\-.]*\/[a-zA-Z0-9_\-]+/i);
          if (mixdropMatch) {
            return extractMixdrop(mixdropMatch[0]);
          }

          return _resolveCaptchaAndSubmit(currentUrl, html, jar).then(function (captchaResult) {
            if (!captchaResult) return Promise.reject(new Error('Clickacc: captcha resolution failed'));
            if (captchaResult.redirectedUrl) {
              referer = currentUrl;
              currentUrl = captchaResult.redirectedUrl;
              return next();
            }
            if (captchaResult.html) {
              var tMatch = captchaResult.html.match(/https?:\/\/[a-z0-9_\-.]*turbovid[a-z0-9_\-.]*\/[a-zA-Z0-9_\-]+/i);
              if (tMatch) {
                return extractTurbovid(tMatch[0], jar).then(function (res) {
                  return { url: res.url, name: 'Eurostreaming - Turbovid', title: 'Turbovid [ITA]', quality: '1080p', headers: res.headers };
                });
              }
              var dMatch = captchaResult.html.match(/https?:\/\/[a-z0-9_\-.]*deltabit[a-z0-9_\-.]*\/[a-zA-Z0-9_\-]+/i);
              if (dMatch) {
                return extractDeltabit(dMatch[0], jar).then(function (res) {
                  return { url: res.url, name: 'Eurostreaming - DeltaBit', title: 'DeltaBit [ITA]', quality: '1080p', headers: res.headers };
                });
              }
            }
            return Promise.reject(new Error('Clickacc: unhandled page structure'));
          });
        });
      });
  }

  var curHostname = _getUrlHostname(clickaUrl);
  if (curHostname.indexOf('clicka.cc') >= 0 || curHostname.indexOf('safego.cc') >= 0) {
    return _customFetch(clickaUrl, { headers: { 'User-Agent': ES_UA, 'Referer': referer }, redirect: 'manual' }, 10000).then(function (firstRes) {
      try {
        var sc = firstRes.headers.get('set-cookie') || firstRes.headers.get('Set-Cookie');
        if (sc) _jarSet(clickaUrl, sc, jar);
      } catch (e) { }
      if (firstRes.status >= 300 && firstRes.status < 400) {
        var loc = firstRes.headers.get('location') || firstRes.headers.get('Location');
        if (loc) {
          referer = clickaUrl;
          currentUrl = _resolveUrl(loc, clickaUrl);
        }
      }
      return next();
    });
  }
  return next();
}

// =========================================================================
// TURBOVID EXTRACTION
// =========================================================================
function extractTurbovid(pageUrl, jar) {
  return new Promise(function (resolve, reject) {
    var landingHeaders = {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.8,it;q=0.7',
      'Accept-Encoding': 'identity',
      'Referer': 'https://safego.cc/'
    };
    var cookieStr = _jarGet(pageUrl, jar);
    if (cookieStr) landingHeaders['Cookie'] = cookieStr;
    _customFetch(pageUrl, { headers: landingHeaders, redirect: "manual" }, 15000)
      .then(function (r) {
        try {
          if (r.headers && r.headers.get) {
            var sc = r.headers.get('set-cookie') || r.headers.get('Set-Cookie');
            if (sc) _jarSet(pageUrl, sc, jar);
          }
        } catch (e) { }
        return r.text();
      })
      .then(function (html) {
        var finalOrigin = _getUrlOrigin(pageUrl);
        var source = _findStreamSource(html);
        if (source) return resolve({ url: source, headers: { 'User-Agent': landingHeaders['User-Agent'], 'Referer': pageUrl, 'Origin': finalOrigin } });

        var formData = {};
        var ir = /<input\b[^>]*>/gi;
        var im;
        while ((im = ir.exec(html))) {
          var tag = im[0];
          var nameM = tag.match(/\bname=(?:"([^"]+)"|'([^']+)'|([^\s>]+))/i);
          if (!nameM) continue;
          var name = _decodeEntities(nameM[1] || nameM[2] || nameM[3] || '');
          var valueM = tag.match(/\bvalue=(?:"([^"]*)"|'([^']*)'|([^\s>]*))/i);
          var value = valueM ? _decodeEntities(valueM[1] || valueM[2] || valueM[3] || '') : '';
          if (name) formData[name] = value;
        }
        if (!formData.op) { return reject(new Error('Turbovid: form op not found')); }
        formData.imhuman = 'Proceed+to+video';
        formData.referer = pageUrl;
        var postHeaders = {
          'User-Agent': landingHeaders['User-Agent'],
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.8,it;q=0.7',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': finalOrigin,
          'Referer': pageUrl
        };
        var cookieStr2 = _jarGet(pageUrl, jar);
        if (cookieStr2) postHeaders['Cookie'] = cookieStr2;

        return _sleep(5000).then(function () {
          return _customFetch(pageUrl, { method: "POST", headers: postHeaders, body: _formEncode(formData), redirect: "manual" }, 30000);
        });
      })
      .then(function (r) {
        try {
          if (r.headers && r.headers.get) {
            var sc = r.headers.get('set-cookie') || r.headers.get('Set-Cookie');
            if (sc) _jarSet(pageUrl, sc, jar);
          }
        } catch (e) { }
        return r.text();
      })
      .then(function (html) {
        var finalOrigin = _getUrlOrigin(pageUrl);
        var source = _findStreamSource(html);
        if (!source) {
          var combined = html;
          var packerRe = /eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\([\s\S]*?\.split\(['"]\|['"]\)[\s\S]*?\)\s*\)/g;
          var pm;
          while ((pm = packerRe.exec(html)) !== null) {
            var unpacked = unpackPackedJs(pm[0]);
            if (unpacked) {
              combined += '\n' + unpacked;
            }
          }
          source = _findStreamSource(combined);
        }
        if (!source) {
          var retryHeaders = {
            'User-Agent': landingHeaders['User-Agent'],
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.8,it;q=0.7',
            'Accept-Encoding': 'identity',
            'Referer': 'https://safego.cc/'
          };
          var cstr = _jarGet(pageUrl, jar);
          if (cstr) retryHeaders['Cookie'] = cstr;
          return _customFetch(pageUrl, { headers: retryHeaders, redirect: "manual" }, 15000)
            .then(function (r2) { return r2.text(); })
            .then(function (html2) {
              source = _findStreamSource(html2);
              if (!source) return reject(new Error('Turbovid: stream source not found'));
              resolve({ url: source, headers: { 'User-Agent': landingHeaders['User-Agent'], 'Referer': pageUrl, 'Origin': finalOrigin } });
            });
        }
        resolve({ url: source, headers: { 'User-Agent': landingHeaders['User-Agent'], 'Referer': pageUrl, 'Origin': finalOrigin } });
      })
      .catch(function (err) { reject(err); });
  });
}

// =========================================================================
// DELTABIT EXTRACTION
// =========================================================================
function extractDeltabit(pageUrl, jar) {
  return new Promise(function (resolve, reject) {
    var landingHeaders = {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.8,it;q=0.7',
      'Accept-Encoding': 'identity',
      'Referer': 'https://safego.cc/'
    };
    var cookieStr = _jarGet(pageUrl, jar);
    if (cookieStr) landingHeaders['Cookie'] = cookieStr;
    _customFetch(pageUrl, { headers: landingHeaders }, 15000)
      .then(function (r) {
        try {
          if (r.headers && r.headers.get) {
            var sc = r.headers.get('set-cookie') || r.headers.get('Set-Cookie');
            if (sc) _jarSet(pageUrl, sc, jar);
          }
        } catch (e) { }
        return r.text();
      })
      .then(function (html) {
        var finalOrigin = _getUrlOrigin(pageUrl);
        var source = _findStreamSource(html);
        if (source) return resolve({ url: source, headers: { 'User-Agent': landingHeaders['User-Agent'], 'Referer': pageUrl, 'Origin': finalOrigin } });

        var formData = {};
        var ir = /<input\b[^>]*>/gi;
        var im;
        while ((im = ir.exec(html))) {
          var tag = im[0];
          var nameM = tag.match(/\bname=(?:"([^"]+)"|'([^']+)'|([^\s>]+))/i);
          if (!nameM) continue;
          var name = _decodeEntities(nameM[1] || nameM[2] || nameM[3] || '');
          var valueM = tag.match(/\bvalue=(?:"([^"]*)"|'([^']*)'|([^\s>]*))/i);
          var value = valueM ? _decodeEntities(valueM[1] || valueM[2] || valueM[3] || '') : '';
          if (name) formData[name] = value;
        }
        if (!formData.op) return reject(new Error('Deltabit: form op not found'));
        formData.imhuman = '';
        formData.referer = pageUrl;
        var postHeaders = {
          'User-Agent': landingHeaders['User-Agent'],
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.8,it;q=0.7',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': finalOrigin,
          'Referer': pageUrl
        };
        var cookieStr2 = _jarGet(pageUrl, jar);
        if (cookieStr2) postHeaders['Cookie'] = cookieStr2;

        return _sleep(2500).then(function () {
          return _customFetch(pageUrl, { method: "POST", headers: postHeaders, body: _formEncode(formData), redirect: "manual" }, 30000);
        });
      })
      .then(function (r) {
        try {
          if (r.headers && r.headers.get) {
            var sc = r.headers.get('set-cookie') || r.headers.get('Set-Cookie');
            if (sc) _jarSet(pageUrl, sc, jar);
          }
        } catch (e) { }
        return r.text();
      })
      .then(function (html) {
        var finalOrigin = _getUrlOrigin(pageUrl);
        var source = _findStreamSource(html);
        if (!source) {
          var combined = html;
          var packerRe = /eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\([\s\S]*?\.split\(['"]\|['"]\)[\s\S]*?\)\s*\)/g;
          var pm;
          while ((pm = packerRe.exec(html)) !== null) {
            var unpacked = unpackPackedJs(pm[0]);
            if (unpacked) {
              combined += '\n' + unpacked;
            }
          }
          source = _findStreamSource(combined);
        }
        if (!source) return reject(new Error('Deltabit: stream source not found'));
        resolve({ url: source, headers: { 'User-Agent': landingHeaders['User-Agent'], 'Referer': pageUrl, 'Origin': finalOrigin } });
      })
      .catch(function (err) { reject(err); });
  });
}

// =========================================================================
// MIXDROP EXTRACTION
// =========================================================================
function extractMixdrop(embedUrl) {
  var normalizedUrl = embedUrl.replace('/f/', '/e/');
  var origin = _getUrlOrigin(normalizedUrl);
  var headers = {
    'User-Agent': ES_UA,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.8,it;q=0.7',
    'Referer': normalizedUrl
  };

  return _customFetch(normalizedUrl, { headers: headers }, 15000)
    .then(function (r) { return r.text(); })
    .then(function (html) {
      var source = null;
      var packedRe = /eval\(function\(p,a,c,k,e,d\)[\s\S]*?\}\([\s\S]*?\.split\(['"]\|['"]\)[\s\S]*?\)\s*\)/g;
      var pm;
      while ((pm = packedRe.exec(html)) !== null) {
        var unpacked = unpackPackedJs(pm[0]);
        if (unpacked) {
          var wurlMatch = unpacked.match(/MDCore\.wurl\s*=\s*["']([^"']+)["']/i);
          if (wurlMatch) {
            source = wurlMatch[1];
            break;
          }
          var srcMatch = unpacked.match(/(?:source|src)\s*[:=]\s*["']([^"']+\.mp4[^"']*)["']/i);
          if (srcMatch) {
            source = srcMatch[1];
            break;
          }
        }
      }

      if (!source) {
        var directMatch = html.match(/(?:source|src)\s*[:=]\s*["']([^"']+\.mp4[^"']*)["']/i);
        if (directMatch) source = directMatch[1];
      }

      if (!source) return Promise.reject(new Error('Mixdrop: direct URL not found'));
      if (source.startsWith('//')) source = 'https:' + source;

      return {
        url: source,
        name: 'Eurostreaming - MixDrop',
        title: 'MixDrop [ITA]',
        quality: '720p',
        headers: {
          'User-Agent': ES_UA,
          'Referer': origin + '/'
        },
        behaviorHints: {
          notWebReady: true,
          proxyHeaders: {
            request: {
              'User-Agent': ES_UA,
              'Referer': origin + '/'
            }
          }
        }
      };
    });
}

var TMDB_API_KEY = '68e094699525b18a70bab2f86b1fa706';

// =========================================================================
// ENTRY POINT
// =========================================================================
var _streamCache = {};

function getCinemetaMeta(type, imdbId, cb) {
  var cleanId = String(imdbId || '').split(':')[0];
  var url = 'https://v3-cinemeta.strem.io/meta/' + type + '/' + cleanId + '.json';
  _customFetch(url, {}, 10000)
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (data) { cb(null, data && data.meta ? data.meta : null); })
    .catch(function () { cb(null, null); });
}

function _getTmdbShowMeta(id) {
  return new Promise(function (resolve) {
    var cleanId = String(id || '').replace(/^tmdb:/i, '').trim();
    var baseId = cleanId.split(':')[0];
    if (/^tt\d+$/i.test(baseId)) {
      _customFetch("https://api.themoviedb.org/3/find/" + baseId + "?api_key=" + TMDB_API_KEY + "&external_source=imdb_id&language=it-IT", {}, 10000)
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (!data) return resolve(null);
          if (data.tv_results && data.tv_results.length > 0) {
            var tv = data.tv_results[0];
            return resolve({ name: tv.name, original_name: tv.original_name, year: String(tv.first_air_date || '').substring(0, 4) });
          }
          resolve(null);
        })
        .catch(function () { resolve(null); });
    } else if (/^\d+$/.test(baseId)) {
      _customFetch("https://api.themoviedb.org/3/tv/" + baseId + "?api_key=" + TMDB_API_KEY + "&language=it-IT", {}, 10000)
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (!data) return resolve(null);
          resolve({ name: data.name, original_name: data.original_name, year: String(data.first_air_date || '').substring(0, 4) });
        })
        .catch(function () { resolve(null); });
    } else {
      resolve(null);
    }
  });
}

function getStreams(id, type, season, episode, providerContext) {
  var userCb = null;
  if (typeof episode === 'function') {
    userCb = episode;
    episode = season;
    season = type;
    type = 'series';
  } else if (typeof providerContext === 'function') {
    userCb = providerContext;
  }

  var promise = new Promise(function (resolve, reject) {
    if (id && typeof id === 'object' && !Array.isArray(id)) {
      var obj = id;
      id = obj.id || obj.tmdbId || obj.imdbId;
      type = obj.type || obj.mediaType || type;
      season = obj.season || obj.seasonNum || season;
      episode = obj.episode || obj.episodeNum || episode;
      providerContext = obj.providerContext || obj;
    }
    var cleanId = String(id || '').replace(/^tmdb:/i, '').trim();
    var idParts = cleanId.split(':');
    var rawId = idParts[0];

    var seasonNum = Number(season);
    var episodeNum = Number(episode);
    if ((!seasonNum || isNaN(seasonNum)) && idParts.length > 1) seasonNum = Number(idParts[1]);
    if ((!episodeNum || isNaN(episodeNum)) && idParts.length > 2) episodeNum = Number(idParts[2]);
    if (!seasonNum || isNaN(seasonNum) || seasonNum < 1) seasonNum = 1;
    if (!episodeNum || isNaN(episodeNum) || episodeNum < 1) episodeNum = 1;

    var mediaType = String(type || '').toLowerCase();
    if (mediaType === 'movie' && (!season || seasonNum === 0)) return resolve([]);

    var cacheKey = 'series_' + rawId + '_' + seasonNum + '_' + episodeNum;
    var cached = _streamCache[cacheKey];
    if (cached && (Date.now() - cached.timestamp < 7200000)) {
      return resolve(cached.streams);
    }

    _getTmdbShowMeta(rawId).then(function (meta) {
      if (!meta) {
        return new Promise(function(resMeta) {
          getCinemetaMeta('series', rawId, function(err, cMeta) {
            if (cMeta && cMeta.name) resMeta({ name: cMeta.name, original_name: cMeta.name, year: cMeta.releaseInfo });
            else resMeta(null);
          });
        });
      }
      return meta;
    }).then(function (meta) {
      if (!meta || (!meta.name && !meta.original_name)) return resolve([]);

      var queries = [];
      function addQuery(t) {
        if (!t) return;
        t = t.trim();
        if (t && queries.indexOf(t) === -1) queries.push(t);
        var clean = t.replace(/[:\-].*$/, '').trim();
        if (clean && clean !== t && queries.indexOf(clean) === -1) queries.push(clean);
      }

      addQuery(meta.name);
      addQuery(meta.original_name);

      getEsDomain(function (domain) {
        if (!domain) return resolve([]);

        var qIdx = 0;
        function tryNextQuery() {
          if (qIdx >= queries.length) return resolve([]);
          var q = queries[qIdx++];
          searchSeries(domain, q, seasonNum, function (pageUrl) {
            if (!pageUrl) return tryNextQuery();
            extractLinksFromPage(domain, pageUrl, seasonNum, episodeNum, function (streams) {
              var resStreams = streams || [];
              if (resStreams.length > 0) {
                _streamCache[cacheKey] = { streams: resStreams, timestamp: Date.now() };
                return resolve(resStreams);
              }
              tryNextQuery();
            });
          });
        }
        tryNextQuery();
      });
    }).catch(function (e) {
      resolve([]);
    });
  });

  if (userCb) {
    promise.then(function (res) { userCb(res || []); }).catch(function () { userCb([]); });
  }
  return promise;
}

function esFetch(url, cb) {
  var ref = _getUrlOrigin(url) ? (_getUrlOrigin(url) + "/") : "https://eurostreamings.live/";
  var headers = {
    'User-Agent': ES_UA,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7',
    'Referer': ref
  };
  _customFetch(url, { headers: headers }, 15000)
    .then(function (r) { return r.text(); })
    .then(function (text) { cb(null, text); })
    .catch(function (err) { cb(err, null); });
}

var _cachedEsDomain = null;

function getEsDomain(cb) {
  if (_cachedEsDomain) return cb(_cachedEsDomain);
  _customFetch("https://raw.githubusercontent.com/qwertyuiop8899/streamvix/main/config/domains.json", {}, 10000)
    .then(function (r) { return r.text(); })
    .then(function (data) {
      try {
        var json = JSON.parse(data);
        var d = json && json.eurostreaming;
        if (d) {
          var domainStr = typeof d === 'string' ? d : d.domain;
          if (domainStr) {
            _cachedEsDomain = 'https://' + domainStr;
            return cb(_cachedEsDomain);
          }
        }
        var ee = json && json['easter-egg'];
        if (ee && ee.eurostreaming) {
          var domainStr2 = typeof ee.eurostreaming === 'string' ? ee.eurostreaming : ee.eurostreaming.domain;
          if (domainStr2) {
            _cachedEsDomain = 'https://' + domainStr2;
            return cb(_cachedEsDomain);
          }
        }
      } catch (e) {
        var lines = data.split('\n');
        for (var i = 0; i < lines.length; i++) {
          if (lines[i].indexOf('eurostreaming') >= 0) {
            var parts = lines[i].split('=');
            if (parts.length > 1 && parts[1].trim()) {
              var dom = parts[1].trim();
              if (!dom.startsWith('http')) dom = 'https://' + dom;
              _cachedEsDomain = dom;
              return cb(_cachedEsDomain);
            }
          }
        }
      }
      _cachedEsDomain = 'https://eurostreamings.live';
      cb(_cachedEsDomain);
    })
    .catch(function () {
      _cachedEsDomain = 'https://eurostreamings.live';
      cb(_cachedEsDomain);
    });
}

function searchSeries(domain, title, seasonNum, cb) {
  var query = title;
  esFetch(domain + '/?s=' + encodeURIComponent(query), function (err, html) {
    if (err || !html) return cb(null);

    function normalizeTitle(t) {
      if (!t) return '';
      return t
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .replace(/\s+/g, ' ');
    }

    function cleanPostTitle(title) {
      if (!title) return '';
      return title
        .replace(/\(\d{4}\)/g, '')
        .replace(/-\s*stagione\s*\d+/gi, '')
        .replace(/streaming/gi, '')
        .replace(/serie\s*tv/gi, '')
        .trim();
    }

    function scoreTitleMatch(target, candidate) {
      var normTarget = normalizeTitle(target);
      var normCandidate = normalizeTitle(cleanPostTitle(candidate));
      if (normTarget === normCandidate) return 100;
      var targetTokens = normTarget.split(' ').filter(Boolean);
      var candidateTokens = normCandidate.split(' ').filter(Boolean);
      if (targetTokens.length === 0 || candidateTokens.length === 0) return 0;
      var matchCount = 0;
      targetTokens.forEach(function(tok) {
        if (candidateTokens.indexOf(tok) >= 0) matchCount++;
      });
      var ratio = matchCount / targetTokens.length;
      if (ratio < 1.0) return 0;
      if (targetTokens.length === 1) {
        var extraWords = candidateTokens.filter(function(w) { return w !== targetTokens[0]; });
        var cleanExtra = extraWords.filter(function(w) {
          return ['sub', 'ita', 'season', 'stagione', 'tv', 'show', 'hd'].indexOf(w) === -1;
        });
        if (cleanExtra.length > 0) return 10;
      }
      var lenDiff = Math.abs(candidateTokens.length - targetTokens.length);
      return 90 - lenDiff;
    }

    var entryPattern = /<li[^>]+id=["']post-(\d+)["'][^>]*class=["'][^"]*post[^"]*["'][^>]*>[\s\S]*?<h\d[^>]*>[\s\S]*?<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>[\s\S]*?<\/h\d>[\s\S]*?<\/li>/gi;
    var match;
    var candidates = [];
    var seen = {};
    while ((match = entryPattern.exec(html)) !== null) {
      var href = match[2];
      var linkText = (match[3] || '').replace(/<[^>]+>/g, '').trim();
      var score = scoreTitleMatch(title, linkText);
      if (!seen[href] && score > 0) {
        seen[href] = true;
        candidates.push({ href: href, score: score });
      }
    }

    if (candidates.length === 0) {
      var allLinks = html.match(/<a[^>]+href=["']([^"']+)["'][^>]*title=["']([^"']+)["'][^>]*>/gi);
      if (allLinks) {
        allLinks.forEach(function (a) {
          var m = a.match(/href=["']([^"']+)["']/);
          var t = a.match(/title=["']([^"']+)["']/i);
          if (m && t && !seen[m[1]]) {
            var score = scoreTitleMatch(title, t[1]);
            if (score > 0) {
              seen[m[1]] = true;
              candidates.push({ href: m[1], score: score });
            }
          }
        });
      }
    }

    candidates.sort(function(a, b) { return b.score - a.score; });
    var best = (candidates.length > 0 && candidates[0].score >= 50) ? candidates[0].href : null;
    cb(best);
  });
}

function extractLinksFromPage(domain, pageUrl, seasonNum, episodeNum, cb) {
  esFetch(pageUrl, function (err, html) {
    if (err || !html) return cb(null);
    var streams = [];
    var seen = {};

    var ep2 = episodeNum < 10 ? '0' + String(episodeNum) : String(episodeNum);
    var patterns = [
      seasonNum + '\\s*(?:&#215;|×|x)\\s*0?' + episodeNum + '[\\s\\S]{0,8000}?(?=<br\\s*/?>|</div>)',
      'S0?' + seasonNum + 'E' + ep2 + '[\\s\\S]{0,8000}?(?=<br\\s*/?>|</div>)'
    ];
    var block = null;
    for (var pi = 0; pi < patterns.length; pi++) {
      var m = html.match(new RegExp(patterns[pi], 'i'));
      if (m) { block = m[0]; break; }
    }
    if (!block) block = html;

    var clickaTasks = [];
    var clickaRe = /https?:\/\/clicka\.cc\/(?:a?(tv|mix|delta))\/[A-Za-z0-9]+/gi;
    var cm;
    while ((cm = clickaRe.exec(block)) !== null) {
      if (!seen[cm[0]]) { seen[cm[0]] = true; clickaTasks.push({ url: cm[0], kind: cm[1] }); }
    }

    if (clickaTasks.length === 0) return cb(streams.length > 0 ? streams : null);

    var resolved = false;
    var timer = setTimeout(function () {
      if (!resolved) {
        resolved = true;
        cb(streams.length > 0 ? streams : null);
      }
    }, 25000);

    var pending = clickaTasks.length;
    clickaTasks.forEach(function (task) {
      var taskJar = {};
      var timeoutPromise = new Promise(function (_, reject) {
        setTimeout(function () { reject(new Error('Timeout resolving link')); }, 15000);
      });
      Promise.race([
        resolveClickacc(task.url, task.kind, taskJar),
        timeoutPromise
      ])
        .then(function (streamObj) {
          if (streamObj && streamObj.url && !seen[streamObj.url]) {
            seen[streamObj.url] = true;
            streams.push(streamObj);
          }
        })
        .catch(function () { })
        .then(function () {
          pending--;
          if (pending === 0 && !resolved) {
            clearTimeout(timer);
            resolved = true;
            cb(streams.length > 0 ? streams : null);
          }
        });
    });
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getStreams: getStreams };
}
if (typeof global !== 'undefined') {
  global.getStreams = getStreams;
}
if (typeof globalThis !== 'undefined') {
  globalThis.getStreams = getStreams;
}
if (typeof window !== 'undefined') {
  window.getStreams = getStreams;
}
