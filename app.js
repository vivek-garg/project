let books = [
  {author: 'Thomas Pynchon', title: 'Bleeding Edge'},
  {author: 'Haruki Murakami', title: '1Q84'},
  {author: 'John D MacDonald', title: 'Nightmare in Pink'},
  {author: 'Ncholas Zakas', title: 'Understanding Ecmascript 6'},
  {author: 'Thomas Phillips', title: 'Long Slow Distance'}
]
let users=[];
function authSearch(){
	let aName=document.getElementById('authorSearch').value
	let name= books.filter((x)=>x.author==(aName))
	try{
		document.getElementById('result').innerHTML="yes we have at least one book by"+name[0].author
	}
	catch(err){
		document.getElementById('result').innerHTML='sorry no books by'+ aName
	}

}
function addBook(book){
	books.push({author:document.getElementById('author').value,title:document.getElementById("addbook").value});
	document.getElementById("author").value="";
	document.getElementById("addbook").value="";
}
function addlibraryuser(){
var username=document.getElementById('username');
var useremail=document.getElementById('useremail');
if(username.value==''){
	alert('Please Enter Your Name');
	return;
}
else if(useremail.value==''){
	alert('Please Enter Your email');
	return;
}
else{
	users.push({username:username.value,useremail:useremail.value});
	alert(' Library user added');
}



}

