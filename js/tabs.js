// Function to open a specific tab
function openTab(tabId) {
  // Hide all tab content
  var tabContents = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  
  // Remove 'active' class from all tab links
  var tabLinks = document.getElementsByClassName("tablink");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }
  
  // Show the selected tab content
  document.getElementById(tabId).style.display = "block";
  
  // Add 'active' class to the clicked tab link
  var activeTabLink = document.querySelector('[onclick="openTab(\'' + tabId + '\')"]');
  if (activeTabLink) {
    activeTabLink.classList.add("active");
  }
}

// Function to scroll to the tab container and toggle the tab
function scrollToTab(tabId) {
  var tabContainer = document.getElementById(tabId);
  if (tabContainer) {
    tabContainer.scrollIntoView({ behavior: "smooth" });
    openTab(tabId);
  }
}
