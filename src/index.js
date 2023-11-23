import $ from "jquery";
import "jquery-ui/dist/jquery-ui.min";

$(() => {
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
    $(main).toggle(effectArray[random()], 500);
    $(main).toggle(effectArray[random()], 1500);
    setTimeout(() => {
      location.href = event.target.href;
    }, 2000);
  });
});