import { doc, setDoc } from "firebase/firestore"
import { fireStore } from "../firebase.config"

const saveitem = async (item) => {
    await setDoc(doc(fireStore, 'curries', `${Date.now()}_${item.name}`), item, { merge: true })

}

export const importing = (data) => {
    for (let item of data) {
        saveitem(item)
    }
}
