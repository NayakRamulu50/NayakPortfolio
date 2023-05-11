/*  animation       */
var typed = new Typed(".typing", {
    strings:["","Web Designer","Python Developer","UI/UX Developer","MERN-Stack Developer"],
    typeSpeed: 1,
    BackSpeed: 50,
    lopp:true,
})
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        removeBackSection();
        for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
                //allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSecrtion(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function showSecrtion(element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const taget = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + taget).classList.add("active")
}
function updateNew(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const taget = element.getAttribute("href").split("#")[1];
        if(taget === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIdex = this.getAttribute("data-section-index");

    showSecrtion(this);
    updateNew(this);
    removeBackSection();
    addBackSection(sectionIdex);
})
const navTogglerBtn = document.querySelector(".nav-toggler");
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => 
{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
}




