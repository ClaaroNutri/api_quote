
const boton= document.getElementById("boton")
console.log(boton);


const contenido=document.querySelector("#contenido")
    console.log(contenido);


boton.addEventListener("click", () =>{
 

fetch("http://api.quotable.io/random")
.then((res)=>{
    console.log(res);
    return res.json()
})
.then((post)=>{
    
    /*document.write(post.content)*/
    document.getElementById("contenido").innerHTML=(post.content)
    console.log(post.content);
    
})  

})


boton.addEventListener("click", ()=>{

    botonEscondido.classList.remove("hidden")

})