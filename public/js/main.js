//FIXED NAVBAR SCROLLER

const nav = document.querySelector(`#nav`)

const onScroll = (event) => {
    const scrollPosition =
        event.target.scrollingElement.scrollTop;
    if (scrollPosition > 20) {  
        if (
            !nav.classList.contains(`scrolled-down`)
        ) {
            nav.classList.add(`scrolled-down`)
        }
    } else {
        if (
            nav.classList.contains(`scrolled-down`)
        ) {
            nav.classList.remove(`scrolled-down`)
        }
    }
}

document.addEventListener(`scroll`, onScroll)


/////FORM CHECKER

//NAME
let form = document.querySelector(`.process-form`)
let formName = document.querySelector(`input[name=Name]`);
let formPhone = document.querySelector(`input[name=Phone]`);
let formEmail = document.querySelector(`input[name=Email]`);

//CHECKBOX CHECKER
let checkbox = form.querySelector("input[name=checkbox]");
let applyButton = form.querySelector(`input[name=submit]`)

checkbox.addEventListener('change', function () {
    if (this.checked) {
        console.log("Checkbox is checked..");
        applyButton.className = `btn-apply-start`;
    } else {
        applyButton.className = `btn-apply-start_uncolored`;
    }
});

//other window pop-up

const el = document.getElementById(`form-dropdown-business`);
const otherInput = document.getElementById(`other`)

el.addEventListener('change', function handleChange(event) {
    if (event.target.value === 'other') {
      otherInput.style.display = 'block';
    } else {
     otherInput.style.display = 'none';
    }
  });
const navbarLinks = document.querySelectorAll('.header-nav .link');

// add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // determine the current scroll position
  const scrollPosition = window.pageYOffset;

  // loop through all the navbar links
  navbarLinks.forEach((link, index) => {
    const section = document.querySelector(link.hash);

    // if the section is in view, add the active class to the corresponding link
    if (
      section.offsetTop - 100 <= scrollPosition &&
      section.offsetTop - 100 + section.offsetHeight > scrollPosition
    ) {
      link.classList.add('active');
    } else {
      // otherwise, remove the active class from the link
      link.classList.remove('active');
    }
  });
});




//FILENAME CHECKER

let inputFile = document.getElementById(`myfile`);
let fileNameField = document.getElementById(`file-name`)

inputFile.addEventListener('change', function(event){
  let uploadedFileName = event.target.files[0].name;
  fileNameField.textContent = uploadedFileName;
})

AOS.init();