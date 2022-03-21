const hero = document.querySelector(`.hero`);



hero.style.backgroundImage = `url('./assets/DWAYNE.jpg')`;

const name = document.querySelector(`.hero h1 span`);
name.innerHTML = `Michael Neiman`;

const greeting = document.querySelector(`.hero h3`)
greeting.innerHTML = `Im lactose intolerant so this greeting can't be too cheesy`;


const profilePic = document.querySelector(`.profile-img`);
profilePic.src = `https://avatars.githubusercontent.com/u/24390149?v=4`;

const favorites = [
  {
    img: `./assets/TV.webp`,
    title:`Watching TV`,
    desc: `I love to watch TV. When I was younger, I watched TV all day and had a great time with a wide variety of shows. Now, it's a way to keep exploring new genres and have fun.`
  },
  {
    img: `./assets/RUN.jpg.webp`,
    title:`Running`,
    desc: `Running is by far one of my favorite activiites. During COVID, it became easier to find time to run. I'm happy to say I'm a runner and not a walker on the track team.`
  },
  {
    img: `./assets/SLEEP.jpg`,
    title:`Sleeping`,
    desc: `I like to sleep and put off waking up. Whether it's napping, dreaming, or even sleeping through the night, I love it. No day naps...I'm not crazy.`
  },
]

const gallery = document.querySelector(`.info-gallery`);

favorites.map((favorite) => {
  let newEl = document.createElement(`div`);
  newEl.classList.add(`info-item`);
  newEl.innerHTML = `
  <img src="${favorite.img}" alt="${favorite.title}" class= "item-img" />
  <h4>${favorite.title}</h4>
  <p>${favorite.desc}</p>
  `
  gallery.appendChild(newEl);
});
