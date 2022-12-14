import { useRouter } from 'next/router'
import NavBar from '/components/nav.js'

function Page() {
    const router = useRouter()

    return (
    <>
        <NavBar />
        <p>This is a page for the list of all the universities</p>
    </>
    )
}