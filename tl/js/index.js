if(sessionStorage.name1){
    var fdiv=document.getElementsByClassName("aa")[0];
    var fa=document.getElementsByClassName("none")[0];
    fa.className="";
    fdiv.innerHTML=sessionStorage.name1+"你好，欢迎你！"+"<a onclick=zx(this)>注销</a>";
    if(sessionStorage.vip){//如果是vip
        fdiv.innerHTML=sessionStorage.name1+"你好，欢迎你！"+"<span style='background:red'>超级VIP</span>"+"<a onclick=zx(this)>注销</a>";
    }
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/index.php?hide=0");
    xhr.send("");
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var bd = document.getElementsByTagName("div")[0];
            var data = JSON.parse(xhr.responseText);
            var table = document.createElement("table");
            //表头
            var tr = document.createElement("tr");
            for (var i in data[0]) {
                var td = document.createElement("td");
                td.innerHTML = i;
                tr.appendChild(td);
            }
            var td = document.createElement("td");
            td.innerHTML = "操作";
            tr.appendChild(td);
            table.appendChild(tr);
            //内容
            for (var i = 0; i < data.length; i++) {
                var tr = document.createElement("tr");
                for (var j in data[i]) {
                    var td = document.createElement("td");
                    td.innerHTML = data[i][j];
                    tr.appendChild(td);
                }
                var td = document.createElement("td");
                td.innerHTML = "<button onclick=show(this)>查看</button><button onclick=sel(this)>修改</button><button onclick=ff(this)>删除</button>";
                tr.appendChild(td);
                table.appendChild(tr);
            }
            bd.appendChild(table);
        }
    }
}
function zx(a){
    sessionStorage.removeItem("name1");
    history.go(0);
    fa.className="none";
}
function ff(btn) {
    var id = btn.parentNode.parentNode.firstElementChild.innerHTML;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `../php/index.php?hide=2&id=${id}`);
    xhr.send("");
    btn.parentNode.parentNode.remove();
}
function show(btn) {
    var id = btn.parentNode.parentNode.firstElementChild.innerHTML;
    sessionStorage.id = id;
    location = '../html/content.html';
}
function sel(btn) {
    var id = btn.parentNode.parentNode.firstElementChild.innerHTML;
    sessionStorage.id = id;
    var xhr = new XMLHttpRequest();
    id = sessionStorage.id;
    xhr.open("GET", `../php/index.php?hide=4&id=${id}`);
    xhr.send("");
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText)[0];
            sessionStorage.name=data["name"];
            sessionStorage.writer=data["writer"];
            sessionStorage.price=data["price"];
            sessionStorage.count=data["count"];
            sessionStorage.jianjie=data["jianjie"];
            sessionStorage.content=data["content"];
            location = '../html/change.html';
        }
    }
   
}