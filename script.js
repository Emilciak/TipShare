const bill = document.querySelector("#money");
const people = document.querySelector("#people");
const parseInttip = document.querySelector("#tip");
const error = document.querySelector(".error");
const btn = document.querySelector(".btn");
const costInfo = document.querySelector(".bill-info");
const cost = document.querySelector(".cost");

const validator = () => {
	if (bill.value == "" || people.value == "" || tip.value == 0) {
		error.textContent = "Fill all fields";
        costInfo.style.display = "none";
	} else if (bill.value <= 0) {
		error.textContent = "Bill cant be negative";
        costInfo.style.display = "none";
	} else if (people.value <= 0) {
		error.textContent = "People cant be negative";
        costInfo.style.display = "none";
	} else {
        error.textContent = "";
		showBill();
	}
};

const showBill = () => {
	const newPrice = parseFloat(bill.value);
	const newPeople = parseInt(people.value);
	const newTip = parseFloat(tip.value);
	const splitBill = (newPrice + (newPrice * newTip)) / newPeople;
	costInfo.style.display = "block";
	cost.textContent = splitBill.toFixed(2);
};
btn.addEventListener("click", validator);
