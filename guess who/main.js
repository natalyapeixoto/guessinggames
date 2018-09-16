const table = document.querySelector("table")

const size = 5

let matrix = []
for (let i = 0; i < size; i++) {
	const row = document.createElement("tr")
	let cell_list = []
	for (let j = 0; j < size; j++) {
		const cell = document.createElement("td")
		
		row.appendChild(cell)
		cell_list.push(cell)
	}
	table.appendChild(row)
	matrix.push(cell_list)
}

	table.addEventListener("click", event => {
		var elem = event.target;
		elem.style.background =  "transparent";
	})
	