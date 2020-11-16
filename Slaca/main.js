var control_nav = 0;
var control_topico=0;
var control_enviar=0;
var control_comentarios=0;



//Botão ver mais
function leiaMais(){
    var pontos=document.getElementById('pontos');
    var maisTexto=document.getElementById('mais');
    var btnLeiaMais=document.getElementById('btnLeiaMais');
    var resumo=document.getElementById('resumo');
    var descerConteudo=document.getElementById('descer-conteudo');
    var menu = document.getElementById('menu');

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="ver mais";
        btnLeiaMais.style.top=780+"px";
        btnLeiaMais.style.left=1215+"px";
        resumo.style.height=189+"px";
        descerConteudo.style.top= 0+"px";
        menu.style.height=1700+"px";
        control_nav = 0;
        
        

    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="";
        btnLeiaMais.style.width=1058+"px";
        btnLeiaMais.style.height=560+"px";
        btnLeiaMais.style.background="none";
        btnLeiaMais.style.color="none";
        btnLeiaMais.style.top=630+"px";
        btnLeiaMais.style.left=263+"px";
        descerConteudo.style.top= 370+"px";
        resumo.style.height=560+"px";
        menu.style.height=2070+"px";
        control_nav = 1;
    }
    return control_nav;
}
    


//Botão Criar tópico

function criartopico(){
    var conteudoCompartilhe = document.getElementById('conteudo-compartilhe');
    var botaotopico = document.getElementById('topico');
    var compartilhe = document.getElementById('conteudo-enviar');
    var descerConteudoComentario = document.getElementById('descer-conteudo-comentario');
    var enviado = document.getElementById('topico-enviado');

    var comentarioEnviado = document.getElementById('comentario-enviado');
    var restoConteudo = document.getElementById('resto-conteudo');
    var linha = document.getElementById('linha-compartilhe');
    var boxdiscussoes = document.getElementById('discussoes');
    var menu = document.getElementById('menu');
    boxdiscussoes.style.height = 715+"px";
    boxdiscussoes.style.borderBottomColor="white";
    conteudoCompartilhe.style.display = "none";
    compartilhe.style.display="flex";
    botaotopico.style.display = "none";
    descerConteudoComentario.style.top = 100+"px";
    menu.style.height=1800+"px";
    enviado.style.display="none";
    restoConteudo.style.top=0+"px";
    comentarioEnviado.style.top=289+"px";
    comentarioEnviado.style.display="none";
    linha.style.top=0+"px";
    control_topico=1;
    if(control_nav === 1){
        menu.style.height=2170+"px";
    }
    return control_topico;
}

function topicoEnviado(){
    var enviado = document.getElementById('topico-enviado');
    var compartilhe = document.getElementById('conteudo-enviar');
    var linha = document.getElementById('linha-compartilhe');
    var botaotopico = document.getElementById('topico');
    var comentarioEnviado = document.getElementById('comentario-enviado');
    var restoConteudo = document.getElementById('resto-conteudo');
    var boxdiscussoes = document.getElementById('discussoes');
    var boxcomentario1 = document.getElementById('comentario1');
    boxcomentario1.style.display = "flex";
    boxdiscussoes.style.height = 753+"px";
    boxdiscussoes.style.borderBottomColor = "#ECECEC";
    botaotopico.style.display = "flex";
    botaotopico.textContent = "criar novo tópico";
    botaotopico.style.top=1065+"px";
    enviado.style.display="flex";
    compartilhe.style.display="none";
    restoConteudo.style.top=30+"px";
    comentarioEnviado.style.top=161+"px";
    comentarioEnviado.style.display="flex";
    linha.style.top=50+"px";
    control_enviar=1;

    return control_enviar;
   
}

function outroscomentarios(){
    var outrosComentario = document.getElementById('outros-comentarios');
    var imgGaloa = document.getElementById('rodape');
    var boxdiscussoes = document.getElementById('discussoes');
    var boxcomentario2 = document.getElementById('comentario2');
    var like= document.getElementById('like');
    var resposta= document.getElementById('resposta');
    var btnComentariosOff = document.getElementById('btnComentariosOff');
    var menu = document.getElementById('menu');
        btnComentariosOff.style.display="flex";
        btnComentariosOff.style.height = 780+"px";
        btnComentariosOff.style.width = 1050+"px";
        btnComentariosOff.style.top=455+"px";
        btnComentariosOff.style.left=0+"px";
        boxdiscussoes.style.height = 1250+"px";
        outrosComentario.style.display="flex";
        imgGaloa.style.top=1300+"px";
        boxcomentario2.style.borderBottomLeftRadius=0+"px";
        boxcomentario2.style.borderBottomRightRadius=0+"px";
        like.textContent="4 likes";
        resposta.textContent="4 respostas";
        menu.style.height=2350+"px";
        control_comentarios=1;
        if( control_topico == 1 ){
            boxdiscussoes.style.height = 1350+"px";
            boxdiscussoes.style.borderBottomColor="#ECECEC";
        }
        else{
            boxdiscussoes.style.height = 1250+"px";
        }
    return control_comentarios;  
}
function outroscomentariosoff(){
    var outrosComentario = document.getElementById('outros-comentarios');
    var imgGaloa = document.getElementById('rodape');
    var boxdiscussoes = document.getElementById('discussoes');
    var boxcomentario2 = document.getElementById('comentario2');
    var like= document.getElementById('like');
    var btnComentariosOff = document.getElementById('btnComentariosOff');

    var resposta= document.getElementById('resposta')
    if (control_comentarios==1){
    btnComentariosOff.style.display="none";
    boxdiscussoes.style.height = 671+"px";
    outrosComentario.style.display="none";
    imgGaloa.style.top=621+"px";
    boxcomentario2.style.borderBottomLeftRadius=1+"px";
    boxcomentario2.style.borderBottomRightRadius=1+"px";
    like.textContent="1 like";
    resposta.textContent="1 resposta";
    control_comentarios=0;
  
    }
    return control_comentarios;
}