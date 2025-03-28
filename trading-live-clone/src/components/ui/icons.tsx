import React from 'react';

export const Icons = {
  Logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      {...props}
    >
      <path
        d="M31.5415 8.31568C29.5059 3.88522 24.9682 0.821777 19.7322 0.821777C12.371 0.821777 6.389 6.80375 6.389 14.165C6.389 17.2285 7.41661 20.0457 9.15952 22.3155V30.1768C9.15952 31.0902 10.0729 31.5413 10.7797 30.9811L15.024 27.6406L17.3994 30.9811C17.959 31.6874 18.9866 31.6874 19.5462 30.9811L21.9216 27.6406L26.166 30.9811C26.8728 31.5413 27.7861 31.0902 27.7861 30.1768V20.5526C30.1615 17.2285 31.8488 9.23863 31.5415 8.31568Z"
        fill="#E44F2E"
      />
      <path
        d="M9.15952 14.1651C9.15952 8.3158 13.8831 3.5923 19.7323 3.5923C23.359 3.5923 26.5296 5.68196 28.1054 8.77046C27.019 8.77046 14.4644 8.77046 14.4644 8.77046C13.551 8.77046 12.8442 9.47724 12.8442 10.3907V25.0768C10.6406 22.0133 9.15952 18.248 9.15952 14.1651Z"
        fill="white"
      />
    </svg>
  ),
  SearchIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  HomeIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  VideoIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  ),
  BookIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  ),
  GraduationCapIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  ),
  AwardIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  CalendarIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  ),
  UsersIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  HotTag: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="14" rx="7" fill="#E44F2E" />
      <path
        d="M5.09766 10V4.16016H7.29297C7.96615 4.16016 8.47005 4.31706 8.80469 4.63086C9.14206 4.94466 9.31074 5.38607 9.31074 5.9541C9.31074 6.25944 9.2373 6.52767 9.09043 6.75879C8.94355 6.98991 8.7308 7.16302 8.45215 7.27812C8.77956 7.37057 9.03418 7.54938 9.21602 7.81445C9.39785 8.0768 9.48877 8.3805 9.48877 8.72559C9.48877 9.31673 9.30329 9.77975 8.93232 10.1147C8.56136 10.4496 8.0415 10.6165 7.37275 10.6147H5.09766V10ZM6.18652 6.73096H7.23242C7.52415 6.73096 7.74463 6.66812 7.89385 6.54243C8.04307 6.41675 8.11768 6.23263 8.11768 5.99009C8.11768 5.72501 8.04478 5.5259 7.89897 5.39277C7.75317 5.25964 7.52244 5.19307 7.20679 5.19307H6.18652V6.73096ZM6.18652 7.73096V9.57178H7.33313C7.6488 9.57178 7.89385 9.49546 8.06836 9.34282C8.24561 9.18746 8.33423 8.96186 8.33423 8.66602C8.33423 8.0387 8.00854 7.73096 7.35718 7.73096H6.18652ZM14.1416 7.75H11.6924V9.57178H14.5483V10.6147H10.5986V4.16016H14.5355V5.2083H11.6924V6.71826H14.1416V7.75ZM19.4326 10H18.3389L16.0559 5.85059V10H14.9621V4.16016H16.0559L18.3438 8.31982V4.16016H19.4326V10Z"
        fill="white"
      />
    </svg>
  ),
  NewTag: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="32"
      height="14"
      viewBox="0 0 32 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="32" height="14" rx="7" fill="#3CD099" />
      <path
        d="M6.06836 10L4.67285 5.24463L4.61914 5.24463L3.22852 10H2.10449L0.366211 4.16016H1.52637L2.69215 8.9541H2.74098L4.12158 4.16016H5.20557L6.58127 8.9541H6.63498L7.80078 4.16016H8.96094L7.19238 10H6.06836ZM13.0205 10H9.61816V4.16016H13.0205V5.19795H10.707V6.46875H12.8486V7.50166H10.707V8.96191H13.0205V10ZM14.9477 5.19795V6.71826H16.6211C16.917 6.71826 17.1506 6.65169 17.3218 6.51855C17.493 6.38542 17.5786 6.19958 17.5786 5.96094C17.5786 5.73096 17.493 5.54854 17.3218 5.41357C17.1506 5.27649 16.917 5.20795 16.6211 5.20795H14.9477V5.19795ZM14.9477 7.75117V10H13.8587V4.16016H16.7676C17.4115 4.16016 17.9101 4.3201 18.2637 4.63999C18.6198 4.95988 18.7979 5.38607 18.7979 5.91846C18.7979 6.46484 18.6198 6.89616 18.2637 7.21216C17.9101 7.52816 17.4115 7.68616 16.7676 7.68616L14.9477 7.75117Z"
        fill="white"
      />
    </svg>
  ),
  EyeIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  PlayIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  ClockIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  ArrowRightIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  // Add any other icons you need here
};
