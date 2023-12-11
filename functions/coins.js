
// 1
document.addEventListener("DOMContentLoaded", function(){
    const choseCoinDiv = document.getElementById("chose-coin-svg-1");
    const fCoin = document.getElementById("front-coin-1");
    const cStars = document.getElementById("coin-stars-1");
    const sCoin = document.getElementById("side-coin-1");
    const sCoinLine = document.getElementById("coin-shine-line-g-1");
    let startAni = false;
    choseCoinDiv.addEventListener('mouseover', function(){
        startAni = true;
        mOverAni(); // Trigger the animation here
    });

    choseCoinDiv.addEventListener('mouseleave', function(){
        startAni = false;
        mOverAni(); // Revert to default styles here
    });
    choseCoinDiv.addEventListener('click', function(){
        window.open("https://newmatch19.com/case/"); //link
    })
    function mOverAni(){
        if(startAni){
            fCoin.style.display = "none";
            sCoin.style.display = "block";
            sCoin.classList.add("chosed-flow");
            cStars.style.display = "block";
            cStars.classList.add("grow-star");
            sCoinLine.classList.add("coin-shine");
        } else {
            fCoin.style.display = "block";
            sCoin.style.display = "none";
            sCoin.classList.remove("chosed-flow");
            cStars.style.display = "none";
            cStars.classList.remove("grow-star");
            sCoinLine.classList.remove("coin-shine");
        }
    };
});

// 2
document.addEventListener("DOMContentLoaded", function(){
    // 2
    const choseCoinDiv2 = document.getElementById("chose-coin-svg-2");
    const fCoin2= document.getElementById("front-coin-2");
    const cStars2 = document.getElementById("coin-stars-2");
    const sCoin2 = document.getElementById("side-coin-2");
    const sCoinLine2 = document.getElementById("coin-shine-line-g-2");
    let startAni = false;
    choseCoinDiv2.addEventListener('mouseover', function(){
        startAni = true;
        mOverAni(); // Trigger the animation here
    });
    choseCoinDiv2.addEventListener('mouseleave', function(){
        startAni = false;
        mOverAni(); // Revert to default styles here
    });
    choseCoinDiv2.addEventListener('click', function(){
        window.open("https://newmatch19.com/case/"); //link
    })
    function mOverAni(){
        if(startAni){
            fCoin2.style.display = "none";
            sCoin2.style.display = "block";
            sCoin2.classList.add("chosed-flow");
            cStars2.style.display = "block";
            cStars2.classList.add("grow-star");
            sCoinLine2.classList.add("coin-shine");
        } else {
            fCoin2.style.display = "block";
            sCoin2.style.display = "none";
            sCoin2.classList.remove("chosed-flow");
            cStars2.style.display = "none";
            cStars2.classList.remove("grow-star");
            sCoinLine2.classList.remove("coin-shine");
        }
    };
});

// 3
document.addEventListener("DOMContentLoaded", function(){
    // 3
    const choseCoinDiv3 = document.getElementById("chose-coin-svg-3");
    const fCoin3= document.getElementById("front-coin-3");
    const cStars3 = document.getElementById("coin-stars-3");
    const sCoin3 = document.getElementById("side-coin-3");
    const sCoinLine3 = document.getElementById("coin-shine-line-g-3");
    let startAni = false;
    choseCoinDiv3.addEventListener('mouseover', function(){
        startAni = true;
        mOverAni(); // Trigger the animation here
    });
    choseCoinDiv3.addEventListener('mouseleave', function(){
        startAni = false;
        mOverAni(); // Revert to default styles here
    });
    choseCoinDiv3.addEventListener('click', function(){
        window.open("https://newmatch19.com/case/"); //link
    })
    function mOverAni(){
        if(startAni){
            fCoin3.style.display = "none";
            sCoin3.style.display = "block";
            sCoin3.classList.add("chosed-flow");
            cStars3.style.display = "block";
            cStars3.classList.add("grow-star");
            sCoinLine3.classList.add("coin-shine");
        } else {
            fCoin3.style.display = "block";
            sCoin3.style.display = "none";
            sCoin3.classList.remove("chosed-flow");
            cStars3.style.display = "none";
            cStars3.classList.remove("grow-star");
            sCoinLine3.classList.remove("coin-shine");
        }
    };
});
