// POPUP OVERLAY
// POPUP BOX
// POPUPBUTTON

var popoverlay=document.querySelector('.popup-overlay')
var popupbox=document.querySelector('.popup-box')
var popbutton=document.getElementById("add-popup-button")

popbutton.addEventListener('click', function(){
    popoverlay.style.display='block';
    popupbox.style.display='block';
})

var addbtn=document.getElementById('add-text')
var cancelbtn=document.getElementById('cancel-popup')


cancelbtn.addEventListener('click', function(event){
    event.preventDefault()
    popoverlay.style.display='none';
    popupbox.style.display='none';
})



// select container, note-container, addtext,note-title ,note-author-name, textarea

var container=document.querySelector(".container")
// var notecontainer=document.querySelector(".note-container")
var addtext=document.getElementById('add-text')
var notetitle=document.getElementById("note-title")
var noteauthorname=document.getElementById("note-author-name")
var textarea=document.getElementById("textarea")

var heading=document.getElementById('heading')



addtext.addEventListener('click', function(event) {
    // ... your existing code ...
    event.preventDefault()
    var para=document.getElementById('para')
    var div=document.createElement("div")
    div.setAttribute('class', 'note-container');
    div.innerHTML=`<h2 id='heading'>${notetitle.value}</h2>
    <hr>
    <h4>${noteauthorname.value}</h4>
    <p id='para'>${textarea.value}</p>
    <button class="delbutton" onclick="deletenote(event)">Delete</button>`
    container.append(div)
    popoverlay.style.display='none';
    popupbox.style.display='none';
  
    // Store data in local storage
    localStorage.setItem('notes', JSON.stringify([
      { title: notetitle.value, author: noteauthorname.value, text: textarea.value }
    ]));
  });
  
  // Retrieve data on page load
  window.addEventListener('load', function() {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      storedNotes.forEach(note => {
        // Create and append note divs from stored data
        const noteDiv = createNoteDiv(note.title, note.author, note.text);
        container.append(noteDiv);
      });
    }
  });
  
  function createNoteDiv(title, author, text) {
    const noteDiv = document.createElement("div");
    noteDiv.setAttribute('class', 'note-container');
    noteDiv.innerHTML = `
      <h2 id='heading'>${title}</h2>
      <hr>
      <h4>${author}</h4>
      <p id='para'>${text}</p>
      <button class="delbutton" onclick="deletenote(event)">Delete</button>
    `;
    return noteDiv;
  }
  











function deletenote(event){
    event.target.parentElement.remove()
}


// localStorage.setItem('is_container': container)
// localStorage.setItem('is_add_text', addtext)
// delbutton.addEventListener('click', function(event){
//     event.target.parentElement.remove()
// })


