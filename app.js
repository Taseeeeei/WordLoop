// Do not run inside another site's frame (clickjacking protection)
if(window.top!==window.self){document.documentElement.innerHTML='';try{window.top.location.href=window.self.location.href}catch(e){}throw new Error('framed')}

'use strict';
const ICON={
  back:'<svg class="i" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
  plus:'<svg class="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  more:'<svg class="i" viewBox="0 0 24 24"><circle class="f" cx="5" cy="12" r="1.8"/><circle class="f" cx="12" cy="12" r="1.8"/><circle class="f" cx="19" cy="12" r="1.8"/></svg>',
  star:'<svg class="i" viewBox="0 0 24 24"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9 6.8 19.6l1-5.8L3.5 9.7l5.9-.8z"/></svg>',
  sound:'<svg class="i" viewBox="0 0 24 24"><path d="M4 9.5v5h3.5L12 18V6L7.5 9.5zM15.5 9a4.5 4.5 0 010 6M18 6.5a8 8 0 010 11"/></svg>',
  search:'<svg class="i" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/></svg>',
  cards:'<svg class="i" viewBox="0 0 24 24"><rect x="3" y="7" width="13" height="13" rx="2.5"/><path d="M7.5 3.5h10a3 3 0 013 3v10"/></svg>',
  quiz:'<svg class="i" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="7" height="7" rx="1.8"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.8"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.8"/><path d="M14 17.2l2 2 4-4.4"/></svg>',
  key:'<svg class="i" viewBox="0 0 24 24"><rect x="2.5" y="6" width="19" height="12" rx="2.5"/><path d="M6.5 10h.01M10 10h.01M13.5 10h.01M17 10h.01M7.5 14h9"/></svg>',
  check:'<svg class="i" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  x:'<svg class="i" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  upload:'<svg class="i" viewBox="0 0 24 24"><path d="M12 15V4M7.5 8.5L12 4l4.5 4.5M4 15v3.5A1.5 1.5 0 005.5 20h13a1.5 1.5 0 001.5-1.5V15"/></svg>',
  cloud:'<svg class="i" viewBox="0 0 24 24"><path d="M7 18.5a4.5 4.5 0 01-.6-8.96A6 6 0 0118 10a4.25 4.25 0 01-.5 8.5z"/></svg>',
  device:'<svg class="i" viewBox="0 0 24 24"><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18h2"/></svg>',
  edit:'<svg class="i" viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4"/></svg>',
  copy:'<svg class="i" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"/></svg>',
  reset:'<svg class="i" viewBox="0 0 24 24"><path d="M4 12a8 8 0 102.4-5.7M4 4v4.5h4.5"/></svg>',
  trash:'<svg class="i" viewBox="0 0 24 24"><path d="M4.5 7h15M10 11v6M14 11v6M6 7l1 12.5A1.5 1.5 0 008.5 21h7a1.5 1.5 0 001.5-1.5L18 7M9 7V4.5h6V7"/></svg>',
  fwd:'<svg class="i" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',
  swap:'<svg class="i" viewBox="0 0 24 24"><path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5"/></svg>',
  grip:'<svg class="i" viewBox="0 0 24 24"><circle class="f" cx="9" cy="6" r="1.6"/><circle class="f" cx="15" cy="6" r="1.6"/><circle class="f" cx="9" cy="12" r="1.6"/><circle class="f" cx="15" cy="12" r="1.6"/><circle class="f" cx="9" cy="18" r="1.6"/><circle class="f" cx="15" cy="18" r="1.6"/></svg>',
  shuffle:'<svg class="i" viewBox="0 0 24 24"><path d="M3.5 7H7c4 0 5.5 10 9.5 10h3.5M17 14l3 3-3 3M3.5 17H7c1.5 0 2.6-1.4 3.5-3.2M13.5 10.2C14.4 8.4 15.5 7 17 7h3M17 4l3 3-3 3"/></svg>',
  camera:'<svg class="i" viewBox="0 0 24 24"><path d="M4 8.5A2.5 2.5 0 016.5 6h1.8l1.4-2h4.6l1.4 2h1.8A2.5 2.5 0 0120 8.5v9a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 17.5z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  gear:'<svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',
  bell:'<svg class="i" viewBox="0 0 24 24"><path d="M18 8.5a6 6 0 00-12 0c0 6.5-2.5 8.5-2.5 8.5h17S18 15 18 8.5zM10.2 20.5a2 2 0 003.6 0"/></svg>',
  moon:'<svg class="i" viewBox="0 0 24 24"><path d="M20.5 13.2A8.5 8.5 0 1110.8 3.5a6.8 6.8 0 009.7 9.7z"/></svg>',
  sun:'<svg class="i" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M2.5 12h2M19.5 12h2M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>',
  palette:'<svg class="i" viewBox="0 0 24 24"><path d="M12 3a9 9 0 100 18c1.1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.7 1.7-1.7H16a5 5 0 005-5C21 6.5 17 3 12 3z"/><circle class="f" cx="7.5" cy="11.5" r="1.3"/><circle class="f" cx="10" cy="7.5" r="1.3"/><circle class="f" cx="14.5" cy="7.5" r="1.3"/></svg>',
  folder:'<svg class="i" viewBox="0 0 24 24"><path d="M3.5 7.5a2 2 0 012-2h4l2 2.2h7a2 2 0 012 2V17a2 2 0 01-2 2h-13a2 2 0 01-2-2z"/></svg>',
  move:'<svg class="i" viewBox="0 0 24 24"><path d="M3.5 7.5a2 2 0 012-2h4l2 2.2h7a2 2 0 012 2V17a2 2 0 01-2 2h-13a2 2 0 01-2-2z"/><path d="M9.5 13.3h5.5M12.8 11l2.3 2.3-2.3 2.3"/></svg>',
  home:'<svg class="i" viewBox="0 0 24 24"><path d="M4 10.5L12 4l8 6.5V19a1.5 1.5 0 01-1.5 1.5H15v-6h-6v6H5.5A1.5 1.5 0 014 19z"/></svg>',
  table:'<svg class="i" viewBox="0 0 24 24"><rect x="3.5" y="4.5" width="17" height="15" rx="2"/><path d="M3.5 9.5h17M3.5 14.5h17M10 9.5v10"/><path d="M3.5 9.5h17" stroke-width="3"/></svg>',
  bulb:'<svg class="i" viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z"/></svg>'
};
const COLORS=['#3B82F6','#22D3EE','#8B5CF6','#2DD4BF','#F59E0B','#EC4899','#94A3B8'];
const OLDCOL=['#E4572E','#F2A100','#1F9D63','#2F7FD1','#7357D6','#D94C8C','#5B6472'];
const fixCol=c=>COLORS.includes(c)?c:OLDCOL.includes(c)?COLORS[OLDCOL.indexOf(c)]:COLORS[0];
const $=s=>document.querySelector(s);
const app=$('#app');
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const weak=w=>w.w>0&&w.w>=w.c;

/* ---------- storage ---------- */
const LS='wordloop.v1',LP='wordloop.prefs',LT='wordloop.today';
function lsGet(k){try{const r=localStorage.getItem(k);return r?JSON.parse(r):null}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){return false}}
const cleanRef=r=>r&&typeof r==='object'?(typeof r.p==='string'&&SAFE_ID.test(r.p)?{p:r.p}:typeof r.a==='string'&&r.a?{a:r.a}:(typeof r.d==='string'&&/^data:image\/(jpeg|png|webp|gif);base64,/.test(r.d)?{d:r.d}:null)):null;
const src=r=>r?(r.p?(photoURL[r.p]||''):r.d||''):'';
const SAFE_ID=/^[A-Za-z0-9_-]{1,64}$/;
const safeId=(v,pre)=>{v=typeof v==='string'?v:'';return SAFE_ID.test(v)?v:pre+rid()};
const TMAX_R=20,TMAX_C=8;
function cleanTable(t){if(!t||typeof t!=='object')return null;const ci=(v,lo,hi,d)=>{v=parseInt(v,10);return isNaN(v)?d:Math.max(lo,Math.min(hi,v))};
  const r=ci(t.r,1,TMAX_R,1),c=ci(t.c,1,TMAX_C,1),src=Array.isArray(t.cells)?t.cells:[];
  const cells=[];for(let i=0;i<r;i++){const row=Array.isArray(src[i])?src[i]:[];const out=[];for(let j=0;j<c;j++)out.push(String(row[j]==null?'':row[j]).slice(0,200));cells.push(out)}
  const o=t.th&&typeof t.th==='object'?t.th:{};let hh,vv;
  if('h' in o||'v' in o){hh=ci(o.h,0,99,0);vv=ci(o.v,0,99,0)}
  else if(o.k==='h'){hh=ci(o.i,0,99,1);vv=0}else if(o.k==='v'){hh=0;vv=ci(o.i,0,99,1)}else if(o.k==='n'){hh=0;vv=0}else{hh=1;vv=0}
  const th={h:hh<=r-1?hh:0,v:vv<=c-1?vv:0};
  return{r,c,cells,th}}
function trimTbl(t){if(!tblHas(t))return null;let r=t.r,c=t.c;const e=x=>!String(x).trim();while(r>1&&t.cells[r-1].every(e))r--;while(c>1&&t.cells.slice(0,r).every(row=>e(row[c-1])))c--;return cleanTable({r,c,cells:t.cells.slice(0,r).map(row=>row.slice(0,c)),th:t.th})}
const tblHas=t=>!!t&&t.cells.some(r=>r.some(x=>String(x).trim()));
const tblText=(t,sep)=>t?t.cells.flat().map(x=>String(x).trim()).filter(Boolean).join(sep||' / '):'';
const tblSum=t=>{const s=tblText(t);return s.length>60?s.slice(0,60)+'…':s};
function tableHTML(t){if(!t)return'';const fs=Math.max(10,Math.min(20,Math.round(24-t.r*.7-t.c*1.3)));let o=`<table class="tbl" style="font-size:${fs}px">`;
  for(let i=0;i<t.r;i++){o+='<tr>';for(let j=0;j<t.c;j++){const cl=(t.th.h===i+1?'tb ':'')+(t.th.v===j+1?'tr':'');o+=`<td class="${cl}">${esc(t.cells[i][j])}</td>`}o+='</tr>'}return o+'</table>'}
const speechOf=(text,t)=>text||tblText(t,'、');
function cleanWord(w){if(!w||typeof w!=='object')w={};return{id:safeId(w.id,'w'),t:String(w.t||''),m:String(w.m||''),n:String(w.n||''),mas:!!w.mas,c:+w.c||0,w:+w.w||0,star:!!w.star,lt:+w.lt||0,ti:cleanRef(w.ti),mi:cleanRef(w.mi),tt:cleanTable(w.tt),mt:cleanTable(w.mt)}}
function cleanDeck(d){if(!d||typeof d!=='object')return null;return{id:safeId(d.id,'d'),name:String(d.name||'単語帳'),color:fixCol(d.color),createdAt:+d.createdAt||Date.now(),updatedAt:+d.updatedAt||0,words:Array.isArray(d.words)?d.words.map(cleanWord):[],ord:typeof d.ord==='number'&&isFinite(d.ord)?d.ord:(+d.createdAt||Date.now()),folder:typeof d.folder==='string'&&SAFE_ID.test(d.folder)?d.folder:null}}
const byOrd=(a,b)=>(a.ord-b.ord)||(a.createdAt-b.createdAt);
function cleanFolder(f){if(!f||typeof f!=='object'||!f.id)return null;return{id:safeId(f.id,'f'),name:String(f.name||'ファイル'),color:fixCol(f.color),createdAt:+f.createdAt||Date.now()}}
const NATIVE=!!(window.Capacitor&&typeof Capacitor.isNativePlatform==='function'&&Capacitor.isNativePlatform());
const P=NATIVE&&Capacitor.Plugins?Capacitor.Plugins:{};
/* IndexedDB: kv (app state) + photos (image blobs) */
let dbp=null;
function idb(){if(!dbp)dbp=new Promise((res,rej)=>{const r=indexedDB.open('wordloop',1);r.onupgradeneeded=()=>{const d=r.result;if(!d.objectStoreNames.contains('kv'))d.createObjectStore('kv');if(!d.objectStoreNames.contains('photos'))d.createObjectStore('photos')};r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)});return dbp}
async function idbOp(store,mode,fn){const d=await idb();return new Promise((res,rej)=>{const tx=d.transaction(store,mode),st=tx.objectStore(store);let out;const q=fn(st);if(q)q.onsuccess=()=>{out=q.result};tx.oncomplete=()=>res(out);tx.onerror=tx.onabort=()=>rej(tx.error)})}
const idbGet=(s,k)=>idbOp(s,'readonly',st=>st.get(k));
const idbSet=(s,k,v)=>idbOp(s,'readwrite',st=>st.put(v,k));
const idbDel=(s,k)=>idbOp(s,'readwrite',st=>st.delete(k));
const idbKeys=s=>idbOp(s,'readonly',st=>st.getAllKeys());
const photoURL=Object.create(null);
let S={decks:[],synced:[],folders:[],foldersAt:0};
function loadState(s){if(s&&Array.isArray(s.decks)){S.decks=s.decks.map(cleanDeck).filter(Boolean).sort(byOrd)}if(s&&Array.isArray(s.folders)){S.folders=s.folders.map(cleanFolder).filter(Boolean);S.foldersAt=+s.foldersAt||0}}
const folderById=id=>S.folders.find(f=>f.id===id);
const deckFolder=d=>d&&d.folder&&folderById(d.folder)?d.folder:null;
const decksIn=fid=>S.decks.filter(d=>deckFolder(d)===fid);
function saveFolders(){S.foldersAt=Date.now();saveLocal();queue('folders')}
let prefs=Object.assign({red:false,range:'all',order:'rand',dir:'tm',count:'20',tmode:'quiz',cardDir:'tm',theme:'dark',align:'center',vol:80,sfx:false,remind:false,remindAt:'20:00',lastDeck:null},lsGet(LP)||{});
const savePrefs=()=>lsSet(LP,prefs);
function applyTheme(){const al=['left','right'].includes(prefs.align)?prefs.align:'center';document.documentElement.classList.toggle('al-left',al==='left');document.documentElement.classList.toggle('al-right',al==='right');const t=prefs.theme==='light'?'light':'dark';document.documentElement.dataset.theme=t;const m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content',t==='light'?'#EEF3FB':'#040A1C')}
applyTheme();
let lsWarned=false;
let saveT=null,booted=false;
function writeNow(){clearTimeout(saveT);saveT=null;if(!booted)return Promise.resolve();return idbSet('kv','state',JSON.parse(JSON.stringify({decks:S.decks,folders:S.folders,foldersAt:S.foldersAt}))).catch(()=>{if(!lsWarned){lsWarned=true;toast('保存できませんでした。端末の空き容量を確認してください')}})}
const saveLocal=()=>{clearTimeout(saveT);saveT=setTimeout(writeNow,120)};
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&saveT)writeNow()});
addEventListener('pagehide',()=>{if(saveT)writeNow()});
function todayKey(){const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()}
function getToday(){const o=lsGet(LT);return o&&o.k===todayKey()?o.n:0}
function bumpToday(){lsSet(LT,{k:todayKey(),n:getToday()+1});if(getToday()===1&&NATIVE)nativeRemind()}

