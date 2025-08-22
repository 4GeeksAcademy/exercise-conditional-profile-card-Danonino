import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console

  const defaults = {
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    name: "Lucy",
    lastName: "Boilett",
    role: "Web Developer",
    city: "Miami",
    country: "USA",
    social: {
      twitter: "https://twitter.com/4geeksacademy",
      github: "https://github.com/4geeksacademy",
      linkedin: "https://linkedin.com/school/4geeksacademy",
      instagram: "https://instagram.com/4geeksacademy"
    },
    positionClass: "position-right"
  };

  const bg =
    variables.background == null ? defaults.background : variables.background;
  let cover = `<div class="cover"><img src="${bg}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // Avatar
  const avatar =
    variables.avatarURL == null ? defaults.avatarURL : variables.avatarURL;

  // Nombre y apellidos
  const firstName = variables.name == null ? defaults.name : variables.name;
  const lastName =
    variables.lastName == null ? defaults.lastName : variables.lastName;
  const fullName = `${firstName} ${lastName}`.trim();

  // Rol
  const role = variables.role == null ? defaults.role : variables.role;

  // Ubicación
  const city = variables.city == null ? defaults.city : variables.city;
  const country =
    variables.country == null ? defaults.country : variables.country;
  const location = `${city}, ${country}`.trim();

  // Posición redes
  let posClass =
    variables.socialMediaPosition == null
      ? defaults.positionClass
      : variables.socialMediaPosition;
  if (posClass === "left") posClass = "position-left";
  if (posClass === "right") posClass = "position-right";

  // Links redes
  const twitterLink =
    variables.twitter == null
      ? defaults.social.twitter
      : `https://twitter.com/${variables.twitter}`;
  const githubLink =
    variables.github == null
      ? defaults.social.github
      : `https://github.com/${variables.github}`;
  const linkedinLink =
    variables.linkedin == null
      ? defaults.social.linkedin
      : `https://linkedin.com/in/${variables.linkedin}`;
  const instagramLink =
    variables.instagram == null
      ? defaults.social.instagram
      : `https://instagram.com/${variables.instagram}`;

  // Pintar HTML
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
      ${cover}
      <img src="${avatar}" class="photo" />
      <h1>${fullName}</h1>
      <h2>${role}</h2>
      <h3>${location}</h3>
      <ul class="${posClass}">
        <li><a href="${twitterLink}"><i class="fab fa-twitter"></i></a></li>
        <li><a href="${githubLink}"><i class="fab fa-github"></i></a></li>
        <li><a href="${linkedinLink}"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="${instagramLink}"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>`;
}
/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
