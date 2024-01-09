import { BASE_URL } from '../constant'
function useSubmitResponse() {
    const handleSubmit = async (content) => {
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: { "content-type": "application/json" },
                body: JSON.stringify(content)
            })
            const json = await response.json();
            console.log(json);
            if (window.confirm('Response submitted succesfully')) {
                window.location.reload();
            }
        }
        catch (err) {
            console.error(err);
            alert('Something went wrong')
        }
    }

    return { handleSubmit }
}

export default useSubmitResponse;