/* cloud sync (per-person private data) */
const cloud={assets:null,db:null,uid:null,on:false,status:'local',timers:{},busy:{},dirty:{}};
function syncPill(){return''}
function setSync(s){cloud.status=s;const el=$('#sync');if(el)el.outerHTML=syncPill()}
const deckRef=id=>cloud.db.collection('data/users/'+cloud.uid).doc(id);
function saveDeck(d){if(d)d.updatedAt=Date.now();saveLocal();if(d)queue(d.id)}
function queue(id){if(!cloud.on)return;clearTimeout(cloud.timers[id]);cloud.timers[id]=setTimeout(()=>flush(id),700)}
async function flush(id,retry){
  if(!cloud.on)return;
  if(cloud.busy[id]){cloud.dirty[id]=true;return}
  cloud.busy[id]=true;setSync('saving');
  const isF=id==='folders',d=isF?null:deckById(id);
  try{
    if(isF){await deckRef(id).set({items:JSON.parse(JSON.stringify(S.folders)),updatedAt:S.foldersAt||Date.now()})}
    else if(d){const{id:_,...body}=d;await deckRef(id).set(JSON.parse(JSON.stringify(body)));if(!S.synced.includes(id)){S.synced.push(id);saveLocal()}}
    else{await deckRef(id).delete();S.synced=S.synced.filter(x=>x!==id);saveLocal()}
  }catch(e){
    const c=e&&e.code;
    if(c==='unavailable'&&!retry){cloud.busy[id]=false;setTimeout(()=>flush(id,true),800+Math.random()*800);return}
    if(c==='quota_exceeded')toast('クラウドの容量がいっぱいです。この端末には保存されています');
    else if(c==='invalid_argument'||c==='revoked'||c==='not_granted'){cloud.on=false;toast('クラウドに保存できないため、この端末に保存します')}
    setSync(cloud.on?'err':'local');cloud.busy[id]=false;return;
  }
  cloud.busy[id]=false;
  if(cloud.dirty[id]){cloud.dirty[id]=false;flush(id);return}
  if(!Object.values(cloud.busy).some(Boolean))setSync('ok');
}
function withTimeout(p,ms){return Promise.race([p,new Promise((_,r)=>setTimeout(()=>r({code:'timeout'}),ms))])}
async function initCloud(){
  if(!(window.claude&&typeof window.claude.use==='function'))return;
  try{claude.use('assets').then(a=>{cloud.assets=a||null}).catch(()=>{})}catch(e){}
  try{
    const[user,db]=await Promise.all([claude.use('user'),claude.use('db')]);
    if(!user||!db)return;
    const uid=await user.id();if(!uid)return;
    cloud.db=db;cloud.uid=uid;setSync('loading');
    const snap=await withTimeout(db.collection('data/users/'+uid).get(),10000);
    const remote=snap.docs.filter(x=>x.exists&&/^d/.test(x.id)).map(x=>cleanDeck(Object.assign(JSON.parse(JSON.stringify(x.data())),{id:x.id}))).filter(Boolean);
    const rIds=new Set(remote.map(d=>d.id));const up=[];const merged=[];
    for(const r of remote){const l=deckById(r.id);if(l&&l.updatedAt>r.updatedAt){merged.push(l);up.push(l.id)}else merged.push(r)}
    for(const l of S.decks){if(rIds.has(l.id))continue;if(S.synced.includes(l.id))continue;merged.push(l);up.push(l.id)}
    merged.sort(byOrd);
    const fdoc=snap.docs.find(x=>x.exists&&x.id==='folders');let upF=false;
    if(fdoc){const fd=fdoc.data()||{};if((+fd.updatedAt||0)>=(S.foldersAt||0)){S.folders=(Array.isArray(fd.items)?fd.items:[]).map(x=>cleanFolder(JSON.parse(JSON.stringify(x)))).filter(Boolean);S.foldersAt=+fd.updatedAt||0}else upF=true}else if(S.folders.length)upF=true;
    S.decks=merged;S.synced=remote.map(d=>d.id);saveLocal();if(upF)setTimeout(()=>flush('folders'),0);
    cloud.on=true;setSync('ok');up.forEach(id=>flush(id));
    if(view.name!=='study'&&!$('#modal').classList.contains('open'))render();
  }catch(e){setSync(cloud.db?'err':'local')}
}

/* ---------- state ---------- */
let view={name:'home'};
let sess=null;
const deckById=id=>S.decks.find(d=>d.id===id);
const cur=()=>deckById(view.id);
function stats(d){const t=d.words.length,m=d.words.filter(w=>w.mas).length;return{t,m,p:t?Math.round(m/t*100):0}}
function go(v){view=v;render();window.scrollTo(0,0)}

/* ---------- views ---------- */
function ring(p,size,stroke,color){const r=(size-stroke)/2,c=2*Math.PI*r,h=size/2;return`<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><circle cx="${h}" cy="${h}" r="${r}" stroke="var(--surface2)" stroke-width="${stroke}" fill="none"/><circle cx="${h}" cy="${h}" r="${r}" stroke="${color}" stroke-width="${stroke}" fill="none" stroke-linecap="round" style="filter:drop-shadow(0 0 6px ${color});transition:stroke-dashoffset .6s" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${(c*(1-p/100)).toFixed(2)}" transform="rotate(-90 ${h} ${h})"/></svg>`}

function renderHome(){
  const tot=S.decks.reduce((a,d)=>a+d.words.length,0),mas=S.decks.reduce((a,d)=>a+d.words.filter(w=>w.mas).length,0);
  return`<header class="top"><div class="brand"><img class="logo" src="icon.png" alt=""><b>WordLoop</b></div>${syncPill()}<button class="icon" data-act="settings" aria-label="設定" title="設定">${ICON.gear}</button></header>
  <main class="pad">
    <section class="hero">
      <div class="stat"><span>${tot}</span><small>登録単語</small></div>
      <div class="stat"><span>${mas}</span><small>覚えた</small></div>
      <div class="stat"><span>${getToday()}</span><small>今日の学習</small></div>
    </section>
    ${remindDue()?`<div class="remind">${ICON.bell}<div><b>今日の学習がまだです</b><small>${esc(prefs.remindAt)} のリマインダー</small></div>${S.decks.length?`<button class="btn primary sm" data-act="resume">学習する</button>`:''}</div>`:''}
    ${homeLists()}
  </main>
  ${S.decks.length||S.folders.length?`<button class="fab" data-act="newItem" aria-label="新規作成">${ICON.plus}</button>`:''}`;
}
function homeLists(){
  if(!S.decks.length&&!S.folders.length)return emptyHome();
  const loose=S.decks.filter(d=>!deckFolder(d));let out='';
  if(S.folders.length)out+=`<h2>ファイル${S.folders.length>1?'<small>長押しで並び替え</small>':''}</h2><div class="decks" data-sort="folders">${S.folders.map(folderCard).join('')}</div>`;
  if(loose.length)out+=`<h2 class="${S.folders.length?'sec2':''}">単語帳${loose.length>1?'<small>長押しで並び替え</small>':''}</h2><div class="decks" data-sort="decks">${loose.map(deckCard).join('')}</div>`;
  return out}
function agg(ds){const t=ds.reduce((a,d)=>a+d.words.length,0),m=ds.reduce((a,d)=>a+d.words.filter(w=>w.mas).length,0);return{t,m,p:t?Math.round(m/t*100):0}}
function folderCard(f){const ds=decksIn(f.id),s=agg(ds);return`<div class="deck folder" role="button" tabindex="0" data-act="openFolder" data-id="${f.id}" style="--c:${f.color}"><span class="ftile">${ICON.folder}</span><span class="dmain"><b>${esc(f.name)}</b><small>単語帳 ${ds.length}冊 ・ ${s.t}語 ・ 覚えた ${s.p}%</small><span class="bar"><i style="width:${s.p}%"></i></span></span><button class="icon more" data-act="folderMenu" data-id="${f.id}" aria-label="ファイルのメニュー">${ICON.more}</button></div>`}
function deckCard(d){const s=stats(d);return`<div class="deck" role="button" tabindex="0" data-act="openDeck" data-id="${d.id}" style="--c:${d.color}"><span class="spine"></span><span class="dmain"><b>${esc(d.name)}</b><small>${s.t}語 ・ 覚えた ${s.m}語</small><span class="bar"><i style="width:${s.p}%"></i></span></span><span class="pct">${s.p}<small>%</small></span><button class="icon more" data-act="deckMenu" data-id="${d.id}" aria-label="単語帳のメニュー">${ICON.more}</button></div>`}
function renderFolder(){
  const f=folderById(view.id);if(!f){view={name:'home'};return renderHome()}
  const ds=decksIn(f.id),s=agg(ds);
  return`<header class="top"><button class="icon" data-act="home" aria-label="戻る">${ICON.back}</button><h1 class="ttl">${esc(f.name)}</h1><button class="icon" data-act="folderMenu" data-id="${f.id}" aria-label="メニュー">${ICON.more}</button></header>
  <main class="pad" style="--c:${f.color}">
    <section class="prog"><span class="ftile">${ICON.folder}</span><div class="ptxt"><b>単語帳 ${ds.length}冊 ・ ${s.t}語</b><span>覚えた ${s.m}語（${s.p}%）</span></div><div class="ringwrap">${ring(s.p,56,6,f.color)}<b style="font-size:13px">${s.p}<small>%</small></b></div></section>
    ${ds.length?`${ds.length>1?'<h2 style="margin-top:4px">単語帳<small>長押しで並び替え</small></h2>':''}<div class="decks" data-sort="decks">${ds.map(deckCard).join('')}</div><button class="btn ghost wide" style="margin-top:14px" data-act="addToFolder" data-id="${f.id}">${ICON.move}ほかの単語帳をここに移動</button>`
      :`<div class="empty"><div class="ftile lg">${ICON.folder}</div><h3>まだ単語帳がありません</h3><p>新しく作るか、ほかの単語帳を<br>このファイルに移動しましょう。</p><div class="row"><button class="btn primary" data-act="newDeckHere">${ICON.plus}単語帳を作成</button><button class="btn ghost" data-act="addToFolder" data-id="${f.id}">${ICON.move}単語帳を移動してくる</button></div></div>`}
  </main>
  <button class="fab" data-act="newDeckHere" aria-label="このファイルに単語帳を作成">${ICON.plus}</button>`}
function emptyHome(){return`<div class="empty">
  <img class="art" src="icon.png" alt="">
  <h3>最初の単語帳をつくろう</h3>
  <p>覚えたい単語を登録して、フラッシュカードや<br>テストでくり返し学習できます。</p>
  <div class="row"><button class="btn primary" data-act="newDeck">${ICON.plus}単語帳を作成</button><button class="btn ghost" data-act="sample">サンプル単語帳で試す</button></div></div>`}

