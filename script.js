// vw0mZwdPoXKE8BwzT8rQ
// endpoint new endpoint good endpoint that is not bad
document.addEventListener("DOMContentLoaded", () => {
  const treeCount = document.getElementById("treeCount")
  const treeName = document.getElementById("treeName")
  const showTrees = document.getElementById("showTrees")

  showTrees.addEventListener("click", async (e) => {
    e.preventDefault();

    const treeLimit = treeCount.value
    const commonName = treeName.value
    const list = document.getElementById("treeList")
    list.innerHTML=("")

    if (!treeLimit) {
        console.error("Please enter a number of trees to display")
    }
    if (!commonName) {
        console.error("Please enter a tree name to search")
    }

    // forgot to use SoQL queries in the URL for an embarassingly long amount of debugging time. Like an extremely long time.
    const url = `https://data.winnipeg.ca/resource/hfwk-jp4h.json?$limit=${treeLimit}&$where=upper(common_name) like upper('%25${commonName}%25')`

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`)
      }
      const trees = await response.json()
      console.log(trees)
      trees.forEach(tree => {
        const li = document.createElement("li")
        li.textContent = ` Tree ID: ${tree.tree_id} || Common Name: ${tree.common_name} || Scientific Name: ${tree.botanical_name} || Diameter: ${tree.diameter_at_breast_height}" `
        list.appendChild(li)
      })
    } catch (error) {
      console.error("Failed to fetch trees.", error)
    }
  })
})
