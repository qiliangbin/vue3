import { uploadImgApi } from '@/api/upload'

async function uploadFile(e: any):Promise<string> {
  const formData = new FormData()
  const file = e.target.files[0]
  formData.append('files', file)
  const res: any = await uploadImgApi(formData)
  return res.data
}

export { 
  uploadFile
}