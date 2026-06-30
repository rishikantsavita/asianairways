// header toggle-bar
$(".toggle-bar").click(function () {
  $(".header-bottom").toggleClass("show");
  $(".media-close-icon").removeclass();
});

// $('.media-close-icon').click(function () {
//     $('.header-bottom').removeclass('show');
//     $('.nav ul').hide();
// });

document
  .querySelector(".media-close-icon")
  .addEventListener("click", function () {
    const navList = document.querySelector("nav ul");
    navList.style.display = "none"; // hide the ul
  });

// tab section
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active classes
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add active class to clicked button and matching content
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

// about us ka count main

new WOW().init();

var counted = 0;
$(window).scroll(function () {
  var oTop = $(".counter-main").offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $(".count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        },
      );
    });
    counted = 0;
  }
});

// fag page js code

let question = document.querySelectorAll(".question");

question.forEach((question) => {
  question.addEventListener("click", (event) => {
    const active = document.querySelector(".question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});

// footer js
// optional: dynamic year update
document.addEventListener("DOMContentLoaded", () => {
  const bottom = document.querySelector(".footer-bottom p");
  const year = new Date().getFullYear();
  bottom.textContent = `© ${year} Shine Airways. All rights reserved.`;
});

// ABOUT US PAGE JS START

// About Hero Counter Animation

const counters = document.querySelectorAll(".aa-stat-card h2");

counters.forEach((counter) => {
  let target = counter.innerText.replace("+", "").replace("M", "");
  let count = 0;

  let update = () => {
    count += target / 60;

    if (count < target) {
      counter.innerText =
        Math.floor(count) + (counter.innerText.includes("M") ? "M+" : "+");

      requestAnimationFrame(update);
    } else {
      counter.innerText = counter.innerText;
    }
  };

  update();
});

// ////////////////////

window.addEventListener("scroll", function () {
  const cards = document.querySelectorAll(".aa-mvv-card");

  cards.forEach((card) => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      card.classList.add("active");
    }
  });
});

// ///////////////////////

const whyCards = document.querySelectorAll(".aa-feature-card");

window.addEventListener("scroll", () => {
  whyCards.forEach((card) => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      card.classList.add("show");
    }
  });
});

// /////////////

const fleetNumbers = document.querySelectorAll(".aa-fleet-stat h3");

fleetNumbers.forEach((num) => {
  let target = parseInt(num.innerText);

  let count = 0;

  const updateCounter = () => {
    count += target / 80;

    if (count < target) {
      num.innerText = Math.floor(count) + "+";

      requestAnimationFrame(updateCounter);
    } else {
      num.innerText = target + "+";
    }
  };

  updateCounter();
});

// //////////////////////////////

const safeCards = document.querySelectorAll(".aa-safe-stat");

window.addEventListener("scroll", () => {
  safeCards.forEach((card) => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      card.classList.add("active");
    }
  });
});

// /////////////////////////

const destinationCards = document.querySelectorAll(".aa-dest-card");

window.addEventListener("scroll", () => {
  destinationCards.forEach((card) => {
    let top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});

// ////////////////////////////

const teamCards = document.querySelectorAll(".aa-team-card");

window.addEventListener("scroll", () => {
  teamCards.forEach((card) => {
    let top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      card.classList.add("show");
    }
  });
});

// /////////////////////

const awardCards = document.querySelectorAll(".aa-award-card");

window.addEventListener("scroll", () => {
  awardCards.forEach((card) => {
    let top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      card.classList.add("active");
    }
  });
});

// ///////////////////////////////

const roadmapCards = document.querySelectorAll(".aa-roadmap-card");

window.addEventListener("scroll", () => {
  roadmapCards.forEach((card) => {
    let top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      card.classList.add("active");
    }
  });
});

// ////////////////////////////////

// Newsletter Form

const newsForm = document.querySelector(".aa-news-form");

if (newsForm) {
  newsForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you for subscribing to Asian Airways updates.");

    this.reset();
  });
}

// services

gsap.from(".srv-title", {
  y: 80,
  opacity: 0,
  duration: 1,
});

gsap.from(".srv-desc", {
  y: 50,
  opacity: 0,
  delay: 0.3,
});

// ///////

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      item.classList.add("active");
    }
  });
});

const srvForm = document.querySelector(".srv-news-form");

if (srvForm) {
  srvForm.addEventListener(
    "submit",

    function (e) {
      e.preventDefault();

      alert("Thank you for subscribing to Asian Airways updates.");

      this.reset();
    },
  );
}

// clients

