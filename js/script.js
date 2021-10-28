/*
Team Treehouse Full Stack Tech Degree Project #2
*/

const studentList = document.querySelector('.student-list');  
const linkList = document.querySelector('.link-list');
const header = document.querySelector('header');
//declared global variables


function showPage (list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   studentList.innerHTML ='';
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const studentItem =
         `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div>
       </li>`;
       studentList.insertAdjacentHTML('beforeend', studentItem);
      } // end of if statement
   } // end of loop
} // end of function

// showpage function that displays 9 students information per page


function addPagination (list) {
   const numOfPages = Math.ceil(list.length / 9);
      linkList.innerHTML = "";
   for (let i = 1; i <= numOfPages;  i++) {
   const button =
   `<li>
   <button type="button">${i}</button>
   </li>`;
   linkList.insertAdjacentHTML('beforeend', button);
   const firstButton = document.querySelector('.link-list button');
   firstButton.className = 'active';
} // end of loop
         linkList.addEventListener('click', (e) => {
            const buttonClicked = e.target;
            if (buttonClicked.tagName === 'BUTTON') {
            const newClick = document.querySelector('.active')
            newClick.className = '';
            buttonClicked.className = '';
            buttonClicked.className = 'active';     
            showPage(list, buttonClicked.textContent);
            } // end of if statement
         }); // end of event listener
      }; // end of function

// function that allows you to traverse the pages of students with numbered buttons



/* header.insertAdjacentHTML('beforeend', `<label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
    </label>`);
 

// Extra credit portion that impliments a search bar to the header
*/   


showPage(data,1);
addPagination(data);

// Call functions to display to the page
