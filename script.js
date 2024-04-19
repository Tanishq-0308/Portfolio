const crsr=document.getElementById('cursor');
const crsrBlr=document.getElementById('cursor-blr');
document.addEventListener("mousemove",function(detss){
    crsr.style.left=detss.x+"px";
    crsr.style.top=detss.y+"px";
    crsrBlr.style.left=detss.x - 150+"px";
    crsrBlr.style.top=detss.y- 150+"px";
})
var head=document.querySelectorAll('#nav a');
head.forEach(function(elem){
    elem.addEventListener('mouseenter',()=>{
        crsr.style.scale=3,
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent"
    })

    elem.addEventListener('mouseleave',()=>{
        crsr.style.scale=1,
        crsr.style.border="0px solid #95c11e",
        crsr.style.backgroundColor="#95c11e"
    })
})
gsap.to('#nav',{
    color:"black",
    backgroundColor:'white',
    duration:0.5,
    scrollTrigger:{
      trigger:"#nav",
      scroller:"body",
      start:"top -10%",
      end:"top -11%",
      scrub:1
    }
  })
  gsap.from(".proj-2",{
    y:50,
    opacity:0,
    duration:2.5,
    stagger:0.7,
    scrollTrigger:{
        trigger:".proj-2",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})