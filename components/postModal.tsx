import { Dialog } from '@headlessui/react'
import { HtmlView } from '@/components/html-view'
import { AuthorWithDate } from '@/components/author-with-date'
import { LikeButton } from '@/components/like-button'
import { MessageIcon } from '@/components/icons'
import { ButtonLink } from '@/components/button-link'
import { InferQueryOutput } from '@/lib/trpc'
import * as React from 'react'

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
  return (
    <Dialog open={true} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded shadow-lg p-6 overflow-y-auto max-h-[90vh]">
          <div className="flex justify-end">
            <button onClick={onClose} className="text-sm text-gray-500 hover:text-black dark:hover:text-white">
              ✕
            </button>
          </div>

          <AuthorWithDate author={post.author} date={post.createdAt} />

          <HtmlView html={post.contentHtml} className="mt-6" />

          <div className="flex gap-4 mt-6 clear-both">
            <LikeButton
              likedBy={post.likedBy}
              onLike={onLike}
              onUnlike={onUnlike}
            />
            <ButtonLink
              href={`/post/${post.id}#comments`}
              variant="secondary"
            >
              <MessageIcon className="w-4 h-4 text-secondary" />
              <span className="ml-1.5">{post._count.comments}</span>
            </ButtonLink>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
