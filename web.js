
    let somar = document.getElementById('somar')
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

       function calcular(){
         let geral = (somar.cartModal)
         res.innerHTML=`${geral}`

       }

      
    


    
   

   
        
   




    
    







 