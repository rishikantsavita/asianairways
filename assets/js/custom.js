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

const faqCards = document.querySelectorAll(".faq-cat-card");

const faqObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("faq-show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

faqCards.forEach((card) => {
  faqObserver.observe(card);
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-btn");

  btn.addEventListener("click", () => {
    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-btn");

  btn.addEventListener("click", () => {
    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

// blog page js

const blogHero = document.querySelector(".bloghero-image");

window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  blogHero.style.transform = `translate(${x}px,${y}px)`;
});

const featureSection = document.querySelector(".featblog-img");

window.addEventListener("scroll", () => {
  let value = window.scrollY * 0.05;

  featureSection.style.transform = `translateY(${value}px)`;
});

const newsBtns = document.querySelectorAll(".news-btn");

newsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    newsBtns.forEach((item) => item.classList.remove("active"));

    btn.classList.add("active");
  });
});

const destinationCards = document.querySelectorAll(".destcard");

destinationCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px)";
  });
});

const tipCards = document.querySelectorAll(".tips-card");

tipCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 25px 60px rgba(0,183,255,.15)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 15px 40px rgba(0,0,0,.05)";
  });
});

const vlogCards = document.querySelectorAll(".vlog-card");

vlogCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 25px 60px rgba(0,183,255,.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 15px 40px rgba(0,0,0,.05)";
  });
});

const categoryCounters = document.querySelectorAll(".cat-counter");

categoryCounters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.dataset.count;
    const current = +counter.innerText;

    const increment = Math.ceil(target / 80);

    if (current < target) {
      counter.innerText = current + increment;

      setTimeout(updateCounter, 25);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

const tags = document.querySelectorAll(".tag-item");

tags.forEach((tag) => {
  tag.addEventListener("mouseenter", () => {
    tag.style.boxShadow = "0 15px 40px rgba(0,183,255,.25)";
  });

  tag.addEventListener("mouseleave", () => {
    tag.style.boxShadow = "0 10px 25px rgba(0,0,0,.04)";
  });
});

const subscribeBox = document.querySelector(".subscribe-box");

window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  subscribeBox.style.transform = `translate(${x}px, ${y}px)`;
});

const blogCounters = document.querySelectorAll(".blog-counter");

blogCounters.forEach((counter) => {
  const runCounter = () => {
    const target = +counter.dataset.count;
    const current = +counter.innerText;

    const increment = Math.ceil(target / 100);

    if (current < target) {
      counter.innerText = current + increment;

      setTimeout(runCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  runCounter();
});

// destination page js

const heroImage = document.querySelector(".dhero-image");

window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 45;
  const y = (window.innerHeight / 2 - e.pageY) / 45;

  heroImage.style.transform = `translate(${x}px,${y}px)`;
});

const destinationCards = document.querySelectorAll(".popcard");

destinationCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 25px 60px rgba(0,183,255,.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 15px 40px rgba(0,0,0,.05)";
  });
});

const asiaCards = document.querySelectorAll(".asia-card");

asiaCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 25px 60px rgba(0,183,255,.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 15px 40px rgba(0,0,0,.05)";
  });
});

const europeCards = document.querySelectorAll(".eu-card");

europeCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
    card.style.transition = ".4s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px)";
  });
});

const meCards = document.querySelectorAll(".me-card");

meCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 25px 60px rgba(0,208,255,.20)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});

const beachCards = document.querySelectorAll(".beach-card");

beachCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 30px 70px rgba(0,191,255,.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 15px 40px rgba(0,0,0,.05)";
  });
});

const advCounters = document.querySelectorAll(".adv-counter");

advCounters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.dataset.count;
    const count = +counter.innerText;

    const speed = target / 80;

    if (count < target) {
      counter.innerText = Math.ceil(count + speed);

      setTimeout(updateCounter, 25);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

const packageCards = document.querySelectorAll(".pkg-card");

packageCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 25px 60px rgba(0,191,255,.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 15px 45px rgba(0,0,0,.05)";
  });
});

const planSteps = document.querySelectorAll(".plan-content");

