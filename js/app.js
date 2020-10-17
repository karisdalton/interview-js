let newRequest = document.getElementById('new-request');
let submittedRequest = document.getElementById('submitted-request');
let laptop = document.querySelector('.laptop');
let mobile = document.querySelector('.mobile');
let devices = document.querySelector('.devices');
let form = document.querySelector('.form');
let form1 = document.querySelector('.form-1');
let form2 = document.querySelector('.form-2');
let form3 = document.querySelector('.form-3');
let change = document.querySelector('.change');
let change1 = document.querySelector('.change1');
let changeForm2 = document.querySelector('.changeForm2');
let changeForm3 = document.querySelector('.changeForm3');
let mobileImg1 = document.querySelector(".mobile-img1");
let mobileImg2 = document.querySelector(".mobile-img2");
let submitted = document.querySelector('.submitted');
let tbody = document.querySelector('.tbody');

document.addEventListener('DOMContentLoaded', () => {
    form.style.display = "none";
    form1.style.display = 'none';
    form2.style.display = 'none';
    form3.style.display = 'none';
    submitted.style.display = "none";
});
    
changeEl();
mobLap();
mobileImage();
requests();

function requests() {
    newRequest.addEventListener('click', () => {
        devices.style.display = "block";
        form.style.display = 'none';
        form1.style.display = "none";
        form2.style.display = "none";
        form3.style.display = "none";
        submitted.style.display = 'none';

        submittedRequest.classList.remove('active');
        newRequest.classList.add("active");
    });

    submittedRequest.addEventListener('click', () => {
      devices.style.display = "none";
      form.style.display = "none";
      form1.style.display = "none";
      form2.style.display = "none";
      form3.style.display = "none";
      submitted.style.display = "block";

      // // AJAX
      // let xhttp = new XMLHttpRequest();
      // xhttp.open(
      //   "GET",
      //   "https://recruitmentfiles.blob.core.windows.net/practicals/index-json.json "
      // );

      // xhttp.onload = () => {
      //   let myData = JSON.parse(xhttp.responseText);

      //   for (let i = 0; i < myData.requesters.length; i++) {
      //     let row = document.createElement("tr");
      //     row.innerHTML = `
      //     <td>${myData.requesters[i].name}</td>
      //     <td>${myData.requesters[i].role}</td>
      //     <td>${myData.requesters[i].education}</td>
      //     <td>${myData.requesters[i].email_address}</td>
      // `;

      //     tbody.append(row);
      //   }
      // };

      // xhttp.send();

      // JSON
      fetch("./content.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (let i = 0; i < data.requesters.length; i++) {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${data.requesters[i].name}</td>
                <td>${data.requesters[i].role}</td>
                <td>${data.requesters[i].education}</td>
                <td>${data.requesters[i].email_address}</td>
            `;

            tbody.append(row);
          }
        })
        .catch((error) => {
          console.error(
            "Something went wrong with retrieving the data!" + error
          );
        });

      submittedRequest.classList.add("active");
      newRequest.classList.remove("active");
    });
}

function changeEl() {
    change.addEventListener('click', () => {
        devices.style.display = 'block';
        form.style.display = 'none';
    });
    
    change1.addEventListener('click', () => {
        devices.style.display = 'block';
        form1.style.display = 'none';
    });

    changeForm2.addEventListener('click', () => {
        devices.style.display = "none";
        form1.style.display = "block";
        form2.style.display = "none";
        form3.style.display = "none";
    });

    changeForm3.addEventListener('click', () => {
        devices.style.display = "none";
        form1.style.display = "block";
        form2.style.display = "none";
        form3.style.display = "none";
    });
}

function mobLap() {
    laptop.addEventListener('click', () => {
        devices.style.display = 'none';
        form.style.display = 'block';
    });
    
    mobile.addEventListener('click', () => {
        devices.style.display = 'none';
        form1.style.display = 'block';
    });
    
}

function mobileImage() {
    mobileImg1.addEventListener("click", () => {
      form1.style.display = "none";
      form2.style.display = "block";
      form3.style.display = "none";
    });

    mobileImg2.addEventListener("click", () => {
      form1.style.display = "none";
      form2.style.display = "none";
      form3.style.display = "block";
    });
}


    
