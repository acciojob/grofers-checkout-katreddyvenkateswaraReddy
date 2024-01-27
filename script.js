const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

const prices = document.getElementsByClassName("price");
	let sum = 0;
	for(let i = 0; i < prices.length; i++ ){
		sum +=parseInt(prices[i].textContent);
	}
  const total = document.querySelector("#ans");
	total.textContent = "total:" + sum;
};

getSumBtn.addEventListener("click", getSum);
