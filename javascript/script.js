// script start
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.accordion-content')[1].style.height = document.querySelectorAll('.accordion-content')[1].scrollHeight + 'px';
    document.querySelectorAll('.accordion-content')[1].style.margin='30px 0';
    document.querySelectorAll('.accordion-content')[1].previousElementSibling.firstElementChild.textContent='-';
    document.querySelectorAll('.accordion-heading').forEach(el =>{
        el.addEventListener('click',(event)=>{
            document.querySelectorAll('.accordion-content').forEach(el =>{
                el.style.height = null;
                el.style.margin='0';
                el.previousElementSibling.firstElementChild.textContent='+';
            })
            if(el.nextElementSibling.style.height){
                el.firstElementChild.textContent='+';
                el.nextElementSibling.style.height = null;
                el.nextElementSibling.style.margin='0';
            }else{
                el.firstElementChild.textContent='-';
                el.nextElementSibling.style.height = el.nextElementSibling.scrollHeight + 'px';
                el.nextElementSibling.style.margin='30px 0';
            }
        })
    })  
    window.addEventListener('resize',()=>{
        document.querySelectorAll('.accordion-content').forEach(el =>{
            if(el.style.height){
                el.style.height = '100%';   
            }
        })
    })
})
// script end