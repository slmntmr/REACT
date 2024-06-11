const API_URL = "https://664e4047fafad45dfadf8961.mockapi.io/api/v1";

const getAllProducts = async () => {
	const res = await fetch(`${API_URL}/products`);
	if (!res.ok) throw new Error("Something went wrong");
	const data = await res.json();
	return data;
};

const getProduct = async (id) => {
	const res = await fetch(`${API_URL}/products/${id}`);
	if (!res.ok) throw new Error("Something went wrong");
	const data = await res.json();
	return data;
};

const createProduct = async (product) => {
	const res = await fetch(`${API_URL}/products`, {
		method: "post",
		body: JSON.stringify(product),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (!res.ok) throw new Error("Something went wrong");
	const data = await res.json();
	return data;
};

const updateProduct = async (id, product) => {
	const res = await fetch(`${API_URL}/products/${id}`, {
		method: "put",
		body: JSON.stringify(product),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (!res.ok) throw new Error("Something went wrong");
	const data = await res.json();
	return data;
};

const deleteProduct = async (id) => {
	const res = await fetch(`${API_URL}/products/${id}`, {
		method: "delete",
	});
	if (!res.ok) throw new Error("Something went wrong");
	const data = await res.json();
	return data;
};

export {
	getAllProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct,
};
