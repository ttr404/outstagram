import { Layout } from '@/components/layout'
import { PostForm } from '@/components/post-form'
import { trpc } from '@/lib/trpc'
import type { NextPageWithAuthAndLayout } from '@/lib/types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import UploadButton from '@/components/UploadButton'
import { useState } from 'react'

const NewPostPage: NextPageWithAuthAndLayout = () => {
  const router = useRouter()
  const [imageUrl, setImageUrl] = useState('')

  const addPostMutation = trpc.useMutation('post.add', {
    onError: (error) => {
      toast.error(`Something went wrong: ${error.message}`)
    },
  })

  return (
    <>
      <Head>
        <title>New Post - Beam</title>
      </Head>

      <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
        New post
      </h1>
      <div className="mt-4">
        <UploadButton onUpload={(url) => setImageUrl(url)} />
        {imageUrl && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">Uploaded Image Preview:</p>
            <img
              src={imageUrl}
              alt="Uploaded"
              className="mt-2 max-w-full rounded-md shadow"
            />
          </div>
        )}
      </div>

      <div className="mt-6">
        <PostForm
          isSubmitting={addPostMutation.isLoading}
          defaultValues={{
            title: '',
            content: '',
          }}
          backTo="/"
          onSubmit={(values) => {
            addPostMutation.mutate(
              {
                title: values.title,
                content: values.content + `\n\n![alt text](${imageUrl})`, // 👈 append image markdown
              },
              {
                onSuccess: (data) => router.push(`/post/${data.id}`),
              }
            )
          }}
        />
      </div>
    </>
  )
}

NewPostPage.auth = true

NewPostPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

export default NewPostPage
