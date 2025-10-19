let personStoryBox = document.querySelector(`.personStoryBox`);
let shareForm = document.querySelector(`.shareForm`);
let shareButton = document.querySelector(`.shareButton`);
let shareInput = document.querySelector(`.shareInput`);
let cancel = document.querySelector(`.cancel`);

shareButton.addEventListener(`click`,()=>{
    shareInput.style.display=`block`;
    shareOnOff = true;
       
})

cancel.addEventListener(`click`,()=>{
    shareInput.style.display=`none`;
    shareOnOff = false;

    shareForm.reset();

})

shareForm.addEventListener(`submit`, (event)=>{
    event.preventDefault();
    let newUserName = document.querySelector(`#inputName`).value;
    let newUserTitle = document.querySelector(`#inputTitle`).value;
    let newUserStory = document.querySelector(`#inputStory`).value;

    let createPersonStoryBox2 = document.createElement(`div`);
    let createUserName = document.createElement(`div`);
    let createUserTitle = document.createElement(`div`);
    let createUserStory = document.createElement(`div`);

    createPersonStoryBox2.className=`personStoryBox2`;
    createUserName.className=`userName`;
    createUserTitle.className=`userTitle`;
    createUserStory.className=`userStory`;

    createUserName.innerText=newUserName;
    createUserTitle.innerText=newUserTitle;
    createUserStory.innerText=newUserStory;

    createPersonStoryBox2.appendChild(createUserName);
    createPersonStoryBox2.appendChild(createUserTitle);
    createPersonStoryBox2.appendChild(createUserStory);

    personStoryBox.appendChild(createPersonStoryBox2);

    shareInput.style.display=`none`;
    shareOnOff = false;


   shareForm.reset();

    
}
);