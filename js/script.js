const shareIcon = document.getElementsByClassName('social-icon'),
    shareBtn = document.getElementById('share-btn');

shareBtn.addEventListener('click', () => {
    // console.log(shareIcon)
    // this.classList.toggle('active')
    shareIcon[0].classList.toggle('active')
})
