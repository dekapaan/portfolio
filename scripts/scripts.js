window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("hide");
});

function togglemenu() {
  document.querySelectorAll(".nav-container").forEach((item) => {
    item.classList.toggle("show-menu");
  });
  document.querySelectorAll(".nav").forEach((item) => {
    item.classList.toggle("show-menu");
  });
  document.querySelector(".navbutton").classList.toggle("show-menu");
}

document.querySelector(".navbutton").addEventListener("mouseover", () => {
  document.querySelector(".bar-top").classList.add("move");
  document.querySelector(".bar-middle").classList.add("move");
  document.querySelector(".bar-bottom").classList.add("move");
});

document.querySelector(".navbutton").addEventListener("mouseout", () => {
  document.querySelector(".bar-top").classList.remove("move");
  document.querySelector(".bar-middle").classList.remove("move");
  document.querySelector(".bar-bottom").classList.remove("move");
});

let cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
  cursor.style.transform = "translate(-50%, -50%)";
});

window.addEventListener("mouseover", function () {
  cursor.style.opacity = 1;
});

window.addEventListener("mouseout", function () {
  cursor.style.opacity = 0;
});

let links = document.querySelectorAll("a");
let filters = document.querySelectorAll(".filter");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    cursor.classList.add("active");
  });
  button.addEventListener("mouseout", () => {
    cursor.classList.remove("active");
  });
});

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.classList.add("active");
  });
  link.addEventListener("mouseout", () => {
    cursor.classList.remove("active");
  });
});

filters.forEach((filter) => {
  filter.addEventListener("mouseover", () => {
    cursor.classList.add("active");
  });
  filter.addEventListener("mouseout", () => {
    cursor.classList.remove("active");
  });
});

let projects = [
  {
    heading: "Testimonial Slider",
    class: "project1",
    techStack: "HTML/CSS",
    description: "Features responsive, minimilist slider for testimonials.",
    liveURL: "https://frosty-hugle-7920c4.netlify.app/",
    githubURL: "https://github.com/dekapaan/testimonial-slider",
  },
  {
    heading: "Timeline",
    class: "project2",
    techStack: "HTML/CSS",
    description: "Timeline which features experience information cards.",
    liveURL: "https://competent-goodall-31004c.netlify.app/",
    githubURL: "https://github.com/dekapaan/timeline",
  },
  {
    heading: "Contact Form",
    class: "project3",
    techStack: "HTML/CSS",
    description:
      "Contact form made with HTML/CSS. It sends submissions to a server and the owner gets a email notification",
    liveURL: "https://infallible-dijkstra-571a0d.netlify.app/",
    githubURL: "https://github.com/dekapaan/contact-form",
  },
  {
    heading: "Rock-Paper-Scissors",
    class: "project4",
    techStack: "PYTHON",
    description:
      "Simple rock paper scissors game. Player is put against the computer and allows as many retries as desired",
    liveURL: "https://replit.com/@dekapaan/python-rock-paper-scissors#main.py",
    githubURL: "https://github.com/dekapaan/python-rock-paper-scissors",
  },
  {
    heading: "SA-ID-Processor",
    class: "project5",
    techStack: "PYTHON",
    description:
      "Takes input of user in the form of an ID number. It is then processed to output date of birth, gender and citizenship status",
    liveURL: "https://replit.com/@dekapaan/python-SA-ID#main.py",
    githubURL: "https://github.com/dekapaan/python-SA-ID",
  },
  {
    heading: "BMI Calculator",
    class: "project6",
    techStack: "PYTHON",
    description:
      "Program made with tkinter module to calculate Body Mass Index and Ideal Body Mass Index. It then tells you what category you fall under.",
    liveURL: "https://replit.com/join/oieqvhuu-dekapaan",
    githubURL: "https://github.com/dekapaan/python-BMI-calculator",
  },
  {
    heading: "Pokemon Cards",
    class: "project7",
    techStack: "Javascript",
    description:
      " A site that has clickable pokeballs that transform into cards with the respective pokemon's details. The site also has next, previous and search functionality",
    liveURL: "https://my-pokecards.netlify.app/",
    githubURL: "https://github.com/dekapaan/Pokemon-cards",
  },
  {
    heading: "Calculator",
    class: "project8",
    techStack: "Javascript",
    description: "Simple calculator made with HTML, CSS and Javascript",
    liveURL: "https://silly-almeida-c486f6.netlify.app/",
    githubURL: "https://github.com/dekapaan/javascript-calculator",
  },
];

function newCard(card) {
  let newCard = `
  <div class="project ${card.class} fade" techStack=${card.techStack}>
    <div>
    <p class="project-heading">${card.heading}</p>
    <p class="project-tool">${card.techStack}</p>
    <p class="project-description">
      ${card.description}
    </p>
    </div> 
    <div class="project-buttons">
      <a href=${card.liveURL} target="_blank"
        >Live</a
      ><a
        href=${card.githubURL}
        target="_blank"
        >Github</a
      >
    </div>
  </div>
  `;

  return newCard;
}

function displayCards() {
  let container = document.querySelector(".projects-container");
  for (project of projects) {
    let card = newCard(project);
    container.innerHTML += card;
  }
  let links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      cursor.classList.add("active");
    });
    link.addEventListener("mouseout", () => {
      cursor.classList.remove("active");
    });
  });
}

displayCards();

function filterProjects(category) {
  let projects = document.getElementsByClassName("project");
  if (category == "All") {
    for (project of projects) {
      project.style.display = "flex";
      let fade = document.querySelectorAll(".fade");
      fade.forEach((n) => {
        if (isInViewport(n)) {
          n.classList.add("active");
        }
      });
    }
    return;
  }
  for (project of projects) {
    project.style.display = "none";
  }
  let selected = document.querySelectorAll(`[techStack='${category}']`);
  console.log(selected);
  for (project of selected) {
    project.style.display = "flex";
    let fade = document.querySelectorAll(".fade");
    fade.forEach((n) => {
      if (isInViewport(n)) {
        n.classList.add("active");
      }
    });
  }
}
