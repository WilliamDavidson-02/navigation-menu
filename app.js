const navList = document.querySelectorAll("#nav-list-content");
const navSectionContainer = document.getElementById("nav-section-container");
const navContainer = document.getElementById("nav");
const mainContainer = document.getElementById("main");

let hoverNavName = "";

function clearHoverdEffects() {
    mainContainer.classList.remove("nav-filter");
    navList.forEach(element => {
        if (element.lastChild.nodeName === "DIV") {
            const last = element.lastChild;
            element.removeChild(last);
            navSectionContainer.innerHTML = ""
        }
    });
}

function displayNavSectionContent(element) {
    navContainerArray.forEach(item => {
        if (item.navContent === element.firstElementChild.textContent) {
            hoverNavName = item.navContent;
            const selectedArray = Object.values(item).filter(val => typeof val === "object");
            selectedArray.forEach(arrayObj => {
                const navSection = document.createElement("div");
                navSection.classList.add("nav-section");
                
                const titleHeader = document.createElement("a");
                titleHeader.classList.add("title-header");
                titleHeader.setAttribute("href", "#");
                titleHeader.textContent = arrayObj.title;
                navSection.append(titleHeader);
                
                for (let i = 0; i < arrayObj.items.length; i++) {
                    const itemNav = document.createElement("a");
                    itemNav.classList.add("item-nav");
                    itemNav.setAttribute("href", "#");
                    itemNav.textContent = arrayObj.items[i];
                    
                    navSection.append(itemNav)
                }
                mainContainer.classList.add("nav-filter");
                navSectionContainer.appendChild(navSection)
            })
        }
    });
}

navList.forEach(element => {
    element.addEventListener("mouseenter", () => {
        clearHoverdEffects();
        const hoverdLink = document.createElement("div");
        hoverdLink.classList.add("hoverd-link");
        element.appendChild(hoverdLink);
        displayNavSectionContent(element);
    });
});

navContainer.addEventListener("mouseleave", () => {
    clearHoverdEffects();
    navSectionContainer.innerHTML = ""
    mainContainer.classList.remove("nav-filter");
})