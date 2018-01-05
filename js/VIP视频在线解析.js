 ==UserScript==
 @name         VIP视频在线解析
 @namespace    httpgoudidiao.com
 @version      1.3.6
 @description  在视频标题旁上显示“vip解析”按钮和“搜索电影”按钮，在线播放vip视频；支持优酷vip，腾讯vip，爱奇艺vip，芒果vip，乐视vip等常用视频...
 @author       goudidiao
 @match        v.youku.comv_show
 @match        .iqiyi.comv_
 @match        .iqiyi.comdianying
 @match        .le.comptvvplay
 @match        v.qq.comxcover
 @match        v.qq.comxpage
 @match        .tudou.comlistplay
 @match        .tudou.comalbumplay
 @match        .tudou.comprogramsview
 @match        .mgtv.comb
 @match        film.sohu.comalbum
 @match        .acfun.cnv
 @match        .bilibili.comvideo
 @match        .bilibili.comanime
 @match        vip.pptv.comshow
 @match        v.yinyuetai.comvideo
 @match        v.yinyuetai.complaylist
 @match        .wasu.cnPlayshow
 @require      httpcdn.bootcss.comjquery1.8.3jquery.min.js
 @run-at       document-end
 @grant        unsafeWindow
 ==UserScript==

(function() {
    'use strict';
    var curPlaySite = '';
    var curWords = '';
    var videoSite = window.location.href;
    var reYk = youkui;
    var reAqy = iqiyii;
    var reLS = lei;
    var reTX = qqi;
    var reTD = tudoui;
    var reMG = mgtvi;
    var reSH = sohui;
    var reAF = acfuni;
    var reBL = bilibilii;
    var reYJ = 1905i;
    var rePP = pptvi;
    var reYYT = yinyuetaii;
    var vipBtn = 'a id=goudidiaoVipBtn style=cursorpointer;text-decorationnone;colorred;padding0 5px;border1px solid red;vip解析a';
    var mSearchBtn = 'a id=goudidiaoSearchBtn target=_blank style=cursorpointer;text-decorationnone;colorred;padding0 5px;border1px solid red;搜索电影a';
     优酷
    if(reYk.test(videoSite)){
        var youkuTitle = $('#subtitle');
        if(youkuTitle.length !== 0){
        	youkuTitle.parent('.title').after(mSearchBtn).after(vipBtn);
	        $('#goudidiaoVipBtn').css({'font-size''17px','display''inline-block','height''22px','line-height''22px','margin''0 5px','vertical-align''bottom'});
	        $('#goudidiaoSearchBtn').css({'font-size''17px','display''inline-block','height''22px','line-height''22px','margin''0 5px','vertical-align''bottom'});
	        if($('.tvinfo').length !== 0){
	        	curWords = $('.tvinfo').find('h3').eq(0).text();
	        }else{
	        	curWords = $('.title').attr('title');
	        }
	        $('#goudidiaoSearchBtn').attr('href','httpifkdy.comq=' + curWords + '&p=1');
        }else{
        	$('.title').after(mSearchBtn).after(vipBtn);
        	$('#goudidiaoVipBtn').css({'font-size''17px','display''inline-block','height''22px','line-height''22px','margin''0 5px','vertical-align''bottom'});
	        $('#goudidiaoSearchBtn').css({'font-size''17px','display''inline-block','height''22px','line-height''22px','margin''0 5px','vertical-align''bottom'});
	       	if($('.tvinfo').length !== 0){
	        	curWords = $('.tvinfo').find('h3').eq(0).text();
	        }else{
	        	curWords = $('.title').attr('title');
	        }
	        $('#goudidiaoSearchBtn').attr('href','httpifkdy.comq=' + curWords + '&p=1');
        }
    }
     爱奇艺
    if(reAqy.test(videoSite)){
        var iqiyiTitle = $('#widget-videotitle');
        iqiyiTitle.parent('.mod-play-tit').append(vipBtn).append(mSearchBtn);
        $('#goudidiaoVipBtn').css({'font-size''17px','display''inline-block','height''24px','line-height''24px','margin''0 5px'});
        $('#goudidiaoSearchBtn').css({'font-size''17px','display''inline-block','height''24px','line-height''24px','margin''0 5px'});
        if($('#drama-series-title').length !== 0){
        	curWords = $('#drama-series-title').find('a').text();
        }else{
        	curWords = iqiyiTitle.text();
        }
        $('#goudidiaoSearchBtn').attr('href','httpifkdy.comq=' + curWords + '&p=1');
    }
     乐视
    if(reLS.test(videoSite)){
        var lsTitle = $('.j-video-name');
        lsTitle.after(mSearchBtn).after(vipBtn);
        lsTitle.css('float','left');
        $('#goudidiaoVipBtn').css({'font-size''16px','display''inline-block','height''20px','line-height''20px','margin''0 5px'});
        $('#goudidiaoSearchBtn').css({'font-size''16px','display''inline-block','height''20px','line-height''20px','margin''0 5px'});
       	if($('.Info').find('.title').find('h3').length !== 0){
        	curWords = $('.Info').find('.title').find('h3').text();
        }else{
        	curWords = lsTitle.text();
        }
        $('#goudidiaoSearchBtn').attr('href','httpifkdy.comq=' + curWords + '&p=1');
    }
     腾讯
    if(reTX.test(videoSite)){
        var qqTitle = $('.mod_intro').find('.video_title');
        qqTitle.eq(0).after(mSearchBtn).after(vipBtn);
        $('#goudidiaoVipBtn').css({'font-size''24px','display''inline-block','height''36px','line-height''36px','margin''0 5px'});
        $('#goudidiaoSearchBtn').css({'font-size''24px','display''inline-block','height''36px','line-height''36px','margin''0 5px'});
        if($('.player_title').length !== 0 && $('.player_title').find('a').length === 0){
        	curWords = $('.player_title').text();
        }else{
        	curWords = $('._base_title').text();
        }
        if(curWords === ''){
        	curWords = $('.player_title').text();
        }
        $('#goudidiaoSearchBtn').attr('href','httpifkdy.comq=' + curWords + '&p=1');
    }
     土豆
    if(reTD.test(videoSite)){
        var tdTitle = $('#videoKw');
        tdTitle.parent('.fix').append(vipBtn);
        $('#goudidiaoVipBtn').css({'font-size''18px','display''inline-block','height''22px','line-height''22px','margin''14px 5px 0'});
    }
     芒果
    if(reMG.test(videoSite)){
        var mgTitle = $('.v-panel-title');
        mgTitle.after(mSearchBtn).after(vipBtn);
        mgTitle.css({'float''left','margin-right''0'});
        $('#goudidiaoVipBtn').css({'font-size''22px','display''inline-block','height''40px','line-height''40px','margin''0 5px'});
        $('#goudidiaoSearchBtn').css({'font-size''22px','display''inline-block','height''40px','line-height''40px','margin''0 5px'});
    	curWords = mgTitle.text();
        $('#goudidiaoSearchBtn').attr('href','httpifkdy.comq=' + curWords + '&p=1');
    }
     搜狐
    if(reSH.test(videoSite)){
        var shTitle = $('.player-top-info-name');
        shTitle.append(vipBtn).append(mSearchBtn);
        shTitle.find('h2').css({'float''left'});
        $('#goudidiaoVipBtn').css({'font-weight''bold','font-size''16px','display''inline-block','height''36px','line-height''36px','margin''0 5px'});
        $('#goudidiaoSearchBtn').css({'font-weight''bold','font-size''16px','display''inline-block','height''36px','line-height''36px','margin''0 5px'});
        curWords = shTitle.find('h2').text();
        $('#goudidiaoSearchBtn').attr('href','httpifkdy.comq=' + curWords + '&p=1');
    }
     acfun
    if(reAF.test(videoSite)){
        var acTitle = $('.head').find('.title');
        acTitle.append(vipBtn);
        $('#goudidiaoVipBtn').css({'font-weight''bold','font-size''16px','display''inline-block','height''20px','line-height''20px','margin''0 5px'});
    }
     bilibili
    if(reBL.test(videoSite)){
        var biliTitle = $('.v-title').find('h1');
        biliTitle.after(vipBtn);
        biliTitle.css({'float''left','margin-right''0'});
        $('#goudidiaoVipBtn').css({'font-weight''bold','font-size''16px','display''inline-block','height''36px','line-height''36px','margin''0 5px'});
    }
     pptv
    if(rePP.test(videoSite)){
        var pptvTitle = $('.title_video').find('h3');
        pptvTitle.after(mSearchBtn).after(vipBtn);
        $('#goudidiaoVipBtn').css({'font-weight''bold','font-size''16px','display''inline-block','height''36px','line-height''36px','margin''0 5px'});
        $('#goudidiaoSearchBtn').css({'font-weight''bold','font-size''16px','display''inline-block','height''36px','line-height''36px','margin''0 5px'});
        curWords = pptvTitle.text();
        $('#goudidiaoSearchBtn').attr('href','httpifkdy.comq=' + curWords + '&p=1');
    }
     音悦台
    if(reYYT.test(videoSite)){
        var yytTitle = $('.videoName');
        yytTitle.append(vipBtn);
        $('#goudidiaoVipBtn').css({'font-weight''bold','font-size''14px','display''inline-block','height''32px','line-height''32px','margin''0 5px'});
    }
    $('#goudidiaoVipBtn').on('click',function(){
        curPlaySite = window.location.href;
        window.location.href = 'httpgoudidiao.comurl=' + curPlaySite;
    });
})();