const FILTERS=[['all','すべて'],['todo','未習得'],['done','覚えた'],['star','★チェック'],['weak','苦手']];
function filterFn(f){return w=>f==='all'||f==='rand'||(f==='todo'&&!w.mas)||(f==='done'&&w.mas)||(f==='star'&&w.star)||(f==='weak'&&weak(w))}
function renderDeck(){
  const d=cur();if(!d){view={name:'home'};return renderHome()}
  const s=stats(d),f=view.filter||'all';
  const cnt=k=>d.words.filter(filterFn(k)).length;
  return`<header class="top"><button class="icon" data-act="deckBack" aria-label="戻る">${ICON.back}</button><h1 class="ttl">${esc(d.name)}</h1><button class="icon" data-act="deckMenu" data-id="${d.id}" aria-label="メニュー">${ICON.more}</button></header>
  <main class="pad" style="--c:${d.color}">
    <section class="prog"><div class="ringwrap">${ring(s.p,64,7,d.color)}<b>${s.p}<small>%</small></b></div>
      <div class="ptxt"><b>覚えた ${s.m} / ${s.t}語</b><span>未習得 ${s.t-s.m} ・ チェック ${cnt('star')} ・ 苦手 ${cnt('weak')}</span></div></section>
    <section class="modes">
      <button class="mode" data-act="startCard"><span class="tile">${ICON.cards}</span><b>カード</b><small>めくって覚える</small></button>
      <button class="mode" data-act="setup"><span class="tile">${ICON.quiz}</span><b>テスト</b><small>4択・入力</small></button>
    </section>
    <div class="listbar"><label class="search">${ICON.search}<input id="q" type="search" placeholder="表・裏・メモを検索" value="${esc(view.q||'')}" autocomplete="off"></label>
      <button class="toggle ${prefs.red?'on':''}" data-act="red" aria-pressed="${prefs.red}">赤シート</button></div>
    <div class="chips">${FILTERS.map(([k,l],i)=>`<button class="chip ${f===k?'on':''}" data-act="filter" data-f="${k}">${l}<i>${cnt(k)}</i></button>${i===0?`<button class="chip rnd ${f==='rand'?'on':''}" data-act="filter" data-f="rand">${ICON.shuffle}ランダム並び替え</button>`:''}`).join('')}</div>
    <div id="wordlist">${listHTML(d)}</div>
  </main>
  <div class="bottombar"><button class="btn ghost" data-act="bulk">${ICON.upload}まとめて追加</button><button class="btn primary" data-act="addWord">${ICON.plus}単語を追加</button></div>`;
}
function visibleWords(d){
  const q=(view.q||'').trim().toLowerCase();
  let list=d.words.filter(filterFn(view.filter||'all'));
  if(q)list=list.filter(w=>(w.t+' '+w.m+' '+w.n+' '+tblText(w.tt)+' '+tblText(w.mt)).toLowerCase().includes(q));
  if(view.filter==='rand'){const pos=new Map((view.shuf||[]).map((id,i)=>[id,i]));list=list.slice().sort((a,b)=>(pos.has(a.id)?pos.get(a.id):1e9)-(pos.has(b.id)?pos.get(b.id):1e9))}
  return list}
function listHTML(d){
  const list=visibleWords(d),rnd=view.filter==='rand';
  if(!d.words.length)return`<div class="words"><div class="nolist">まだ単語がありません。<br>下のボタンから追加しましょう。<br>Excelやスプレッドシートからの貼り付けもOK。</div></div>`;
  if(!list.length)return`<div class="words"><div class="nolist">該当する単語はありません</div></div>`;
  return`${rnd?`<div class="sorthint">${ICON.shuffle}ランダムに表示中 ・ もう一度押すと再シャッフル（保存された順番は変わりません）</div>`:list.length>1?`<div class="sorthint">${ICON.grip}をドラッグ（スマホは行を長押し）で並び替え</div>`:''}<ul class="words ${prefs.red?'redsheet':''}" id="wl">${list.map(w=>`<li class="word" data-act="editWord" data-id="${w.id}">${rnd?'':`<span class="grip" data-act="noop" aria-label="並び替え">${ICON.grip}</span>`}<span class="dot ${w.mas?'done':weak(w)?'weak':''}"></span><div class="wt"><b>${w.t?esc(w.t):tblHas(w.tt)?`<span class="muted-lbl">${esc(tblSum(w.tt))}</span>`:'<span class="muted-lbl">（写真）</span>'}${tblHas(w.tt)||tblHas(w.mt)?'<span class="tbtag">テーブル</span>':''}</b><span class="mean" data-act="reveal">${w.m?esc(w.m):tblHas(w.mt)?esc(tblSum(w.mt)):'（写真）'}</span>${w.n?`<small>${esc(w.n)}</small>`:''}</div>${(w.ti||w.mi)?`<img class="thumb ${w.ti?'':'mth'}" src="${esc(src(w.ti||w.mi))}" alt="" loading="lazy">`:''}<button class="star ${w.star?'on':''}" data-act="star" data-id="${w.id}" aria-label="チェック">${ICON.star}</button></li>`).join('')}</ul>`;
}

/* ---------- study ---------- */
function sizeCls(t){const lines=String(t).split('\n'),n=Math.max(...lines.map(l=>[...l].length)),k=lines.length,tot=[...t].length;return tot>60||k>=4||n>40?'xs':k===3||n>22||tot>40?'s':k===2||n>11?'m':''}
function curWord(){const d=deckById(sess.deckId);if(!d)return null;while(sess.i<sess.items.length){const w=d.words.find(x=>x.id===sess.items[sess.i]);if(w)return w;sess.items.splice(sess.i,1)}return null}
function renderStudy(){
  const d=deckById(sess.deckId),w=d&&curWord();
  if(!w){if(sess.mode==='card'||!sess.res.length){view=Object.assign({},sess.back,{name:'deck',id:sess.deckId});return renderDeck()}view={name:'result',id:sess.deckId};return renderResult()}
  const n=sess.items.length,pct=Math.round((sess.i+(sess.mode==='card'?1:0))/n*100);
  const bar=sess.mode==='card'?`<div class="seek" id="seek" role="slider" aria-label="カードの位置" aria-valuemin="1" aria-valuemax="${n}" aria-valuenow="${sess.i+1}" title="タップ・ドラッグでその位置のカードへ移動"><div class="pbar"><i style="width:${pct}%"></i></div><span class="knob" style="left:${pct}%"></span><span class="seekTip"></span></div>`:`<div class="pbar"><i style="width:${pct}%"></i></div>`;
  const head=`<header class="top"><button class="icon" data-act="quit" aria-label="終了">${ICON.x}</button>${bar}<span class="cnt">${sess.i+1} / ${n}</span></header>`;
  let body='';
  if(sess.mode==='card'){
    const tm=sess.dir==='tm',q=tm?w.t:w.m,a=tm?w.m:w.t,qi=tm?w.ti:w.mi,ai=tm?w.mi:w.ti,qt=tm?w.tt:w.mt,at=tm?w.mt:w.tt,last=sess.i===n-1,enter=sess.enter||'';sess.enter='';
    body=`<div class="stage"><div class="card3d ${enter}" id="card" style="--c:${d.color}"><div class="flip ${sess.flipped?'on':''}" id="flip">
      <div class="face"><span class="hint">${tm?'表':'裏'}</span>${sideHTML(q,qi,qt)}<span class="tap">タップで裏返す ・ 左右にスライドで移動</span></div>
      <div class="face back"><span class="hint">${tm?'裏':'表'}</span>${sideHTML(a,ai,at)}${q?`<div class="sub">${esc(q)}</div>`:''}${w.n?`<div class="note">${esc(w.n)}</div>`:''}</div>
      </div></div>
      <div class="tools"><button class="icon" data-act="speak" aria-label="読み上げ">${ICON.sound}</button><button class="icon" data-act="swapDir" aria-label="表と裏を入れ替え" title="表と裏を入れ替え">${ICON.swap}</button><button class="star ${w.star?'on':''}" data-act="starCur" aria-label="チェック">${ICON.star}</button><button class="mast ${w.mas?'on':''}" data-act="toggleMas" aria-pressed="${w.mas}">${ICON.check}<span>${w.mas?'覚えた':'覚えていない'}</span></button></div></div>
      <div class="nav2"><button class="btn ghost" data-act="cardPrev" ${sess.i===0?'disabled':''}>${ICON.back}前へ</button><button class="btn ${last?'primary':'ghost'}" data-act="cardNext">${last?'完了':'次へ'}${last?ICON.check:ICON.fwd}</button></div>
      <div class="kbd">クリック・Space：裏返す　← →：前・次のカード　M：覚えた切替</div>`;
  }else if(sess.mode==='quiz'){
    if(sess.optsFor!==sess.i){sess.opts=makeOpts(d,w);sess.optsFor=sess.i;sess.picked=null}
    const tm=sess.dir==='tm',q=tm?w.t:w.m,qi=tm?w.ti:w.mi,qt=tm?w.tt:w.mt,done=sess.picked!=null;
    body=`<div class="stage" style="justify-content:flex-start;padding-top:10px"><div class="qbox"><span class="hint">正しい答えを選んでください</span>${sideHTML(q,qi,qt)}${done&&w.n?`<div class="note">${esc(w.n)}</div>`:''}<button class="icon" data-act="speak" aria-label="読み上げ">${ICON.sound}</button></div>
      <div class="opts">${sess.opts.map((o,i)=>{let c='';if(done){if(o.id===w.id)c='right';else if(i===sess.picked)c='wrong';else c='dim'}return`<button class="opt ${c}" data-act="pick" data-i="${i}"><span class="num">${i+1}</span>${o.img?`<img class="othumb" src="${esc(src(o.img))}" alt="">`:''}${esc(o.text)}</button>`}).join('')}</div>
      ${done&&sess.opts[sess.picked].id!==w.id?`<button class="btn primary wide nextbtn" data-act="next">次へ</button>`:''}</div>
      <div class="kbd">1〜4：選択　Enter：次へ</div>`;
  }else{
    const t=sess.typed;
    const hint=sess.hint&&!t?`<div class="hinttxt">${esc([...w.t].map((ch,i)=>i===0||ch===' '||ch==='\n'?ch:'_').join(''))}</div>`:'';
    body=`<div class="stage" style="justify-content:flex-start;padding-top:10px"><div class="qbox"><span class="hint">表の内容を入力してください</span>${sideHTML(w.m,w.mi,w.mt)}${hint}${t&&w.n?`<div class="note">${esc(w.n)}</div>`:''}${t?`<button class="icon" data-act="speak" aria-label="読み上げ">${ICON.sound}</button>`:''}</div>
      ${t?`<div class="fb ${t.ok?'ok':'ng'}">${t.ok?'正解！':'不正解'}${t.ok?'':`<span class="corr">${esc(w.t)}</span>${t.val?`<span class="yours">あなたの答え：${esc(t.val)}</span>`:''}`}</div><button class="btn primary wide nextbtn" data-act="next">次へ</button>`
      :`<form class="typein" id="typeform"><input id="ans" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="答えを入力" enterkeyhint="done"><div class="row"><button type="button" class="btn ghost" data-act="hint">${ICON.bulb}ヒント</button><button type="button" class="btn ghost" data-act="giveup">わからない</button></div><button type="submit" class="btn primary wide">答え合わせ</button></form>`}</div>`;
  }
  return head+`<main class="sw">${body}</main>`;
}
function sideHTML(text,ref,tbl){tbl=tblHas(tbl)?tbl:null;return(ref?`<img class="cimg ${text||tbl?'':'solo'} ${tbl?'withtbl':''}" src="${esc(src(ref))}" alt="" draggable="false">`:'')+(text?`<div class="big ${tbl?'withtbl ':ref?'withimg ':''}${sizeCls(text)}">${esc(text)}</div>`:'')+(tbl?`<div class="ctable">${tableHTML(tbl)}</div>`:'')}
function makeOpts(d,w){
  const key=sess.dir==='tm'?'m':'t',k=x=>x[key]||(tblHas(x[key+'t'])?'#t'+tblText(x[key+'t']):'#'+x.id),seen=new Set([k(w)]),picks=[];
  for(const o of shuffle(d.words)){if(o.id===w.id||seen.has(k(o)))continue;seen.add(k(o));picks.push(o);if(picks.length===3)break}
  return shuffle([w,...picks]).map(x=>({id:x.id,text:x[key]||(tblHas(x[key+'t'])?'（テーブル）'+tblSum(x[key+'t']):''),img:x[key+'i']}));
}
function record(ok){
  const d=deckById(sess.deckId),w=curWord();if(!w)return;
  if(ok){w.c++;w.mas=true}else{w.w++;w.mas=false}
  w.lt=Date.now();sess.res.push({id:w.id,ok});bumpToday();saveDeck(d);
}
function nextQ(){clearTimeout(sess.timer);sess.i++;sess.flipped=false;sess.picked=null;sess.typed=null;sess.hint=false;sess.lock=false;
  if(sess.i>=sess.items.length){go({name:'result',id:sess.deckId});return}render()}
function flip(){const f=$('#flip');if(!f)return;sess.flipped=!sess.flipped;f.classList.toggle('on',sess.flipped)}
function cardGo(delta,swipe){if(!sess||sess.lock)return;const ni=sess.i+delta,c=$('#card');
  if(ni<0||ni>=sess.items.length){if(ni>=sess.items.length&&!swipe){go(sess.back);return}
    if(c){c.style.transition='transform .2s';c.style.transform='';c.classList.remove('bump','in-r','in-l');void c.offsetWidth;c.classList.add('bump')}toast(ni<0?'最初のカードです':'最後のカードです');return}
  sess.lock=true;
  if(c){c.style.transition='transform .2s cubic-bezier(.4,0,1,1)';c.style.transform=`translateX(${delta>0?-110:110}%)`}
  setTimeout(()=>{if(delta>0)bumpToday();sess.i=ni;sess.flipped=false;sess.lock=false;sess.enter=delta>0?'in-r':'in-l';render()},170)}
