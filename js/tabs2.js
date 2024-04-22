// Function to open a specific tab
function openTabTwo(tabTwoId) {
  // Hide all tab content
  var tabContentsTwo = document.getElementsByClassName("tabcontentTwo");
  for (var i = 0; i < tabContentsTwo.length; i++) {
    tabContentsTwo[i].style.display = "none";
  }

  // Remove 'active' class from all tab links
  var tabLinksTwo = document.getElementsByClassName("tablinkTwo");
  for (var i = 0; i < tabLinksTwo.length; i++) {
    tabLinksTwo[i].classList.remove("active");
  }

  // Show the selected tab content
  document.getElementById(tabTwoId).style.display = "block";

  // Add 'active' class to the clicked tab link
  event.currentTarget.classList.add("active");
}
