const toggle_item_first = document.querySelector("#toggle_item_first")
const toggle_item_second = document.querySelector("#toggle_item_second")
const toggle_item_third = document.querySelector("#toggle_item_third")

const university_about = document.querySelector('.about_div.university')
const learn_about = document.querySelector('.about_div.learn')
const foss_about = document.querySelector('.about_div.foss')

toggle_item_first.addEventListener('click', () => {
    switch_about(1)
})
toggle_item_second.addEventListener('click', () => {
    switch_about(2)
})
toggle_item_third.addEventListener('click', () => {
    switch_about(3)
})

function switch_about(number) {
    let obj
    if (number === 1) {
        obj = toggle_item_first
    }
    if (number === 2) {
        obj = toggle_item_second
    }
    if (number === 3) {
        obj = toggle_item_third
    }
    if (!('active' in obj.classList)) {
        obj.className += ' active'
        if (number !== 1) {
            toggle_item_first.classList.remove('active')
        }
        if (number !== 2) {
            toggle_item_second.classList.remove('active')
        }
        if (number !== 3) {
            toggle_item_third.classList.remove('active')
        }
    }


    university_about.style.display = number === 1 ? 'block' : 'none'
    learn_about.style.display = number === 2 ? 'block' : 'none'
    foss_about.style.display = number === 3 ? 'block' : 'none'
}

switch_about(Math.floor(Math.random() * 3) + 1)
