const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// Counter 1: 0K+ to 50K+
let count1 = 0;
const pachas = document.getElementById("pachas");

const interval1 = setInterval(() => {
  count1++;
  pachas.textContent = count1 + "K+";

  if (count1 === 50) {
    clearInterval(interval1);
  }
}, 75);

// Counter 2: 0% to 95%
let count2 = 0;
const nintyFive = document.getElementById("ninty-five");

const interval2 = setInterval(() => {
  count2++;
  nintyFive.textContent = count2 + "%";

  if (count2 === 95) {
    clearInterval(interval2);
  }
}, 50);

// Counter 3: 0K+ to 200K+
let count3 = 0;
const doso = document.getElementById("doso");

const interval3 = setInterval(() => {
  count3++;
  doso.textContent = count3 + "K+";

  if (count3 === 200) {
    clearInterval(interval3);
  }
}, 25);

// Counter 4: 0% to 100%
let count4 = 0;
const so = document.getElementById("so");

const interval4 = setInterval(() => {
  count4++;
  so.textContent = count4 + "%";

  if (count4 === 100) {
    clearInterval(interval4);
  }
}, 50);

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


  const cursor = document.querySelector(".cursor-glow");

  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.pageX - 50}px, ${e.pageY - 50}px)`;
  });

let gradientAngle = 135;
        setInterval(() => {
            gradientAngle += 0.5;
            document.body.style.background = `linear-gradient(${gradientAngle}deg, #0a0a0a, #1a1a2e, #16213e)`;
        }, 100);

        const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
});

document.querySelectorAll(".list li").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
    })
);
window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loadingScreen').classList.add('hidden');
                
                setTimeout(() => {
                    triggerScrollAnimations();
                }, 500);
            }, 3000);
        });