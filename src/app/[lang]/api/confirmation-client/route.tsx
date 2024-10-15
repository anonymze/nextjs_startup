export async function POST() {
  const data = {
		salut: 'yes'
	}
 
  return Response.json({ data })
}