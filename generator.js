var favorite = [
  {lyric:"You take your car to work, I'll take my board / And when you're out of fuel, I'm still afloat...Weezer"},
  {lyric:"I've never been so alone / And I've never been so alive...Third Eye Blind"},
  {lyric: "You gotta swim, swim in the dark. There's no shame in drifting, feel the tide shifting and wait for the spark. You gotta swim, don't let yourself sink. Just find the horizon. I promise you it's not as far as you thing...Jack's Mannequin"},
  {lyric: "I am seeing in me now the things you swore you saw yourself...Dashboard Confessional"},
  {lyric: "It seemed like a dream / A beautiful scream / That echoed forever / And made us not afraid to feel a thing / And after it ends / We'll try to be friends / They say what doesn't kill us makes us who we are...Motion City Soundtrack"}
];

function pass() {
  return favorite[Math.floor(Math.random() * favorite.length)].lyric;
};


module.exports.pass = pass;
