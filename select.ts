// import data
const data = require("./data.json")

class Page {

  // This is default values
  selectedData = null
  links = data
  selectedType = null
  selectedStatus = null

  // This will filter out links data and return that data and also store to selectedData
  getFilteredData() {

    // TYPE and STATUS null then return all
    if (!this.selectedStatus && !this.selectedType) {
      this.selectedData = this.links
      return this.selectedData
    }

    // Filter out based on (not STATUS and TYPE) OR (not TYPE and STATUS) or (TYPE and STATUS) both

    this.selectedData = this.links.filter(link => {

      // STATUS is null then apply filter for TYPE only
      if (this.selectedStatus === null && link.type === this.selectedType) {
        return true
      }

      // TYPE is null then apply filter for STATUS only
      else if (this.selectedType === null && link.status === this.selectedStatus) {
        return true
      }

      // apply both filter STATUS and TYPE
      else if (link.status === this.selectedStatus && link.type === this.selectedType) {
        return true
      }

      // on all condition fail default return false
      return false
    })

    return this.selectedData
  }

  onSelectType(value) {
    if (value) {
      this.selectedType = value
    } else {
      this.selectedType = null
    }
    this.getFilteredData()
  }

  onSelectStatus(value) {
    if (value) {
      this.selectedStatus = value
    } else {
      this.selectedStatus = null
    }
    this.getFilteredData()

  }

}

let pg = new Page()

// onSelect type or status
pg.onSelectStatus(false)
pg.onSelectType('mobile only')

console.log(pg.selectedData)