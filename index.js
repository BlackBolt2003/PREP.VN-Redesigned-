// testimonial section animation:
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show') //applies animation when visible and shows it
        }
        else{
            entry.target.classList.remove('show'); //removes it when it is not visibile 
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el)=>observer.observe(el)); //observe all hidden elements.
// testimonial section animation end.