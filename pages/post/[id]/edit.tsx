import { Layout } from '@/components/layout'
import { PostForm } from '@/components/post-form'
import { trpc } from '@/lib/trpc'
import type { NextPageWithAuthAndLayout } from '@/lib/types'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { Button } from '@/components/button'
import * as React from 'react'
import { Dialog, Transition } from '@headlessui/react'

const EditPostPage: NextPageWithAuthAndLayout = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const postId = Number(router.query.id)
  const postQuery = trpc.useQuery(['post.detail', { id: postId }])
  const editPostMutation = trpc.useMutation('post.edit', {
    onError: (error) => {
      toast.error(`Something went wrong: ${error.message}`)
    },
  })

  const deletePostMutation = trpc.useMutation('post.delete', {
    onSuccess: () => {
      toast.success('Post deleted')
      router.push('/')
    },
    onError: (error) => {
      toast.error(`Delete failed: ${error.message}`)
    },
  })

  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false)

  if (postQuery.data) {
    const postBelongsToUser = postQuery.data.author.id === session!.user.id

    return (
      <>
        <Head>
          <title>Edit {postQuery.data.title} - Outstagram</title>
        </Head>

        {postBelongsToUser ? (
          <>
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Edit &quot;{postQuery.data.title}&quot;
            </h1>

            <div className="mt-6">
              <PostForm
                isSubmitting={editPostMutation.isLoading}
                defaultValues={{
                  title: postQuery.data.title,
                  content: postQuery.data.content,
                }}
                backTo={`/post/${postQuery.data.id}`}
                onSubmit={(values) => {
                  editPostMutation.mutate(
                    {
                      id: postQuery.data.id,
                      data: { title: values.title, content: values.content },
                    },
                    {
                      onSuccess: () =>
                        router.push(`/post/${postQuery.data.id}`),
                    }
                  )
                }}
              />
            </div>

            <div className="mt-6">
              <Button
                variant="secondary"
                className="!text-red"
                onClick={() => setIsDeleteModalOpen(true)}
              >
                Delete this post
              </Button>
            </div>

            <Transition appear show={isDeleteModalOpen} as={React.Fragment}>
              <Dialog as="div" className="relative z-50" onClose={setIsDeleteModalOpen}>
                <Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={React.Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-lg bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title className="text-lg font-medium">
                          Delete Post?
                        </Dialog.Title>
                        <p className="mt-2 text-sm text-secondary">
                          Are you sure you want to delete this post? This action cannot be undone.
                        </p>
                        <div className="mt-4 flex justify-end gap-3">
                          <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>
                            Cancel
                          </Button>
                          <Button
                            className="!bg-red-600"
                            onClick={() => deletePostMutation.mutate(postQuery.data.id)}
                            isLoading={deletePostMutation.isLoading}
                          >
                            Delete
                          </Button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </>
        ) : (
          <div>You don&apos;t have permissions to edit this post.</div>
        )}
      </>
    )
  }

  if (postQuery.isError) {
    return <div>Error: {postQuery.error.message}</div>
  }

  return (
    <div className="animate-pulse">
      <div className="w-3/4 bg-gray-200 rounded h-9 dark:bg-gray-700" />
      <div className="mt-7">
        <div>
          <div className="w-10 h-5 bg-gray-200 rounded dark:bg-gray-700" />
          <div className="border rounded h-[42px] border-secondary mt-2" />
        </div>
        <div className="mt-6">
          <div className="w-10 h-5 bg-gray-200 rounded dark:bg-gray-700" />
          <div className="mt-2 border rounded h-9 border-secondary" />
          <div className="mt-2 border rounded h-[378px] border-secondary" />
        </div>
      </div>
      <div className="flex gap-4 mt-9">
        <div className="w-[92px] bg-gray-200 rounded-full h-button dark:bg-gray-700" />
        <div className="w-20 border rounded-full h-button border-secondary" />
      </div>
    </div>
  )
}

EditPostPage.auth = true

EditPostPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

export default EditPostPage
