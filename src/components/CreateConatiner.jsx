import React, { useEffect, useState } from 'react'
import { MdAnalytics, MdCloudUpload, MdCurrencyRupee, MdFoodBank, MdTextFields } from 'react-icons/md'
import { categories } from "../utils/data"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../firebase.config'
import { toast } from 'react-toastify'
import { savedata } from '../utils/firebaseFunctions'
import Loader from './Loader'

const CreateConatiner = () => {

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        imageAsset: null,
        desc: "",
        stock: '',
        price: ''
    })
    const [isValid, setIsValid] = useState({
        isLoading: false,
        isError: false,
        valid: false
    })

    const chnageHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const uploadImage = (e) => {
        setIsValid({ ...isValid, isLoading: true })
        const { files } = e.target
        const storageRef = ref(storage, `Images/${Date.now()}_${files[0].name}`)
        const uploadTask = uploadBytesResumable(storageRef, files[0])
        uploadTask.on("state_changed",
            (snapshot) => {
                const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            },
            (error) => {
                if (error) {
                    setIsValid({ ...isValid, isError: true })
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setFormData({ ...formData, [e.target.name]: url })
                    setIsValid({ ...isValid, isLoading: false })
                    toast.success('Image uploaded successfully')
                })
            }
        )
    }

    const isFormValid = () => {
        const arr = Object.values(formData)
        const des = arr.every(e => e)
        setIsValid({ ...isValid, valid: des })
    }

    const saveHandler = () => {
        try {
            savedata(formData)
            toast.success("Item Created successfully")
            setFormData({
                title: '',
                category: '',
                imageAsset: null,
                desc: "",
                stock: '',
                price: ''
            })
        } catch (error) {
            toast.error("Error while saving data")
        }
    }

    useEffect(() => {
        document.title = "Create new item in VBzaar"
        isFormValid()
    }, [formData])

    return (
        <div className='min-h-screen -mt-20 md:-mt-30 pt-20 flex justify-center items-center'>
            <div className='border border-gray-200 shadow-md  p-3 w-[95%] md:w-[70%] rounded-md flex flex-col gap-4'>
                <div className='flex justify-center items-center w-full gap-2 border-b-2 '>
                    <MdFoodBank className='text-3xl text-textColor' />
                    <input type="text" name='title' className=' outline-none bg-transparent w-full' placeholder='Give me a title...!' onChange={chnageHandler} value={formData.title} />
                </div>
                <select name="category" id="category" className='p-2 w-full outline-none text-sm text-textColor' onChange={chnageHandler} value={formData.category}>
                    <option value="other" >Select Category</option>
                    {categories && categories.map(item => (
                        <option value={item.urlName} key={item.id}>{item.category}</option>
                    ))}
                </select>
                <div className='border border-dashed border-gray-300 h-52 md:h-64'>
                    {
                        !isValid.isLoading ? formData.imageAsset ? <img src={formData.imageAsset} alt={formData.title} className='w-full h-full object-contain' /> :
                            <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                    <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                                    <p className="text-gray-500 hover:text-gray-700">
                                        Click here to upload
                                    </p>
                                </div>
                                <input
                                    type="file"
                                    name="imageAsset"
                                    accept="image/*"
                                    onChange={uploadImage}
                                    className="w-0 h-0"
                                />
                            </label>
                            : <>
                                <Loader />
                            </>
                    }
                </div>
                <div className='flex justify-center items-center w-full gap-2 border-b-2 '>
                    <MdTextFields className='text-3xl text-textColor' />
                    <input type="text" name='desc' value={formData.desc} className=' outline-none bg-transparent w-full' placeholder='Give me some Description..!' onChange={chnageHandler} />
                </div>
                <div className='flex justify-center items-center w-full gap-2 border-b-2 '>
                    <MdAnalytics className='text-3xl text-textColor' />
                    <input type="text" name='stock' value={formData.stock} className=' outline-none bg-transparent w-full' placeholder='Stock Value' onChange={chnageHandler} />
                </div>
                <div className='flex justify-center items-center w-full gap-2 border-b-2 '>
                    <MdCurrencyRupee className='text-3xl text-textColor font-semibold' />
                    <input type="Number" name='price' value={formData.price} className=' outline-none bg-transparent w-full' placeholder='Price' onChange={chnageHandler} />
                </div>
                <div>
                    <button className='w-full bg-green-700 text-white p-2 rounded-lg' disabled={!isValid.valid} onClick={saveHandler}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateConatiner