

/*pop up banner */
function PopupdismissBanner() {
    const banner = document.getElementById("banner");
    banner.classList.add("transition", "duration-300", "opacity-0");
    setTimeout(() => banner.remove(), 300);
  }
