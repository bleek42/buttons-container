window.onload = () => {
	const buttonFive = document.getElementById("btn5");
	const nums = [1, 2, 3, 6, 9, 8, 7, 4];
	const ids = [...nums];
	buttonFive.addEventListener("click", (ev) => {
		ev.preventDefault();
		nums.unshift(nums.pop());
		let i = 0;
		while (i <= 7) {
			document.getElementById(`btn${ids[i]}`).innerHTML = nums[i];
			i++;
		}
	});
};
