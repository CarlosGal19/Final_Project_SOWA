document.addEventListener('DOMContentLoaded', fetchData());

async function fetchData() {
    try {
        fetch('http://localhost:3000/categories')
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });
    } catch (error) {
        console.log(error);
    }
}
