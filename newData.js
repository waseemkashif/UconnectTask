class FakeData{
    
    //Get request 
  async  getData(url){
       const resposeData= await fetch(url);
       const data = await resposeData.json();
       return data;
    }

}