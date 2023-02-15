async function fetchData(){
    



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bea96afe0cmsh4304f7ca7294577p123703jsn803e07113ffa',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }

    };
    
   const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=New%20York&minDate=2023-02-16&maxDate=2023-02-18&page=1', options)
   const record = await res.json()  

   document.getElementById("concerts").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
   console.log('record',record)
   
       

}
fetchData();

