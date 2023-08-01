import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <div className="
        flex flex-col w-40 h-12 relative
        sm:w-20 sm:h-6
      ">
        <Image src="/img/logo.png" alt="logo" fill style={
          {
            width: '100%',
            height: '100%',
          }
        } />
      </div>
    </Link>
  )
}

export default Logo