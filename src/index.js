import $ from "jquery";
import "jquery-ui/dist/jquery-ui.min";

$(() => {
  // if (history.back()) {
  //   location.reload();
  // }
  // location.reload()
  // console.log(history.state);
  // console.log(history.back());
  // console.log(history.forward());

  // $(window).blur(function () {
  //   console.log("blur");
  // });

  // $(window).focus(function () {
  //   console.log("focus");
  // });
  // let isReload = false;
  // if (isReload) {
  //   isReload = false;
  //   location.reload();
  // } else {
  //   isReload = true;
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
    $(main).toggle(effectArray[random()], 2000);
    setTimeout(() => {
      location.href = event.target.href;
    }, 1800);
  });
});
