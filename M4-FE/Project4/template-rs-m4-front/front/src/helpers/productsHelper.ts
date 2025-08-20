import { IProduct } from "@/interfaces/types";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB(): Promise<IProduct[]> {
  try {
    const res = await fetch(`${APIURL}/products`, {
      next: { revalidate: 1200 },
    });
    const products: IProduct[] = await res.json();
    return products;
  } catch (error: any) {
    throw new Error(`Error fetching products: ${error}`);
  }
}
