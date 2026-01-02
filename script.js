const offers = [
"images/aiallure.jpg",
"images/aiallure2.jpg",
"images/aimour.jpg",
"images/aimour2.jpg",
"images/candy.jpg",
"images/candy2.jpg",
"images/dreambf.jpg",
"images/dreamgf.jpg",
"images/ehentai.jpg",
"images/fanfinity.jpg",
"images/fanfinity2.jpg",
"images/fantasy.jpg",
"images/get-harder.jpg",
"images/girlfriendgpt.png",
"images/golove.jpg",
"images/joi (1).jpg",
"images/joi (2).jpg",
"images/joi (3).jpg",
"images/joi (4).jpg",
"images/joi (5).jpg",
"images/justsex.jpg",
"images/kupid.png",
"images/lovecape.jpg",
"images/luvr.jpg",
"images/mylovely.jpg",
"images/ourdream.png",
"images/ourdream2.png",
"images/output2.jpg",
"images/pleasur.jpg",
"images/pleasur2.jpg",
"images/pocketgirl.jpg",
"images/secret.jpg",
"images/secretdesireai2.jpg",
"images/secretdesiresai.jpg",
"images/spicier.jpg",
"images/swipey.jpg",
"images/swipey2.jpg",
"images/testosteronespportinnerbodylabs.jpg",
"images/testrx.jpg",
"images/transgender.jpg"
];

const container = document.getElementById("offers");

offers.forEach(img => {
  const div = document.createElement("div");
  div.className = "offer-box";
  div.innerHTML = `
    <img src="${img}" alt="offer">
    <a href="https://fibredelivery.com/ncm9wbnq8?key=e199a7a403eb1ccd494e76f512ecc11a" target="_blank">
      View Offer
    </a>
  `;
  container.appendChild(div);
});
