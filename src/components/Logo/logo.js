import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
        <Image src="/img/logo.png" alt="logo" width={160} height={48} />
    </Link>
  )
}

export default Logo