function pick(i){if(sess.picked!=null||!sess.opts[i])return;const w=curWord();sess.picked=i;const ok=sess.opts[i].id===w.id;record(ok);playSfx(ok);render();if(ok)sess.timer=setTimeout(nextQ,750)}
const norm=s=>String(s).normalize('NFKC').toLowerCase().replace(/[.,!?;:'"’‘“”]/g,'').replace(/\s+/g,' ').trim();
function answerType(val){if(sess.typed)return;const w=curWord();const alts=w.t.split(/[\/／;；]/).map(norm).filter(Boolean);alts.push(norm(w.t));
  const ok=val!=null&&alts.includes(norm(val));sess.typed={val:val||'',ok};record(ok);playSfx(ok);render();if(ok)setTimeout(()=>speak(w.t,true),prefs.sfx?350:0)}
function attachSwipe(){
  const c=$('#card');if(!c)return;let sx=0,sy=0,dx=0,down=false,moved=false;
  c.addEventListener('pointerdown',e=>{if(sess.lock)return;down=true;moved=false;sx=e.clientX;sy=e.clientY;dx=0;c.style.transition='none';try{c.setPointerCapture(e.pointerId)}catch(_){}});
  c.addEventListener('pointermove',e=>{if(!down)return;dx=e.clientX-sx;if(Math.abs(dx)>6||Math.abs(e.clientY-sy)>6)moved=true;if(!moved)return;
    c.style.transform=`translateX(${dx}px)`});
  const end=()=>{if(!down)return;down=false;c.style.transition='transform .25s';
    if(dx<-70)cardGo(1,true);else if(dx>70)cardGo(-1,true);else{c.style.transform='';if(!moved)flip()}};
  c.addEventListener('pointerup',end);c.addEventListener('pointercancel',()=>{down=false;c.style.transform=''});
}
function attachSeek(){
  const s=$('#seek');if(!s)return;const n=sess.items.length,bar=s.querySelector('.pbar'),fill=bar.querySelector('i'),knob=s.querySelector('.knob'),tip=s.querySelector('.seekTip'),cnt=document.querySelector('.top .cnt');
  let drag=false,idx=sess.i;
  const at=x=>{const r=bar.getBoundingClientRect(),f=Math.max(0,Math.min(1,(x-r.left)/r.width));return Math.min(n-1,Math.max(0,Math.ceil(f*n)-1))};
  const show=i=>{idx=i;const p=(i+1)/n*100;fill.style.width=p+'%';knob.style.left=p+'%';if(cnt)cnt.textContent=`${i+1} / ${n}`;
    const d=deckById(sess.deckId),w=d&&d.words.find(x=>x.id===sess.items[i]),q=w?(sess.dir==='tm'?(w.t||tblSum(w.tt)):(w.m||tblSum(w.mt))):'';
    tip.innerHTML=`<small>${i+1}</small>${esc((q||'（写真）').replace(/\s*\n\s*/g,' '))}`;
    const sr=s.getBoundingClientRect(),br=bar.getBoundingClientRect(),tw=tip.offsetWidth,kx=br.left-sr.left+br.width*p/100;
    tip.style.left=Math.max(tw/2-sr.left+6,Math.min(innerWidth-sr.left-tw/2-6,kx))+'px'};
  s.addEventListener('pointerdown',e=>{if(sess.lock)return;e.preventDefault();drag=true;s.classList.add('drag');try{s.setPointerCapture(e.pointerId)}catch(_){}show(at(e.clientX))});
  s.addEventListener('pointermove',e=>{if(drag)show(at(e.clientX))});
  const end=()=>{if(!drag)return;drag=false;s.classList.remove('drag');
    if(idx!==sess.i){const old=sess.i;sess.i=idx;sess.flipped=false;sess.enter=idx>old?'in-r':'in-l';render()}};
  s.addEventListener('pointerup',end);s.addEventListener('pointercancel',end);
}
function speak(text,quiet){
  if(NATIVE&&P.TextToSpeech){const v=Math.max(0,Math.min(1,(+prefs.vol||0)/100));if(!v||!text)return;const lang=/^[\x00-\x7F]+$/.test(text)?'en-US':'ja-JP';
    Promise.resolve(P.TextToSpeech.stop()).catch(()=>{}).then(()=>P.TextToSpeech.speak({text,lang,rate:.95,pitch:1,volume:v,category:'ambient'})).catch(()=>{if(!quiet)toast('読み上げを使えません。端末の「テキスト読み上げ」設定を確認してください')});return}
  try{const s=window.speechSynthesis;if(!s||typeof SpeechSynthesisUtterance==='undefined'){if(!quiet)toast('この環境では読み上げが使えません');return}
  s.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=/^[\x00-\x7F]+$/.test(text)?'en-US':'ja-JP';u.rate=.95;u.volume=Math.max(0,Math.min(1,(+prefs.vol||0)/100));if(!u.volume)return;s.speak(u)}catch(e){}}

function renderResult(){
  const d=deckById(sess.deckId);if(!d){view={name:'home'};return renderHome()}
  const n=sess.res.length,ok=sess.res.filter(r=>r.ok).length,p=n?Math.round(ok/n*100):0;
  const wrong=[...new Set(sess.res.filter(r=>!r.ok).map(r=>r.id))].map(id=>d.words.find(w=>w.id===id)).filter(Boolean);
  const card=sess.mode==='card';
  const msg=p===100?'パーフェクト！':p>=80?'すばらしい！':p>=50?'いい調子！':'くり返して覚えよう';
  const col=p>=80?'#2DD4BF':p>=50?'#7DD3FC':'#3B82F6';
  return`<header class="top"><button class="icon" data-act="backDeck" aria-label="閉じる">${ICON.x}</button><h1 class="ttl">結果</h1><span style="width:42px"></span></header>
  <main class="res"><div class="ringwrap" style="margin-top:6px">${ring(p,150,12,col)}<b>${p}<small>%</small></b></div>
    <h3>${msg}</h3><div class="sum">${card?'覚えた':'正解'} <b>${ok}</b> ・ ${card?'まだ':'不正解'} <b>${n-ok}</b> ・ 全${n}問</div>
    <div class="acts">${wrong.length?`<button class="btn primary wide" data-act="retryWrong">${card?'「まだ」':'間違えた'}の${wrong.length}語を復習</button>`:''}
      <button class="btn ghost wide" data-act="retryAll">もう一度</button><button class="btn ghost wide" data-act="backDeck">単語帳に戻る</button></div>
    ${wrong.length?`<h4>${card?'まだ覚えていない単語':'間違えた単語'}</h4><ul class="words">${wrong.map(w=>`<li class="word" style="cursor:default"><span class="dot weak"></span><div class="wt"><b>${esc(w.t)}</b><span class="mean">${esc(w.m)}</span></div></li>`).join('')}</ul>`:''}
  </main>`;
}

/* ---------- sound ---------- */
let actx=null;
function playSfx(ok,force){if(!force&&!prefs.sfx)return;const v=(+prefs.vol||0)/100;if(!v)return;
  try{actx=actx||new(window.AudioContext||window.webkitAudioContext)();if(actx.state==='suspended')actx.resume();const t0=actx.currentTime+.01;
    const notes=ok?[[880,0,'sine'],[1318.5,.09,'sine']]:[[220,0,'triangle'],[174.6,.13,'triangle']];
    notes.forEach(([f,dt,tp])=>{const o=actx.createOscillator(),g=actx.createGain();o.type=tp;o.frequency.value=f;
      g.gain.setValueAtTime(0.0001,t0+dt);g.gain.exponentialRampToValueAtTime(.3*v,t0+dt+.012);g.gain.exponentialRampToValueAtTime(.0001,t0+dt+(ok?.3:.34));
      o.connect(g);g.connect(actx.destination);o.start(t0+dt);o.stop(t0+dt+.4)})}catch(e){}}

/* ---------- reminder ---------- */
let remindTimer=null;
const hm=s=>{const m=/^(\d{1,2}):(\d{2})$/.exec(s||'');return m?[+m[1],+m[2]]:[20,0]};
function remindDue(){if(!prefs.remind)return false;const[a,b]=hm(prefs.remindAt),n=new Date();return n.getHours()*60+n.getMinutes()>=a*60+b&&getToday()===0}
const NBASE=1000,NDAYS=30;
async function nativeRemind(){if(!NATIVE||!P.LocalNotifications)return;const LN=P.LocalNotifications;
  try{const ids=[];for(let i=0;i<NDAYS+1;i++)ids.push({id:NBASE+i});await LN.cancel({notifications:ids})}catch(e){}
  if(!prefs.remind)return;
  try{const st=await LN.checkPermissions();if(st.display!=='granted')return}catch(e){return}
  const[a,b]=hm(prefs.remindAt),now=new Date(),list=[];
  for(let i=0;i<=NDAYS;i++){const t=new Date(now);t.setDate(now.getDate()+i);t.setHours(a,b,0,0);if(t<=now)continue;if(i===0&&getToday()>0)continue;
    list.push({id:NBASE+i,title:'WordLoop',body:'今日の単語学習がまだです。少しだけでも始めましょう！',schedule:{at:t,allowWhileIdle:true}})}
  try{if(list.length)await LN.schedule({notifications:list})}catch(e){}}
let nativePerm='prompt';
async function refreshNativePerm(){if(!NATIVE||!P.LocalNotifications)return;try{nativePerm=(await P.LocalNotifications.checkPermissions()).display}catch(e){}}
function notifState(){try{return typeof Notification==='undefined'?'none':Notification.permission}catch(e){return'none'}}
function notifyNow(){try{if(notifState()==='granted'&&navigator.serviceWorker&&navigator.serviceWorker.controller){navigator.serviceWorker.ready.then(r=>r.showNotification('WordLoop',{body:'今日の単語学習がまだです。少しだけでも始めましょう！',icon:'icon-192.png',badge:'icon-192.png',tag:'wordloop-remind'})).catch(()=>{});return}if(notifState()==='granted'){new Notification('WordLoop',{body:'今日の単語学習がまだです。少しだけでも始めましょう！',icon:'icon.png',tag:'wordloop-remind'});return}}catch(e){}toast('今日の学習がまだです')}
function scheduleRemind(){if(NATIVE){nativeRemind();return}clearTimeout(remindTimer);if(!prefs.remind)return;const[a,b]=hm(prefs.remindAt),n=new Date(),t=new Date(n);t.setHours(a,b,0,0);if(t<=n)t.setDate(t.getDate()+1);
  remindTimer=setTimeout(()=>{if(prefs.remind&&getToday()===0){notifyNow();if(view.name==='home')render()}scheduleRemind()},Math.min(t-n,2147000000))}
function remindNote(){if(!prefs.remind)return'オンにすると、決まった時刻に学習をうながします。';
  if(NATIVE)return nativePerm==='granted'?`毎日 ${esc(prefs.remindAt)} に通知します。その日すでに学習していれば、その日は通知しません。アプリを閉じていても届きます。`
    :'通知が許可されていません。Androidの「設定 → アプリ → WordLoop → 通知」で許可してください。許可されるまでは、アプリを開いたときにホーム画面でお知らせします。';
  return notifState()==='granted'?`このページを開いている間は、毎日 ${esc(prefs.remindAt)} に端末へ通知します。その時刻を過ぎてもその日の学習がまだのときは、ホーム画面でもお知らせします。`
    :`この表示環境では端末への通知が使えないため、${esc(prefs.remindAt)} を過ぎてもその日の学習がまだのときに、ホーム画面でお知らせします。`}
function openSettings(){
  const th=prefs.theme==='light'?'light':'dark';
  openModal(`${mh('設定')}
  <div class="set-sec"><h4>${ICON.palette}色調</h4><div class="seg"><button type="button" class="${th==='dark'?'on':''}" data-act="theme" data-val="dark">${ICON.moon}ダーク</button><button type="button" class="${th==='light'?'on':''}" data-act="theme" data-val="light">${ICON.sun}ホワイト</button></div></div>
  <div class="set-sec"><h4>${ICON.cards}カードの文字の配置</h4><div class="seg">${[['left','左詰め','0'],['center','中央','50%'],['right','右詰め','100%']].map(([v,l,x])=>`<button type="button" class="${(prefs.align||'center')===v?'on':''}" data-act="align" data-val="${v}"><i class="al" style="--x:${x}"></i>${l}</button>`).join('')}</div><p class="muted">カードとテストの問題に表示する文字の位置です。</p></div>
  <div class="set-sec"><h4>${ICON.sound}音量</h4>
    <div class="volrow">${ICON.sound}<input type="range" id="vol" min="0" max="100" step="5" value="${+prefs.vol||0}" aria-label="音量"><b id="volv">${+prefs.vol||0}</b></div>
    <div class="toggle-row"><span>効果音<small>テストで正解・不正解のときに音を鳴らす</small></span><label class="switch"><input type="checkbox" id="sfx" ${prefs.sfx?'checked':''}><span></span></label></div>
    <button type="button" class="btn ghost wide" data-act="testSound">${ICON.sound}音を試す</button>
    <p class="muted">単語の読み上げと効果音の音量です。0にすると音は出ません。</p></div>
  <div class="set-sec"><h4>${ICON.bell}通知</h4>
    <div class="toggle-row"><span>学習リマインダー<small>その日まだ学習していないときにお知らせ</small></span><label class="switch"><input type="checkbox" id="remind" ${prefs.remind?'checked':''}><span></span></label></div>
    <div class="fld" id="remindfld" style="${prefs.remind?'':'display:none'}"><span>お知らせする時刻</span><input type="time" id="remindAt" value="${esc(prefs.remindAt)}"></div>
    <p class="muted" id="remindNote">${remindNote()}</p></div>
  <div class="set-sec"><h4>${ICON.upload}バックアップ</h4>
    <div class="mf" style="margin-top:0"><button type="button" class="btn ghost" data-act="exportBackup">${ICON.upload}書き出す</button><label class="btn ghost" style="cursor:pointer">${ICON.reset}読み込む<input type="file" id="importFile" accept=".json,application/json" hidden></label></div>
    <p class="muted">単語帳・ファイル・写真をまとめて1つのファイルに保存します。機種変更や、アプリを入れ直すときに使ってください。データはこのスマホの中だけに保存されているため、アプリを削除すると消えます。</p></div>`)}
function updRemindUI(){if(view.name==='home')render();const f=$('#remindfld');if(f)f.style.display=prefs.remind?'':'none';const n=$('#remindNote');if(n)n.innerHTML=remindNote()}
document.addEventListener('input',e=>{if(e.target.id==='vol'){prefs.vol=+e.target.value;const b=$('#volv');if(b)b.textContent=prefs.vol;savePrefs()}});
document.addEventListener('change',e=>{const t=e.target;
  if(t.id==='sfx'){prefs.sfx=t.checked;savePrefs();if(t.checked)playSfx(true,true)}
  else if(t.id==='remindAt'){if(/^\d{1,2}:\d{2}$/.test(t.value)){prefs.remindAt=t.value;savePrefs();scheduleRemind();updRemindUI()}}
  else if(t.id==='remind'){prefs.remind=t.checked;savePrefs();scheduleRemind();updRemindUI();
    if(t.checked&&NATIVE&&P.LocalNotifications){P.LocalNotifications.requestPermissions().then(r=>{nativePerm=r.display;nativeRemind();updRemindUI()},updRemindUI)}
    else if(t.checked&&notifState()==='default'){try{Promise.resolve(Notification.requestPermission()).then(updRemindUI,updRemindUI)}catch(err){}}}});

/* ---------- backup ---------- */
const blobToDataURL=b=>new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result);r.onerror=()=>rej(r.error);r.readAsDataURL(b)});
const IMG_URL=/^data:image\/(jpeg|png|webp|gif);base64,([A-Za-z0-9+\/=]+)$/;
function dataURLToBlob(u){const m=IMG_URL.exec(u);if(!m)throw new Error('bad image');const bin=atob(m[2]),a=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)a[i]=bin.charCodeAt(i);return new Blob([a],{type:'image/'+m[1]})}
async function exportBackup(){
  try{toast('書き出しています…');const photos={};
    for(const d of S.decks)for(const w of d.words)for(const r of[w.ti,w.mi])if(r&&r.p&&!photos[r.p]){const b=await idbGet('photos',r.p);if(b)photos[r.p]=await blobToDataURL(b)}
    const data=JSON.stringify({app:'WordLoop',version:1,exportedAt:new Date().toISOString(),decks:S.decks,folders:S.folders,photos});
    const t=new Date(),name=`WordLoop-backup-${t.getFullYear()}${String(t.getMonth()+1).padStart(2,'0')}${String(t.getDate()).padStart(2,'0')}.json`;
    if(NATIVE&&P.Filesystem&&P.Share){const r=await P.Filesystem.writeFile({path:name,data,directory:'CACHE',encoding:'utf8'});
      try{await P.Share.share({title:'WordLoopのバックアップ',files:[r.uri],dialogTitle:'保存先・送信先を選んでください'})}catch(e){}}
    else{const blob=new Blob([data],{type:'application/json'});
      const mobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||(navigator.maxTouchPoints>1&&/Mac/.test(navigator.platform||''));
      if(mobile&&navigator.canShare&&typeof File==='function'){const file=new File([blob],name,{type:'application/json'});
        if(navigator.canShare({files:[file]})){try{await navigator.share({files:[file],title:'WordLoopのバックアップ'});toast('「ファイルに保存」などで保存してください');return}catch(e){if(e&&e.name==='AbortError')return}}}
      const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),8000);toast('バックアップを書き出しました')}
  }catch(e){toast('書き出しに失敗しました')}}
