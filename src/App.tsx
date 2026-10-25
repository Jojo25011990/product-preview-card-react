type Product = {
	category: string;
	name: string;
	description: string;
	price: {
		current: number;
		original: number;
	};
	images: {
		desktop: string;
		mobile: string;
		alt: string;
	};
	add: string;
};

const product: Product = {
	category: "Perfume",
	name: "Gabrielle Essence Eau De Parfum",
	description:
		"A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
	price: {
		current: 149.99,
		original: 169.99,
	},
	images: {
		desktop: "/product-preview-card-react/images/image-product-desktop.jpg",
		mobile: "/product-preview-card-react/images/image-product-mobile.jpg",
		alt: "Gabrielle Essence Eau De Parfum by Chanel - Perfume bottle",
	},
	add: "Add to Cart",
};

const App = () => {
	const { category, name, description, price, images, add } = product;

	return (
		<main className="flex min-h-screen items-center justify-center bg-body-primary px-4 py-7">
			<article className="flex w-full max-w-85.75 flex-col overflow-hidden rounded-xl bg-white sm:max-w-150 sm:flex-row">
				<div className="h-60 w-full sm:h-auto sm:w-1/2">
					<picture>
						<source
							media="(max-width: 639px)"
							srcSet={images.mobile}
						/>
						<img
							src={images.desktop}
							alt={images.alt}
							className="h-full w-full object-cover"
							loading="lazy"
						/>
					</picture>
				</div>

				<div className="flex w-full flex-col p-6 sm:w-1/2 sm:p-8">
					<p className="mb-3 font-['Montserrat'] text-xs font-medium tracking-[5px] text-grey-primary uppercase sm:mb-5">
						{category}
					</p>

					<h1 className="mb-4 font-['Fraunces'] text-[32px] leading-8 font-bold text-dark-primary sm:mb-6">
						{name}
					</h1>

					<p className="mb-6 font-['Montserrat'] text-sm leading-5.75 font-medium text-grey-primary sm:mb-7">
						{description}
					</p>

					<div className="mb-5 flex items-center gap-5 sm:mb-7">
						<span className="font-['Fraunces'] text-[32px] leading-8 font-bold text-green-primary">
							${price.current.toFixed(2)}
						</span>

						<del className="font-['Montserrat'] text-[13px] font-medium text-grey-primary">
							${price.original.toFixed(2)}
						</del>
					</div>

					<button
						type="button"
						className="flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-green-primary font-['Montserrat'] text-sm font-bold text-white transition-colors duration-200 hover:bg-state-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-primary active:bg-state-primary"
					>
						<svg
							width="15"
							height="16"
							viewBox="0 0 15 16"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
								fill="currentColor"
							/>
						</svg>
						{add}
					</button>
				</div>
			</article>
		</main>
	);
};

export default App;
