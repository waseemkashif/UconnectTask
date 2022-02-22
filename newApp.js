const resData= new FakeData();
const ui = new UI;
 document.querySelector(".getMyData").addEventListener("click",function (){
        resData.getData('https://jsonplaceholder.typicode.com/users')
.then(data => {
    ui.showData(data);
    const search = new SearchUser;
    search.searching(data);
 })
.catch(err => console.log(err));
 document.getElementById("searchUserText").removeAttribute("disabled");
 });
