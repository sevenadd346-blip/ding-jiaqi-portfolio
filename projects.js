const projects = [
 {id:'gears',title:'齿轮之上',en:'ABOVE THE GEARS',category:'三维设计',cover:'image9.webp',meta:'Maya / Substance 3D Painter / Arnold',intro:'蒸汽、轨道与悬浮机械，构成一座仍在运作的架空城市。',description:'以蒸汽动力为核心，借鉴工业革命时期的拱券建筑与机械结构，让厚重的金属、复杂的齿轮和漂浮的机械体共同建立空间秩序。画面里没有明确的人物，灯光与机器的运行留下了人曾在此活动的线索。',role:'场景构思、三维建模、材质绘制与渲染',images:['image5.webp','image8.webp','image11.webp','image10.webp'],video:1},
 {id:'posthuman',title:'后人类样本',en:'POSTHUMAN SPECIMEN',category:'三维设计',cover:'image14.webp',meta:'Maya / Substance 3D Painter / Arnold',intro:'以机械心脏为起点，讨论身体与自我意识的边界。',description:'实验舱、透明的人体与漂浮的机械器官，组成介于生命与机器之间的未来空间。作品围绕“机械飞升”展开：当身体可以被替换，意识可以被保存，情感、记忆与身份将如何延续？',role:'概念设计、三维建模、材质与影像渲染',images:['image12.webp','image15.webp','image16.webp'],video:2},
 {id:'guilin',label:'装置设计',title:'桂林艺术节',en:'PUBLIC ART & GRAPHIC DESIGN',category:'平面设计',cover:'image23.webp',meta:'公共艺术 / 展板设计 / 空间视觉',intro:'让戏剧人物、山水色彩与公共空间产生互动。',description:'参与艺术节的展板与艺术装置设计，以山水意象、渐变色彩及几何模块组织公共空间。互动合影展板则以戏剧人物为视觉核心，让观众自然进入画面，成为作品的一部分。',role:'展板版式、装置视觉方案与现场呈现',images:['image23.webp','image24.webp','image25.webp','image26.webp','image27.webp','image28.webp','image29.webp']},
 {id:'greek',label:'封面设计',title:'古希腊戏剧学术研讨会',en:'CONFERENCE VISUAL IDENTITY',category:'平面设计',cover:'image30.webp',meta:'主海报 / 议程手册 / 视觉系统',intro:'将戏剧的历史意象，带入当代学术活动的视觉表达。',description:'为中央戏剧学院“古希腊戏剧在中国：文本译介及舞台实践现状与未来”学术研讨会设计主海报与议程手册封面。以蓝灰色调、戏剧人物影像和清晰的信息层级，建立统一的视觉形象。',role:'会议主海报与议程手册封面设计',images:['image30.webp','image31.webp']},
 {id:'macau',label:'封面设计',title:'澳门旅博会 · 旅行护照',en:'MACAO / PASSPORT COVER',category:'平面设计',cover:'image33.webp',meta:'文创设计 / 线性插画 / AI 辅助',intro:'以复古护照为载体，把城市地标与旅行记忆收入封面。',description:'围绕“旅行与城市连接”展开视觉设计，以金色线条描绘城市地标、交通工具与旅客，结合复古证件版式与流动色带。负责整体视觉概念、色彩搭配、版式构成与图形细节优化，并借助 AI 探索视觉方案。',role:'封面视觉概念、版式与图形设计',images:['image33.webp','image32.webp']},
];
const grid=document.querySelector('#projects');
const chapters=[['三维设计','three-d','01','3d'],['平面设计','graphic','03','Graphic']];
grid.innerHTML=chapters.map(([category,id,number,en])=>`<section class="chapter" id="${id}"><div class="chapter-title"><span class="chapter-number">${number}.</span><h2>${category}<span>${en}</span></h2></div><div class="chapter-projects">${projects.filter(p=>p.category===category).map(p=>`<button class="project ${p.category==='平面设计'?'graphic':''}" data-project="${p.id}" aria-label="查看${p.title}项目"><div class="project-picture"><img data-lazy-src="assets/${p.cover}" alt="${p.title}" fetchpriority="low"><span class="view-project">查看项目 ↗</span>${p.video?'<span class="video-mark">▶ 影像作品</span>':''}</div><div class="project-info"><h3>${p.title}</h3><span>${p.label||p.category}</span></div><p>${p.intro}</p>${p.id==='guilin'?'<span class="gallery-card-link">查看全部 7 张作品图 ↗</span>':''}</button>`).join('')}</div></section>`).join('');
document.querySelector('#three-d-slot').replaceWith(document.querySelector('#three-d'));
const dialog=document.querySelector('#project-dialog');

