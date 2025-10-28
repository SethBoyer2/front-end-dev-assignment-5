// vw0mZwdPoXKE8BwzT8rQ
// endpoint https://data.winnipeg.ca/api/v3/views/h923-dxid/query.json
// endpoint new endpoint good endpoint that is not bad
async function getTrees () {
    try {
        const response = await fetch("https://data.winnipeg.ca/resource/hfwk-jp4h.json")
    if(!response.ok) {
        throw new Error(`HTTP Error: Status: ${response.status}`)
    }
        return response.json();
    } catch (error) {
        console.error("Failed to fetch trees.")
    }
}

async function listTrees(){
    const trees = await getTrees();
    console.log(trees)
}

listTrees();