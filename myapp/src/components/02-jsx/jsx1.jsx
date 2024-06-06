// KURAL1: Component isimleri PascalCase olmalidir
// KURAL2: return icinde mutlaka bir parent element olmalidir.
// KURAL3: Elementlerin attibute lari camelCase olmalidir.
// KURAL4: Bazi attribute lar JS icin ozel bir anlam tasidigi icin JSX icinde isimleri degistirilmistir. class => className   for => htmlFor


const Jsx1 = () => {
	return (
		<section>
			<div className="red">Hello JSX</div>
			<div>Hello second line</div>
            <label htmlFor="">Html for</label>
		</section>
	);
};

export default Jsx1;