async function importBackup(file){
  if(file.size>300*1024*1024){toast('ファイルが大きすぎます（300MBまで）');return}
  let o;try{o=JSON.parse(await file.text())}catch(e){toast('バックアップファイルを読み込めませんでした');return}
  if(!o||o.app!=='WordLoop'||!Array.isArray(o.decks)){toast('WordLoopのバックアップファイルではありません');return}
  const decks=o.decks.map(cleanDeck).filter(Boolean),folders=(Array.isArray(o.folders)?o.folders:[]).map(cleanFolder).filter(Boolean);
  confirmDlg('バックアップを読み込む',`単語帳${decks.length}冊・ファイル${folders.length}個を読み込みます。同じ単語帳・ファイルがある場合は、バックアップの内容で上書きされます。`,'読み込む',async()=>{
    try{const ph=o.photos&&typeof o.photos==='object'?o.photos:{};
      for(const[id,u]of Object.entries(ph)){if(!SAFE_ID.test(id)||typeof u!=='string'||u.length>20*1024*1024||!IMG_URL.test(u))continue;let b;try{b=dataURLToBlob(u)}catch(e){continue}await idbSet('photos',id,b);if(photoURL[id])URL.revokeObjectURL(photoURL[id]);photoURL[id]=URL.createObjectURL(b)}
      for(const f of folders){const i=S.folders.findIndex(x=>x.id===f.id);if(i>=0)S.folders[i]=f;else S.folders.push(f)}
      for(const d of decks){const i=S.decks.findIndex(x=>x.id===d.id);if(i>=0)S.decks[i]=d;else S.decks.push(d)}
      S.foldersAt=Date.now();await writeNow();go({name:'home'});toast('バックアップを読み込みました')}catch(e){toast('読み込みに失敗しました')}})}
document.addEventListener('change',e=>{if(e.target.id==='importFile'){const f=e.target.files&&e.target.files[0];e.target.value='';if(f)importBackup(f)}});

/* ---------- render ---------- */
function render(){
  let h;switch(view.name){case'deck':h=renderDeck();break;case'folder':h=renderFolder();break;case'study':h=renderStudy();break;case'result':h=renderResult();break;default:h=renderHome()}
  app.innerHTML=h;const cardMode=view.name==='study'&&sess&&sess.mode==='card';app.className='v-'+view.name+(cardMode?' mode-card':'');document.documentElement.classList.toggle('lock',!!cardMode);if(cardMode)window.scrollTo(0,0);
  if(view.name==='study'){if(sess.mode==='card'){attachSwipe();attachSeek()}if(sess.mode==='type'){const i=$('#ans');if(i)setTimeout(()=>i.focus(),30)}}
}

/* ---------- modals ---------- */
let modalCb=null,modalTimer=null;
function openModal(html){setTimeout(growAll,30);clearTimeout(modalTimer);const m=$('#modal');m.innerHTML=`<div class="scrim" data-act="closeModal"></div><div class="sheet" role="dialog" aria-modal="true">${html}</div>`;m.classList.add('open');
  requestAnimationFrame(()=>requestAnimationFrame(()=>m.classList.add('show')));const f=m.querySelector('[autofocus]');if(f)setTimeout(()=>f.focus(),60)}
function closeModal(){const m=$('#modal');m.classList.remove('show');modalTimer=setTimeout(()=>{m.classList.remove('open');m.innerHTML=''},230)}
const mh=t=>`<div class="mh"><h3>${t}</h3><button type="button" class="icon" data-act="closeModal" aria-label="閉じる">${ICON.x}</button></div>`;
function confirmDlg(title,msg,label,cb){modalCb=cb;openModal(`${mh(title)}<p class="muted">${msg}</p><div class="mf"><button class="btn ghost" data-act="closeModal">キャンセル</button><button class="btn primary" style="background:var(--ng)" data-act="confirmOk">${label}</button></div>`)}
function folderSelect(sel){return S.folders.length?`<label class="fld"><span>ファイル</span><select name="folder"><option value="">ファイルに入れない（ホーム）</option>${S.folders.map(f=>`<option value="${f.id}" ${sel===f.id?'selected':''}>${esc(f.name)}</option>`).join('')}</select></label>`:''}
function openDeckForm(id,inFolder){const d=id?deckById(id):null,col=d?d.color:COLORS[S.decks.length%COLORS.length];
  openModal(`<form id="deckform" data-id="${id||''}" data-folder="${esc(d?(deckFolder(d)||''):(inFolder||''))}">${mh(d?'単語帳を編集':'新しい単語帳')}
  <label class="fld"><span>名前</span><input name="name" required maxlength="40" value="${esc(d?d.name:'')}" placeholder="例：英検2級、TOEIC、古文単語" autofocus autocomplete="off"></label>
  <div class="fld"><span>カラー</span><div class="swatches">${COLORS.map(c=>`<label><input type="radio" name="color" value="${c}" ${c===col?'checked':''}><i style="background:${c}"></i></label>`).join('')}</div></div>
  ${folderSelect(d?deckFolder(d):(inFolder||null))}
  <div class="mf"><button class="btn primary" type="submit">${d?'保存':'作成'}</button></div></form>`)}
let pendingMove=null;
function openFolderForm(id,moveDeck){const f=id?folderById(id):null,col=f?f.color:COLORS[(S.folders.length+2)%COLORS.length];pendingMove=moveDeck||null;
  openModal(`<form id="folderform" data-id="${id||''}">${mh(f?'ファイルを編集':'新しいファイル')}
  <p class="muted" style="margin-top:-4px">${f?'':'同じ種類の単語帳をまとめておけます（例：英語、資格、古文）。'}</p>
  <label class="fld"><span>ファイル名</span><input name="name" required maxlength="40" value="${esc(f?f.name:'')}" placeholder="例：英語、資格試験、国語" autofocus autocomplete="off"></label>
  <div class="fld"><span>カラー</span><div class="swatches">${COLORS.map(c=>`<label><input type="radio" name="color" value="${c}" ${c===col?'checked':''}><i style="background:${c}"></i></label>`).join('')}</div></div>
  <div class="mf"><button class="btn primary" type="submit">${f?'保存':'作成'}</button></div></form>`)}
const miStyle=c=>`style="--c:${c}"`;
function openMoveDeck(id){const d=deckById(id);if(!d)return;const cf=deckFolder(d),chk=`<span class="chk">${ICON.check}</span>`;
  openModal(`${mh('ファイルに移動')}<p class="muted" style="margin-top:-4px">「${esc(d.name)}」の移動先を選んでください。</p><div class="menu big">
   <button data-act="moveTo" data-id="${id}" data-f="" class="${cf?'':'cur'}"><span class="mi">${ICON.home}</span><span>ファイルに入れない<small>ホームに表示</small></span>${cf?'':chk}</button>
   ${S.folders.map(f=>`<button data-act="moveTo" data-id="${id}" data-f="${f.id}" class="${cf===f.id?'cur':''}"><span class="mi" ${miStyle(f.color)}>${ICON.folder}</span><span>${esc(f.name)}<small>単語帳 ${decksIn(f.id).length}冊</small></span>${cf===f.id?chk:''}</button>`).join('')}
   <button data-act="newFolderMove" data-id="${id}"><span class="mi">${ICON.plus}</span><span>新しいファイルを作って移動</span></button></div>`)}
function openAddToFolder(fid){const f=folderById(fid);if(!f)return;const others=S.decks.filter(d=>deckFolder(d)!==fid);
  openModal(`${mh('「'+esc(f.name)+'」に移動')}${others.length?`<p class="muted" style="margin-top:-4px">タップした単語帳をこのファイルに移動します。</p><div class="menu big">${others.map(d=>{const of=deckFolder(d);return`<button data-act="moveHere" data-id="${d.id}" data-f="${fid}"><span class="mi" ${miStyle(d.color)}>${ICON.cards}</span><span>${esc(d.name)}<small>${of?'ファイル「'+esc(folderById(of).name)+'」':'ホーム'} ・ ${d.words.length}語</small></span></button>`}).join('')}</div>`:'<p class="muted">ほかに移動できる単語帳はありません。</p>'}`)}
function afterDeckGone(d){if(view.name==='deck'&&view.id===d.id){const f=deckFolder(d);go(f?{name:'folder',id:f}:{name:'home'})}else render()}
let wf=null;
const wfSide=(ref,tbl)=>({ref:ref||null,pending:null,removed:false,table:tbl?cleanTable(JSON.parse(JSON.stringify(tbl))):null});
function thickOpts(n,unit){const o=[['0','なし']];for(let i=1;i<n;i++)o.push([String(i),`${i}${unit}目と${i+1}${unit}目の間`]);return o}
function tblSlot(side){const t=wf&&wf[side].table;
  if(!t)return`<button type="button" class="addph" data-act="addTable" data-side="${side}">${ICON.table}<span>テーブルを追加</span><small>行と列を指定してマスに入力</small></button>`;
  let g='';
  for(let i=0;i<t.r;i++){g+='<tr>';for(let j=0;j<t.c;j++){const cl=(t.th.h===i+1?'tb ':'')+(t.th.v===j+1?'tr':'');g+=`<td class="${cl}"><input class="tbcell" data-side="${side}" data-r="${i}" data-c="${j}" value="${esc(t.cells[i][j])}" maxlength="200" autocomplete="off" aria-label="${i+1}行${j+1}列"></td>`}g+='</tr>'}
  return`<div class="tbed"><div class="tbbar">行<span class="stp"><button type="button" data-act="tbStep" data-side="${side}" data-k="r" data-d="-1" ${t.r<=1?'disabled':''} aria-label="行を減らす">−</button><b>${t.r}</b><button type="button" data-act="tbStep" data-side="${side}" data-k="r" data-d="1" ${t.r>=TMAX_R?'disabled':''} aria-label="行を増やす">＋</button></span>
    列<span class="stp"><button type="button" data-act="tbStep" data-side="${side}" data-k="c" data-d="-1" ${t.c<=1?'disabled':''} aria-label="列を減らす">−</button><b>${t.c}</b><button type="button" data-act="tbStep" data-side="${side}" data-k="c" data-d="1" ${t.c>=TMAX_C?'disabled':''} aria-label="列を増やす">＋</button></span>
    <button type="button" class="rm" data-act="rmTable" data-side="${side}">${ICON.trash}テーブルを削除</button></div>
    <label class="tbthick">横の太線<select data-tbthick="${side}" data-dir="h" ${t.r<2?'disabled':''}>${thickOpts(t.r,'行').map(([v,l])=>`<option value="${v}" ${+v===t.th.h?'selected':''}>${l}</option>`).join('')}</select></label>
    <label class="tbthick">縦の太線<select data-tbthick="${side}" data-dir="v" ${t.c<2?'disabled':''}>${thickOpts(t.c,'列').map(([v,l])=>`<option value="${v}" ${+v===t.th.v?'selected':''}>${l}</option>`).join('')}</select></label>
    <div class="tbwrap"><table class="tbl tbl-edit">${g}</table></div></div>`}
