var div1=document.getElementsByClassName("content_top")[0];
var af=document.getElementsByClassName("con_left_top")[0];
var a1=af.getElementsByTagName("a");
var div2=[];
var div2=div2.concat(div1.nextElementSibling);
div2=div2.concat(div2[0].nextElementSibling);
div2=div2.concat(div2[1].nextElementSibling);
for(var i=0;i<3;i++){
    a1[i].onclick=function(){
        var con=this.getAttribute("ab");
        for(var j=0;j<div2.length;j++){
            div2[j].className="content_bot";
        }
        div2[con].className="active";
    }
}