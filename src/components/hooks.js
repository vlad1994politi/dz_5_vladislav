
export const useSearch = (arr, value, key) => {
  const newState = arr?.filter(item => item[ key ].toLowerCase().includes(value.toLowerCase()))
  return newState
}

export const useSort = (arr, type, key, keyLetter) => {
  switch (type) {
    case 'asc': {
      return arr?.sort((a, b) => a[key] - b[key])
    }
    case 'desc': {
      return arr?.sort((a, b) => b[key] - a[key])
    }
    case 'letter': {
      return arr?.sort((a, b) => a[keyLetter].localeCompare(b[keyLetter]))
    }
    default: return arr
  }
}