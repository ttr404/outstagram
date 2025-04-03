import { GithubLogo } from '@/components/icons'
import * as React from 'react'

export function Footer() {
  return (
    <footer className="w-full py-6 text-sm text-secondary flex flex-col items-center gap-2">
      <div className="inline-flex items-center gap-1 text-sm">
        <span>Made with 💎 by</span>
        <a
          href="https://github.com/ttr404" // ✅ Replace with your GitHub profile
          target="_blank"
          rel="noreferrer"
          className="transition-colors text-secondary hover:text-primary font-medium underline"
        >
          Truman
        </a>
        <span>&</span>
        <a
          href="https://github.com/stacy920" // ✅ Replace with Stacy’s GitHub or homepage
          target="_blank"
          rel="noreferrer"
          className="transition-colors text-secondary hover:text-primary font-medium underline"
        >
          Stacy
        </a>
      </div>

      <a
        href="https://github.com/ttr404/outstagram" // ✅ Replace with your repo link
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 hover:text-primary"
      >
        <GithubLogo className="w-4 h-4" />
        <span>View on GitHub</span>
      </a>
    </footer>
  )
}
