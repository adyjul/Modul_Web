window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

var dynamicData = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
console.log(dynamicData)  
document.documentElement.setAttribute('data-theme', dynamicData)

$(document).ready(
    function(){
        $('#button').click(
            function(){
                var o = {};
                var toAdd = $('input[name=ListItem]').val();
                
                localStorage.setItem('value',JSON.stringify(toAdd));
                if(toAdd){
                    $('ol').append('<li class="list-item">' + toAdd + '<button>x</button></li>');
                }else{
                    alert('isi dengan benar')
                }              
            
            });                      
      
      
      $(document).on('click','button', function(){
        $(this).parent().toggleClass('strike').fadeOut('slow');    
      });

      $(document).on('click','.hapus', function(){
        $('.list-item').toggleClass('strike').fadeOut('slow');    
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
      
      $('ol').sortable();  
      
    }
);