window.addEventListener("scroll", () => {
  planSteps.forEach((step) => {
    const top = step.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {
      step.style.opacity = "1";
      step.style.transform = "translateY(0)";
      step.style.transition = ".8s";
    }
  });
});

planSteps.forEach((step) => {
  step.style.opacity = "0";
  step.style.transform = "translateY(60px)";
});

const gCounters = document.querySelectorAll(".gcta-counter");

gCounters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = Math.ceil(target / 80);

    if (count < target) {
      counter.innerText = count + increment;

      setTimeout(updateCounter, 25);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// faq section js start  again

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".faqc");

  let sc = window.scrollY;

  hero.style.transform = `translateY(${sc * 0.15}px)`;
});

const faqCards = document.querySelectorAll(".faq-cat-card");

const faqObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("faq-show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

faqCards.forEach((card) => {
  faqObserver.observe(card);
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-btn");

  btn.addEventListener("click", () => {
    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

const refundItems = document.querySelectorAll(".refund-item");

refundItems.forEach((item) => {
  const btn = item.querySelector(".refund-btn");

  btn.addEventListener("click", () => {
    refundItems.forEach((box) => {
      if (box !== item) {
        box.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

const visaFaqs = document.querySelectorAll(".visa-faq-card");

visaFaqs.forEach((card) => {
  const btn = card.querySelector(".visa-faq-btn");

  btn.addEventListener("click", () => {
    visaFaqs.forEach((item) => {
      if (item !== card) {
        item.classList.remove("active");
      }
    });

    card.classList.toggle("active");
  });
});

const hpFaqCards = document.querySelectorAll(".hpfaq-card");

hpFaqCards.forEach((card) => {
  const btn = card.querySelector(".hpfaq-btn");

  btn.addEventListener("click", () => {
    hpFaqCards.forEach((item) => {
      if (item !== card) {
        item.classList.remove("active");
      }
    });

    card.classList.toggle("active");
  });
});

const insFaqCards = document.querySelectorAll(".insfaq-card");

insFaqCards.forEach((card) => {
  const btn = card.querySelector(".insfaq-btn");

  btn.addEventListener("click", () => {
    insFaqCards.forEach((item) => {
      if (item !== card) {
        item.classList.remove("active");
      }
    });

    card.classList.toggle("active");
  });
});

const bagFaqCards = document.querySelectorAll(".bagfaq-card");

bagFaqCards.forEach((card) => {
  const btn = card.querySelector(".bagfaq-btn");

  btn.addEventListener("click", () => {
    bagFaqCards.forEach((item) => {
      if (item !== card) {
        item.classList.remove("active");
      }
    });

    card.classList.toggle("active");
  });
});

const corFaqCards = document.querySelectorAll(".corfaq-card");

corFaqCards.forEach((card) => {
  const btn = card.querySelector(".corfaq-btn");

  btn.addEventListener("click", () => {
    corFaqCards.forEach((item) => {
      if (item !== card) {
        item.classList.remove("active");
      }
    });

    card.classList.toggle("active");
  });
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-count");
    const count = +counter.innerText;

    const speed = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + speed);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

// members plan

const mCounter = document.querySelectorAll(".mcounter");

mCounter.forEach((counter) => {
  const update = () => {
    const target = +counter.dataset.count;

    const count = +counter.innerText;

    const inc = Math.ceil(target / 120);

    if (count < target) {
      counter.innerText = count + inc;

      setTimeout(update, 15);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

const benefitCards = document.querySelectorAll(".mbf-card");

benefitCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 25px 60px rgba(0,140,255,.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 15px 40px rgba(0,0,0,.05)";
  });
});

const plans = document.querySelectorAll(".mpln-card");

plans.forEach((plan) => {
  plan.addEventListener("mouseenter", () => {
    plan.style.boxShadow = "0 25px 70px rgba(0,140,255,.18)";
  });

  plan.addEventListener("mouseleave", () => {
    plan.style.boxShadow = "0 18px 45px rgba(0,0,0,.05)";
  });
});

const privilegeCards = document.querySelectorAll(".priv-card");

privilegeCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = `all .6s ease ${index * 0.15}s`;
});

const privilegeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 },
);

privilegeCards.forEach((card) => {
  privilegeObserver.observe(card);
});

const privilegeCards = document.querySelectorAll(".priv-card");

privilegeCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = `all .6s ease ${index * 0.15}s`;
});

const privilegeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 },
);

privilegeCards.forEach((card) => {
  privilegeObserver.observe(card);
});

const workItems = document.querySelectorAll(".mw-item");

const workObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 },
);

workItems.forEach((item, index) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(60px)";
  item.style.transition = `all .7s ease ${index * 0.15}s`;

  workObserver.observe(item);
});

const offerCards = document.querySelectorAll(".mof-card");

offerCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = `all .7s ease ${index * 0.12}s`;
});

const offerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 },
);

