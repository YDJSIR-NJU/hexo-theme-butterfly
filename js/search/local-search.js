$((function(){var t=!1;$("a.social-icon.search").on("click",(function(){var a;$("body").css({width:"100%",overflow:"hidden"}),$(".search-dialog").css("display","block"),$("#local-search-input input").focus(),$(".search-mask").fadeIn(),t||(a=GLOBAL_CONFIG.localSearch.path,$.ajax({url:GLOBAL_CONFIG.root+a,dataType:"xml",success:function(t){var e=$("entry",t).map((function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}})).get(),a=$("#local-search-input input")[0],s=$("#local-hits")[0];a.addEventListener("input",(function(){var t='<div class="search-result-list">',a=this.value.trim().toLowerCase().split(/[\s]+/);if(s.innerHTML="",this.value.trim().length<=0)$(".local-search-stats__hr").hide();else{var c=0;e.forEach((function(e){var s=!0,i=e.title.trim().toLowerCase(),n=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),o=e.url,r=-1,l=-1;""!==i&&""!==n&&a.forEach((function(t,e){r=i.indexOf(t),l=n.indexOf(t),r<0&&l<0?s=!1:l<0&&(l=0)})),s&&(t+='<div class="local-search__hit-item"><a href="'+o+'" class="search-result-title">'+i+"</a></div>",c+=1,$(".local-search-stats__hr").show())})),0===c&&(t+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),s.innerHTML=t}}))}}),t=!0),document.addEventListener("keydown",(function t(a){"Escape"===a.code&&(e(),document.removeEventListener("keydown",t))}))}));var e=function(){$("body").css("width",""),$("body").css("overflow",""),$(".search-dialog").css({animation:"search_close .5s"}),$(".search-dialog").animate({},(function(){setTimeout((function(){$(".search-dialog").css({animation:"",display:"none"})}),500)})),$(".search-mask").fadeOut()};$(".search-mask, .search-close-button").on("click touchstart",e)}));