import products from '../../../products.json'

export async function GET(request) {
  return new Response(JSON.stringify(products));
}
