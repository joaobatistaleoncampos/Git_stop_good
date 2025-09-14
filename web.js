
    let valor = document.getElementById('valor')
    let cartModal = document.getElementById("meu-carrinho")
    let cartTotal = document.getElementById("cart-total") //carrinho
    let cartBtn = document.getElementById("cart-btn") // carrinho
    let res = window.document.getElementById('res');
   
   
   
               // Abrir carrinho
      cartBtn.addEventListener("click", function(){
       
         updateCartodal();
      cartModal.style.display="flex"
      })
      
      
      //Fechar carrinho
       cartModal.addEventListener("click",function(event){
         if(event.target === cartModal){
            cartModal.style.display="none"
         }
       })

       function calcularTotal(){
         let valor=(somar.cartModal)
         
         if(valor == 3,50){
          res.innerHTML+=`O valor é ${valor}`
         }

       }

      
    


    
   

   
        
   




    
    







 