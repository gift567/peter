const ExpandingFlexCard = document.querySelectorAll('.expanding-flex-cards')


ExpandingFlexCard.forEach(efcEl =>{
        efcEl.querySelectorAll('.expanding-flex-cards-item:not(active)').forEach(item => {
            item.addEventListener('click', function(e){
                e.preventDefault()
                efcEl.querySelector('.expanding-flex-cards-item.active').classList.remove('active')
                this.classList.add('active')
            })
        })
})