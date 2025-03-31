const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
console.log(teamMembers)

const createMemberCard = (member) => {
  const card = `<div class="col-12 col-md-6 col-lg-4">
                  <div class="team-card d-flex mb-5">
                      <div class="card-image">
                          <img src="./assets-2/${member.img}" alt="${member.name}" class="img-card">
                      </div>
                      <div class="card-text text-sm-start lh-sm">
                          <h5 class="fw-bold pt-2">${member.name}</h5>
                          <div class="fw-light pb-2">${member.role}</div>
                          <div class="text-info">${member.email}</div>
                      </div>
                  </div>
                </div>`;

  document.getElementById('team-members').innerHTML += card;
}

for(let i = 0; i < teamMembers.length; i++) {
  createMemberCard(teamMembers[i]);
}
