/*!
    * script.js beta v0.1 - Nois Que Voa Bruxao - Magia em JS
    * Feito por Rodrigo Ross 
    * Awati Tecnologia planejada */

//Funões
//Validação Formulário
function validate(){
    if (document.formContato.nome.value == ""){
        $("#nome").tooltip("show");
        document.formContato.nome.focus();
        return false;
    }
    
    if( document.formContato.mail.value == "" ){
       
       //verificação de e-mail
       var emailID = document.formContato.value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");
        
        if (atpos < 1 || ( dotpos - atpos < 2 )) 
        {
           alert("Por favor, insira um e-mail válido")
           document.formContato.mail.focus() ;
           return false;
        }    
       $("#mail").tooltip("show");
       document.formContato.mail.focus() ;
       return false;
   }
   
   if( document.formContato.mensagem.value == "" ){
       $("#mensagem").tooltip("show");
       document.formContato.mensagem.focus() ;
       return false;
   }
   return( true );
}

//Modulo re-estruturador
function slideShow(id){
    let father = document.getElementById("vantagens");
    //inicializo o array
    var brother = Array(4);

    //Pega todos os irmãos não selecionados e deleta depois de copia-los
    for (i=0; i<5;i++){
        brother[i] = document.getElementById("v"+i);
        if(!(id.slice(-1) == i)){        
            try{
                //brother[i].classList.remove("float-left");

                father.removeChild(brother[i]);
            } catch(err){
                console.log("erro apagando o moleque");
            }
            //console.log(brother[i]);
        }    
    }
    //adiciona os irmãos nã ordem certa e sem destaque
    for(i = 0;i < 5 ; i++){
        if(!(id.slice(-1) == i)){
                        
            if(brother[i] !== null){
                father.appendChild(brother[i]);
            }
        }
    }
    //console.log(brother);
}

//Modulo vantagem
function vantagem(id, info){
   
    //Chama função reeestruturadora da box vantagem
    slideShow(id);

    let strChild = info.slice(0,-1); //salva "info"
    let indice = info.slice(-1);    //salva o numero no final da str

    //Editor de estilos
    for(i = 0;i < 5;i++){
        let father = document.getElementById("v"+i);
        let child = document.getElementById(strChild+i);
        let aga = document.getElementById("aga"+i);

        //dá destaque a div selecionada
        if(id.slice(-1) == i){
            
            //deixa as outras vantagens escondidas quando selecioan outra vantagem.
            try{             
                //esconde as li da div não selecionada
                child.classList.remove("nSelecionado");
                child.classList.add("Selecionado");

                //console.log(father);
                aga.classList.remove("display-5");
                aga.classList.add("display-1");
                
                //reduz tamanho da div não selecionada
                father.classList.remove("float-left");
                father.classList.remove("vantagem-sm");
                father.classList.remove("vantagem");
                //dá prioridade para a div selecionada dando estilo de destaque
                father.classList.add("vantagem-bg"); 

            } catch (err){
                console.log(err);
            }
        }

        //Remove a classe da div filho que esconde as vantagens e arruma o estilo
        if(!(indice == i)){
            
            //deixa as outras vantagens escondidas quando selecioan outra vantagem.
            try{

                //esconde as li da div não selecionada
                child.classList.remove("selecionado");
                child.classList.add("nSelecionado");

                //console.log(father);
                //reduz tamanho da div não selecionada
                father.classList.remove("vantagem-bg");
                father.classList.remove("vantagem");
                father.classList.add("vantagem-sm");

                //console.log(aga);
                //Edita display
                aga.classList.remove("display-1");
                aga.classList.add("display-5");
            } catch (err){
                console.log(err);
            }
            
            
        }
    }
}

//Ativo
/*
$(".menu-button a").on("click", function(){
    $(".menu-button").find(".ativo").removeClass("ativo");
    $(this).parent().addClass("ativo");
 });
*/
 