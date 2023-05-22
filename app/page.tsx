
const wait = (ms: number) => new Promise((resolve)=> setTimeout(resolve, ms))

export default async function Home() {

  await wait(3000)


  return (
    <h1>Home</h1>
  )
}
