/*======================================================================*\
|| #################################################################### ||
|| # vBulletin 3.8.6 Patch Level 1
|| # ---------------------------------------------------------------- # ||
|| # Copyright ©2000-2011 Jelsoft Enterprises Ltd. All Rights Reserved. ||
|| # This file may not be redistributed in whole or significant part. # ||
|| # ---------------- VBULLETIN IS NOT FREE SOFTWARE ---------------- # ||
|| # http://www.vbulletin.com | http://www.vbulletin.com/license.html # ||
|| #################################################################### ||
\*======================================================================*/
function mq_init(D){var C=fetch_cookie("vbulletin_multiquote");if(C!=null&&C!=""){C=C.split(",")}else{C=new Array()}var E;var A=fetch_tags(D,"img");for(var B=0;B<A.length;B++){if(A[B].id&&A[B].id.substr(0,3)=="mq_"){E=A[B].id.substr(3);A[B].onclick=function(F){return mq_click(this.id.substr(3))};change_mq_image(E,(PHP.in_array(E,C)>-1?true:false))}}}function mq_click(F){var D=fetch_cookie("vbulletin_multiquote");var B=new Array();var E=false;if(D!=null&&D!=""){D=D.split(",");for(C in D){if(!YAHOO.lang.hasOwnProperty(D,C)){continue}if(D[C]==F){E=true}else{if(D[C]){B.push(D[C])}}}}change_mq_image(F,(E?false:true));if(!E){B.push(F);if(typeof mqlimit!="undefined"&&mqlimit>0){for(var C=0;C<(B.length-mqlimit);C++){var A=B.shift();change_mq_image(A,false)}}}set_cookie("vbulletin_multiquote",B.join(","));return false}function change_mq_image(C,B){var A=fetch_object("mq_"+C);if(A){if(B==true){A.src=A.src.replace(/\/multiquote_off\.([a-zA-Z0-9]+)$/,"/multiquote_on.$1")}else{A.src=A.src.replace(/\/multiquote_on\.([a-zA-Z0-9]+)$/,"/multiquote_off.$1")}}}mq_init(fetch_object("posts"));