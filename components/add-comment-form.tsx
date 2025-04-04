import { Button } from '@/components/button'
import { MarkdownEditor } from '@/components/markdown-editor'
import { trpc } from '@/lib/trpc'
import toast from 'react-hot-toast'
import * as React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type CommentFormData = {
  content: string
}

export function AddCommentForm({ postId }: { postId: number }) {
  const [markdownEditorKey, setMarkdownEditorKey] = React.useState(0)
  const utils = trpc.useContext()

  const addCommentMutation = trpc.useMutation('comment.add', {
    onSuccess: () => {
      return utils.invalidateQueries(['post.detail', { id: postId }])
    },
    onError: (error) => {
      toast.error(`Something went wrong: ${error.message}`)
    },
  })

  const { control, handleSubmit, reset } = useForm<CommentFormData>()

  const onSubmit: SubmitHandler<CommentFormData> = (data) => {
    addCommentMutation.mutate(
      {
        postId,
        content: data.content,
      },
      {
        onSuccess: () => {
          reset({ content: '' })
          setMarkdownEditorKey((key) => key + 1)
        },
      }
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="content"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <MarkdownEditor
            key={markdownEditorKey}
            value={field.value}
            onChange={field.onChange}
            onTriggerSubmit={handleSubmit(onSubmit)}
            required
            placeholder="Comment"
            minRows={4}
          />
        )}
      />
      <div className="mt-4">
        <Button
          type="submit"
          isLoading={addCommentMutation.isLoading}
          loadingChildren="Adding comment"
        >
          Add comment
        </Button>
      </div>
    </form>
  )
}
