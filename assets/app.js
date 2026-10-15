(function(){
const V=window.BD_VARIANTS,CORE=window.BD_CORE,$=s=>document.querySelector(s);
const params=new URLSearchParams(location.search);
let key=params.get('v')||document.body.dataset.variant||'hindu'; if(!V[key])key='hindu';
const sel=$('#variant'),form=$('#bdform'),sheet=$('#sheet'),st=$('#status');
const langSel=$('#lang'),invSel=$('#invChoice');
Object.entries(window.BD_LANGS).forEach(([k,n])=>{const o=document.createElement('option');o.value=k;o.textContent=n;langSel.appendChild(o)});
window.BD_SOON.forEach(n=>{const o=document.createElement('option');o.disabled=true;o.textContent=n+' – coming soon';langSel.appendChild(o)});
const T=()=>({});
const lbl=(f)=>{const t=T(),loc=(f[2]||{})[langSel.value];return loc?loc:f[1]};
Object.keys(V).forEach(k=>{const o=document.createElement('option');o.value=k;o.textContent=V[k].name;sel.appendChild(o)});
let photo=null;
function field(id,label,val){const ta=/about|expect/.test(id);const w=document.createElement('div');
 w.innerHTML=`<label for="f_${id}">${label}</label>`+(ta?`<textarea id="f_${id}" name="${id}"></textarea>`:`<input id="f_${id}" name="${id}" ${id==='dob'?'type="date"':''}>`);
 w.querySelector('input,textarea').value=val||'';return w}
function build(k){key=k;sel.value=k;const v=V[k],s=Object.assign({},window.BD_SAMPLE_COMMON,v.sample);
 const box=$('#fields');box.innerHTML='';
 const fs1=document.createElement('fieldset');fs1.innerHTML='<legend>Personal &amp; family</legend>';CORE.forEach(([i,l])=>fs1.appendChild(field(i,l,s[i])));
 const fs2=document.createElement('fieldset');fs2.innerHTML=`<legend>${v.name} details</legend>`;v.fields.forEach(f=>fs2.appendChild(field('x_'+f[0],f[1]+(f[3]?' (horoscope)':''),s[f[0]])));
 box.append(fs2,fs1);$('#invOn').checked=v.invOn;$('#invNote').textContent=v.invNote||'';const hasH=v.fields.some(f=>f[3]);$('#horoOn').checked=hasH;$('#horoRow').hidden=!hasH;
 invSel.innerHTML='';(v.invOpts||[v.inv]).filter(Boolean).forEach(x=>{const o=document.createElement('option');o.textContent=x;invSel.appendChild(o)});$('#invWrap').hidden=!v.inv;
 langSel.value='en';render()}
function data(){const d={};new FormData(form).forEach((val,k)=>d[k]=String(val).trim());return d}
function esc(t){return String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function fmtDob(x){if(!/^\d{4}-\d\d-\d\d$/.test(x))return x;const[y,m,d]=x.split('-');return `${+d} ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][m-1]} ${y}`}
function sections(){const d=data(),v=V[key],L=Object.fromEntries(CORE),hideIncome=!$('#incomeOn').checked,hideEmp=!$('#empOn').checked,horo=$('#horoOn').checked;
 const t=T();const row=(id,l)=>{let val=d[id];if(!val)return null;if(id==='dob')val=fmtDob(val);return[l,val]};
 const pick=ids=>ids.map(i=>row(i,t[i]||L[i])).filter(Boolean);
 const vf=v.fields.filter(f=>horo||!f[3]).map(f=>row('x_'+f[0],lbl(f))).filter(Boolean);
 const S=(k,en)=>t['S_'+k]||en;const out=[[S('personal',"Personal details"),pick(['dob','height','city','diet','hobbies'])],
  [t.S_variant||(v.name+" details"),vf],
  [S('career',"Education & career"),pick(['edu','job'].concat(hideEmp?[]:['employer']).concat(hideIncome?[]:['income']))],
  [S("family","Family"),pick(['father','mother','siblings'])],[S("about","About me"),d.about?[["",d.about]]:[]],[S("expect","Partner expectations"),d.expect?[["",d.expect]]:[]],[S("contact","Contact"),pick(['contact','phone'])]];
 return{d,v,out:out.filter(s=>s[1].length)}}
function render(){const{d,v,out}=sections();sheet.className='t-'+v.theme;sheet.lang=langSel.value;const title=T().title||'Marriage Biodata';
 let h='<div class="frame"></div>';if($('#invOn').checked&&invSel.value)h+=`<p class="inv">${esc(invSel.value)}</p>`;
 if(photo&&$('#photoOn').checked)h+=`<img class="photo" src="${photo}" alt="Photo of ${esc(d.name||'candidate')}">`;
 h+=`<h2>${esc(d.name||'Your name')}</h2><p class="sub">${esc(title)}</p>`;
 out.forEach(([t,rows])=>{h+=`<h3>${esc(t)}</h3><table>`+rows.map(([l,val])=>l?`<tr><td>${esc(l)}</td><td>${esc(val)}</td></tr>`:`<tr><td colspan="2" style="width:auto;color:#222">${esc(val)}</td></tr>`).join('')+'</table>'});
 h+='<div class="clear"></div><p class="foot">Made free at saemali.github.io/biodata · Get it written for you from ₹299</p>';sheet.innerHTML=h}
const libs={};function load(src){return libs[src]||(libs[src]=new Promise((ok,no)=>{const s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=()=>no(new Error('load '+src));document.head.appendChild(s)}))}
const base=document.querySelector('script[src$="app.js"]').src.replace(/app\.js.*$/,'');
async function canvas(scale){await load(base+'vendor/html2canvas.min.js');return html2canvas(sheet,{scale,backgroundColor:'#fff',useCORS:true,windowWidth:900})}
function save(blob,name){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1500)}
const fname=()=>((data().name||'biodata').replace(/[^\w]+/g,'-').replace(/^-|-$/g,'')||'biodata');
async function pdf(){await load(base+'vendor/jspdf.umd.min.js');let q=.85,blob;
 const c=await canvas(2);for(;;){const doc=new jspdf.jsPDF({unit:'mm',format:'a4',compress:true});doc.addImage(c.toDataURL('image/jpeg',q),'JPEG',0,0,210,297*Math.min(1,c.height/(c.width*297/210)));blob=doc.output('blob');if(blob.size<1.9e6||q<.4)break;q-=.15}
 window.BD_LAST={type:'pdf',size:blob.size};save(blob,fname()+'.pdf');return blob}
async function png(){const c=await canvas(1080/794);const o=document.createElement('canvas');o.width=1080;o.height=1920;const x=o.getContext('2d');x.fillStyle=getComputedStyle(sheet).getPropertyValue('--tp')||'#7a1f2b';x.fillRect(0,0,1080,1920);
 const h=Math.min(1920-120,c.height*1080/c.width*0.92),w=h*c.width/c.height;x.drawImage(c,(1080-w)/2,(1920-h)/2,w,h);
 const blob=await new Promise(r=>o.toBlob(r,'image/png'));window.BD_LAST={type:'png',size:blob.size,w:1080,h:1920};save(blob,fname()+'.png');return blob}
async function docx(){await load(base+'vendor/docx.umd.js');const D=window.docx,{d,v,out}=sections();const kids=[];
 if($('#invOn').checked&&invSel.value)kids.push(new D.Paragraph({alignment:D.AlignmentType.CENTER,children:[new D.TextRun({text:invSel.value,size:28})]}));
 kids.push(new D.Paragraph({heading:D.HeadingLevel.TITLE,alignment:D.AlignmentType.CENTER,children:[new D.TextRun(d.name||'Your name')]}),new D.Paragraph({alignment:D.AlignmentType.CENTER,children:[new D.TextRun({text:T().title||'Marriage Biodata',italics:true})]}));
 out.forEach(([t,rows])=>{kids.push(new D.Paragraph({heading:D.HeadingLevel.HEADING_2,children:[new D.TextRun(t)]}));
  if(rows.length===1&&!rows[0][0])kids.push(new D.Paragraph(rows[0][1]));
  else kids.push(new D.Table({width:{size:100,type:D.WidthType.PERCENTAGE},rows:rows.map(([l,val])=>new D.TableRow({children:[new D.TableCell({width:{size:38,type:D.WidthType.PERCENTAGE},children:[new D.Paragraph({children:[new D.TextRun({text:l,bold:true})]})]}),new D.TableCell({children:[new D.Paragraph(val)]})]}))}))});
 const doc=new D.Document({sections:[{properties:{page:{size:{width:11906,height:16838}}},children:kids}]});const blob=await D.Packer.toBlob(doc);window.BD_LAST={type:'docx',size:blob.size};save(blob,fname()+'.docx');return blob}
async function run(fn,label){st.textContent='Preparing '+label+'…';try{const b=await fn();st.textContent=`${label} ready (${(b.size/1024).toFixed(0)} KB). Check your downloads.`}catch(e){st.textContent='Sorry, '+label+' export failed: '+e.message}}
window.BD={pdf,png,docx};
$('#pdfBtn').onclick=()=>run(pdf,'PDF');$('#pngBtn').onclick=()=>run(png,'PNG');$('#docxBtn').onclick=()=>run(docx,'Word file');
$('#printBtn').onclick=()=>print();
sel.onchange=()=>build(sel.value);form.addEventListener('input',render);form.addEventListener('change',render);
$('#photo').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{photo=r.result;render()};r.readAsDataURL(f)};
$('#clearBtn').onclick=()=>{form.querySelectorAll('#fields input,#fields textarea').forEach(i=>i.value='');photo=null;$('#photo').value='';render()};
build(key);
})();