function refreshTb(side){const el=$('#tb-'+side);if(el&&wf)el.innerHTML=tblSlot(side)}
function resizeTbl(t,r,c){const cells=[];for(let i=0;i<r;i++){const row=[];for(let j=0;j<c;j++)row.push(t.cells[i]&&t.cells[i][j]!=null?t.cells[i][j]:'');cells.push(row)}return cleanTable({r,c,cells,th:t.th})}
document.addEventListener('input',e=>{const x=e.target;if(x.classList&&x.classList.contains('tbcell')&&wf){const t=wf[x.dataset.side]&&wf[x.dataset.side].table;if(t)t.cells[+x.dataset.r][+x.dataset.c]=x.value.slice(0,200)}});
document.addEventListener('change',e=>{const x=e.target;if(x.dataset&&x.dataset.tbthick&&wf){const s=x.dataset.tbthick,t=wf[s]&&wf[s].table;if(!t)return;const th={...t.th};th[x.dataset.dir==='v'?'v':'h']=+x.value||0;wf[s].table=cleanTable({...t,th});refreshTb(s)}});
document.addEventListener('keydown',e=>{const x=e.target;if(e.key==='Enter'&&x.classList&&x.classList.contains('tbcell')){e.preventDefault();const t=wf&&wf[x.dataset.side]&&wf[x.dataset.side].table;if(!t)return;let r=+x.dataset.r,c=+x.dataset.c+1;if(c>=t.c){c=0;r++}if(r>=t.r)return;const n=document.querySelector(`.tbcell[data-side="${x.dataset.side}"][data-r="${r}"][data-c="${c}"]`);if(n)n.focus()}});
function phSlot(side){const s=wf[side],u=s.pending?s.pending.preview:(!s.removed&&s.ref?src(s.ref):'');
  const inp=`<input type="file" accept="image/*" data-side="${side}" hidden>`;
  if(u)return`<div class="ph"><img src="${esc(u)}" alt=""><button type="button" class="phx" data-act="rmPhoto" data-side="${side}" aria-label="写真を削除">${ICON.x}</button><label class="phchg">${ICON.camera}変更${inp}</label></div>`;
  return`<label class="addph">${ICON.camera}<span>写真を追加</span><small>選択・貼り付け・ドロップ</small>${inp}</label>`}
function refreshPh(side){const el=$('#ph-'+side);if(el&&wf)el.innerHTML=phSlot(side)}
function grow(el){el.style.height='auto';const max=innerHeight*.45;el.style.height=Math.min(el.scrollHeight+2,max)+'px';el.classList.toggle('scroll',el.scrollHeight+2>max)}
function growAll(){document.querySelectorAll('textarea.grow').forEach(grow)}
document.addEventListener('input',e=>{if(e.target.classList&&e.target.classList.contains('grow'))grow(e.target)});
// Ctrl/⌘ + Enter saves the word form (Enter alone adds a new line)
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&(e.ctrlKey||e.metaKey)&&e.target.closest&&e.target.closest('#wordform')){e.preventDefault();const b=document.querySelector('#wordform .btn.primary[type=submit]');if(b)b.click()}});
function openWordModal(id){const d=cur(),w=id?d.words.find(x=>x.id===id):null;
  wf={t:wfSide(w&&w.ti,w&&w.tt),m:wfSide(w&&w.mi,w&&w.mt),busy:false};
  openModal(`<form id="wordform" data-id="${id||''}" novalidate>${mh(w?'単語を編集':'単語を追加')}
  <div class="fld"><span>表</span><textarea name="t" class="grow" rows="1" placeholder="表に出す内容（例：日本）" autofocus autocomplete="off" autocapitalize="off" spellcheck="false">${esc(w?w.t:'')}</textarea><div class="phslot" id="ph-t" data-side="t">${phSlot('t')}</div><div class="tblslot" id="tb-t">${tblSlot('t')}</div></div>
  <div class="fld"><span>裏</span><textarea name="m" class="grow" rows="1" placeholder="裏に出す内容（例：東京）" autocomplete="off">${esc(w?w.m:'')}</textarea><span class="hintline">改行もそのままカードに表示されます（保存は「保存」ボタン、PCは Ctrl＋Enter でも可）</span><div class="phslot" id="ph-m" data-side="m">${phSlot('m')}</div><div class="tblslot" id="tb-m">${tblSlot('m')}</div></div>
  <label class="fld"><span>メモ・例文<i>任意 ・ カードの裏に表示</i></span><textarea name="n" rows="2">${esc(w?w.n:'')}</textarea></label>
  ${w?`<div class="toggle-row">覚えた<label class="switch"><input type="checkbox" name="mas" ${w.mas?'checked':''}><span></span></label></div><div class="wstat">正解 ${w.c}回 ・ 不正解 ${w.w}回</div>`:''}
  <div class="mf">${w?`<button type="button" class="btn ghost danger" data-act="delWord" data-id="${w.id}">${ICON.trash}削除</button>`:`<button type="submit" class="btn ghost" name="more" value="1">続けて追加</button>`}<button type="submit" class="btn primary">保存</button></div></form>`)}
