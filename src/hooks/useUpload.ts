import { uploadImgApi } from '@/api/upload'

async function uploadFile(e: any):Promise<string> {
  const formData = new FormData()
  const file = e.target.files[0]
  formData.append('files', file)
  const res: any = await uploadImgApi(formData)
  return res.data
}

async function downloadFile(url: string, name: string) {
  var image = new Image();
  image.setAttribute("crossOrigin", "anonymous");
  image.onload = function() {
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    var context = canvas.getContext("2d"); 
    context.drawImage(image, 0, 0, image.width, image.height);
    var url = canvas.toDataURL("image/png");
    var a = document.createElement("a"); 
    var event = new MouseEvent("click"); 
    a.download = name || "photo"; 
    a.href = url; 
    a.dispatchEvent(event);
  };
  image.src = url;  // 指定图片的来源，这是需要我们提供的
}

export { 
  uploadFile,
  downloadFile
}