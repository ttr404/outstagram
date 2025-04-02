import { Layout } from '@/components/layout'
import { getQueryPaginationInput, Pagination } from '@/components/pagination'
import { PostSummarySkeleton } from '@/components/post-summary-skeleton'
import { InferQueryPathAndInput, trpc } from '@/lib/trpc'
import type { NextPageWithAuthAndLayout } from '@/lib/types'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import * as React from 'react'
import Link from 'next/link'

const POSTS_PER_PAGE = 20

function extractFirstImageUrl(contentHtml: string | null | undefined): string | null {
  if (!contentHtml) return null
  const match = contentHtml.match(/<img[^>]+src="([^">]+)"/)
  return match?.[1] || null
}

const Home: NextPageWithAuthAndLayout = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const currentPageNumber = router.query.page ? Number(router.query.page) : 1
  const utils = trpc.useContext()

  const feedQueryPathAndInput: InferQueryPathAndInput<'post.feed'> = [
    'post.feed',
    getQueryPaginationInput(POSTS_PER_PAGE, currentPageNumber),
  ]

  const feedQuery = trpc.useQuery(feedQueryPathAndInput, {
    enabled: status === 'authenticated',
  })

  if (status === 'loading') {
    return <div className="text-center mt-10">Loading session...</div>
  }

  if (!session) {
    return (
      <div className="text-center mt-10 text-red-500">
        You are not logged in.{' '}
        <Link href="/sign-in" legacyBehavior>
          <a className="underline">Sign in</a>
        </Link>
      </div>
    )
  }

  if (feedQuery.data) {
    return (
      <>
        <Head>
          <title>Beam</title>
        </Head>

        {feedQuery.data.postCount === 0 ? (
          <div className="text-center text-secondary border rounded py-20 px-10">
            There are no published posts to show yet.
          </div>
        ) : (
          <div className="flow-root">
            <ul
              className="-my-12 divide-y divide-primary"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '1rem',
              }}
            >
              {feedQuery.data.posts.map((post) => {
                const imageUrl = extractFirstImageUrl(post.contentHtml)
                if (!imageUrl) return null

                return (
                  <Link key={post.id} href={`/post/${post.id}`}>
                    <a
                      className="rounded-md shadow-sm"
                      style={{
                        background: `url(${imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        aspectRatio: '1 / 1',
                        display: 'block',
                      }}
                    />
                  </Link>
                )
              })}
            </ul>
          </div>
        )}

        <Pagination
          itemCount={feedQuery.data.postCount}
          itemsPerPage={POSTS_PER_PAGE}
          currentPageNumber={currentPageNumber}
        />
      </>
    )
  }

  if (feedQuery.isError) {
    return <div>Error: {feedQuery.error.message}</div>
  }

  return (
    <div className="flow-root">
      <ul className="-my-12 divide-y divide-primary">
        {[...Array(3)].map((_, idx) => (
          <li key={idx} className="py-10">
            <PostSummarySkeleton />
          </li>
        ))}
      </ul>
    </div>
  )
}

Home.auth = true

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
