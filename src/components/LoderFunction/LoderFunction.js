import { getData } from "../Utilise/Utilitis"

const loderAplied = async() => {
    const res = await fetch('/feature.json')
    const data = await res.json()
    const get = getData()
    const newArr = []
    for(const id in get) {
        const getEd = data.find(saveEd => saveEd.id == id) 
       
        if(getEd){
            const qun = get[id]
            getEd.quantity = qun
            newArr.push(getEd)
        }
    }
    return newArr
}

export default loderAplied