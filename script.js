function locomotiveAnimation()
{
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}

locomotiveAnimation();

function cursorAnimation(){    
  Shery.mouseFollower();

  Shery.makeMagnet(".logo svg, .link h4,button,.content1 button" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}
cursorAnimation();

gsap.to(".navbar .link",{
    y:-200,
    scrollTrigger:{
        trigger:".video",
        scroller:".main",
        // markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:true,
    }
})

gsap.to(".page1 .video",{
    filter:"blur(50px)",
    width:"80%",
    scrollTrigger:{
        trigger:".video",
        scroller:".main",
        // markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:5,
    }
})

gsap.to(".navbar i,.navbar img",{
    display:"block",
mixBlendMode: "difference",
    scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        // markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:true,
    }
})

function textAnimationPage1(){
  var h1Text=document.querySelector(".page1 h1").textContent;
  var splittedText=h1Text.split("");
  var clutter='';
  splittedText.forEach(function(val){
    clutter+=`<span>${val}</span>`;
  })
  document.querySelector(".page1 h1").innerHTML=clutter;

  gsap.to(".page1 h1 span",{
    opacity:1,
    stagger:.1,
    // yoyo:true,
    repeat:-1,
  })
}
textAnimationPage1()


  
function canvas2(){
  const canvas = document.querySelector(".page4-div1>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_0.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_1.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_2.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_3.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_4.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_5.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_6.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_7.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_8.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_9.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_10.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_11.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_12.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_13.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_14.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_15.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_16.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_17.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_18.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_19.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_20.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_21.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_22.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_23.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_24.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_25.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_26.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_27.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_28.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_29.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_30.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_31.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_32.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_33.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_34.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_35.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_36.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_37.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_38.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_39.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_40.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_41.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_42.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_43.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_44.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_45.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_46.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_47.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_48.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_49.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_50.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_51.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_52.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_53.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_54.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_55.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_56.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_57.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_58.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_59.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_60.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_61.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_62.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_63.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_64.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_65.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_66.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_67.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_68.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_69.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_70.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_71.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_72.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_73.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_74.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_75.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_76.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_77.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_78.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_79.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_80.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_81.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_82.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_83.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_84.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_85.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_86.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_87.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_88.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_89.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_90.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_91.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_92.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_93.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_94.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_95.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_96.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_97.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_98.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_99.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_100.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_101.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_102.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_103.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_104.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_105.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_106.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_107.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_108.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_109.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_110.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_111.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_112.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_113.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_114.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_115.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_116.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_117.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_118.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_119.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_120.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_121.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_122.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_123.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_124.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_125.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_126.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_127.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_128.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_129.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_130.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_131.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_132.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_133.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_134.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_135.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_136.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_137.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_138.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_139.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_140.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_141.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_142.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_143.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_144.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_145.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_146.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_147.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_148.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_149.webp
https://www.brain.space/wp-content/themes/brain.space/assets/helmet_lottie/webp/img_150.webp
`
return data.split("\n")[index];
}

const frameCount = 150;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `.page4-div1`,
  start: `top top`,
  end: `250% top`,
  scroller: `.main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: ".page4-div1",
pin: true,
scroller: `.main`,
start: `top top`,
end: `250% top`,
});
}
canvas2()

gsap.to(".page5 .content",{
  transform:"translateX(-150%)",
  duration:2,
  ease:"ease-in",
  scrollTrigger:{
    trigger:".page5",
    scroller:".main",
    // markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:true,
    pin:true,
  }
})

