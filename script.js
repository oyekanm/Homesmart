const navigation = document.getElementById("nav");
const navBtn = document.querySelector("Nav__button");
const nav = document.querySelector("Nav");

navigation.addEventListener("click", (e) => {
  // console.log(e);
  nav.classList.toggle("active");
  navigation.classList.toggle("show");
});
