        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
        import { getFirestore, collection, onSnapshot, addDoc, query, orderBy} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyCTwBqRjhN0qg9BeVpYN7QEajcW5vOWLVY",
          authDomain: "dasinventorysystem-21f92.firebaseapp.com",
          projectId: "dasinventorysystem-21f92",
          storageBucket: "dasinventorysystem-21f92.appspot.com",
          messagingSenderId: "298240659810",
          appId: "1:298240659810:web:9328244ae02b264bb7dc3b",
          measurementId: "G-NMWRNZKV8Y"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        // Initialize Cloud Firestore and get a reference to the service
        const db = getFirestore(app);

function addProduct(){
    const myModalAlternative = new bootstrap.Modal('#addProductModal', options);
};

function addProductSubmit(){
    alert("Helo!");
};

onSnapshot(query(collection(db,"dasInventorySystem")), snapshot => {
    document.querySelector(`#tableArea`).innerHTML = "";

    snapshot.forEach(dasInventorySystem => {
        let inventoryItemRow = 
        `
        <tr class="text-center">
            <td><span><button class="btn"><i class="fa-solid fa-pen-to-square text-success fs-4"></i></button><button class="btn"><i class="fa-regular fa-trash-can text-danger fs-4"></i></button></span></td>
            <td>${dasInventorySystem.data().brandName}</td>
            <td>${dasInventorySystem.data().partName}</td>
            <td>${dasInventorySystem.data().partNo}</td>
            <td>${dasInventorySystem.data().engineNo}</td>
            <td>${dasInventorySystem.data().productDescription}</td>
            <td>${dasInventorySystem.data().productPrice}</td>
            <td>${dasInventorySystem.data().quantity}</td>
            <td>${dasInventorySystem.data().dateArrived}</td>
            <td>${dasInventorySystem.data().supplier}</td>
        </tr>
        `;
        document.querySelector(`#tableArea`).innerHTML += inventoryItemRow;
    })
});

// onSnapshot(query(collection(db,"dasInventorySystem")), snapshot => {
//     document.querySelector(`#tableArea`).innerHTML = "";

//     snapshot.forEach(dasInventorySystem => {
//         let inventoryItemRow = 
//         `
//         <tr class="text-center">
//             <td><span><button class="btn"><i class="fa-solid fa-pen-to-square text-success fs-4"></i></button><button class="btn"><i class="fa-regular fa-trash-can text-danger fs-4"></i></button></span></td>
//             <td>${dasInventorySystem.data().brandName}</td>
//             <td>${dasInventorySystem.data().partName}</td>
//             <td>${dasInventorySystem.data().partNo}</td>
//             <td>${dasInventorySystem.data().engineNo}</td>
//             <td>${dasInventorySystem.data().productDescription}</td>
//             <td>${dasInventorySystem.data().price}</td>
//             <td>${dasInventorySystem.data().quantity}</td>
//             <td>${dasInventorySystem.data().dateArrived}</td>
//             <td>${dasInventorySystem.data().supplier}</td>
//         </tr>
//         `;
//         document.querySelector(`#tableArea`).innerHTML += inventoryItemRow;
//     })
// });