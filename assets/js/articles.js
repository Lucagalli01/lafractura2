
const articles=[
{titulo:"El agua que nos une y nos divide",fecha:"Febrero 2026",url:"articulos/2026-02-agua.html"}
];
const c=document.getElementById("articles-list");
articles.forEach(a=>{
 const el=document.createElement("p");
 el.innerHTML=`<a href="${a.url}">${a.titulo}</a> – ${a.fecha}`;
 c.appendChild(el);
});
