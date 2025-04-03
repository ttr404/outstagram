import { Dialog, Transition } from '@headlessui/react'
import * as React from 'react'
import { HtmlView } from '@/components/html-view'
import { AuthorWithDate } from '@/components/author-with-date'
import { LikeButton } from '@/components/like-button'
import { MessageIcon, EditIcon } from '@/components/icons'
import { ButtonLink } from '@/components/button-link'
import { InferQueryOutput, trpc } from '@/lib/trpc'
import { AddCommentForm } from '@/components/add-comment-form'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

type Post = InferQueryOutput<'post.feed'>['posts'][number]

export default function PostModal({
  post,
  onClose,
  onLike,
  onUnlike,
}: {
  post: Post
  onClose: () => void
  onLike: () => void
  onUnlike: () => void
}) {
  const [showComments, setShowComments] = React.useState(false)
  const utils = trpc.useContext()
  const { data: session } = useSession()
  const router = useRouter()

  const postDetailQuery = trpc.useQuery(['post.detail', { id: post.id }], {
    enabled: showComments,
  })

  return (
    <Transition appear show={true} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background overlay */}
        <Transition.Child
          as={React.Fragment}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        {/* Modal content container */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="transition duration-300 transform"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="transition duration-200 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                {/* Close button */}
                <div className="flex justify-end mb-2">
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-black dark:hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                {/* Author and date */}
                <AuthorWithDate author={post.author} date={post.createdAt} />

                {/* Post content */}
                <HtmlView html={post.contentHtml} className="mt-6" />

                {/* Likes + comment + edit buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-6 clear-both">
                  <LikeButton
                    likedBy={post.likedBy}
                    onLike={onLike}
                    onUnlike={onUnlike}
                  />

                  <button
                    onClick={() => setShowComments(!showComments)}
                    className="inline-flex items-center text-sm font-medium text-secondary hover:underline"
                  >
                    <MessageIcon className="w-4 h-4 mr-1" />
                    {post._count.comments}
                    <span className="ml-1">
                      {showComments ? 'Hide' : 'Show'} Comments
                    </span>
                  </button>

                  {post.author.id === session?.user?.id && (
                    <button
                      onClick={() => router.push(`/post/${post.id}/edit`)}
                      className="inline-flex items-center text-sm font-medium text-secondary hover:underline"
                    >
                      <EditIcon className="w-4 h-4 mr-1" />
                      Edit
                    </button>
                  )}
                </div>

                {/* Animated Comments section */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    showComments
                      ? 'max-h-[1000px] opacity-100 scale-100 mt-8'
                      : 'max-h-0 opacity-0 scale-95'
                  } space-y-6`}
                >
                  {postDetailQuery.data && (
                    <>
                      {postDetailQuery.data.comments.length > 0 ? (
                        <ul className="space-y-6">
                          {postDetailQuery.data.comments.map((comment) => (
                            <li key={comment.id}>
                              <AuthorWithDate
                                author={comment.author}
                                date={comment.createdAt}
                              />
                              <div className="mt-2 ml-12">
                                <HtmlView html={comment.contentHtml} />
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-secondary">
                          No comments yet.
                        </p>
                      )}

                      <div className="pt-4 border-t border-secondary">
                        <AddCommentForm postId={post.id} />
                      </div>
                    </>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
