// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';
showHideBtn.setAttribute('aria-expanded', 'false');  // aria-expanded 
showHideBtn.onclick = function() {
  const isExpanded = showHideBtn.getAttribute('aria-expanded') === 'true';  // theck state
  showHideBtn.setAttribute('aria-expanded', !isExpanded);  // toggle state
  showHideBtn.textContent = isExpanded ? 'show comments' : 'hide comments';  // toggle button text
  commentWrapper.style.display = isExpanded ? 'none' : 'block';  // toggle comments visibility
};
showHideBtn.addEventListener('keydown', function(e) {
  if (e.key === 'enter') {
    showHideBtn.click();
  }
});
// functionality for adding a new comment via the comments form
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', function(e) {
  e.preventDefault();  // no normal subs
  submitComment();
});

// adds validation
function submitComment() {
  const nameValue = nameField.value.trim();  // gets rid of extra space
  const commentValue = commentField.value.trim();

  // check if its field
  if (!nameValue || !commentValue) {
    alert('Please fill in both fields before submitting.');  // if its empty
    return;  

  // new  comment to the luist
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';  // clear inputs
  commentField.value = '';
  nameField.focus();  // goes to name area
}

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;
  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;
  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  nameField.value = '';
  commentField.value = '';
  nameField.focus();
}};