// one CSV line -> fields ("…" quoting and "" escapes supported; , or ， separates)
function csvSplit(line){const out=[];let cur='',q=false;for(let i=0;i<line.length;i++){const ch=line[i];
    if(q){if(ch==='"'){if(line[i+1]==='"'){cur+='"';i++}else q=false}else cur+=ch}
    else if(ch==='"'&&!cur.trim())q=true;
    else if(ch===','||ch==='，'){out.push(cur);cur=''}
    else cur+=ch}
  out.push(cur);return out.map(s=>{s=s.trim();return/^'[=+@\t\r]/.test(s)?s.slice(1):s})}
function parseLines(txt){const out=[];let seenLine=false;for(let line of txt.split(/\r?\n/)){line=line.trim();if(!line)continue;let t,m,n='';
  if(line.includes('\t')){const p=line.split('\t');t=p[0];m=p[1];n=p.slice(2).join(' ')}
  else if(/[,，]/.test(line)){const p=csvSplit(line);t=p[0];m=p[1];n=p.slice(2).filter(x=>x!=='').join(', ')}
  else{const r=line.match(/^(.+?)\s*(?:[:：=＝]|\s-\s)\s*(.+)$/)||line.match(/^([\x20-\x7E]+?)\s+([^\x00-\x7F].*)$/);if(r){t=r[1];m=r[2]}}
  t=(t||'').trim().replace(/^"|"$/g,'');m=(m||'').trim().replace(/^"|"$/g,'');
  const header=!seenLine&&/^(単語|英単語|word|term|表|おもて|front)$/i.test(t);seenLine=true;if(t&&m&&!header)out.push({t,m,n:n.trim()})}return out}
function openBulk(){openModal(`<form id="bulkform">${mh('まとめて追加')}
  <p class="muted">1行に1枚ずつ。「表,裏」または「表,裏,メモ」の形で入力します。「表:裏」やタブ区切りにも対応。Excelやスプレッドシートの2〜3列（3列目はメモ）をそのまま貼り付けできます。</p>
  <label class="fld"><textarea name="txt" id="bulktxt" rows="9" placeholder="apple,りんご&#10;日本,東京,首都&#10;1192年,鎌倉幕府,いいくにつくろう" autofocus></textarea></label>
  <div class="mf"><button class="btn primary" type="submit" id="bulkbtn">0語を追加</button></div></form>`)}
function openSetup(){const d=cur();if(!d.words.length){toast('まず単語を追加してください');return}
  const c=k=>d.words.filter(filterFn(k)).length;
  const seg=(key,items)=>`<div class="seg" data-key="${key}">${items.map(([v,l,s])=>`<button type="button" class="${prefs[key]===v?'on':''}" data-act="seg" data-key="${key}" data-val="${v}">${l}${s!=null?`<small>${s}語</small>`:''}</button>`).join('')}</div>`;
  openModal(`${mh('テスト')}<div id="setup">
   <div class="fld"><span>テストの種類</span>${seg('tmode',[['quiz','4択'],['type','入力']])}</div>
   <div class="fld"><span>出題範囲</span>${seg('range',[['all','すべて',c('all')],['todo','未習得',c('todo')],['star','★',c('star')],['weak','苦手',c('weak')]])}</div>
   <div class="fld"><span>出題順</span>${seg('order',[['rand','ランダム'],['seq','登録順']])}</div>
   <div class="fld" id="dirfld" style="${prefs.tmode==='type'?'display:none':''}"><span>出題の向き</span>${seg('dir',[['tm','表 → 裏'],['mt','裏 → 表']])}</div>
   <div class="fld"><span>問題数</span>${seg('count',[['10','10'],['20','20'],['50','50'],['all','すべて']])}</div>
   <button class="btn primary wide" data-act="start" id="startbtn" style="margin-top:4px"></button></div>`);updStart()}
function startCard(){const d=cur(),list=visibleWords(d);
  if(!list.length){toast(d.words.length?'表示中の単語がありません':'まず単語を追加してください');return}
  sess={mode:'card',deckId:d.id,items:list.map(w=>w.id),i:0,dir:prefs.cardDir,res:[],flipped:false,lock:false,enter:'',back:{...view}};
  go({name:'study',id:d.id})}
function baseFor(d){return d.words.filter(filterFn(prefs.range)).filter(w=>prefs.tmode!=='type'||w.t)}
function poolFor(d){let p=baseFor(d);if(prefs.order==='rand')p=shuffle(p);if(prefs.count!=='all')p=p.slice(0,+prefs.count);return p}
function updStart(){const b=$('#startbtn'),d=cur();if(!b||!d)return;const n=Math.min(baseFor(d).length,prefs.count==='all'?1e9:+prefs.count);b.textContent=n?`${n}問でスタート`:'該当する単語がありません';b.disabled=!n;b.style.opacity=n?1:.5}
function startSession(mode,ids){const d=cur()||deckById(sess&&sess.deckId);
  sess={mode,deckId:d.id,items:ids,i:0,dir:mode==='type'?'mt':prefs.dir,res:[],flipped:false,picked:null,optsFor:-1,typed:null,hint:false,lock:false,back:(view.name==='deck'&&view.filter!==undefined)?{...view}:(sess&&sess.back)||{name:'deck',id:d.id}};
  go({name:'study',id:d.id})}
function csvOf(d){const q=s=>{s=String(s);if(/^[=+@\t\r]/.test(s))s="'"+s;return/[",\n']/.test(s)?'"'+s.replace(/"/g,'""')+'"':s};return d.words.map(w=>[w.t,w.m,w.n].map(q).join(',').replace(/,$/,'')).join('\n')}

function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('show'),2300)}

const SAMPLE=[['abandon','見捨てる・断念する','abandon the plan 計画を断念する'],['accurate','正確な',''],['achieve','達成する','achieve a goal 目標を達成する'],['admire','称賛する・感心する',''],['available','利用できる・手が空いている',''],['avoid','避ける','avoid ~ing ～するのを避ける'],['benefit','利益・恩恵',''],['borrow','借りる','⇔ lend 貸す'],['challenge','挑戦・難題',''],['compare','比較する','compare A with B'],['consider','よく考える・みなす',''],['decide','決める',''],['describe','描写する・説明する',''],['efficient','効率的な',''],['encourage','励ます・促す','encourage 人 to do'],['environment','環境',''],['familiar','よく知っている・なじみのある','be familiar with ~'],['generous','気前のよい・寛大な',''],['improve','改善する・上達する',''],['include','含む',''],['opportunity','機会','a good opportunity to do'],['prefer','～の方を好む','prefer A to B'],['recognize','認識する・見分ける',''],['reduce','減らす',''],['require','必要とする',''],['suggest','提案する','suggest ~ing'],['valuable','価値のある・貴重な',''],['various','さまざまな','']];

/* ---------- actions ---------- */
let menuDeck=null;
const tgtDeck=()=>deckById(menuDeck)||cur();
const ACT={
  home(){go({name:'home'})},
  openDeck(el){prefs.lastDeck=el.dataset.id;savePrefs();go({name:'deck',id:el.dataset.id,filter:'all',q:''})},
  newDeck(){openDeckForm(null)},
  newItem(){openModal(`${mh('新規作成')}<div class="menu big"><button data-act="newDeck"><span class="mi">${ICON.cards}</span><span>新しい単語帳<small>単語を登録して学習する</small></span></button><button data-act="newFolder"><span class="mi" ${miStyle('#8B5CF6')}>${ICON.folder}</span><span>新しいファイル<small>同じ種類の単語帳をまとめる</small></span></button></div>`)},
  newFolder(){openFolderForm(null)},
  newDeckHere(){openDeckForm(null,view.name==='folder'?view.id:null)},
  openFolder(el){go({name:'folder',id:el.dataset.id})},
  deckBack(){const f=deckFolder(cur());go(f?{name:'folder',id:f}:{name:'home'})},
  folderMenu(el){const f=folderById(el.dataset.id);if(!f)return;openModal(`${mh(esc(f.name))}<div class="menu"><button data-act="renameFolder" data-id="${f.id}">${ICON.edit}名前・カラーを変更</button><button data-act="addToFolder" data-id="${f.id}">${ICON.move}単語帳をここに移動</button><button class="danger" data-act="delFolder" data-id="${f.id}">${ICON.trash}ファイルを削除</button></div>`)},
  renameFolder(el){openFolderForm(el.dataset.id)},
  addToFolder(el){openAddToFolder(el.dataset.id)},
  delFolder(el){const f=folderById(el.dataset.id);if(!f)return;const n=decksIn(f.id).length;
    confirmDlg('ファイルを削除',`「${esc(f.name)}」を削除します。${n?`中の単語帳${n}冊は削除されず、ホームに移動します。`:''}`,'削除',()=>{decksIn(f.id).forEach(d=>{d.folder=null;saveDeck(d)});S.folders=S.folders.filter(x=>x.id!==f.id);saveFolders();if(view.name==='folder'&&view.id===f.id)go({name:'home'});else render();toast('ファイルを削除しました')})},
  moveDeck(){openMoveDeck(menuDeck)},
  moveTo(el){const d=deckById(el.dataset.id);if(!d)return;const fid=el.dataset.f||null;d.folder=fid;saveDeck(d);closeModal();render();toast(fid?`「${folderById(fid).name}」に移動しました`:'ホームに移動しました')},
  newFolderMove(el){openFolderForm(null,el.dataset.id)},
  moveHere(el){const d=deckById(el.dataset.id);if(!d)return;d.folder=el.dataset.f;saveDeck(d);render();openAddToFolder(el.dataset.f);toast(`「${d.name}」を移動しました`)},
  sample(){const d={id:'d'+rid(),name:'サンプル：基本英単語',color:COLORS[0],createdAt:Date.now(),updatedAt:0,words:SAMPLE.map(([t,m,n])=>cleanWord({id:'w'+rid(),t,m,n}))};S.decks.push(d);saveDeck(d);go({name:'deck',id:d.id,filter:'all',q:''})},
  deckMenu(el){menuDeck=(el&&el.dataset.id)||view.id;const d=deckById(menuDeck);if(!d)return;openModal(`${mh(esc(d.name))}<div class="menu"><button data-act="renameDeck">${ICON.edit}名前・カラーを変更</button><button data-act="moveDeck">${ICON.move}ファイルに移動</button><button data-act="copyCsv">${ICON.copy}単語をCSVでコピー</button><button data-act="resetStats">${ICON.reset}学習記録をリセット</button><button class="danger" data-act="delDeck">${ICON.trash}単語帳を削除</button></div>`)},
  renameDeck(){openDeckForm(menuDeck||view.id)},
  copyCsv(){const d=tgtDeck(),txt=csvOf(d);if(!d.words.length){toast('単語がありません');return}
    const fallback=()=>{openModal(`${mh('CSV')}<p class="muted">下のテキストを選択してコピーしてください。</p><textarea class="copy" readonly>${esc(txt)}</textarea>`)};
    try{navigator.clipboard.writeText(txt).then(()=>{closeModal();toast(d.words.length+'語をコピーしました')},fallback)}catch(e){fallback()}},
  resetStats(){const d=tgtDeck();confirmDlg('学習記録をリセット','「覚えた」と正解・不正解の回数をすべて消去します。単語は残ります。','リセット',()=>{d.words.forEach(w=>{w.mas=false;w.c=0;w.w=0});saveDeck(d);render();toast('リセットしました')})},
  delDeck(){const d=tgtDeck();confirmDlg('単語帳を削除',`「${esc(d.name)}」と${d.words.length}語を削除します。元に戻せません。`,'削除',()=>{d.words.forEach(w=>{delAsset(w.ti);delAsset(w.mi)});S.decks=S.decks.filter(x=>x.id!==d.id);saveLocal();queue(d.id);afterDeckGone(d);toast('削除しました')})},
  red(){prefs.red=!prefs.red;savePrefs();render()},
  filter(el){const f=el.dataset.f;if(f==='rand'){const again=view.filter==='rand';view.shuf=shuffle(cur().words.map(w=>w.id));if(again)toast('シャッフルしました')}else view.shuf=null;view.filter=f;render()},
  reveal(el,e){if(!prefs.red){ACT.editWord(el.closest('.word'));return}el.closest('.word').classList.toggle('rv')},
  editWord(el){openWordModal(el.dataset.id)},
  addWord(){openWordModal(null)},
  star(el){const d=cur(),w=d.words.find(x=>x.id===el.dataset.id);if(!w)return;w.star=!w.star;saveDeck(d);if(view.filter==='star')render();else{el.classList.toggle('on',w.star);const ch=document.querySelector('.chip[data-f="star"] i');if(ch)ch.textContent=d.words.filter(x=>x.star).length}},
  toggleMas(el){const d=deckById(sess.deckId),w=curWord();if(!d||!w)return;w.mas=!w.mas;saveDeck(d);el.classList.toggle('on',w.mas);el.setAttribute('aria-pressed',String(w.mas));const s=el.querySelector('span');if(s)s.textContent=w.mas?'覚えた':'覚えていない'},
  starCur(el){const d=deckById(sess.deckId),w=curWord();if(!w)return;w.star=!w.star;saveDeck(d);el.classList.toggle('on',w.star);toast(w.star?'チェックしました':'チェックを外しました')},
  delWord(el){const d=cur(),id=el.dataset.id;confirmDlg('単語を削除','この単語を削除しますか？','削除',()=>{const w=d.words.find(x=>x.id===id);if(w){delAsset(w.ti);delAsset(w.mi)}wf=null;d.words=d.words.filter(w=>w.id!==id);saveDeck(d);render()})},
  bulk(){openBulk()},
  setup(){openSetup()},
  startCard(){startCard()},
  noop(){},
  cardPrev(){cardGo(-1)},
  cardNext(){cardGo(1)},
  swapDir(){sess.dir=sess.dir==='tm'?'mt':'tm';prefs.cardDir=sess.dir;savePrefs();sess.flipped=false;render();toast(sess.dir==='tm'?'表を先に表示します':'裏を先に表示します')},
  seg(el){prefs[el.dataset.key]=el.dataset.val;savePrefs();if(el.dataset.key==='tmode'){const f=$('#dirfld');if(f)f.style.display=prefs.tmode==='type'?'none':''}el.parentNode.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b===el));updStart()},
  start(){const mode=prefs.tmode,d=cur();if(mode==='quiz'&&d.words.length<2){toast('4択テストには2語以上必要です');return}const p=poolFor(d);if(!p.length)return;closeModal();startSession(mode,p.map(w=>w.id))},
  quit(){clearTimeout(sess.timer);try{speechSynthesis.cancel()}catch(e){}if(sess.mode!=='card'&&sess.res.length)go({name:'result',id:sess.deckId});else go(sess.back)},
  speak(){const w=curWord();if(!w)return;let t='';
    if(sess&&sess.mode==='card'){const termSide=(sess.dir==='tm')!==!!sess.flipped;t=termSide?speechOf(w.t,w.tt):speechOf(w.m,w.mt)}
    else if(sess&&sess.mode==='quiz'){t=sess.dir==='tm'?speechOf(w.t,w.tt):speechOf(w.m,w.mt)}
    else t=w.t;
    if(!t){toast('読み上げる文字がありません');return}speak(t)},
  pick(el){pick(+el.dataset.i)},
  next(){nextQ()},
  giveup(){answerType(null)},
  hint(){sess.hint=true;render()},
  retryWrong(){const ids=[...new Set(sess.res.filter(r=>!r.ok).map(r=>r.id))];view={name:'deck',id:sess.deckId};startSession(sess.mode,prefs.order==='rand'?shuffle(ids):ids)},
  retryAll(){const ids=sess.res.map(r=>r.id);const u=[...new Set(ids)];view={name:'deck',id:sess.deckId};startSession(sess.mode,prefs.order==='rand'?shuffle(u):u)},
  backDeck(){go(Object.assign({},sess.back,{name:'deck',id:sess.deckId}))},
  closeModal(){modalCb=null;wf=null;closeModal()},
  settings(){refreshNativePerm().then(()=>{const n=$('#remindNote');if(n)n.innerHTML=remindNote()});openSettings()},
  exportBackup(){exportBackup()},
  align(el){prefs.align=el.dataset.val;savePrefs();applyTheme();el.parentNode.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b===el))},
  theme(el){prefs.theme=el.dataset.val;savePrefs();applyTheme();el.parentNode.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b===el))},
  testSound(){playSfx(true,true);setTimeout(()=>speak('Hello'),450)},
  resume(){const d=deckById(prefs.lastDeck)||S.decks[0];if(d)go({name:'deck',id:d.id,filter:'all',q:''})},
  addTable(el){const s=el.dataset.side;if(!wf||!wf[s])return;wf[s].table=cleanTable({r:3,c:2,cells:[],th:{h:1,v:0}});refreshTb(s);const f=document.querySelector(`.tbcell[data-side="${s}"]`);if(f)f.focus()},
  tbStep(el){const s=el.dataset.side,t=wf&&wf[s]&&wf[s].table;if(!t)return;const d=+el.dataset.d;let r=t.r,c=t.c;if(el.dataset.k==='r')r=Math.max(1,Math.min(TMAX_R,r+d));else c=Math.max(1,Math.min(TMAX_C,c+d));wf[s].table=resizeTbl(t,r,c);refreshTb(s)},
  rmTable(el){const s=el.dataset.side;if(!wf||!wf[s])return;wf[s].table=null;refreshTb(s)},
  rmPhoto(el){const s=wf&&wf[el.dataset.side];if(!s)return;if(s.pending&&s.pending.blob)URL.revokeObjectURL(s.pending.preview);s.pending=null;s.removed=true;refreshPh(el.dataset.side)},
  confirmOk(){const cb=modalCb;modalCb=null;closeModal();if(cb)cb()}
};
document.addEventListener('focusin',e=>{if(e.target.classList&&e.target.classList.contains('copy'))e.target.select()});
// files dropped outside a photo slot must not replace the app page
document.addEventListener('dragover',e=>{if(!(e.target.closest&&e.target.closest('.phslot')))e.preventDefault()});
document.addEventListener('drop',e=>{if(!(e.target.closest&&e.target.closest('.phslot')))e.preventDefault()});
document.addEventListener('click',e=>{if(Date.now()-lastDragEnd<400){e.preventDefault();return}const el=e.target.closest('[data-act]');if(!el)return;const fn=Object.prototype.hasOwnProperty.call(ACT,el.dataset.act)?ACT[el.dataset.act]:null;if(fn){e.preventDefault();fn(el,e)}});
document.addEventListener('input',e=>{
  if(e.target.id==='q'){view.q=e.target.value;const d=cur();if(d)$('#wordlist').innerHTML=listHTML(d)}
  if(e.target.id==='bulktxt'){const n=parseLines(e.target.value).length;const b=$('#bulkbtn');if(b)b.textContent=n+'語を追加'}
});
document.addEventListener('submit',e=>{
  e.preventDefault();const f=e.target,fd=new FormData(f);
  if(f.id==='deckform'){const name=String(fd.get('name')||'').trim();if(!name)return;const color=String(fd.get('color')||COLORS[0]);
    const folder=fd.has('folder')?(String(fd.get('folder')||'')||null):(f.dataset.folder||null);
    if(f.dataset.id){const d=deckById(f.dataset.id);d.name=name;d.color=color;d.folder=folder;saveDeck(d);closeModal();render()}
    else{const d={id:'d'+rid(),name,color,createdAt:Date.now(),updatedAt:0,words:[],folder};S.decks.push(d);saveDeck(d);closeModal();prefs.lastDeck=d.id;savePrefs();go({name:'deck',id:d.id,filter:'all',q:''})}}
  else if(f.id==='folderform'){const name=String(fd.get('name')||'').trim();if(!name)return;const color=String(fd.get('color')||COLORS[0]);
    if(f.dataset.id){const x=folderById(f.dataset.id);if(x){x.name=name;x.color=color}saveFolders();closeModal();render()}
    else{const x={id:'f'+rid(),name,color,createdAt:Date.now()};S.folders.push(x);saveFolders();closeModal();
      const mv=pendingMove&&deckById(pendingMove);pendingMove=null;
      if(mv){mv.folder=x.id;saveDeck(mv);render();toast(`「${name}」を作って移動しました`)}else go({name:'folder',id:x.id})}}
  else if(f.id==='wordform'){saveWordForm(f,fd,e.submitter)}
  else if(f.id==='bulkform'){const items=parseLines(String(fd.get('txt')||''));if(!items.length){toast('認識できる行がありません');return}const d=cur();
    items.forEach(it=>d.words.push(cleanWord({id:'w'+rid(),...it})));saveDeck(d);closeModal();render();toast(items.length+'語を追加しました')}
  else if(f.id==='typeform'){const v=$('#ans').value;if(!v.trim())return;answerType(v)}
});
async function storePhoto(p){if(p.blob){const id='p'+rid();await idbSet('photos',id,p.blob);photoURL[id]=URL.createObjectURL(p.blob);return{p:id}}return{d:p.data}}
function delAsset(ref){if(!ref||!ref.p)return;const id=ref.p;setTimeout(()=>{try{if(S.decks.some(d=>d.words.some(w=>(w.ti&&w.ti.p===id)||(w.mi&&w.mi.p===id))))return;idbDel('photos',id).catch(()=>{});if(photoURL[id]){URL.revokeObjectURL(photoURL[id]);delete photoURL[id]}}catch(e){}},0)}
async function saveWordForm(f,fd,sub){
  if(!wf||wf.busy)return;const d=cur();if(!d)return;
  const nl=v=>String(v||'').replace(/\r\n?/g,'\n').replace(/[ \t]+\n/g,'\n').trim(),t=nl(fd.get('t')),m=nl(fd.get('m')),n=String(fd.get('n')||'').trim();
  const has=s=>!!(wf[s].pending||(!wf[s].removed&&wf[s].ref)||tblHas(wf[s].table));
  if(!(t||has('t'))||!(m||has('m'))){toast('表と裏に、それぞれ文字・写真・テーブルのどれかを入れてください');return}
  const cur0=wf;cur0.busy=true;const btns=[...f.querySelectorAll('button[type=submit]')],pb=f.querySelector('.btn.primary[type=submit]'),lbl=pb.textContent;
  btns.forEach(b=>b.disabled=true);if(cur0.t.pending||cur0.m.pending)pb.textContent='写真を保存中…';
  const refs={},old=[];
  try{for(const s of['t','m']){const x=cur0[s];
      if(x.pending){refs[s]=await storePhoto(x.pending);if(x.ref)old.push(x.ref)}
      else if(x.removed){refs[s]=null;if(x.ref)old.push(x.ref)}
      else refs[s]=x.ref||null}}
  catch(err){cur0.busy=false;btns.forEach(b=>b.disabled=false);pb.textContent=lbl;toast('写真を保存できませんでした。もう一度お試しください');return}
  if(f.dataset.id){const w=d.words.find(x=>x.id===f.dataset.id);if(w){w.t=t;w.m=m;w.n=n;w.mas=fd.get('mas')==='on';w.ti=refs.t;w.mi=refs.m;w.tt=trimTbl(cur0.t.table);w.mt=trimTbl(cur0.m.table)}saveDeck(d);old.forEach(delAsset);wf=null;closeModal();render();return}
  const dup=!!t&&d.words.some(w=>norm(w.t)===norm(t));d.words.push(cleanWord({id:'w'+rid(),t,m,n,ti:refs.t,mi:refs.m,tt:trimTbl(cur0.t.table),mt:trimTbl(cur0.m.table)}));saveDeck(d);render();
  if(sub&&sub.value==='1'&&wf===cur0){f.reset();setTimeout(growAll,0);wf={t:wfSide(null),m:wfSide(null),busy:false};refreshPh('t');refreshPh('m');refreshTb('t');refreshTb('m');btns.forEach(b=>b.disabled=false);pb.textContent=lbl;f.querySelector('[name=t]').focus();toast(dup?'追加しました（表が同じカードがすでにあります）':'追加しました')}
  else{wf=null;closeModal();if(dup)toast('表が同じカードがすでに登録されています')}
}
async function compressImg(file,max,q){
  const url=URL.createObjectURL(file);
  try{const img=await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=url});
    let w=img.naturalWidth,h=img.naturalHeight;if(!w||!h)throw new Error('size');const sc=Math.min(1,max/Math.max(w,h));w=Math.max(1,Math.round(w*sc));h=Math.max(1,Math.round(h*sc));
    const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,w,h);x.drawImage(img,0,0,w,h);
    {const blob=await new Promise(r=>c.toBlob(r,'image/jpeg',q));if(!blob)throw new Error('blob');return{blob,preview:URL.createObjectURL(blob)}}
    const data=c.toDataURL('image/jpeg',q);return{data,preview:data}}
  finally{URL.revokeObjectURL(url)}}
