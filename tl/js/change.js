var inps=document.querySelectorAll("input,textarea");
id = sessionStorage.id;
input_id.value = id;
inps[0].value=sessionStorage.name;
inps[1].value=sessionStorage.writer;
inps[2].value=sessionStorage.price;
inps[3].value=sessionStorage.count;
inps[4].value=sessionStorage.jianjie;
inps[5].value=sessionStorage.content;
console.log(inps);
console.log(sessionStorage);