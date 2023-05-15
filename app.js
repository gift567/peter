import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaOWw-s-AlwFnL36nsqLetjaYBGrXXak8",
  authDomain: "too-legit-zambia-magazine.firebaseapp.com",
  projectId: "too-legit-zambia-magazine",
  storageBucket: "too-legit-zambia-magazine.appspot.com",
  messagingSenderId: "340212251192",
  appId: "1:340212251192:web:3e9bb1f7fa22d7c03644cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize count value
const countRef = doc(db, 'counters/counter');
getDoc(countRef).then((doc) => {
	if (doc.exists()) {
		document.getElementById("count").innerHTML = doc.data().count;
	}
});

// Add event listener to the increment button
const incrementButton = document.getElementById("incrementButton");
incrementButton.addEventListener("click", () => {
	const count = parseInt(document.getElementById("count").innerHTML);
	const newCount = count + 1;
	document.getElementById("count").innerHTML = newCount;
	setDoc(countRef, { count: newCount });
});
