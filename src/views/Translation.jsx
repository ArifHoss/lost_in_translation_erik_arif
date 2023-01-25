import withAuth from "../hoc/withAuth"
const Translation = () => {
    return (
    <>
        <h1>Translation</h1>


        <form>
            <fieldset>
                <label htmlFor="username">Input: </label>
                <input
                    type="text"
                    placeholder="translate this!"
                  />
            </fieldset>
            <button type="submit">
                Continue
            </button>
        </form>
    </>
    )
}
export default withAuth(Translation)