async function setPhoto(side,file){
  if(!wf||!wf[side])return;if(!file||!/^image\//.test(file.type)){toast('画像ファイルを選んでください');return}
  const target=wf;
  try{const out=await compressImg(file,1280,.82);
    if(wf!==target)return;const s=wf[side];if(s.pending&&s.pending.blob)URL.revokeObjectURL(s.pending.preview);s.pending=out;s.removed=false;refreshPh(side)}
  catch(e){toast('この画像は読み込めませんでした')}}
document.addEventListener('change',e=>{const inp=e.target;if(!inp.matches||!inp.matches('input[type=file][data-side]'))return;const file=inp.files&&inp.files[0];inp.value='';if(file)setPhoto(inp.dataset.side,file)});
document.addEventListener('paste',e=>{if(!wf||!$('#wordform'))return;const items=[...((e.clipboardData&&e.clipboardData.items)||[])];const it=items.find(x=>x.kind==='file'&&/^image\//.test(x.type));if(!it)return;
  e.preventDefault();const a=document.activeElement;const side=a&&(a.name==='m'||(a.closest&&a.closest('#ph-m')))?'m':'t';setPhoto(side,it.getAsFile());toast(side==='m'?'裏に写真を貼り付けました':'表に写真を貼り付けました')});
document.addEventListener('dragover',e=>{const s=e.target.closest&&e.target.closest('.phslot');if(!s)return;e.preventDefault();document.querySelectorAll('.phslot.over').forEach(x=>x!==s&&x.classList.remove('over'));s.classList.add('over')});
document.addEventListener('dragleave',e=>{const s=e.target.closest&&e.target.closest('.phslot');if(s&&!s.contains(e.relatedTarget))s.classList.remove('over')});
document.addEventListener('drop',e=>{const s=e.target.closest&&e.target.closest('.phslot');if(!s)return;e.preventDefault();s.classList.remove('over');const file=e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0];if(file)setPhoto(s.dataset.side,file)});
document.addEventListener('keydown',e=>{
  if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('[role=button][data-act]')){e.preventDefault();e.target.click();return}
  const m=$('#modal');if(m.classList.contains('open')){if(e.key==='Escape')ACT.closeModal();return}
  if(view.name!=='study'||!sess)return;
  const tag=e.target.tagName;if(tag==='BUTTON'&&(e.key==='Enter'||e.key===' '))return;
  if(e.key==='Escape'){ACT.quit();return}
  if(sess.mode==='card'){if(e.key===' '||e.key==='Enter'){e.preventDefault();flip()}else if(e.key==='ArrowRight')cardGo(1,true);else if(e.key==='ArrowLeft')cardGo(-1,true);else if(e.key==='m'||e.key==='M'){const b=document.querySelector('.tools .mast');if(b)ACT.toggleMas(b)}}
  else if(sess.mode==='quiz'){if(/^[1-4]$/.test(e.key))pick(+e.key-1);else if(e.key==='Enter'&&sess.picked!=null)nextQ()}
  else if(sess.mode==='type'){if(e.key==='Enter'&&sess.typed&&tag!=='INPUT'){e.preventDefault();nextQ()}}
});

/* ---------- drag to reorder ---------- */
let drag=null,pend=null,lastDragEnd=0;
function startDrag(li,y){const ul=li.parentNode;if(!ul||(ul.id!=='wl'&&!ul.dataset.sort))return;const r=li.getBoundingClientRect();
  drag={li,ul,off:y-r.top,y,raf:0};li.classList.add('dragging');ul.classList.add('sorting');document.body.classList.add('sorting');
  try{navigator.vibrate&&navigator.vibrate(12)}catch(e){}
  layoutDrag();const tick=()=>{if(!drag)return;const t=drag.y,H=innerHeight;let v=0;if(t<90)v=-Math.min(14,(90-t)/5);else if(t>H-120)v=Math.min(14,(t-(H-120))/5);if(v){scrollBy(0,v);layoutDrag()}drag.raf=requestAnimationFrame(tick)};drag.raf=requestAnimationFrame(tick)}
function layoutDrag(){const{li,ul}=drag,ut=ul.getBoundingClientRect().top,h=li.offsetHeight,vt=drag.y-drag.off,vc=vt+h/2;
  for(let g=0;g<200;g++){const pv=li.previousElementSibling,nx=li.nextElementSibling;
    if(pv&&vc<ut+pv.offsetTop+pv.offsetHeight/2){flipSwap(pv,()=>ul.insertBefore(li,pv));continue}
    if(nx&&vc>ut+nx.offsetTop+nx.offsetHeight/2){flipSwap(nx,()=>ul.insertBefore(nx,li));continue}
    break}
  li.style.transform=`translateY(${vt-(ut+li.offsetTop)}px) scale(1.02)`}
function flipSwap(el,fn){const b=el.offsetTop;fn();const a=el.offsetTop;el.style.transition='none';el.style.transform=`translateY(${b-a}px)`;void el.offsetWidth;el.style.transition='transform .18s ease';el.style.transform=''}
function endDrag(){const{li,ul}=drag;cancelAnimationFrame(drag.raf);drag=null;lastDragEnd=Date.now();
  li.style.transition='transform .15s';li.style.transform='';setTimeout(()=>{li.style.transition='';li.classList.remove('dragging');ul.classList.remove('sorting')},150);document.body.classList.remove('sorting');
  const ids=[...ul.children].map(x=>x.dataset.id).filter(Boolean),set=new Set(ids);
  if(ul.dataset.sort==='folders'){const nf=ids.map(id=>folderById(id)).filter(Boolean).concat(S.folders.filter(f=>!set.has(f.id)));if(nf.some((f,i)=>f!==S.folders[i])){S.folders=nf;saveFolders()}return}
  if(ul.dataset.sort==='decks'){const slots=[];S.decks.forEach((d,i)=>{if(set.has(d.id))slots.push(i)});const byId=new Map(S.decks.map(d=>[d.id,d])),nd=S.decks.slice();slots.forEach((s,k)=>{nd[s]=byId.get(ids[k])});
    if(nd.some((d,i)=>d!==S.decks[i])){S.decks=nd;S.decks.forEach((d,i)=>{if(d.ord!==i){d.ord=i;saveDeck(d)}})}return}
  const d=cur();if(!d)return;const slots=[];
  d.words.forEach((w,i)=>{if(set.has(w.id))slots.push(i)});const byId=new Map(d.words.map(w=>[w.id,w])),nw=d.words.slice();
  slots.forEach((s,k)=>{nw[s]=byId.get(ids[k])});if(nw.some((w,i)=>w!==d.words[i])){d.words=nw;saveDeck(d)}}
const rowAt=t=>{if(!t||!t.closest)return null;if(t.closest('.star,.more'))return null;
  if(view.name==='deck'&&view.filter!=='rand')return t.closest('#wl > .word');
  if(view.name==='home'||view.name==='folder'){const c=t.closest('.decks[data-sort] > .deck');return c&&c.parentNode.children.length>1?c:null}
  return null};
/* mouse / pen */
document.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'||e.button!==0)return;const li=rowAt(e.target);if(!li)return;
  if(e.target.closest('.grip')){e.preventDefault();startDrag(li,e.clientY);return}pend={li,x:e.clientX,y:e.clientY}});
document.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;if(drag){e.preventDefault();drag.y=e.clientY;layoutDrag();return}
  if(pend&&Math.hypot(e.clientX-pend.x,e.clientY-pend.y)>6){const p=pend;pend=null;startDrag(p.li,p.y);drag.y=e.clientY;layoutDrag()}});
document.addEventListener('pointerup',e=>{if(e.pointerType==='touch')return;pend=null;if(drag)endDrag()});
/* touch: grip = immediate, row = long press */
document.addEventListener('touchstart',e=>{if(e.touches.length!==1)return;const li=rowAt(e.target);if(!li)return;const t=e.touches[0];
  if(e.target.closest('.grip')){startDrag(li,t.clientY);return}
  pend={li,x:t.clientX,y:t.clientY,timer:setTimeout(()=>{if(pend){const p=pend;pend=null;startDrag(p.li,p.y)}},380)}},{passive:true});
document.addEventListener('touchmove',e=>{const t=e.touches[0];if(drag){e.preventDefault();drag.y=t.clientY;layoutDrag();return}
  if(pend&&Math.hypot(t.clientX-pend.x,t.clientY-pend.y)>10){clearTimeout(pend.timer);pend=null}},{passive:false});
const tEnd=()=>{if(pend){clearTimeout(pend.timer);pend=null}if(drag)endDrag()};
document.addEventListener('touchend',tEnd);document.addEventListener('touchcancel',tEnd);
document.addEventListener('contextmenu',e=>{if(drag||rowAt(e.target))e.preventDefault()});

/* ---------- Android back button ---------- */
if(NATIVE&&P.App){
  P.App.addListener('backButton',()=>{
    if($('#modal').classList.contains('open')){ACT.closeModal();return}
    if(view.name==='study'){ACT.quit();return}
    if(view.name==='result'){ACT.backDeck();return}
    if(view.name==='deck'){ACT.deckBack();return}
    if(view.name==='folder'){go({name:'home'});return}
    P.App.exitApp()});
  P.App.addListener('resume',()=>{nativeRemind();if(view.name==='home')render()});
}
/* ---------- boot ---------- */
(async function boot(){
  app.innerHTML='';
  try{let s=await idbGet('kv','state');
    if(!s){const old=lsGet(LS);if(old){s=old}}
    loadState(s);
    const keys=await idbKeys('photos');
    for(const k of keys){const b=await idbGet('photos',k);if(b)photoURL[k]=URL.createObjectURL(b)}
  }catch(e){const old=lsGet(LS);if(old)loadState(old);toast('保存領域を開けませんでした')}
  booted=true;
  try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist()}catch(e){}
  await refreshNativePerm();
  render();scheduleRemind();
  if(!NATIVE&&'serviceWorker' in navigator&&(location.protocol==='https:'||/^(localhost|127\.0\.0\.1)$/.test(location.hostname))){
    const hadController=!!navigator.serviceWorker.controller;
    navigator.serviceWorker.register('sw.js').then(reg=>{reg.addEventListener('updatefound',()=>{const nw=reg.installing;if(!nw)return;nw.addEventListener('statechange',()=>{if(nw.state==='activated'&&hadController)toast('新しいバージョンに更新しました。次に開いたときに反映されます')})})}).catch(()=>{})}
})();
