const projects = [
 {id:'gears',title:'齿轮之上',en:'ABOVE THE GEARS',category:'三维设计',cover:'image9.webp',meta:'Maya / Substance 3D Painter / Arnold',intro:'蒸汽、轨道与悬浮机械，构成一座仍在运作的架空城市。',description:'以蒸汽动力为核心，借鉴工业革命时期的拱券建筑与机械结构，让厚重的金属、复杂的齿轮和漂浮的机械体共同建立空间秩序。画面里没有明确的人物，灯光与机器的运行留下了人曾在此活动的线索。',role:'场景构思、三维建模、材质绘制与渲染',images:['image5.webp','image8.webp','image11.webp','image10.webp'],video:1},
 {id:'posthuman',title:'后人类样本',en:'POSTHUMAN SPECIMEN',category:'三维设计',cover:'image14.webp',meta:'Maya / Substance 3D Painter / Arnold',intro:'以机械心脏为起点，讨论身体与自我意识的边界。',description:'实验舱、透明的人体与漂浮的机械器官，组成介于生命与机器之间的未来空间。作品围绕“机械飞升”展开：当身体可以被替换，意识可以被保存，情感、记忆与身份将如何延续？',role:'概念设计、三维建模、材质与影像渲染',images:['image12.webp','image15.webp','image16.webp'],video:2},
 {id:'love',title:'有爱就不怕',en:'LIVE VISUALS / 庄心妍',category:'舞台影像',cover:'image19.webp',meta:'VJ / AI 视觉生成 / 动态影像',intro:'围绕歌曲情绪，为现场演出制作统一的影像氛围。',description:'参与庄心妍《有爱就不怕》的演出视觉设计与制作，结合歌曲情绪和舞台结构组织动态画面。负责 AI 视觉生成、素材风格统一与动态整合，并适配现场播放。',role:'VJ 影像设计与制作、现场播放适配',images:['image19.webp'],video:3},
 {id:'broken',title:'断了乱了',en:'LIVE VISUALS / 庄心妍',category:'舞台影像',cover:'image20.webp',meta:'VJ / AI 视觉生成 / 舞台适配',intro:'用红色影像与人物意象回应歌曲中的情绪张力。',description:'参与庄心妍《断了乱了》的 VJ 内容设计与制作，围绕音乐情绪统一影像风格，整合动态素材并完成现场播放适配。',role:'VJ 影像设计、AI 视觉生成与素材整合',images:['image20.webp']},
 {id:'moon',title:'月上屋檐',en:'LIVE VISUALS / 郭俊辰',category:'舞台影像',cover:'image21.webp',meta:'VJ / 音乐叙事 / 现场视觉',intro:'让画面节奏与音乐叙事一起进入舞台空间。',description:'根据歌曲情绪和舞台结构设计视觉内容，负责影像素材的风格把控与现场呈现。通过画面节奏与空间关系，强化音乐叙事和现场的情绪表达。',role:'VJ 影像设计、素材风格把控',images:['image21.webp'],video:4},
 {id:'guilin',label:'装置设计',title:'桂林艺术节',en:'PUBLIC ART & GRAPHIC DESIGN',category:'平面与空间',cover:'image23.webp',meta:'公共艺术 / 展板设计 / 空间视觉',intro:'让戏剧人物、山水色彩与公共空间产生互动。',description:'参与艺术节的展板与艺术装置设计，以山水意象、渐变色彩及几何模块组织公共空间。互动合影展板则以戏剧人物为视觉核心，让观众自然进入画面，成为作品的一部分。',role:'展板版式、装置视觉方案与现场呈现',images:['image23.webp','image24.webp','image25.webp','image26.webp','image27.webp','image28.webp','image29.webp']},
 {id:'greek',label:'封面设计',title:'古希腊戏剧学术研讨会',en:'CONFERENCE VISUAL IDENTITY',category:'平面与空间',cover:'image30.webp',meta:'主海报 / 议程手册 / 视觉系统',intro:'将戏剧的历史意象，带入当代学术活动的视觉表达。',description:'为中央戏剧学院“古希腊戏剧在中国：文本译介及舞台实践现状与未来”学术研讨会设计主海报与议程手册封面。以蓝灰色调、戏剧人物影像和清晰的信息层级，建立统一的视觉形象。',role:'会议主海报与议程手册封面设计',images:['image30.webp','image31.webp']},
 {id:'macau',label:'封面设计',title:'澳门旅博会 · 旅行护照',en:'MACAO / PASSPORT COVER',category:'平面与空间',cover:'image33.webp',meta:'文创设计 / 线性插画 / AI 辅助',intro:'以复古护照为载体，把城市地标与旅行记忆收入封面。',description:'围绕“旅行与城市连接”展开视觉设计，以金色线条描绘城市地标、交通工具与旅客，结合复古证件版式与流动色带。负责整体视觉概念、色彩搭配、版式构成与图形细节优化，并借助 AI 探索视觉方案。',role:'封面视觉概念、版式与图形设计',images:['image33.webp','image32.webp']},
 {id:'pandora-pv',title:'潘多拉 · 概念 PV',en:'PANDORA / CONCEPT FILM',category:'AI 影像',cover:'film-5.jpg',meta:'AI 图像 / AI 视频 / 后期合成',intro:'在情绪被封存的未来社会，寻找被遗忘的共鸣。',description:'原创叙事音游《潘多拉》的概念 PV。通过未来城市、列车空间和角色行动建立世界观，融合未来科技与民族元素，以低饱和色彩和电影化镜头语言统一画面。结合 AI 图像、AI 视频与后期合成，完成角色引入和情绪悬念的铺垫。',role:'概念视觉、AI 影像生成与后期整合',images:[],video:5},
 {id:'chaoshan',title:'时差岛 · 潮汕',en:'CULTURAL NARRATIVE / VFX',category:'AI 影像',cover:'image35.webp',meta:'视觉特效 / AI 影像 / 后期合成',intro:'把历史迁徙与自然环境，转化为有空间层次的动态画面。',description:'参与时差岛潮汕主题视频的视觉特效设计与制作，将瘴气、迁徙、灾害等叙事内容转化为影像。利用概括化色块、氛围光影与前后景动态，结合 AI 视觉生成和后期合成，建立历史叙事的空间感。',role:'镜头视觉、动态效果与后期合成',images:['image35.webp'],video:6}
];
const grid=document.querySelector('#projects');
const chapters=[['三维设计','three-d','02','3d'],['舞台影像','live-visual','03','vj/pv'],['平面与空间','graphic','04','Graphic'],['AI 影像','ai-film','05','Ai video']];
grid.innerHTML=chapters.map(([category,id,number,en])=>`<section class="chapter" id="${id}"><div class="chapter-title"><span class="chapter-number">${number}.</span><h2>${category}<span>${en}</span></h2></div><div class="chapter-projects">${projects.filter(p=>p.category===category).map(p=>`<button class="project ${p.category==='平面与空间'?'graphic':''}" data-project="${p.id}" aria-label="查看${p.title}项目"><div class="project-picture"><img src="assets/${p.cover}" alt="${p.title}" loading="lazy"><span class="view-project">查看项目 ↗</span>${p.video?'<span class="video-mark">▶ 影像作品</span>':''}</div><div class="project-info"><h3>${p.title}</h3><span>${p.label||p.category}</span></div><p>${p.intro}</p>${p.id==='guilin'?'<span class="gallery-card-link">查看全部 7 张作品图 ↗</span>':''}</button>`).join('')}</div></section>`).join('');
const dialog=document.querySelector('#project-dialog');

