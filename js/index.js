const values = [
    ['10K', [8, 6]],
    ['50K', [12, 9]],
    ['100K', [16, 12]],
    ['500K', [24, 18]],
    ['1M', [36, 27]],
]

const mainButton = document.querySelector('.main-button')
const inputRange = document.getElementById('price-input')
const priceDisplay = document.querySelector(`.value`)
const pageViewsDisplay = document.querySelector('.page-views')
const billingCheckbox = document.getElementById('billing')
const labelToggleElement = document.querySelector('.custom-checkbox')
const texts = [
    document.querySelector('.month-billing'),
    document.querySelector('.year-billing')
]
const [monthTxt, yearTxt] = texts
const setDisplayValues = (inputValue) => {
    const hasDiscount = yearTxt.classList.contains('selected')
    const valueIndex = inputValue / 4
    const [pageViews, [priceNormal, priceDiscount]] = values[valueIndex]
    priceDisplay.innerHTML = `${hasDiscount ? priceDiscount : priceNormal}.00`
    pageViewsDisplay.innerHTML = pageViews
}

inputRange.addEventListener('input', event => {
    mainButton.removeAttribute('disabled', false)
    setDisplayValues(event.target.value)
})

mainButton.addEventListener('click', () => alert('Hello world'))

texts.forEach(item => {
    item.addEventListener('click', event => {
    if (!event.target.classList.contains('selected'))
        billingCheckbox.click()
    })
})

billingCheckbox.addEventListener('click', event => {
    labelToggleElement.classList.toggle('active')
    monthTxt.classList.toggle('selected')
    yearTxt.classList.toggle('selected')
})

billingCheckbox.addEventListener('input', () => setDisplayValues(inputRange.value))