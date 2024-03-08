
const sponsorDic = [
  {
    img: "./logos/cyberbae.png",
    // description: "include brief description of sponsor"
  },
  {
    img: "./logos/nucamp.png",
    // description: "include brief description of sponsor"

  },
]

const perkDic = [
  {
    img: "./images/check.png",
    title: "Brand Development",
    description: "We provide afordable cyber security courses to help you upskil for your next career pivot"
  },
  {
    img: "./images/check.png",
    title: "Logo Creation",
    description: "We're more than an organization. We're a community of motivated professions here to help you advance your career"

  },
  {
    img: "./images/check.png",
    title: "Competitive Proposals",
    description: "Gain early access to our database of high-paying competitive proposals."
  },
  {
    img: "./images/check.png",
    title: "Web Design"
  },
  {
    img: "./images/check.png",
    title: "Website Maintanence and Support"
  },
  {
    img: "./images/check.png",
    title: "Business Consultancy"
  },
  {
    img: "./images/check.png",
    title: "Social Media Management"
  },
  {
    img: "./images/check.png",
    title: "SEO Management"
  },
  {
    img: "./images/check.png",
    title: "Graphic Design"
  },
  {
    img: "./images/check.png",
    title: "Industry-shaping publications"
  },

];


// this is for the events
const eventDic = [

  {
    title: "Land Your Dream Job: A Masterclass in Job Hunting Success",
    description: "This immersive masterclass equips you with the winning strategies to navigate the modern job market and land the role you deserve.",
    date: new Date(2024, 2, 28),
    rsvpLink: "https://www.eventbrite.com/e/853650400327?aff=oddtdtcreator",
    img: "./images/events/job_hunting.png"
  },
  // {
  //   title: "Front-End Development: Build Your Portfolio with Blogger",
  //   description: "Learn the basics of HTML, CSS, and JavaScript in this interactive workshop.",
  //   date: new Date(2024, 3, 6), 
  //   rsvpLink: "https://example.com/rsvp/coding-workshop",
  //   img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE-OXdp-Aah1C_L5hKlk8KQHHSFHNHEZuoQEk9Rb5LEJncc0rgVXeX-AwLP0U7Zr79pIQdDShltnjWQghbojCb0ThjGFsv_J9CFsQc-KsqCQEmrSYf3g-FR0jMKjSrTWXykYIhrOuJNLQjYLK1yeBobKxyMnhZbRKjsaGmpvUX7xc3Xuk/s1600/Beige%20Business%20Brand%20Color%20Wheel%20Palette%20Facebook%20Post%20(7).png"
  // },
];

