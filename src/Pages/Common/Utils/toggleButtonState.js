const disableButton = (e) => {
    e.disabled = true
    e.style.backgroundColor = '#399156'
    e.style.cursor = 'auto'
}

const enableButton = (e) => {
    e.disabled = false
    e.style.backgroundColor = '#55c57a'
    e.style.cursor = 'pointer'
}

export { disableButton, enableButton }