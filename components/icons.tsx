import * as React from 'react'

type IconProps = React.ComponentProps<'svg'>

export function SearchIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.333 12.667A5.333 5.333 0 107.333 2a5.333 5.333 0 000 10.667zM14 14l-2.9-2.9"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HeartIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4.004c-.907 1.411-.686 3.31.5 4.496l4.793 4.793a1 1 0 001.414 0L13.5 8.5c1.186-1.186 1.407-3.085.5-4.496-1.38-2.147-4.584-2.123-6 0-1.416-2.123-4.62-2.147-6 0z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HeartFilledIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4.004c-.907 1.411-.686 3.31.5 4.496l4.793 4.793a1 1 0 001.414 0L13.5 8.5c1.186-1.186 1.407-3.085.5-4.496-1.38-2.147-4.584-2.123-6 0-1.416-2.123-4.62-2.147-6 0z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MessageIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 2.513a1 1 0 011 1V11.5a1 1 0 01-1 1H5.37a1 1 0 00-.65.24l-1.57 1.345a1 1 0 01-1.65-.76V3.514a1 1 0 011-1h11z"
        stroke="currentColor"
      />
    </svg>
  )
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.5 4.5L6.35355 7.64645C6.15829 7.84171 6.15829 8.15829 6.35355 8.35355L9.5 11.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.5 11.5l3.146-3.146a.5.5 0 000-.708L6.5 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function EditIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.333 2A1.886 1.886 0 0114 4.667l-9 9-3.667 1 1-3.667 9-9z"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TrashIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 4h12M5.333 4V2.667a1.333 1.333 0 011.334-1.334h2.666a1.333 1.333 0 011.334 1.334V4m2 0v9.333a1.333 1.333 0 01-1.334 1.334H4.667a1.334 1.334 0 01-1.334-1.334V4h9.334z"
        stroke="currentColor"
        strokeWidth={1.41667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BoldIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 2.667h5.333a2.667 2.667 0 110 5.333H4V2.667z"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8h6a2.667 2.667 0 010 5.333H4V8z"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ItalicIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.667 2.667h-6M9.333 13.333h-6M10 2.667L6 13.333"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ListIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.333 4H14M5.333 8H14M5.333 12H14M2 4h.007M2 8h.007M2 12h.007"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LinkIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.667 8.667a3.333 3.333 0 005.026.36l2-2A3.334 3.334 0 008.98 2.313l-1.147 1.14"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.333 7.333a3.334 3.334 0 00-5.026-.36l-2 2a3.333 3.333 0 004.713 4.714l1.14-1.14"
        stroke="currentColor"
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function XIcon(props: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 7l-11 11M6.5 7l11 11"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function EyeIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.627 7.449c.23.331.23.77 0 1.102C13.529 10.131 11.554 12.5 8 12.5s-5.53-2.368-6.627-3.949a.966.966 0 010-1.102C2.471 5.869 4.446 3.5 8 3.5s5.53 2.369 6.627 3.949z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path d="M10 8a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor" />
    </svg>
  )
}

