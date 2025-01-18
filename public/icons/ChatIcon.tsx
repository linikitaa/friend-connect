interface Props {
  className?: string
}

export const ChatIcon = ({ className }: Props) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="24px"
        height="24px"
      >
        <path d="M6,45.414V36H3c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h42c1.654,0,3,1.346,3,3v26c0,1.654-1.346,3-3,3H15.414L6,45.414z M3,6C2.448,6,2,6.448,2,7v26c0,0.552,0.448,1,1,1h5v6.586L14.586,34H45c0.552,0,1-0.448,1-1V7c0-0.552-0.448-1-1-1H3z" />
        <circle cx="16" cy="20" r="2" />
        <circle cx="32" cy="20" r="2" />
        <circle cx="24" cy="20" r="2" />
      </svg>
    </div>
  )
}
