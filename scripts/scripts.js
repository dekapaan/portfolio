function togglemenu() {
  document.getElementsByClassName("myMenu")[0].classList.toggle("show-menu");
}

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
];

function newCard(card) {
  let newCard = `
  <div class="project ${card.class}" techStack=${card.techStack}>
    <p class="project-heading">${card.heading}</p>
    <p class="project-tool">${card.techStack}</p>
    <p class="project-description">
      ${card.description}
    </p>
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
}

displayCards();

function filterProjects(category) {
  let projects = document.getElementsByClassName("project");
  if (category == "All") {
    for (project of projects) {
      project.style.display = "block";
    }
    return;
  }
  for (project of projects) {
    project.style.display = "none";
  }
  let selected = document.querySelectorAll(`[techStack='${category}']`);
  console.log(selected);
  for (project of selected) {
    project.style.display = "block";
  }
}
