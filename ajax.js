const director1=document.getElementById("founder");
const movie_container=document.getElementById("movie");
const Rating_container=document.getElementById("Rating");
const id2= document.getElementById("check error");
const xhr =new XMLHttpRequest();
const button= document.getElementById("button");
button.onclick =function(){
	const inputvalue=document.getElementById("movie-search").value;
	xhr.open("Get","https://www.omdbapi.com/?t="+inputvalue+"&apikey=a9b840b2");
	xhr.onloadend=postAjaxFunction;
	xhr.send();
};
const postAjaxFunction=function(){
	if (xhr.status===200){
		const response=JSON.parse(xhr.responseText);
		const director=response.Director;
		const tittle=response.Title;
		director1.innerHTML="Director:"+director;
		movie_container.innerHTML="Movie Name:"+tittle;
		const Rating=response.Ratings[0].Value;
        Rating_container.innerHTML="Rating:"+Rating; 	
	} else{
		id2.innerHTML="Something went wrong,";
	}
};
