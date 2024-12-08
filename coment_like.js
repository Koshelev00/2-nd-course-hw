const comments = [
    {
      text: "Это первый комментарий",
      likes: 0,
      liked: false
    },
    {
      text: "Это второй комментарий",
      likes: 0,
      liked: false
    }
  ];
  console.log(comments);
  

  const initAddClickListeners = () => {
    let likeButtonsElements = document.querySelectorAll(".like-button")
    for (const likeButtonElements of likeButtonsElements) {
      likeButtonElements.addEventListener("click", (event) => {
        const index = event.target.dataset.index; 
        const comment = comments[index]; 
        if (comment.liked) {
          if (comment.likes > 0) {
            likeButtonElements.setAttribute('style', "background-image: url('liked_off.svg')");
            comment.likes--; 
            comment.liked = false;
          }


        } else {
          comment.likes++;
          comment.liked = true;
          likeButtonElements.setAttribute('style', "background-image: url('liked_on.svg')");
        }
        
        document.getElementById(`number-like-${index}`).value = comment.likes;
      })
    }
  }

  
function createCommentObject(text, likes, liked) {
  return {
    text: text,
    likes: likes || 0,
    liked: liked || false
  };
}


document.getElementById("add-comment").addEventListener("click", function() {
  let commentText = document.getElementById("comment-textarea").value;
  if (commentText) {
    const newComment = createCommentObject(commentText);
    commentText="";
    comments.push(newComment);
    document.getElementById("comment-textarea").value = "";
    renderComment(comments);
  } else {
    alert("Введите текст комментария");
  }
});

function renderComment(comments) {
  const container = document.getElementById("commentContainer"); 
  let likeButtonsElements = document.querySelectorAll(".like-button");
  container.innerHTML = comments.map((comment, index) => `
    <div>
      ${comment.text} <button class="like-button" data-index="${index}" style="background-image: url('liked_off.svg');"></button>
      <input class="number-like" type="number" name="" id="number-like-${index}" value="${comment.likes}" readonly value=0>
      <button class="delete-button" onclick="deleteComment(${index})" data-id="${comment.id}" style="background-image: url('delete.svg');"></button>
    </div>
  `).join(""); 
 
  initAddClickListeners();
}

renderComment(comments);

function deleteComment(index) {
  const comment = comments[index];
  comments.splice(index, 1); 
  renderComment(comments); 
}