export function EyeClosedIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.447 4.435C3.006 5.27 2.032 6.5 1.373 7.448a.967.967 0 000 1.103C2.471 10.131 4.446 12.5 8 12.5c1.429 0 2.602-.383 3.566-.943m1.65-1.286c.09-.09.178-.18.262-.271.463-.498.84-1.004 1.148-1.448a.967.967 0 00.001-1.103C13.529 5.869 11.554 3.5 8 3.5c-.511 0-.99.049-1.438.138"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 8a2 2 0 003.41 1.418L6.586 6.586A1.994 1.994 0 006 8z"
        fill="currentColor"
      />
      <path
        d="M13.5 13.5l-11-11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DotsIcon(props: IconProps) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 8a1 1 0 11-2 0 1 1 0 012 0zM9 8a1 1 0 11-2 0 1 1 0 012 0zM14 8a1 1 0 11-2 0 1 1 0 012 0z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MarkdownIcon(props: IconProps) {
  return (
    <svg
      width={26}
      height={16}
      viewBox="0 0 26 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_33_726)">
        <path
          d="M24.125.625H1.875c-.69 0-1.25.56-1.25 1.25v12.25c0 .69.56 1.25 1.25 1.25h22.25c.69 0 1.25-.56 1.25-1.25V1.875c0-.69-.56-1.25-1.25-1.25z"
          stroke="currentColor"
          strokeWidth={1.29808}
        />
        <path
          d="M3.75 12.25v-8.5h2.5l2.5 3.125 2.5-3.125h2.5v8.5h-2.5V7.375L8.75 10.5l-2.5-3.125v4.875h-2.5zm15.625 0l-3.75-4.125h2.5V3.75h2.5v4.375h2.5l-3.75 4.125z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_33_726">
          <path fill="#fff" d="M0 0H26V16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 300 171"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g
        transform="translate(0.000000,171.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path d="M252 1036 l-37 -34 -3 -164 c-3 -157 -2 -164 20 -198 14 -21 38 -40 58 -47 54 -17 284 -16 320 2 34 17 70 65 70 92 0 33 12 34 48 7 65 -51 149 -49 205 4 l27 26 29 -28 c52 -49 144 -52 186 -6 23 25 29 25 68 -4 61 -45 113 -45 167 0 l29 25 30 -33 29 -33 35 17 c31 15 37 15 47 2 20 -23 56 -16 83 16 14 17 29 30 34 30 4 0 21 -13 36 -30 33 -35 55 -37 89 -11 23 19 24 19 48 0 33 -25 52 -24 78 4 18 19 22 35 22 93 0 71 0 71 37 95 30 19 37 30 35 49 -6 47 -35 60 -133 60 -52 0 -97 -5 -109 -12 -14 -9 -25 -9 -42 -1 -42 21 -77 24 -112 9 -21 -9 -38 -11 -47 -5 -8 6 -61 9 -119 8 -58 -1 -121 1 -140 5 -28 5 -46 1 -82 -18 -46 -24 -46 -24 -64 -5 -13 14 -25 18 -42 14 -41 -10 -52 -29 -53 -94 -2 -79 -19 -91 -19 -13 0 97 -52 141 -104 89 l-24 -24 -42 25 c-61 36 -118 34 -176 -6 -24 -18 -47 -32 -49 -32 -3 0 -5 16 -5 35 0 50 -23 89 -64 109 -27 12 -66 16 -180 16 l-146 0 -38 -34z m374 -27 c17 -19 18 -36 17 -181 -3 -217 5 -208 -193 -208 -134 0 -150 2 -174 21 l-26 20 0 165 c0 217 -12 204 198 204 148 0 160 -1 178 -21z m291 -113 c27 -29 33 -44 33 -81 0 -37 -6 -52 -33 -81 -78 -85 -210 -36 -210 80 0 79 55 129 133 122 35 -3 51 -11 77 -40z m123 -44 c0 -96 7 -112 52 -112 38 0 51 34 46 125 -3 66 -2 70 20 73 22 3 22 1 22 -96 0 -100 0 -100 -31 -126 -40 -34 -88 -34 -126 -2 -27 23 -28 29 -31 125 l-4 101 26 0 26 0 0 -88z m344 67 c49 -38 17 -73 -35 -37 -29 22 -59 15 -59 -12 0 -18 6 -22 65 -35 104 -23 75 -145 -34 -145 -28 0 -91 41 -91 60 0 16 43 19 58 4 21 -22 77 -15 77 10 0 15 -11 23 -48 32 -62 16 -77 29 -77 69 0 41 38 75 85 75 18 0 44 -9 59 -21z m214 -8 c3 -18 -2 -21 -32 -21 l-36 0 0 -100 c0 -97 -1 -100 -22 -100 -23 0 -23 2 -20 100 l3 100 -34 0 c-29 0 -33 3 -31 23 1 12 3 22 3 22 141 0 166 -4 169 -24z m150 13 c12 -8 22 -21 22 -28 0 -21 -29 -28 -51 -12 -26 17 -59 9 -59 -14 0 -10 20 -35 45 -56 36 -29 43 -39 34 -50 -19 -23 -36 -16 -84 29 -53 51 -58 85 -20 122 28 29 79 33 113 9z m262 -11 c0 -20 -5 -23 -40 -23 l-40 0 0 -100 0 -100 -26 0 -25 0 2 98 2 97 -37 3 c-29 3 -36 7 -36 25 0 21 4 22 100 22 97 0 100 -1 100 -22z m-182 -69 c19 -13 21 -21 16 -57 -4 -23 -8 -44 -10 -46 -6 -6 -63 50 -76 72 -7 14 -5 22 9 33 23 18 34 17 61 -2z m-228 -65 c0 -10 -7 -19 -15 -19 -15 0 -21 31 -9 43 11 10 24 -3 24 -24z m46 -54 c7 -18 -13 -45 -33 -45 -17 0 -27 24 -19 45 7 20 45 19 52 0z m152 3 c19 -19 15 -48 -7 -48 -24 0 -45 25 -37 45 7 18 27 20 44 3z" />
        <path d="M540 950 c0 -28 3 -30 35 -30 32 0 35 2 35 30 0 28 -3 30 -35 30 -32 0 -35 -2 -35 -30z" />
        <path d="M413 915 c-81 -35 -69 -148 18 -170 61 -15 123 57 100 116 -20 53 -69 75 -118 54z m65 -47 c39 -39 -12 -103 -57 -72 -38 27 -22 84 24 84 12 0 26 -5 33 -12z" />
        <path d="M771 864 c-28 -35 -26 -69 4 -99 48 -48 125 -16 125 51 0 69 -87 101 -129 48z m80 -30 c9 -11 10 -20 3 -32 -15 -23 -29 -25 -48 -7 -12 12 -13 21 -6 36 13 23 33 25 51 3z" />
        <path d="M2122 954 c-23 -16 -107 -173 -123 -228 -7 -24 -5 -34 13 -53 29 -31 56 -29 90 9 38 43 84 42 133 -1 20 -17 45 -31 55 -31 20 0 54 27 61 48 2 6 25 12 52 13 40 2 51 -2 77 -26 26 -25 39 -30 90 -31 66 -1 95 18 102 66 2 19 10 26 31 28 24 3 27 0 27 -26 0 -29 35 -72 59 -72 6 0 23 11 36 25 24 23 25 31 25 134 0 101 -2 112 -23 137 -28 32 -55 29 -100 -10 l-28 -25 -43 31 c-37 26 -47 28 -65 18 -23 -12 -45 -56 -37 -75 2 -7 1 -18 -4 -25 -6 -9 -12 -5 -24 17 -25 49 -66 93 -87 93 -34 0 -68 -30 -93 -83 -42 -86 -41 -86 -69 -30 -54 106 -101 135 -155 97z m139 -146 c33 -66 59 -121 57 -123 -2 -2 -15 -1 -30 2 -17 3 -31 15 -38 34 -12 28 -15 29 -82 29 -68 0 -70 -1 -81 -29 -7 -19 -20 -31 -36 -34 -14 -3 -27 -4 -29 -2 -2 1 23 59 56 127 59 125 59 125 90 120 29 -4 37 -14 93 -124z m249 10 c30 -67 56 -124 58 -128 1 -4 -11 -5 -27 -2 -21 3 -33 12 -41 33 -12 29 -13 29 -96 29 l-84 0 47 95 c65 131 72 129 143 -27z m143 77 c21 -25 41 -45 45 -45 4 1 23 21 42 45 19 25 43 45 52 45 16 0 18 -13 18 -128 0 -127 0 -129 -22 -127 -22 2 -23 5 -19 83 1 45 0 82 -3 82 -4 0 -21 -16 -38 -36 l-32 -36 -33 38 -33 39 3 -82 c1 -46 -1 -83 -5 -83 -39 0 -38 -4 -38 125 0 144 5 150 63 80z" />
        <path d="M2144 844 l-21 -44 44 0 c23 0 43 2 43 4 0 2 -10 22 -23 44 l-23 40 -20 -44z" />
        <path d="M2409 835 l-16 -35 37 0 37 0 -16 35 c-9 19 -18 34 -21 34 -3 0 -12 -15 -21 -34z" />
      </g>
    </svg>
  )
}

