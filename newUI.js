class UI {
    constructor(){
        this.profile = document.querySelector(".profiles");
    }

    showData(user){
        
        this.profile.innerHTML ='';
        for ( let i in user) {
        
            
             this.profile.innerHTML += `
            
            <tr class="table-active">
           <th scope="row">${user[i].id}</th>
           <td >${user[i].name}</td>
           <th >${user[i].username}</td>
           <th>${user[i].email}</td>
           <th>${user[i].phone}</td>
           <th>${user[i].website}</td>
            </tr>
       `;
    };
  }

};

//USER SEARCH CLASS STARTS HERE 
class SearchUser extends UI{

    searching(lisdata){
       document.getElementById("searchUserText").addEventListener('keyup',(e)=>{
           
    let text = e.target.value;
    text = text.toLowerCase();
   let resulData = lisdata.filter((item)=>{
   
        if(e.target.value !== ""){
           if(item.name.toLowerCase().indexOf(text) != -1 || item.username.toLowerCase().indexOf(text) != -1 || item.email.toLowerCase().indexOf(text) != -1 || item.phone.indexOf(text) != -1 || item.website.toLowerCase().indexOf(text) != -1){
                 return  item;
          }else {
            console.log("found no match");
          }
        }
        
        
  });
  this.showData(resulData);
    if (resulData != "") {
      document.getElementById("searchUserText").classList.remove("is-invalid");
     document.getElementById("searchUserText").classList.add("is-valid");
    } else {

      document.getElementById("searchUserText").classList.add("is-invalid");

    }

    if(e.target.value == ""){

       this.showData(lisdata);
            document.getElementById("searchUserText").classList.remove("is-valid","is-invalid");

    }
     
        
    });
     
     
 }
}