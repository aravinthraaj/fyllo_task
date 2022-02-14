export function getData(data, parent, child) {
  function findRepeated(parent, child, results) {
    if (child in results[parent]) {
      results[parent][child] += 1
    } else {
      results[parent][child] = 1
    }
    return results
  }

  function extractStatistics(data, objKey) {
    let statistics = {}

    for (let key in data) {
      statistics[key] = new Array()
      for (let childkey in data[key]) {
        let tempdata = { [objKey]: childkey, value: data[key][childkey] }
        statistics[key].push(tempdata)
      }
    }
    return statistics
  }
  // result looks like this
  // {
  //   'Andaman & Nicobar': { DAP: 5, MAP: 5, MOP: 5, NPK: 5, TSP: 5, UREA: 5, SSP: 5 },
  //   'Andhra Pradesh': { DAP: 5, MAP: 5, MOP: 5, NPK: 5, TSP: 5, UREA: 5, SSP: 5 },
  //   'Arunachal Pradesh': { DAP: 5, MAP: 5, MOP: 5, NPK: 5, TSP: 5, UREA: 5, SSP: 5 },
  // }

  let states = {}
  // let parent = "state"
  // let child = "product"
  for (let obj of data) {
    if (!states.hasOwnProperty(obj[parent])) {
      states[obj[parent]] = new Object()
      states = findRepeated(obj[parent], obj[child], states)
    } else {
      states = findRepeated(obj[parent], obj[child], states)
    }
  }
  // data to be exported
  let finaldata = extractStatistics(states, child)

  return finaldata
}

export function capitalizeWords(string) {
  return string.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase()
  })
}

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export const states = [
  "Andaman & Nicobar",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chattishgarh",
  "Dadra & Nagar Haveli",
  "Delhi",
  "Goa",
  "Gujarat",
  "Harayana",
  "Himachal Pradesh",
  "Jammu & Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharastra",
  "Manipur",
  "Megalaya",
  "Mizoram",
  "Nagaland",
  "Orissa",
  "Pondicherry",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Tripura",
  "Telangana",
  "Uttar Pradesh",
  "Uttaranchal",
  "West Bengal",
  "Daman & Diu",
  "Lakshadweep",
  "Sikkim",
]
