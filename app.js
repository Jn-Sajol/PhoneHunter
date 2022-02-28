
document.getElementById('button').addEventListener('click', function () {
  const getInput = document.getElementById('button-input');
  const inputValue = getInput.value ;
  getInput.value = '';
  

  const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
  fetch(url)
    .then(res => res.json())
    .then(datas => display(datas))

})

function display(datas) {
  for (const phone of datas.data) {
    // console.log(phone.slug)
    const getdisplay = document.getElementById('card-group');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
            <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <h5 class="card-brand">${phone.brand}</h5>
              <button onclick ="displayDitailsFetch('${phone.slug}')" class="btn btn-primary" type="submit">Details</button>
            </div>
          </div>
          `
    getdisplay.appendChild(div)
  }
}

//fetch details of mobile
function displayDitailsFetch (slug){
  const url = `https://openapi.programming-hero.com/api/phone/${slug}`
  fetch(url)
  .then(res => res.json())
  .then(detailsData => displayMobileDetails(detailsData))
}

//diplay details of mobile
function displayMobileDetails (detailsData){
  const dataDetail = detailsData.data;
  const phoneDetailsDisplay = document.getElementById('phoneDetailsDisplay');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
            <div class="card">
            <img src="${dataDetail.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${dataDetail.mainFeatures.chipSet}</h5>
              <h5 class="card-brand">${dataDetail.releaseDate}</h5>
              `

              phoneDetailsDisplay.appendChild(div)
  
}