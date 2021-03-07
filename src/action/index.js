export const getData = async params => {
  try {
    const response = await fetch(`http://api.mathjs.org/v4/?expr=${params}`)
      .then(response => response.json())
      .then(data => {
        return { data: `${data}`, status: 200 }
      })

    return response
  } catch (err) {
    alert(err)
  }
}
