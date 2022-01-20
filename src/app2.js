import './app2.css';
import $ from 'jquery'
const $tabbar=$('#app2 .tab-bar')
const $tabContent=$('#app2 .tab-content')
$tabbar.on('click','li',(e)=>{
   const $li=$(e.currentTarget);
   $li.addClass('selected')
   .siblings()
   .removeClass('selected')
   const index=$li.index()
   $tabContent.children().eq(index).addClass('active')
   .siblings().removeClass('active')
})
$tabbar.children().eq(0).trigger('click')//trigger触发一个事件