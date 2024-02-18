const posts = document.getElementById("posts");
const title = document.getElementById("title");
const body = document.getElementById("body");

const data = {};
const callback = (e) => {
  const { name, value } = e.target;
  data[name] = value;
};

title.addEventListener("change", callback);
body.addEventListener("change", callback);

function onSubmit(e) {
  e.preventDefault();

  const post = document.createElement("div");
  post.classList.add("block");

  const postTitle = document.createElement("div");
  const postBody = document.createElement("div");

  postTitle.innerText = data.title;
  postBody.innerText = data.body;

  const btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.classList.add("delete");
  btnDelete.addEventListener("click", () => {

postTitle.parentElement.parentElement.remove();

    console.log("Delete");
  });
  const btnEdit = document.createElement("button");
  btnEdit.innerText = "Edit"; 
  btnEdit.classList.add("edit");
  btnEdit.addEventListener("click", () => {
    
   title.value=postTitle.innerText;
   body.value=postBody.innerText;
    
   postBody.parentElement.parentElement.remove(); 

    console.log("Edit");
  });

const button = document.createElement("div");
button.classList.add("btnALL");
 const DivP = document.createElement("div");
 DivP.classList.add("DivPa");


  DivP.appendChild(postTitle);
  DivP.appendChild(postBody);

  post.appendChild(DivP);

  post.appendChild(button);
  button.appendChild(btnEdit);
  button.appendChild(btnDelete);
  

  posts.appendChild(post);

  title.value = "";
  body.value = "";
}