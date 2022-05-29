// document.write("Hello World!")

document.addEventListener("click", function (event) {
    if (!event.target.matches("#button")) return;
  
    fetch("https://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((data) => getActivity(data));
  });

  function getActivity(data){
      const activity = document.getElementById("Activity");
      activity.innerHTML=data.activity
  }