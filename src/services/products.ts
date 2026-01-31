// src/services/products.ts

const apiBaseUrl =
	process.env.NEXT_PUBLIC_API_BASE_URL ||
	(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export type ProductType = {
	id: number
	name: string
	description: string
	price: number
	imageUrl: string
	inStock: number
}

export const fetchProducts = async () => {
	const products: ProductType[] = await fetch(`${apiBaseUrl}/api/products`).then(
		(res) => res.json()
	)
	return products
}

export const fetchProduct = async (id: string | number) => {
	const product: ProductType = await fetch(
		`${apiBaseUrl}/api/products/${id}`
	).then((res) => res.json())
	return product
}
