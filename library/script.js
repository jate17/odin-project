// array main
let libri = []


class Book {
    constructor(title, author, pages) {
        this.id = crypto.randomUUID()
        this.title = title
        this.author = author
        this.pages = pages
        this.read = false

    }


}

function togRead(id) {
    let index = libri.findIndex(b => b.id == id)
    console.log(index)
    if (index !== -1) {
        libri[index].read = !libri[index].read
        viewbooks()
    }
}

function addToLib(title, author, pages) {
    let newbook = new Book(title, author, pages)
    libri.push(newbook)
    console.log(libri)
    viewbooks()

}

function delbok(id) {
    let index = libri.findIndex(b => b.id == id)
    if (index !== -1) {
        libri.splice(index, 1)
        alert(`Ho eliminato ${index}`)
        viewbooks()
    }
}


function viewbooks(){
    const cont = document.getElementById('libri')

    //pulire
    cont.innerHTML = ''

    libri.forEach( book => {
        cont.innerHTML += `
            <div class="bg-white rounded-xl shadow-md overflow-hidden w-75 hover:shadow-lg transition p-5">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Titolo: ${book.title}</h3>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Autore: ${book.author}</h3>
              <h6 class="text-l font-semibold text-gray-800 mb-2">Pagine: ${book.pages} - Letto: <span onclick="togRead('${book.id}')">${book.read == true ? '✅' : '❌ '}</span></h6>

              <button onclick="delbok('${book.id}')" class="px-4 py-2 bg-red-800 text-white font-medium rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-blue-400 transition">
                Elimina
              </button>

            </div>
        `
    })

}

//gestione del form


const addbtn = document.getElementById('addbook')


addbtn.addEventListener('click', (e) => {

    event.preventDefault()

    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    addToLib(title, author, pages)


    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
})



