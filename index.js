//this javascript provide functions of below items
// 1. Provide random cat avatar from API
// 2. Use switch button to change if user doesnt like the current one
// 3. Input box for user to create their own profile
// 4. Comment box for user to share what the like most
// 5. Dropdown menu for user to select two algorithms to compare

const catAPI = "https://api.thecatapi.com/v1/images/search";
function switchCatAvatar() {
    fetch(catAPI)
        .then(res => res.json())
        .then(data => renderCatAvatar(data))

}

const avatar = document.querySelector("#profile-image");

function renderCatAvatar(data) {
    //console.log(data[0]["url"]);
    avatar.src = data[0]["url"];
}

// assigning event to switch avatar button
const switchCatAvatarButton = document.querySelector("#switchAvatar")
switchCatAvatarButton.addEventListener('click', switchCatAvatar);

// take value from input box and create user profile
const profileForm = document.querySelector("#profile-form");
const userNameInput = document.querySelector("#form-user-name");

//profileInputButton.addEventListener('click',createProfile);
profileForm.addEventListener('submit', createProfile)

const profileObj = {user1: {"id":"1", "username":"Dont forget to create your own Profile","imgURL":avatar.src}};

let i = 1;
function createProfile(e) {
    e.preventDefault();
    //console.log(userNameInput.value);
    i++;
    profileObj[`user${i}`] = {"id":`${i}`,"userName":userNameInput.value, "imgURL":avatar.src}
    console.log(profileObj);
    
}



//review form submit function
const reviewForm = document.querySelector("#review-form");
const reviewSubmitButton = reviewForm.querySelector('button[type="submit"]');
const reviewArea = reviewForm.querySelector('#review');

reviewSubmitButton.addEventListener('click', addCustomerReview)


function renderReview(review) {
    const reviews = document.querySelector('#review-list');
    // newCustomerReview = document.createElement('li');
    // newCustomerReview.textContent = review;
    // reviews.append(newCustomerReview);

    //create flex container to hold avatar, username and comment
    let userNumber = `user${i}`;
    
    let newflexContainer = document.createElement('div');
    newflexContainer.setAttribute("id","flex-container");
    newflexContainer.innerHTML = `
    <div class="flex-item" id="flex-avatar">
        <img id="avatarInsideFlex"
            src=${avatar.src} 
            width="50" height="60"
        >
    </div>
    <div class="raw-item" id="raw-username">${profileObj[userNumber]["username"]}</div>
    <div class="raw-item" id="raw-review">${review}</div>
    `;
    
    reviews.append(newflexContainer);
}

function addCustomerReview(e) {
    e.preventDefault();
    //console.log(e.target.parentNode['#review']);
    //console.log(reviewArea.value);
    const reviews = document.querySelector('#review-list');
    //console.log(reviews.firstChild.textContent.length);
    //let s = "Feel free to leave comment";
    //console.log(s.length)
    if(reviews.firstChild.textContent.length === 21) {
        while (reviews.firstChild) {
            reviews.removeChild(reviews.firstChild);
        }
    }
    const customerReviewText = reviewArea.value
    renderReview(customerReviewText);
    e.target.parentNode.reset();
    
}

//Create Object including both sorting url and their bigO
const sortAlgoList = {
    "BubbleSort":
        {
        "url":"https://cdn.emre.me/sorting/bubble_sort.gif",
        "bigO":"BigO: O(n^2)"
        },
    "SelectionSort":
        {
        "url":"https://cdn.emre.me/sorting/selection_sort.gif",
        "bigO":"BigO: O(n^2)"
        },
    "HeapSort":
        {
            "url":"https://cdn.emre.me/sorting/heap_sort.gif",
            "bigO":"BigO: O(nlog(n))"
        },
    "QuickSort":
        {
            "url":"https://cdn.emre.me/sorting/quick_sort_hoare.gif",
            "bigO":"BigO: Average:O(nlog(n)), Worst:O(n^2)"
        }
}

//grab dropDown menu value and image
let leftDropMenu = document.getElementById("left-gif-dropdown");
let rightDropMenu = document.getElementById("right-gif-dropdown");
let leftDropValue = document.getElementById("left-gif-dropdown").value;
let rightDropValue = document.getElementById("right-gif-dropdown").value;
let leftGif = document.getElementById("img-left-sort");
let leftGifBigO = document.getElementById("bigOLeft");
let rightGif = document.getElementById("img-right-sort");
let rightGifBigO = document.getElementById("bigORight");

leftDropMenu.addEventListener("change", function() {
    //console.log('You selected: ', this.value);
    dropMenuChange(this.value, leftGif, leftGifBigO);
    
})

rightDropMenu.addEventListener("change", function() {
    dropMenuChange(this.value, rightGif, rightGifBigO);
})

function dropMenuChange(dropvalue, gifReset, gifBigOReset) {

switch (dropvalue) {
    case "img-bubble-sort-gif":
        gifReset.src = sortAlgoList["BubbleSort"]["url"];
        gifBigOReset.innerText = sortAlgoList["BubbleSort"]["bigO"];
        break;
    case "img-selection-sort-gif":
        gifReset.src = sortAlgoList["SelectionSort"]["url"];
        gifBigOReset.innerText = sortAlgoList["SelectionSort"]["bigO"];
        break;
    case "img-heap-sort-gif":
        gifReset.src = sortAlgoList["HeapSort"]["url"];
        gifBigOReset.innerText = sortAlgoList["HeapSort"]["bigO"];
        break;
    case "img-quick-sort":
        gifReset.src = sortAlgoList["QuickSort"]["url"];
        gifBigOReset.innerText = sortAlgoList["QuickSort"]["bigO"];
        break;
    default:
        leftGif.src = sortAlgoList["BubbleSort"]["url"];
        rightGif.src = sortAlgoList["SelectionSort"]["url"];
        gifBigOReset.innerText = sortAlgoList["BubbleSort"]["bigO"];

}

}