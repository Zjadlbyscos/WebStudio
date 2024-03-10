type PortfolioButtons = {
    galleryItems: NodeListOf<HTMLElement>;
    all: HTMLElement | null;
    pages: HTMLElement | null;
    applications: HTMLElement | null;
    design: HTMLElement | null;
    marketing: HTMLElement | null;
  };
  
  const obj: PortfolioButtons = {
    galleryItems: document.querySelectorAll(".gallery__box"),
    all: document.getElementById("all"),
    pages: document.getElementById("pages"),
    applications: document.getElementById("applications"),
    design: document.getElementById("design"),
    marketing: document.getElementById("marketing"),
  };
  
  function filterGallery(category: string): void {
    obj.galleryItems.forEach((item) => {
      if (item.id === category || category === "all") {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }
  
  if (obj.all) {
    obj.all.addEventListener("click", () => filterGallery("all"));
  }
  
  if (obj.pages) {
    obj.pages.addEventListener("click", () => filterGallery("pages"));
  }
  
  if (obj.applications) {
    obj.applications.addEventListener("click", () =>
      filterGallery("applications")
    );
  }
  if (obj.design) {
    obj.design.addEventListener("click", () => filterGallery("design"));
  }
  if (obj.marketing) {
    obj.marketing.addEventListener("click", () => filterGallery("marketing"));
  }
  