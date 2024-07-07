// Pop-ups

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.querySelector("#overlay");

openModalButtons.forEach(btn => {
    btn.addEventListener('click', ()=> {
        const modal = document.querySelector(btn.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButtons.forEach(btn => {
    btn.addEventListener('click', ()=> {
        const modal = btn.closest(".pop-ups");
        closeModal(modal);
    })
})

overlay.addEventListener('click', ()=> {
    const modals = document.querySelectorAll('.pop-ups.active')
    modals.forEach(modal => {
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return;
    console.log(modal)
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// Pop-ups

// let readBtn = document.querySelectorAll("#btn");
const main = document.querySelector("#main");

const greek = new Book("Greek", "nothing to say much");
const norse1 = new Book("Norse", "This books give you a little knowledge of Norse Mythology");
const norse2 = new Book("Norse2", "This books give you a little knowledge of Norse Mythology");


const myLibrary = [greek, norse1, norse2];
const readLibrary = [];

function Book(title, description) {
    this.title = title,
    this.description = description,
    this.createCard = function() {
        const cardContainer = document.createElement("div");
        cardContainer.className = "card-container";
        cardContainer.id = 'card-container';

        
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = "";
        img.width = "140";
        img.height = "170";

        const bookTitle = document.createElement('h2');
        bookTitle.classList = "book-title";
        bookTitle.id = this.title;
        bookTitle.textContent = this.title;

        const bookDescription = document.createElement('p');
        bookDescription.classList = "book-description";
        bookDescription.id = "description";
        bookDescription.textContent = this.description;

        const readButton = document.createElement('button')
        readButton.id = 'btn';
        readButton.textContent = 'Not Read';

        readButton.addEventListener("click", ()=> {
            const isToggle = readButton.classList.toggle("read");
            const cardTitle = readButton.closest(".card-container").firstChild.childNodes[1].textContent;
            console.log(cardTitle);
    
            readButton.textContent = `${isToggle ? "Read" : "Not Read"}`;
            return isToggle ? pushToLib(cardTitle) : removeFromLib(cardTitle);
        })

        card.appendChild(img);
        card.appendChild(bookTitle);
        card.appendChild(bookDescription);
        cardContainer.appendChild(card);
        cardContainer.appendChild(readButton);
        main.appendChild(cardContainer);
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function getMyLibrary(){
    myLibrary.forEach(e=> {
        if (Object.hasOwn(e, "title")) {
            e.createCard();
        }
    })
}
getMyLibrary();



const pushToLib = (title)=> {
    myLibrary.forEach(e => {
        if (e.title === title)
        {
            readLibrary.push(e);
        }
    })
    console.log(readLibrary);
}

const removeFromLib = (title)=> {
    readLibrary.forEach((value, index) => {
        if (value.title === title)
        {
            readLibrary.splice(index, 1);
        }
    })
    console.log(readLibrary);
}

// dialog
const submitButton = document.querySelector("#submit");

submitButton.addEventListener('click', (element)=> {
    const titleInput = document.querySelector("#title-input").value;
    const descriptionInput = document.querySelector("#description-input").value;
    let newBook = new Book(titleInput, descriptionInput);
    newBook.createCard();
    myLibrary.push(newBook);

    element.preventDefault();
})

// readBtn.forEach((btn)=> {
//     btn.addEventListener("click", ()=> {
//         const isToggle = btn.classList.toggle("read");
//         const cardTitle = btn.closest(".card-container").firstChild.childNodes[1].textContent;
//         console.log(cardTitle);

//         btn.textContent = `${isToggle ? "Read" : "Not Read"}`;
//         return isToggle ? pushToLib(cardTitle) : removeFromLib(cardTitle);
//     })
// })