/* =========================
COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-count");

    const count = +counter.innerText.replace(/\D/g, "");

    const speed = 20;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);

      setTimeout(updateCounter, 50);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// terms page

window.addEventListener("scroll", () => {
  let hero = document.querySelector(".tc-plane");
  let value = window.scrollY;

  hero.style.transform = `translateX(${-value * 0.2}px)`;
});

const introCards = document.querySelectorAll(".tc-intro-card");

introCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.borderBottom = "4px solid #ffb400";
  });

  card.addEventListener("mouseleave", () => {
    card.style.borderBottom = "4px solid transparent";
  });
});

const usageCards = document.querySelectorAll(".usage-card");

usageCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 50px rgba(0,24,55,.15)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 35px rgba(0,0,0,.06)";
  });
});

const serviceCards = document.querySelectorAll(".srv-card");

serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 50px rgba(0,24,55,.12)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,.06)";
  });
});

const iprCards = document.querySelectorAll(".ipr-card");

iprCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.background = "#001837";
    card.style.color = "#fff";

    card.querySelector("h3").style.color = "#fff";
    card.querySelector("p").style.color = "#d8d8d8";
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "#f8f9fc";

    card.querySelector("h3").style.color = "#001837";
    card.querySelector("p").style.color = "#666";
  });
});

const dataCards = document.querySelectorAll(".data-card");

dataCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 45px rgba(0,24,55,.12)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 25px rgba(0,0,0,.05)";
  });
});

const liabilityCards = document.querySelectorAll(".liability-card");

liabilityCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.background = "#001837";
    card.querySelector("h3").style.color = "#fff";
    card.querySelector("p").style.color = "#d9dce3";
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "#f8fafc";
    card.querySelector("h3").style.color = "#001837";
    card.querySelector("p").style.color = "#666";
  });
});

const privacyCards = document.querySelectorAll(".privacy-card");

privacyCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 45px rgba(0,24,55,.12)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 25px rgba(0,0,0,.05)";
  });
});

const legalCards = document.querySelectorAll(".legal-card");

legalCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 45px rgba(0,24,55,.12)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});

const summaryCards = document.querySelectorAll(".summary-card");

summaryCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 50px rgba(0,24,55,.12)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 10px 25px rgba(0,0,0,.05)";
  });
});

// privacy policy page

window.addEventListener("mousemove", (e) => {
  const plane = document.querySelector(".pp-plane");

  let x = (window.innerWidth / 2 - e.clientX) / 60;
  let y = (window.innerHeight / 2 - e.clientY) / 60;

  plane.style.transform = `translate(${x}px,${y}px)`;
});

const timelineItems = document.querySelectorAll(".pp-box");

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0px)";
      }
    });
  },
  {
    threshold: 0.2,
  },
);

timelineItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(60px)";
  item.style.transition = ".8s ease";

  timelineObserver.observe(item);
});

const routeCards = document.querySelectorAll(".route-card");

const routeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

routeCards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(80px)";
  card.style.transition = ".8s ease";

  routeObserver.observe(card);
});

document.addEventListener("scroll", () => {
  routeCards.forEach((card) => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

const counters = document.querySelectorAll(".counter");

const startCounter = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");

    let count = 0;

    const update = () => {
      const increment = target / 80;

      if (count < target) {
        count += increment;

        counter.innerText = Math.ceil(count);

        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounter();

      counterObserver.disconnect();
    }
  });
});

counterObserver.observe(document.querySelector(".security-stats"));

const securityCards = document.querySelectorAll(".security-card");

securityCards.forEach((card) => {
  card.addEventListener("mousemove", () => {
    card.style.transform = "translateY(-10px) scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const title = item.querySelector(".faq-title");

  title.addEventListener("click", () => {
    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

const rightBoxes = document.querySelectorAll(".right-box");

window.addEventListener("scroll", () => {
  rightBoxes.forEach((box) => {
    const pos = box.getBoundingClientRect().top;

    if (pos < window.innerHeight - 100) {
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
    }
  });
});

rightBoxes.forEach((box) => {
  box.style.opacity = "0";
  box.style.transform = "translateY(50px)";
  box.style.transition = ".7s ease";
});

// faq section start

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".faqc");

  let sc = window.scrollY;

  hero.style.transform = `translateY(${sc * 0.15}px)`;
});

const faqCards = document.querySelectorAll('.faq-cat-card');

const faqObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('faq-show');
        }
    });
},{
    threshold:0.2
});

faqCards.forEach(card=>{
    faqObserver.observe(card);
});
 

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn = item.querySelector(".faq-btn");

    btn.addEventListener("click", () => {

        faqItems.forEach(faq => {
            if(faq !== item){
                faq.classList.remove("active");
            }
        });

        item.classList.toggle("active");

    });

});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const btn = item.querySelector(".faq-btn");

    btn.addEventListener("click", () => {

        faqItems.forEach(faq => {
            if(faq !== item){
                faq.classList.remove("active");
            }
        });

        item.classList.toggle("active");

    });

});

