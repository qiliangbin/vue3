function addRemoveClass (className: string, animateClass: string, isAdd: boolean) {
  const saveBtn: any = document.querySelector(className)
  if(isAdd) {
    saveBtn.classList.add('animate__animated')
    saveBtn.classList.add(animateClass)
  } else {
    saveBtn.classList.remove('animate__animated')
    saveBtn.classList.remove(animateClass)
  }
}

export {
  addRemoveClass
}
