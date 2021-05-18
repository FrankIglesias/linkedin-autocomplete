const messages = {
  english: {
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png',
    message: `Hi!
  I'm not currently looking for a professional change.
  Thanks for taking me into account.
  Lets chat in the future if the opportunity is still open.
  Regards!`},
  spanish: {
    flag: 'https://img.freepik.com/free-vector/spanish-flag-spain-country-national-identity_8071-1617.jpg?size=626&ext=jpg',
    message: `Buenas como va?
  Actualmente no me encuentro en búsqueda de un cambio laboral.
  Saludos!`}
}

const handleClick = lang => () => {
  let el = document.querySelector('.msg-form__contenteditable');
  let event = new Event('focus', { bubbles: true });
  el.dispatchEvent(event);
  el = document.querySelector('.msg-form__contenteditable > p');
  el.innerText = messages[lang].message;
  el = document.querySelector('.msg-form__contenteditable');
  event = new Event('input', { bubbles: true });
  el.dispatchEvent(event);
}

window.onload = function() {
  Object.entries(messages).forEach(([key, language]) => {
    let button = document.createElement('button');
    button.innerHTML = `<img src="${language.flag}" height="10px" style="margin: 4px" />`;
    button.type = "button";
    button.onclick = handleClick(key);
    document.querySelector('.msg-form__left-actions.display-flex').appendChild(button);
  })
};
