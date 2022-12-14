import { useRouter } from 'next/router'

function Page() {
  const router = useRouter()
  const { id } = router.query

  return (
    <p>The ID is: {id}</p>
  )
}