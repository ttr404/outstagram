import { Button } from '@/components/button'
import { HeartFilledIcon, HeartIcon } from '@/components/icons'
import { classNames } from '@/lib/classnames'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useSession } from 'next-auth/react'
import * as React from 'react'
import { useState, useEffect } from 'react'

export const MAX_LIKED_BY_SHOWN = 50

type LikeButtonProps = {
  likedBy: {
    user: {
      id: string
      name: string | null
    }
  }[]
  responsive?: boolean
  onLike: () => void
  onUnlike: () => void
}

export function LikeButton({
  likedBy,
  responsive,
  onLike,
  onUnlike,
}: LikeButtonProps) {
  const { data: session } = useSession()

  const currentUserId = session?.user.id

  // Local state to track like status and count
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likedBy.length)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // On initial load, check if current user liked this
    if (currentUserId) {
      const userLiked = likedBy.some((item) => item.user.id === currentUserId)
      setIsLiked(userLiked)
    }
  }, [likedBy, currentUserId])

  const handleClick = () => {
    if (isAnimating || !currentUserId) return

    const willLike = !isLiked
    setIsLiked(willLike)
    setLikeCount((prev) => prev + (willLike ? 1 : -1))

    if (willLike) {
      setIsAnimating(true)
      onLike()
      setTimeout(() => setIsAnimating(false), 1000)
    } else {
      onUnlike()
    }
  }

  return (
    <Tooltip.Root delayDuration={300}>
      <Tooltip.Trigger
        asChild
        onClick={(event) => event.preventDefault()}
        onMouseDown={(event) => event.preventDefault()}
      >
        <Button
          variant="secondary"
          responsive={responsive}
          className={classNames(
            'transition-colors overflow-hidden [transform:translateZ(0)] space-x-1.5',
            isLiked && 'border-red-300 !bg-red-100 dark:!bg-red-900 dark:border-red-700',
            isAnimating && '!border-red-600 !bg-red-600 dark:!bg-red-600'
          )}
          onClick={handleClick}
        >
          <span className="relative block w-4 h-4 shrink-0">
            {isLiked && !isAnimating ? (
              <HeartFilledIcon className="absolute inset-0 text-red scale-1" />
            ) : (
              <>
                <HeartIcon
                  className={classNames(
                    'absolute inset-0 transition-all text-red fill-transparent transform-gpu',
                    isAnimating && '!scale-[12] !fill-red-600'
                  )}
                />
                <span
                  className={classNames(
                    'absolute w-4 h-4 top-0 left-[-.5px] rounded-full ring-inset ring-6 ring-gray-50 transition-all duration-300 transform-gpu z-10',
                    isAnimating ? 'scale-150 !ring-0' : 'scale-0'
                  )}
                ></span>
                <HeartFilledIcon
                  className={classNames(
                    'absolute inset-0 transition-transform delay-200 duration-300 text-gray-50 transform-gpu z-10 ease-spring',
                    isAnimating ? 'scale-1' : 'scale-0'
                  )}
                />
              </>
            )}
          </span>

          <span
            className={classNames(
              'relative z-10 tabular-nums',
              isAnimating && 'transition-colors duration-100 text-gray-50'
            )}
          >
            {likeCount}
          </span>
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content
        side="bottom"
        sideOffset={4}
        className={classNames(
          'max-w-[260px] px-3 py-1.5 rounded shadow-lg bg-secondary-inverse text-secondary-inverse sm:max-w-sm',
          likeCount === 0 && 'hidden'
        )}
      >
        <p className="text-sm">
          {likedBy
            .slice(0, MAX_LIKED_BY_SHOWN)
            .map((item) =>
              item.user.id === currentUserId ? 'You' : item.user.name
            )
            .join(', ')}
          {likeCount > MAX_LIKED_BY_SHOWN &&
            ` and ${likeCount - MAX_LIKED_BY_SHOWN} more`}
        </p>
        <Tooltip.Arrow offset={22} className="fill-gray-800 dark:fill-gray-50" />
      </Tooltip.Content>
    </Tooltip.Root>
  )
}
