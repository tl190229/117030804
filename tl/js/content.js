var h1=document.getElementsByTagName("h1")[0];
var p=document.getElementsByTagName("p")[0];
var xhr = new XMLHttpRequest();
id=sessionStorage.id;
xhr.open("GET", `../php/index.php?hide=3&id=${id}`);
xhr.send("");
xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var data=JSON.parse(xhr.responseText);
        h1.innerHTML=data[0]["name"];
        p.innerHTML=data[0]["content"];
    }
}