var input = document.querySelector('.list input')
var list = document.querySelector('.list')
var removeAll = document.querySelector('.remove')

var tags = ['HTML', 'CSS', 'React']

function renderList() {
    list.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i]
        list.innerHTML += 
            `<li class="list__item">
                ${tag}
                <i class="fa-sharp fa-solid fa-xmark
                    onclick="removeTag(${i})">
                </i>
            </li>`
    }
    list.appendChild(input)
    input.focus()
}
renderList()

function removeTag(index) {
    console.log(index)
    tags.splice(index, 1)
    renderList()
}
removeTag()


input.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        tags.push(input.value.trim())
        renderList()
        input.value = ''
    }
})

removeAll.addEventListener('click', () => {
    tags = []
    renderList()
})

