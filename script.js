const offers = [
  {img:"Aimour.ai.jpg",link:"https://t.crjmpx.com/40746/7961"},
  {img:"Candy.ai.jpg",link:"https://t.crjmpx.com/40746/7962"},
  {img:"DreamBF.ai.jpg",link:"https://t.crjmpx.com/40746/8023"},
  {img:"Fanfinity.jpg",link:"https://t.crjmpx.com/40746/7986"},
  {img:"Joi.jpg",link:"https://t.crjmpx.com/40746/7306"},
  {img:"Kupid.png",link:"https://t.crjmpx.com/40746/6646"},
  {img:"Lovescape.jpg",link:"https://t.crjmpx.com/40746/7793"},
  {img:"Luvr.Ai.jpg",link:"https://t.crjmpx.com/40746/6559"},
  {img:"Pocketgirl Ai.jpg",link:"https://t.crjmpx.com/40746/6523"},
  {img:"Spicier.jpg",link:"https://t.crjmpx.com/40746/6558"},
  {img:"Swipey.jpg",link:"https://t.crjmpx.com/40746/7722"},
  {img:"Swipey2.jpg",link:"https://t.crjmpx.com/40746/7721"},
  {img:"Fantasy.Ai.jpg",link:"https://t.crjmpx.com/40746/7511"},
  {img:"Get-Harder.jpg",link:"https://t.crjmpx.com/40746/7795"},
  {img:"JustSext.jpg",link:"https://t.crjmpx.com/40746/7477"},
  {img:"Secret.jpg",link:"https://t.crjmpx.com/40746/7912"},
  {img:"Secret2.jpg",link:"https://t.crjmpx.com/40746/7911"},
  {img:"Ourdream.jpg",link:"https://t.crjmpx.com/40746/7761"},
  {img:"TestRX.jpg",link:"https://t.crjmpx.com/40746/7875"},
  {img:"SpicyAI.jpg",link:"https://t.crjmpx.com/40746/7946"},
  {img:"BrainPill.jpg",link:"https://t.crjmpx.com/40746/6924"},
  {img:"Pleasur.Ai.jpg",link:"https://t.crjmpx.com/40746/7887"},
  {img:"Pleasur2.jpg",link:"https://t.crjmpx.com/40746/7944"},
  {img:"DreamGF.jpg",link:"https://t.crjmpx.com/40746/10318"},
  {img:"AIAllure.jpg",link:"https://t.crjmpx.com/40746/7710"},
  {img:"AIAllure2.jpg",link:"https://t.crjmpx.com/40746/7709"},
  {img:"Golove.jpg",link:"https://t.crjmpx.com/40746/7401"},
  {img:"MyLovely.jpg",link:"https://t.crjmpx.com/40746/7757"},
  {img:"Fantasy2.jpg",link:"https://t.crjmpx.com/40746/7927"},
  {img:"DreamAI.jpg",link:"https://t.crjmpx.com/40746/7976"},
  {img:"AIHot.jpg",link:"https://t.crjmpx.com/40746/7977"},
  {img:"SecretX.jpg",link:"https://t.crjmpx.com/40746/10339"},
  {img:"HotAI.jpg",link:"https://t.crjmpx.com/40746/7942"},
  {img:"AIChat.jpg",link:"https://t.crjmpx.com/40746/10100"},
  {img:"LoveBot.jpg",link:"https://t.crjmpx.com/40746/10219"},
  {img:"FantasyPlus.jpg",link:"https://t.crjmpx.com/40746/7910"},
  {img:"DreamTalk.jpg",link:"https://t.crjmpx.com/40746/7103"},
  {img:"AIQueen.jpg",link:"https://t.crjmpx.com/40746/7933"}
];

const box = document.getElementById("offers");
offers.forEach(o=>{
  box.innerHTML += `
    <div class="offer">
      <img src="images/${o.img}">
      <a href="${o.link}" target="_blank">Visit Now</a>
    </div>`;
});
