let main = document.getElementById('main')
document.getElementById('button').addEventListener('click', () => {
  const getInput = document.getElementById('button-input');
  const inputValue = getInput.value;
  if (inputValue == '') {
    alert('its empty')
    main.innerHTML = '';

  }
  else {
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
      .then(res => res.json())
      .then(datas => display(datas))
  }
  getInput.value = '';

})
//Mobile Display Search
const display = (datas) => {
  const conArray = datas.data;
  const cutData = conArray.slice(0, 20);
  // if (!cutData) {
  //   alert('No result found')
  // } 
    // console.log(cutData)
    for (const phone of cutData) {
      // console.log(phone.slug)
      const getdisplay = document.getElementById('card-group');
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
            <div class="card rounded">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
              <h5 class="card-brand">Phone Brand: ${phone.brand}</h5>
              <button onclick ="displayDitailsFetch('${phone.slug}')" class="btn btn-primary" type="submit">Details</button>
            </div>
          </div>
          `
      getdisplay.appendChild(div)
    }
    // main.innerHTML = '';
    // getdisplay.textContent = '';
    
  
}

//fetch details of mobile
const displayDitailsFetch = (slug) => {
  const url = `https://openapi.programming-hero.com/api/phone/${slug}`
  fetch(url)
    .then(res => res.json())
    .then(detailsData => displayMobileDetails(detailsData))
}

//diplay details of mobile
const displayMobileDetails = (detailsData) => {
  const dataDetail = detailsData.data;
  // console.log(dataDetail.sensors)
  const phoneDetailsDisplay = document.getElementById('phoneDetailsDisplay');
  const div = document.createElement('div');
  div.classList.add('col');
  div.innerHTML = `
            <div class="card bg-dark text-white">
            <img src="${dataDetail.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 >Phone Name: ${dataDetail.name}</h5>
            <h5 class="card-brand">Release Date: ${dataDetail.releaseDate ? dataDetail.releaseDate : 'Comming soon'} </h5>
              <h5 >Phone Features:</h5>
              <h5>Chipset: ${dataDetail.mainFeatures.chipSet}</h5>
              <h5>Display Size: ${dataDetail.mainFeatures.displaySize}</h5>
              <h5>Memory Details: ${dataDetail.mainFeatures.memory}</h5>
              <h5>Storage Details: ${dataDetail.mainFeatures.storage}</h5>
               <h5>Sensors: </h5>
               <h5> ${dataDetail.mainFeatures.sensors[0]}</h5>
               <h5> ${dataDetail.mainFeatures.sensors[1]}</h5>
               <h5> ${dataDetail.mainFeatures.sensors[2]}</h5>
               <h5> ${dataDetail.mainFeatures.sensors[3]}</h5>
               <h5> ${dataDetail.mainFeatures.sensors[4]}</h5>
               <h5> ${dataDetail.mainFeatures.sensors[5]}</h5>

               <h5 >Others:</h5>
              <h5>Bluetooth: ${dataDetail.others.Bluetooth}</h5>
              <h5>GPH: ${dataDetail.others.GPH}</h5>
              <h5>NFC: ${dataDetail.others.NFC}</h5>
              <h5>Radio: ${dataDetail.others.Radio}</h5>
              <h5>USB: ${dataDetail.others.USB}</h5>
              <h5>WLAN: ${dataDetail.others.WLAN}</h5>
               
              
              `

  phoneDetailsDisplay.appendChild(div)

}