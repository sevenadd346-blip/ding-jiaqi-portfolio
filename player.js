/* Small HLS segments avoid waiting for a large MP4 response before playback. */
let videoCleanup=null;
const formatTime=n=>`${Math.floor((Number.isFinite(n)?n:0)/60)}:${String(Math.floor((Number.isFinite(n)?n:0)%60)).padStart(2,'0')}`;
function renderVideo(p){
 if(!p.video&&!p.videoSrc)return '';
 const key=p.video?`film-${p.video}`:p.videoSrc.split('/').pop().replace(/\.mp4$/,'');
 return `<div class="video-player" data-media="${key}"><video playsinline webkit-playsinline preload="none" controlslist="nodownload noremoteplayback" disablepictureinpicture disableremoteplayback poster="assets/${p.poster||`film-${p.video}.jpg`}" aria-label="${p.title}作品视频"></video><div class="video-controls"><button type="button" class="video-play">播放</button><span class="video-time">0:00 / 0:00</span><input type="range" class="video-seek" min="0" max="1000" step="1" value="0" aria-label="视频播放进度" disabled><label class="quality-label">画质 <select class="video-quality" aria-label="视频画质"><option value="auto">自动</option><option value="low">流畅</option><option value="hd">高清</option></select></label><button type="button" class="video-mute">静音</button><button type="button" class="video-fullscreen">全屏</button></div><p class="video-status" role="status">点击播放 · 可切换流畅或高清画质</p></div>`;
}
function bindVideo(){
 videoCleanup?.();videoCleanup=null;
 const player=document.querySelector('#project-dialog .video-player');if(!player)return;
 const video=player.querySelector('video'),play=player.querySelector('.video-play'),seek=player.querySelector('.video-seek'),time=player.querySelector('.video-time'),status=player.querySelector('.video-status'),quality=player.querySelector('.video-quality'),mute=player.querySelector('.video-mute');
 let hls=null,started=false,disposed=false,failed=false,dragging=false,pending=false,timer=null,recoveries=0,savedTime=0;
 const base=`media/${player.dataset.media}/`;
 const clearTimer=()=>{clearTimeout(timer);timer=null;};
 const fail=(message='视频暂时加载失败，请点击重试。')=>{
  if(disposed)return;clearTimer();failed=true;pending=false;savedTime=video.currentTime||savedTime;
  hls?.stopLoad();video.pause();play.disabled=false;play.textContent='重试播放';status.textContent=message;
 };
 const armTimer=()=>{clearTimer();timer=setTimeout(()=>fail('加载超时，请点击重试；网络较慢时可选择流畅画质。'),25000);};
 const sync=()=>{
  time.textContent=`${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
  if(!dragging&&Number.isFinite(video.duration)&&video.duration>0)seek.value=String(video.currentTime/video.duration*1000);
  seek.setAttribute('aria-valuetext',time.textContent);
 };
 function load(at=0){
  hls?.destroy();hls=null;clearTimer();failed=false;started=true;pending=true;recoveries=0;savedTime=at;
  status.textContent='正在加载视频…';play.textContent='加载中…';play.disabled=false;armTimer();
  if(!window.Hls?.isSupported()&&video.canPlayType('application/vnd.apple.mpegurl')){
   // Native HLS keeps iPhone playback tied to the user's tap.
   video.src=base+(quality.value==='auto'?'master.m3u8':`${quality.value}/index.m3u8`);video.load();
   if(at)video.addEventListener('loadedmetadata',()=>{if(!disposed)video.currentTime=at;},{once:true});
  }else if(window.Hls?.isSupported()){
   hls=new Hls({startLevel:quality.value==='hd'?1:0,startPosition:at,maxBufferLength:12,maxMaxBufferLength:24,backBufferLength:6,capLevelToPlayerSize:true,enableWorker:true});
   hls.on(Hls.Events.MANIFEST_PARSED,()=>{
    if(quality.value!=='auto')hls.currentLevel=quality.value==='hd'?1:0;
   });
   hls.on(Hls.Events.ERROR,(_event,data)=>{
    if(disposed||!data.fatal)return;
    if(recoveries++<1){
     if(data.type===Hls.ErrorTypes.MEDIA_ERROR){hls.recoverMediaError();armTimer();return;}
     if(data.type===Hls.ErrorTypes.NETWORK_ERROR){hls.startLoad(video.currentTime||at);armTimer();return;}
    }
    fail();
   });
   hls.loadSource(base+'master.m3u8');hls.attachMedia(video);
  }else{
   video.src=`assets/${player.dataset.media}.mp4`;video.preload='auto';video.load();
  }
 }
 function playVideo(){
  pending=true;play.textContent='加载中…';armTimer();
  video.play().catch(error=>{
   if(disposed||error.name==='AbortError')return;
   if(error.name==='NotAllowedError'){pending=false;clearTimer();play.textContent='点击播放';status.textContent='请点击播放按钮继续。';return;}
   fail();
  });
 }
 const toggle=()=>{
  if(!started||failed){load(failed?savedTime:0);playVideo();return;}
  if(pending&&!video.readyState){video.pause();pending=false;clearTimer();play.textContent='播放';status.textContent='已暂停加载，可点击继续。';return;}
  if(video.paused)playVideo();else video.pause();
 };
 play.addEventListener('click',toggle);video.addEventListener('click',toggle);
 video.addEventListener('loadedmetadata',()=>{seek.disabled=false;sync();});
 video.addEventListener('loadeddata',()=>{if(!pending&&!failed){clearTimer();play.textContent='播放';status.textContent='视频已就绪';}});
 video.addEventListener('playing',()=>{clearTimer();pending=false;failed=false;play.textContent='暂停';status.textContent='正在播放';});
 video.addEventListener('waiting',()=>{if(!failed&&(pending||!video.paused)){status.textContent='正在缓冲…';armTimer();}});
 video.addEventListener('timeupdate',()=>{sync();if(!video.paused&&video.readyState>=3){clearTimer();status.textContent='正在播放';}});
 video.addEventListener('pause',()=>{if(!disposed&&!failed&&!pending){clearTimer();play.textContent='继续播放';status.textContent='已暂停';}});
 video.addEventListener('ended',()=>{clearTimer();pending=false;play.textContent='重新播放';status.textContent='播放结束';sync();});
 video.addEventListener('error',()=>{if(!hls&&!disposed)fail();});
 seek.addEventListener('pointerdown',()=>{dragging=true;});
 seek.addEventListener('input',()=>{if(Number.isFinite(video.duration))time.textContent=`${formatTime(Number(seek.value)/1000*video.duration)} / ${formatTime(video.duration)}`;});
 seek.addEventListener('change',()=>{dragging=false;if(Number.isFinite(video.duration)){video.currentTime=Number(seek.value)/1000*video.duration;sync();if(!video.paused)armTimer();}});
 seek.addEventListener('pointercancel',()=>{dragging=false;sync();});
 quality.addEventListener('change',()=>{
  if(!started||failed)return;
  if(hls){hls.currentLevel=quality.value==='auto'?-1:quality.value==='hd'?1:0;status.textContent='已切换画质';}
  else if(video.canPlayType('application/vnd.apple.mpegurl')){const at=video.currentTime,playing=!video.paused;load(at);if(playing)playVideo();else{pending=false;play.textContent='播放';}}
 });
 mute.addEventListener('click',()=>{video.muted=!video.muted;mute.textContent=video.muted?'开启声音':'静音';});
 player.querySelector('.video-fullscreen').addEventListener('click',()=>{
  if(document.fullscreenElement){document.exitFullscreen?.();return;}
  if(player.requestFullscreen)player.requestFullscreen().catch(()=>{status.textContent='当前浏览器暂不支持全屏。';});
  else if(video.webkitEnterFullscreen)video.webkitEnterFullscreen();
 });
 videoCleanup=()=>{disposed=true;clearTimer();hls?.destroy();hls=null;video.pause();video.removeAttribute('src');video.load();};
}
