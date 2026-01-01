const smartLink = "https://fibredelivery.com/ncm9wbnq8?key=e199a7a403eb1ccd494e76f512ecc11a";

const offers = [
  {name:"AI Allure", img:"aiallure.jpg"},
  {name:"AI Allure 2", img:"aiallure2.jpg"},
  {name:"Aimour.ai", img:"Aimour.ai.jpg"},
  {name:"Aimour.ai 2", img:"Aimour.ai2.jpg"},
  {name:"BrainPill", img:"BrainPill.jpg"},
  {name:"Candy.ai", img:"Candy.ai.jpg"},
  {name:"Candy.ai 2", img:"Candy.ai2.jpg"},
  {name:"DreamBF.ai", img:"DreamBF.ai.jpg"},
  {name:"DreamGF.ai", img:"Dreamgf.ai.jpg"},
  {name:"eHentai.ai", img:"eHentai.ai.jpg"},
  {name:"Fanfinity", img:"Fanfinity.jpg"},
  {name:"Fanfinity 2", img:"Fanfinity2.jpg"},
  {name:"Fantasy.AI", img:"Fantasy.Ai.jpg"},
  {name:"Get-Harder", img:"Get-Harder.jpg"},
  {name:"Girlfriend GPT", img:"Girlfriend GPT.png"},
  {name:"GoLove.ai", img:"golove.ai.jpg"},
  {name:"GoLove.ai 2", img:"golove.ai.jpg"},
  {name:"JOI", img:"Joi.jpg"},
  {name:"JOI 2", img:"Joi2.jpg"},
  {name:"JOI 3", img:"Joi3.jpg"},
  {name:"JOI 4", img:"Joi4.jpg"},
  {name:"JOI 5", img:"Joi5.jpg"},
  {name:"JustSext", img:"JustSext.jpg"},
  {name:"Kupid.ai", img:"Kupid.png"},
  {name:"Lovescape", img:"Lovescape.jpg"},
  {name:"Luvr.ai", img:"Luvr.Ai.jpg"},
  {name:"MyLovely AI", img:"MyLovely Ai.jpg"},
  {name:"OurDream.ai", img:"ourdream.ai.png"},
  {name:"OurDream.ai 2", img:"ourdream.ai2.png"},
  {name:"Pleasur.ai", img:"Pleasur.Ai.jpg"},
  {name:"Pleasur.ai 2", img:"Pleasur.Ai2.jpg"},
  {name:"PocketGirl AI", img:"Pocketgirl Ai.jpg"},
  {name:"Secret Desires AI", img:"Secret Desires AI.jpg"},
  {name:"Secret Desires AI 2", img:"Secret Desires AI2.jpg"},
  {name:"Secrets.ai", img:"secret.jpg"},
  {name:"Spicier", img:"Spicier.jpg"},
  {name:"Swipey", img:"Swipey.jpg"},
  {name:"Swipey 2", img:"Swipey2.jpg"},
  {name:"TestRX", img:"TestRX.jpg"},
  {name:"Testosterone Support", img:"Testosterone Support Innerbody Labs.jpg"},
  {name:"Transgender AI", img:"Transgender.jpg"}
];

const grid = document.getElementById("offerGrid");

function renderOffers(list){
  grid.innerHTML = "";
  list.forEach(o=>{
    grid.innerHTML += `
      <div class="offer">
        <img src="images/${o.img}">
        <h3>${o.name}</h3>
        <a href="${smartLink}" target="_blank">Visit Now</a>
      </div>
    `;
  });
}

renderOffers(offers);

document.getElementById("searchInput").addEventListener("keyup", e=>{
  const q = e.target.value.toLowerCase();
  renderOffers(offers.filter(o=>o.name.toLowerCase().includes(q)));
});
