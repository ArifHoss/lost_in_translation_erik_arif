import withAuth from "../hoc/withAuth"
import TranslationForm from "../components/Translation/TranslationForm"

const Translation = () => {
    return (
    <>
        <h1>Translation</h1>
        <TranslationForm/>

    </>
    )
}
export default withAuth(Translation)