offerCards.forEach((card) => {
  offerObserver.observe(card);
});

const slider = document.querySelector(".mts-track");

slider.addEventListener("mouseenter", () => {
  slider.style.animationPlayState = "paused";
});

slider.addEventListener("mouseleave", () => {
  slider.style.animationPlayState = "running";
});

/* FAQ */

document.querySelectorAll(".faq-head").forEach((head) => {
  head.onclick = () => {
    const item = head.parentElement;

    document.querySelectorAll(".faq-item").forEach((f) => {
      if (f !== item) {
        f.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  };
});

/* Counter */

const nums = document.querySelectorAll(".count");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;

        const target = +counter.dataset.num;

        let count = 0;

        const inc = Math.ceil(target / 80);

        const update = () => {
          count += inc;

          if (count >= target) {
            counter.innerText = target;
          } else {
            counter.innerText = count;

            requestAnimationFrame(update);
          }
        };

        update();

        observer.unobserve(counter);
      }
    });
  },
  { threshold: 0.4 },
);

nums.forEach((num) => observer.observe(num));

const trustBoxes = document.querySelectorAll(".trust-box");

const trustObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 },
);

trustBoxes.forEach((box, index) => {
  box.style.opacity = "0";
  box.style.transform = "translateY(40px)";
  box.style.transition = `all .7s ease ${index * 0.15}s`;

  trustObserver.observe(box);
});

const certCard = document.querySelector(".cert-card");

window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  certCard.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
});

window.addEventListener("mouseleave", () => {
  certCard.style.transform = "rotateX(0) rotateY(0)";
});

const gccItems = document.querySelectorAll(".gcc-step, .cert-box");

const gccObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 },
);

gccItems.forEach((item, index) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(50px)";
  item.style.transition = `all .7s ease ${index * 0.12}s`;

  gccObserver.observe(item);
});

const awardCards = document.querySelectorAll(".award-item");

const awardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateX(0)";
      }
    });
  },
  { threshold: 0.2 },
);

awardCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateX(80px)";
  card.style.transition = `all .7s ease ${index * 0.15}s`;

  awardObserver.observe(card);
});

const bars = document.querySelectorAll(".progress-bar span");

const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const span = entry.target;
        const value = span.getAttribute("style").match(/\d+/)[0];

        span.style.width = value + "%";

        progressObserver.unobserve(span);
      }
    });
  },
  { threshold: 0.5 },
);

bars.forEach((bar) => {
  bar.style.width = "0";

  progressObserver.observe(bar);
});

/* Counter Animation */

const gstCounter = document.querySelectorAll(".gst-count");

const gstObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;

        const target = +el.dataset.count;

        let num = 0;

        const update = () => {
          num += Math.ceil(target / 80);

          if (num >= target) {
            el.innerHTML = target + "+";
          } else {
            el.innerHTML = num + "+";

            requestAnimationFrame(update);
          }
        };

        update();

        gstObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 },
);

gstCounter.forEach((counter) => {
  gstObserver.observe(counter);
});

/* Reveal Animation */

const gstCards = document.querySelectorAll(
  ".gst-card,.trust-left,.counter-card",
);

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

gstCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = `all .7s ease ${index * 0.12}s`;

  reveal.observe(card);
});

const certBox = document.querySelector(".certificate-box");

window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 45;
  const y = (window.innerHeight / 2 - e.clientY) / 45;

  certBox.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
});

window.addEventListener("mouseleave", () => {
  certBox.style.transform = "rotateX(0) rotateY(0)";
});