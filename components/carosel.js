// setsup the carosel
$(document).ready(function() {
  $(".carosel").slick({
    accessibilty: true,
    autoplay: true,
    autoplaySpeed: 1250,
    fade: true,
    pauseOnHover: true
  });
});

// Select the teammember class so that we may effect it
let member = document.querySelectorAll(".teamMember");

// An array of socail data to be used for clickable buttons
let socialData = {
  amanda: [
    "https://github.com/amlane",
    "https://www.linkedin.com/in/amanda-lane-40264417b/"
  ],
  matthew: [
    "https://github.com/moddamatt",
    "https://www.linkedin.com/in/mattmorganlewis/"
  ],
  javontay: [
    "https://github.com/javontaymcelroy",
    "https://www.linkedin.com/in/javontay-mcelroy-663b81bb/"
  ],
  alex: [
    "https://github.com/AlexxanderP",
    "https://www.linkedin.com/in/alexander-piroumian/"
  ],
  will: ["https://github.com/brellin", "https://www.linkedin.com/in/brellin/"],
  curtis: [
    "https://github.com/Chubbard022",
    "https://www.linkedin.com/in/curtis-hubbard-945764158/"
  ],
  matt: [
    "https://github.com/mattwright42",
    "https://www.linkedin.com/in/mattbwright/"
  ]
};

class People {
  constructor(person) {
    this.person = person;
    this.data = this.person.dataset.person;
    this.person.style.background = `linear-gradient( rgba(0, 0, 0, 0.25), rgba(50, 50, 50, 0.45)), url('assets/headshots/${
      this.data
    }.jpg') scroll no-repeat center / contain`;
  }
}

class Plinks extends People {
  constructor(person) {
    super(person);
    this.person = person;
    this.name = this.person.querySelector("h3").innerText;
    this.position = this.person.querySelector("h4").innerText;
    this.id = this.person.id;
    // GitHub
    this.gh = document.createElement("a");
    this.gh.href = `${socialData[this.id][0]}`;
    let git = document.createElement("img");
    git.src = "assets/gh.png";
    git.classList.add("git");
    this.gh.appendChild(git);
    // LinkedIn
    this.in = document.createElement("a");
    this.in.href = `${socialData[this.id][1]}`;
    let linkedIn = document.createElement("img");
    linkedIn.src = "assets/in.png";
    linkedIn.classList.add("in");
    this.in.appendChild(linkedIn);
    // Add to .person
    this.person.prepend(this.in);
    this.person.prepend(this.gh);
  }
}

member.forEach(mem => new People(mem));
member.forEach(mem => new Plinks(mem));
