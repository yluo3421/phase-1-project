//this javascript provide functions of below items
// 1. Provide random cat avatar from API
// 2. Use switch button to change if user doesnt like the current one
// 3. Input box for user to create their own profile
// 4. Dropdown menu for user to select two algorithms to compare
// 5. Comment box for user to share what the like most

const catAPI = "https://api.thecatapi.com/v1/images/search";
function switchCatAvatar() {
    fetch(catAPI)
        .then(res => res.json())
        .then(data => renderCatAvatar(data))

}
//call the function every time to give new avatar when page refreshes.
switchCatAvatar();
const avatar = document.querySelector("#profile-image");


function renderCatAvatar(data) {
    console.log(data[0]["url"]);
    avatar.src = data[0]["url"];
}

// assigning event to switch avatar button
const switchCatAvatarButton = document.querySelector("#switchAvatar")
switchCatAvatarButton.addEventListener('click', switchCatAvatar);

// take value from input box and create user profile
const profileInput = document.querySelector("#form-user-name");
const profileInputButton = document.querySelector("#input-profile-button");
const profileForm = document.querySelector("#profile-form");
const profileSubmitButton = profileForm.querySelector('button[type="submit"]');
const profileArea = profileForm.querySelector('#review');

//profileInputButton.addEventListener('click',createProfile);
profileForm.addEventListener('click', console.log("1"))
function createProfile() {
    console.log(profileInput);
}