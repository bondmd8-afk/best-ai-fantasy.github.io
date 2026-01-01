const offers = [
  { name: "AI Allure", img: "aiallure.jpg", link: "https://t.crjmpx.com/40746/7961?aff_sub5=SF_006OG000004lmDN" },
  { name: "AI Allure", img: "aiallure2.jpg", link: "https://t.crjmpx.com/40746/7962?aff_sub5=SF_006OG000004lmDN" },
  { name: "Aimour.ai", img: "Aimour.ai.jpg", link: "https://t.crjmpx.com/40746/8023?aff_sub5=SF_006OG000004lmDN" },
  { name: "Aimour.ai", img: "Aimour.ai2.jpg", link: "https://t.crjmpx.com/40746/7986?aff_sub5=SF_006OG000004lmDN" },
  { name: "BrainPill", img: "BrainPill.jpg", link: "https://t.crjmpx.com/40746/7306/0?aff_sub5=SF_006OG000004lmDN" },
  { name: "Candy.ai", img: "Candy.ai.jpg", link: "https://t.crjmpx.com/40746/6646?aff_sub5=SF_006OG000004lmDN" },
  { name: "Candy.ai", img: "Candy.ai2.jpg", link: "https://t.crjmpx.com/40746/7793?aff_sub5=SF_006OG000004lmDN" },
  { name: "DreamBF.ai", img: "DreamBF.ai.jpg", link: "https://t.crjmpx.com/40746/6559?aff_sub5=SF_006OG000004lmDN" },
  { name: "Dreamgf.ai", img: "Dreamgf.ai.jpg", link: "https://t.crjmpx.com/40746/6523?aff_sub5=SF_006OG000004lmDN" },
  { name: "Fanfinity", img: "Fanfinity.jpg", link: "https://t.crjmpx.com/40746/6558?aff_sub5=SF_006OG000004lmDN" },
  { name: "Fanfinity", img: "Fanfinity2.jpg", link: "https://t.crjmpx.com/40746/7722?aff_sub5=SF_006OG000004lmDN" },
  { name: "Fantasy.Ai", img: "Fantasy.Ai.jpg", link: "https://t.crjmpx.com/40746/7721?aff_sub5=SF_006OG000004lmDN" },
  { name: "Get-Harder", img: "Get-Harder.jpg", link: "https://t.crjmpx.com/40746/7511?aff_sub5=SF_006OG000004lmDN" },
  { name: "Girlfriend GPT", img: "Girlfriend GPT.png", link: "https://t.crjmpx.com/40746/7795?aff_sub5=SF_006OG000004lmDN" },
  { name: "Joi", img: "Joi.jpg", link: "https://t.crjmpx.com/40746/7477?aff_sub5=SF_006OG000004lmDN" },
  { name: "Joi", img: "Joi2.jpg", link: "https://t.crjmpx.com/40746/7912?aff_sub5=SF_006OG000004lmDN" },
  { name: "Joi", img: "Joi3.jpg", link: "https://t.crjmpx.com/40746/7911?aff_sub5=SF_006OG000004lmDN" },
  { name: "Joi", img: "Joi4.jpg", link: "https://t.crjmpx.com/40746/7761?aff_sub5=SF_006OG000004lmDN" },
  { name: "Joi", img: "Joi5.jpg", link: "https://t.crjmpx.com/40746/7875?aff_sub5=SF_006OG000004lmDN" },
  { name: "JustSext", img: "JustSext.jpg", link: "https://t.crjmpx.com/40746/7946?aff_sub5=SF_006OG000004lmDN" }
];

const container = document.getElementById("offers");

function render(data) {
  container.innerHTML = "";
  data.forEach(o => {
    container.innerHTML += `
      <div class="card">
        <img src="images/${o.img}">
        <h3>${o.name}</h3>
        <a href="${o.link}" target="_blank">Visit Now</a>
      </div>
    `;
  });
}

render(offers);

document.getElementById("searchInput").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  render(offers.filter(o => o.name.toLowerCase().includes(value)));
});

