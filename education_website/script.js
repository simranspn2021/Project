//changing navigation bar on scrolling:
//follwing is the expalnation of the bellow code 
// //window.addEventListener('scroll', () => { ... }): This line adds an event listener to the window object for the 'scroll' event. The function provided as the second argument will be executed whenever the user scrolls.

// const nav = document.querySelector('nav');: This line selects the first <nav> element in the document and stores it in the nav variable. This assumes that there is at least one <nav> element in the HTML structure.

// nav.classList.toggle('window-scroll', window.scrollY > 0);: This line toggles the presence of the class 'window-scroll' on the nav element based on the condition window.scrollY > 0.

// nav.classList is an object that represents the class attribute of the nav element. It provides methods to manipulate the classes.
// toggle('window-scroll', window.scrollY > 0) is called on nav.classList to toggle the class 'window-scroll' based on the condition window.scrollY > 0.
// If window.scrollY (the vertical scroll position) is greater than 0, the class 'window-scroll' will be added to nav if it's not already present.
// If window.scrollY is 0 or less, the class 'window-scroll' will be removed from nav if it's currently present.
// The purpose of this code is to change the appearance of the navigation bar (<nav>) when the user scrolls. By adding or removing the 'window-scroll' class, you can define different styles for the navigation bar based on whether it is scrolled or not.

window.addEventListener('scroll',() =>
{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY >0)
})
//now we makr the frequenlty asked question para hidden and visible when we click on it 
const faqs=document.querySelectorAll('.faq')
faqs.forEach(faq=>
    {
        faq.addEventListener('click',()=>
        {
            faq.classList.toggle('open');
            //now changing icon plus
            const icon=faq.querySelector('.faq_icon i')
            if(icon.className=='uil uil-plus')
            {
                icon.className='uil uil-minus'
            }
            else{
                icon.className=='uil uil-plus'
            }
        })
    })

/* -----------for navigation bar-------------*/
const menu=document.querySelector(".nav_menu");
const menuBtn=document.querySelector("#open-menu-btns");
const closebtn=document.querySelector("#close-menu-btns");

menuBtn.addEventListener('click',()=>
{
    menu.style.display="flex";
    closebtn.style.display="inline-block";
    menuBtn.style.display="none";
}) 

//close nav menu 
const closeNav=()=>
{
    menu.style.display="none";
    closebtn.style.display="none";
    menuBtn.style.display="inline-block";
}
/*const closeNav() =>: This line defines a constant function named closeNav(). The const keyword is used to declare a function as a constant, which means its value cannot be re-assigned.*/

closebtn.addEventListener('click',closeNav)
 