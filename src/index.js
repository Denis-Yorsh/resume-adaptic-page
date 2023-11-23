import $ from "jquery";
import "jquery-ui/dist/jquery-ui.min";

$(() => {
  // location.reload()
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
  $(main).toggle();
  $(main).toggle(effectArray[random()], 2000);

  $("a").click((event) => {
    event.preventDefault();
    $(main).toggle(effectArray[random()], 2000);
    setTimeout(() => {
      location.href = event.target.href;
    }, 1800);
  });
});
