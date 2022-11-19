var content = document.querySelectorAll('.content ');
   content.forEach(function(index){
     index.addEventListener('click', (event) =>{
         index.classList.toggle('faq_activated');
         
      });


   });

    
