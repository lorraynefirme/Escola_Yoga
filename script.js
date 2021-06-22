const work = document.querySelector('.destaque')

function typeWriter(element){
  const ArrayText = element.innerHTML.split('')
  element.innerHTML = ''

  ArrayText.forEach((letra,i) => {
    setTimeout(()=> {
      letra === ' ' ? element.innerHTML = '' : element.innerHTML += letra
    }, 230 * i)
  })

  setInterval(() => {
    ArrayText.forEach((letra,i) => {
      setTimeout(()=> {
        letra === ' ' ? element.innerHTML = '' : element.innerHTML += letra
      }, 230 * i)
    });
  }, ArrayText.length * 230 + 10)

}

typeWriter(work)