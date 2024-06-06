import React from "react";

const Jsx6 = () => {
	const users = [
		{ id: 1, firstName: "John", lastName: "Doe" },
		{ id: 2, firstName: "Susan", lastName: "Doe" },
		{ id: 3, firstName: "Alice", lastName: "Doe" },
		{ id: 4, firstName: "Michael", lastName: "Doe" },
		{ id: 5, firstName: "Josheph", lastName: "Doe" },
	];

	/* BIR ZAMANLAR JAVASCRIPT

    let strUsers = "";
    users.forEach(item=> {
        strUsers += `<li>${item.firstName} ${item.lastName}</li>`
    })
    document.getElementById("list").innerHTML = strUser; */

	// JSX yapilarinda geriye deger donduren iteration methodlari kullanilir.

	// Map kullanildiginda mutlaka map icindeki parent elemana unique key degeri verilmelidir

	return (
		<ul>
			{users.map((item) => (
				<li key={item.id}>
					{item.firstName} {item.lastName}
				</li>
			))}
		</ul>
	);
};

export default Jsx6;
