import { useEffect, useRef } from 'react'
declare global {
  interface Window {
    cloudinary: any
  }
}

const UploadButton = ({ onUpload }: { onUpload: (url: string) => void }) => {
  const cloudinaryRef = useRef<any>()
  const widgetRef = useRef<any>()

  useEffect(() => {
    // Make sure Cloudinary widget is available
    if (typeof window !== 'undefined') {
      cloudinaryRef.current = window.cloudinary
      widgetRef.current = cloudinaryRef.current.createUploadWidget(
        {
          cloudName: 'dndjz3v3h', // 🔁 Replace with your Cloudinary cloud name
          uploadPreset: 'ml_default', // 🔁 Replace with your unsigned upload preset
          sources: ['local', 'url', 'camera'],
          multiple: false,
          cropping: false,
        },
        (error: any, result: any) => {
          if (!error && result && result.event === 'success') {
            onUpload(result.info.secure_url)
          }
        }
      )
    }
  }, [onUpload])

  return (
    <button
      type="button"
      onClick={() => widgetRef.current?.open()}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Upload Image
    </button>
  )
}

export default UploadButton