const imageSizes={"image1.webp": [1920, 1080], "image10.webp": [1920, 1440], "image11.webp": [1920, 1080], "image12.webp": [1920, 1080], "image13.webp": [1920, 1080], "image14.webp": [1920, 1080], "image15.webp": [1920, 1080], "image16.webp": [1920, 1080], "image17.webp": [1920, 1080], "image18.webp": [1920, 1079], "image19.webp": [1702, 1276], "image2.webp": [1280, 1920], "image20.webp": [1920, 1080], "image21.webp": [1920, 1440], "image22.webp": [1920, 1080], "image23.webp": [1080, 1440], "image24.webp": [640, 1920], "image25.webp": [1344, 1920], "image26.webp": [1920, 1920], "image27.webp": [1440, 1080], "image28.webp": [1920, 1680], "image29.webp": [1920, 1914], "image3.webp": [1440, 1920], "image30.webp": [1371, 1920], "image31.webp": [1080, 1440], "image32.webp": [438, 613], "image33.webp": [1537, 770], "image34.webp": [1920, 1080], "image35.webp": [1920, 1200], "image36.webp": [1920, 1080], "image4.webp": [1920, 1080], "image5.webp": [1920, 1080], "image6.webp": [1920, 1080], "image7.webp": [1411, 1920], "image8.webp": [1920, 1080], "image9.webp": [1920, 1080], "pandora.webp": [1334, 750]};
function renderGallery(p){
 if(!p.images.length)return '';
 return `<div class="gallery-heading"><span>作品图集</span><span>共 ${p.images.length} 张 · 点击放大</span></div><div class="detail-gallery ${p.id==='gears'?'detail-gallery-balanced':''}">${p.images.map((s,i)=>`<figure><button type="button" class="gallery-open" data-image="assets/${s}" data-caption="${p.title} · ${i+1} / ${p.images.length}" aria-label="放大${p.title}图片${i+1}"><img data-lazy-src="assets/${s}" alt="${p.title}作品细节 ${i+1}" width="${imageSizes[s][0]}" height="${imageSizes[s][1]}" fetchpriority="low" decoding="async" draggable="false"></button></figure>`).join('')}</div>`;
}
const imageViewer=document.createElement('dialog');
imageViewer.className='image-viewer';imageViewer.setAttribute('aria-label','作品大图');
imageViewer.innerHTML='<button type="button" class="close-image" aria-label="关闭大图">关闭 ×</button><img alt="" draggable="false"><p></p>';
document.body.append(imageViewer);
document.addEventListener('click',event=>{const trigger=event.target.closest('.gallery-open');if(!trigger)return;const img=imageViewer.querySelector('img');img.src=trigger.dataset.image;img.alt=trigger.dataset.caption;imageViewer.querySelector('p').textContent=trigger.dataset.caption;imageViewer.showModal();});
imageViewer.querySelector('button').addEventListener('click',()=>imageViewer.close());
imageViewer.addEventListener('click',event=>{if(event.target===imageViewer)imageViewer.close();});
document.addEventListener('contextmenu',event=>{if(event.target.closest('img,video,.project-picture,.game-image,.detail-gallery,.image-viewer'))event.preventDefault();});
document.addEventListener('dragstart',event=>{if(event.target.closest('img,video'))event.preventDefault();});

let opener=null;
function closeProject(){videoCleanup?.();videoCleanup=null;dialog.close();document.body.classList.remove('modal-open');if(opener)opener.focus()}
document.querySelector('#work').addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(!b)return;opener=b;const p=projects.find(p=>p.id===b.dataset.project);document.querySelector('#project-detail').innerHTML=`<div class="detail-head"><p class="eyebrow">${p.en}</p><h2 id="project-title">${p.title}</h2><p class="detail-meta">${p.meta}</p></div><div class="detail-copy"><p>${p.description}</p><div><span>我的工作</span><p>${p.role}</p></div></div>${renderVideo(p)}${renderGallery(p)}<p class="detail-note">${p.video?'视频可全屏观看。':''}${p.images.length?'点击图片查看大图。':''}</p>`;dialog.showModal();observeImages();bindVideo();document.body.classList.add('modal-open');dialog.scrollTop=0});
document.querySelector('#close-project').addEventListener('click',closeProject);
dialog.addEventListener('cancel',e=>{e.preventDefault();closeProject()});
dialog.addEventListener('click',e=>{if(e.target===dialog)closeProject()});


// The portfolio presents recordings and artwork; there is no playable-game link.
const pandoraFilms={
 explore:{title:'场景探索',en:'PANDORA / SCENE EXPLORATION',description:'在场景中移动探索，与角色对话并发现叙事线索。'},
 story:{title:'影游结合',en:'PANDORA / INTERACTIVE NARRATIVE',description:'以点击交互串联角色行动与剧情演出。'},
 rhythm:{title:'节奏音游',en:'PANDORA / RHYTHM GAMEPLAY',description:'跟随音乐节奏完成调律，观看游戏中的动态演出。'},
 stairs:{title:'上楼动画',en:'PANDORA / IN-GAME ANIMATION',description:'第二章游戏内动画片段。'}
};
document.querySelector('#pandora').addEventListener('click',event=>{
 const trigger=event.target.closest('[data-pandora-video]');if(!trigger)return;
 const key=trigger.dataset.pandoraVideo,film=pandoraFilms[key];if(!film)return;
 opener=trigger;
 const media={...film,videoSrc:`assets/pandora-${key}.mp4`,poster:`pandora-${key}-poster.webp`};
 document.querySelector('#project-detail').innerHTML=`<div class="detail-head"><p class="eyebrow">${film.en}</p><h2 id="project-title">${film.title}</h2><p class="detail-meta">${film.description}</p></div>${renderVideo(media)}`;
 dialog.showModal();observeImages();bindVideo();document.body.classList.add('modal-open');dialog.scrollTop=0;
});
// Load only artwork entering the viewport; offscreen galleries must not compete with video.
const artworkObserver=new IntersectionObserver(entries=>{
 for(const entry of entries)if(entry.isIntersecting){const img=entry.target;img.src=img.dataset.lazySrc;delete img.dataset.lazySrc;artworkObserver.unobserve(img);}
},{rootMargin:'80px 0px'});
function observeImages(){document.querySelectorAll('img[data-lazy-src]').forEach(img=>artworkObserver.observe(img));}
observeImages();