const imageSizes={"image1.webp": [1920, 1080], "image10.webp": [1920, 1440], "image11.webp": [1920, 1080], "image12.webp": [1920, 1080], "image13.webp": [1920, 1080], "image14.webp": [1920, 1080], "image15.webp": [1920, 1080], "image16.webp": [1920, 1080], "image17.webp": [1920, 1080], "image18.webp": [1920, 1079], "image19.webp": [1702, 1276], "image2.webp": [1280, 1920], "image20.webp": [1920, 1080], "image21.webp": [1920, 1440], "image22.webp": [1920, 1080], "image23.webp": [1080, 1440], "image24.webp": [640, 1920], "image25.webp": [1344, 1920], "image26.webp": [1920, 1920], "image27.webp": [1440, 1080], "image28.webp": [1920, 1680], "image29.webp": [1920, 1914], "image3.webp": [1440, 1920], "image30.webp": [1371, 1920], "image31.webp": [1080, 1440], "image32.webp": [438, 613], "image33.webp": [1537, 770], "image34.webp": [1920, 1080], "image35.webp": [1920, 1200], "image36.webp": [1920, 1080], "image4.webp": [1920, 1080], "image5.webp": [1920, 1080], "image6.webp": [1920, 1080], "image7.webp": [1411, 1920], "image8.webp": [1920, 1080], "image9.webp": [1920, 1080], "pandora.webp": [1334, 750]};
function renderGallery(p){
 if(!p.images.length)return '';
 return `<div class="gallery-heading"><span>作品图集</span><span>共 ${p.images.length} 张 · 点击放大</span></div><div class="detail-gallery ${p.id==='gears'?'detail-gallery-balanced':''}">${p.images.map((s,i)=>`<figure><button type="button" class="gallery-open" data-image="assets/${s}" data-caption="${p.title} · ${i+1} / ${p.images.length}" aria-label="放大${p.title}图片${i+1}"><img src="assets/${s}" alt="${p.title}作品细节 ${i+1}" width="${imageSizes[s][0]}" height="${imageSizes[s][1]}" loading="eager" decoding="async" draggable="false"></button></figure>`).join('')}</div>`;
}
function renderVideo(p){
 if(!p.video&&!p.videoSrc)return '';
 return `<div class="video-player" data-film="${p.video||0}" data-src="${p.videoSrc||''}"><video playsinline preload="none" controlslist="nodownload noremoteplayback" disablepictureinpicture disableremoteplayback poster="assets/${p.poster||`film-${p.video}.jpg`}" aria-label="${p.title}作品视频"></video><div class="video-controls"><button type="button" class="video-play" disabled>加载中…</button><span class="video-time">0:00 / 0:00</span><input type="range" class="video-seek" min="0" max="1000" step="1" value="0" aria-label="视频播放进度" disabled><button type="button" class="video-mute" aria-label="静音">静音</button><button type="button" class="video-fullscreen">全屏</button></div><p class="video-status" role="status">正在加载视频，加载完成后可拖动进度条。</p></div>`;
}
let videoCleanup=null;
const formatTime=n=>`${Math.floor((Number.isFinite(n)?n:0)/60)}:${String(Math.floor((Number.isFinite(n)?n:0)%60)).padStart(2,'0')}`;
function bindVideo(){
 videoCleanup?.(); videoCleanup=null;
 const player=dialog.querySelector('.video-player');
 if(!player)return;
 const video=player.querySelector('video'),play=player.querySelector('.video-play'),seek=player.querySelector('.video-seek'),time=player.querySelector('.video-time'),status=player.querySelector('[role="status"]'),mute=player.querySelector('.video-mute');
 let sourceReady=false,dragging=false,disposed=false;
 const n=Number(player.dataset.film);
 const extension=!player.dataset.src&&n>=5&&video.canPlayType('video/webm; codecs="vp9, opus"')?'webm':'mp4';
 const sync=()=>{time.textContent=`${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;if(!dragging&&Number.isFinite(video.duration)&&video.duration>0)seek.value=String(video.currentTime/video.duration*1000);seek.setAttribute('aria-valuetext',time.textContent);};
 const fail=()=>{if(disposed)return;status.textContent='视频加载失败，请点击重试。';play.textContent='重新加载';play.disabled=false;seek.disabled=true;};
 function load(){
  play.disabled=true;seek.disabled=true;play.textContent='加载中…';status.textContent='正在载入视频…';
  // GitHub Pages supports byte ranges: stream immediately and seek without a full download.
  sourceReady=true;
  video.src=player.dataset.src||`assets/film-${n}.${extension}`;
  video.preload='metadata';video.load();
 }
 const toggle=()=>{if(!sourceReady||video.error){load();return;}if(video.paused)video.play().catch(()=>{status.textContent='暂时无法播放，请重试。';});else video.pause();};
 play.addEventListener('click',toggle);video.addEventListener('click',()=>{if(!play.disabled)toggle();});
 video.addEventListener('loadedmetadata',()=>{play.disabled=false;seek.disabled=false;play.textContent='播放';status.textContent='视频已就绪，可拖动进度条。';sync();});
 video.addEventListener('timeupdate',sync);
 video.addEventListener('playing',()=>{play.textContent='暂停';status.textContent='正在播放';});
 video.addEventListener('pause',()=>{if(!video.ended){play.textContent='继续播放';status.textContent='已暂停';}});
 video.addEventListener('ended',()=>{play.textContent='重新播放';status.textContent='播放结束';sync();});
 video.addEventListener('error',fail);
 seek.addEventListener('pointerdown',()=>{dragging=true;});
 const applySeek=()=>{if(Number.isFinite(video.duration)){video.currentTime=Number(seek.value)/1000*video.duration;sync();}};
 seek.addEventListener('input',applySeek);
 seek.addEventListener('change',()=>{applySeek();dragging=false;});
 seek.addEventListener('pointerup',()=>{dragging=false;});
 seek.addEventListener('pointercancel',()=>{dragging=false;});
 mute.addEventListener('click',()=>{video.muted=!video.muted;mute.textContent=video.muted?'开启声音':'静音';mute.setAttribute('aria-label',mute.textContent);});
 player.querySelector('.video-fullscreen').addEventListener('click',()=>{const result=document.fullscreenElement?document.exitFullscreen():player.requestFullscreen?.();result?.catch(()=>{status.textContent='当前浏览器暂不支持全屏。';});});
 videoCleanup=()=>{disposed=true;video.pause();video.removeAttribute('src');video.load();};
 load();
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
grid.addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(!b)return;opener=b;const p=projects.find(p=>p.id===b.dataset.project);document.querySelector('#project-detail').innerHTML=`<div class="detail-head"><p class="eyebrow">${p.en}</p><h2 id="project-title">${p.title}</h2><p class="detail-meta">${p.meta}</p></div><div class="detail-copy"><p>${p.description}</p><div><span>我的工作</span><p>${p.role}</p></div></div>${renderVideo(p)}${renderGallery(p)}<p class="detail-note">${p.video?'视频可全屏观看。':''}${p.images.length?'点击图片查看大图。':''}</p>`;dialog.showModal();bindVideo();document.body.classList.add('modal-open');dialog.scrollTop=0});
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
 dialog.showModal();bindVideo();document.body.classList.add('modal-open');dialog.scrollTop=0;
});
