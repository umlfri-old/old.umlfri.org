var processURI="return_dynamic_filters.html";var liveReq=false;function liveReqDoReq(){if(liveReq&&liveReq.readyState<4){liveReq.abort()}if(window.XMLHttpRequest){liveReq=new XMLHttpRequest()}else{if(window.ActiveXObject){liveReq=new ActiveXObject("Microsoft.XMLHTTP")}}name=this.id;liveReq.onreadystatechange=function(){liveReqProcessReqChange(name)};t_view=document.getElementById("filters_form_open").elements.view_type.value;liveReq.open("GET.html",processURI+"?view_type="+t_view+"&filter_target="+this.id);document.getElementById(this.id+"_target").innerHTML=string_loading;liveReq.send(null);return false}function liveReqProcessReqChange(a){if(liveReq.readyState==4){document.getElementById(a+"_target").innerHTML=liveReq.responseText;replaceWithContent(a)}}function replaceWithContent(b){tag=document.getElementById(b);if(!tag){return false}t_parent=tag.parentNode;if(!t_parent){return false}for(var a=0;a<tag.childNodes.length;a++){child=tag.childNodes[a].cloneNode(true);t_parent.insertBefore(child,tag)}t_parent.removeChild(tag)}function labelInit(){if(document.getElementById&&(window.XMLHttpRequest||window.ActiveXObject)){t_form=document.getElementById("filters_form_open");if(!t_form){return false}t_links=t_form.getElementsByTagName("a");if(!t_links){return false}for(var b=0;b<t_links.length;b++){var a=t_links[b];if(a.id.substring((a.id.length-7),a.id.length)=="_filter"){if(document.getElementById(a.id+"_target")){a.onclick=liveReqDoReq}else{alert("missing target for:"+a.id)}}}}}addLoadEvent(labelInit);