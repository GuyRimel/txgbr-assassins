// nav-bar tabs and pages

const navBarTabs = document.querySelectorAll(".nav-bar__tab");
const navBarTabPages = document.querySelectorAll(".nav-bar__tab-page");

navBarTabs.forEach((tab) => {
  tab.addEventListener("click", showNavBarTabPage);
});

function showNavBarTabPage(e) {
  navBarTabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  e.target.classList.add("active");
  evaluateTabs();
}

function evaluateTabs() {
  navBarTabs.forEach((tab, counter) => {
    navBarTabPages[counter].classList.add("d-none");
    if (tab.classList.contains("active")) {
      navBarTabPages[counter].classList.remove("d-none");
    }
  });
}

window.onload = () => {
  evaluateTabs();
};
