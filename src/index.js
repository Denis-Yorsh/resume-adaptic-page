import $ from "jquery";
import "jquery-ui/dist/jquery-ui.min";

$(() => {
  // if (document.cookie.match("name=user")) {
  //   location.reload();
  //   document.cookie = "name=";
  // }
  const effectArray = [
    "explode",
    "bounce",
    "puff",
    "scale",
    "size",
    "blind",
    "shake",
    "pulsate",
  ];
  const random = () => Math.floor(Math.random() * (7 - 0 + 1) + 0);
  const main = $("#main");

  $(main).toggle(effectArray[random()], 2000);

  $("a").click((event) => {
    event.preventDefault();
    // document.cookie = "name=user";
    $(main).toggle(effectArray[random()], 2000);
    setTimeout(() => {
      location.href = event.target.href;
    }, 1800);
  });
});