export function GithubLogo(props: IconProps) {
  return (
    <svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 0C3.806 0 0 3.668 0 8.192c0 3.62 2.436 6.69 5.813 7.774.425.075.58-.178.58-.395 0-.195-.007-.84-.01-1.525-2.366.496-2.865-.966-2.865-.966-.386-.947-.943-1.199-.943-1.199-.772-.508.058-.498.058-.498.853.058 1.303.844 1.303.844.758 1.253 1.988.89 2.473.681.077-.53.297-.89.54-1.095-1.888-.207-3.873-.91-3.873-4.049 0-.894.332-1.625.876-2.199-.088-.206-.38-1.04.082-2.168 0 0 .714-.22 2.339.84A8.435 8.435 0 018.5 3.961c.722.004 1.45.095 2.13.276 1.622-1.06 2.335-.84 2.335-.84.462 1.129.171 1.962.083 2.168.545.574.875 1.305.875 2.2 0 3.146-1.989 3.838-3.882 4.041.305.255.577.753.577 1.517 0 1.096-.01 1.979-.01 2.248 0 .218.153.474.584.393C14.568 14.88 17 11.81 17 8.192 17 3.668 13.194 0 8.5 0zM3.184 11.67c-.02.04-.086.053-.146.025-.062-.027-.096-.082-.076-.123.018-.042.084-.054.146-.026.062.027.097.083.076.124zm.418.36c-.04.036-.12.019-.174-.038-.055-.058-.066-.134-.025-.17.042-.037.119-.02.175.037.055.058.066.134.024.17zm.287.46c-.053.034-.138.002-.19-.071-.052-.073-.052-.16 0-.196.054-.035.137-.003.19.07.053.073.053.16 0 .196zm.485.532c-.047.05-.146.036-.219-.031-.074-.066-.095-.16-.048-.21.047-.05.147-.035.22.032.074.066.096.16.047.21zm.627.18c-.021.064-.117.093-.213.066-.096-.028-.159-.103-.14-.168.02-.065.117-.095.213-.066.096.028.16.103.14.168zm.713.076c.002.068-.08.124-.18.125-.102.002-.184-.052-.185-.119 0-.068.08-.124.181-.125.101-.002.184.052.184.12zm.701-.026c.012.066-.058.134-.159.152-.098.017-.19-.023-.202-.089-.012-.067.06-.135.158-.152.1-.017.19.022.203.09z"
        fill="currentColor"
      />
    </svg>
  )
}

export function SpinnerIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        className="opacity-25"
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={4}
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}
