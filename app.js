// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი ანუ რომ 
// დავკლიკავ ღილაკზე გაქრეს.

const clickButton = document.querySelector(`.some-button`)
function inCaseOfClick(event){
    clickButton.remove();
}
clickButton.addEventListener(`click`,inCaseOfClick);

// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ: https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg 
// სურათის ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).

// const newImg = document.createElement(`img`);
// newImg.setAttribute(`src`, `https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg`)
// document.body.appendChild(newImg);

// 3. html შექმენით <div id="user-list"></div> გამოიყენეთ მიმაგრებული სურათი (hiok.png) დიზაინის ასაწყობად, 
// არქივში ( lecture17.zip ) => app.js ში ნახეთ users  მასივი რომელიც შედგება 4 ობიექტისგან
// ეს მასივი გამოიყენეთ და html ში გამოიტანეთ (ჯავასკრიპტით) 4 user card როგორც დიზანშია ნაჩვენები, 
// თვითვეული ქარდი უნდა შეიცავდეს შემდეგ ინგფირმაციას users მასივის ელემენტებიდან     (ობიექტებიდან): 
// 1. ავატარი ჩასვით სურათის ადგილას. 2. "John Doe" ს ადგილას ჩასვით first_name და last_name.

// 4. (მოქმედებები) #3 დავალებაში შექმნილ user card - ს აქვს ღილაკები (აიქონები თუ ვერ ნახეთ ამ ღილაკებზე
//      სიტყვიერად დაწერეთ წაშლა და ინფო), წაშლა ღილაკზე დაჭერით წავშალოთ შესაბამისი user card-ი, 
//      ინფო ღილაკზე დაჭერის შედეგად ღილაკების ქვემოთ გამოვაჩინოთ email ცენტრში

const users = [
    {
      id: 1,
      email: "Jonh.Doe@okay.gmail.com",
      first_name: "Jonh",
      last_name: "Doe",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      id: 2,
      email: "Jonh.Doe@okay.gmail.com",
      first_name: "Jonh",
      last_name: "Doe",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      id: 3,
      email: "Jonh.Doe@okay.gmail.com",
      first_name: "Jonh ",
      last_name: "Doe",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    },
    {
      id: 4,
      email: "Jonh.Doe@okay.gmail.com",
      first_name: "Jonh",
      last_name: "Doe",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
    }
];
function renderUser(){
    const userTableContainer = document.querySelector(`#user-list-container`);
    const userTableBody = userTableContainer.querySelector(`tbody`);

    const userItems = users.map(user =>{
        return `<tr>
                    <td>${user.id}</td>
                    <td>${user.email}</td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>
                    <td><img alt="${user.first_name}" src="${user.avatar}" /></td>
                    <td><button data-user-id="${user.id}" class="user-remove">Delete</button></td>
                    <td><button data-user-email="${user.email}" class="user-more-info">info</button></td>
                </tr>`;
    });
    console.log(userItems);
    userTableBody.innerHTML = userItems.join('');
}
renderUser();
document.body.appendChild(users);