addEventListener("DOMContentLoaded", (ev) => {

  const sponsorContainer = document.getElementById("sponsor_list")
  function getSponsors() {
    if (sponsorContainer != null) {
      sponsorDic.forEach((event) => {
        const sponsorElement = document.createElement("div")
        sponsorElement.classList.add("sponsor")
        sponsorElement.innerHTML = `
          <img src="${event.img}">
        `

        sponsorContainer.appendChild(sponsorElement)

      })
    }
  }
  getSponsors()

  //perks

  const perkContainer = document.getElementById("perks")


  function isSingleDigit(input) {
    // console.log(input)
    if (input < 10) {
      return `0${input}`
    }
    return input
  }

  function getPerks() {
    let count = 1
    if (perkContainer != null) {
      perkDic.forEach((event) => {
        const perkCard = document.createElement("div");
        perkCard.classList.add("card");
        perkCard.classList.add("event-description");
        perkCard.classList.add("box")
        count = isSingleDigit(count)
        perkCard.innerHTML = `
        <img src=${event.img}>
        <div>
        <h1>${count}</h1>
        <h3><a href="">${event.title}</a></h3>
        </div>
       `;
        count++

        perkContainer.appendChild(perkCard)

      });
    }
  }
  getPerks();

  const eventsContainer = document.getElementById("event-cards");
  const eventsPagination = document.getElementById("events-pagination"); // Add a container for pagination buttons
  // Filter events to display only upcoming ones
  const upcomingEvents = eventDic.filter(event => event.date >= new Date());

  let currentPage = 1;
  const eventsPerPage = 2;

  navbar = document.getElementsByClassName("nav_header")

  Array.from(navbar).forEach(element => {
    if (window.scrollY === 0 && (window.location.pathname === "/")) {
      element.style.backgroundColor = "transparent";
      element.style.marginTop = "5%";
    } else {

      element.style.backgroundColor = "#30152E";
    }

    document.addEventListener('scroll', () => {
      if (window.scrollY === 0 && (window.location.pathname === "/")) {
        element.style.backgroundColor = "transparent";
        element.style.marginTop = "5%";
      }
      else {
        element.style.backgroundColor = "#30152E";
        element.style.marginTop = "0%";
      }
    });

  });

  // Create event card elements for the current page
  function displayPage(pageNumber) {
    eventsContainer.innerHTML = ""; // Clear the container for new events

    const startIndex = (pageNumber - 1) * eventsPerPage;
    const endIndex = Math.min(startIndex + eventsPerPage, upcomingEvents.length);

    upcomingEvents.slice(startIndex, endIndex).forEach(event => {
      const eventCard = document.createElement("div");
      eventCard.classList.add("event-card");
      const options = { month: "short" }; // Use "short" for 3-letter abbreviations
      const monthAbbr = event.date.toLocaleDateString("en-US", options).slice(0, 3);


      // Add event title, description, and RSVP button
      eventCard.innerHTML = `
      <div class="date"><h3>${monthAbbr}</h3><h1>${event.date.getDate()}</h1></div>
      <div class="event-description">

        <picture style="background:black"><img loading="lazy" src=${event.img}></picture>
        <div class="text">
          <h4 class="post_link"><a href="#">${event.title}</a></h4>
          <p>${event.description}</p>
        </div>
      </div>
      <a href="${event.rsvpLink}" class="button ">RSVP</a>
    `;

      eventsContainer.appendChild(eventCard);
    });
  }

  // Display the initial page
  displayPage(currentPage);

  // Create pagination buttons
  function createPaginationButtons() {
    const numPages = Math.ceil(upcomingEvents.length / eventsPerPage);

    eventsPagination.innerHTML = ""; // Clear previous buttons

    // Create previous arrow button (if needed)
    if (currentPage > 1) {
      const prevButton = document.createElement("button");
      prevButton.textContent = "Previous"; // Or use an arrow icon
      prevButton.addEventListener("click", () => {
        currentPage--;
        displayPage(currentPage);
      });
      eventsPagination.appendChild(prevButton);
    }

    // Create page number buttons
    for (let i = 1; i <= numPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.addEventListener("click", () => {
        currentPage = i;
        displayPage(i);
      });
      eventsPagination.appendChild(button);
    }

    // Create next arrow button (if needed)
    if (currentPage < numPages) {
      const nextButton = document.createElement("button");
      nextButton.textContent = "Next"; // Or use an arrow icon
      nextButton.addEventListener("click", () => {
        currentPage++;
        displayPage(currentPage);
      });
      eventsPagination.appendChild(nextButton);
    }
  }

  // Create page number buttons
  for (let i = 1; i <= numPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
      let nextButton = document.getElementById("nextBtn")
      if (currentPage < numPages && nextButton.style.visibility == "hidden") {
        nextButton.style.visibility = "visible"
      } else {
        nextButton.style.visibility = "hidden"
      }
      currentPage = i;
      displayPage(i);
    });
    eventsPagination.appendChild(button);
  }

  // Create next arrow button (if needed)
  if (currentPage < numPages) {
    const nextButton = document.createElement("button");
    nextButton.setAttribute("id", "nextBtn")
    const backButton = document.createElement("button")
    nextButton.textContent = ">"; // Or use an arrow icon
    backButton.textContent = "<"
    nextButton.addEventListener("click", () => {
      currentPage++;
      displayPage(currentPage, numPages);
      if (currentPage >= numPages) {
        nextButton.style.visibility = "hidden"
      }
    });

    backButton.addEventListener("click", () => {
      currentPage--;
      displayPage(currentPage);
      if (currentPage <= numPages[0]) {
        backButton.style.display = "none"
      }
    });
    eventsPagination.appendChild(nextButton);
  }
})